pipeline {
  agent {
    kubernetes {
      label 'node-erbium'
    }
  }
  stages {
    stage('Prepare') {
      steps {
        script {
          env.GIT_COMMIT = sh(script: 'git rev-parse HEAD', returnStdout: true).trim()
        }
        container('vault') {
          script {
            env.TUNNEL_IDENTIFIER = sh(script: 'echo ${GIT_COMMIT}-${BUILD_NUMBER}', returnStdout: true)
            env.GITHUB_TOKEN = sh(script: 'vault read -field=value secret/ops/token/github', returnStdout: true)
            env.CODECOV_TOKEN = sh(script: 'vault read -field=molgenis-app-lifecycle secret/ops/token/codecov', returnStdout: true)
            env.SAUCE_CRED_USR = sh(script: 'vault read -field=username secret/ops/token/saucelabs', returnStdout: true)
            env.SAUCE_CRED_PSW = sh(script: 'vault read -field=value secret/ops/token/saucelabs', returnStdout: true)
            env.REGISTRY_CRED_USR = sh(script: 'vault read -field=username secret/ops/account/nexus', returnStdout: true)
            env.REGISTRY_CRED_PSW = sh(script: 'vault read -field=password secret/ops/account/nexus', returnStdout: true)
          }
        }
        container('node') {
          startSauceConnect()
        }
      }
    }
    stage('Build: [ pull request ]') {
      when {
        changeRequest()
      }
      steps {
        container('node') {
          sh "yarn install"
          sh "yarn unit"
          sh "yarn e2e --env ci_chrome,ci_safari,ci_ie11,ci_firefox"
        }
      }
      post {
        always {
          container('node') {
            fetch_codecov()
            sh "./codecov -c -K -C ${GIT_COMMIT}"
          }
        }
      }
    }
    stage('Build: [ master ]') {
      when {
        branch 'master'
      }
      steps {
        milestone 1
        container('node') {
          sh "yarn install"
          sh "yarn unit"
          sh "yarn e2e --env ci_chrome,ci_safari,ci_ie11,ci_firefox"
        }
      }
      post {
        always {
          container('node') {
            fetch_codecov()
            sh "./codecov -c -K -C ${GIT_COMMIT}"
            sh "rm codecov"
          }
        }
      }
    }
    stage('Release: [ master ]') {
      when {
        branch 'master'
      }
      environment {
        ORG = 'molgenis'
        APP_NAME = 'molgenis-app-lifecycle'
        REGISTRY = 'registry.molgenis.org'
      }
      steps {
        timeout(time: 30, unit: 'MINUTES') {
          script {
            env.RELEASE_SCOPE = input(
              message: 'Do you want to release?',
              ok: 'Release',
              parameters: [
                choice(choices: 'patch\nminor\nmajor', description: '', name: 'RELEASE_SCOPE')
              ]
            )
          }
        }
        milestone 2
        container('node') {
          sh "git remote set-url origin https://${GITHUB_TOKEN}@github.com/${ORG}/${APP_NAME}.git"

          sh "git checkout -f ${BRANCH_NAME}"

          sh "npm config set unsafe-perm true"
          sh "npm version ${RELEASE_SCOPE} -m '[ci skip] [npm-version] %s'"

          sh "git push --tags origin ${BRANCH_NAME}"
        }
      }
    }
  }
  post {
    always {
      container('node') {
        sh "daemon --name=sauceconnect --stop"
      }
    }
    success {
      hubotSend(message: 'Build success', status:'INFO', site: 'slack-pr-app-team')
    }
    failure {
      hubotSend(message: 'Build failed', status:'ERROR', site: 'slack-pr-app-team')
    }
  }
}

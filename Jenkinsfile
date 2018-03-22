pipeline {
  agent any

  environment {
    APP_NAME = "molgenis-app-lifecycle"
    APPSTORE_PATH = "/var/www/html/appstore/${APP_NAME}/"
  }
  stages {
    stage('Preparation') {
      steps {
        // Clean workspace
        cleanWs()
        // Get code from github.com
        checkout scm
      }
    }
    stage('Build UI-component') {
      steps {
        echo "Build the MOLGENIS Vue forms"
        sh "npm install yarn"
        sh "yarn install"
        sh "yarn build"
      }
    }
    stage('Test UI-component') {
      steps {
        echo "Build VUE-forms"
        sh "yarn test"
      }
    }
    stage('Publish App to appstore.molgenis.org') {
      steps {
        script {
          def TAG_NAME = binding.variables.get("TAG_NAME")
          if (TAG_NAME != null) {
            sshagent(credentials: ['molgenis-release']) {
              echo "Publish App to appstore.molgenis.org"
              sh "tar -cvzf ${APP_NAME}-${TAG_NAME}.tar.gz dist"
              sh "ssh molgenis@appstore.molgenis.org -c 'mkdir -p ${APPSTORE_PATH}/${TAG_NAME}/'"
              sh "scp ${APP_NAME}-${TAG_NAME}.tar.gz molgenis@appstore.molgenis.org:${APPSTORE_PATH}/${TAG_NAME}/"
            }
          } else {
            echo "No tags are pushed so no releases are triggered"
          }
        }
      }
    }
  }
   post {
    success {
      notifySuccess()
    }
    failure {
      notifyFailed()
    }
   }
}

def notifySuccess() {
  slackSend (channel: '#releases', color: '#00FF00', message: "SUCCESSFUL: Job - <${env.BUILD_URL}|${env.JOB_NAME}> | #${env.BUILD_NUMBER}")
}
def notifyFailed() {
  slackSend (channel: '#releases', color: '#FF0000', message: "FAILED: Job - <${env.BUILD_URL}|${env.JOB_NAME}> | #${env.BUILD_NUMBER}")
}

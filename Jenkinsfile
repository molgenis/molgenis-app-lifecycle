pipeline {
  agent any

  environment {
    APP_NAME = "molgenis-app-lifecycle"
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
        echo "Publish App to appstore.molgenis.org"

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

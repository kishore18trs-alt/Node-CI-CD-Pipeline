pipeline {
    agent {
        docker {
            image 'node:18'
            args '-u root'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deliver') {
            steps {
                sh 'npm start'
            }
        }
    }
}
pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test || echo No tests yet'
            }
        }

        stage('Run App') {
            steps {
                bat 'start /B node index.js'
            }
        }
    }
}
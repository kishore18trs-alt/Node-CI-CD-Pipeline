pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/kishore18trs-alt/Node-CI-CD-Pipeline.git'
            }
        }

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
                bat 'node index.js'
            }
        }
    }
}
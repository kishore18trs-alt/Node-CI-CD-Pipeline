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
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test || echo "No tests yet"'
            }
        }

        stage('Run App') {
            steps {
                sh 'node index.js'
            }
        }
    }
}
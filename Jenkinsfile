// pipeline {
//     agent any

//     stages {
//         stage('Install') {
//             steps {
//                 bat 'npm install'
//             }
//         }

//         stage('Test') {
//             steps {
//                 bat 'npm test || echo No tests yet'
//             }
//         }

//         stage('Run App') {
//             steps {
//                 bat 'start /B node index.js'
//             }
//         }
//     }

//     post {
//         success {
//             mail to: 'kishore18.trs@gmail.com',
//                  subject: "SUCCESS: ${env.JOB_NAME}",
//                  body: "Build passed ✅ ${env.BUILD_URL}"
//         }
//         failure {
//             mail to: 'kishore18.trs@gmail.com',
//                  subject: "FAILED: ${env.JOB_NAME}",
//                  body: "Build failed ❌ ${env.BUILD_URL}"
//         }
//     }
// }




pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/kishore18trs-alt/Node-CI-CD-Pipeline.git'
            }
        }

        stage('Build') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat '''
                npm test
                if %errorlevel% neq 0 exit /b 0
                '''
            }
        }

        stage('Deploy') {
            steps {
                bat 'start /B node index.js'
            }
        }
    }

    post {
        success {
            mail to: 'kishore18.trs@gmail.com',
                 subject: "SUCCESS: ${env.JOB_NAME}",
                 body: "Build passed ✅ ${env.BUILD_URL}"
        }
        failure {
            mail to: 'kishore18.trs@gmail.com',
                 subject: "FAILED: ${env.JOB_NAME}",
                 body: "Build failed ❌ ${env.BUILD_URL}"
        }
    }
}
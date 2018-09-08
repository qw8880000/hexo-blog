pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
                sh '''
                    echo "Multiline shell steps works too"
                    ls -lah
                '''
            }
        }
        stage('hello') {
            steps {
                sh 'npm --version'
                sh '''
                    echo "Multiline shell steps works too"
                    ls -lah
                '''
            }
        }
    }
}

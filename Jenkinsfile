pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                //sh 'make' (1)
                uftScenarioLoad archiveTestResultsMode: 'ALWAYS_ARCHIVE_TEST_REPORT', fsUftRunMode: 'Normal', testPaths: '''D:\\ALM Octane Demo\\Test Web GUI'''
            }
            
        }
       
        stage('Test') {
            steps {
                //sh 'make' (1)
                uftScenarioLoad archiveTestResultsMode: 'ALWAYS_ARCHIVE_TEST_REPORT', fsUftRunMode: 'Normal', testPaths: '''${WORKSPACE}\\Test Web GUI'''
            }
        }
    }
    
   
}

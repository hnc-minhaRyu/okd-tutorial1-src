library identifier: "pipeline-library@v1.5",
retriever: modernSCM(
  [
    $class: "GitSCMSource",
    remote: "https://github.com/redhat-cop/pipeline-library.git"
  ]
)

// The name you want to give your Spring Boot application
// Each resource related to your app will be given this name
appName = "testblog"

pipeline {
  agent {
    node {
      label 'nodejs' 
    }
  }
  options {
    timeout(time: 20, unit: 'MINUTES') 
  }
  stages {
    stage("Checkout") {
        steps {
            checkout scm
        }
    }
    stage('Build') {
      steps {
          sh 'npm install'
          sh 'CI=false npm run build'
      }
    }    
    stage("Docker Build") {
        steps {
            // This uploads your application's source code and performs a binary build in OpenShift
            // This is a step defined in the shared library (see the top for the URL)
            // (Or you could invoke this step using 'oc' commands!)           
            binaryBuild(buildConfigName: appName, buildFromPath: ".")
        }
    }
    stage("Update Tag") { 
      steps {
        checkout([$class: 'GitSCM',
                        branches: [[name: '*/master' ]],
                        extensions: scm.extensions,
                        userRemoteConfigs: [[
                            url: 'git@github.com:blackwhale-testuser/okd-tutorial1-gitops.git',
                            credentialsId: 'jenkins-ssh-private',
                        ]]
                ])
        sshagent(credentials: ['jenkins-ssh-private']){
            sh("""
                #!/usr/bin/env bash
                set +x
                export GIT_SSH_COMMAND="ssh -oStrictHostKeyChecking=no"
                git config --global user.email "test@gmail.com"
                git checkout master
                cd okd-deploy
                cp --f ~/base/deployment-sample.yaml temp.yaml                
                sed -i 's/BUILD_NUMBER/1.0.0.1/' temp.yaml 
                cat temp.yaml
                cp --f temp.yaml testblog-deployment.yaml 
                git commit -a -m "updated the image tag"
                git push
            """)
        }
       }
    }
  }
} 

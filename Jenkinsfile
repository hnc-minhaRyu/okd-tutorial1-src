library identifier: "pipeline-library@v1.5",
retriever: modernSCM(
  [
    $class: "GitSCMSource",
    remote: "https://github.com/redhat-cop/pipeline-library.git"
  ]
)

// OKD의 Buildconifg의 이름과 일치시켜야 한다. 
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
                            url: 'git@github.com:hnc-minhaRyu/okd-tutorial1-gitops.git',
                            credentialsId: 'jenkins-ssh-private',
                        ]]
                ])
        sshagent(credentials: ['jenkins-ssh-private']){
            sh("""
                #!/usr/bin/env bash
                set +x
                export GIT_SSH_COMMAND="ssh -oStrictHostKeyChecking=no"
                git config --global user.email "blackwhale-testuser@hancom.com"
                git checkout master
                cp --f base/deployment-sample.yaml okd-deploy/testblog-deployment.yaml 
                cd okd-deploy
                sed -i 's/MY_BUILD_TAG/rev.$BUILD_NUMBER/' testblog-deployment.yaml  
                cat testblog-deployment.yaml 
                git commit -a -m "updated the image tag : {$BUILD_NUMBER}"
                git push
            """)
        }
       }
    }
  }
} 

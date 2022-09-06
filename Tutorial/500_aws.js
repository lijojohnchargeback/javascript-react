/**
 * clodtechnology = cloud computing is technology where resource provide to user throught interent
 * for eg: a website which hosted in USA and you have access in India and manage it.
 * Advantage
 *   data-privacy and security
 *   No maintains worries - eniter hardware they will take care of
 *   faster data recovery :Natural calamity
 *   Scale Dynamically
 *   Reduced cost
 * regiion
 * availabilyzone 
 * Edge location 
 * aws is cloud provide which they provide many services
 * 
 *       IAM = Identity and accessmanagement
 *       Root account
 *       Users are different users 
 *       Groups are team = develoeprs, operations etc. Group only contains users and not group. a user group containe multiple groups
 *       It is a glabal service
 *       Policies : policies are assign to user and gorup 
 *       roles = are giving permision to ec2 and lamda function
 * password change
 * Multi-factor authentication (MFA)
 cloud shell also
   Iam security tools
 *  Ec2 =  web hosting 
 *  Amazon Relatioanl Database  Amazon Auora, Maria DB, Mysal
 *  Storage = S3
 *            storage place image
 *            create bucket and upload image
 *  Cloud front
 *  IAM Idetity access  = create permision
 *  Aws Cloudfrantation
 * 
 *  IAM(identy access managenment)
 *     group - a collection group. it can many group
 *     users - new user
 *     roles - 
 *     policies - who has access and what they can do. It define           permision
 *  securly authorizing users account
 *    principle,authentication,request,authorization
 *   action,resourse
 *  
 *   Devops 
 *      Develpment and operatonal tool. It is methodoly planning creating, verifing and package develpment state and releasing configuring and monitoring operatonal stage. It is set of tool which help  orginzation to buid website from develpment stage to operational stage
 *  Features
 *    Fully managed service and build for scale, automaction, pay as you go
 *  
 *  Codecommit, Codebuild, Code deploy, Code piplie
 *  Codecommit = it is version tool similar to github and bitbucket. 
 *  Codebuild = this is for compile and test your code. 
 *  codedeploy = This is automated deployment tool in aws 1)automated deployment, 2)minimize downtime, 3)centerlized controll, easy to adopt
 *  Codepiple = continouse intgration tool which is fully managed by aws
 *            
 *   compute
 *      Amazon ec2:  
 *          Easy ec2 best plat form to scale up application
 *          autoloading, security, storage, database
 *          a  lot flexibility
 *          we can pick up what kind of platform you want
 *           loadbalacer =Load balancer will targetgroup- then assingment process based on metric then ec2
 * 
 *      Lightsail : amazon light sail is similar vps and all components are pre configured. But benefit it auto scalable. This feature will not be availabe in lightsail
 *      best for developer. it best for company who konws preconfiged require ment
 *     Lamda:
 *          This will is serverless. Low flexibility and low mainitanace
 *          certain featurea auto configated like aut balance. Lamda by number of invokation
 *      Batch:
 *          aws batch will take care code and run in the form code. it is in the form for jobs
 *      Elastic Bean Stack
 *          This is for developers less configuration. less set up tiem
 * 
 *
 *     
 *     
 *     
 *    
 *AWS WorkSpace
 * Amazon WorkSpaces enables you to provision virtual, cloud-based Microsoft Windows or Amazon Linux desktops for your users, known as WorkSpaces. WorkSpaces eliminates the need to procure and deploy hardware or install complex software
 * Amazon WorkSpaces supports two protocols: PCoIP and WorkSpaces Streaming Protocol (WSP). 
 *     WSP used for global purpose PCoIP used for heigher 
 * Developer tools aws
 *    Code star = it is not used
 *    Code commit - it is repoisitory/version controller like github
 * AWS CodeCommit is a version control service hosted by Amazon Web Services that you can use to privately store and manage assets (such as documents, source code, and binary files) in the cloud
 *    CodeArtifaction = AWS CodeArtifact is a fully managed software artifact repository that makes it for the organization of any size to securely store, publish and share packages used in their software development process. AWS CodeArtifact works with commonly used packages managers and builds tools such as Maven and Gradle(Java), npm and yarn(JavaScript), pip and twine(Python), making it easy to integrate CodeArtifact into your existing development workflows
 *   CodeBuild = AWS CodeBuild is a fully managed build service in the cloud. CodeBuild compiles your source code, runs unit tests, and produces artifacts that are ready to deploy. CodeBuild eliminates the need to provision, manage, and scale your own build servers. It provides prepackaged build environments for popular programming languages and build tools such as Apache Maven, Gradle, and more. You can also customize build environments in CodeBuild to use your own build tools. CodeBuild scales automatically to meet peak build requests.
 *CodeDeploy: CodeDeploy is a deployment service that automates application deployments to Amazon EC2 instances, on-premises instances, serverless Lambda functions, or Amazon ECS services.
 AWS CodePipeline is a continuous delivery service you can use to model, visualize, and automate the steps required to release your software. You can quickly model and configure the different stages of a software release process. CodePipeline automates the steps required to release your software changes continuously. 
 AWS Cloud9 :AWS Cloud9 is an integrated development environment, or IDE.

The AWS Cloud9 IDE offers a rich code-editing experience with support for several programming languages and runtime debuggers, and a built-in terminal. It contains a collection of tools that you use to code, build, run, test, and debug software, and helps you release software to the cloud.
AWS CloudShell is a browser-based, pre-authenticated shell that you can launch directly from the AWS Management Console. You can run AWS CLI commands against AWS services using your preferred shell (Bash, PowerShell, or Z shell). And you can do this without needing to download or install command line tools
AWS X-Ray is a service that collects data about requests that your application serves, and provides tools you can use to view, filter, and gain insights into that data to identify issues and opportunities for optimization. For any traced request to your application, you can see detailed information not only about the request and response, but also about calls that your application makes to downstream AWS resources, microservices, databases and HTTP web APIs. It helps developers analyze and debug application.
  - Distribution tracing = This is a method to trace perforamace of api. failutre
  - Performance montitoring
  - This is good app optimizaton
    Datadog,New Relic, SFX,lumigo
AWS Fault Injection Simulator:
  AWS Fault Injection Simulator (AWS FIS) is a managed service that enables you to perform fault injection experiments on your AWS workloads. Fault injection is based on the principles of chaos engineering. These experiments stress an application by creating disruptive events so that you can observe how your application responds. You can then use this information to improve the performance and resiliency of your applications so that they behave as expected


  ssh -i pum file ubuntu@ip address
  sudo apt update && sudo apt upgrade -y
  ssh -i C:\Users\lijoj\Downloads\onebook.pem ubuntu@13.233.165.209
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

ssh -i C:\Users\lijoj\Downloads\india.pem ubuntu@3.111.42.167
ubuntu@ip-3.111.42.167:~$ pm2 startup


ssh root@ip
SAhara123s
adduser = new user to getride of root
usermod -aG sudo lijo
sudo su lijo
sudo vim /etc/ssh/sshd_config
permit root user no
https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04






    



Deployment preparation
   Need to change process env
   .env file should add git ignore list
   npm start should node app.js. Remove nodemon
   push github
   Front -end
   
AWS Account
   login account
   ec2 instance creation
   how to connect to ec2 using terminal
AWS Server 
   sudo apt update && sudo apt upgrade -y
   install nodejs 

   curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -
   sudo apt-get install -y nodejs
   create new folder in root directory
   clone server and client directory
   sudo npm install
   React app(front-app) - sudo npm run build
   add enviroment variable
   sudo touch dot.env
   Install pm2
   sudo  npm install pm2 -g
   pm2 kill
   pm2 start  file.js
   pm2 save
   Pm2 auto start after reboot
     ubuntu@ip-172-31-20-1:~$ pm2 startup
     [PM2] Init System found: systemd
     [PM2] To setup the Startup Script, copy/paste the following command:
     sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu
   Install nginx
     sudo apt install nginx -y
     sudo systemctl enable nginx
     cd /etc/nginx/sites-available
     server_name add your domain name and ip address
     remove default 80 port
      root /home/ubuntu/apps/yelp-app/client/build; react
     location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
    location /api {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
   
    restart nginx
     sudo systemctl restart nginx
     sudo nginx -t
    pm2 kill
    start backnd = pm2 start index.js
    start frontend = pm2 start npm -- start
Domain Config 
     Route 53 
     Create DNS Manament
     Create new record
        A -Routes traffic to IP4 address and ip
        www.domain = CName domain name
     Add dns to godaddy
 SSL Certificate
    sudo snap install --classic certbot
    sudo ln -s /snap/bin/certbot /usr/bin/certbot
    sudo certbot --nginx



  


  DEV OOPS
     Dev Team : 
          arthitech, delvelopers, testers, build team
     It is collabration of development and operation team
  Requiremnt = Business manager
  Design  = Architech
  Coding = Developers
  Testing = 
  Push code to Product

  Dev
  Testing
  Production

 */

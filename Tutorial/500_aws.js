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


  ssh -i pum file ubuntu@ip address /instead of ubuntu ec2-user
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
     ubuntu@18.191.100.128:~$ pm2 startup
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


AWS IAM
   Types of security
      1)IAM(Identify Access Management)
        This is take care of access management of Organization user
      2)Amazon Guard Duty
        Amazon log - This will keep the record of all logs
      3)Amazon Macle
        It is for matchine learning. Also used pattern matching
      4)AWS Config
        It monitor configuration accross the services
      5)Cloud trail
        It is logs tracker every api call are made    
      

   IAM
 

 

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


1) Region and zone
  A)Region
    - a  region means clusted data center
    How to choose a region
      - compliance - govermant complains
      - proximate - most of the users india you can not host in usa
      - all region will not all service
      - pricing - it vary from region to region
   B)Availabilty zone
        Each availabilty zone is one more data center with redunt power, networking and connectiviy
       - Each region will availability zone from 2-6
       - These zone help full something happend to availabity zone number 1
       - They are connnected high networking bandwith and ultra low networking 
   C) Edge location
        Content delived to end users with low latency
        
        Global services 
           IAM, Router 53,Cloud front (CDN), WAF
        Region scoped
           EC2, Elastic beanstak, lamda, Rekgion
2)IAM
    AWS(Identify Access Management) safeguard access to AWS services and resourses and create and manager users and groups and give permisson grant or deny services
       Benefit of IAM
       -scalability on security data 
       -Reduce human config
       -Automation reduce human config error
       
     Working of IAM
       principal
       authentication = who are you?
       Request 
       Authorization
       Actions
       Resources
     Component users
       AWS account user 

     -Root account. You should not use account. create user I am
    - Group -> group is associated many users and attach policy with the group
      User - operator => user always attach to a group. group attach to policy
      User - can directly attached to the policy and he will be out of the group
      Policy - policy is json format which describe what allowed and what to deny
            - it is define accessmanagment
            - it follow least permissoin
            consist of 
               -version 2012-10-17
               id 
               statment 
                    sid:identfier
                    effect = allow/deny
                    principle = arn roo
                    actoin  = list of policie allow or deny
                    condtion = when policy effective from
                    resource = list of resource action applied to
   MFA(Password policy)
      strong password policy secure your account
    -set minimu letter
    -require specific character types
      -includding upper case letter
      - lower case letter
      -number
      -non alpha number char
    -allow IAM user change own password
    -Require uses to change your passowrd after sometime
    -Prevent password use
       IAM = setting=> password policy
    -MFA = Multi factor authentication
       1)- security you own and device
        aws uses 
           virtual mfa device
               Google authenticateor
               Authy
      2) Universal 2nd factor(u2f) securty key
         Yubikey = third party device
      3)Hardware Key Fob MFA device
           Account (on top side bar)=> security creditial
  3)Way to access aws
          Aws managment console (Website password and username)
          AWS Cli(Command line tool)
          AWS SDK(Software development kit)
          Access keys are generated through console log
          It is like password. 
           Access ke as = username
           Secret access key = password

  4) Way to configure cli
      AWS Access Key ID [****************F5BA]:
      AWS Secret Access Key [****************PatQ]:
      Default region name [us-east-2]:
      Default output format [None]: json
      You can also use cloud shell for instead of CLI
   5) Roles
      Certain service required certain permision on behalf your account. Those case roles will be created
      It is not intended to use by physical people. It is used for some aws purposes
      Ec2 instance may want to perform some action in aws. In that case we use role. it is IAM role to get permission
    6)Credit report to get all the creditial status of the user
    7) Best way to use IAM
        -use root account to setup and remaing activity should use alias account
        -Follow strict password rule
        -New use comes use new account. Do not give existing user account
        - Enforce Multi Factor Authentication (MFA)     
3)Budget
      - you see bill Billing dashboard
      -click on budget and set alert if budge exceed
4)
 */

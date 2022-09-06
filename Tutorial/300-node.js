/*
1)Introduction
          Node js is runtime built on V8 engine. Node is not programming language 
          Node js is use as framework wring javascript in server side 
          Node js is a javascript on running server
          Ryan Dahl (Google)
            V8 engine uses in Chromes. Ryan took out of chrome places in server. T
            event drive non blocking feature make it light weight and effient
       Why should we use?
          It uses javascript
          Very fast (V8 engine and non blockng code)
          Huge echo system (Npm)
          Greate real time services
        When to use node
            I/O bound:Single thread, no-blocking. Node js reading database. it will take 10 second
            but it will not block
            Data streaming application
            Real time chat app

 2) V8 engine
     Computer does not understand javascript
         Javascript
         c++
         Assembly Language
         Machine code
     Nodejs is written c++ and javascript convert to machine code
     V8 eginge will convert javascript into machine code
     Libuv give access to file system, networking and operatign system. Also libuv give import features  That is Event loop and thread pool
      Event loop is handling easy task such network i/o call back etc
      Thread pool will do heavey works such file access, compression etc
       libuv is written in c++ and v8 engine writtern in javscript and c++  
     This open source javascript engine which uses in chrome. It is stand alone and embed into any apps
     in Chrome web apis are documenet object and window object. But in node process object and global object
     console.log(process,global,window,document)
     Nodejs not only rely on v8 engine and libuv. It aslo has component of http-parser c-ares oppenssl zlib

     Theadpoo and Eventloop
       Node js is single thread. 
          - Initialize the programe
          - Executive top leve code
          - Required modules
          - Register event call back
          - Start event loop
             Event loop is heart of node artitecture.Most of the works done in eventloop
             Some tasks are too heavy and expensive to execute in evet loop. Those task will block single therad. In this case thead pool comes in 
             Usuall 4 thead pool will give. You can configure to 128 thread. By default it is 4.
             Event loop will offload all the heavy task to thread pool and wait for other request to process. So that even loop will not block. Developers will not determain what goes to thread pool and what not. It is evet loop will decide.
       Event loop
            Basically all code except top level code run in evet loop 
             Event loop will offload all the heavy task to thread pool and wait for other request to process. So that even loop will not block. Developers will not determain what goes to thread pool and what not. It is evet loop will decide.
             Node is build around calll back function
             Event driven artichetcut
             Event loop recevie the events such as call back functions and offload expesive operation to theadpoool 
             Phase of event loop
                1) Expired timer - setiTimeout
                2)I/O polling and call back i/o event eg: networking and file
                3)setImmediate (executiont content)
                4)close call back : eg: websocke shut down
                minor:
                    process.nextrick que and other microtask quet to solve promises

                Event loop makes asychronous possible in ndoejs and make complete differnt from other platform.
                Do not block event loop
                   - Do not use syn function in fs,crypto, zlib
                   - Do not perform complex calculation event loop
                   - Be careful wilth json large object. It take too much to stringgy json
                   - Do not too large regular expression
 3) Global object
       When we write code in javascript on browser window will become global oboject. Node it is global object
      window object = alert,console.log() = both window and global
      Eg: setTimeout, setInterval, setImmadiate,clearInterval,clearTimout,clearImmediate
      __dirname = This will tell directory name
      export
      module
      __filename = 
  4) Modules
      Node follows modular based approach. Three approches we make core modueles, customized modues, third party modules.
      1)__filename = it gives current file name in current module
      2)__dirname = it will give current directory name in current module
      3)exports = module.export = {name,dakflda}, or name them
      4)require(id) = This modules is import  other files or third party modulues.
      5) require.main = This modules check wheather file is running from main.js,index.js,app.js console.log(require.main);
     6)require.resolve = This is module is to find location of the modules
  5) OS Module 
   os.userInfo()
   os.release()
   os.cpus()
   os.arch() = 
   os.freeMemory()
  6)File System
        const data = fs.readFileSync("data.txt") //read file
        fs.writeFileSync("data.txt", "Hellow world")//write file
        fs.writeFileSync("indaia.txt","adfkajldkajflk") // write and create new file
        fs.appendFileSync("data.txt","We have more dlakjfdal") // edit file
        fs.copyFileSync("data.txt","dafajkl.txt") // copy file 
        fs.renameSync("data.txt","data1.txt")  rename file
        fs.unlinkSync("dafajkl.txt") // delete file
        let dir = fs.readdirSync(__dirname)// list all folder files
        fs.mkdirSync("file-system")  // make new folder
        fs.watchFile("file-system/data.txt",()=>{
            console.log("text changed")
            })
    REPEL
         REPL feature of node which is useful for experimenting with nodejs and debuging javascirpt code
         Read,Evaluate,Print, Loop the above command unitil users passesm
         We can call cmd of nodejs

         Open any directory and type node in cmd
         .help = help
         .exit = exit repl
    7) Path
       path.dirname() = directory name
       path.extname() = extension name
       path.basename() = file name
       path.parse() =  it will all significant information about file
       path.join()= join path
    8)Export and import
        module.exports = name
        module.exports = {name1,name2,}
        module.exportts.name = ()=>{}
        const name = require("./aldkf/name")
    9) http
    10)Steams are object that let your read data from source  or write to adesition in contiuous fashinion. In other words listening musing and watching video continuesly without downloading it.
    Streams are used to process data by piece(chunk) without completing whole read and write.
    What makes streams unique, is that instead of a program reading a file into memory all at once like in the traditional way, streams read chunks of data piece by piece, processing its content without keeping it all in memory.It is used for time and memory effiency
    Read = stream used in read option
    write = stream used write option
    duplex = read and write option
    transform = 
    Each type of Steam is an eventEmmitter instance and event at different instance
    data =  this event will be fire while data is available to read
    end = this event will be fired end of reading data
    error = if error occured receiving data
    finish = evething over
    Async_hooks: In short, Node.js async hooks, more specifically the async_hooks module, provides a clear and easy-to-use API to track async resources in Node.js 
    10)continous Integration   

     11 async hoook
         Async Hooks are a core module in Node.js that provides an API to track the lifetime of asynchronous resources in a Node application.
     
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
      init - Called during the construction of the async resource
        before - Called before the callback of the resource is called
        after - Called after the callback of the resource has been invoked
        destroy - Called after the async resource is destroyed
        promiseResolve - Called when the resolve() function of a Promise is invoked.

   12)Pure JavaScript is Unicode friendly, but it is not so for binary data. While dealing with TCP streams or the file system, it's necessary to handle octet streams. Node provides Buffer class which provides instances to store raw data similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.
                string − This is the string data to be written to buffer.

                offset − This is the index of the buffer to start writing at. Default value is 0.

                length − This is the number of bytes to write. Defaults to buffer.length.

                encoding − Encoding to use. 'utf8' is the default encoding.
   13)Childe process = Node.js is a web development framework that offers a variety of modules to work with. Usually, Node.js allows single-threaded, non-blocking performance but running a single thread in a CPU cannot handle increasing workload hence the child_process module can be used to spawn child processe
   14)event
       a event is a signal something has happend in our application
       http = create  webserver. every time receive we receive request on that class raises an event. The job is that event is to reading the event and return right responose. 
          several classes of code in nodejs raises different event
          event emitter is class which contains various methods
          we should listener that will be called when the events is called
          nodejs built on asychorounised event based architechture

Interview
1)Difference between and javascript
            Javascript                    Nodejs
              Program language           Iterpreter or enviroment for javascript
              used client side           server we uses
              various browser has differ
              te engin                     V8 Engine
2)What is Node
            Node js open source server side runtime which build on using Google's v8 engine.

3) Major advantages of nodejs
            1) it is open source
            2) simple and fast
            3)it asychonrony out 
            4) it is single thread
            5) no bufferting
4) Nodejs is singles threaded
            But this single thread is to not to complete task but to achieve task
5) Event loop is place where all call back function will be executived.

    Event loop consist of call back, nodeapis, and event que

            
 */

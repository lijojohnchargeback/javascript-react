    /*
Javascript code = Node js () => it has collection dependecey that is v8 engine and libuv. Libuv will give access to file system, networking and cuncurrancy. V8 Engine will excecute code.
70% c++ code v8 engine and 100% c++ libuv. Node give nice platform to connect javascript code to c++ code

Thread
   process = instance of computer program that are being executed
   thread = unit of instruction that are going to be executed by cpu.
   sheduling = deciding which way to execute therse threads are knowns are sheduling
        Sheduling controlled by operating system
 Event loop
    Whenver star node node app creates one thread and execut in one thread. It is called loop. It is controlled structure that decids at given point of time
    shouldcontinue in event loop
    Event loop = it will look for any settime out ,setinterval, setImmedate to be executed
                 It will look for pending operating system task/ server listening
                 It will look for long running operation. (read fs file, network reaqy)

      Three arrays  = pending Timers = []
                      pendingOSTask = []
                      pendingOperations = []

      Beside main thready libuv creates thead pool (four thead) to execute expensive tasks
      some cases operating system will decide making additonal thead

Summary
    app.js = node exucute all code and any required file execuve
    event  = event loop will check any work to do. If no work then exist. any works mean os ooperation,timers, theadpool
       yes
   Check timers (setTimer,settimeout)
   check any call back or os task
   event loop pauses sits around wait something to happen. Once complete it will execture. then repeat

Performance improve ment
    clustmer mode
    User Worker thread

 Cluster
     it will create server as children
     const cluster  = require("cluster")
     if(cluster.isMaster){
     cluster.fork()
     cluster.fork()
     cluster.fork()
     cluster.fork()
     }else{

     }
     if you more cluster.fork() performace depence on cpu

  
Redies
   catche server
   set(key,value)
   get(key, call back) this asychonorsed operation)
   nested hash/nested object
   hset
      hset("spanish","red","rojo")
      hget("spanish","red",(error,value)=>console.log(value))
redis will not store only values. it not store by object. You can store json file
 */
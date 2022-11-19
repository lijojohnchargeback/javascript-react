/**
 * 1)Big O notation 
 *        a)Introduction
                - Big o notifcaton is way to check performacne of the code and best
                - It will provide best code 
                - it will help us to understand different approches
                   - sometimes some code will perform better in more data
                   - sometime some code are consistatn
                - identifying problems why crashing or slow performace       
         b)Best code
                - Faster (Bench mark)
                - Less memory intensive
                - More readable
 
                
                                1)let addUpto = (n) =>{
                                let total = 0
                                for(let i=1; i<n;i++){
                                total +=i
                                }
                                return total  
                                }
                                let p1 = performance.now()
                                console.log(addUpto(15))
                                let p2 =  performance.now()
                                console.log(p2-p1)
                                2)let addUpto1 = (n)=>n*(n+1)/2
                                - Three operation = multiplicatoin, addition, division
                                let p3 = performance.now()
                                console.log(addUpto1(15))
                                let p4 =  performance.now()
                                console.log(p4-p3)
                                console.time()
                Different machine will recod different time
                The same machine show different time

                Big O Notion is a way to formalize fuzzy counting
                  it allows us to talk formally about how runtime of algoritham grows as input grows

                    O(1) = 3*5
                    O(n)  = for loop (inside function two for loop als the)
                    O(n2) = nested for loop
                    

                O(2n) = O(n)
                O(500) = O(1) = No matter what size is it is stable 
                O(13n2) = O(n2)
                 To analzy the performacne of the algarothiam we use Big o notation
                  - Arithamatic operation constant
                     10000*2 and 1*2 
                  - variable assignment is constat
                    var x = 100
                  -Accessing element in array is constant or object key is constant
                  - Loop the complexicity based loop times

                Time complexity =  how much time it takes(All above topics)
                Space complexity = how much memory complexity
                   varialbe,number,null,undfiend constant space
                   above example for looop space complexity them
                   if object or array based length
                   string based on length
                   for loop push to array as length grow
           d)array and object and build in mehtods and loops
             Object
                Object are very fast and not in order
               insertion = O(1)
               removing = O(1)
               Search = O(n)
               Access = O(1)   
             Array 
               order list 
                 accessinng data = O(1) any number 10000 accessing is very fast. It will not go one by one
                 search data = O(n)
                 Removal = it depends 
                   - end of the O(1)
                    - start of the array . becuase of indexes. We need to redindexed.O(n)
                 Insert = it depends
                    - end of the O(1)
                    - start of the array . becuase of indexes. We need to redindexed.O(n)
                Built in array methods
                   push() = O(1)
                   pop()  = O(1)             
                   shift() = O(n)
                   unshift() = O(n)
                   concat() = O(n)
                   slice() = O(n)
                   sort() = O(N * log N)
                   foreach/filter/map = O(N)
2)Algoritham and problem solving pattern
     Algoritham means process or step to accoumplish certain task
       - How to solve problem
       Add two numbers
             -Undestand the problem
                 understand the problem your own words
                 What are the input
                 What are the output             
             -Expore concreate exmaplem
                User stories or unit test
                - start with simple example
                - progress to More complex example
                - Explore example with empty input
                - Expore example with invalid input     
             -Break it down
                -scaleton of function 
                -steps to solve the problem
             -Solve/Simplify
                -very difficult/not able to do
                -temporaly ignore that difficuty
                -write simplified the solution 
             -Look Back and refactor it
                -can you check the result
                - can you find differnt approch
                -it help to 
    Common pattern
            -Freequency counter
            -Multiple Pointer
            -Sliding window
            -Divide and conquer
            -Dynamic programing
            -Greedy algoritham
            -Backtracking
            - Many more

3)Recursion
     Recursion means function call itself
      Why = it help us solving bigger complex problem in a simple way
          = You can convert recursion solution into interation and viseversa
          =recursion and iteration (loop)
          = space complexicty
          = 1000 call means 1000 space in memory
 */
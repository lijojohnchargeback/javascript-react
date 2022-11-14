/*
React is open source javascricpt library buildilng user interfaces
React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.


Advantage
   -component based approach
   - delclarative is approach - you should tell what ui look like. React will do it
   - dom update are handled gracefull
   - increase applicaton performace
   - easy to integrate
   -reusable code
   =It is help to build rich UI
  -It has rich eco system to build other things

   -Facebook build - 2013
Disadvanatege - It is only library. It take only view part MVC framework
              - Library is big
              - Difficult to understand as novice

Component =
component is small unit of design which can reused or nested in other components. Functional component class based compnent
classbased is simplen coment

Functional components = It is just function which return html. It can accept object of propery.
    Functions component is jascript function which reture html
    Clasbased compnent is javscript class which return html
    Function compnent there is no render method
    Clas based compnent render mehtods available
    Fuctional compoennt react hooks are used
    Class component react lyfecyt methdoda re used
    Functional componnant constructors are used. Not in funcitonal compnentn
    Absense of this keyword in functional compnent
Two ways you export default and named export
positive = absence of this key word
solution without state,


Class componets = classes are basically es6

JSX
JSX is extension to the javascripti langauge
JSX is javascript XML . JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods. JSX makes your code elegant and simple. 

It will avoid react.createElement <div></div>, second paramenter, and third paratmer. Third paramenter
JSX files do not render direct. It uses JSX transformer like baber and converted javascript object.Browsser only

Props
   “Props” is a special keyword in React, which stands for properties and is being used for passing data(attributes and value) from parent componet to child component. 
   Props are immutable. We can not be changed
   Props (short for properties) are a Component’s configuration. Props are how components talk to each other.

DOM = DOM is a collection of nodes which represent as trees.In traditional dom new data recevies render data. rendering data is very expensive as it render without even any changes.

   
   
State
    props are pass to the component
    state manages with in the component
    props are not mutable
    state are mutable. We can change value any time
    The state is a data structure that starts with a default value when a Component mounts. It may be mutated across time, mostly as a result of user events.

    You can directly assign value to the state without using setState. But it will not rerender. It will not display in DOM. But console.log you can take mark

    setState in classcompoents are asychronized. Thus should not place state after setState method. You should make in  That is the reason console.log() first value will appear. Followed by seStatate will be called. If you want real number on time you can add second parameter as call back function.

                handleCount = ()=>{
                    this.setState({count:this.state.count + 1},()=>{
                  console.log(this.state.count) //exact count value
                    })
                    console.log(this.state.count)/// count value  -
                  }
  Code has to be executed after state update then call for call back function
  When you have to update based previous state value then call back function with previous state      
  do not modify the state directly. It will not reflect any changes in ui. Basically it will not rerender if there is any changes.     
  if any chagges after updating state place call back function
  if you want to make changes based on previous state track previous state
  
  React group multiple setState in single group

array or object destruction
   this will allow elements in array and properties in an object into district variable.it improve code readability

   The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation. ... They may also be considered a part of “virtual DOM” implementation in Reac.
Diffing = Diffing means React Virtual dom has two DOM. One is current Virtual DOM and second is previous
    virtutal dom. Then it compares. This process is called diffing. After diffing process react picks only changed object update in real dom. This process is called reconciliation. Any changes in virutal dom will force real DOM to re render.

Event handling
   Event handler should be a function. Do not call 
Binding event halder in javascript
  Because of "this" keyword javascript it is very nessary to bind the events
  1) bind <button onClick ={this.handleClick.bind(this)}>{this.state.message}</button>
  2)arrow functions = most commonly used
  3)binding in the constructor  =  
              this.state = {
              message:"hello"
                }
              this.handleClick = this.handleClick.bind(this)
Methods as props in react
   In react you can pass methods as props. Also you pass parameter
Condtional rendering
   1)if/else : if statement will not work in render methods
                if(this.state.logedIn){
                return (
                <div>
                  <h1> Welcome Lijo</h1>
                </div>
                )
              }else {
              return (
                <div>
                <h1> Welcome guest</h1>
                </div>
              )
   2)Element variables
                 render() { 
                  let message
                  if(this.state.logedIn){
                    message= "Welcome Lijo"
                  }else {
                    message= "Welcome guest"
                  }
                  return (
                  <Fragment>
                    <h1>{message}</h1>
                  </Fragment>
                  );
   3)Ternary operator
                    ? :
   4)Short circute
                return this.state.logedIn && <div><h1>Welcome Lijo</h1></div>

        List = key key play crucial role to identify removed,added into array and it plays big role list out all data efficiently. Key word help react for efficiant update.
        It will stable identity
        It helps efficient update user interface

        Do not use index as key. Becuase if you add or remove list index will change.

  CSS 
    css stylesheet
    inline styling
    css modules
    css in lybrarary
      
  Form
       a value which controlled by react is called controlled component.a  value which do not have controll over value is called uncontrolled. We can write both ways code. React.useState and setState method you can write controlled element and using ref method you directly access dom
       and get the current value.
       
  Lifecycle methods  
    
  Mounting:When an instance of component is being created and inserted into the DOM
      constructor function = a function that will get called whenever new component is created
                            super will call base call constructor

      getDerivedStateFromProps
                      it is a static method.It is rarely used method
      render()
                      only required method. read prop and state and return jsx
                    
      componentDidMount()
        It is called only once and invoked immediatly render method
        We can call http request here
   Order of execution

      ComponentA and compoent b
      A construction
      A getDerivedStateFromProps
      A render
      B construction
      B getDerivedStateFromProps
      B render
      B componentDidMount
      A componentDidMount
      
  Updated
    update phase  will be called when componet rerended due to changes in state and props

      getDerivedStateFromProps() =
      static
      shouldCompontentUpdate, = This will decide based props and state changes and re-render
      render() = Method 
      getSnapShortBeforeUpdate = prev props and state | capture some information from DOM scroll             position
      componentDidUpdate(prevProps,prevState,snapshot)
                    
  
  Unmounting :When a componet removed from DOM
        componentWillUnmount()
          clean up work, canceling network request, event handling
  error boundary:This will be called when any error occures during rending component
      componentDidCatch
      getDerived from static

Advanaced topics of React

  Fragment
    A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM
    key is only attribute you can pass through Fragment.div create css perfornce

  Pure component
    Boost permonace of component. Pure compoent will render besed on chages in shallow props and state comaparison. If no changes it will not render again. shouldComponentUpdate in regular component is false. In pure component, component will render based on shallow prorps and state comparison. It will avovid unnessary rerender. 
    

    Shallow comparison
          primitive types : a,b c, 1,3, returns true if value are the same
          const x=  {name:"lijo", age:20} a = x it will be true. If any other object it will not true

  Memo is function.

  ref
     Ref allow us to access DOM nodes directly from react within react
     focusing text input
     input.current.value = accessing current value
     ref will give object. That is current and current will access all DOM Node
     
  Ref forwarding
    Ref forward is method forwarding ref from Parent componet to child compoent React.forwardRef( functional compoent,(prop,ref) ref={ref})

  Portals: Portal help us to create additional node (children) outside the dom hyranchi. 
                  First change root index.jx create additional root
                  import ReactDOM, and take two arguments
                  const PortalDemo = () => {
                  return ReactDOM.createPortal((
                    <Fragment>
                    Portal Demo
                    </Fragment>
                    ),document.getElementById("portal-root"))
                  }
                  while crate modal sometimes we required portal

        Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element or document object (Provided the handler is initialized).
  Error boundary:
                getDerivedStateFromError
                componentDidCatch
                fallback ui 
                It allows gracefully handle error in react applicaiton
                Error boundary caputure and uses fallback ui
                Wrapping up error boundary is upto user.

  higher-order component is a function that takes a component and returns a new component.

  Component will take newComponetnt as argument and return new compoent. 
    Do not forget to add {...this.props}

  Why hooks are used
       React.hoooks are features for react which will allow to use react features without writing class
      struggle to impliment this keyword
      state in Functional compoent

  React.useState = by default 1 change, object change and array 
  handleChnages = ()=>{
    setState(prev=>preve + 2)
  }
  setState merge the state where as useState will not merge the state automatically
  Eg: 
  const [name,setname]= React.useState()

<input onChange = ()=>setName({...name,})/>
  in classes state is an object. where useState it can be anthing
  useState is any array with two element

  you can acces previous state using the previouse setvalue
  Reac.useEffect = It will run every render and every update. Component didmount only once but component did update will run every update. But react.useEffect will every render and every update

  UseEffect(()=>) = It is effect conditioanlly render. both props and state watch for in array. If not changes in props or state it will not render again
  It is replacement of compoentdidmoutn componentdidupdate, componentwillunomount
  ComponentDidMount = [] conditioan, dippendancy array
  ComponentwillMount = UseEffect(()=>{ setState({ds..da}, return ()=>{ windowEventListener})}). Make sure cancel all your subscriptions and event listener


  What is context api = Context is the way to pass data throught component tree without having to pass props mannualy
  useContext = while get data from user
  useReducer
  usecallback = it is incraete performace. 
  functions whircha are not necessary will not rerender.
  useCallback is hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed
  why>
  it is useful when passing call back to child optimzed child component that rely on perfomanceo or reference
    memo = memor related componet and usecallback for functions
  
  useMemo = Pass a “create” function and an array of dependencies. useMemo will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.
  useCalleback cashes functions instance but useMemo cashes result

 useRef = 
  What is react js?
            react is open source javascript library which used for build User Interface
            Copontnet is based approarchable
  What is features of react us
              Virtual dom - it is copy of real dom. 
              Server side rending
              Unidirectional data or data binding - paretnt to child
  Advantages of react
  How to increase the performance of the component
                  1)useMembo() - This hook is used for CPU intensive function
                  2)pure component
                  3)Maintainining colocation  - Many states will create unncessary rerending
  Lazy loading which text earlier and images later. it is also konws as code splitting and data fatching.
  Fragment - it is gorup child elements with out using div. Div create extra node.
  Prop drilling =
  
  React hooks

   React hooks are features which introduced 16.8 which allow you use react features without writing class. Eg: state
       
   Hooks are JavaScript functions, but they impose two additional rules:

      Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
      Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions.
    useState - It manages states in a component. It uses array destructoring mehtod to declare variable. Initial varabile value and changed varaible value.
    
   let controller = new AbortController();

*/

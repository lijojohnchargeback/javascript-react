/**
 * CSS introduced 2002
 * CSS2
 * CSS3
 *
 *Css basic
 *  1)Adding style
 *     Inline style
 *     Head style
 *     External style
 *  2) Selectors - CSS selectors are used to "find" (or select) the HTML elements you want to style.
 *    a)Simple selectors
 *      Element selectors = h1, h1, p etc
 *      Classes = it is custom name. it is unique and once it is used. prefix .classname. Many item in a page
 *      Id selectors = it id and only once we can use # to identy.
 *    b)combinator selectors - A combinator is something that explains the relationship between the selectors.
 *          A)descendant selector (space) =  The descendant selector matches all elements that are descendants of a specified element.
                * example
                eg: div p {
                background-color: yellow;
                }
                   div > p {
                        background-color: yellow;
                        }
                <div>
                <p>Paragraph 1 in the div.</p>
                <p>Paragraph 2 in the div.</p>
                <section>
                    <p>Paragraph 3 in the div (inside a section element).</p>
                </section>
                <p>Paragraph 4 in the div.</p>
                </div>
            B) child selector (>) The child selector selects all elements that are the children of a specified element.
                        div > p {
                        background-color: yellow;
                        }
                <div>
                <p>Paragraph 1 in the div.</p>
                <p>Paragraph 2 in the div.</p>  
                <section>
                    <!-- not Child but Descendant -->
                    <p>Paragraph 3 in the div (inside a section element).</p>
                </section>
                <p>Paragraph 4 in the div.</p>
                </div>

            C) adjacent sibling selector (+)
                    The adjacent sibling selector is used to select an element that is directly after another specific element.
                        div + p {
                        background-color: yellow;
                        }
                    <div>
                    <p>
                    <p>
                    <div>
                    <p> this will be colored
            D)general sibling selector (~)
                The general sibling selector selects all elements that are next siblings of a specified element.
                It will select all . But adjasace only select first one
                div ~ p {
                    background-color: yellow;
                    }
        c)Pseudo-classes -  A pseudo-class is used to define a special state of an element.
                    Style an element when a user mouses over it
                    Style visited and unvisited links differently
                    Style an element when it gets focus
                        active: link
                        checked: input
                        visited
                        hover
                        nth-child(2)
                        first-child
                        last-child
                        only-child - if multiple will not work
                        link:
        d)CSS Pseudo-elements A CSS pseudo-element is used to style specified parts of an element.
                    Style the first letter, or line, of an element
                    p::after { 
                        content: " - Remember this";
                        }
 *     attribute selectors = The [attribute] selector is used to select elements with a specified attribute.
                        a[target] {
                        background-color: yellow;
                        }

                        <a href="http://www.disney.com" target="_blank">disney.com</a>
Color : Heximal and RGB
Unit : px, cm(centiment) mm
        Order
        Inline most powerfull
        id followed
        class followed
        element selector
 *     inheritance = it will inheritance from parent or global css
 *     elelment - classselector - 
 *   3) combinators
 *     div+p adjancant sible
 *     div ~ p general sibling
 *   margin collapsting 
 *     two elements collapses auto mated
 *   short hand
 *     margin
 *     paddign
 *     boarder
 *     height and width
 *     max-width and max-height
 *    
 *  4) display
     * Block-level elements are rendered as a block and hence take up all the available horizontal space. You can set margin-top and margin-bottom and two block-level elements will render in two different lines
    Some examples are: <div> , <section> , <article> , <nav>  but also <h1> , <h2>  etc and <p> .
    Inline elements on the other hand only take up the space they require to fit their content in. Hence two inline-elements will fit into the same line (as long as the combined content doesn't take up the entire space in which case a line break would be added).
 *     to overite this we need display propeory
 *     inline-block element will take all element acording their width and padding and margin
 *     display:none means it is hidden and remove from dome
 *     visibility: hidden it will not fill hidden sport
 *     
 * Css flext model is one-diamention layout model
 *    Flexible and efficiant layout
 *    distribut space item
 *    controll their alignment
 *    a lot of flexibility
 *   aranage spacing
 *   Terminoly
 *      Flex contianer paraent
 *      Flex item  childen
 *   Properties
 *      display = 
 *      flex-direction
 *      flex-wrap
 *      flex-flow
 *      justify-content
 *      align-items
 *      align-content
 *    Psudo classes and psudo element
 *     class = active, hovever,focus
 *     element = specific elemnts ::
 *    !import overwriting parents
 *     
 *  
 * Flex box
 *     - flex box one dimensional layout model to place items in layout
 *     - container and children - children are items.
 *     - Flex items start main start to main end- between space is called main size = Horizo
 *     - Cross start and cross end between space cross size vertical it is used
 *     - Flex container
 *        = display  =flex horizontal it will arrage , border full width
 *                   = flex inline = flex horizotal - border arrange around flex item. it                    willl not take full wdith
 *        = flex-direction = it will contatrol axis
 *                   = flex direct default main start to main end
 *                   =row,row-reverse
 *                   =column , column-reverse
 *               
 *        = flex-wrap   it will overflow. It fitinto line 
 *                  nowrap= default value 
 *                  wrap = it will wrap in cotainer.it will added to next line instead of                         overlow
 *                  wrap-container = it will go up intead next line
 *        = flex-flow -it is short hand flexwrap and flex direction
 *                  it should be without coma eg:{display:flex, flex-flow:row-reverse wrap}
 *                  
 *        = justify-content = it works for the alignment
 *                     flex-start = by default
 *                      flex-end = it will go main end
 *                      center = it will be in center
 *               handling extra space
 *                       space-beween = it will create space beween contante evenly split
 *                       space-around = it will create space begining of the property -opp
 *                                       start and end small space it will give
 *                       space-evently = it will creae space evenly betweeen items
 *                  it deal with the same with columns 
 *        = align items = this is from cross item. iT works based height
 *                  stretch = it will full stretch default
 *                  center and flex-end
 *                   baseline =  baseline 
 *        = align content = it is mix of align items and justify content. it is  cross access
 *              default value  is stretch
 *              felx-start = star of cross acces
 *              flex-end = end of the cross access
 *               center = center 
 *               space-beween
 *               space-around = 
 * 
 *    Flex items
 *              order = we can change order of items
 *              flex-grow =  It will take full remainin emply space and all remain item push one side.it will equaly distributed if it apply to . if you want change equality then change the value
 *              flex-shrink
 *                  it just opposite to flex-grow.It will overflow.It will not shriknin
 *              flex-basis
 *                  flex-value of auto deafult
 *                  
 *              flex:
 *                 it is short hand above three
 *                flex:grow,shrink,flex-basic 
 *              align-seft
 *                  align item = center flex-start,flex end,stretch
 *                  It will override container propery
 *                   
 *     
 *         
 *    
 */
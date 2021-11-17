// JSX - JavaScript XML
// JSX allowed react to be declarative
// Allows HTML to be written within JS
// React converts JSX into a JAvaScript object which describes the properties of a DOM Element


// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

// <h1 class="header">

// const element = <h1 className="header">This is JSX</h1>
// console.log(element)

/*
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {
        className: "header", 
        children: "This is JSX"
    }, 
    _owner: null, 
    _store: {}
}
 */

// JSX
// ReactDOM.render(element, document.getElementById("root"));

// JSX is converted into JavaScript objects, and React DOM can understand then and create a DOM element
// Can return only a single parent element in JavaScript
// Why you can add variables in render() because, JSX returns JavaScript objects

// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/


const nav = <nav>
        <h1>Bharati Subramanian</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>

ReactDOM.render(nav, document.getElementById('root'));

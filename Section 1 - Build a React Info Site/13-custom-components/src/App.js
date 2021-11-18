import './App.css';

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */
import React from 'react';

function PageComponent() {
  return (
      <div className="container">
      <header>
          <nav>
              <img src="./react-logo.png" style={{width: '100px'}} alt="This is react logo"/>
          </nav>
      </header>
      <main>
          <h1>Why I am excited to learn React!?</h1>
          <ol>
              <li>It's a popular library, so I'll be 
              able to fit in with the cool kids!</li>
              <li>I'm more likely to get a job as a developer
              if I know React</li>
          </ol>
      </main>
      <footer>
          <small>
              © 2021 Bharati Subramanian development. All rights reserved.
          </small>
      </footer>
    </div>

    )
}
export default PageComponent;

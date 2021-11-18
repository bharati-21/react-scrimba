import './App.css';

import React from "react"
import Header from "./Header"
import Main from './Main';
import Footer from './Footer';

/**
Challenge: move the Footer and MainContent components
into their own files.
*/


function Page() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Page;
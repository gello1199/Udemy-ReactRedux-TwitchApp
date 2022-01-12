import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const pageOne = () => {
    return <div>PageOne
    <Link to='/pagetwo'>Navigate to page Two</Link>
    </div>
}

const pageTwo = () => {
    return <div>
    PageTwo
    <button>Click Me!</button>
    <Link to='/'>Navigate to page One</Link>
    </div>
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                <Route path='/' exact component={pageOne} />
                <Route path='/pagetwo' component={pageTwo} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;

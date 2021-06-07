import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import Header from './components/Header';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route exact path="/product/:productId" component={ProductDetails} />
          <Route path="*">
            <h2 style={{ marginTop: '10rem', textAlign: 'center' }}>
              Nothing Found, Go Back <Link to="/">Home Page</Link>
            </h2>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

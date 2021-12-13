import React from "react";
import Routes from "./Routes";
import Header from "./core/Header";
import Footer from "./core/Footer";
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
  
const App = () => (
    <div>
        <Router>
            <Route>
                <Header></Header>
                    <Routes></Routes>
                <Footer></Footer>
            </Route>
        </Router>
    </div>
)
export default App;

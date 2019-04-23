import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SideMenu from '../components/SideMenu/SideMenu';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Restaurants from '../components/Restaurants/Restaurants';
import Cover from '../assets/images/cover.jpg';
import '../assets/sass/main.scss';

class App extends Component {
    state = {
        selectedRestaurants: '',
        bottomValue: 1,
        topValue: 1
    }
    resturantTypeHandler = (event) => {
        this.setState({
            selectedRestaurants: event.target.outerText.toLowerCase()
        });
    }
    render() {
        return (
            <Router>
                <header>
                    <div className="container-fluid">
                        <div className="cover-wrapper">
                            <img src={Cover} alt="cover"/>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="container-fluid">
                        <div className="main-wrapper">         
                            <SideMenu clicked={this.resturantTypeHandler}/>
                            <Route className="home-route" path="/" exact strict component={Home}/>
                            <Route className="about-route" path="/about" exact strict component={About}/>
                            <Restaurants resturant={this.state.selectedRestaurants}/>
                        </div>
                    </div>
                </main>
                <footer>
                </footer>
            </Router>
        );
    }
}

export default App;

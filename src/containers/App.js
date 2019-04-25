import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Helmet} from "react-helmet";
import SideMenu from '../components/SideMenu/SideMenu';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Restaurants from '../components/Restaurants/Restaurants';
import NotFound from '../components/NotFound/NotFound';
import Footer from '../components/Footer/Footer';
import Cover from '../assets/images/cover.jpg';
import '../assets/sass/main.scss';

class App extends Component {
    state = {
        selectedRestaurants: '',
    }
    resturantTypeHandler = event => {
        this.setState({
            selectedRestaurants: event.target.outerText.toLowerCase()
        });
    }
    render() {
        return (
            <Router basename="/Dining-room/">
                <Helmet>
                    <title>The Dining Room | Restaurants review</title>
                    <meta name="keywords" 
                          content="restaurants, kitchen, cooking, overview"
                    />
                    <meta
                        name="description"
                        content="Best site for resturant reviews based on type of cuisine"
                    />
                </Helmet>
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
                            <Switch>
                                <Route className="home-route" path="/" exact strict component={Home}/>
                                <Route className="about-route" path="/about" exact strict component={About}/>
                                <Restaurants resturant={this.state.selectedRestaurants}/>
                                <Route className="not-found" component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </main>
                <footer>
                    <Footer />
                </footer>
            </Router>
        );
    }
}

export default App;

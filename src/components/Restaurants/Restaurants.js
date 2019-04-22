import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import All from './All/All';
import German from './German/German';
import Chinese from './Chinese/Chinese';
import American from './American/American';
import Pizza from './Pizza/Pizza';
import Vegeterian from './Vegeterian/Vegeterian';
import restaurants from '../../data/restaurants.json';

class Restaurants extends Component {
    state = { 
        activePage: 1
    }

    render() {
        const filteredRestaurants = restaurants.filter(restaurant => {
            if(restaurant.cuisine === this.props.resturant){
                return restaurant
            } else if(this.props.resturant === 'all'){
                return restaurants
            }
        });

        return (
            <div className="restaurants-wrapper">
                <Route 
                    className="all-route" 
                    path="/restaurants/all" 
                    exact strict
                    render={(props) => 
                    <All  
                        activePage={this.state.activePage}
                        bottomChanged={this.bottomValueChangedHandle}
                        topChanged={this.topValueChangedHandle}
                        data={filteredRestaurants} 
                        {...props} />}
                />
                <Route 
                    className="German" 
                    path="/restaurants/german" 
                    exact strict
                    render={(props) => 
                    <German 
                        activePage={this.state.activePage}
                        bottomChanged={this.bottomValueChangedHandle}
                        topChanged={this.topValueChangedHandle}
                        data={filteredRestaurants} 
                        {...props} />}
                />
                <Route 
                    className="Chinese" 
                    path="/restaurants/chinese" 
                    exact strict
                    render={(props) => 
                    <Chinese 
                        activePage={this.state.activePage}
                        bottomChanged={this.bottomValueChangedHandle}
                        topChanged={this.topValueChangedHandle}
                        data={filteredRestaurants} 
                        {...props} />}
                />
                <Route 
                    className="American" 
                    path="/restaurants/american" 
                    exact strict
                    render={(props) => 
                    <American
                        activePage={this.state.activePage}
                        bottomChanged={this.bottomValueChangedHandle}
                        topChanged={this.topValueChangedHandle}
                        data={filteredRestaurants} 
                        {...props} />}
                />
                <Route 
                    className="Pizza" 
                    path="/restaurants/pizza" 
                    exact strict
                    render={(props) => 
                    <Pizza
                        activePage={this.state.activePage}
                        bottomChanged={this.bottomValueChangedHandle}
                        topChanged={this.topValueChangedHandle}
                        data={filteredRestaurants} 
                        {...props} />}
                />
                <Route 
                    className="Vegeterian" 
                    path="/restaurants/Vegeterian" 
                    exact strict
                    render={(props) => 
                    <Vegeterian
                        activePage={this.state.activePage}
                        bottomChanged={this.bottomValueChangedHandle}
                        topChanged={this.topValueChangedHandle}
                        data={filteredRestaurants} 
                        {...props} />}
                />
            </div>
        );
    }
}

export default Restaurants;
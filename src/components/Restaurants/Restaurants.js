import React from 'react';
import {Route} from 'react-router-dom';
import All from './All/All';
import German from './German/German';
import Chinese from './Chinese/Chinese';
import American from './American/American';
import Pizza from './Pizza/Pizza';
import Vegeterian from './Vegeterian/Vegeterian';
import restaurants from '../../data/restaurants.json';

const Restaurants = props => {
    const filteredRestaurants = restaurants.filter(restaurant => {
        if(restaurant.cuisine === props.resturant){
            return restaurant
        } else if(props.resturant === 'all'){
            return restaurants
        }
    })   

    return (
        <div className="restaurants-wrapper">
            <Route 
                className="all-route" 
                path="/restaurants/all" 
                exact strict
                render={(props) => 
                <All  
                    data={filteredRestaurants} 
                    {...props} />}
            />
            <Route 
                className="German" 
                path="/restaurants/german" 
                exact strict
                render={(props) => 
                <German 
                    data={filteredRestaurants} 
                    {...props} />}
            />
            <Route 
                className="Chinese" 
                path="/restaurants/chinese" 
                exact strict
                render={(props) => 
                <Chinese 
                    data={filteredRestaurants} 
                    {...props} />}
            />
            <Route 
                className="American" 
                path="/restaurants/american" 
                exact strict
                render={(props) => 
                <American
                    data={filteredRestaurants} 
                    {...props} />}
            />
            <Route 
                className="Pizza" 
                path="/restaurants/pizza" 
                exact strict
                render={(props) => 
                <Pizza
                    data={filteredRestaurants} 
                    {...props} />}
            />
            <Route 
                className="Vegeterian" 
                path="/restaurants/Vegeterian" 
                exact strict
                render={(props) => 
                <Vegeterian
                    data={filteredRestaurants} 
                    {...props} />}
            />
        </div>
    )
}

export default Restaurants;
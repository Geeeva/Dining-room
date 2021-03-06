import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Helmet} from "react-helmet";
import Pagination from '../Pagination/Pagination';
import Filter from '../Filter/Filter';
import Restaurant from '.././Restaurant/Restaurant';

class Chinese extends Component {
    render(){
        const initialPage = 1;
        const maxPerPage = 12;
        let maxPages = 1;
        if(this.props.data.length > 1){
            maxPages = Math.ceil(this.props.data.length / maxPerPage)
        }
        
        const restaurants = [].concat(this.props.data)
        .sort((a, b) => b.rating - a.rating)
        .filter(restaurant => {
            return restaurant.rating >= this.props.bottomValue && restaurant.rating <= this.props.topValue
            }
        );

        const indexOfLastElement = this.props.currentPage * maxPerPage;
        const indexOfFirstElement = indexOfLastElement - maxPerPage;
        const currentPageContent = restaurants.slice(indexOfFirstElement, indexOfLastElement);
        const renderCurrentPage = currentPageContent.map((restaurant, index) => {
            return (
                <Restaurant
                    key={index + 1}
                    data={restaurant}
                />
            )
        })

        return (
            <React.Fragment>
                <Helmet>
                    <title>The Dining Room | Chinese Couisine</title>
                    <meta name="keywords" 
                        content="food, meal, snack, vegan, China "
                    />
                    <meta
                        name="description"
                        content="Selection of best Chinese restaurants"
                    />
                </Helmet>
                <div className="german restaurants">
                    <Pagination initialPage={initialPage} maxPages={maxPages} />
                    <Filter />
                    <div className="restaurants-content">
                    {renderCurrentPage}
                    </div>
                </div>
            </React.Fragment>
        );
    }  
}

const mapStateToProps = state => {
    return {
        currentPage: state.currentPage,
        bottomValue: state.bottomValue,
        topValue: state.topValue
    }
};

export default connect(mapStateToProps, null)(Chinese);
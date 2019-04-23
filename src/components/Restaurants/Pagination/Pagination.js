import React, {Component} from 'react';
import {connect} from 'react-redux';

class Pagination extends Component {
    constructor(props) {
        super(props)
        this.props.setMax(this.props.maxPages);
        this.props.setInitialPage(this.props.initialPage);
    }

    render () {
        return (
            <div className="pagination">
                <button className="begin" onClick={this.props.beginHandler}>&#171;</button>
                <button onClick={this.props.previousHandler}>&#8249;</button>
                <span>{this.props.currentPage}</span>
                <button onClick={this.props.nextHandler}>&#8250;</button>
                <button className="end" onClick={this.props.endHandler}>&#187;</button> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentPage: state.currentPage,
        bottomValue: state.bottomValue,
        topValue: state.topValue
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setInitialPage: (initialPage) => dispatch({type: 'SET_INITIAL_PAGE', initialPage}),
        setMax: (maxPages) => dispatch({type: 'SET_MAX_PAGES', maxPages}),
        beginHandler: () => dispatch({type: 'SET_FIRST_PAGE'}),
        nextHandler: () => dispatch({type: 'NEXT_PAGE'}),
        previousHandler: () => dispatch({type: 'PREVIOUS_PAGE'}),
        endHandler: () => dispatch({type: 'SET_LAST_PAGE'}),
        bottomChanged: (value) => dispatch({type: 'BOTTOM_CHANGED', value}),
        topChanged: (value) => dispatch({type: 'TOP_CHANGED', value}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
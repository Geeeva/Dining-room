import React, {Component} from 'react';
import {connect} from 'react-redux';

class Filter extends Component {
    render () {
        return (
            <div className="filter">
                <span>Price from: </span>
                <input 
                    type="number" 
                    min="1" 
                    required
                    value={this.props.bottomValue || ''}
                    onChange={(event) => this.props.bottomChanged(event.target.value)}
                />  

                <span>to: </span>
                <input 
                    type="number" 
                    min="1" 
                    required
                    value={this.props.topValue || ''}
                    onChange={(event) => this.props.topChanged(event.target.value)}
                />  
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        bottomValue: state.bottomValue,
        topValue: state.topValue
    }
};

const mapDispatchToProps = dispatch => {
    return {
        bottomChanged: (value) => dispatch({type: 'BOTTOM_CHANGED', value}),
        topChanged: (value) => dispatch({type: 'TOP_CHANGED', value}),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
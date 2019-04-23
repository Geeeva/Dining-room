import React, {Component} from 'react';

import Rating from './Rating/Rating';
import Modal from './Modal/Modal';

class Restaurant extends Component {
    state = {
        showModal: false
    }
    
    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    render (){
        return(
            <div className="restaurant">
                <h4 onClick={this.toggleModal}>{this.props.data.name}</h4>
                <div className="description">{this.props.data.description}</div>
                <Rating data={this.props.data}/>
                <Modal
                    show={this.state.showModal}
                    closeCallback={this.toggleModal}
                    data={this.props.data}
                >
                </Modal>
            </div>
        )
    }
}

export default Restaurant;
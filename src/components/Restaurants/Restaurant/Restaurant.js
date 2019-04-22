import React, {Component} from 'react';
import FullStar from '../../../assets/images/star-full.png';
import EmptyStar from '../../../assets/images/star-empty.png';
import FullCoin from '../../../assets/images/coin-full.png';
import EmptyCoin from '../../../assets/images/coin-empty.png';
import Modal from './Modal/Modal';

class Restaurant extends Component {
    state = {
        item: this.props.item,
        showModal: false
    }
    
    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    render (){
        const fullStars = Array.from({length: this.props.data.rating}, (v, k) => true);
        const emptyStars = Array.from({length: 5 - this.props.data.rating}, (v, k) => false);
        const stars = fullStars.concat(emptyStars);
        
        const starsArray = stars.map((star, index) => {
            if(star === true ){
                return (<img key={index + 1} src={FullStar} alt="full-star"/>)
            } else if (star === false) {
                return (<img key={index + 2} src={EmptyStar} alt="empty-star"/>)
            }
        })

        const fullCoins = Array.from({length: this.props.data.price}, (v, k) => true);
        const emptyCoins = Array.from({length: 5 - this.props.data.price}, (v, k) => false);
        const coins = fullCoins.concat(emptyCoins);
        const coinsArray = coins.map((coin, index) => {
            if(coin){
                return (<img key={index + 1} src={FullCoin} alt="full-coin"/>)
            } else {
                return (<img key={index + 2} src={EmptyCoin} alt="empty-coin"/>)
            }
        })
        return(
            <div className="restaurant">
                <h4 onClick={this.toggleModal}>{this.props.data.name}</h4>
                <div className="description">{this.props.data.description}</div>
                <div>Rating
                    <div className="starsarray-wrapper">
                        {starsArray}
                    </div>
                </div>
                <div>
                    Price
                    <div className="pricearray-wrapper">
                        {coinsArray}
                    </div>
                </div>
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
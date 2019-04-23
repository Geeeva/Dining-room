import React from 'react';
import FullStar from '../../../../assets/images/star-full.png';
import EmptyStar from '../../../../assets/images/star-empty.png';
import FullCoin from '../../../../assets/images/coin-full.png';
import EmptyCoin from '../../../../assets/images/coin-empty.png';

const rating = props => {
    const fullStars = Array.from({length: props.data.rating}, (v, k) => true);
    const emptyStars = Array.from({length: 5 - props.data.rating}, (v, k) => false);
    const stars = fullStars.concat(emptyStars);
    
    /*Creating stars array*/
    const starsArray = stars.map((star, index) => {
        if(star === true ){
            return (<img key={index + 1} src={FullStar} alt="full-star"/>)
        } else if (star === false) {
            return (<img key={index + 2} src={EmptyStar} alt="empty-star"/>)
        }
    })

    const fullCoins = Array.from({length: props.data.price}, (v, k) => true);
    const emptyCoins = Array.from({length: 5 - props.data.price}, (v, k) => false);
    const coins = fullCoins.concat(emptyCoins);

    /*Creating coins array*/
    const coinsArray = coins.map((coin, index) => {
        if(coin){
            return (<img key={index + 1} src={FullCoin} alt="full-coin"/>)
        } else {
            return (<img key={index + 2} src={EmptyCoin} alt="empty-coin"/>)
        }
    })
    
    return (
        <div>
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
        </div>
    );
}

export default rating;
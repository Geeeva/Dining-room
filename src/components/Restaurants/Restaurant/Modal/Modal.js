import React from 'react';
import Day from './Day/Day';
import TableRow from './TableRow/TableRow';
import menus from '../../../../data/menus.json';

const modal = props => {
    let days = props.data.days;
    let totalWorkingDaysHours = [];

    for(let key in days){
    let workingDay = {day: key};
    let workingDaysHours = Object.assign(workingDay, days[key]);
    let workingDaysHoursValues = Object.values(workingDaysHours);
    totalWorkingDaysHours.push(workingDaysHoursValues);
    }

    /*Replacing numbers with days*/
    let arrayTotalWorkingDaysHours = Object.values(totalWorkingDaysHours).map((item, index) => {
        const Days = {1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday", 7: "Sunday"};
        for(let key in Days){
            if(item[0].includes(key)){             
                item[0] = Days[key];
            }
        }
            return (
                <Day 
                    key={index + 1}
                    data={item}
                />
            )
        }
    )

    /*Initial value for filterdMenu*/
    let filteredMenu = {
		"_id":0,
		"restaurants":0,
		"items":[{"name": "", "price": ""}]
	};

    /*Checking if props.data._id is identical to menus[i]._id*/
    for(let i = 0; i < menus.length; i++){
        if(props.data._id === menus[i]._id){
            filteredMenu = menus[i];
        }
    }
    
    /*Transforming objects of menu items to arrays*/
    let arrayMenuItems = Object.values(filteredMenu.items).splice(0, 13).map((item, index) => {
        return (
            <TableRow
                key={index + 1}
                data={item}
            />
        )
    })
    
    return (
        <div>
            <div className="md-modal md-effect-1" id="modal-1" style={{visibility: props.show ? 'visible' : 'hidden'}}>
                <div className="md-content" style={{opacity: props.show ? '1' : '0', transform: props.show ? 'scale(1)' : ''}}>
                    <button 
                        className="md-close" 
                        onClick={props.closeCallback}>
                        X
                    </button>
                    <h3>{props.data.name}</h3>
                    <div className="content-wrapper">
                        <div className="hours-address-wrapper">
                            <div className="hours">
                                <div><b>Working Hours:</b></div>
                                {arrayTotalWorkingDaysHours}
                            </div>
                            <div className="address">
                                <div><b>Address:</b></div>
                                {props.data.location}
                            </div>
                        </div>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Dish Name:</th>
                                    <th>Price:</th> 
                                </tr>
                                {arrayMenuItems}
                            </tbody>
                        </table>
                        
                    </div>
                </div>
                
            </div>
            <div className="md-overlay" 
                style={{opacity: props.show ? '1' : '0', visibility: props.show ? 'visible' : 'hidden'}}
                onClick={props.closeCallback}
                >
            </div>
        </div>
    )
}

export default modal;
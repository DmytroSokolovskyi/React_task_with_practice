import React, {Component} from 'react';
import './UserADD.css'
class UserAdd extends Component {
    render() {
        let {city, country, street, houseNumber} = this.props.value
        let cls = 'UserADD'
        return (
            <div className={cls}>
                {city} - {country} - {street} - {houseNumber}
            </div>
        );
    }
}

export default UserAdd;
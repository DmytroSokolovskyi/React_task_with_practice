import React, {Component} from 'react';
import './User.css'

class User extends Component {

    render() {
        let {name, age, status} = this.props.value
        let cls = 'Userstyle'
        return (
            <div className={cls}>
                {name} - {age} - {status.toString()}
            </div>
        );
    }
}

export default User;
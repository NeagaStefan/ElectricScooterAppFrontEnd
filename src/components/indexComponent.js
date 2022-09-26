import React, {Component} from 'react';
import '../css/App.css'

class IndexComponent extends Component {
    constructor(props) {
        super(props);
        this.showAllAvailableScooters = this.showAllAvailableScooters.bind(this);
        this.showHistory = this.showHistory.bind(this)
        this.showUsers =  this.showUsers.bind(this)
    }
    showAllAvailableScooters() {
        this.props.history.push("/admin/scooters")
    }

    showHistory(){
        this.props.history.push("/admin/history")
    }
    showUsers () {
        this.props.history.push("/admin/customers")
    }

    render() {
        return (
            <div className={"container text-center align-items-center"}>
                <h2>Welcome to the NonLime app, admin</h2>
                <hr/>
                <div className={"buttons-options"}>
                 <button className={" btn btn-primary button"} onClick={this.showAllAvailableScooters}>Show scooters options</button>
                    <button className={" btn btn-primary button"} onClick={this.showHistory}>Show history of all customers</button>
                    <button className={" btn btn-primary button"} onClick={this.showUsers}>Show customers</button>
                </div>
            </div>
        );
    }
}

export default IndexComponent;
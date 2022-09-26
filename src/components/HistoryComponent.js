import React, {Component} from 'react';
import HistoryService from "../api/HistoryService";

class HistoryComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            history: [],
        }
        this.addHistory = this.addHistory.bind(this);
        this.editHistory = this.editHistory.bind(this);
        this.deleteHistory = this.deleteHistory.bind(this);

    }
    editHistory(rentalId){
        this.props.history.push(`/admin/updating/history/${rentalId}`)

    }
    addHistory(){
        this.props.history.push('/admin/generation/employee')
    }
    deleteHistory(rentalId) {
        HistoryService.deleteHistoryById(rentalId).then(res => {
            this.setState({history: this.state.history.filter(history => history.rentalId !== rentalId)})
        })
    }

    componentDidMount() {
        HistoryService.getHistory().then(response => {
            this.setState({history: response.data})
        })

    }


    render() {
        return (

            <div className={"historysAvailable"}>
                <h1 className={"text-center"}>History of the app</h1>
                <div className={"row"}>

                </div>
                <div className={"row"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <td> Rental Id</td>
                            <td> Scooter Id</td>
                            <td> User name </td>
                            <td> Time spent</td>
                            <td>Price</td>
                            <td>Start Data</td>
                            <td>Stop data</td>
                            <td>Total Price</td>
                        </tr>
                        </thead>
                        <tbody className={"table table-striped table-bordered"}>
                        {
                             this.state.history.map(
                                history =>

                                    <tr key={history.rentalId}>
                                        <td>{history.rentalId}</td>
                                        <td>{history.scooterId}</td>
                                        <td>{history.userName}</td>
                                        <td>{history.timeSpent}</td>
                                        <td>{history.price}</td>
                                        <td>{history.startDate}</td>
                                        <td>{history.stopDate}</td>
                                        <td>{history.totalPrice}</td>
                                        <td>
                                            <button className={"btn btn-info bg-info"} onClick={()=>this.editHistory(history.rentalId)}>Edit</button>
                                            <button style={{marginLeft:"10px"}} className={"btn btn-danger bg-danger"} onClick={()=>this.deleteHistory(history.rentalId)}>Delete</button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>


                </div>
            </div>
        )
    }

}


export default HistoryComponent;
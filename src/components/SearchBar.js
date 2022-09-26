import React, {Component} from 'react';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            term:''
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)

    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.event.target.value)
        this.setState({term:event.target.value})
    };

    onInputChange = event =>{
        event.preventDefault()
        console.log(event.target.value)
        this.setState({term:event.target.value})

    }
    render() {
        return (
            <div className={"ui segment"}>
                <form onSubmit={()=>this.onFormSubmit} className={"ui form"}>
                    <div className={"field"}>
                        <label>Term search: </label>
                        <input type ={"text"} value={this.state.term} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>

        );
    }
}

export default SearchBar;
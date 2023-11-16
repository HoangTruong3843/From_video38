import React from "react"

class AddProviderInfor extends React.Component{
    state ={
        name: 'Hoang',
        address: 'Temple',
        age: '26'
      };
    handleOnChangeName = (event) =>{
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAddress = (event)=>{
        this.setState({
            address: event.target.value
        })
    }
    handleOnSubmit = (event)=>{
        event.preventDefault()
        this.props.AddProviderInfor({
            id: Math.floor(Math.random()*1000+1) + "-->Randomized",
            name: this.state.name,
            address: this.state.address
        })
    }
    render(){
        return(
            <div>
                <div>You can submit {this.state.name}, your providers overhere!</div>
                <div>Your provider's address is {this.state.address}</div>
                <form onSubmit={(event)=>this.handleOnSubmit(event)}>
                    <label>Your provider: </label>
                    <input>
                        value = {this.state.name}
                        type = "text"
                        onChange = {(event)=>this.handleOnChangeName(event)}
                    </input>
                    
                    <label>Your provider's address: </label>
                    <input>
                        value = {this.state.address}
                        type = "text"
                        onChange = {(event)=>this.handleOnChangeAddress(event)}
                    </input>

                    <button>Submit</button>
                </form>
            </div>
            
        )
    }
}

export default AddProviderInfor;
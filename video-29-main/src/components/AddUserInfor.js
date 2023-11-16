import React from "react";

class AddUserInfor extends React.Component{
    state ={
        name: 'Hoang',
        address: 'Temple',
        age: '26'
      };
    
    handleOnChangeInput = (event)=>{
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge = (event)=>{
        this.setState({
            age: event.target.value
        })
    }
    handleOnSubmit=(event)=>{
        event.preventDefault()  // preventDefault() để ngăn chặn việc load lại trang (mặc định) khi click vào button "submit"
        
        //bởi vì chúng ta muốn chạy function handleAddNewUser()
        //nên sẽ dùng dấu ().
        // bây giờ thử khởi tạo một cái hardcode cho 1 object
        // và trong component cha (MyComponent.js) thử gọi 
        // biến object này ra bằng cách thử print ra console.
        this.props.handleAddNewUser({

            // -----> this comment out is a hardcode
            // id: Math.floor(Math.random()*100 + 1) + 'random',
            // name:'HoAnG',
            // age:'26'

            id: Math.floor(Math.random()*100 + 1) + '- random',
            name: this.state.name,
            age: this.state.age
        });
    }
    render(){
        return (<div>
                My name is {this.state.name} and I'm {this.state.age}       
                <form onSubmit={(event)=>this.handleOnSubmit(event)}>
                    <label>Your name: </label>
                    <input
                        value = {this.state.name}
                        type ="text"
                        onChange ={(event)=>this.handleOnChangeInput(event)}
                     />

                     <label>Your age: </label>
                    <input
                        value = {this.state.age}
                        type ="text"
                        onChange ={(event)=>this.handleOnChangeAge(event)}
                     />
                     <button> Submit </button>
                </form>

        </div>)
    }

}

export default AddUserInfor;
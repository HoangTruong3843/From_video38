import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg'
class DisplayInfor extends React.Component{
    handleShowHide=()=>{
         this.setState({
            isShowListUser : !this.state.isShowListUser
         })
     }
    
    state={
        isShowListUser:true }
    
    render(){
        // ở file MyComponents.js (cha) chúng ta đã gán name và age vào cho component 
        // DisplayInfor.js (con), nên chúng ta có thể gọi name và age = cách úsing
        // keyword "props". Khi vào chế độ inspect trên google, sẽ thấy component 
        // DisplayInfor.js sẽ hiện props vừa khai báo mà k phải state.

        // ex: Destructuring array/obj (NEW)

        // sử dụng map để truyền dữ liệu từ 1 array (listUsers) được gán giá trị từ file MyComponent.js
        const {listUsers} = this.props;
       // console.log(this.props)
        console.table(listUsers)
        
        return(
            <div className='display-infor-container'>
                <img src={logo}/>
                <div> 
                    <span onClick = {()=>{this.handleShowHide()}}>
                        {this.state.isShowListUser === true? <button>Hide users list</button> :<button>Show users list</button>}
                    </span> 
                </div> 
                {this.state.isShowListUser && <div>
                    {listUsers.map((user)=>{
                        //tiếp theo nếu cần phải đặt cho từng user một key
                        return(
                                //cau dieukien if
                                // example using style in div, <div style={{color:'yellow', paddingTop:'50px'}}>My name 's {user.name}</div>
                                <div key={user.id} className = {+user.age > 18? "green":"red"}>
                                    <div>My name 's {user.name}</div>
                                    <div>My age 's {user.age}</div>
                                    <hr/>
                                </div>)               
                    })} 
                </div> }
                
                
            </div>)
    }
}
    
export default DisplayInfor;
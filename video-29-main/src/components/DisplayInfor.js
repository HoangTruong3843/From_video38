import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg'


//stateless and statefull 
// class DisplayInfor extends React.Component{

//     render(){
//         console.log('>>> call me render'
//         )
//         // ở file MyComponents.js (cha) chúng ta đã gán name và age vào cho component 
//         // DisplayInfor.js (con), nên chúng ta có thể gọi name và age = cách úsing
//         // keyword "props". Khi vào chế độ inspect trên google, sẽ thấy component 
//         // DisplayInfor.js sẽ hiện props vừa khai báo mà k phải state.

//         // ex: Destructuring array/obj (NEW)

//         // sử dụng map để truyền dữ liệu từ 1 array (listUsers) được gán giá trị từ file MyComponent.js
//         const {listUsers} = this.props;
//        // console.log(this.props)
//         //console.table(listUsers)
        
//         return(
//             <div className='display-infor-container'>
//                 {true && <div>
//                     {listUsers.map((user)=>{
//                         //tiếp theo nếu cần phải đặt cho từng user một key
//                         return(
//                                 //cau dieukien if
//                                 // example using style in div, <div style={{color:'yellow', paddingTop:'50px'}}>My name 's {user.name}</div>
//                                 <div key={user.id} className = {+user.age > 18? "green":"red"}>
//                                     <div>
//                                         <div>My name 's {user.name}</div>
//                                         <div>My age 's {user.age}</div>
//                                         {/* <hr/> */}
//                                     </div>
//                                     <div>
//                                         <button onClick={ () => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                 </div>)               
//                     })} 
//                 </div> }
                
                
//             </div>)
//     }
// }

//              khi viet stateless function, no more keyword "this"
//              so at function component, it will automatically take props from parent 
const DisplayInfor= (props) => {
        
        const {listUsers} = props;

        return(
            <div className='display-infor-container'>
                {true && <div>
                    {listUsers.map((user)=>{
                        //tiếp theo nếu cần phải đặt cho từng user một key
                        return(
                                //cau dieukien if
                                // example using style in div, <div style={{color:'yellow', paddingTop:'50px'}}>My name 's {user.name}</div>
                                <div key={user.id} className = {+user.age > 18? "green":"red"}>
                                    <div>
                                        <div>My name 's {user.name}</div>
                                        <div>My age 's {user.age}</div>
                                        {/* <hr/> */}
                                    </div>
                                    <div>
                                        <button onClick={ () => props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>
                                </div>)               
                    })} 
                </div> }
                
                
            </div>)
    
}

export default DisplayInfor;
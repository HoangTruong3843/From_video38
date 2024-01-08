// class component  --->>> this course will start with class component only
// function component
import React from 'react'
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';
import AddProviderInfor from './AddProviderInfor';

class MyComponent extends React.Component {
    // cu phap jsx, only react has this, cho phep viet code javascript in a html
    // ham render() giup chuyen doi cu phap jsx và giuóp nó hiển thị trên giao diện
    state={
        listUsers:[
            {id: 1, name: "Huy Truong",age:"18"},
            {id: 2, name: "Hoang Truong",age:"19"},
            {id: 3, name: "Huy Hoang",age:"20"},
        ],
        listProviders:[
            {id:9999, name:"GOAT",location:"Denver"}
        ]
    }
    // check ở component con xem function này được hardcode ntn.
    handleAddNewUser=(userObject)=>{
        console.log(">>>>this is a hardcode obj",userObject)
        //để cập nhật lại list users sau khi submit, chúng ta phải dùng
        // hàm setState()
        this.setState({
            //chúng ta sẽ copy lại từ listUSers cũ và add thêm userObject ở trên
            // muốn bỏ newuser ở đầu và list users cũ đằng sau.
            listUsers: [userObject, ...this.state.listUsers]
                    // Cach2: not Recommend! Bad CODE
                    // let listUsersNew = this.state.listUsers;
                    // listUsersNew.unshift(userObj);
                    // this.setState({
                    //      listUsers: listUsersNew
                    // })
        })
    }
    
    handleDeleteUser=(userID)=>{
        let listUserClone = [...this.state.listUsers];
        listUserClone = listUserClone.filter(item => item.id !== userID);
        this.setState({
            listUsers: listUserClone
        })
    }
    //for testing purposes
    handleAddNewProvider=(userObject)=>{
        this.setState({
            listProviders:[userObject,...this.state.listProviders]
        })
    }


    render(){
        
        return (
            // thông thường đặt tên biến và giá trị muốn gán giống hệt nhau (listUsers)
            <>
                <div className='a'>
                    <AddUserInfor
                        handleAddNewUser={this.handleAddNewUser}
                    />
                    <br/>
                    {/* <AddProviderInfor
                        handleAddNewProvider={this.handleAddNewProvider}
                    /> */}
                    <DisplayInfor 
                        listUsers ={this.state.listUsers}
                        handleDeleteUser={this.handleDeleteUser}   
                    />
                </div>
                <div className='b'>

                </div>
            </> 
        );  
    }
}

// muon su dung cai .js nay phai import no

export default MyComponent;
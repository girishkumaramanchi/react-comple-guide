import React from "react";
import UserInput from "./User/UseInput"
import UserOutput from "./User/UserOutput"

const Users = (props) => (
    props.username.map((user, index) => {
        return (
            <div key={index}>
                <UserInput name={user.name} 
                    changed={(event) => props.switchUserNameHandler(event,user.name)} 
                >
                </UserInput>
                <UserOutput name={user.name} 
                    like={user.like} 
                >
                </UserOutput>
            </div>
        );
    })
);

export default Users;
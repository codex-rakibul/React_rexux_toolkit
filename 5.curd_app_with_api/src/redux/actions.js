import * as types from "./actionType";
import axios from "axios";
const getUsers = (users) => ({
    type: types.GET_USER,
    payload: users,

});

export const loadUsers = () => {
    return function (dispatch){
        axios.get(`${process.env.REACT_APP_API}`).then((response) =>{
            console.log("response",response);
            dispatch(getUsers(response.data));
        }).catch((error) => console.log(error));
    }
}
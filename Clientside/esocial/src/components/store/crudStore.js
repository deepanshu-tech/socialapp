import {createStore} from 'redux'

const initialState = {
    userId:"",
    email:"",
    username:"",
    flag : false,
    profilePicture:"",
    coverPicture:"",
    bio:""
   
}

const crudReducer = (state = initialState , action)=>{
    if(action.type === "add_userid"){
        return{
            ...state,
            userId:action.value
        }
    }
    else if(action.type === "add_email"){
        return{
            ...state,
            email:action.value
        }
    }
    else if(action.type === "add_username"){
        return{
            ...state,
            username:action.value
        }
    }
    else if(action.type === "set_flag"){
        return{
            ...state,
            flag:action.value
        }
    }
    else if(action.type === "set_pp"){
        return{
            ...state,
            profilePicture:action.value
        }
    }
    else if(action.type === "set_cp"){
        return{
            ...state,
            coverPicture:action.value
        }
    }
    else if(action.type === "set_bio"){
        return{
            ...state,
            bio:action.value
        }
    }
    
    return state;
}

const crudStore = createStore(crudReducer);
export default crudStore;

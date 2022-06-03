const initialState={
    breeds:[],
    activeDogs:[]
};

const dogReducer=(state=initialState,action)=>{
    if(action.type==="initDogs"){
        const newState={...state};
        newState.breeds=action.payload;
        return newState;
    }else if(action.type==="initActiveDogs"){
        const newState={...state};
        newState.activeDogs=action.payload;
        return newState;
    }else if(action.type==='like'){
        const newState={...state};
        const activeDogs=[...newState.activeDogs]
        const dog={...activeDogs[action.payload]};
        dog.likes=dog.likes+1;
        activeDogs[action.payload]=dog;
        newState.activeDogs=activeDogs;
        return newState;
    }
    return state;
}

export default dogReducer;
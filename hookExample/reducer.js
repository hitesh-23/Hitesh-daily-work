export const reducer = (state,action) => {
  
    if(action.type === "ADD_ITEM"){
      const newItems = [...state.people, action.payload]
     
    
    return {...state,people:newItems, isModalOpen : true, modalContent : "Item Added"}
    }
  if(action.type === "NO_VALUES")
  {
    return {
    ...state, isModalOpen:true, modalContent:"Please Enter Values"    
    }
  }
  if(action.type === "CLOSE_MODAL"){
    return {
      ...state, isModalOpen : false
    }
  }
  if(action.type === "REMOVE_ITEM"){
    const newPeople = state.people.filter((person)=>{
      return person.id !== action.payload;
    })
    return {...state, people : newPeople}
  }
  }
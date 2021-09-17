export const addTask = (data) => {
  return {
    type: "ADD_TASK",
    payload : {
        id:new Date().getTime().toString() ,
        data:data
    }
  };
};

export const deleteEntry = () => {
  return {
    type: "DELETE_ENTRY",
  };
};

export const removoeTasks = () => {
  return {
    type: "REMOVE_TASKS",
  };
};

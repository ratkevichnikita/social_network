

let initialState = {
  friendsData: [
    {id:1,name: 'Oleg'},
    {id:2,name: 'Maksim'},
    {id:3,name: 'Denis'},
  ]
}

const SidebarReducer = (state = initialState,action) => {
  let stateCopy = {...state};
  return stateCopy
};

export default SidebarReducer;
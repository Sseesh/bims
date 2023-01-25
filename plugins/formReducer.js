const initialState = {
  formData: [],
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_FORM_DATA':
  return {
  ...state,
  formData: [...state.formData, action.payload],
  };



  case 'CLEAR_FORM_DATA':
  return {
  ...state,
  formData: [],
  };
  default:
  return state;
  }
  };
  
  export default formReducer;
  

  
  
  
  
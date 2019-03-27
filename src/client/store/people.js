import axios from 'axios';

/* initial state */
const initialState = {
  people: []
};

/* action constants */
const UPLOAD_PEOPLE = 'UPLOAD_PEOPLE';

/*action creators */
export const uploadedPeople = (people) => ({
  type: UPLOAD_PEOPLE,
  people
});

/* thunk creators */
export const uploadPeople = () => async dispatch => {
  try {
    const people = await axios.get(`api/people`);
    return dispatch(uploadedPeople(people));
  } catch (err) {
    console.log(err);
  }
};

/* reducer */
const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_PEOPLE: {
      return {
        ...state,
        people: action.people
      };
    }
    default: {
      return state;
    }
  }
};

export default peopleReducer;

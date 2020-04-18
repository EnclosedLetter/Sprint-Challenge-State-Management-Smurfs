import {
    //NEED TO HAVE A FETCH AND POST. 
    FETCH_CHARACTERS_START,
    FETCH_CHARACTERS_SUCCESS,
    FETCH_CHARACTERS_FAIL,
    POST_CHARACTER_SUCCESS,
    POST_CHARACTER_FAIL
} from "../actions";

//step one: set up empty reducer and initial state
const initialState = {
    characters: [],
    fetchingCharacters: false,
    error: ""
}


//setp6: write the reducer logic for actions
const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_CHARACTERS_START:
            console.log(state);
            return {
                ...state, 
                fetchingCharacters: true,
            };
        case FETCH_CHARACTERS_SUCCESS:
            return {
                ...state,
                characters: action.payload,
                fetchingCharacters: false,
                error: ""
            };
        case FETCH_CHARACTERS_FAIL:
            return {
                ...state,
                fetchingCharacters: false,
                error: action.payload
            }
        case POST_CHARACTER_SUCCESS:
            const newCharacter = { //set up the schema below
                name: action.payload,
                location: "",
                id:  Date.now()
            };
            return{ ...state, characters: [...state.characters, newCharacter]};
        case POST_CHARACTER_FAIL:
            return {
                ...state,
                addingCharacter: false,
                error: action.payload, //this will tell the user exactly what the error is
                fetchingCharacters: false
            };
            default:
            return state;
    }
}

export default reducer;
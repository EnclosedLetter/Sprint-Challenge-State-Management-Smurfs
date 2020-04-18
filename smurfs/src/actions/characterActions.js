//build out actions
import axios from "axios";

export const FETCH_CHARACTERS_START = "FETCH_CHARACTERS_START";
export const FETCH_CHARCTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_FAIL = "FETCH_CHARACTERS_FAIL";


//exporting post_character_success and fail to index.js
export const POST_CHARACTER_SUCCESS = "POST_CHARACTER_SUCCESS";
export const POST_CHARACTER_FAIL = "POST_CHARACTER_FAIL";

//step 5 build action creators
//THIS IS A GET REQUIEST
export const getCharacters = () => dispatch => {
    dispatch({ type: FETCH_CHARACTERS_START });
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log("THE API DATA:", res.data.results);
            dispatch({ type: FETCH_CHARACTERS_SUCCESSS, payload: res.data.results });
        })
        .catch(err => {
            dispatch({ type: FETCH_CHARACTERS_FAIL, payload: err.res})
        })

};

//THIS IS A POST REQUEST

export const postCharacter = (newCharacter) => dispatch => {
    axios
        .post("http://localhost:3333/smurfs", newCharacter)
        .then(res => {
            dispatch({ type: POST_CHARACTER_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch ({ type: POST_CHARACTER_FAIL, payload: err.response})
        })
}

//Here you're building out your actions, creating a post and a get request, and then you need to go into your reducer and you need to build out your logic for them
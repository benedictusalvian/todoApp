import axios from "axios";
const API_URL = `https://jsonplaceholder.typicode.com/posts`;

export const fetchData = () => {
     return (dispatch) => {
        axios.get(API_URL).then(response => {
            const results = response.data.splice(0, 4)
            dispatch(fetchDataSuccess(results))
        });
    }
};

export const fetchDataSuccess = results => {
    return {
        type: 'FETCHDATASUCCESS',
        payload: results,
    };
};

export const updatePosition = coordinates => {
    return {
        type: 'UPDATEPOSITION',
        payload: coordinates,
    };
};
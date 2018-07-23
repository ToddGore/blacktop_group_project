import axios from 'axios';

const initialState = {
    user: {},
    lat: 0,
    lng: 0,
    address: '',
    buildingType: '',
    spaceType: '',
    spaceQuantity: 0,
    description: '',
    instructions: '',
    streetView: ''
}

const GET_USER_DATA = "GET_USER_DATA";
const UPDATE_WIZ_LAT = "UPDATE_WIZ_LAT";
const UPDATE_WIZ_LNG = "UPDATE_WIZ_LNG";
const UPDATE_WIZ_ADDRESS = "UPDATE_WIZ_ADDRESS"

export function getUser() {
    let userData = axios.get('./auth/user').then(res => res.data);
    return {
        type: GET_USER_DATA,
        payload: userData
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_DATA + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });

        case UPDATE_WIZ_LAT:
            return Object.assign({}, state, { lat: action.payload });

        case UPDATE_WIZ_LNG:
            return Object.assign({}, state, {lng: action.payload});

        case UPDATE_WIZ_ADDRESS:
            return Object.assign({}, state, {address: action.payload});

        default:
            return state;
    }
}

export function updateWizLat(lat) {
    return {
        type: UPDATE_WIZ_LAT,
        payload: lat
    }
}

export function updateWizLng(lng){
    return{
        type: UPDATE_WIZ_LNG,
        payload: lng
    }
}

export function updateWizAddress(address){
    return{
        type: UPDATE_WIZ_ADDRESS,
        payload: address
    }
}
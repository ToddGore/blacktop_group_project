import axios from 'axios';
import { bindActionCreators } from '../../node_modules/redux';
//bindActionCreators is used when you want to pass some action creators down to a component that isn't aware of Redux, 
// and you don't want to pass dispatch or the Redux store to it.

const initialState = {
    user: {},
    lat: 0,
    lng: 0,
    address: '',
    buildingType: '',
    spaceType: '',
    spaceQuantity: 0,
    spaceSize: '',
    description: '',
    instructions: '',
    streetView: '',
    covered: false,
    lit: false,
    charging: false,
    camera: false,
    fenced: false,
    guarded: false
}

// Actions are payloads of information that send data from the app to the store. 
// They are the only source of information for the store. 
// Actions describe what happened, but don't describe how the application's state changes.
// Send them to the store using a dispatch function.
// Actions are plain JavaScript objects. 
// They must have a type property that indicates the type of action being performed. 
// Types should typically be defined as string constants. 
// The following is a list of our actions:

const GET_USER_DATA = "GET_USER_DATA";
const UPDATE_WIZ_LAT = "UPDATE_WIZ_LAT";
const UPDATE_WIZ_LNG = "UPDATE_WIZ_LNG";
const UPDATE_WIZ_ADDRESS = "UPDATE_WIZ_ADDRESS";
const UPDATE_WIZ_BUILDING_TYPE = "UPDATE_WIZ_BUILDING_TYPE";
const UPDATE_WIZ_SPACE_TYPE = "UPDATE_WIZ_SPACE_TYPE";
const UPDATE_WIZ_SPACE_QUANTITY = "UPDATE_WIZ_SPACE_QUANTITY";
const UPDATE_WIZ_SPACE_SIZE = "UPDATE_WIZ_SPACE_SIZE";
const UPDATE_WIZ_DESCRIPTION = "UPDATE_WIZ_DESCRIPTION";
const UPDATE_WIZ_INSTRUCTIONS = "UPDATE_WIZ_INSTRUCTIONS";
const UPDATE_WIZ_STREET_VIEW = "UPDATE_WIZ_STREET_VIEW"
const UPDATE_WIZ_COVERED = "UPDATE_WIZ_COVERED";
const UPDATE_WIZ_LIT = "UPDATE_WIZ_LIT";
const UPDATE_WIZ_CHARGING = "UPDATE_WIZ_CHARGING";
const UPDATE_WIZ_CAMERA = "UPDATE_WIZ_CAMERA";
const UPDATE_WIZ_FENCED = "UPDATE_WIZ_FENCED";
const UPDATE_WIZ_GUARDED = "UPDATE_WIZ_GUARDED";


// Reducers specify how the app's state changes in response to actions sent to the store.
// The reducer is a pure function that takes the previous state and an action, and returns the next state.
// Inside a reducer, NEVER do the following:
//      mutate it's arguments, make API calls & routing transitions, call nonpure functions(Math.random, etc).


export default function reducer(state = initialState, action) {
    // specify the initial state here. Redux will call our reducer with an undefined state for the first time. 
    // Each of the following reducers is managing its own part of the global state.
    switch (action.type) {
        case GET_USER_DATA + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });
        // Don't mutate the state, create a copy of it with Object.assign. Supply an empty object as the first parameter.

        case UPDATE_WIZ_LAT:
            return Object.assign({}, state, { lat: action.payload });

        case UPDATE_WIZ_LNG:
            return Object.assign({}, state, { lng: action.payload });

        case UPDATE_WIZ_ADDRESS:
            return Object.assign({}, state, { address: action.payload });

        case UPDATE_WIZ_BUILDING_TYPE:
            return Object.assign({}, state, { buildingType: action.payload });

        case UPDATE_WIZ_SPACE_TYPE:
            return Object.assign({}, state, { spaceType: action.payload });

        case UPDATE_WIZ_SPACE_QUANTITY:
            return Object.assign({}, state, { spaceQuantity: action.payload });

        case UPDATE_WIZ_SPACE_SIZE:
            return Object.assign({}, state, { spaceSize: action.payload });

        case UPDATE_WIZ_DESCRIPTION:
            return Object.assign({}, state, { description: action.payload });

        case UPDATE_WIZ_INSTRUCTIONS:
            return Object.assign({}, state, { instructions: action.payload });

        case UPDATE_WIZ_STREET_VIEW:
            return Object.assign({}, state, { streetView: action.payload });

        case UPDATE_WIZ_COVERED:
            return Object.assign({}, state, { covered: action.payload });

        case UPDATE_WIZ_LIT:
            return Object.assign({}, state, { lit: action.payload });

        case UPDATE_WIZ_CHARGING:
            return Object.assign({}, state, { charging: action.payload });

        case UPDATE_WIZ_CAMERA:
            return Object.assign({}, state, { camera: action.payload });

        case UPDATE_WIZ_FENCED:
            return Object.assign({}, state, { fenced: action.payload });

        case UPDATE_WIZ_GUARDED:
            return Object.assign({}, state, { guarded: action.payload });

        // Return the previous state in the default case.  We do that for any unknown actions.
        default:
            return state;
    }
}

// Action creators are functions that create(return) actions, which makes them portable and easy to test.
// Pass the result of the action creator to the dispatch function to initiate a dispatch


export function getUser() {
    let userData = axios.get('./auth/user').then(res => res.data);
    return {
        type: GET_USER_DATA,
        payload: userData
    }
}

export function updateWizLat(lat) {
    return {
        type: UPDATE_WIZ_LAT,
        payload: lat
    }
}

export function updateWizLng(lng) {
    return {
        type: UPDATE_WIZ_LNG,
        payload: lng
    }
}

export function updateWizAddress(address) {
    return {
        type: UPDATE_WIZ_ADDRESS,
        payload: address
    }
}

export function updateWizBuildingType(buildingType) {
    // console.log('bilding type action creator works')
    return {
        type: UPDATE_WIZ_BUILDING_TYPE,
        payload: buildingType
    }
}

export function updateWizSpaceType(spaceType) {
    return {
        type: UPDATE_WIZ_SPACE_TYPE,
        payload: spaceType
    }
}

export function updateWizSpaceQuantity(spaceQuantity) {
    return {
        type: UPDATE_WIZ_SPACE_QUANTITY,
        payload: spaceQuantity
    }
}

export function updateWizSpaceSize(spaceSize) {
    return {
        type: UPDATE_WIZ_SPACE_SIZE,
        payload: spaceSize
    }
}

export function updateWizDescription(description) {
    return {
        type: UPDATE_WIZ_DESCRIPTION,
        payload: description
    }
}

export function updateWizInstructions(instructions) {
    return {
        type: UPDATE_WIZ_INSTRUCTIONS,
        payload: instructions
    }
}

export function updateWizStreetView(streetView) {
    return {
        type: UPDATE_WIZ_STREET_VIEW,
        payload: streetView
    }
}

export function updateWizCovered(covered) {
    return {
        type: UPDATE_WIZ_COVERED,
        payload: covered
    }
}

export function updateWizLit(lit) {
    return {
        type: UPDATE_WIZ_LIT,
        payload: lit
    }
}

export function updateWizCharging(charging) {
    return {
        type: UPDATE_WIZ_CHARGING,
        payload: charging
    }
}

export function updateWizCamera(camera) {
    return {
        type: UPDATE_WIZ_CAMERA,
        payload: camera
    }
}

export function updateWizFenced(fenced) {
    return {
        type: UPDATE_WIZ_FENCED,
        payload: fenced
    }
}

export function updateWizGuarded(guarded) {
    return {
        type: UPDATE_WIZ_GUARDED,
        payload: guarded
    }
}
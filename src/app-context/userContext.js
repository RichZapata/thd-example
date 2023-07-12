import React, { createContext, useReducer } from 'react';

const initialState = {
    name: '',
    lastName: '',
    birthPlace: '',
    birthDate: ''
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload };
        case 'SET_LAST_NAME':
            return { ...state, lastName: action.payload };
        case 'SET_BIRTH_PLACE':
            return { ...state, birthPlace: action.payload };
        case 'SET_BIRTH_DATE':
            return { ...state, birthDate: action.payload.toString() };
        default:
            return state;
    }
};

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, dispatch] = useReducer(reducer,  initialState);

    return (
        <UserContext.Provider value={{ user, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
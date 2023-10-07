import React, { createContext, useReducer, useState } from 'react'
import user1 from "../../assets/Dummy.jpg"
import user2 from "../../assets/Dummy2.jpg"
import user3 from "../../assets/Dummy3.jpg"
export const MyData = createContext()
const reducer = (state, action) => {
    switch (action.type) {
        case "checking": {
            return state.map((item) => {
                if (action.value === item.cardId && !item.hasEntered) {
                    console.log("item");
                    return { ...item, hasEntered: true };
                } else if (action.value === item.cardId && item.hasEntered) {
                    console.log("here");
                    const updatedUser = {
                        ...item,
                        hasEntered: item.hasEntered,
                        id: item.id,
                    };
                    return {
                        ...item,
                        currentUser: updatedUser,
                    };
                } else {
                    return item;
                }
            });
        }
        default:
            return state;
    }
};

export const MyContext = (props) => {
    const [entered, setEntered] = useState(false)
    const [users, setUsers] = useState([
        { id: 1, name: "Mehrshad", nationalCode: 12312312313, picture: user1, entranceNumber: 0, cardId: "123456789" },
        { id: 2, name: "Ali", nationalCode: 54645612313, picture: user2, entranceNumber: 1, cardId: "987654321" },
        { id: 3, name: "Abbas", nationalCode: 9808908907657, picture: user3, entranceNumber: 0, cardId: "888765354" },
    ])
    const [currentUser, setCurrentUser] = useState({
        nationalCode: '',
        picture: '',
        name: '',
        entranceNumber: 0
    })
    const [hasError, setHasError] = useState(false)

    const [state, dispatch] = useReducer(reducer, users)
    console.log(state)
    return (
        <MyData.Provider value={[entered, setEntered, users, setUsers, state, dispatch,currentUser, setCurrentUser,hasError, setHasError]}>
            {props.children}
        </MyData.Provider>
    )
}

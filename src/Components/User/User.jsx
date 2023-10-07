import React, { useContext, useEffect, useRef, useState } from 'react'
import "./User.scss"
import fistlogo from "../../assets/Secondary-logo.svg"
import { FingerPrint } from './FingerPrint'
import { SuccessfulEntrance } from './SuccessfulEntrance'
import { MyData } from '../Context/MyContext'
import { MdDangerous } from "react-icons/md";

export const User = () => {
    const refocusRef = useRef()

    const [userFound, setUserFound] = useState(false)
    const [entredPerson, setEnteredPerson] = useState()
    const [entered, setEntered, users, setUsers, state, dispatch, currentUser, setCurrentUser, hasError, setHasError] = useContext(MyData)
    const [input, setInput] = useState("")


    console.log(users)
    useEffect(() => {
        if (input.length === 9) {
            checkUser()
        }
        if (input.length === 0) {
            setTimeout(() => {
                setHasError(false)
                setCurrentUser({
                    nationalCode: '',
                    picture: '',
                    name: '',
                    entranceNumber: 0
                })
                setUserFound(false)
                setEntered(false)
            }, 2000);
        }
        if (input.length > 0 && input.length < 9){
            
        }


    }, [input])

    const checkUser = () => {
        for (let item of users) {
            if (item.cardId === input) {
                console.log(input);
                console.log("success");
                setUserFound(true)
                setEntered(true)
                setHasError(false)
                item.entranceNumber++
                setCurrentUser({ nationalCode: item.nationalCode, picture: item.picture, name: item.name, entranceNumber: item.entranceNumber });
                setInput("")
                break
            } else {
                setCurrentUser({
                    nationalCode: '',
                    picture: '',
                    name: '',
                    entranceNumber: 0
                })
                setHasError(true)
                setEntered(true)
                setUserFound(false)
                setInput("")
            }
        }
    }
    const refocusHandler = () => {
        refocusRef.current.focus()
    }

    const inputHandler = (e) => {
        setInput(e.target.value)
    }

    return (

        <div className='row d-flex justify-content-center align-items-center w-100 h-100 flex-column'>
            <input type="text" className='w-50 m-5 hidden-input' autoFocus onChange={inputHandler} maxLength={9} value={input} ref={refocusRef} onBlur={refocusHandler} />
            <div className='col-sm-6 col-md-3 mt-2 col-10  usercontainer '>
                <img src={fistlogo} alt="" className='position-absolute top-0 start-50 translate-middle ' />
                {!entered && <FingerPrint />}
                <SuccessfulEntrance entredPerson={entredPerson} userFound={userFound} />
            </div>
        </div>
    )
}

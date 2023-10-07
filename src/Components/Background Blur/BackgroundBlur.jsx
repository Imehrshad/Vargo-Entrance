import React, { useContext, useState } from 'react'
import "../Background Blur/BackgroundBlur.scss"
import { MyData } from '../Context/MyContext'

export const BackgroundBlur = () => {
    const [entered, setEntered, users, setUsers, state, dispatch, currentUser, setCurrentUser, hasError, setHasError] = useContext(MyData)
    return (
        <div className='spanContainer position-relative'>
            <span className='firstSpan'></span>
            <span className='secondSpan'></span>
            <span className='thirdSpan'></span>
            <span className={`left-span ${currentUser.entranceNumber > 1  ? "yellow span-opacity" : currentUser.entranceNumber === 1  ? "green span-opacity" : hasError ? "red span-opacity" : ""}`}></span>

            <span className={`right-span ${currentUser.entranceNumber > 1  ? "yellow span-opacity" : currentUser.entranceNumber === 1  ? "green span-opacity" : hasError ? "red span-opacity" : ""}`}></span>
        </div>
    )
}

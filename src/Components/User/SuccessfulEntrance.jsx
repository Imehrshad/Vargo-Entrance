import React, { useContext, useEffect } from 'react'
import "./SuccessfulEntrance.scss"
import { MyData } from '../Context/MyContext'
import { MdDangerous } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { IoMdWarning } from "react-icons/io";
import SuccessfulSound from "../../assets/Sounds/Successful.mp3"
import FailedSound from "../../assets/Sounds/Failed.mp3"

export const SuccessfulEntrance = ({ userFound }) => {
    const sucessfulAudio = new Audio(SuccessfulSound);
    const failedAudio = new Audio(FailedSound);
    const [entered, setEntered, users, setUsers, state, dispatch, currentUser, setCurrentUser, hasError, setHasError] = useContext(MyData)
    useEffect(() => {
        if (currentUser.entranceNumber > 1 && userFound ||currentUser.entranceNumber === 1 && userFound ){
            sucessfulAudio.play()
        }
        if(hasError){
            failedAudio.play()
        }

    }, [currentUser])

    return (
        <>
            {currentUser.entranceNumber > 1 && userFound && <div className='profileContianer w-100 p-3 mt-3 d-flex justify-content-center align-items-center flex-column gap-2'>
                < img src={currentUser.picture} alt="" />
                <p className='text-white p-0 m-0'>{currentUser.name} </p>
                <p className='text-white p-0 m-0'>{currentUser.nationalCode}</p>
                <div className='duplicate d-flex justify-content-center align-items-center w-100 '>
                    <IoMdWarning />
                    <p>این کاربر قبلا وارد شده</p>
                </div>
            </div>
            }
            {currentUser.entranceNumber === 1 && userFound && <div className='profileContianer w-100 p-3 mt-5 d-flex justify-content-center align-items-center flex-column gap-2'>
                < img src={currentUser.picture} alt="" />
                <p className='text-white p-0 m-0'>{currentUser.name} </p>
                <p className='text-white p-0 m-0'>{currentUser.nationalCode}</p>
                <div className='successful d-flex justify-content-center align-items-center w-100 '>
                    <FaCheck />
                    <p>ورود با موفقیت انجام شد</p>
                </div>
            </div>
            }
            {hasError && <div className='profileContianer w-100 p-3 mt-5 d-flex justify-content-center align-items-center flex-column gap-2'>
                <div className='failed d-flex justify-content-center align-items-center w-100 h-50'>
                    <MdDangerous />
                    <p>این کاربر در دیتا وجود ندارد</p>
                </div>
            </div>
            }



        </>

    )
}

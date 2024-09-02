import React, { useContext } from 'react'
import '../styles/Notifications.css'
import {RxCross2} from 'react-icons/rx' 
import { GeneralContext } from '../context/GeneralContext'

const Notifications = () => {

    const {isNotificationsOpen, setNotificationsOpen} = useContext(GeneralContext);

  return (
    <>
        <div className="notifications" style={isNotificationsOpen? {display: 'contents'} : {display: 'none'}} >
            <div className="notificationsContainer">
               
                <RxCross2 className='closenotifications' onClick={()=> setNotificationsOpen(false)} />
                <h2 className="notificationsTitle">Notifications</h2>
                <hr className="notificationsHr" />
                
                <div className="notificationsBody">
                    <p>No notifications yet!</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Notifications;
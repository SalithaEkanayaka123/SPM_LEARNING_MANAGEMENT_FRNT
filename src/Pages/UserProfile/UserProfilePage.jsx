import React, {useState} from 'react'
import UserProfile from "../StudentProfilePage/UserProfile";
import ProfileClassRoom from "../../Component/ProfileClassRoom/ProfileClassRoom";


function UserProfilePage() {

    return (
        <div>
            <UserProfile />
            <ProfileClassRoom/>
        </div>
    )
}

export default UserProfilePage

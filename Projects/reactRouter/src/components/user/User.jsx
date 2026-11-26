import React from 'react'
import { useParams } from 'react-router'

function User() {
    const {UserId} = useParams()
    return (
        <>
        User : {UserId}
        </>
    )
}

export default User

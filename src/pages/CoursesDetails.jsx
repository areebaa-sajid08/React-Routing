import React from 'react'
import {useParams } from 'react-router-dom'
const CoursesDetails = () => {
    const { id } = useParams()

    return (
        <div>
            <h1>{id} Course Details</h1>
        </div>
    )
}

export default CoursesDetails

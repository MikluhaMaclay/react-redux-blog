import React from 'react'
import Rainbow from '../hoc/Rainbow'
const About = () => {

    // console.log(Rainbow(this))
    return(
        <div className="container">
            <h4 className="center">About page</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sequi illo perferendis porro a tempora maxime possimus amet quos repellat.</p>
        </div>
    )
}

export default Rainbow(About);
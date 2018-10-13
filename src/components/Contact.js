import React from 'react'

const Contact = (props) => {
    setTimeout(() => {
        props.history.push('/about')
    } , 2000)
    // Redirect with history push
    return(

        <div className="container">
            <h4 className="center">Contact page</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sequi illo perferendis porro a tempora maxime possimus amet quos repellat.</p>
        </div>
    )
}

export default Contact;
import React from "react";

const Rainbow = (WrappedComponent) => {

    const colours = ['red', 'pink', 'orange', 'blue' , 'green' , 'yellow'];
    const randomColor = colours[Math.floor(Math.random() * 5)];
    const className = randomColor + '-text';
    // console.log(WrappedComponent)
    return ((props) => {
        return(
             <div className={ className }>
                <WrappedComponent {...props}/>
            </div> 
        )
    })
}

export default Rainbow;
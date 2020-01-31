import React from 'react';
import './Course.css'
const Course = (props) => {
    return (
        <div className="Card">
           <img src={props.image} alt="sample"></img>
           <h3>{props.title}</h3>
           <h4>{props.author}</h4>
           <button onClick={props.action}>Add To Cart</button>
        </div>
    );
};
export default Course;
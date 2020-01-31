import React from 'react';
import Course  from './Course';
const courseData = [
    {
        image: "https://i.udemycdn.com/course/240x135/1219332_bdd7.jpg",
        title: "Artificial Intelligence A-Z",
        author: "Hadelin de Ponteves"
    },
    {
        image: "https://i.udemycdn.com/course/240x135/914296_3670_8.jpg",
        title: "The Digital Marketing Course",
        author: "Rob Percival"
    },
    {
        image: "https://i.udemycdn.com/course/240x135/1219332_bdd7.jpg",
        title: "Machine Learning A-Z",
        author: "Hadelin de Ponteves"
    },
    {
        image: "https://i.udemycdn.com/course/240x135/1495788_1aaa_2.jpg",
        title: "Python Programming",
        author: "Ivan Lourence Gomes"
    },
]

const CourseList = () => {
    let coursesList = courseData.map((course,i) => {
        return (
            <Course key={i} image={course.image} title={course.title} author={course.author}   />
        );
    });
    return (
        <div>
            {coursesList }
        </div>
    );
};
export default CourseList;
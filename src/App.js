import React, { Component } from 'react';
import CourseList from './Components/Courses/CourseList'
import Cart from './Components/Cart/Cart'
import './App.css'
class App extends Component {
  action(){
    let value=1
  }
  render() {
    return (
      <div >
        <CourseList />
      </div>
    );
  }
}

export default App;
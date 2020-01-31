import React, { Component } from 'react';
import CourseList from './Components/Courses/CourseList'
import Cart from './Components/Cart/Cart'
import './App.css'
class App extends Component {
  render() {
    return (
      <div >
        <Cart value="added"/>
        <CourseList />
      </div>
    );
  }
}

export default App;
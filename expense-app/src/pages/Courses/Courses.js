import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import CourseItem from './CourseItem/CourseItem';

const Courses = () => {
    return (
        <div>
            <h3>Select your favorate course to learn</h3>
            <ul>
                <li>
                    <Link to="angular/100">Angular</Link>
                </li>
                <li>
                    <Link to="react/80">React</Link>
                </li>
                <li>
                    <Link to="vue/60">Vue</Link>
                </li>
            </ul>

            <hr />
            <Routes>
                <Route path=":courseName/:courseDuration" element={<CourseItem />} />
            </Routes>
        </div>
    );
}

export default Courses;

import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import CourseItem from './CourseItem/CourseItem';

const Courses = () => {
    return (
        <div>
            <h3>Select your favorate course to learn</h3>
            <ul>
                <li>
                    <Link to="angular">Angular</Link>
                </li>
                <li>
                    <Link to="react">React</Link>
                </li>
                <li>
                    <Link to="vue">Vue</Link>
                </li>
            </ul>

            <hr />
            <Routes>
                <Route path=":courseName" element={<CourseItem />} />
            </Routes>
        </div>
    );
}

export default Courses;

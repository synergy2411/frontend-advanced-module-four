import React from 'react';
import { useParams } from 'react-router-dom';

const CourseItem = () => {
    const params = useParams();
    return (
        <div>
            Course Selected : {params.courseName.toUpperCase()}
        </div>
    );
}

export default CourseItem;

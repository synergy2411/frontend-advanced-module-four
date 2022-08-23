import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CourseItem = () => {
    const params = useParams();
    const navigate = useNavigate();

    return (
        <div>
            Course Selected : {params.courseName.toUpperCase()}
            <br />
            Course Duration : {params.courseDuration}Hrs
            <br />
            <button className="btn btn-primary"
                onClick={() => navigate("/courses/react/80")}>Go back</button>
        </div>
    );
}

export default CourseItem;

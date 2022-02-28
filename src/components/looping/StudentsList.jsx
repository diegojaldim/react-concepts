import React from "react";
import students from '../../data/students';

const StudentsList = props => {
    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                { students.map(el => <li key={el.id}>({el.id}) {el.name} - {el.grade}</li>) }
            </ul>
        </div>
    )
}

export default StudentsList;
import React from 'react'
import { Link } from 'react-router-dom'
import { courses } from '../infra/courses'

const Courses = () => {
  return (
    <>
      <h2>Courses</h2>

      <ul>
        {courses.map(({ id, name }) => (
          <li key={id}>
            <Link to={`learn/course/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Courses

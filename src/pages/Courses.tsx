import React from 'react'
import { Link } from 'react-router-dom'
import usePath from '../hooks/path'
import { uuid } from '../utilities/uuid'

const courses = [
  { id: uuid.long(), name: 'Web Front-end' },
  { id: uuid.long(), name: 'Back-end NodeJS' },
  { id: uuid.long(), name: 'Dsenvolvimento Java' },
  { id: uuid.long(), name: 'Dsenvolvimento C#' },
]

const Courses = () => {


  // const links = Object.entries({
  //   [usePath(Routes.CourseLiveLectures, match.params)]: 'Gravações',
  //   [usePath(Routes.CourseSolutions, match.params)]: 'Gabaritos',
  // })

  return (
    <>
      <h2>Courses</h2>

      <ul>
        {courses.map(({ id, name }) => (
          <li className="underline text-blue-500" key={id}>
            <Link to={`learn/course/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Courses

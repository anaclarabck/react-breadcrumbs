import { RouteNavProps } from '../vite-env'
import { Routes } from '../config/routes'
import { Link } from 'react-router-dom'
import usePath from '../hooks/path'
import React from 'react'

interface CourseProps {
  courseId: string
}

const Course = (props: RouteNavProps<CourseProps>) => {
  const { match } = props

  const links = Object.entries({
    [usePath(Routes.CourseLiveLectures, match.params)]: 'Gravações',
    [usePath(Routes.CourseSolutions, match.params)]: 'Gabaritos',
  })

  return (
    <>
      <h2>Course </h2>

      <ul>
        {links.map(([link, label]) => (
          <Link key={link} to={link}>
            {' '}
            {label}{' '}
          </Link>
        ))}
      </ul>
    </>
  )
}

export default Course

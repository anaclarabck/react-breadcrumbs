import { Routes } from '../config/routes'
import { Link, RouteChildrenProps } from 'react-router-dom'
import usePath from '../hooks/path'
import React from 'react'
import { courses } from '../infra/courses'

interface CourseProps {
  courseId: string
}

const Course = (props: RouteChildrenProps<CourseProps>) => {
  const { match } = props

  const course = courses.find((course) => course.id === match.params.courseId)

  const modules = course.modules.map(({ id, name }) => {
    return {
      path: usePath(Routes.CourseModule, { ...match.params, moduleId: id }),
      name: name,
    }
  })

  return (
    <div>
      <h2>Course </h2>
      <section>
        <ul>
          {modules.map(({ path, name }) => (
            <Link key={path} to={path}>
              {name}
            </Link>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Course

import { Link, RouteChildrenProps } from 'react-router-dom'
import { Routes } from '../config/routes'
import service from '../infra/service'
import { PathArgs } from '../vite-env'
import usePath from '../hooks/path'
import React from 'react'

type CourseProps = RouteChildrenProps<PathArgs<Routes.Course>>

const Course = (props: CourseProps) => {
  const { match } = props

  const course = service.getCourse(match.params)

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

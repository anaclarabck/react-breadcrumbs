import { generatePath, Link, RouteChildrenProps } from 'react-router-dom'
import { Routes } from '../config/routes'
import service from '../infra/service'
import { PathArgs } from '../vite-env'
import React from 'react'

type CourseProps = RouteChildrenProps<PathArgs<Routes.Course>>

const Course = (props: CourseProps) => {
  const { match } = props

  const course = service.getCourse(match.params)

  const modules = course.modules.map(({ id, name }) => {
    const params = { ...match.params, moduleId: id }
    const path = generatePath(Routes.CourseModule, params)
    return { path, name }
  })

  return (
    <div>
      <h2>{course.name} </h2>
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

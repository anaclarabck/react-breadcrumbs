import { Link, RouteChildrenProps } from 'react-router-dom'
import { courses } from '../infra/courses'
import { PathArgs } from '../vite-env'
import { Routes } from '../config/routes'
import usePath from '../hooks/path'
import React from 'react'

type ModuleProps = RouteChildrenProps<PathArgs<Routes.CourseSection>>

const Module = ({ match }: ModuleProps) => {
  const { params } = match

  const course = courses.find((course) => course.id === params.courseId)
  const module = course.modules.find(({ id }) => id === params.moduleId)

  let sectionId = params.sectionId
    ? module.sections.find(({ id }) => id === params.sectionId).id
    : false

  const sectionCards = module.sections.map(({ id, name, lessons }) => {
    return {
      id,
      path: usePath(Routes.CourseSection, { ...match.params, sectionId: id }),
      name: name,
      lessons: lessons.map(({ id, name }) => ({
        path: usePath(Routes.CourseSection, { ...match.params, sectionId: id }),
        name: name,
      })),
    }
  })

  return (
    <>
      <h2>Module </h2>

      <ul>
        {sectionCards.map(({ path, name, lessons, id }) => (
          <details key={'details' + path} open={sectionId === id}>
            <summary key={'details' + path}>
              <Link to={path}>{name}</Link>
            </summary>

            {lessons.map((lesson) => (
              <article key={lesson.name}>{lesson.name}</article>
            ))}
          </details>
        ))}
      </ul>
    </>
  )
}

export default Module

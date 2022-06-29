import { generatePath, Link, RouteChildrenProps } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import { Routes } from '../config/routes'
import service from '../infra/service'
import { PathArgs } from '../vite-env'
import React from 'react'

type ModuleProps = RouteChildrenProps<PathArgs<Routes.CourseSection>>

const Module = ({ match }: ModuleProps) => {
  const { params } = match

  const module = service.getModule(params)

  let sectionId = params.sectionId ? service.getSection(params).id : false

  const sectionCards = module.sections.map(({ id, name, ...rest }) => {
    const params = { ...match.params, sectionId: id }
    const path = generatePath(Routes.CourseSection, params)

    const lessons = rest.lessons.map(({ id, name }) => {
      const params = { ...match.params, sectionId: id }
      const path = generatePath(Routes.CourseSection, params)
      return { id, path, name }
    })

    return { id, path, name, lessons }
  })

  return (
    <>
      <Breadcrumbs />

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

import routes, { Routes } from '../config/routes'
import { Link, RouteChildrenProps } from 'react-router-dom'
import { uuid } from '../utilities/uuid'
import useCrumbs from '../hooks/crumbs'
import usePath from '../hooks/path'
import React from 'react'

interface CourseProps {
  courseId: string
}

const Course = (props: RouteChildrenProps<CourseProps>) => {
  const { match } = props

  const links = Object.entries({
    [usePath(Routes.CourseLiveLectures, match.params)]: 'Gravações',
    [usePath(Routes.CourseSolutions, match.params)]: 'Gabaritos',
  })

  const modules = [
    { id: uuid.long(), name: 'Móodule 1' },
    { id: uuid.long(), name: 'Móodule 2' },
    { id: uuid.long(), name: 'Móodule 3' },
  ].map(({ id, name }) => {
    return {
      path: usePath(Routes.CourseModule, { ...match.params, moduleId: id }),
      name: name,
    }
  })

  const crumbs = useCrumbs(routes, props)

  return (
    <div>
      <h2>Course </h2>

      <nav>
        {links.map(([link, label]) => (
          <Link key={link} to={link}>
            {' '}
            {label}{' '}
          </Link>
        ))}
      </nav>

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

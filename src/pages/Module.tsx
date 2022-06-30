import { Link, RouteChildrenProps } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import { Routes } from '../config/routes'
import { PathArgs } from '../vite-env'
import service from '../infra/service'
import Facade from '../infra/facade'
import pick from '../utilities/pick'

type ModuleProps = RouteChildrenProps<PathArgs<Routes.CourseSection>>

const Module = (props: ModuleProps) => {
  const { params } = props.match

  let sectionId = params.sectionId
    ? pick(service.getSection(params), 'id')
    : false

  const facade = Facade(props)

  const module = service.getModule(params)
  const sectionCards = facade.getSections(module)

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

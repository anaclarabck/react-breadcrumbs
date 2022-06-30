import { Link, RouteChildrenProps } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import { Routes } from '../config/routes'
import { PathArgs } from '../vite-env'
import service from '../infra/service'
import Facade from '../infra/facade'

type CourseProps = RouteChildrenProps<PathArgs<Routes.Course>>

const Course = (props: CourseProps) => {
  const { match } = props

  const facade = Facade(props)

  const course = service.getCourse(match.params)
  const modules = facade.getModules(course)

  return (
    <div>
      <Breadcrumbs />
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

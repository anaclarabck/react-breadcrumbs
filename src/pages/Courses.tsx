import { Link, RouteChildrenProps } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import { Routes } from '../config/routes'
import { PathArgs } from '../vite-env'
import Facade from '../infra/facade'

type CoursesProps = RouteChildrenProps<PathArgs<Routes.Learn>>

const Courses = (props: CoursesProps) => {
  const facade = Facade(props)

  const courses = facade.getCourses()

  return (
    <>
      <Breadcrumbs />

      <h2>Courses</h2>

      <ul>
        {courses.map(({ path, name }) => (
          <li key={path}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Courses

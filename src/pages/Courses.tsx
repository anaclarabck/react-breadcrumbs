import { generatePath, Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import { Routes } from '../config/routes'
import service from '../infra/service'

const Courses = () => {
  const courses = service.getCourses().map(({ id, name }) => {
    const path = generatePath(Routes.Course, { courseId: id })
    return { path, name }
  })

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

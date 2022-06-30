import { generatePath, RouteChildrenProps } from 'react-router-dom'
import { Course, PathArgs } from '../vite-env'
import { Routes } from '../config/routes'
import service from './service'

function Facade({ match }: PathArgs<Routes.CourseSection>) {
  const getCourses = () => {
    return service.getCourses().map(({ id, name }) => {
      const path = generatePath(Routes.Course, { courseId: id })
      return { path, name }
    })
  }

  const getModules = (course: Course) => {
    return course.modules.map(({ id, name }) => {
      const params = { ...match.params, moduleId: id }
      const path = generatePath(Routes.CourseModule, params)
      return { path, name }
    })
  }

  const getSections = (module: Course['modules'][0]) => {
    return module.sections.map(({ id, name, ...rest }) => {
      const params = { ...match.params, sectionId: id }
      const path = generatePath(Routes.CourseSection, params)

      const lessons = rest.lessons.map(({ id, name }) => {
        const params = { ...match.params, sectionId: id }
        const path = generatePath(Routes.CourseSection, params)
        return { id, path, name }
      })

      return { id, path, name, lessons }
    })
  }

  return {
    getCourses,
    getModules,
    getSections,
  }
}

export default Facade

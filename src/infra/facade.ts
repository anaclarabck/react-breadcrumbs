import { generatePath } from 'react-router-dom'
import { Course, PathArgs, CourseSection } from '../vite-env'
import { Routes } from '../config/routes'
import service from './service'

function Facade({ match }: PathArgs<Routes.LEARN_COURSE_LESSON_PATH>) {
  const getCourses = () => {
    return service.getCourses().map(({ id, name }) => {
      const path = generatePath(Routes.LEARN_COURSE_PATH, { courseId: id })
      return { path, name }
    })
  }

  const getModules = (course: Course) => {
    return course.modules.map(({ id, name }) => {
      const params = { ...match.params, moduleId: id }
      const path = generatePath(Routes.LEARN_COURSE_MODULE_PATH, params)
      return { path, name }
    })
  }

  const getSections = (module: Course['modules'][0]) => {
    return module.sections.map(({ id, name, ...rest }) => {
      const params = { ...match.params, sectionId: id, moduleId: module.id }
      const path = generatePath(Routes.LEARN_COURSE_SECTION_PATH, params)

      const lessons = rest.lessons.map(({ id, name }) => {
        const params = { ...match.params, sectionId: id }
        const path = generatePath(Routes.LEARN_COURSE_SECTION_PATH, params)
        return { id, path, name }
      })

      return { id, path, name, lessons }
    })
  }

  const getLessons = (section: CourseSection) => {
    return section.lessons.map(({ id, name }) => {
      const params = { ...match.params, lessonId: id, sectionId: section.id }
      const path = generatePath(Routes.LEARN_COURSE_LESSON_PATH, params)
      return { id, path, name }
    })
  }

  const getProjects = (course: Course) => {
    return course.projects.map(({ id, name }) => {
      const params = { ...match.params, projectId: id }
      const path = generatePath(Routes.LEARN_COURSE_PROJECT_PATH, params)
      return { id, path, name }
    })
  }

  return {
    getCourses,
    getModules,
    getSections,
    getLessons,
    getProjects,
  }
}

export default Facade

import { Course, PathArgs } from '../vite-env'
import { Routes } from '../config/routes'
import { courses } from './courses'

function Service(courses: Course[]) {
  const getCourses = () => {
    return courses
  }

  const getCourse = (params: PathArgs<Routes.Course>) => {
    return courses.find((course) => course.id === params.courseId)
  }

  const getModule = (params: PathArgs<Routes.CourseModule>) => {
    const { modules } = getCourse(params)
    return modules.find(({ id }) => id === params.moduleId)
  }

  const getSection = (params: PathArgs<Routes.CourseSection>) => {
    const { sections } = getModule(params)
    return sections.find(({ id }) => id === params.sectionId)
  }

  return {
    getCourses,
    getCourse,
    getModule,
    getSection,
  }
}

const service = Service(courses)

export default service

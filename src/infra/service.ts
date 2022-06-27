import { Routes } from '../config/routes'
import { Course, PathArgs } from '../vite-env'
import { courses } from './courses'

function Service(courses: Course[]) {
  return {
    getCourses() {
      return courses
    },
    getCourse(params: PathArgs<Routes.Course>) {
      return courses.find((course) => course.id === params.courseId)
    },
    getModule(params: PathArgs<Routes.CourseModule>) {
      const { modules } = courses.find(
        (course) => course.id === params.courseId
      )
      return modules.find((module) => module.id === params.moduleId)
    },
    getSection(params: PathArgs<Routes.CourseSection>) {
      const { modules } = courses.find(
        (course) => course.id === params.courseId
      )
      const { sections } = modules.find(
        (module) => module.id === params.moduleId
      )
      return sections.find((section) => section.id === params.sectionId)
    },
  }
}

const service = Service(courses)

export default service

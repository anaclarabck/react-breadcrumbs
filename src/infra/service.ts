import { Course, PathArgs } from '../vite-env'
import { Routes } from '../config/routes'
import { courses } from './courses'

function Service(courses: Course[]) {
  const getCourses = () => {
    return courses
  }

  const getCourse = (params: PathArgs<Routes.LEARN_COURSE_PATH>) => {
    return courses.find((course) => course.id === params.courseId)
  }

  const getModule = (params: PathArgs<Routes.LEARN_COURSE_MODULE_PATH>) => {
    const { modules } = getCourse(params)
    return modules.find(({ id }) => id === params.moduleId)
  }

  const getSection = (params: PathArgs<Routes.LEARN_COURSE_SECTION_PATH>) => {
    const { sections } = getModule(params)
    return sections.find(({ id }) => id === params.sectionId)
  }

  const getLesson = (params: PathArgs<Routes.LEARN_COURSE_LESSON_PATH>) => {
    const { lessons } = getSection(params)
    return lessons.find(({ id }) => id === params.lessonId)
  }

  const getProject = (params: PathArgs<Routes.LEARN_COURSE_PROJECT_PATH>) => {
    const { projects } = getCourse(params)
    return projects.find(({ id }) => id === params.projectId)
  }

  return {
    getCourses,
    getCourse,
    getModule,
    getSection,
    getLesson,
    getProject,
  }
}

const service = Service(courses)

export default service

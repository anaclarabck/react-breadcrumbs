import { Breadcrumb, PathArgs } from '../vite-env'
import delay from '../utilities/delay'
import service from '../infra/service'

enum Routes {
  Home = '/', //ok
  LEARN_PATH = '/learn', //ok
  LEARN_COURSE_PATH = '/learn/course/:courseId', //ok
  LEARN_COURSE_MODULE_PATH = '/learn/course/:courseId/module/:moduleId', //ok
  LEARN_COURSE_SECTION_PATH = '/learn/course/:courseId/module/:moduleId/section/:sectionId', //ok
  LEARN_COURSE_LESSON_PATH = '/learn/course/:courseId/module/:moduleId/section/:sectionId/lesson/:lessonId', //ok
  LEARN_COURSE_PROJECTS_PATH = '/learn/course/:courseId/projects', //ok
  LEARN_COURSE_PROJECT_PATH = '/learn/course/:courseId/projects/:projectId', //ok
  LEARN_COURSE_SOLUTIONS_PATH = '/learn/course/:courseId/solutions', // sem moduleId por enquanto
  LEARN_COURSE_LIVE_LECTURES = '/learn/course/:courseId/live-lectures', //sem cohortId por enquanto
  LEARN_STUDENT_MANUAL = 'learn/student-manual',
  LEARN_STUDENT_MANUAL_SECTION = 'learn/student-manual/:section',
  LEARN_STUDENT_MANUAL_SUBSECTION = 'learn/student-manual/:section/:subsection',
  LEARN_EXERCISE_SOLUTION_PATH = '/learn/course/:courseId/module/:moduleId/section/:sectionId/lesson/:lessonId/solution',
  LEARN_LIVE_LECTURES_VIDEO_PAGE = '/learn/course/:courseId/live-lectures/:cohordId/video/:videoId',
  // LEARN_COURSE_LIVE_LECTURES = '/learn/course/:courseId/live-lectures/:cohordId',
  LEARN_LIVE_LECTURES_CLASSES_PATH = '/learn/course/:courseId/live-lectures/classes',
  // LEARN_COURSE_DAY_LESSON_PATH = '/learn/course/:courseId/module/:moduleId/section/:sectionId/day/:dayId/lesson/:lessonId',
  // LEARN_DAY_EXERCISE_SOLUTION_PATH = '/learn/course/:courseId/module/:moduleId/section/:sectionId/day/:dayId/lesson/:lessonId/solution',
}

const routes: Breadcrumb[] = [
  { path: Routes.Home, name: () => 'Home' },
  { path: Routes.LEARN_PATH, name: () => 'Trybe' },
  {
    path: Routes.LEARN_COURSE_PATH,
    name: (params: PathArgs<Routes.LEARN_COURSE_PATH>) => {
      return delay((resolve) => {
        const course = service.getCourse(params)
        resolve(course.name)
      }, 200)
    },
  },
  { path: Routes.LEARN_COURSE_LIVE_LECTURES, name: () => 'Gravações' },
  { path: Routes.LEARN_COURSE_PROJECTS_PATH, name: () => 'Projetos' },
  {
    path: Routes.LEARN_COURSE_PROJECT_PATH,
    name: (params: PathArgs<Routes.LEARN_COURSE_PROJECT_PATH>) => {
      return delay((resolve) => {
        const project = service.getProject(params)
        resolve(project.name)
      }, 200)
    },
  },
  { path: Routes.LEARN_COURSE_SOLUTIONS_PATH, name: () => 'Gabaritos' },
  {
    path: Routes.LEARN_COURSE_MODULE_PATH,
    name: (params: PathArgs<Routes.LEARN_COURSE_MODULE_PATH>) => {
      return delay((resolve) => {
        const module = service.getModule(params)
        resolve(module.name)
      }, 100)
    },
  },
  {
    path: Routes.LEARN_COURSE_SECTION_PATH,
    name: (params: PathArgs<Routes.LEARN_COURSE_SECTION_PATH>) => {
      return delay((resolve) => {
        const section = service.getSection(params)
        resolve(section.name)
      }, 300)
    },
  },
  {
    path: Routes.LEARN_COURSE_LESSON_PATH,
    name: (params: PathArgs<Routes.LEARN_COURSE_LESSON_PATH>) => {
      return delay((resolve) => {
        const lesson = service.getLesson(params)
        resolve(lesson.name)
      }, 300)
    },
  },
]

export { Routes }

export default routes

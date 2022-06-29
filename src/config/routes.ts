import { Breadcrumb, PathArgs } from '../vite-env'
import delay from '../utilities/delay'
import service from '../infra/service'

enum Routes {
  Home = '/',
  Learn = '/learn',
  Course = '/learn/course/:courseId',
  CourseModule = '/learn/course/:courseId/module/:moduleId',
  CourseSection = '/learn/course/:courseId/module/:moduleId/section/:sectionId',
}

const routes: Breadcrumb[] = [
  {
    path: Routes.Home,
    name: () => 'Home',
  },
  { path: Routes.Learn, name: () => 'Cursos' },
  {
    path: Routes.Course,
    name: (params: PathArgs<Routes.Course>) => {
      return delay((resolve) => {
        const course = service.getCourse(params)
        resolve(course.name)
      }, 200)
    },
  },
  {
    path: Routes.CourseModule,
    name: (params: PathArgs<Routes.CourseModule>) => {
      return delay((resolve) => {
        const module = service.getModule(params)
        resolve(module.name)
      }, 100)
    },
  },
  {
    path: Routes.CourseSection,
    name: (params: PathArgs<Routes.CourseSection>) => {
      return delay((resolve) => {
        const section = service.getSection(params)
        resolve(section.name)
      }, 300)
    },
  },
]

export { Routes }

export default routes

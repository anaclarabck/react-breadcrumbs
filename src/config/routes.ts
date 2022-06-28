import { PathArgs, RouteConfig } from '../vite-env'
import delay from '../utilities/delay'
import service from '../infra/service'
import Courses from '../pages/Courses'
import Course from '../pages/Course'
import Module from '../pages/Module'
import Home from '../pages/Home'

enum Routes {
  Home = '/',
  Learn = '/learn',
  Course = '/learn/course/:courseId',
  CourseModule = '/learn/course/:courseId/module/:moduleId',
  CourseSection = '/learn/course/:courseId/module/:moduleId/section/:sectionId',
}

const routes: RouteConfig[] = [
  {
    path: Routes.Home,
    name: () => 'Home',
    Component: Home,
  },
  { path: Routes.Learn, name: () => 'Cursos', Component: Courses },
  {
    path: Routes.Course,
    name: (params: PathArgs<Routes.Course>) => {
      return delay((resolve) => {
        const course = service.getCourse(params)
        resolve(course.name)
      }, 200)
    },
    Component: Course,
  },
  {
    path: Routes.CourseModule,
    name: (params: PathArgs<Routes.CourseModule>) => {
      return delay((resolve) => {
        const module = service.getModule(params)
        resolve(module.name)
      }, 100)
    },
    Component: Module,
  },
  {
    path: Routes.CourseSection,
    name: (params: PathArgs<Routes.CourseSection>) => {
      return delay((resolve) => {
        const section = service.getSection(params)
        resolve(section.name)
      }, 300)
    },
    Component: Module,
  },
]

export { Routes }

export default routes

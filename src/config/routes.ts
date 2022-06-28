import Courses from '../pages/Courses'
import Course from '../pages/Course'
import Home from '../pages/Home'
import { PathArgs, RouteConfig } from '../vite-env'
import Module from '../pages/Module'
import { courses } from '../infra/courses'

const enum Routes {
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
    name: ({ courseId }: PathArgs<Routes.Course>) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const course = courses.find(({ id }) => id === courseId)

          resolve(course.name)
        }, 2000)
      })
    },
    Component: Course,
  },
  {
    path: Routes.CourseModule,
    name: ({ moduleId, courseId }: PathArgs<Routes.CourseModule>) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const course = courses.find(({ id }) => id === courseId)
          const module = course.modules.find(({ id }) => id === moduleId)
          resolve(module.name)
        }, 1000)
      })
    },
    Component: Module,
  },
  {
    path: Routes.CourseSection,
    name: ({
      moduleId,
      courseId,
      sectionId,
    }: PathArgs<Routes.CourseSection>) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const course = courses.find(({ id }) => id === courseId)
          const module = course.modules.find(({ id }) => id === moduleId)
          const section = module.sections.find(({ id }) => id === sectionId)
          resolve(section.name)
        }, 3000)
      })
    },
    Component: Module,
  },
]

type RouteKey = keyof Routes
type RoutePath<K extends RouteKey> = Record<K, Routes[K]>
export type { RouteKey, RoutePath }

export { Routes }

export default routes

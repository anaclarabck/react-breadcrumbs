import Recordings from '../pages/Recordings'
import Solutions from '../pages/Solutions'
import Courses from '../pages/Courses'
import Course from '../pages/Course'
import Home from '../pages/Home'
import { RouteConfig } from '../vite-env'

const enum Routes {
  Home = '/',
  Courses = '/courses',
  Course = '/courses/:courseId',
  CourseLiveLectures = '/courses/:courseId/live-lectures',
  CourseSolutions = '/courses/:courseId/solutions',
}

export default [
  { path: Routes.Home, name: 'Home', Component: Home },
  { path: Routes.Courses, name: 'Cursos', Component: Courses },
  { path: Routes.Course, name: '${courseName}', Component: Course },
  {
    path: Routes.CourseSolutions,
    name: 'Gabatitos',
    Component: Solutions,
  },
  {
    path: Routes.CourseLiveLectures,
    name: 'Gravações',
    Component: Recordings,
  },
] as RouteConfig[]

type RouteKey = keyof Routes
type RoutePath<K extends RouteKey> = Record<K, Routes[K]>
export type { RouteKey, RoutePath }

export { Routes }

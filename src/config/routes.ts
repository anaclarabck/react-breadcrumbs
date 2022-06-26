import Recordings from '../pages/Recordings'
import Solutions from '../pages/Solutions'
import Courses from '../pages/Courses'
import Course from '../pages/Course'
import Home from '../pages/Home'
import { RouteConfig } from '../vite-env'
import Module from '../pages/Module'

// /learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/a8675132-afce-4549-830a-fbcf92f8815f/section/6b0594be-6cfd-4d4c-b56c-68e1413659d3/lesson/708d2343-3f7d-4ef7-bb2a-e343124d5bb2/solution

const enum Routes {
  Home = '/',
  Learn = '/learn',
  Course = '/learn/course/:courseId',
  CourseModule = '/learn/course/:courseId/module/:moduleId',
  CourseSection = '/learn/course/:courseId/module/:moduleId/section/:sectionId',
  CourseSectionLesson = '/learn/course/:courseId/module/:moduleId/section/:sectionId/lesson/:lessonId',
  CourseLiveLectures = '/learn/course/:courseId/live-lectures',
  CourseSolutions = '/learn/course/:courseId/solutions',
}

export default [
  {
    path: Routes.Home,
    name: 'Home',
    breadcrumbs: {
      id: '',
    },
    Component: Home,
  },
  { path: Routes.Learn, name: 'Cursos', Component: Courses },
  { path: Routes.Course, name: ':courseId', Component: Course },
  { path: Routes.CourseModule, name: ':moduleId', Component: Module },
  {
    path: Routes.CourseSection,
    name: ':sectionId',
    Component: Course,
  },
  {
    path: Routes.CourseSectionLesson,
    name: ':lessonId',
    Component: Course,
  },
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

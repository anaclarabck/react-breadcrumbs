/// <reference types="vite/client" />

import { RouteChildrenProps } from 'react-router-dom'

interface Breadcrumb {
  path: string
  name: (props: PathArgs<string>) => string | Promise<string>
}


type PathArgs<T extends string, U = string | number | boolean> = string extends T
? { [k in string]?: U }
: T extends `${infer _Start}:${infer ParamWithOptionalRegExp}/${infer Rest}`
? ParamWithOptionalRegExp extends `${infer Param}(${infer _RegExp})`
  ? ExtractRouteOptionalParam<Param, U> & ExtractRouteParams<Rest, U>
  : ExtractRouteOptionalParam<ParamWithOptionalRegExp, U> & ExtractRouteParams<Rest, U>
: T extends `${infer _Start}:${infer ParamWithOptionalRegExp}`
? ParamWithOptionalRegExp extends `${infer Param}(${infer _RegExp})`
  ? ExtractRouteOptionalParam<Param, U>
  : ExtractRouteOptionalParam<ParamWithOptionalRegExp, U>
: {};

interface Course {
  id: string
  name: string
  modules: CourseModule[]
}

interface CourseModule {
  id: string
  name: string
  sections: CourseSection[]
}

interface CourseSection {
  id: string
  name: string
  lessons: CourseLesson[]
}

interface CourseLesson {
  id: string
  name: string
}

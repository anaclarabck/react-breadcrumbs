/// <reference types="vite/client" />

import { RouteChildrenProps } from "react-router-dom"

interface Breadcrumb {
  name: string
  path: string
}

interface BreadcrumbList {
  crumbs: Breadcrumb[]
}

interface RouteConfig extends Breadcrumb {
  path: string
  Component: () => JSX.Element
}

type RouteParams = Record<string, string>

type RoutePath<K extends keyof Routes> = Record<K, Routes[K]>

type PathParams<Path extends string> =
  Path extends `:${infer Param}/${infer Rest}`
    ? Param | PathParams<Rest>
    : Path extends `:${infer Param}`
    ? Param
    : Path extends `${infer Prefix}:${infer Rest}`
    ? PathParams<`:${Rest}`>
    : never

type PathArgs<Path extends string> = {
  [K in PathParams<Path>]: string
}


import { RouteKey, Routes } from '../config/routes'
import { generatePath } from 'react-router-dom'
import { PathArgs } from '../vite-env'

const usePath = <K extends RouteKey, P extends string>(
  route: Routes[K],
  params?: PathArgs<P>
) => {
  return generatePath(route as string, params)
}

export default usePath

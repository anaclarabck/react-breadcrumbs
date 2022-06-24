import { RouteKey, Routes } from '../config/routes'
import { PathArgs } from '../vite-env'

const useAsyncPath = <K extends RouteKey, P extends string>(
  route: Routes[K],
  params?: PathArgs<P>
) => {
  // return generatePath(route as string, params)
}

export default useAsyncPath

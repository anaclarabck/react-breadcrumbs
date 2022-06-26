import { RouteChildrenProps } from 'react-router-dom'
import { RouteConfig } from '../vite-env'

const useCrumbs = <R extends RouteConfig, P extends RouteChildrenProps>(
  routes: R[],
  { match }: P
) => {
  return (
    routes
      .filter(({ path }) => match.path.includes(path))
      // Obtenha todas as rotas que contêm a atual.
      .map(({ path, ...rest }) => {
        const params = Object.keys(match.params)

        if (params.length === 0) {
          // Troque quaisquer rotas dinâmicas com seus valores de parâmetro.
          // Por exemplo. "/courses/:courseId" se tornará "/courses/1"
          const swapPathParam = (path: string, param: string) => {
            return path.replace(`:${param}`, match.params[param])
          }

          path = params.reduce(swapPathParam, path)
        }
        return { path, ...rest }
      })
  )
}

export default useCrumbs

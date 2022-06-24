import { RouteConfig, RouteNavProps } from '../vite-env'

const useCrumbs = <R extends RouteConfig, P extends RouteNavProps>(
  routes: R[],
  { match }: P
) => {
  return (
    routes
      // Obtenha todas as rotas que contêm a atual.
      .map(({ path, ...rest }) => {
        const params = Object.keys(match.params)

        if (params.length) {
          // Troque quaisquer rotas dinâmicas com seus valores de parâmetro.
          // Por exemplo. "/courses/:coursesId" se tornará "/courses/1"
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

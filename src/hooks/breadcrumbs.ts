import { generatePath, RouteChildrenProps } from 'react-router-dom'
import { RouteConfig } from '../vite-env'

const useBreadcrumbs = (
  routes: RouteConfig[],
  { match }: RouteChildrenProps
) => {
  return (
    routes
      // Filtre todas as rotas que contenha a atual.
      .filter(({ path }) => match.path.includes(path))

      // Troque rotas dinâmicas por valores do parâmetro.
      .map(({ path, ...rest }) => {
        if (Object.keys(match.params).length) {
          path = generatePath(path, match.params)
        }

        return { path, ...rest }
      })
  )
}

export default useBreadcrumbs

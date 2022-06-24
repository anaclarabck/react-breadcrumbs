import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  RouterProps,
  RouteChildrenProps,
} from 'react-router-dom'
import Breadcrumbs from './components/Breadcrumbs'
import { RouteConfig } from './vite-env'
import routes from './config/routes'
import React from 'react'
import useCrumbs from './hooks/crumbs'

const Layout = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/courses"> Cursos </Link>
      </nav>

      <Switch>
        {routes.map(({ path, Component }: RouteConfig, key) => (
          <Route
            exact
            path={path}
            key={key}
            render={(props: any) => {
              const crumbs = useCrumbs(routes, props)

              
              console.log(`Generated crumbs for ${props.match.path}`)
              crumbs.map(({ name, path }) => console.log({ name, path }))

              console.log(`Debug props for${props.match.path}`)
              console.log(props)

              return (
                <div className="p-8">
                  <Breadcrumbs crumbs={crumbs} />
                  <Component {...props} />
                </div>
              )
            }}
          />
        ))}
      </Switch>
    </BrowserRouter>
  )
}

export default <Layout />

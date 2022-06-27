import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Breadcrumbs from './components/Breadcrumbs'
import { RouteConfig } from './vite-env'
import useCrumbs from './hooks/crumbs'
import routes from './config/routes'
import React from 'react'

const Layout = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/learn"> Cursos </Link>
      </nav>

      <Switch>
        {routes.map(({ path, Component }: RouteConfig, key) => (
          <Route
            exact
            path={path}
            key={key}
            render={(props: any) => {
              const crumbs = useCrumbs(routes, props)

              return (
                <div className="p-8">
                  <Breadcrumbs crumbs={crumbs} {...props} />
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

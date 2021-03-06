import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Breadcrumbs from './components/Breadcrumbs'
import { RouteConfig } from './vite-env'
import useBreadcrumbs from './hooks/breadcrumbs'
import routes from './config/routes'
import React from 'react'

const Layout = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          {routes.map(({ path, Component }: RouteConfig, key) => (
            <Route
              exact
              path={path}
              key={key}
              render={(props) => {
                const crumbs = useBreadcrumbs(routes, props)

                return (
                  <>
                    <Breadcrumbs crumbs={crumbs} {...props} />
                    <Component {...props} />
                  </>
                )
              }}
            />
          ))}
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default <Layout />

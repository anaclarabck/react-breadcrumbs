import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Routes } from './config/routes'
import Courses from './pages/Courses'
import Course from './pages/Course'
import Module from './pages/Module'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route
            exact
            path={Routes.Home}
            render={() => {
              return <Home />
            }}
          />
          <Route
            exact
            path={Routes.Learn}
            render={(props) => {
              return <Courses {...props} />
            }}
          />
          <Route
            exact
            path={Routes.Course}
            render={(props) => {
              return <Course {...props} />
            }}
          />
          <Route
            exact
            path={Routes.CourseModule}
            render={(props) => {
              return <Module {...props} />
            }}
          />
          <Route
            exact
            path={Routes.CourseSection}
            render={(props) => {
              return <Module {...props} />
            }}
          />
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default <App />

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Routes } from './config/routes'
import Courses from './pages/Courses'
import Course from './pages/Course'
import Module from './pages/Module'
import Home from './pages/Home'
import Recordings from './pages/Recordings'
import Projects from './pages/Projects'
import Solution from './pages/Solution'
import Lesson from './pages/Lesson'
import Project from './pages/Project'

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
            path={Routes.LEARN_PATH}
            render={(props) => {
              return <Courses {...props} />
            }}
          />
          <Route
            exact
            path={Routes.LEARN_COURSE_PATH}
            render={(props) => {
              return <Course {...props} />
            }}
          />
          <Route
            exact
            path={Routes.LEARN_COURSE_PROJECTS_PATH}
            render={(props) => {
              return <Projects {...props} />
            }}
          />
          <Route
            exact
            path={Routes.LEARN_COURSE_PROJECT_PATH}
            render={(props) => {
              return <Project {...props} />
            }}
          />
          <Route
            exact
            path={Routes.LEARN_COURSE_LIVE_LECTURES}
            render={(props) => {
              return <Recordings {...props} />
            }}
          />
          <Route
            exact
            path={Routes.LEARN_COURSE_SOLUTIONS_PATH}
            render={(props) => {
              return <Solution {...props} />
            }}
          />
          <Route
            exact
            path={Routes.LEARN_COURSE_MODULE_PATH}
            render={(props) => {
              return <Module {...props} />
            }}
          />
          <Route
            exact
            path={Routes.LEARN_COURSE_SECTION_PATH}
            render={(props) => {
              return <Module {...props} />
            }}
          />
          <Route
            exact
            path={Routes.LEARN_COURSE_LESSON_PATH}
            render={(props) => {
              return <Lesson {...props} />
            }}
          />
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default <App />

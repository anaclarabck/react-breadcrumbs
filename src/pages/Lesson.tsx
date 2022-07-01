import { RouteChildrenProps } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import { Routes } from '../config/routes'
import { PathArgs } from '../vite-env'
import service from '../infra/service'
// import Facade from '../infra/facade'

type LessonProps = RouteChildrenProps<PathArgs<Routes.LEARN_COURSE_LESSON_PATH>>

const Lesson = (props: LessonProps) => {
  const { match } = props
  const lesson = service.getLesson(match.params)

  return (
    <div>
      <Breadcrumbs />
      <h2>{lesson?.name || 'erro'} </h2>
      <section>
        <h3>Conteúdo</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </div>
  )
}

export default Lesson

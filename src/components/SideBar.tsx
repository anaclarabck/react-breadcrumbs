import { generatePath, Link, RouteChildrenProps } from 'react-router-dom'
import { Routes } from '../config/routes'
import Facade from '../infra/facade'
import { PathArgs } from '../vite-env'

type ModuleProps = RouteChildrenProps<PathArgs<Routes.LEARN_COURSE_MODULE_PATH>>

function SideBar(props: ModuleProps) {
  const { match } = props
  const { params } = match
  const recordingPath = generatePath(Routes.LEARN_COURSE_LIVE_LECTURES, params)
  const projectsPath = generatePath(Routes.LEARN_COURSE_PROJECTS_PATH, params)
  const contentPath = generatePath(Routes.LEARN_COURSE_PATH, params)
  const solutionsPath = generatePath(Routes.LEARN_COURSE_SOLUTIONS_PATH, params)
  return (
    <>
      <h3>SideBar</h3>
      <Link to={contentPath}> Conteúdo </Link>
      <Link to={projectsPath}> Projetos </Link>
      <Link to={recordingPath}> Gravações </Link>
      <Link to={solutionsPath}> Gabaritos </Link>
      {/* falta acrescentar moduleId na rota */}
    </>
  )
}

export default SideBar

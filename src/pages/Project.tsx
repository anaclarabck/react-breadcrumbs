import { RouteChildrenProps } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import SideBar from '../components/SideBar'
import { Routes } from '../config/routes'
import service from '../infra/service'
import { PathArgs } from '../vite-env'

export type ProjectProps = RouteChildrenProps<
  PathArgs<Routes.LEARN_COURSE_PROJECT_PATH>
>
const Project = (props: ProjectProps) => {
  const { match } = props
  const project = service.getProject(match.params)
  return (
    <>
      <Breadcrumbs />
      <h2>{project.name}</h2>
      <SideBar {...props} />
    </>
  )
}

export default Project

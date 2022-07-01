import { RouteChildrenProps } from 'react-router-dom'
import { Routes } from '../config/routes'
import { PathArgs } from '../vite-env'
import Breadcrumbs from '../components/Breadcrumbs'
import SideBar from '../components/SideBar'

type ModuleProps = RouteChildrenProps<
  PathArgs<Routes.LEARN_COURSE_SECTION_PATH>
>

const Solution = (props: ModuleProps) => {
  return (
    <>
      <Breadcrumbs />
      <h2>Gabaritos</h2>
      <SideBar {...props} />
    </>
  )
}

export default Solution

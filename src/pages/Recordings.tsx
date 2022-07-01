import { RouteChildrenProps } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import SideBar from '../components/SideBar'
import { Routes } from '../config/routes'
import { PathArgs } from '../vite-env'

type RecordingProps = RouteChildrenProps<
  PathArgs<Routes.LEARN_COURSE_SECTION_PATH>
>

const Recordings = (props: RecordingProps) => {
  return (
    <>
      <Breadcrumbs />
      <h2>Gravações </h2>
      <SideBar {...props} />
    </>
  )
}

export default Recordings

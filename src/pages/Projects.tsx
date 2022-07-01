import { Link, RouteChildrenProps } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import SideBar from '../components/SideBar'
import { Routes } from '../config/routes'
import { courses } from '../infra/courses'
import Facade from '../infra/facade'
import service from '../infra/service'
import { PathArgs } from '../vite-env'

export type CourseProps = RouteChildrenProps<PathArgs<Routes.LEARN_COURSE_PATH>>

const Projects = (props: CourseProps) => {
  const { params } = props.match
  const facade = Facade(props)
  const course = service.getCourse(params)
  const projects = facade.getProjects(course)
  return (
    <>
      <Breadcrumbs />
      <h2>Projetos</h2>
      <SideBar {...props} />
      <section>
        <h3>Meus projetos</h3>
        {projects.length ? (
          projects.map((project) => (
            <Link key={project.name} to={project.path}>
              {project.name}{' '}
            </Link>
          ))
        ) : (
          <h5>Sem Projetos</h5>
        )}
      </section>
    </>
  )
}

export default Projects

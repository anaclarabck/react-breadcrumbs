import { Breadcrumb } from '../vite-env'
import { Link, RouteChildrenProps } from 'react-router-dom'
import React from 'react'

const Breadcrumbs = (props: RouteChildrenProps & { crumbs: Breadcrumb[] }) => {
  if (props.crumbs.length <= 1) {
    return null
  }

  return (
    <nav>
      {/* <ada-breadcrumbs> */}
      {props.crumbs.map(({ name = () => '', path }, key) => {
        // Linka do último para qualquer link anterior
        const isLastCrumb = key + 1 === props.crumbs.length
        return isLastCrumb ? (
          <span key={key}>{name(props.match.params)}</span>
        ) : (
          <Link key={key} to={path}>
            {name(props.match.params)}
          </Link>
        )
      })}
      {/* </ada-breadcrumbs> */}
    </nav>
  )
}

export default Breadcrumbs

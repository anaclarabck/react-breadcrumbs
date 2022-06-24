import { BreadcrumbList } from '../vite-env'
import { Link } from 'react-router-dom'
import React from 'react'

const Breadcrumbs = ({ crumbs }: BreadcrumbList) => {
  if (crumbs.length <= 1) {
    return null
  }

  return (
    <nav>
      {/* <ada-breadcrumbs> */}
      {crumbs.map(({ name, path }, key) => {
        // Linka do último para qualquer link anterior
        const isLastCrumb = key + 1 === crumbs.length
        return isLastCrumb ? (
          <span key={key}>{name}</span>
        ) : (
          <Link key={key} to={path}>
            {name}
          </Link>
        )
      })}
      {/* </ada-breadcrumbs> */}
    </nav>
  )
}

export default Breadcrumbs

import { Link, RouteChildrenProps } from 'react-router-dom'
import { BreadcrumbList } from '../vite-env'
import React from 'react'

type BreadcrumbsProps = RouteChildrenProps & BreadcrumbList

const Breadcrumbs = ({ crumbs, match }: BreadcrumbsProps) => {
  if (crumbs.length <= 1) return null

  return (
    <nav>
      {/* <ada-breadcrumbs> */}
      {crumbs.map(({ name = () => '', path }, key) => {
        // Linka do último para qualquer link anterior
        const isLastCrumb = key + 1 === crumbs.length
        return isLastCrumb ? (
          <span key={key}>{name(match.params)}</span>
        ) : (
          <Link key={key} to={path}>
            {name(match.params)}
          </Link>
        )
      })}
      {/* </ada-breadcrumbs> */}
    </nav>
  )
}

export default Breadcrumbs

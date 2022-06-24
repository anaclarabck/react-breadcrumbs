import { Link } from 'react-router-dom'
import React from 'react'

const Breadcrumbs = ({ crumbs }: BreadcrumbList) => {
  if (crumbs.length <= 1) {
    return null
  }

  return (
    <nav>
      {/**
       * Faz o link do último para qualquer caminho anterior
       */}
      {crumbs.map(({ name, path }, key) => {
        const isLastCrumb = key + 1 === crumbs.length
        return isLastCrumb ? (
          <span key={key}>{name}</span>
        ) : (
          <Link key={key} to={path}>
            {name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Breadcrumbs

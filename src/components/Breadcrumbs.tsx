import React, { Suspense, useEffect, useState } from 'react'
import { Link, RouteChildrenProps } from 'react-router-dom'
import { BreadcrumbList } from '../vite-env'

type BreadcrumbsProps = RouteChildrenProps & BreadcrumbList

const Breadcrumbs = ({ crumbs, match }: BreadcrumbsProps) => {
  if (crumbs.length <= 1) return null

  type BreadcrumbItem = { path: string; label: string }

  const [state, setState] = useState<BreadcrumbItem[]>([])

  const getCrumbs = () => {
    return Promise.all(
      crumbs.map(async ({ name = () => '', path }, key) => {
        const label = await name(match.params)
        return { path, label, key }
      })
    )
  }

  useEffect(() => {
    getCrumbs().then(setState)
  }, [])

  return (
    <nav style={{ minHeight: `40px` }}>
      <Suspense fallback="Carregando...">
        {state.map(({ path, label }, key) => {
          return key + 1 === crumbs.length ? (
            <span key={key}>{label}</span>
          ) : (
            <Link key={key} to={path}>
              {label}
            </Link>
          )
        })}
      </Suspense>
    </nav>
  )
}

export default Breadcrumbs

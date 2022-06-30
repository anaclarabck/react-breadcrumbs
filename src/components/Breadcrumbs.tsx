import { Suspense, useEffect, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import useBreadcrumbs from '../hooks/breadcrumbs'
import routes from '../config/routes'

const Breadcrumbs = () => {
  const match = useRouteMatch()
  const crumbs = useBreadcrumbs(routes, { match })

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
    let isCancelled = false
    getCrumbs().then((crumbs) => {
      if (!isCancelled) {
        setState(crumbs)
      }
    })
    return () => {
      isCancelled = true
    }
  }, [crumbs])

  return (
    <nav style={{ minHeight: `40px` }}>
      <Suspense fallback="Carregando...">
        {state.map(({ path, label }, key) => {
          const isLast = key + 1 === crumbs.length

          return isLast ? (
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

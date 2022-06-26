import { RouteChildrenProps } from 'react-router-dom'
import { Routes } from '../config/routes'
import { uuid } from '../utilities/uuid'
import usePath from '../hooks/path'
import React from 'react'

interface ModuleProps {
  ModuleId: string
}

const Module = (props: RouteChildrenProps<ModuleProps>) => {
  const { match } = props

  const sections = [
    {
      id: uuid.long(),
      name: 'Section 1',
      lessons: [
        { id: uuid.long(), name: 'lesson 1' },
        { id: uuid.long(), name: 'lesson 2' },
        { id: uuid.long(), name: 'lesson 3' }
      ],
    },
    {
      id: uuid.long(),
      name: 'Section 2',
      lessons: [{ id: uuid.long(), name: 'lesson 1' }],
    },
    {
      id: uuid.long(),
      name: 'Section 3',
      lessons: [{ id: uuid.long(), name: 'lesson 1' }],
    },
  ]

  const sectionCards = sections.map(({ id, name, lessons }) => {
    return {
      path: usePath(Routes.CourseSection, { ...match.params, sectionId: id }),
      name: name,
      lessons: lessons.map(({ id, name }) => ({
        path: usePath(Routes.CourseSection, { ...match.params, sectionId: id }),
        name: name,
      })),
    }
  })

  return (
    <>
      <h2>Module </h2>

      <ul>
        {sectionCards.map(({ path, name, lessons }) => (
          <details key={'details' + path}>
            <summary key={'details' + path}>{name}</summary>

            {lessons.map((lesson) => (
              <article key={lesson.name}>{lesson.name}</article>
            ))}
          </details>
        ))}
      </ul>
    </>
  )
}

export default Module

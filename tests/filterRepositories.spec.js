import { describe, expect, it } from 'vitest'

import { filterRepositories } from '../utils/filterRepositories.js'

const repositories = [
  {
    id: '1',
    name: 'awesome-project',
    owner: 'octocat',
    language: 'TypeScript',
    slug: 'typescript',
    description: 'Starter repo with great DX features'
  },
  {
    id: '2',
    name: 'data-tools',
    owner: 'datawiz',
    language: 'Python',
    slug: 'python',
    description: 'Utilities for working with open data'
  },
  {
    id: '3',
    name: 'design-kit',
    owner: 'uxguild',
    language: 'CSS',
    slug: 'css',
    description: null
  }
]

describe('filterRepositories', () => {
  it('returns all repositories when no query is provided', () => {
    const filtered = filterRepositories(repositories, '', undefined)
    expect(filtered).toHaveLength(3)
  })

  it('matches repositories by name, owner, language, or description', () => {
    expect(filterRepositories(repositories, 'octocat', undefined)).toEqual([repositories[0]])
    expect(filterRepositories(repositories, 'utilities', undefined)).toEqual([repositories[1]])
    expect(filterRepositories(repositories, 'css', undefined)).toEqual([repositories[2]])
  })

  it('applies language slug filter before text search', () => {
    const filtered = filterRepositories(repositories, 'data', 'python')
    expect(filtered).toEqual([repositories[1]])
  })

  it('returns empty array when no repositories match', () => {
    const filtered = filterRepositories(repositories, 'nonexistent', undefined)
    expect(filtered).toHaveLength(0)
  })
})

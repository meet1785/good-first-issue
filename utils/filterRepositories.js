const normalize = (value) => value?.toString().toLowerCase() ?? ''

/**
 * Filter repositories by search query and optional language slug.
 * @param {Array<Record<string, any>>} repositories Source repositories collection.
 * @param {string} query User provided search input.
 * @param {string | undefined} slug Optional language slug to scope results.
 * @returns {Array<Record<string, any>>} Filtered repositories.
 */
export const filterRepositories = (repositories, query, slug) => {
  const normalizedQuery = normalize(query).trim()

  return repositories.filter((repository) => {
    if (slug && repository.slug !== slug) {
      return false
    }

    if (!normalizedQuery) {
      return true
    }

    const searchableText = [
      repository.name,
      repository.owner,
      repository.language,
      repository.description
    ]
      .map(normalize)
      .join(' ')

    return searchableText.includes(normalizedQuery)
  })
}

export default filterRepositories

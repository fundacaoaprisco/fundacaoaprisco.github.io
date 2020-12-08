export const frontmatterToCard = ({ array, beforeHref = null, buttonText }) =>
  array.reduce((newArray, { node }) => {
    const transformedItem = {
      id: node.id,
      image: node.frontmatter.image || '',
      title: node.frontmatter.title,
      text: node.excerpt || '',
      href: beforeHref ? `${beforeHref}/${node.fields.slug}` : '',
      button: buttonText,
      active: node.frontmatter.active !== null ? node.frontmatter.active : null,
    }

    return [...newArray, transformedItem]
  }, [])

export const docsToCard = ({ array, buttonText }) =>
  array.reduce((newArray, item) => {
    const transformedItem = {
      title: item.node.name,
      href: item.node.publicURL,
      button: buttonText,
    }

    return [...newArray, transformedItem]
  }, [])

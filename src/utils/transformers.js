export const frontmatterToCard = ({ array, beforeHref = null, buttonText }) =>
  array.reduce((newArray, item) => {
    const transformedItem = {
      image: item.node.frontmatter.image || '',
      title: item.node.frontmatter.title,
      text: item.node.excerpt || '',
      href: beforeHref ? `${beforeHref}/${item.node.fields.slug}` : '',
      button: buttonText,
      active: item.node.frontmatter.active !== null ? item.node.frontmatter.active : null,
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

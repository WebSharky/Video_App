const getExcerpt = (string) => {
    const excerpt = `${string.substring(0, 100)} ...`;
    return excerpt
  }

export default getExcerpt
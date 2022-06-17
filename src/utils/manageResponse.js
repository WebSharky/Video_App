import getExcerpt from "./getExcerpt"

function manageResponse (res){  
  
  const today = new Date().toLocaleDateString("pl")

    return {
    id: res.id,
    title: res.snippet.title,
    published: res.snippet.publishedAt, 
    addedToLib: today,
    thumbnail: `${res.snippet.thumbnails.medium.url}`,
    likes: res.statistics.likeCount, 
    views: res.statistics.viewCount,
    description: `${getExcerpt(res.snippet.description)}`,
    isFavourites: false
    }
  }

export default manageResponse
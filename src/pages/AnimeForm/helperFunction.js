export const addAnimeRequest = (formData, metaData) => {
  return {
    thumbUrl: metaData?.image_url,
    animeName: metaData?.title,
    ...formData
  }
}

export const initialData = (data) => {
  if (data?.new) {
    return {...data}
  }
  return {
    ...data,
    title: data.animeName,
    image_url: data.thumbUrl
  }
}
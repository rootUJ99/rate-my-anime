export const addAnimeRequest = (formData, metaData) => {
  return {
    thumbUrl: metaData?.image_url,
    animeName: metaData?.title,
    ...formData
  }
}
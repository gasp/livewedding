module.exports = function (json) {
  if (json.meta.code !== 200) return [];
  return json.data.map(media => ({
    id: media.id,
    user: media.user.username,
    name: media.user.full_name,
    image: {
      url: media.images.standard_resolution.url,
      width: media.images.standard_resolution.width,
      height: media.images.standard_resolution.height,
    }
  }));
};

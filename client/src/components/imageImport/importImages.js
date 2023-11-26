const importImages = (r) => {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

const images = importImages(
  require.context("../../assets/images", false, /\.(png|jpe?g|svg)$/)
);

export default images;

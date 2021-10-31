import ContentLoader from "react-content-loader"

const CardLoader = () => (
  <ContentLoader 
    speed={2}
    width={300}
    height={300}
    viewBox="0 0 300 300"
    backgroundColor="#ecebeb"
    foregroundColor="#d6d2d2"
  >
    <rect x="2" y="2" rx="2" ry="2" width="400" height="400" />
  </ContentLoader>
)

export default CardLoader

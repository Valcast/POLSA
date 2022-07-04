const Image = ({ src, srcWebp, alt, className }) => {
  return (
    <picture>
      <source type='image/webp' srcSet={srcWebp}></source>
      <img src={src} alt={alt} className={className} loading='lazy'></img>
    </picture>
  )
}

export default Image

const Image = ({ src, srcWebp, alt, className, width, height }) => {
  return (
    <picture>
      <source type='image/webp' srcSet={srcWebp}></source>
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading='lazy'></img>
    </picture>
  )
}

export default Image

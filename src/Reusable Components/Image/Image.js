import React from 'react'

// eslint-disable-next-line react/display-name
const Image = React.forwardRef(
  ({ src, srcWebp, alt, className, width, height, eager }, ref) => {
    return (
      <picture>
        <source type='image/webp' srcSet={srcWebp}></source>
        <img
          src={src}
          alt={alt}
          className={className}
          width={width}
          height={height}
          ref={ref}
          loading={eager ? 'eager' : 'lazy'}></img>
      </picture>
    )
  }
)

export default Image

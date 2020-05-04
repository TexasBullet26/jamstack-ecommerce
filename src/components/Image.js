import React, { useState, useEffect } from 'react'
import { Storage } from 'aws-amplify'

async function fetchImage(src, updateSrc) {
  // check to see if the image is a locally downloaded image (in downloads)
  if (!src.includes('downloads')) {
    // if image is not locally downloaded, we know it is a remote
    // image from S3 and we will fetch the signed URL for the image
    const image = await Storage.get(src)
    // const image = await S3.getimage(src)
    updateSrc(image)
  } else {
    updateSrc(src)
  }
}

const Image = ({ src, ...props }) => {
  const [imageSrc, updateSrc] = useState(null)
  useEffect(() => {
    fetchImage(src, updateSrc)
  }, [])

  return imageSrc ? <img src={imageSrc} {...props} /> : null
}

export default Image

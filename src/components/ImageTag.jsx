import React from 'react'
import styled from 'styled-components'

export const Img = ({src, alt,width, height}) => {
  return <BaseImage src={src} alt={alt} width={width} height={height}/> 
}

export const ArtgramImg = ({src, alt,width, height}) => {
  return <ArtgramImage src={src} alt={alt} width={width} height={height}/> 
}


const BaseImage = styled.img`
  display:block;
  width:${props => props.width};
  height:${props => props.height};
  background-color:skyblue;
`

const ArtgramImage = styled(BaseImage)`
  border-radius: 5px 5px 0 0;
`

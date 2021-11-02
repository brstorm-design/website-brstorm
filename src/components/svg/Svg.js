import React from 'react'

export default function Svg(props) {
  return (
    <div dangerouslySetInnerHTML={{__html: props.code}} />
  )
}

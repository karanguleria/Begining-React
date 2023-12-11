import React from 'react'
interface propsInterface
{
  name : string
}

export default function AnotherComponent( props: propsInterface ) {
  return (
    <div>Another Component your name is: {props.name}</div>
  )
}

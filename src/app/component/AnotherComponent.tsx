import React from "react"

interface userProps  {
  name : string
}
export default function AnotherComponent(props: userProps) {
  return <div>Another Component your name is: {props.name}</div>
}

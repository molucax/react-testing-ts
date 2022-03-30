import React from 'react'

type Props = {
  name: string
}

export default function Person({ name }: Props) {
  return (
    <div role="contentinfo">The name is {name}</div>
  )
}

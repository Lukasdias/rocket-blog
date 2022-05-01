import React from 'react'

type Props = {
  children?: any
}

export function Wrapper({ children }: Props) {
  return (
    <div className="w-screen min-h-screen relative p-0 m-0 flex flex-col ">
      {children}
    </div>
  )
}

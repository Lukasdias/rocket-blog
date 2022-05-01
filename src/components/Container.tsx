import React, { HTMLAttributes } from 'react'
import { classNames } from 'utils'

type Props = {
  className?: any
  children?: any
}

export function Container({ children, className }: Props) {
  return (
    <div className={`w-screen bg-none flex flex-col items-center ${className}`}>
      {children}
    </div>
  )
}

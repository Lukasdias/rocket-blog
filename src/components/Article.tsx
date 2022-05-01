import React from 'react'

export interface ArticleProps {
  date: string
  image?: string
  title: string
  description: string
}

export function Article({ ...props }: ArticleProps) {
  return (
    <section className="w-full flex flex-col px-4 py-4 h-auto">
      {props.image !== undefined ? (
        <img alt="" className="w-full mb-2" src={props.image} />
      ) : (
        <></>
      )}
      <div className="w-full flex mb-2">
        <span className="text-sm">{props.date}</span>
      </div>
      <div className="w-full flex mb-2">
        <span className="text-2xl font-bold text-rocket-blog-dark hover:animate-pulse cursor-pointer transition-all">
          {props.title}
        </span>
      </div>
      <div className="w-full flex mb-2">
        <span className="text-base">{props.description}</span>
      </div>
    </section>
  )
}

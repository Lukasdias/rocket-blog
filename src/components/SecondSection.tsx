import React from 'react'
import { Article } from './Article'
import { ARTICLE_DATA } from './Data'

type Props = {}

export function SecondSection({}: Props) {
  return (
    <div className="flex lg:w-3/4 flex-col w-full ">
      <div className="flex flex-col w-full lg:flex-row">
        <div className="flex w-full ">
          <Article
            date={ARTICLE_DATA[0].date}
            image={ARTICLE_DATA[0].image}
            title={ARTICLE_DATA[0].title}
            description={ARTICLE_DATA[0].description}
          />
        </div>
        <div className="flex flex-col w-full ">
          <Article
            date={ARTICLE_DATA[1].date}
            image={ARTICLE_DATA[1].image}
            title={ARTICLE_DATA[1].title}
            description={ARTICLE_DATA[1].description}
          />
          <Article
            date={ARTICLE_DATA[2].date}
            image={ARTICLE_DATA[2].image}
            title={ARTICLE_DATA[2].title}
            description={ARTICLE_DATA[2].description}
          />
        </div>
      </div>
      <div className="flex flex-col w-full lg:flex-row">
        <Article
          date={ARTICLE_DATA[3].date}
          image={ARTICLE_DATA[3].image}
          title={ARTICLE_DATA[3].title}
          description={ARTICLE_DATA[3].description}
        />
        <Article
          date={ARTICLE_DATA[4].date}
          image={ARTICLE_DATA[4].image}
          title={ARTICLE_DATA[4].title}
          description={ARTICLE_DATA[4].description}
        />
        <Article
          date={ARTICLE_DATA[5].date}
          image={ARTICLE_DATA[5].image}
          title={ARTICLE_DATA[5].title}
          description={ARTICLE_DATA[5].description}
        />
      </div>
    </div>
  )
}

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import { urlFor } from '../lib/sanity'
import { CategoryProps, ProjectProps } from '../pages/posts'
import Tag from './Tag'

type CardProps = {
  post: ProjectProps,
  href?: string,
  onClick?: () => void
}

const Card = forwardRef(({onClick, href, post }:CardProps, ref:any) => {
  const { _id, title, publishedAt, mainImage, categories } = post

  const url = urlFor(mainImage).toString()

  return (
    <div className="card-container" onClick={onClick} ref={ref} key={_id}>
      <h2>{title}</h2>
      <p>Published on: {new Date(publishedAt).toDateString()}</p>

      <img 
        className="main-image"
        alt={title + ' image'}
        src={url}
      />
      <hr />

      <div className='tag-container'>
        {categories.map((category: CategoryProps) => {
          return <>
            { category && <Tag title={category.title} key={category.id}/>}
          </>
        })}

      </div>
    </div>
  )
})

export default Card
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import { urlFor } from '../lib/sanity'
import Tag from './Tag'

const Card = forwardRef(({onClick, href, post }, ref) => {
  const { title, publishedAt, mainImage, username, authorImage, categories } = post

  return (
    <div className="card-container" href={href} onClick={onClick} ref={ref}>
      <h2>{title}</h2>
      <p>Published on: {new Date(publishedAt).toDateString()}</p>

      <img 
        className="main-image"
        alt={title + ' image'}
        src={urlFor(mainImage)}
      />
      <hr />

      <div className='info-container'>
        <p>Posted by: {username}</p>
        <img
          className='avatar'
          alt={username + ' avatar'}
          src={urlFor(authorImage)}
        />
      </div>

      <div className='tag-container'>
        {categories.map((category) => {
          return <>
            { category && <Tag title={category.title} key={category.id}/>}
          </>
        })}

      </div>
    </div>
  )
})

export default Card
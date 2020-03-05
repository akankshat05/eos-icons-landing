import React from 'react'

const Contributor = props => {
  const { title, href, image, name } = props

  return (
    <a
      className='contributor'
      title={title}
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      <img className='contributors-img' src={image} alt='Contributor' />
      <p className='text-dark'>{name}</p>
    </a>
  )
}

export default Contributor

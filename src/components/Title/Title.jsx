import React from 'react'
import '../shared.scss'

export default function Title(props) {
  return (
    <section className='container'>
      <div className='title'>
        <a>{props.title}</a>
      </div>
    </section>
  )
}

import React from 'react'

export default function Card(item) {
  return (
    <div className="card">
      {item.children}
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.text}</p>
        <a href={item.link} className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

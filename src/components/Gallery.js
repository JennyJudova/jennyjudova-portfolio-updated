import React, { Component } from 'react'

class Gallery extends Component {
  renderGallery() {
    const projects = require('../../projects.json')
    if (!projects) return

    const gallery = projects.map(obj => {
      return (
        <article className="6u 12u$(xsmall) work-item" key={obj.id}>
          <a
            href={obj.website}
            className="image fit thumb"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={obj.source} alt="project-homepage" />
          </a>
          <h3>{obj.caption}</h3>
          <h5>
            <a href={obj.github} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>{' '}
            ||{' '}
            <a href={obj.website} target="_blank" rel="noreferrer noopener">
              Web
            </a>
          </h5>
          <h5>{obj.duration}</h5>
          <h5>{obj.type}</h5>
          <p>
            <b>Stack:</b> {obj.stack}
          </p>
          <br />
          <p>{obj.description}</p>
          <br />
        </article>
      )
    })
    return <div className="row">{gallery}</div>
  }

  render() {
    const { projects } = this.props
    return (
      <div>
        <h2>PORTFOLIO</h2>
        {this.renderGallery(projects)}
      </div>
    )
  }
}

export default Gallery

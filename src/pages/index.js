import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'
// import Events from '../components/Events'
// import TwitterQuery from '../components/TwitterWidget'

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'Jenny Judova Portfolio'
    const siteDescription = 'Jenny Judova frontend developer portfolio website.'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>Hi, my name is Jenny Judova.</h2>
            </header>
            <p>
              I am a Front End Developer with an interest in Fin-Tech, Cyber
              Security, Malware and Compliance tech.
              <br />
              My previous role at TechHub exposed me to some of the best tech
              teams in London which sparked my curiosity in software
              engineering. This led me to teach myself Python before I took the
              plunge and joined GA’s software engineering cohort.
            </p>
            <p>
              I{' '}
              <a
                href="https://medium.com/@jennyjudova"
                target="_blank"
                rel="noreferrer noopener"
              >
                write
              </a>{' '}
              about my experience of being a developer, software engineering and
              startups in London.
            </p>
            <p>
              I also run a{' '}
              <a
                href="https://www.eventbrite.co.uk/e/tech-startups-in-the-pub-tickets-64823687394"
                target="_blank"
                rel="noreferrer noopener"
              >
                Tech Startups in the Pub
              </a>{' '}
              meetup.
            </p>
          </section>

          <section id="two">
            <Gallery />
          </section>

          <section id="three"></section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex

{
  /* <ul className="actions">
<li>
  <a href="#" className="button">
    Learn More
  </a>
</li>
</ul> */
}

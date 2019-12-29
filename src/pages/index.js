import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="sthlm.js - The Stockholm JavaScript Meetup" />
    <article class="index">
      <img class="crown" src="/images/crown.png" alt="sthlm.js logo" />
      <h1>
        <span>Welcome to Stockholm</span>
        <span>JavaScript Meetup</span>
      </h1>
      <p>
        Sthlm.js is a meetup with over 3000 members founded 2011. We meet about
        once a month and talk about JavaScript while making new friends and
        learn new things. We’re always looking for speakers and event hosts.
      </p>
      <p>
        <a class="join-link" href="https://www.meetup.com/sthlm-js/">
          Go to Meetup.com
        </a>
      </p>
      <p class="main-links">
        <a class="nav-link" href="/speak">
          Submit talk
        </a>
        <a class="nav-link" href="/host">
          Host event
        </a>
        <a class="nav-link" href="https://www.meetup.com/sthlm-js/events/past/">
          Show events
        </a>
      </p>

      <p class="sub-links">
        <a
          class="nav-link"
          href="https://www.youtube.com/channel/UCZnAzZWPcvN4KeSwX_JR3yw"
        >
          YouTube
        </a>
        <a class="nav-link" href="https://twitter.com/sthlmjs">
          Twitter
        </a>
        <a class="nav-link" href="https://facebook.com/sthlmjs">
          Facebook
        </a>
        <a class="nav-link" href="https://github.com/sthlmjs">
          GitHub
        </a>
      </p>
    </article>
  </Layout>
)

export default IndexPage

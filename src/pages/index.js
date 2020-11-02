import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="sthlm.js - The Stockholm JavaScript Meetup" />
    <article class="index">
      <img class="crown" src="/images/crown.png" alt="sthlm.js logo" />
      <h1>
        <span>sthlm.js</span>
        <span>The Stockholm JavaScript Meetup</span>
      </h1>
      <p>
        Sthlm.js is a meetup group with over 4000 members founded 2011. We meet
        about once a month and talk about JavaScript while making new friends
        and learn new things.
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

      <hr />

      <h2 class="organizers-headline">Organizers</h2>
      <div class="organizers">
        <div class="organizer">
          <img src="/images/jonny.jpg" alt="Jonny" />
          <span class="organizer-name">Jonny Strömberg</span>
          <a class="organizer-link" href="https://twitter.com/javve">
            @javve
          </a>
        </div>
        <div class="organizer">
          <img src="/images/stina.jpg" alt="Stina" />
          <span class="organizer-name">Stina Andersson</span>
        </div>
        <div class="organizer">
          <img src="/images/jocke.jpg" alt="Jocke" />
          <span class="organizer-name">Joakim Ekberg</span>
          <a class="organizer-link" href="https://twitter.com/kalasjocke">
            @kalasjocke
          </a>
        </div>
        <div class="organizer">
          <img src="/images/becki.jpg" alt="Becki" />
          <span class="organizer-name">Becki Wordsworth</span>
          <a class="organizer-link" href="https://twitter.com/beckiwordsworth">
            @beckiwordsworth
          </a>
        </div>
      </div>

      <h2 class="organizers-headline organizers-headline--chillin">
        Organizers on parental leave{" "}
        <span role="img" aria-label="baby">
          👶
        </span>
      </h2>
      <div class="organizers organizers--chillin">
        <div class="organizer">
          <img src="/images/johannes.jpg" alt="Johannes" />
          <span class="organizer-name">Johannes Edelstam</span>
          <a class="organizer-link" href="https://twitter.com/jede">
            @jede
          </a>
        </div>
        <div class="organizer">
          <img src="/images/geries.jpg" alt="Geries" />
          <span class="organizer-name">Geries Handal</span>
        </div>
      </div>
    </article>
  </Layout>
)

export default IndexPage

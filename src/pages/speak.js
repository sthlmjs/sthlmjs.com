import React from "react"

import SEO from "../components/seo"

const SpeakPage = () => (
  <div>
    <SEO title="Speak at a meetup" />
    <iframe
      class="full-screen-iframe"
      title="Speak"
      src="https://docs.google.com/forms/d/e/1FAIpQLScpVKpP8YOVdZmcU25u3xcOGMcmoN71pgYzY1pRgOi0YgP0UQ/viewform"
    />
  </div>
)

export default SpeakPage

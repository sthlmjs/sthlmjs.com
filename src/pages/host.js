import React from "react"

import SEO from "../components/seo"

const HostPage = () => (
  <div>
    <SEO title="Host a meetup" />
    <iframe
      class="full-screen-iframe"
      title="Host"
      src="https://docs.google.com/forms/d/e/1FAIpQLScL5enkdRJ_Cpfl4ykvZM6gjKUKqFfeW-ss7O9tEMCWwBxmIQ/viewform"
    />
  </div>
)

export default HostPage

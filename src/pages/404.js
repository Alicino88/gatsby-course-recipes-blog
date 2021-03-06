import React from "react"
import Layout from "../components/Layout.js"
import SEO from "../components/SEO.js"

function Error() {
  return (
    <Layout>
      <SEO title="Error" />
      <main class="error-page">
        <section>
          <h1>404</h1>
          <h3>Page not found</h3>
        </section>
      </main>
    </Layout>
  )
}

export default Error

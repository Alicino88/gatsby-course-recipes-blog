import React from "react"
import Layout from "../components/Layout.js"
import Gallery from "../examples/gallery.js"

const testImages = () => {
  return (
    <Layout>
      <main className="page">
        <Gallery />
      </main>
    </Layout>
  )
}

export default testImages

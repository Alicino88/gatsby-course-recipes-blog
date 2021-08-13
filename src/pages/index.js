//Index is the hp
/*the hp, index.js, like the other pages, are wrapped around the Layout component
The Layout component contains the elements that are always visible, such as the navbar, and the actual
content of the page (in this case the h1Content of the homepageH1) that is passed using children prop
to the Layout component*/

import React from "react"

import Layout from "../components/Layout.js"

export default function Home() {
  return (
    <div>
      <Layout>
        {/*style: the first bracket is to access javascript and the second to access the object */}
        <h1 style={{ color: "blue", textTransform: "uppercase" }}>
          Content of the homepage
        </h1>
      </Layout>
    </div>
  )
}

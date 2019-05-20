import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import CurveApp from "../components/CurveApp"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <CurveApp />
        {/* <Link to="/page-2/">Go to page 2</Link>
        <Link to="/page-3/">Go to page3</Link> */}
      </Layout>
    )
  }
}

export default IndexPage

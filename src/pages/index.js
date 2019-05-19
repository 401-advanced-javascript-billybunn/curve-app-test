import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BarChart from "../components/d3/barchart.js"

import {
  eligibleTitles,
  trackIds,
  milestones,
  milestoneToPoints,
} from "../constants"

import NightingaleChart from "../components/NightingaleChart"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Cersei Lannister",
      title: "Staff Engineer",
      milestoneByTrack: {
        MOBILE: 1,
        WEB_CLIENT: 2,
        FOUNDATIONS: 3,
        SERVERS: 2,
        PROJECT_MANAGEMENT: 4,
        COMMUNICATION: 1,
        CRAFT: 1,
        INITIATIVE: 4,
        CAREER_DEVELOPMENT: 3,
        ORG_DESIGN: 2,
        WELLBEING: 0,
        ACCOMPLISHMENT: 4,
        MENTORSHIP: 2,
        EVANGELISM: 2,
        RECRUITING: 3,
        COMMUNITY: 0,
      },
      focusedTrackId: "MOBILE",
    }
  }

  handleTrackMilestoneChange(trackId, milestone) {
    const milestoneByTrack = this.state.milestoneByTrack
    milestoneByTrack[trackId] = milestone

    const titles = eligibleTitles(milestoneByTrack)
    const title =
      titles.indexOf(this.state.title) === -1 ? titles[0] : this.state.title

    this.setState({ milestoneByTrack, focusedTrackId: trackId, title })
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>h1 Title</h1>

        <NightingaleChart
          milestoneByTrack={this.state.milestoneByTrack}
          focusedTrackId={this.state.focusedTrackId}
          handleTrackMilestoneChangeFn={(track, milestone) =>
            this.handleTrackMilestoneChange(track, milestone)
          }
        />

        {/* <BarChart /> */}

        {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
        <Link to="/page-2/">Go to page 2</Link>
        <Link to="/page-3/">Go to page3</Link>
      </Layout>
    )
  }
}

export default IndexPage

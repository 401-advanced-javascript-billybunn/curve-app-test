import React from "react"
import styled from "styled-components"
import {
  eligibleTitles,
  trackIds,
  milestones,
  milestoneToPoints,
} from "../constants"
import NameInput from "../components/NameInput"
import TitleSelector from "../components/TitleSelector"
import PointSummaries from "../components/PointSummaries"
import LevelThermometer from "../components/LevelThermometer"
import NightingaleChart from "../components/NightingaleChart"
import TrackSelector from "../components/TrackSelector"

// const MainApp = styled.div`
//   width: 960px;
//   margin: 0 auto;
// `

class CurveApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Billy Bunn",
      title: "Staff Engineer",
      milestoneByTrack: {
        MOBILE: 4,
        WEB_CLIENT: 2,
        FOUNDATIONS: 3,
        SERVERS: 2,
        PROJECT_MANAGEMENT: 4,
        COMMUNICATION: 1,
        CRAFT: 1,
        INITIATIVE: 2,
        CAREER_DEVELOPMENT: 3,
        ORG_DESIGN: 2,
        WELLBEING: 0,
        ACCOMPLISHMENT: 4,
        MENTORSHIP: 2,
        EVANGELISM: 2,
        RECRUITING: 3,
        COMMUNITY: 0,
      },
      focusedTrackId: "WEB_CLIENT",
    }
  }

  setTitle(title) {
    let titles = eligibleTitles(this.state.milestoneByTrack)
    title = titles.indexOf(title) == -1 ? titles[0] : title
    this.setState({ title })
  }

  handleTrackMilestoneChange(trackId, milestone) {
    const milestoneByTrack = this.state.milestoneByTrack
    milestoneByTrack[trackId] = milestone

    const titles = eligibleTitles(milestoneByTrack)
    const title =
      titles.indexOf(this.state.title) === -1 ? titles[0] : this.state.title

    this.setState({ milestoneByTrack, focusedTrackId: trackId, title })
  }

  setFocusedTrackId(trackId) {
    let index = trackIds.indexOf(trackId)
    const focusedTrackId = trackIds[index]
    this.setState({ focusedTrackId })
  }

  render() {
    return (
      <>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <form>
              <NameInput
                name={this.state.name}
                handleNameInputChange={e =>
                  this.setState({ name: e.target.value })
                }
              />
              <TitleSelector
                milestoneByTrack={this.state.milestoneByTrack}
                currentTitle={this.state.title}
                setTitleFn={title => this.setTitle(title)}
              />
            </form>
            <PointSummaries milestoneByTrack={this.state.milestoneByTrack} />
            <LevelThermometer milestoneByTrack={this.state.milestoneByTrack} />
          </div>

          <div style={{ flex: 0 }}>
            <NightingaleChart
              milestoneByTrack={this.state.milestoneByTrack}
              focusedTrackId={this.state.focusedTrackId}
              handleTrackMilestoneChangeFn={(track, milestone) =>
                this.handleTrackMilestoneChange(track, milestone)
              }
            />
          </div>
        </div>

        <TrackSelector
          milestoneByTrack={this.state.milestoneByTrack}
          focusedTrackId={this.state.focusedTrackId}
          setFocusedTrackIdFn={this.setFocusedTrackId.bind(this)}
        />
        {/*<KeyboardListener
          selectNextTrackFn={this.shiftFocusedTrack.bind(this, 1)}
          selectPrevTrackFn={this.shiftFocusedTrack.bind(this, -1)}
          increaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(
            this,
            1
          )}
          decreaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(
            this,
            -1
          )}
        />
        <Track
          milestoneByTrack={this.state.milestoneByTrack}
          trackId={this.state.focusedTrackId}
          handleTrackMilestoneChangeFn={(track, milestone) =>
            this.handleTrackMilestoneChange(track, milestone)
          }
        /> */}
      </>
    )
  }
}

export default CurveApp

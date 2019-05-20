import React from "react"
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
import KeyboardListener from "../components/KeyboardListener"
import Track from "../components/Track"

class CurveApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Billy Bunn",
      title: "Staff Engineer",
      milestoneByTrack: {
        // BUSINESS ACUMEN COMPETENCY --------------------
        MISSION_AND_VISION: 4,
        CUSTOMER_ORIENTATION: 3,

        // GROWTH MINDSET COMPETENCY --------------------
        ADAPTABILITY: 4,
        CURIOSITY: 3,
        CONSTANT_IMPROVEMENT: 2,
        HANDLING_AMBIGUITY: 1,
        INCLUSIVITY: 0,
        OPENNESS: 4,
        AMBITION_AND_INITIATIVE: 3,

        // LEADERSHIP COMPETENCY --------------------
        ACCOUNTABILITY: 4,
        INTEGRITY: 3,
        OWNERSHIP: 2,
        MENTORSHIP: 1,
        NETWORKING: 0,
        SUCCESSION: 4,
        HEALTH_AND_SAFETY: 3,
        CONFIDENCE: 2,
        CREDIBILITY: 1,

        // CRAFT COMPETENCY --------------------
        TECHNICAL: 1,
        PROCESS: 2,
        INNOVATION: 3,
        TOOL_PROFICIENCY: 4,

        // QUALITY COMPETENCY --------------------
        JUDGEMENT: 1,
        ROOT_CAUSE_RESOLUTION: 2,

        // COMMUNICATION COMPETENCY --------------------
        WRITING: 1,
        READING: 2,
        SPEAKING: 3,
        LISTENING: 4,

        // TEAMWORK COMPETENCY --------------------
        COLLABORATION: 4,

        // RESULTS COMPETENCY --------------------
        AGILE: 0,
        ORGANIZATIONAL: 1,
        CREATIVE: 2,
        PROJECT_EXECUTION: 3,
        ANALYTICAL_THINKING: 4,
        PRIORITIZATION: 3,
        PROBLEM_SOLVING: 2,
        INCREMENTAL_DELIVERY: 1,
        DECISION_MAKING: 0,
        APPROPRIATE_AUTONOMY: 1,
        PLANNING_AND_ESTIMATING: 2,
        DEPENDABILITY_AND_RELIABILITY: 3,
      },
      focusedTrackId: "MISSION_AND_VISION",
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

  shiftFocusedTrack(delta) {
    let index = trackIds.indexOf(this.state.focusedTrackId)
    index = (index + delta + trackIds.length) % trackIds.length
    const focusedTrackId = trackIds[index]
    this.setState({ focusedTrackId })
  }

  shiftFocusedTrackMilestoneByDelta(delta) {
    let prevMilestone = this.state.milestoneByTrack[this.state.focusedTrackId]
    let milestone = prevMilestone + delta
    if (milestone < 0) milestone = 0
    if (milestone > 5) milestone = 5
    this.handleTrackMilestoneChange(this.state.focusedTrackId, milestone)
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
        <KeyboardListener
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
        />
      </>
    )
  }
}

export default CurveApp

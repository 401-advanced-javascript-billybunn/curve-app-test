import React from "react"
import * as d3 from "d3"
import styled from "styled-components"
import { trackIds, milestones, tracks, categoryColorScale } from "../constants"

const width = 400
// "milestones" is an array of each level; [0, 1, 2, 3, 4, 5]
const arcMilestones = milestones.slice(1) // we'll draw the '0' milestone with a circle, not an arc.

// Styles
const Figure = styled.figure`
  margin: 0;
`
const Svg = styled.svg`
  width: ${width}px;
  height: ${width}px;
`
const TrackMilestone = styled.path`
  fill: #eee;
  cursor: pointer;
`
const TrackMilestoneCurrent = styled.path`
  stroke: #000;
  stroke-width: 4px;
  stroke-linejoin: round;
  &:hover {
    stroke: #000;
    stroke-width: 4px;
    stroke-linejoin: round;
  }
`

class NightingaleChart extends React.Component {
  constructor(props) {
    super(props)

    this.colorScale = d3.scaleSequential(d3.interpolateWarm).domain([0, 5])

    this.radiusScale = d3
      .scaleBand()
      .domain(arcMilestones)
      .range([0.15 * width, 0.45 * width])
      .paddingInner(0.1)

    this.arcFn = d3
      .arc()
      .innerRadius(milestone => this.radiusScale(milestone))
      .outerRadius(
        milestone => this.radiusScale(milestone) + this.radiusScale.bandwidth()
      )
      .startAngle(-Math.PI / trackIds.length)
      .endAngle(Math.PI / trackIds.length)
      .padAngle(Math.PI / 200)
      .padRadius(0.45 * width)
      .cornerRadius(2)
  }

  render() {
    // console.log("handleTRACKMILESTONE", this.props.handleTrackMilestoneChangeFn)
    const currentMilestoneId = this.props.milestoneByTrack[
      this.props.focusedTrackId
    ]
    return (
      <Figure>
        <style jsx>{`
          figure {
            margin: 0;
          }
          .track-milestone {
            fill: #eee;
            cursor: pointer;
          }
          .track-milestone-current,
          .track-milestone:hover {
            stroke: #000;
            stroke-width: 4px;
            stroke-linejoin: round;
          }
        `}</style>
        <Svg>
          <g transform={`translate(${width / 2},${width / 2}) rotate(-33.75)`}>
            {trackIds.map((trackId, i) => {
              const isCurrentTrack = trackId == this.props.focusedTrackId
              return (
                <g
                  key={trackId}
                  transform={`rotate(${(i * 360) / trackIds.length})`}
                >
                  {arcMilestones.map(milestone => {
                    const isCurrentMilestone =
                      isCurrentTrack && milestone == currentMilestoneId
                    const isMet =
                      this.props.milestoneByTrack[trackId] >= milestone ||
                      milestone == 0
                    return (
                      <path
                        key={milestone}
                        className={
                          "track-milestone " +
                          (isMet ? "is-met " : " ") +
                          (isCurrentMilestone ? "track-milestone-current" : "")
                        }
                        onClick={() =>
                          this.props.handleTrackMilestoneChangeFn(
                            trackId,
                            milestone
                          )
                        }
                        d={this.arcFn(milestone)}
                        style={{
                          fill: isMet
                            ? categoryColorScale(tracks[trackId].category)
                            : undefined,
                        }}
                      />
                    )
                  })}
                  <circle
                    r="8"
                    cx="0"
                    cy="-50"
                    style={{
                      fill: categoryColorScale(tracks[trackId].category),
                    }}
                    className={
                      "track-milestone " +
                      (isCurrentTrack && !currentMilestoneId
                        ? "track-milestone-current"
                        : "")
                    }
                    onClick={() =>
                      this.props.handleTrackMilestoneChangeFn(trackId, 0)
                    }
                  />
                </g>
              )
            })}
          </g>
        </Svg>
      </Figure>
    )
  }
}

export default NightingaleChart

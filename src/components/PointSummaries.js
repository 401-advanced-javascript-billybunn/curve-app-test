import React from "react"
import {
  pointsToLevels,
  milestoneToPoints,
  trackIds,
  totalPointsFromMilestoneMap,
} from "../constants"
import styled from "styled-components"

const PointSummariesTable = styled.table`
  border-spacing: 3px;
  margin-bottom: 20px;
  margin-left: -3px;
`
const PointSummaryLabelTableHeader = styled.th`
  font-size: 12px;
  text-align: center;
  font-weight: normal;
  width: 120px;
`
const PointSummaryValueTableData = styled.td`
  width: 120px;
  background: #eee;
  font-size: 24px;
  font-weight: bold;
  line-height: 50px;
  border-radius: 2px;
  text-align: center;
`

class PointSummaries extends React.Component {
  render() {
    const totalPoints = totalPointsFromMilestoneMap(this.props.milestoneByTrack)

    let currentLevel, nextLevel

    let pointsForCurrentLevel = totalPoints
    while (!(currentLevel = pointsToLevels[pointsForCurrentLevel])) {
      pointsForCurrentLevel--
    }

    let pointsToNextLevel = 1
    while (!(nextLevel = pointsToLevels[totalPoints + pointsToNextLevel])) {
      pointsToNextLevel++
      if (pointsToNextLevel > 135) {
        pointsToNextLevel = "N/A"
        break
      }
    }

    const blocks = [
      {
        label: "Current level",
        value: currentLevel,
      },
      {
        label: "Total points",
        value: totalPoints,
      },
      {
        label: "Points to next level",
        value: pointsToNextLevel,
      },
    ]

    return (
      <PointSummariesTable>
        <tbody>
          <tr>
            {blocks.map(({ label }, i) => (
              <PointSummaryLabelTableHeader
                key={i}
                className="point-summary-label"
              >
                {label}
              </PointSummaryLabelTableHeader>
            ))}
          </tr>
          <tr>
            {blocks.map(({ value }, i) => (
              <PointSummaryValueTableData
                key={i}
                className="point-summary-value"
              >
                {value}
              </PointSummaryValueTableData>
            ))}
          </tr>
        </tbody>
      </PointSummariesTable>
    )
  }
}

export default PointSummaries

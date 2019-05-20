import React from "react"
import { trackIds, tracks, categoryColorScale } from "../constants"
import styled from "styled-components"

const TrackSelectorTable = styled.table`
  width: 100%;
  border-spacing: 3px;
  border-bottom: 2px solid #ccc;
  padding-bottom: 20px;
  margin-bottom: 20px;
  margin-left: -3px;
  ${"" /* color: red; */}
`

const TrackSelectorLabel = styled.td`
  text-align: center;
  font-size: 9px;
`

const TrackSelectorValue = styled.td`
  font-family: Helvetica;
  line-height: 50px;
  width: 50px;
  text-align: center;
  background: #eee;
  font-weight: bold;
  font-size: 24px;
  border-radius: 3px;
  cursor: pointer;
`

class TrackSelector extends React.Component {
  render() {
    return (
      <table>
        <style jsx>{`
          table {
            width: 100%;
            border-spacing: 3px;
            border-bottom: 2px solid #ccc;
            padding-bottom: 20px;
            margin-bottom: 20px;
            margin-left: -3px;
          }
          .track-selector-value {
            line-height: 50px;
            width: 50px;
            text-align: center;
            background: #eee;
            font-weight: bold;
            font-size: 24px;
            border-radius: 3px;
            cursor: pointer;
          }
          .track-selector-label {
            text-align: center;
            font-size: 9px;
          }
        `}</style>
        <tbody>
          <tr>
            {trackIds.map(trackId => (
              <td
                key={trackId}
                className="track-selector-label"
                onClick={() => this.props.setFocusedTrackIdFn(trackId)}
              >
                {tracks[trackId].displayName}
              </td>
            ))}
          </tr>
          <tr>
            {console.log(
              "LINE 73",
              trackIds.map(trackId =>
                categoryColorScale(tracks[trackId].category)
              )
            )}

            {trackIds.map(trackId => (
              <td
                key={trackId}
                className="track-selector-value"
                style={{
                  border:
                    "4px solid " +
                    (trackId == this.props.focusedTrackId
                      ? "#000"
                      : categoryColorScale(tracks[trackId].category)),
                  background: categoryColorScale(tracks[trackId].category),
                }}
                onClick={() => this.props.setFocusedTrackIdFn(trackId)}
              >
                {this.props.milestoneByTrack[trackId]}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    )
  }
}

export default TrackSelector

import React from "react"
import styled from "styled-components"

import { eligibleTitles } from "../constants"

const Select = styled.select`
  font-size: 20px;
  line-height: 20px;
  margin-bottom: 20px;
  min-width: 300px;
`

class TitleSelector extends React.Component {
  render() {
    const titles = eligibleTitles(this.props.milestoneByTrack)
    return (
      <Select
        value={this.props.currentTitle}
        onChange={e => this.props.setTitleFn(e.target.value)}
      >
        {titles.map(title => (
          <option key={title}>{title}</option>
        ))}
      </Select>
    )
  }
}

export default TitleSelector

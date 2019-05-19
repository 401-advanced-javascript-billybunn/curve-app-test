import React from "react"
import styled from "styled-components"

const Input = styled.input`
  border: none;
  display: block;
  border-bottom: 2px solid #fff;
  font-size: 30px;
  line-height: 40px;
  font-weight: bold;
  width: 380px;
  margin-bottom: 10px;
  &:hover,
  &:focus {
    border-bottom: 2px solid #ccc;
    outline: 0;
  }
`

class NameInput extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Input
        type="text"
        className="name-input"
        value={this.props.name}
        onChange={this.props.handleNameInputChange}
        placeholder="Name"
      />
    )
  }
}

export default NameInput

import React from 'react'
import { Button } from 'reactstrap'

class Togglable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true
    }
  }
  toggleVisibility = () => this.setState({ visible: !this.state.visible })
  render() {
    const hideWhenVisible = { display: this.state.visible ? '' : 'none' }
    const showWhenVisible = { display: this.state.visible ? 'none' : '' }
    return(
      <div>
        <div style={hideWhenVisible} >
          <Button onClick={this.toggleVisibility} color='success' >{this.props.buttonLabel}</Button>
        </div>
        <div style={showWhenVisible} >
          {this.props.children}
          <Button onClick={this.toggleVisibility} >cancel</Button>
        </div>
      </div>
    )
  }
}

export default Togglable
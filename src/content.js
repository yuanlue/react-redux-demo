import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './themeSwitch'
import { connect } from 'react-redux'

class Content extends Component {
    static propTypes = {
        themeColor: PropTypes.string
      }
  
    constructor (props) {
      super(props)
    }
    handleSwitchColor(){
        this.props.dispatch({
            type:"MODIFY_NAME",
            name:"是是是"
        })
    }
    render () {
      return (
        <div>
          <p style={{ color: this.props.themeColor }}>this is content</p>
          <ThemeSwitch />
          <button onClick={this.handleSwitchColor.bind(this, '袁略')}>修改姓名</button>
        </div>
      )
    }
  }
  const mapStateToProps = (state) => {
    return {
      themeColor: state.themeColor    }
  }
  Content = connect(mapStateToProps)(Content)
  export default Content
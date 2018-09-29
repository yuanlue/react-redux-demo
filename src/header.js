import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Header extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }
    static propTypes = {
        themeColor: PropTypes.string
      }
      handleSwitchColor(){
          this.props.dispatch({
            type: 'CHANGE_COLOR',
            themeColor: 'red'
          })
      }
    render () {
      return (
        <h1 style={{ color: this.props.themeColor }}>this is header
        {this.props.name}
         <button  onClick={this.handleSwitchColor.bind(this, 'red')}>Red</button>
        </h1>
       
      )
    }
  }
  const mapStateToProps = (state) => {
    return {
      themeColor: state.themeColor,
      name:state.name
    }
  }
  Header = connect(mapStateToProps)(Header)
  export default Header
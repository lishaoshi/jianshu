import React, { Fragment } from 'react'
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWraper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  Button,
  Addition,
  NavSearch
} from './style'
import { connect } from 'react-redux'
import {
  actionCreators
} from './store'
const Header = (props) => {
  return (
    <Fragment>
      <HeaderWraper>
        <Logo></Logo>
        <Nav>
          <NavItem className="left red">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">Aa</NavItem>
          <NavItem className="right">登陆</NavItem>
          <SearchWrapper>
            <CSSTransition
            in={props.focused}
            timeout={500}
            classNames="slide"
            >
              <NavSearch
              className={props.focused ? 'focued':''}
              onFocus={props.handleFocus}
              onBlur={props.handleBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={props.focused ? 'focued iconfont':'iconfont'}>
              &#xe614;
            </i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWraper>
    </Fragment>
  )
}

const mapStateToProps = (state)=>{
  console.log(state)
  return {
    focused: state.header.focused
  }
}

const mapDispathToProps = (dispatch)=> {
  return {
    handleFocus:()=>{
      const action = actionCreators.inputFocus()
      dispatch(action)
    },
    handleBlur: ()=>{
      const action = actionCreators.inputBlur()
      dispatch(action)
    }
  }
}


export default connect(mapStateToProps, mapDispathToProps)(Header)
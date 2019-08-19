import React, { Component, Fragment } from 'react'
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

class Header extends Component {
  render() {
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
              <NavSearch
              ></NavSearch>
              <i className="iconfont">
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
}


export default Header
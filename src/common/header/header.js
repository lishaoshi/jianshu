import React, { Fragment, Component } from 'react'
import { CSSTransition } from 'react-transition-group';
// import { getIn, toJS } from 'immutable';
import {
  HeaderWraper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  Button,
  Addition,
  NavSearch,
  SearchInfoItem,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList
} from './style'
import { connect } from 'react-redux'
import {
  actionCreators
} from './store'
class Header extends Component{
  getListArea() {
    // console.log(this.props)
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const newList = list.toJS();
    const pageList = [];
  
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
  
    if (focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch 
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null;
    }
  }
  render () {
    const { focused,handleFocus,handleBlur, list } = this.props;
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
              in={focused}
              timeout={500}
              classNames="slide"
              >
                <NavSearch
                className={focused ? 'focued':''}
                onFocus={() => handleFocus(list)}
                onBlur={handleBlur}
                ></NavSearch>
              </CSSTransition>
              <i className={focused ? 'focued iconfont zoom':'iconfont zoom'}>
                &#xe614;
              </i>
              {this.getListArea()}
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

const mapStateToProps = (state)=>{
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage'])
  }
}

const mapDispathToProps = (dispatch)=> {
  return {
    handleFocus:(list)=>{
      // console.log(list)
      if(list.size) {
        // let length = Math.ceil(list.size/10)
      }
      const action = actionCreators.inputFocus()
      dispatch(action)
    },
    handleBlur: ()=>{
      const action = actionCreators.inputBlur()
      dispatch(action)
    },
    handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page, totalPage, spin) {
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			}else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

			if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1));
			}else {
				dispatch(actionCreators.changePage(1));
			}
		},
  }
}


export default connect(mapStateToProps, mapDispathToProps)(Header)
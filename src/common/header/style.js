import styled from 'styled-components'
import logoPic from '../../statics/logo.png';
export const HeaderWraper = styled.div`
    height: 56px;
    position:relative;
    z-index:1;
    border-bottom: 1px solid #f0f0f0;
    display:flex;
    min-width: 762px;
    /* overflow-y: auto; */
    /* background: green; */
`;
export const Logo = styled.div`
    /* position: absolute;
    top: 0;
    left: 0; */
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic}) center no-repeat;
    background-size: contain;
		margin-right: 100px;
`;

export const Nav = styled.div`
	/* width: 960px;
	height: 100%;
	padding-right: 70px;
	box-sizing: border-box;
    margin: 0 auto; */
    /* width: 60%; */
		flex: 1;
		/* margin-left: 60rpx; */
    height: 100%;
		padding-left: 60rpx;
    /* margin: 0 auto; */
    /* background: green; */
    /* padding-right: 70px; */
    /* display:flex; */
`;

export const NavItem = styled.div`
	/* line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
    } */
    line-height: 56px;
    padding: 0 15px;
	font-size: 17px;
	color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
    }
    &.active {
        color: #ea6f5a;
        }
    &.red {
        color: #ea6f5a;
    }

`;

export const Addition = styled.div`
	/* position: absolute;
	right: 0;
    top: 0; */
    /* float: right; */
    height: 56px;
    /* overflow-x: hidden; */
`;

export const Button = styled.div`
	float: right;
	margin-top: 9px;
	margin-right: 20px;
	padding: 0 20px;
	line-height: 38px;
	border-radius: 19px;
	border: 1px solid #ec6149;
    font-size: 14px;
    
	&.reg {
		color: #ec6149;
	}
	&.writting {
		color: #fff;
		background: #ec6149;
	}
`;

export const SearchWrapper = styled.div`
	position: relative;
    float: left;
	.zoom {
		position: absolute;
		right: 5px;
		bottom: 4px;
		line-height: 30px;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		text-align:center;
		&.focued {
			background: #777;
			color: #fff;
		}
	}
	
	/* .zoom {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;
		&.focused {
			background: #777;
			color: #fff;
		}
	} */
`;

export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
	&.slide-enter {
		/* height: 100px; */
		width: 160px;
		transition: width .5s ease-out;
		/* opacity: 0; */
		/* transition: opacity 2s ease-out; */
	}
	&.slide-enter-active {
		/* height: 400px; */
		/* opacity: 1; */
		width: 240px;
		
		/* transition: opacity 2s ease-out; */
	}
	&.slide-exit {
		transition: all .5s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	}
	width: 160px;
	height: 38px;
	padding: 0 40px 0 20px;
	margin-top: 9px;
	margin-left: 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
	color: #666;
	&.focued {
		width: 240px;
	}
	&::placeholder {
		color: #999;
	}
	/*
	&.focused {
		width: 240px;
	}
	&.slide-enter {
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 240px;
	}
	&.slide-exit {
		transition: all .2s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	} */
`;

export const SearchInfoSwitch = styled.span`
	float: right;
	font-size: 13px;
	cursor: pointer;
	.spin {
		display: block;
		float: left;
		font-size: 12px;
		margin-right: 2px;
		transition: all .2s ease-in;
		transform-origin: center center;
	}
`;

export const SearchInfo = styled.div`
	position: absolute;
	left: 0;
	top: 56px;
	width: 240px;
	padding: 0 20px;
	box-shadow: 0 0 8px rgba(0, 0, 0, .2);
	background: #fff;
`;

export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	line-height: 20px;
	padding: 0 5px;
	margin-right: 10px;
	margin-bottom: 15px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
`;

export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`;
export const SearchInfoList = styled.div`
	overflow: hidden;
`;

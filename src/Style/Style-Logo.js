 import {tableSize} from './Table-Style'
export const logo= {
	float: 'left',//inner div is bigger than its parent if using display:inline-block
	position:'relative',
	left:'32px',
	top:'32px',	
	lineHeight: '0px',
}
export const path={
	paddingLeft: '100px',
	transform: 'scale(0.5) translate(14px,8px)',
}
export const header={
	height:'96px',
	lineHeight:'96px',
	backgroundColor:'#ADB5BD',
	width:`${tableSize+32*2}px`,
}
export const name= {
	fontFamily:'helvetica, arial, sans-serif',
	color:'white',
	float: 'left', //inner div is bigger than its parent if using display:inline-block
	fontSize:'1.5em',
	position:'relative',
	left:'50px',
	fontWeight:'500',
	lineHeight:'96px'
	}
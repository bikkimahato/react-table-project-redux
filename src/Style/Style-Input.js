const width=150;
const emailWidth=width*1.5;
const phoneWidth=width*1.2;
const lineWidth=912;
const boxHeight=40;

const button = {
	padding:'0',
	display:'inline-block',
	height:`${boxHeight}px`, //is the height of input content but is the height of the button
	width: `${width}px` ,
	backgroundColor:'#FAFAFA',
	border:'1px solid #EEEEEE ',
	paddingLeft:'10px',
	boxSizing:'border-box',

}
export const nameBox={
	...button,
	marginLeft:'16px',

}
export const mailBox={
	...button,
	marginLeft:'16px',
	width:`${emailWidth}px`
}
export const phoneBox={
	...button,
	marginLeft:'16px',
	width:`${phoneWidth}px`
}
export const addButton={
	...button,
	height:`${boxHeight}px`,
	paddingLeft:'0px',
	position:'relative',
	left:`${lineWidth-width*2-emailWidth-phoneWidth-16*4}px`,	
	backgroundColor:'#EDEDED',
	fontWeight:'600',
	color:'#757575'
	
}
export const groupButton ={
	display:'inline-block',
	margin:'0',
	lineHeigh:'40px',
	position:'relative',
	left:`${lineWidth-width-emailWidth-phoneWidth-190-16*4-5}px`,
}
	export const save ={
		height:`${boxHeight}px`,
		background:'#07f',
		color:'#ffffff',
		fontSize:'16px',
		fontWeight:'500',
		width: `${90}px`,
		padding:'0',
		border:'0px',
		marginLeft:'4px'
	}
	export const cancel ={
		...save,
		background:'#EDEDED',
		color:'#107FFE',
		marginLeft:'0px',
		width: `${100}px`,
		
	}

export const inputLine = {
	padding:'16px 0 16px 0',
	height: '40px',
	width:`${lineWidth}px` ,
	backgroundColor:'white',
	marginBottom:'9px'
}
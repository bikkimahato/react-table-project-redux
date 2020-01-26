import {nameBox, mailBox, phoneBox,addButton, inputLine} from './Style-Input'
const color='#757575';
const fontSize=14;
const lineHeight=16;
const fontWeight=500;
const titleLineHeight=48;
const commonStyle={
	backgroundColor:'transparent',
	border:'0px',
	height:'auto',
	fontWeight:fontWeight,
	fontSize: `${fontSize}px`,
	lineHeight:`${lineHeight}px`,
	color:color,
	paddingLeft:'8px'

}

const nameTitle = {
	...nameBox,
	...commonStyle,

}
const mailTitle= {
	...mailBox,
	...commonStyle,

}
const phoneTitle={
	...phoneBox,
	...commonStyle
}
const editIcon ={
	...addButton,
	fontSize: `${fontSize}px`,
	lineHeight:`${lineHeight}px`,
	fontWeight:fontWeight,
	height:`${titleLineHeight}px`,
	color:color,
	backgroundColor:'transparent',
	border:'0px'
}
const titleLine={
	...inputLine,
	margin: '2px 0',
	padding:'0',
	height:`${titleLineHeight}px`,
	lineHeight:`${titleLineHeight}px`,
	color:color,



}
export {titleLine,editIcon, phoneTitle,mailTitle,nameTitle}
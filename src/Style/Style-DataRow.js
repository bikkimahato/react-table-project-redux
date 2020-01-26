import {titleLine, phoneTitle,mailTitle,nameTitle} from './Style-DataTitle'
const dataLineHeight = 72;
const lineHeight=24;

const commonStyle={
	color:'#505050',
	lineHeight: `${lineHeight}px`,
	fontSize:'16px',
	display:'inline-table',
}

const nameData ={
	...nameTitle,
	...commonStyle,


}
const mailData = {
	...mailTitle,
	...commonStyle,
}
const phoneData = {
	...phoneTitle,
	...commonStyle,
	
}
const editData = {
	position:'relative',
	left:'90%',
	top:'-68px',
	width: '150px',
	margin:'0px',
	lineHeight: `${24}px`,
	height:`${lineHeight}px`,
	display:'inline-block'

}
const edit = { 
	color:'#909090',
	verticalAlign:'bottom',
	display:'inline-block',

}
const del= {
	color:'#909090',
	display:'inline-block',
	verticalAlign:'bottom',
	position:'relative',
	left:'40px'
	
}

const dataLine={
	...titleLine,
	color:'#505050',
	height:`${dataLineHeight}px`,
	lineHeight: `${dataLineHeight}px`,

}
export const tableData={
	paddingBottom:'100px'
}

const tableStyle={
	
	width:'912px'
}
export {nameData,mailData,phoneData,editData,dataLine, edit, del, tableStyle}
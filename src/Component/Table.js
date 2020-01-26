import React from 'react';
import { titleLine, phoneTitle, mailTitle, nameTitle } from '../Style/Style-DataTitle'
import { nameData, mailData, phoneData, editData, dataLine, edit, del, tableStyle, tableData } from '../Style/Style-DataRow'
import { nameBox, mailBox, phoneBox, save, cancel, groupButton } from '../Style/Style-Input'
import { cancelEdit, saveEdit, editRow, delRow, filterByStatus } from '../Action/Action'
//not validate yet


const Line = ({ title, status, updated_at, editing, created_at, row, dispatch, isFiltered }) => {
	const current_datetime = new Date(updated_at)
	const created_datetime = new Date(created_at)
	const upTime = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate();
	const createTime = created_datetime.getFullYear() + "-" + (created_datetime.getMonth() + 1) + "-" + created_datetime.getDate();
	return !editing ?
		(<div>

			<div style={dataLine} >
				<div>
					<div className="title" style={nameData}>
						{title}
					</div>
					<div className="status" onClick={() => { !isFiltered ? dispatch(editRow(editing, row)) : null }} style={mailData}> {status} </div>
					<div className="updated_at" style={phoneData}> {upTime} </div>
					<div className="created_at" style={phoneData}> {createTime} </div>
					<div style={editData}>

						{!isFiltered ? <i style={edit} className="material-icons"
							onClick={() => dispatch(editRow(editing, row))} >mode_edit</i> : <p></p>}
						<i style={del} className="material-icons"
							onClick={() => dispatch(delRow(row))} >delete</i>

					</div>
				</div>
			</div>
		</div>
		) : (
			<div>
				<form style={dataLine} action=""
					onSubmit={event => {
						event.preventDefault();
						dispatch(saveEdit(row, title, status, updated_at, created_at))
					}} >
					{/* <input name='editTitle' style={nameBox} type="text" defaultValue={title}  
					onChange={(event)=> {title=event.target.value;} } required /> */}
					<input name='editStatus' style={mailBox} type="text" defaultValue={status}
						onChange={(event) => { status = event.target.value; }} required />
					{/* <input name='editUpdatedAt' style={phoneBox} type="tel" defaultValue={updated_at} 
					onChange={(event)=> {updated_at=event.target.value;} } required /> */}
					{/* <input name='editCreatedAt' style={phoneBox} type="tel" defaultValue={created_at} 
					onChange={(event)=> {created_at=event.target.value;} } required /> */}
					<div style={groupButton}>
						<button name='cancelEdit' style={cancel}
							onClick={() => dispatch(cancelEdit(editing, row))}>
							Cancel
					</button>
						<button name='saveEdit' style={save} type="submit" >Save</button>
					</div>

				</form>

			</div>
		)
}
const Table = ({ list, updatedList, isFiltered, dispatch }) => {
	updatedList = updatedList.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
	return (
		<div>
			<select onChange={(event) => dispatch(filterByStatus(event.target.value, list, updatedList))}>
				<option value="All" >All</option>
				<option value="Denied">Denied</option>
				<option value="Approved">Approved</option>
				<option value="Pending">Pending</option>
			</select>

			<Table1 list={updatedList} dispatch={dispatch} isFiltered={isFiltered} />
		</div>
	)
}
const Table1 = ({ list, isFiltered, dispatch }) => {
	return (
		!(list.length === 0) ?
			<div style={tableStyle} >
				<div style={titleLine}>
					<div className="title" style={nameTitle} >
						<div style={{ width: '60px', color: '#505050' }}>
							Title
					</div>
					</div>
					<div className="status" style={mailTitle} >
						Status
				</div>
					<div className="updated_at" style={phoneTitle} >
						Updated
				</div>
					<div className="created_at" style={phoneTitle} >
						Created
				</div>
				</div>
				<div style={tableData} >
					{list.map((list, i) => <Line key={`${list.email}${i}`} {...list} dispatch={dispatch} row={i} isFiltered={isFiltered} />)}
				</div>

			</div> : <div>No rows</div>
	)
}
export default Table
const reducer = (state = { list: [], updatedList: [] }, action) => {
	let nextState = state.updatedList.slice();
	if (action.type === 'EDIT_ROW' || action.type === 'CANCEL_EDIT') {
		debugger
		let selectedRow = state.updatedList.slice(action.row, action.row + 1);
		let editedRow = { ...selectedRow[0], editing: !action.edit };
		nextState.splice(action.row, 1, editedRow)
		return { ...state, updatedList: nextState };
	}
	else if (action.type === 'DEL_ROW') {
		debugger
		nextState.splice(action.row, 1);
		return { ...state, updatedList: nextState };
	}
	else if (action.type === 'SAVE_EDIT') {
		let newRow = { title: action.title, status: action.status, created_at: action.created_at, updated_at: action.updated_at, editing: false };

		nextState.splice(action.row, 1, newRow);
		return { ...state, updatedList: nextState };
	}
	else if (action.type === 'FILTER_BY_STATUS') {
		let list = action.list;
		let value = action.value;
		let tempArray = [];

		if (value === "All") {
			let nlist = list.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
			return { ...state, updatedList: nlist, isFiltered: false };
		}

		list.forEach(data => {
			let row = {};
			if (data.status === value) {
				row = data;
				tempArray.push(row);
			}
		})
		return { ...state, updatedList: tempArray, isFiltered:true }
	}
	else
		return state
}



export default reducer
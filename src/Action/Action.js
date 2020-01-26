export const editRow = (edit, row) => {
	return (
		{
			type: 'EDIT_ROW',
			edit: edit,
			row
		})
};

export const delRow = (row) => {
	return (
		{
			type: 'DEL_ROW',
			row
		})
};


export const cancelEdit = (edit, row) => {
	return (
		{
			type: 'CANCEL_EDIT',
			edit: edit,
			row
		})
}

export const saveEdit = (row, title, status, updated_at, created_at) => {

	return {
		type: 'SAVE_EDIT',
		row, title, status, updated_at, created_at
	}
}
export const filterByStatus = (value, list, updatedList) => {
	return {
		type: 'FILTER_BY_STATUS',
		value,
		list,
		updatedList

	}
}


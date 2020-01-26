import { connect } from 'react-redux';
import Table from '../Component/Table';

const mapStateToProps = state => {
	return { list: state.list, updatedList: state.updatedList, isFiltered: state.isFiltered }
}

const TableContainer = connect(mapStateToProps)(Table);
export default TableContainer
import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, changeApiStatus, getLoadingState } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  changeStatus: (table, status, order) => dispatch(changeApiStatus({table, status, order})),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
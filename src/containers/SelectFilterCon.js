import {connect} from 'react-redux';
import SelectFilter from "../components/SelectFilter.";
import {setVisibilityFilter} from "../store/aciton";

const mapDispatchToProps = (dispatch) => ({
    selectEvent: e => dispatch(setVisibilityFilter(e)),
});

export default connect(
    null,
    mapDispatchToProps
)(SelectFilter);

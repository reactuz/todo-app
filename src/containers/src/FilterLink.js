import connect from "react-redux/es/connect/connect";
import { Link } from '../../components';
import { setVisibilityFilter } from "../../actions";

const mapStateToLinkProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToLinkProps = (dispatch, ownProps) => ({
    onClick: () =>
        dispatch(setVisibilityFilter(ownProps.filter))
});

const FilterLink = connect(
    mapStateToLinkProps,
    mapDispatchToLinkProps
)(Link);

export { FilterLink };
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AccountScreen from './AccountScreen';


const mapStateToProps = state => (
    {
        userAccount: state.authReducer.response
    });

export default connect(
    mapStateToProps,
)(AccountScreen);

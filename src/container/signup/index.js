import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHomeData } from "../../modules/home";
import SignUpScreen from './SignUpScreen';

const mapStateToProps = state => ({
});

export default connect(
    mapStateToProps,
    dispatch => {
        return {
        }
    }
)(SignUpScreen);
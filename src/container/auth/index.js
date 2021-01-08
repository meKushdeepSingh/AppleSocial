import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SocialLoginScreen from './SocialLoginScreen';
import { socialLogin } from "../../modules/auth";

const mapStateToProps = state => ({

});

export default connect(
    mapStateToProps,
    dispatch => {
        return {
            socialLogin: bindActionCreators(socialLogin, dispatch),
        };
    }
)(SocialLoginScreen);

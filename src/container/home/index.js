import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HomeScreen from './HomeScreen';
import { getHomeData } from "../../modules/home";

const mapStateToProps = state => ({
    homeData: state.homeReducer.homeData,
});

export default connect(
    mapStateToProps,
    dispatch => {
        return {
            getHomeData: bindActionCreators(getHomeData, dispatch),
        }
    }
)(HomeScreen);
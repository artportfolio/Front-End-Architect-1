import React from 'react';
import LoggedInView from './LoggedInView';
import LoggedOutView from './LoggedOutView';
import Header from '../components/Header';
import { connect } from "react-redux";

class Home extends React.Component{
    render(){
        return (
            <div>
                <Header />
                <div className="wrapper">
                    {this.props.loggedIn ? <LoggedInView /> : <LoggedOutView />}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.loggedIn,
    logInMessage: state.auth.logInMessage
  });

export default connect(mapStateToProps, null )(Home);
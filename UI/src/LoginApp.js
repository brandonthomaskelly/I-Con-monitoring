import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './LoginApp.css';
import LoginScreen from './Loginscreen';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
//injectTapEventPlugin();


class LoginApp extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<LoginScreen appContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default LoginApp;

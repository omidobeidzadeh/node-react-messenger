import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navigation from "./navigation/Navigation";
import Sidebar from "./sidebar/index";
import Chat from "./chat/index";
import ChatModal from "./chat/ChatModal";
import * as eva from "eva-icons";
import LocationService from '../Services/LocationService'
import PeerService from '../Services/PeerService'
import mainActions from '../Store/Actions/mainActions';
import Loader from '../Partials/Loader';


class Main extends Component {
  constructor(props) {
    super(props)
    this.messageService = new PeerService()
    this.locationService = new LocationService()
  }
  componentDidMount() {
    this.props.init();
    eva.replace();
  }
  getMainRender() {
    return (
      <React.Fragment>
        <Navigation />
        <Sidebar />
        <Chat />
        <ChatModal />
      </React.Fragment>
    )
  }
  render() {
    const renderItems = this.props.isInit ? <Loader /> : this.getMainRender();
    return (
      <div className="layout">
        {renderItems}
      </div>
    );
  }
}

export default connect(state => ({
  isInit: state.main.isInit
}), dispatch => {
  return {
    init: () => {
      dispatch({type: mainActions.INIT_REQUESTED, payload: null})
    }
  }
})(Main)

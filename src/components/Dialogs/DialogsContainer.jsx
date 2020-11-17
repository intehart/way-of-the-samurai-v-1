import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../state/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs,
    isAuth: state.auth.isAuth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {dispatch(updateNewMessageBodyActionCreator(body));},
    sendMessage: () => {dispatch(sendMessageActionCreator());}
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
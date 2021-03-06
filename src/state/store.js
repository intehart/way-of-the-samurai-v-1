import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import navigationReducer from './navigationReducer';

let store = {
  _state: {
    profile: {
      posts: [
        {id: 1, message: 'Hi, how are you?'},
        {id: 2, message: 'It\'s my first post'},
        {id: 3, message: 'Hi yo'}
      ],
      newPostText: 'Введи сообщение'
    },
    dialogs: {
      usersDialog: [
        {
          id: 1,
          name: 'Viktor',
          pathUrl: 'https://i.pinimg.com/originals/44/dc/38/44dc38897234ad7164d4bfea74e5bb7b.jpg'
        },
        {
          id: 2,
          name: 'Katya',
          pathUrl: 'https://3dtoday.ru/upload/blog/avatar/13a/13a3232f7f2ee7b1793de48245b2c9f3.jpeg'
        },
        {
          id: 3,
          name: 'Lera',
          pathUrl: 'https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg?cropX1=836&cropX2=5396&cropY1=799&cropY2=3364'
        },
        {
          id: 4,
          name: 'Anton',
          pathUrl: 'https://images11.popmeh.ru/upload/img_cache/571/571d2c1f21aa3bef07dff8382a2c8982_ce_1080x1080x96x0_cropped_800x800.jpeg'
        },
        {
          id: 5,
          name: 'Vladislav',
          pathUrl: 'https://cdn2.buyacar.co.uk/sites/buyacar/files/styles/w860/public/alfa-romeo-giulia67-1_0.jpg?itok=cM6fGydG'
        }
      ],
      messageDialog: [
        {id: 1, message: 'Hi'}
      ],
      newMessageBody: ''
    },
    navigation: {
      friends: [
        {
          id: 1,
          firstname: 'Katya',
          lastName: 'Ivanova',
          pathImg: 'https://3dtoday.ru/upload/blog/avatar/13a/13a3232f7f2ee7b1793de48245b2c9f3.jpeg'
        },
        {
          id: 2,
          firstname: 'Viktor',
          lastName: 'Roko',
          pathImg: 'https://i.pinimg.com/originals/44/dc/38/44dc38897234ad7164d4bfea74e5bb7b.jpg'
        },
        {
          id: 3,
          firstname: 'Anton',
          lastName: 'Livan',
          pathImg: 'https://images11.popmeh.ru/upload/img_cache/571/571d2c1f21aa3bef07dff8382a2c8982_ce_1080x1080x96x0_cropped_800x800.jpeg'
        },
        {
          id: 4,
          firstname: 'Lera',
          lastName: 'Kuzik',
          pathImg: 'https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg?cropX1=836&cropX2=5396&cropY1=799&cropY2=3364'
        },
        {
          id: 5,
          firstname: 'Vladislav',
          lastName: 'Ruckih',
          pathImg: 'https://cdn2.buyacar.co.uk/sites/buyacar/files/styles/w860/public/alfa-romeo-giulia67-1_0.jpg?itok=cM6fGydG'
        }
      ]
    }
  },
  _callSubscriber() {
    console.log('State Changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {  // {type: 'ADD-POST'}
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.dialogs = dialogsReducer(this._state.dialogs, action);
    this._state.navigation = navigationReducer(this._state.navigation, action);

    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;
//====================================================|
// CONFIGURE STORE


//--------------------------| Import

// Redux
import { createStore, combineReducers } from 'redux';

// Reducers
import galleryReducer from '../reducers/gallery';
import playerReducer from '../reducers/player';
import popoverReducer from '../reducers/popover';


//--------------------------| Export

export default initialModel => createStore(
  combineReducers({
    gallery: galleryReducer(initialModel),
    player: playerReducer(),
    popover: popoverReducer()
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && // eslint-disable-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
);

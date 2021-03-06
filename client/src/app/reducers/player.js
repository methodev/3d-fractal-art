//====================================================|
// REDUCERS: PLAYER


//--------------------------| Import

import { playerInitialMode } from '../../system/config.json';
import { player } from '../../system/labels.json';


//--------------------------| Default state

const playerReducerDefaultState = {
  mode: '',
  controllerTooltipText: playerInitialMode === 'play' ?
    player.pause :
    player.play
};


//--------------------------| Export

export default () => (state = playerReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;

    case 'PLAY':
      return {
        mode: 'play',
        controllerTooltipText: player.pause
      };

    case 'PAUSE':
      return {
        mode: 'pause',
        controllerTooltipText: player.play
      };
  }
};

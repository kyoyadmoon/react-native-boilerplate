import { ActionConst } from 'react-native-router-flux';

const initialState = {
  scene: {
    drawer: 'DrawerClose'
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionConst.FOCUS:
      return {
        ...state,
        ...action,
        scene: {
          sceneKey: action.routeName,
          drawer: 'DrawerClose'
        },
      };
    case 'Navigation/NAVIGATE':
      return {
        ...state,
        ...action,
        scene: {
          ...state.scene,
          drawer: action.routeName
        },
      };
    default:
      return state;
  }
};

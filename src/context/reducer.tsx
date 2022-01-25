import { ActionType, GlobalStateInterface } from './types';

const initialState = {
  isMenuOpen: false,
  isDarkMode: false,
  persistenceType: 'sessionStorage',
}

const Reducer = (state: GlobalStateInterface, action: ActionType): any => {
  switch (action.type) {
    case 'MENU_TOGGLE':
      return { ...state, isMenuOpen: !state.isMenuOpen };
    case 'DARK_TOGGLE':
      !state.isDarkMode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
      return { ...state, isDarkMode: !state.isDarkMode };
    case 'PURGE_STATE':
      return initialState;
    default:
      return state;
  }
};

export default Reducer;
import { Dispatch } from 'react';

export interface GlobalStateInterface {
  isMenuOpen: boolean,
  isDarkMode: boolean,
  persistenceType: string,
}

export type ActionType = {
  type: string;
  payload?: any;
};

export type ContextType = {
  globalState: GlobalStateInterface;
  dispatch: Dispatch<ActionType>;
};

export enum TweetType {
  Plain,
  WithImage,
  WithLink
}
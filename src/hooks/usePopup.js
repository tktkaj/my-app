import { useContext } from 'react';
import { PopupContext } from './PopupContext';

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('error!');
  }
  return context;
};
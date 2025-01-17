import { useContext } from 'react';
import { PopupContext } from './PopupContext';

export const usePopup = () => {
  const context = useContext(PopupContext);
  return context;
};
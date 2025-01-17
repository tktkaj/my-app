import React, { createContext, useState, useContext } from "react";
import Alert from "../../src/components/dialog/Alert";
import Confirm from "../../src/components/dialog/Confirm";
import FullPopUp from "../../src/components/dialog/FullPopUp";
import BottomSheet from "../../src/components/dialog/BottomSheet";
import CenterPopUp from "../../src/components/dialog/CenterPopUp";

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [popupStack, setPopupStack] = useState([]);

  const showPopup = (popupType, props) => {
    let PopupComponent;
    switch (popupType) {
      case "alert":
        PopupComponent = Alert;
        break;
      case "confirm":
        PopupComponent = Confirm;
        break;
      case "centerPopup":
        PopupComponent = CenterPopUp;
        break;
      case "bottomSheet":
        PopupComponent = BottomSheet;
        break;
      case "fullPopup":
        PopupComponent = FullPopUp;
        break;
      default:
        console.error("팝업타입 존재하지 않음!");
        return;
    }

    const popupId = Date.now(); // 고유 ID 생성

    const closePopup = () => {
      setPopupStack((prevStack) =>
        prevStack.filter((popup) => popup.id !== popupId)
      );
    };

    setPopupStack((prevStack) => [
      ...prevStack,
      {
        id: popupId,
        PopupComponent,
        props: {
          ...props,
          onClose: (callBack) => closePopup(callBack), // ID 전달
        },
      },
    ]);
  };

  return (
    <PopupContext.Provider value={{ showPopup }}>
      {children}
      {popupStack.map(({ id, PopupComponent, props }) => (
        <PopupComponent key={id} {...props} />
      ))}
    </PopupContext.Provider>
  );
};

export const usePopup = () => useContext(PopupContext);

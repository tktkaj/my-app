const closeDialog = () => {
  return "none";
};

const openAlert = (Component, btnText) => {
   return <Component btnText={btnText}></Component>;
};

export { closeDialog, openAlert };

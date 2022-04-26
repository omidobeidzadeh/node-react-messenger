import mainActions from "../Actions/mainActions";

const mainState = {
  isInit: true,
};

const main = (state = mainState, action) => {
  let newState = state;
  switch (action.type) {
    case mainActions.INIT_SUCCESS:
      newState = { ...mainState, isInit: !action.payload.success };
      break;
    case mainActions.INIT_FAILED:
      newState = { ...mainState, ...action.payload };
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};

export default main;

let store = [];
let callback = [];

const add = item => {
  store = [item, ...store];
};

const addMultiple = item => {
  store = [...item, ...store];
};

const checkoutStore = {
  add,
  addMultiple,
};
export default checkoutStore;

let store = [];
let callback = [];

const dispatch = item => {
  callback.forEach(it => it(item));
};

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

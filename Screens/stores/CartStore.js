let store = [];
let callbacks = [];

const dispatch = item => {
  callbacks.forEach(it => it(item));
};

const subscribe = callback => {
  callbacks.push(callback);

  return () => {
    callbacks = callbacks.filter(it => it != callback);
  };
};

const add = item => {
  store = [item, ...store];
  dispatch(item);
};

const clear = () => {
  store = [];
  dispatch();
};

const get = () => {
  return JSON.parse(JSON.stringify(store));
};

const remove = id => {
  store = store.filter(it => it.id != id);
};

const cartStore = {
  subscribe,
  add,
  get,
  clear,
  remove,
};

export default cartStore;

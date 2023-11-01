const domain = 'http://192.168.1.8:5091';

const getBooks = (callback = () => {}) => {
  fetch(`${domain}/api/Product/get-all`)
    .then(response => response.json())
    .then(json => {
      callback(json);
    })
    .catch(error => console.log(error));
};

const addBook = (data, callback = () => {}) => {
  fetch(`${domain}/api/Product/create`, {
    method: 'POST',
    body: data,
  })
    .then(response => callback())
    .catch(error => console.log(error));
};

const getCart = (callback = () => {}) => {
  fetch(`${domain}/api/Cart/get-all`)
    .then(response => response.json())
    .then(json => {
      callback(json);
    })
    .catch(error => console.log(error));
};

const addCart = (data, callback = () => {}) => {
  fetch(`${domain}/api/Cart/create`, {
    method: 'POST',
    headers: {
      Accept: 'application/json, application/xml, text/plain, text/html, *.*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => callback())
    .catch(error => console.log(error));
};

const deleteCart = (id, callback = () => {}) => {
  fetch(`${domain}/api/Cart/delete/${id}`, {
    method: 'DELETE',
  })
    .then(response => {
      console.log({response});
      callback();
    })
    .catch(error => console.log(error));
};

const fetchProfile = (id, callback = () => {}) => {
  var url = `${domain}/api/User/get-user-by-id/${id}?${new URLSearchParams({
    id,
  }).toString()}`;

  fetch(url, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(json => {
      callback(json);
    })
    .catch(error => console.log(error));
};

const login = (profile, callback) => {
  fetch(`${domain}/api/User/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json, application/xml, text/plain, text/html, *.*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile),
  })
    .then(response => response.json())
    .then(json => {
      callback(json);
    })
    .catch(error => console.log(error));
};

const register = (profile, callback) => {
  fetch(`${domain}/api/User/create`, {
    method: 'POST',
    headers: {
      Accept: 'application/json, application/xml, text/plain, text/html, *.*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile),
  })
    .then(response => response && response.json() && callback({}))
    .then(json => {
      callback(json);
    })
    .catch(error => console.log(error));
};

const resetPassword = (profile, callback) => {
  fetch(`${domain}/api/User/update`, {
    method: 'POST',
    headers: {
      Accept: 'application/json, application/xml, text/plain, text/html, *.*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile),
  })
    .then(response => response.json())
    .then(json => {
      callback(json);
    })
    .catch(error => console.log(error));
};

const clearCart = (id, callback) => {
  fetch(`${domain}/api/Cart/delete-all/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(json => callback(json))
    .catch(error => console.log(error));
};

const clearCartItem = (id, callback) => {
  fetch(`${domain}/api/Cart/delete/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(json => callback(json))
    .catch(error => console.log(error));
};

const addOrders = (data, callback) => {
  const promises = data.map(item => {
    const params = {
      cusId: 0,
      customerName: 'string',
      phoneNumber: 'string',
      ordersAddress: 'string',
      bookName: 'string',
      price: 0,
      discount: 'string',
      discountPrice: 0,
      finalPrice: 0,
      bookImage: 'string',
      ordersStatus: 'string',
      ...item,
    };
    fetch(`${domain}/api/Order/create`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
  });
  Promise.all(promises)
    .then(response => callback())
    .catch(error => console.log(error));
};

const getOrders = (callback = () => {}) => {
  fetch(`${domain}/api/Order/get-all`)
    .then(response => response.json())
    .then(json => {
      callback(json);
    })
    .catch(error => console.log(error));
};

const bookApis = {
  getBooks,
  addBook,
  getCart,
  addCart,
  deleteCart,
  fetchProfile,
  login,
  register,
  resetPassword,
  clearCart,
  clearCartItem,
  addOrders,
  getOrders,
};

export default bookApis;

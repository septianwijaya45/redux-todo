import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import TodoReducers from "./reducers/TodoReducers";

/*
State dan Props adalah dua fitur yang sangat penting dalam React dan sering dipakai. 
State adalah seperti memory, yang digunakan untuk menyimpan dari aktivitas atau eksekusi dari apk 
props adalah properti atau variabel yang berasal dari luar class atau class parent.
*/
const reducer = combineReducers({
  Todo: TodoReducers,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  // Fungsi dari create store:
  // 1. menyimpan state aplikasi
  // 2. mendapakan akses ke dalam state menggunakan   --> getState()
  // 3. perubahan menggunakan                         --> dispatch()
  // 4. mendapatkan listener                          --> subscribe(listener)
  // 5. Menangani listener yg belum return            --> subscribe(listener)
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

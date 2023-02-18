// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzupMsUE-yKSaF2KXyRHLmjzeCl0TSe9w",
  authDomain: "todo-list-2023-22f50.firebaseapp.com",
  databaseURL: "https://todo-list-2023-22f50-default-rtdb.firebaseio.com",
  projectId: "todo-list-2023-22f50",
  storageBucket: "todo-list-2023-22f50.appspot.com",
  messagingSenderId: "842503553536",
  appId: "1:842503553536:web:f2ab632dda0610f7518ee5"
};


const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth();
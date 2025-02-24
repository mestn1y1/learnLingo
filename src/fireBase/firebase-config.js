// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { config } from "./keysForFireBase";

const app = initializeApp(config);
export const db = getDatabase(app);
export const auth = getAuth(app);

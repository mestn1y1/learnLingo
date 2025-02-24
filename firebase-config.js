// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { config } from "./keysForFireBase";

const app = initializeApp(config);
const analytics = getAnalytics(app);

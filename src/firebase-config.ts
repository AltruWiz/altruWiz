import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAcM-zK0iYzfuoRFoiDzs7N5sAFU3CJxkc',
	authDomain: 'altruwiz-backup.firebaseapp.com',
	projectId: 'altruwiz-backup',
	storageBucket: 'altruwiz-backup.appspot.com',
	messagingSenderId: '991445541589',
	appId: '1:991445541589:web:dbba0d81e252b675a8b85c',
	measurementId: 'G-KG7DXCRVY8',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const firestore = getFirestore(app);

/*
REACT_APP_API_KEY=AIzaSyA03oMSzv8tqyOymF3Ocpa3lOrvfcQj4HY;
REACT_APP_AUTH_DOMAIN=altruwiz.firebaseapp.com;
REACT_APP_REACT_APP_PROJECT_ID=altruwiz;
REACT_APP_STORAGE_BUCKET=altruwiz.appspot.com;
REACT_APP_MESSAGING_SENDER_ID=24616873117;
REACT_APP_REACT_APP_APP_ID=1:24616873117:web:ed897dea3fe3dcb738f874;
REACT_APP_MEASUREMENT_ID=G-LJH38Y54GS;
*/

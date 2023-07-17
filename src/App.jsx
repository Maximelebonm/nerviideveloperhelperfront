import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BaseScreen } from './screens/baseScreen/BaseScreen';
import { HomeScreen } from './Screens/HomeScreen/HomeScreen';
import { ImportScreen } from './Screens/ImportScreen/ImportScreen';
import { SelectScreen } from './Screens/SelectScreen/SelectScreen';



// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyArLNe00g_4yYkwwXHmzBuJ6sjUrv3xjbE",
//   authDomain: "nerviidevelopperhelper.firebaseapp.com",
//   projectId: "nerviidevelopperhelper",
//   storageBucket: "nerviidevelopperhelper.appspot.com",
//   messagingSenderId: "84357878242",
//   appId: "1:84357878242:web:273c5acb064e6136cca9bb",
//   measurementId: "G-NDFDHPMZ72"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {

  return (
    <>
      <BrowserRouter>   
        <Routes>
          <Route path="/" element={< BaseScreen />}>
            <Route index element={< HomeScreen />} />
            <Route path="/search" element={< SelectScreen/>}/>
            <Route path="/library/:framework/:name" element={< ImportScreen />}/>
          </Route>
        </Routes>      
      </BrowserRouter>
    </>
  )
}

export default App

import React,{useEffect} from 'react';
import { useSelector,useDispatch  } from 'react-redux';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';


//import HomeScreen from './css/HomeScreen';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './components/firebase/firebase';
import Login from './components/login/login';

function App() {
  const user=useSelector(selectUser);
  const dispatch = useDispatch()
// useEffect is used for after enter the email and password , signIn purpose is used for this function.
  useEffect(() => {
    const unsubscribe =auth.onAuthStateChanged(user=>{
      if(user){
        dispatch(login({
          //uid:user.uid,
          //email:user.email
        }))
      } else{
        dispatch(logout)
      }
    }
    )
    return unsubscribe;
  }, [])
  return (
    <div className="App">
      {
        !user ?(<Login/>)://calling the function 
        (<HomeScreen/>)// calling the function
        
      }
    
    </div>
  );
}

export default App;
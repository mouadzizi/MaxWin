import React,{useState,useEffect} from 'react';

import AuthenticationStack from './src/navigation/AuthenticationStack';
import * as Updates from 'expo-updates';

export default function App() {
  const [isUpdating,setUpdating]=useState(false)
  useEffect(() => {

    checkUpdate()
    return () => {
      
    }
  }, [])

  const checkUpdate = async()=>{
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        setUpdating(true)
        await Updates.fetchUpdateAsync().then(()=>setUpdating(false));
        // ... notify user of update ...
        await Updates.reloadAsync();
      }
    } catch (e) {
      // handle or log error
    }
  }

  return (


       <AuthenticationStack />

  );
}



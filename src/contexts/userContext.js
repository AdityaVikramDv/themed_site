import React,{createContext, useState} from 'react';

export const UserContext = createContext();

const UserContextProvider =({children})=>{
const [user,setUser] = useState({
  username:'',
  isLoggedIn: false
});

const updateLoginStatus = (data)=>{
  setUser({
    ...user, isLoggedIn: !user.isLoggedIn, username: data.username
  });
}

return <UserContext.Provider value={{...user, updateLoginStatus }}>
{children}
</UserContext.Provider>
}

export default UserContextProvider;

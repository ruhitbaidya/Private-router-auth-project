import { createContext, useEffect, useState } from "react";
import PropType from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebaseinit/fitebase.init";
export const AuthContexts = createContext(null);
const AuthContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const LogOut = ()=>{
        setLoading(true)
        signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (current)=>{
            
            setUser(current)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])


    const infos = {user,loading, createUser, signInUser,LogOut}
  return (
    <AuthContexts.Provider value={infos}>
        {children}
    </AuthContexts.Provider>
  )
}

export default AuthContext

AuthContext.propTypes = {
    children : PropType.node
}
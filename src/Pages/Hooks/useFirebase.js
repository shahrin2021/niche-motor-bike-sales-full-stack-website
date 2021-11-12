import { useEffect, useState } from "react"
import firebaseInitialize from "../Firebase/Firebase.initialize"
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,signOut,onAuthStateChanged ,updateProfile  } from "firebase/auth";

firebaseInitialize()

const useFirebase= ()=>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error , setError]=  useState('')

    const auth = getAuth();

    const registerUser = (email, password,name,history)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const newUser = {email,displayName:name}
            setUser(newUser)

            updateProfile(auth,{
                displayName:name
            }).then(()=>{
    
            }).catch((error)=>{
                setError(error.message)
            })


            history.push('/home')
            
        }).catch((error)=>{
            setError(error.message)
        })
        .finally(()=>{
            setIsLoading(false)
        })
        
       

    };

    useEffect(()=>{
        const unsubscrib= onAuthStateChanged (auth, (user)=>{
            if(user){
                setUser(user)
            }else{
                setUser({})
            }

            setIsLoading(false)
        })
        return ()=> unsubscrib;

   
       
    },[])

    const handleLoginGmailPassword= (email,password,location,history)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const destination = location?.state?.from || '/home';
            history.replace(destination)
            setUser(result.user)
           setError('')
        }).catch((error)=>{
            setError(error.message)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }


    

    const handleSingOut =()=>{
        signOut(auth)
        .then(()=>{

        }).catch((error)=>{
            setError(error.message)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    };


    return {user , error , isLoading ,handleSingOut ,handleLoginGmailPassword,registerUser}

}

export default useFirebase;
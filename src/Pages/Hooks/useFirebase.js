import { useEffect, useState } from "react"
import firebaseInitialize from "../Firebase/Firebase.initialize"
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,signOut,onAuthStateChanged ,updateProfile,signInWithPopup  } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const provider= new GoogleAuthProvider()


firebaseInitialize()

const useFirebase= ()=>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error , setError]=  useState('');
    const [admin, setAdmin]=useState(false)
    const auth = getAuth();
   

   
 
    const registerUser = (email, password,name,history)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const newUser = { email, displayName: name };
            setUser(newUser);
            console.log(newUser)
            saveUser(email, name)
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

    
    const singInWithGoogle=(location, history)=>{
        signInWithPopup(auth, provider)
       .then(result=>{
           setUser(result.user)
           saveUser(user.eamil, user.displayName,'PUT')
           
           const destination= location?.state?.from || '/home';
           history.replace(destination)
           setError('')
       }).catch((error)=>{
           setError(error.message)
       }).finally(()=>{
           setIsLoading(false)
       })
    };

    useEffect(()=>{
        const unsubscrib= onAuthStateChanged (auth, (user)=>{
            if(user){
              
            }else{
                setUser({})
            }

            setIsLoading(false)
        })
        return ()=> unsubscrib;

   
       
    },[]);


    useEffect(()=>{
        fetch(`https://protected-island-07289.herokuapp.com/users/${user.email}`)
        .then(res=> res.json())
        .then(data=>{
            setAdmin(data.admin)
        })
    },[user.email]);

  

    const handleLoginGmailPassword= (email,password,location,history)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const destination = location?.state?.from || '/home';
            history.replace(destination)
            setUser(result.user)
            console.log(result.user)
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
            console.log(error)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    };

    

   

    const saveUser= (email , displayName  )=>{
        const user= {email, displayName};
        console.log(user)
        fetch('https://protected-island-07289.herokuapp.com/users',{
            method:'POST', 
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }


    


   

    return {user,singInWithGoogle,error ,admin, isLoading, handleSingOut ,handleLoginGmailPassword,registerUser}

}

export default useFirebase;
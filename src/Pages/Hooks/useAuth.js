import { useContext } from "react"
import { AuthContext } from "../Cnotext/AuthProvider";


const useAuth=()=>{
  return useContext(AuthContext)
}

export default useAuth;
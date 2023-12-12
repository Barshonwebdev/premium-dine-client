import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user } = useAuth();

  const [isAdmin,setIsAdmin]=useState(false);
  useEffect(()=>{
    fetch(`http://localhost:5000/users/admin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data.admin)
      });
  },[])


  
return [isAdmin];
 
};

export default useAdmin;
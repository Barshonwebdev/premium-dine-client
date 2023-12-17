import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user } = useAuth();

  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch(
      `https://premium-dine-server-production.up.railway.app/users/admin/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data.admin);
      });
  }, []);

  return [isAdmin];
};

export default useAdmin;

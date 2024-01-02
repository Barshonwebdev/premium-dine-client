import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useCart = () => {
  const { user } = useAuth();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://premium-dine.onrender.com/cart?email=${user?.email}`
      );
      return res.json();
    },
  });

  return [cart, refetch];
};

export default useCart;

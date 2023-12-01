import { useEffect, useState } from "react";

const useMenu=()=>{
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      fetch("menu.json")
        .then((res) => res.json())
        .then((data) => {
          const popularItem = data.filter(
            (item) => item.category === "popular"
          );
          console.log(popularItem);
          setMenu(popularItem);
          setLoading(false);
        });
    }, []);
    return [menu,loading]
}

export default useMenu;
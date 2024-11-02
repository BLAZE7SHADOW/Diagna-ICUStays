import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useShowSider = () => {
  const location = useLocation();
  const [showSider, setShowSider] = useState(location.pathname !== "/");

  useEffect(() => {
    const shouldShowSider = location.pathname !== "/";
    setShowSider(shouldShowSider);
  }, [location.pathname]); // Only depend on pathname

  return showSider;
};

export default useShowSider;

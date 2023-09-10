import { useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const useAuth = () => {
    // call custom hook useLocalStorage for getting localStorage value of user
    const [getLocalStorage] = useLocalStorage("user");

    // use useState for user logged in or logged out
    const [isLoggedin, setIsLoggedin] = useState(getLocalStorage?.token?.length === 100 ? true : false);

    return [isLoggedin, setIsLoggedin];
}

export default useAuth;
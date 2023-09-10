import { useEffect, useState } from "react";

const useLocalStorage = (key) => {
    // get localStorage value
    const localStorageValue = localStorage.getItem(key);

    // initial valur of localStorage
    const [getLocalStorage, setLocalStorageValue] = useState(localStorageValue ? JSON.parse(localStorageValue) : null);

    useEffect(() => {
        if (localStorageValue) {
            setLocalStorageValue(JSON.parse(localStorageValue));
        } else {
            setLocalStorageValue(null)
        }
    }, [localStorageValue])

    // set value in localStorage
    const setLocalStorage = (value) => {
        localStorage.setItem(key, JSON.stringify(value))
    }

    // clear value in localStorage
    const clearLocalStorage = () => {
        localStorage.clear();
    }
    return [getLocalStorage, setLocalStorage, clearLocalStorage];
}

export default useLocalStorage;
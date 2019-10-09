import { useState, useEffect } from "react";
import {useLocalStorage} from "./useLocalStorage";

export const useDarkMode = () => {

    const [value, setValue] = useLocalStorage('darkmode', false);

    useEffect( () => {

        let body_dark_mode = document.querySelector('body');

        if(value === true){
            body_dark_mode.classList.add('dark-mode');
        }else{
            body_dark_mode.classList.remove('dark-mode');
        }
    }, [value])


    return [value, setValue]
}
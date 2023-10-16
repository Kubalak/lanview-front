"use client";
import { useEffect } from "react";

export default function UseMode(){

    useEffect(() => {
        function checkTheme() {
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
        }
        function setTheme(theme){
          localStorage.theme = theme;
          checkTheme();
        }
        checkTheme();
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => e.matches && setTheme('dark'));
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => e.matches && setTheme('light'));
        
    }, [])
    return(<></>)
}
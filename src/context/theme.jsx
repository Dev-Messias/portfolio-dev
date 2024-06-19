import { useState, useEffect, createContext } from 'react';
import { MdDehaze, MdOutlineDarkMode, MdOutlineLightMode, MdOutlineDesktopWindows } from "react-icons/md";

export const AuthContext = createContext({});

function  ThemeProvider({ children }) {

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
    );
    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const options = [
        {
          icon: "MdOutlineLightMode",
          text: 'light',
        },
        {
          icon: "MdOutlineDarkMode",
          text: 'dark',
        },
        {
          icon: "MdOutlineDesktopWindows",
          text: 'system',
        }
      ];

    function onWindowMatch() {
        if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)) {
            element.classList.add("dark")
        } else {
            element.classList.remove("dark")
        }
    }

    onWindowMatch();

    useEffect(() => {

        if (theme === 'dark') {
            element.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else if (theme === 'light') {
            element.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        } else {
            localStorage.removeItem('theme');
            onWindowMatch();
            return;
        }
    }, [theme])

    darkQuery.addEventListener("change", (e) => {
        if (!("theme" in localStorage)) {

            if (e.matches) {
                element.classList.add("dark");
            } else {
                element.classList.remove("dark");
            }

        }
    });

    return (
        <AuthContext.Provider
            value={{
                theme, 
                setTheme,
                options
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default ThemeProvider;
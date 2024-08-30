import React, { createContext, useEffect, useState } from 'react'

export let MyContext = createContext();

const GlobalContext = ({ children }) => {
    let [fetchedData, setfetchedData] = useState([])
    let [DarkMode, setDarkMode] = useState(false);

    let githubData = async () => {
        try {
            let response = await fetch("https://api.github.com/users");
            let data = await response.json();
            setfetchedData(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        githubData();
    }, [])

    useEffect(() => {
        if (DarkMode) {
            document.body.style.background = "black"
        } else {
            document.body.style.background = "#efefef"
        }
    }, [DarkMode])
    return (
        <MyContext.Provider value={{ fetchedData, setfetchedData, githubData, DarkMode, setDarkMode }}>{children}</MyContext.Provider>
    )
}

export default GlobalContext
import React, {useEffect, useState} from "react";
// import NavMenuData from "./data/NavMenu.json";

const NavMenu = () => {

    const [NavMenuData, setNavMenuData] = useState([]);

    const loadMenuLinksData = async() => {
        // call the production api
        const response = await fetch('https://dx5sle3752.execute-api.us-east-2.amazonaws.com/Production/navMenuLinks');
        const jsonData = await response.json();
        console.log(jsonData);
        // Update the state
        setNavMenuData(jsonData);
    }

    useEffect(() => {
        // Load Menu links data
        loadMenuLinksData();
    }, [])


    return (
        <nav>
            {
                NavMenuData.map((navMenu) => <span><a href={`/${navMenu.name}/`}>{navMenu.name}</a> | </span> )
            }
        </nav>
    );
}

export default NavMenu;
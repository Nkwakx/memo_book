import React from "react";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
// import Games from "./Games";
// import Memo from "./Memo";


export default function Home() {
    return (

        <div className="App">
            {<NavBar />}
            {<Slider />}

        </div>
    );
}

import Home from "../pages/Home";
import Memo from "../pages/Memo";
import Games from "../pages/Games";

export const RoutesListed = [
    { name: "Home", path: "/", comp: <Home /> },
    { name: "Memo", path: "memo", comp: <Memo /> },
    { name: "Games", path: "games", comp: <Games /> },
]

import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Funmation from "./components/Fun/Funmation";
import Greetings from "./components/Greetings/Greetings";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import WatchList from "./components/WatchList/WatchList";

function App() {
    const location = useLocation();
    const pathname = location.pathname.substring(1);
    const [greet, setGreet] = useState(true);
    const [text, setText] = useState(
        pathname === "" ? ["Peace", "be", "upon", "You"] : [`• ${pathname}`]
    );

    const resetGreet = () => {
        setGreet(false);
    };

    const showGreetings = (newtext) => {
        setText([newtext]);
        setGreet(true);
    };

    return (
        <React.Fragment>
            {greet && <Greetings text={text} resetGreet={resetGreet} />}
            <Navbar showGreetings={showGreetings} />
            <main className="font-inter">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/fun" element={<Funmation />} />
                    <Route path="/wlist" element={<WatchList />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </React.Fragment>
    );
}

export default App;

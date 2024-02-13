import React, { useState } from "react";
import Navbar from "./HomeComponents/Navbar";
import UserGreeting from "./HomeComponents/UserGreeting";
import Footer from "./HomeComponents/Footer";
import ViewPasswordList from "./ViewPasswordList";
import SavePassword from "./SavePassword";

const Home = () => {

    const [displayComponent, setDisplayComponent] = useState(null);

    const handleViewClick = () => {
        setDisplayComponent('view');
    };

    const handleAddClick = () => {
        setDisplayComponent('add');
    };



    return (
        <div>
            <div >
                <Navbar />
            </div>
            <div className="h-screen bg-gradient-to-r from-blue-400  via-pink-400 to-orange-200 flex flex-col items-center justify-center">
                {displayComponent === 'view' && <ViewPasswordList />}
                {displayComponent === 'add' && <SavePassword />}
                {!displayComponent && (

                    <UserGreeting handleViewClick={handleViewClick}
                        handleAddClick={handleAddClick} />
                )}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
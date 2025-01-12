import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
    const [active, setActive] = useState(false);

    const toggle = () => setActive(!active);
    const close = () => setActive(false);

    // mounting
    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= 500) {
                close();
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    useEffect(() => {
        if(window.innerWidth <= 500) {
            close();
        }
    }, []);

    return (
        <nav className={`navbar ${active ? "active" : ""}`}>
            <div>
                <img src="./img/logo.svg" alt="logo" />
            </div>
        </nav>
    );
}

export default Navbar;


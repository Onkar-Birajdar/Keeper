import React from "react";

function Footer() {

    const currentYear = new Date().getFullYear();
    return (
        <div className="footer">
            <p className="footer-text">@copyright {currentYear} Made with Love 🚀</p>
        </div>
    )
}
export default Footer;

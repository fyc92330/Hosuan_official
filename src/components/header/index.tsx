import React from "react";
import LinkButton from "../linkButton";

const Header = () => {
    return (
        <header>
            <div className="header-wrapper">
                <h1><span>H</span><span>O</span><span>S</span><span>U</span><span>A</span><span>N</span></h1>
                <div className="header-right">
                    <nav id="menu" className="header-menu">
                        <LinkButton name="首頁" url="home" />
                        <LinkButton name="據點" url="location" />
                        <LinkButton name="如何租借" url="rent" />
                        <LinkButton name="合作商家" url="partner" />
                        <LinkButton name="聯絡我們" url="contactUs" />
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
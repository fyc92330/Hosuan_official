import React, {useState} from "react";

interface LinkButtonProp {
    name: string,
    url: string
}

export default function LinkButton({name, url}: LinkButtonProp) {
    const [hoverState, setHoverState] = useState(false);
    const [clickState, setClickState] = useState(false);

    const handleMouseOver = () => {
        setHoverState(true);
    }

    const handleMouseOut = () => {
        setHoverState(false);
    }

    const handleClick = () => {
        setClickState(!clickState);
    }

    return (
        <a href={url}
           className="link-btn"
           onMouseOver={handleMouseOver}
           onMouseOut={handleMouseOut}
           onClick={handleClick}
        ><span>{name}</span></a>
    );
}

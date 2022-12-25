import { useState } from "react";

export { default as Item } from "./Item";
export { default as IconPlay } from "public/images/btn_play.svg";
export { default as IconLock } from "public/images/lock_icon.svg";

export default function Accordion({ children }) {
    const [Active, setActive] = useState(() => null);

    const toggle = (id) => {
        setActive((prev) => (prev === id ? null : id));
    };

    return <div className="accordion">{children(Active, toggle)}</div>;
}

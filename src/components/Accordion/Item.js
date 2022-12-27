import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import ArrowDown from "public/images/arrow_down.svg";

export default function Item({ name, id, child, active, toggle, children }) {
    const [Height, setHeight] = useState(0);

    function calcHeight(e) {
        console.log(e.offsetHeight);

        setHeight(e.offsetHeight);
    }

    return (
        <div className="bg-white border border-gray-400 overflow-hidden">
            <div className="meta pl-4 py-2 relative flex justify-between items-center ">
                <span className="text-gray-600">{name}</span>
                <button
                    className="pr-5 focus:outline-none "
                    onClick={() => {
                        toggle(id);
                    }}
                >
                    {child && child.length > 0 && (
                        <ArrowDown
                            className={`transition-all transform text-sm
                            ${active === id ? "rotate-180" : "rotate-0"}`}
                        ></ArrowDown>
                    )}
                </button>
            </div>
            <div
                className={`transition-all duration-500`}
                style={{
                    height: active == id ? Height : 0,
                }}
            >
                <CSSTransition
                    in={active === id}
                    timeout={500}
                    onEnter={calcHeight}
                    classNames="accordion-item"
                >
                    <div className="accordion-item bg-gray-100">{children}</div>
                </CSSTransition>
            </div>
        </div>
    );
}

import propTypes from "prop-types";
import React from "react";
import StarIcon from "public/images/star_24px.svg";

export default function Star({ className, value, height, width }) {
    const star = [];
    let leftPos = 0;

    for (let index = 0; index <= 5, index < value; index++) {
        leftPos = leftPos + width;
        star.push(
            <div
                className="star"
                key={`star-${index}`}
                style={{
                    left: index * width,
                    height: height,
                    width: width,
                }}
            ></div>
        );
    }

    const starPlaceHolder = [];
    for (let index = 0; index <= 5; index++) {
        starPlaceHolder.push(
            <div
                className="star placeholder"
                key={`starPlaceHolder-${index}`}
                style={{
                    left: index * width,
                    height: height,
                    width: width,
                }}
            ></div>
        );
    }

    return (
        <>
            <div className={`stars ${className}`} style={{ height: height }}>
                {starPlaceHolder}
                {star}
            </div>
            <StarIcon />
        </>
    );
}

Star.propTypes = {
    className: propTypes.string,
    value: propTypes.number,
    height: propTypes.number,
    width: propTypes.number,
};

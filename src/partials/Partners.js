import React from "react";
import AmazonLogo from "../../public/images/amazon-logo.svg";
import MicrostLogo from "../../public/images/microsoft-logo.svg";
import TeslaLogo from "../../public/images/TESLA.svg";
import GoogleLogo from "../../public/images/google-logo.svg";
import FaceboookLogo from "../../public/images/facebook-logo.svg";

function Partners() {
    return (
        <div className="flex gap-12 h-14 justify-center items-center">
            <img src="/images/amazon-logo.svg" />
            <img src="/images/microsoft-logo.svg" />
            <img src="/images/TESLA.svg" />
            <img src="/images/google-logo.svg" />
            <img src="/images/facebook-logo.svg" />
            {/* <AmazonLogo />
            <MicrostLogo />
            <TeslaLogo />
            <GoogleLogo />
            <FaceboookLogo /> */}
        </div>
    );
}

export default Partners;

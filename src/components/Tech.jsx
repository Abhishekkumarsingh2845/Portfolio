import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import reactNativeLogo from "../assets/ReactNative.png";
import jsLogo from "../assets/jsIconGreen.svg";
import mongodbLogo from "../assets/MongoDB_Logomark_ForestGreen.svg";
import firebaseLogo from "../assets/Logomark_Full Color.svg";
import githubLogo from "../assets/github.png";
import newLogo from "../assets/idOVf4IBIE_logos.jpeg";
import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css-3.png";
import androidStudioLogo from "../assets/icons8-android-studio.svg";
import xcodeLogo from "../assets/xcode-seeklogo.svg";
import devopsLogo from "../assets/devops.png";
import latestLogo from "../assets/ids8Gcp_8Q_1770630968651.png";
import appsFlyerLogo from "../assets/AppsFlyer_idZaZLy7nj_8.svg";

const Tech = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-20">
            <div className="flex justify-center items-center bg-white rounded-3xl p-2 w-28 h-28 shadow-card">
                <img
                    src={reactNativeLogo}
                    alt="React Native logo"
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="flex justify-center items-center bg-white rounded-3xl p-2 w-28 h-28 shadow-card">
                <img
                    src={jsLogo}
                    alt="JavaScript logo"
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="flex justify-center items-center bg-white rounded-3xl p-2 w-28 h-28 shadow-card">
                <img
                    src={mongodbLogo}
                    alt="MongoDB logo"
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="flex justify-center items-center bg-white rounded-3xl p-2 w-28 h-28 shadow-card">
                <img
                    src={firebaseLogo}
                    alt="Firebase logo"
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="flex justify-center items-center bg-black rounded-3xl p-2 w-28 h-28 shadow-card">
                <img
                    src={githubLogo}
                    alt="GitHub logo"
                    className="w-full h-full object-contain brightness-0 invert"
                />
            </div>
            <div className="flex justify-center items-center bg-white rounded-3xl p-2 w-28 h-28 shadow-card overflow-hidden">
                <img
                    src={newLogo}
                    alt="Logo"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex justify-center items-center bg-white rounded-3xl p-2 w-28 h-28 shadow-card">
                <img
                    src={htmlLogo}
                    alt="HTML5 logo"
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="flex justify-center items-center bg-white rounded-3xl p-2 w-28 h-28 shadow-card">
                <img
                    src={cssLogo}
                    alt="CSS3 logo"
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="flex justify-center items-center bg-white rounded-3xl p-2 w-28 h-28 shadow-card">
                <img
                    src={androidStudioLogo}
                    alt="Android Studio logo"
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="flex justify-center items-center bg-white rounded-3xl p-2 w-28 h-28 shadow-card">
                <img
                    src={xcodeLogo}
                    alt="Xcode logo"
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="flex justify-center items-center bg-white rounded-3xl p-2 w-28 h-28 shadow-card">
                <img
                    src={devopsLogo}
                    alt="DevOps logo"
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="flex justify-center items-center bg-white rounded-3xl p-2 w-28 h-28 shadow-card overflow-hidden">
                <img
                    src={latestLogo}
                    alt="Latest logo"
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="flex justify-center items-center bg-white rounded-3xl p-2 w-28 h-28 shadow-card">
                <img
                    src={appsFlyerLogo}
                    alt="AppsFlyer logo"
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    );
};

// not wrapped with id because Tech is usually part of another section or standalone but without hash link in some templates
// But let's wrap it to have consistent spacing
export default SectionWrapper(Tech, "");

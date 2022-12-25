import React, { useState } from "react";
function Hero() {
    const [email, setEmail] = useState("");

    const url = process.env.APP_MEMBERPAGE_URL ?? "http://localhost:3500";
    function onSubmit(e) {
        e.preventDefault();
        window.open(`${url}/register?email=${email}`);
    }
    return (
        <section className="flex justify-between  mt-32 ">
            <div className="w-6/12">
                <h2 className="text-4xl w-3/5 text-white font-sans leading-12 ">
                    <span className="text-teal-500 font-semibold">
                        The New{" "}
                    </span>{" "}
                    Way to Achieve Good
                    <span className="text-teal-500 font-semibold"> Skills</span>
                </h2>
                <p className="w-1/2 font-light text-white leading-relaxed mt-6">
                    We provide tons of pathskill that you can choose and focus
                    on{" "}
                </p>
                <form
                    className="email-input mt-12 w-4/5 flex"
                    onSubmit={onSubmit}
                >
                    <div className="w-7/10 px-6 pt-3 bg-white">
                        <input
                            type="text"
                            name="email"
                            id="hero-email-input "
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            className="bg-transparent outline-none"
                        />
                    </div>
                    <div className="w-3/10 sbmit-btn px-6 py-3 bg-orange">
                        <button
                            type="submit"
                            className="p-0 m-0 text-white font-medium"
                        >
                            Daftar Now
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-4/12 flex justify-end pr-14">
                <div className="relative w-[369px] h-[440px] ">
                    <div className="absolute  border border-biru-2 w-[324px] h-[374px] right-0 -mt-16 -mr-7"></div>
                    <div className="absolute w-[390px] h-full mr-8 -mt-3 right-0">
                        <img
                            src={`/images/people-hero.png`}
                            width={390}
                            height={440}
                            alt="hero ilustrasi"
                        />
                    </div>
                    <div className="absolute px-6 py-3 bg-white right-full mt-16 -mr-24  w-[300px]">
                        <p>
                            Metode belajar yang santai seperti nonton drakor di
                            Netflix
                        </p>
                        <p className="text-gray-500 mt-3 text-sm">
                            Alyssa, Apps Developer
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;

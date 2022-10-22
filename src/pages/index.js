import Circle from "public/images/circle-hero-accent-1.svg";
import Hero from "src/partials/Hero";
import Navbar from "src/partials/Navbar";

function Home() {
    return (
        <>
            <main>
                {/* section header dan hero */}
                <section className="header-clipping pt-11">
                    <Circle className="absolute bottom-0 left-0 w-1/6 text-biru-2" />
                    <div className="sunshine  top-0 left-1/2"></div>
                    {/* navbar container */}
                    <div className="container mx-auto">
                        <Navbar />
                        <Hero />
                    </div>
                </section>
            </main>
        </>
    );
}
export default Home;

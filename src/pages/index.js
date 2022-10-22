import Circle from "public/images/circle-hero-accent-1.svg";
import Hero from "src/partials/Hero";
import Navbar from "src/partials/Navbar";
import NewCourseList from "src/partials/NewCourseList";
import Partners from "src/partials/Partners";
import instance from "../config/axios";

function Home({ data }) {
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
                <section className="container mx-auto mt-36">
                    <Partners />
                </section>
                <section className="container mx-auto mt-24">
                    <NewCourseList courses={data} />
                </section>
            </main>
        </>
    );
}
Home.getInitialProps = async () => {
    try {
        const result = await instance.get("/courses").then((res) => res.data);
        return { data: result.data };
    } catch (error) {
        console.log(error);
        return error;
    }
};

export default Home;

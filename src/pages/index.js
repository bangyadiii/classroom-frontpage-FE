import Circle from "public/images/circle-hero-accent-1.svg";
import coursesRequest from "src/constants/courses.request";
import Category from "src/partials/Category";
import Footer from "src/partials/Footer";
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
                    <Circle className="absolute bottom-0 left-0 w-1/6 text-biru-2 stroke-biru-2" />
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
                <section className="container mx-auto mt-24 mb-24">
                    <Category />
                </section>
                <section className="mt-32 bg-biru-3 py-12">
                    <div className="container mx-auto">
                        <Footer />
                    </div>
                </section>
            </main>
        </>
    );
}
export async function getServerSideProps(props) {
    const { res } = props;

    res.setHeader(
        "Cache-Control",
        "public, x-maxage=10, stale-while-reavlaidate=59"
    );

    try {
        const result = await coursesRequest.all({ limit: 4 });
        console.log(result);
        return {
            props: {
                data: result.data,
            },
        };
    } catch (error) {
        console.log(error);
        return error;
    }
}

export default Home;

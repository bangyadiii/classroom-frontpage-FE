import YouTube from "react-youtube";
import Navbar from "src/partials/Navbar";
import StudentIcon from "public/images/student-icon.svg";
import VideoIcon from "public/images/video-icon.svg";
import CertificateIcon from "public/images/sertificate.svg";
import StatsCourse from "src/components/StatsCourse";
import ReactHtmlParser from "react-html-parser";
import coursesRequest from "src/constants/courses.request";
import { CSSTransition } from "react-transition-group";
import Footer from "src/partials/Footer";
import { useEffect, useRef, useState } from "react";
import formatThousand from "src/helper/formatThousand";
import CoursePhoto from "src/components/CoursePhoto";
import RenderPreviews from "src/partials/Details/RenderPreviews";
import Review from "src/components/Review";

function DetailCourse({ course }) {
    const footer = useRef(null);
    const [isSticky, setIsSticky] = useState(true);
    const stickyOffsetTop = footer?.current?.getBoundingClientRect().top;

    useEffect(() => {
        console.log(course);
        const stickyToggler = () => {
            console.log(
                stickyOffsetTop,
                window.pageYOffset,
                window.innerHeight,
                stickyOffsetTop >= window.pageYOffset + window.innerHeight
            );

            setIsSticky(
                stickyOffsetTop >= window.pageYOffset + window.innerHeight
            );
            console.log(isSticky);
        };

        window.addEventListener("scroll", stickyToggler);

        return () => {
            window.removeEventListener("scroll", stickyToggler);
        };
    });

    return (
        <main>
            <section className="header_course_detail h-[660px] w-full relative overflow-hidden">
                {course?.chapters?.[0]?.lessons?.[0].video ? (
                    <div className="video-wrapper absolute inset-0 z-0 w-full pb-[56.25%] h-full ">
                        <YouTube
                            videoId={course?.chapters?.[0]?.lessons?.[0].video}
                            id={course?.chapters?.[0]?.lessons?.[0].video}
                            opts={{
                                playerVars: {
                                    loop: 1,
                                    mute: 1,
                                    autoplay: 1,
                                    controls: 0,
                                    showInfo: 0,
                                },
                            }}
                            onEnd={(e) => {
                                e.target.playVideo();
                            }}
                        />
                    </div>
                ) : (
                    <div className="video-wrapper absolute inset-0 z-0 w-full pb-[56.25%] h-full ">
                        <img src={course?.thumbnail} alt={course?.name} />
                    </div>
                )}
                <div className="bg-black opacity-75 absolute inset-0 "></div>
                <div className="container mx-auto pt-11 h-full relative ">
                    <Navbar />
                    <div className="flex flex-col text-center items-center w-full justify-center h-[calc(100%-7.4rem)]">
                        <h3 className="text-2xl text-white font-sans mb-3">
                            Kelas Online:
                        </h3>
                        <h1 className="text-teal-500 text-6xl font-semibold">
                            {course?.name}
                        </h1>
                    </div>
                </div>
            </section>
            {/* about course */}
            <section className="container mx-auto z-10 px-10">
                <div>
                    <section className="flex justify-between -mt-14 z-10">
                        {/* Total Student */}
                        <StatsCourse
                            data={{
                                icon: StudentIcon,
                                name: "Student",
                                data: course?.total_student,
                            }}
                        />

                        {/* Total Vidoe */}
                        <StatsCourse
                            data={{
                                icon: VideoIcon,
                                name: "Video",
                                data: course?.total_lessons,
                            }}
                        />

                        {/* Sertifikat  */}

                        <StatsCourse
                            data={{
                                icon: CertificateIcon,
                                name: "Certificate",
                                data:
                                    course?.certificate == 1
                                        ? "ADA"
                                        : "TIDAK ADA",
                            }}
                        />
                    </section>

                    <section className="mt-14 ">
                        <h2 className="text-2xl font-medium my-5">
                            About{" "}
                            <span className="text-teal-500  leading-relaxed">
                                Course
                            </span>
                        </h2>
                        <div className="w-full sm:w-8/12 text-lg ">
                            {ReactHtmlParser(course?.description)}
                        </div>
                    </section>
                </div>
            </section>

            {/* course photo */}
            <section className="container mx-auto mt-14 px-10">
                <h2 className="text-2xl font-medium my-5 leading-relaxed">
                    Course <span className="text-teal-500 ">Photos</span>
                </h2>
                <div className="flex items-center -mx-4 mt-5">
                    {course?.images?.length > 0 ? (
                        course?.images.map((photo, index) => {
                            <CoursePhoto key={index} data={photo.image} />;
                        })
                    ) : (
                        <div className="w-full text-center py-12">
                            Item not found
                        </div>
                    )}
                </div>
            </section>

            {/* lesson list */}
            <section className="container mx-auto px-10 mt-10">
                <h2 className="text-2xl font-medium my-5 leading-relaxed">
                    You Will <span className="text-teal-500">Learn</span>
                </h2>
                <div className="w-full sm:w-8/12 ">
                    {course?.chapters?.length > 0 ? (
                        <RenderPreviews
                            previews={course?.chapters}
                        ></RenderPreviews>
                    ) : (
                        <div className="w-full text-center py-12">
                            No Item Found
                        </div>
                    )}
                </div>
            </section>

            {/* our instructor */}
            <section className="container mx-auto px-10 mt-10">
                <h2 className="text-2xl font-medium my-5 leading-relaxed">
                    Our <span className="text-teal-500">Instructor</span>
                </h2>
                <div className="w-full sm:w-8/12 flex">
                    {course?.mentor?.profile ? (
                        <img
                            src={course?.mentor?.profile}
                            alt={course?.mentor?.name}
                            height={80}
                            width={80}
                            className={`rounded-full bg-gray-400 flex justify-center items-center text-gray-200 font-mono`}
                        />
                    ) : (
                        <img
                            src={`public/images/man(1).png`}
                            alt={course?.mentor?.name}
                            height={80}
                            width={80}
                            className={`rounded-full bg-gray-400 flex justify-center items-center text-gray-200 font-mono`}
                        />
                    )}
                    <div className="ml-6 flex flex-col justify-evenly">
                        <h4 className="font-semibold">
                            {course?.mentor?.name}
                        </h4>
                        <p className="text-sm text-gray-400 font-light">
                            {course?.mentor?.profession}
                        </p>
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-10 mt-10">
                <div className="w-1/2">
                    <h2 className="text-2xl font-medium my-5 leading-relaxed">
                        Happy <span className="text-teal-500">Student</span>
                    </h2>
                    {course?.reviews.length > 0 ? (
                        course?.reviews.map((review, index) => {
                            return <Review key={index} />;
                        })
                    ) : (
                        <div>No Reviews Found</div>
                    )}
                </div>
            </section>
            {/* footer */}
            <section className="mt-32 bg-biru-3 py-12">
                <div className="container mx-auto" ref={footer}>
                    <Footer />
                </div>
            </section>
        </main>
    );
}
export async function getServerSideProps(props) {
    const { id } = props.query;
    const { res } = props;

    res.setHeader(
        "Cache-Control",
        "public, x-maxage=10, stale-while-revalidate=59"
    );

    try {
        const result = await coursesRequest.show({ id });
        console.log(result);
        return {
            props: {
                course: result,
            },
        };
    } catch (error) {
        console.log(error);
        return error;
    }
}

export default DetailCourse;

import Navbar from "src/partials/Navbar";
import StudentIcon from "public/images/student-icon.svg";
import VideoIcon from "public/images/video-icon.svg";
import CertificateIcon from "public/images/sertificate.svg";
import StatsCourse from "src/components/StatsCourse";

function DetailCourse({ course }) {
    const data = [
        {
            icon: StudentIcon,
            name: "Student",
            data: 1912,
        },
        {
            icon: VideoIcon,
            name: "Video",
            data: 92,
        },
        {
            icon: CertificateIcon,
            name: "Certificate",
            data: "Tersedia",
        },
    ];
    return (
        <main>
            <section className="header_course_detail h-[660px]">
                <div className="container mx-auto pt-11 h-full relative">
                    <Navbar />
                    <div className="flex flex-col text-center items-center w-full justify-center h-[calc(100%-7.4rem)]">
                        <h3 className="text-2xl text-white font-sans">
                            Kelas Online:
                        </h3>
                        <h1 className="text-teal-500 text-6xl font-semibold">
                            Start Vlogging 101
                        </h1>
                    </div>
                </div>
            </section>
            {/* about course */}
            <section className="container mx-auto">
                <div className="px-10">
                    <section className="flex justify-between -mt-14">
                        {data.map((item, key) => {
                            return <StatsCourse data={item} key={key} />;
                        })}
                    </section>

                    <section className="mt-14">
                        <h2 className="text-2xl font-medium my-5">
                            About <span className="text-teal-500 ">Course</span>
                        </h2>
                        <div className="w-full sm:w-8/12 text-lg ">
                            <p>
                                MERN Stack adalah bagian dari Full-Stack Web
                                Developer yang difokuskan kepada JavaScript
                                (Full-Stack JavaScript Developer). M untuk
                                MongoDB, E untuk ExpressJS, R untuk ReactJS, dan
                                N untuk NodeJS. Kalian akan mempelajari semua
                                hal tersebut pada kelas ini. Tapi bukan hanya
                                sekedar ngoding aja namun kalian akan mulai dari
                                bagian UI dan UX sehingga paham betul bagaimana
                                caranya membangun suatu website yang memiliki
                                better experience.
                            </p>
                            <br />
                            <p>
                                Setelah proses Wireframe selesai maka akan
                                dilanjutkan kepada tahap Visual Design dan Web
                                Development. Silakan bergabung untuk
                                mempelajarinya lebih lanjut. Kami akan tunggu
                                kalian di kelas ya.
                            </p>
                        </div>
                    </section>
                    {/* course photo */}
                    <section className="mt-14">
                        <h2 className="text-2xl font-medium my-5">
                            Course{" "}
                            <span className="text-teal-500 ">Photos</span>
                        </h2>
                    </section>
                </div>
            </section>
        </main>
    );
}

export default DetailCourse;

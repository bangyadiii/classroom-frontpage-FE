import { data } from "autoprefixer";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import coursesRequest from "src/constants/courses.request";
import Footer from "src/partials/Footer";
import Navbar from "src/partials/Navbar";
import NewCourseList from "src/partials/NewCourseList";

function Courses({ course }) {
    const [search, setSearch] = useState(() => "");
    const [searchFocus, setSearchFocus] = useState(() => false);
    const [searchResponse, setSearchResponse] = useState(() => ({
        isLoading: true,
        isError: false,
        data: [],
    }));

    const selectWrapper = useRef(null);
    let timeoutSearch = useRef(null);

    function clickOutSide(event) {
        if (selectWrapper && !selectWrapper.current.contains(event.target)) {
            setSearch("");
        }
    }

    function handleSearch(e) {
        setSearchResponse({ isLoading: true, isError: false, data: [] });
        e.persist();
        setSearch(e.target.value);
        clearTimeout(timeoutSearch.current);
        timeoutSearch.current = setTimeout(() => {
            coursesRequest
                .all({ params: { q: e.target.value } })
                .then((res) => {
                    setSearchResponse({
                        isLoading: false,
                        isError: false,
                        data: res.data,
                    });
                })
                .catch((err) => {
                    setSearchResponse({
                        isLoading: false,
                        isError: true,
                        data: err.message,
                    });
                });
        }, 1000);
    }

    useEffect(() => {
        window.addEventListener("mousedown", clickOutSide);

        return () => {
            window.removeEventListener("mousedown", clickOutSide);
        };
    }, []);

    return (
        <>
            <Head>
                <title>Classroom Micro | Course</title>
            </Head>
            <section className="pt-10 z-30 relative h-96">
                <div className="absolute inset-0 z-0 w-full bg-black opacity-75"></div>
                <div
                    className="meta-title absolute bottom-3 object-fill z-0 w-full flex justify-center items-center"
                    style={{ marginBottom: "-35px" }}
                >
                    <div className="">
                        <h2 className="text-5xl text-center text-teal-500 font-semibold leading-loose">
                            Library
                        </h2>
                        <h4 className="text-lg text-center text-white">
                            Jangan sampai ketinggalan dengan course course yang
                            ada di Classroom Micro
                        </h4>
                        <div
                            className="flex flex-col relative"
                            ref={selectWrapper}
                        >
                            <input
                                id="q"
                                type="text"
                                className="bg-white focus:outline-none transition-all duration-200 focus:border-teal-500 border-gray-600 border px-4 py-3 w-full mt-6"
                                onChange={handleSearch}
                                onBlur={() => setSearchFocus(!searchFocus)}
                                onFocus={() => setSearchFocus(!searchFocus)}
                                placeholder={
                                    searchFocus
                                        ? "Ketik minimal 3 huruf"
                                        : "Lagi nyari kelas apa"
                                }
                            />
                            {search?.length > 2 && (
                                <div className="flex flex-col absolute mt-20 py-2 px-4 bg-white border border-gray-600 w-full">
                                    {searchResponse.isLoading && "Loading..."}
                                    {!searchResponse.isLoading && (
                                        <>
                                            {searchResponse.isError &&
                                                "Something went wrong"}
                                            {searchResponse.data.length > 0 ? (
                                                searchResponse.data?.map(
                                                    (item, index) => {
                                                        return (
                                                            <div
                                                                key={index}
                                                                className="flex items-center -mx-4 py-2 cursor-pointer hover:bg-gray-200 relative"
                                                            >
                                                                <div
                                                                    className="w-auto px-4"
                                                                    style={{
                                                                        width: 150,
                                                                    }}
                                                                >
                                                                    <img
                                                                        src={
                                                                            item?.thumbnail ??
                                                                            ""
                                                                        }
                                                                        alt={
                                                                            item?.name ??
                                                                            "Course name"
                                                                        }
                                                                    />
                                                                </div>
                                                                <div className="w-full px-4">
                                                                    <h6 className="text-gray-900 text-lg">
                                                                        {item?.name ??
                                                                            "Course Name"}
                                                                    </h6>
                                                                    <p className="text-gray-600">
                                                                        {item?.level ??
                                                                            "level"}
                                                                    </p>
                                                                    <Link
                                                                        href="/courses/[id]"
                                                                        as={`/courses/${item?.id}`}
                                                                    >
                                                                        <a className="link-wrapped"></a>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                )
                                            ) : (
                                                <div>No course found</div>
                                            )}
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="container mx-auto z-10 relative">
                    <Navbar />
                </div>
            </section>
            <section className="container mx-auto mt-24">
                <NewCourseList courses={course} />
            </section>
            <section className="mt-32 bg-biru-3 py-12">
                <div className="container mx-auto">
                    <Footer />
                </div>
            </section>
        </>
    );
}

export async function getServerSideProps(ctx) {
    try {
        const result = await coursesRequest.all();

        return {
            props: {
                course: result.data,
            },
        };
    } catch (error) {
        console.log(error);
        return error;
    }
}

export default Courses;

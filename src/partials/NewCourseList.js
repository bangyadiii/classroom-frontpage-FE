import Link from "next/link";
import React from "react";
import CourseCard from "src/components/CourseCard";

function NewCourseList({ courses }) {
    return (
        <div>
            <div className="flex justify-between items-center">
                <div>
                    <span className="text-gray-400 text-sm">New Classess</span>
                    <h4 className="text-xl font-medium">
                        Summer <span className="text-teal-500">Productive</span>
                    </h4>
                </div>
                <div>
                    <Link href="/" as={`/`}>
                        <a className="text-sm text-gray-400 hover:underline">
                            View All Course
                        </a>
                    </Link>
                </div>
            </div>
            <div className="my-12 flex gap-x-4">
                {courses?.length > 0 ? (
                    courses.map((item, i) => {
                        if (i < 4) return <CourseCard course={item} key={i} />;
                    })
                ) : (
                    <div className="w-full text-center">Courses Not Found</div>
                )}
            </div>
        </div>
    );
}

export default NewCourseList;

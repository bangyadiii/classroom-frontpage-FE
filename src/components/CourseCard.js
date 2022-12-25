import Image from "next/image";
import Link from "next/link";
import PlayIcon from "public/images/btn_play.svg";

function CourseCard({ course }) {
    return (
        <div className="w-1/4">
            <div className="course relative">
                <figure className="course-image">
                    <PlayIcon className="play-btn" />
                    <img
                        src={course?.thumbnail ?? ""}
                        alt={course.name}
                       
                    />
                </figure>
                <div>
                    <h3 className="mt-3">{course?.name ?? "Class Name"}</h3>
                    <span className="text-sm text-gray-400">
                        {course?.level ?? "Unkown"}
                    </span>
                    <Link href="/courses/[id]" as={`/courses/${course.id}`}>
                        <a className="link-wrapped"></a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;

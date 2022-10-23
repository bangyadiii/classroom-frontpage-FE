import StudentIcon from "public/images/student-icon.svg";

function StatsCourse({ data }) {
    return (
        <div className="w-72 flex px-5 py-8 bg-white border-[1px] border-gray-300 gap-6">
            <div>{data?.icon ? <data.icon /> : <StudentIcon />}</div>
            <div>
                <h5 className="uppercase text-gray-400">{data.name}</h5>
                <p className="uppercase text-3xl font-medium">{data.data}</p>
            </div>
        </div>
    );
}

export default StatsCourse;
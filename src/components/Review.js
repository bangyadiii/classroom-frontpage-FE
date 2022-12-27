import React from "react";
import Star from "./Star";

export default function Review({ review }) {
    return (
        <div className="mt-4">
            <Star value={review?.rating ?? 0} width={26} height={26} />
            <p className="text-gray-600 mt-1">
                {review?.note ?? "student response"}
            </p>
            <div className="flex items-center rounded-full overflow-hidden w-14">
                <img
                    src={review?.users?.avatar}
                    className="object-cover"
                    alt=""
                    height={56}
                    width={56}
                />
            </div>
            <div className="ml-4">
                <h2 className="text-lg text-gray-900">{review?.users?.name}</h2>
                <h5 className="text-sm text-gray-600">{review?.users?.role}</h5>
            </div>
        </div>
    );
}

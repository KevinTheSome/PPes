import { useState } from "react";

export default function ImageContainer({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="max-w-sm h-64 rounded overflow-hidden shadow-lg">
            <div className="relative h-full">
                <img
                    className="w-full h-full object-contain"
                    src={"/storage/"+images[currentIndex]}
                    alt="Event Image"
                />
                <button
                    type="button"
                    className="absolute top-1/2 transform -translate-y-1/2 left-2 p-2 text-white rounded-full bg-gray-800 bg-opacity-50"
                    onClick={handlePrevious}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
                <button
                    type="button"
                    className="absolute top-1/2 transform -translate-y-1/2 right-2 p-2 text-white rounded-full bg-gray-800 bg-opacity-50"
                    onClick={handleNext}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}


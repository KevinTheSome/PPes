import { useState, useEffect } from "react";
import axios from "axios";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ImageContainer from "@/Components/ImageContainer";
export default function Show() {
    const [event, setEvent] = useState(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios
            .get(`/api/show/${route().params.id}`)
            .then((response) => {
                if (!response.error) {
                    setEvent(response.data.event);
                    setImages(response.data.images);
                }else{
                    window.location.href = "/";
                }
            })
            .catch((error) => {
                console.error(error);
                window.location.href = "/";

            });
    }, []);

    return (
        <AuthenticatedLayout>
            <div className="w-full h-screen flex justify-center items-center">
                {event ? (
                    <div className="p-6 bg-white border-b flex flex-col justify-center items-center border-gray-200 w-fit h-fit ">
                        <ImageContainer images={images} />
                        <h1 className="font-bold text-xl ">{event.title}</h1>
                        <p className=" ">{event.description}</p>
                        <p>{event.location}</p>
                        <p>{event.capacity}</p>
                        <p>{event.start_time}</p>
                        <p>{event.end_time}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </AuthenticatedLayout>
    );
}

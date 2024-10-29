import { useState, useEffect } from "react";
import axios from "axios";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ImageContainer from "@/Components/ImageContainer";
export default function Show() {
    const [event, setEvent] = useState({});
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios
            .get(`/api/show/${route().params.id}`)
            .then((response) => {
                setEvent(response.data.event);
                setImages(response.data.images);
                })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <AuthenticatedLayout>
            <div>
                {event ? (
                    <div>
                        wat?
                        <ImageContainer images={images} />
                        <h1>{event.title}</h1>
                        <p>{event.description}</p>
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

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
import axios from "axios";
import ImageContainer from "@/Components/ImageContainer";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        organizer_id: usePage().props.auth.user.id,
        title: "",
        description: "",
        start_time: "",
        end_time: "",
        location: "",
        capacity: 1,
        images: [],
    });
    const user = usePage().props.auth.user;

    useEffect(() => {
        if (user.status == "attendee" || user.status == null) {
            window.location.href = route("dashboard");
        }
    }, []);
    const [previews, setPreviews] = useState([]);

    useEffect(() => {
        setPreviews([]);
        if (data.images.length > 0) {
            for (const element of data.images) {
                setPreviews((prev) => [
                    ...prev,
                    URL.createObjectURL(element),
                ]);
            }
        }
    }, [data.images]);

    function handleSubmit(event) {
        event.preventDefault();
        if (!checkDates()) {
            alert("Invalid DATAAAAA!!!");
            return;
        }
        post(route("api.create"));
    }

    function checkDates() {
        const startDate = new Date(data.start_time);
        const endDate = new Date(data.end_time);
        if (startDate > endDate) {
            alert("Date begin cannot be after date end");
            return false;
        }
        return true;
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Create Event
                </h2>
            }
        >
            <form
                className="mt-6 w-full max-w-2xl mx-auto space-y-8"
                onSubmit={handleSubmit}
            >
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Event Details
                    </h2>
                    <p className="text-sm text-gray-600 mb-4">
                        This information will be displayed publicly.
                    </p>

                    <div className="space-y-4">
                        <div className="flex flex-col">
                            <label
                                htmlFor="image"
                                className="text-sm font-medium text-gray-700"
                            >
                                Images
                            </label>
                            <input
                                onChange={(e) =>
                                    setData("images", e.target.files)
                                }
                                type="file"
                                multiple
                                name="image"
                                id="image"
                                className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300"
                                required
                            />
                            {previews.length > 0 && (
                                <ImageContainer images={previews} />
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label
                                htmlFor="title"
                                className="text-sm font-medium text-gray-700"
                            >
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label
                                htmlFor="description"
                                className="text-sm font-medium text-gray-700"
                            >
                                Description
                            </label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label
                                htmlFor="start_time"
                                className="text-sm font-medium text-gray-700"
                            >
                                Begins
                            </label>
                            <input
                                type="datetime-local"
                                name="start_time"
                                id="start_time"
                                value={data.start_time}
                                onChange={(e) =>
                                    setData("start_time", e.target.value)
                                }
                                className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label
                                htmlFor="end_time"
                                className="text-sm font-medium text-gray-700"
                            >
                                Ends
                            </label>
                            <input
                                type="datetime-local"
                                name="end_time"
                                id="end_time"
                                value={data.end_time}
                                onChange={(e) =>
                                    setData("end_time", e.target.value)
                                }
                                className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label
                                htmlFor="location"
                                className="text-sm font-medium text-gray-700"
                            >
                                Location
                            </label>
                            <input
                                type="text"
                                name="location"
                                id="location"
                                value={data.location}
                                onChange={(e) =>
                                    setData("location", e.target.value)
                                }
                                className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label
                                htmlFor="capacity"
                                className="text-sm font-medium text-gray-700"
                            >
                                Capacity
                            </label>
                            <input
                                type="number"
                                min="1"
                                max="200"
                                name="capacity"
                                id="capacity"
                                value={data.capacity}
                                onChange={(e) =>
                                    setData("capacity", e.target.value)
                                }
                                className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300"
                                required
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition ease-in-out duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";
import {usePage} from "@inertiajs/react";
import axios from "axios";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        organizer_id: usePage().props.auth.user.id,
        title: "",
        description: "",
        start_time: "",
        end_time: "",
        location: "",
        capacity: 1,
        image: [],
    });
    const user = usePage().props.auth.user;

    useEffect(() => {
        if (user.status == "user") {
            window.location.href = route("dashboard");
        }
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        if(!checkDates()) {
            alert("Invalid DATAAAAA!!!");
            return;
        }
        console.log(data);
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
                className="mt-6 w-full h-full flex justify-center space-y-6"
                onSubmit={handleSubmit}
            >
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Event Details
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            This information will be displayed publicly
                        </p>
                        <div className="mt-10 space-y-8">
                            <div className="flex items-center gap-x-3">
                                <label
                                    htmlFor="image"
                                    className="text-sm leading-6 text-gray-600"
                                >
                                    Images
                                </label>
                                <input
                                    onChange={(e) =>
                                        setData("image", e.target.files)
                                    }
                                    type="file"
                                    multiple
                                    name="image"
                                    id="image"
                                    required
                                ></input>
                            </div>

                            <div className="flex items-center gap-x-3">
                                <label
                                    htmlFor="title"
                                    className="text-sm leading-6 text-gray-600"
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
                                    required
                                ></input>
                            </div>

                            <div className="flex items-center gap-x-3">
                                <label
                                    htmlFor="description"
                                    className="text-sm leading-6 text-gray-600"
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
                                    required
                                ></input>
                            </div>

                            <div className="flex items-center gap-x-3">
                                <label
                                    htmlFor="starts"
                                    className="text-sm leading-6 text-gray-600"
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
                                    required
                                ></input>
                            </div>

                            <div className="flex items-center gap-x-3">
                                <label
                                    htmlFor="ends"
                                    className="text-sm leading-6 text-gray-600"
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
                                    required
                                ></input>
                            </div>

                            <div className="flex items-center gap-x-3">
                                <label
                                    htmlFor="location"
                                    className="text-sm leading-6 text-gray-600"
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
                                    required
                                ></input>
                            </div>

                            <div className="flex items-center gap-x-3">
                                <label
                                    htmlFor="capacity"
                                    className="text-sm leading-6 text-gray-600"
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
                                    required
                                ></input>
                            </div>
                            <button type="submit" disabled={processing}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}


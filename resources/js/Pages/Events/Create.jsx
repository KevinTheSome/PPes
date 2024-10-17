import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useEffect } from "react";
import { usePage } from "@inertiajs/react";
import axios from "axios";

export default function Create() {
    const user = usePage().props.auth.user;

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        console.log(formData)
        const data = {
            title: formData.get("title"),
            description: formData.get("description"),
            start_time: formData.get("date_start"),
            end_time: formData.get("date_end"),
            location: formData.get("location"),
            capacity: formData.get("capacity"),
            organizer_id: user.id,
        };
        console.log(data.end_time, data.start_time);
        if(!checkDates()) {
            alert("Invalid DATAAAAA!!!");
            return;
        } 
        axios.post("/api/create", data);
    }

    
    function checkDates() {
        const startDate = new Date(document.getElementById("date_start").value);
        const endDate = new Date(document.getElementById("date_end").value);
        console.log(startDate, endDate);
        if (startDate > endDate) {
            alert("Date begin cannot be after date end");
            return false;
        }
        return true;
    }


    useEffect(() => {
        console.log(user);
        if (user.status == "user") {
            window.location.href = route("dashboard");
        }
    }, []);
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Create Event
                </h2>
            }
        >
            <form className="mt-6 w-full h-full flex justify-center space-y-6" onSubmit={(event) => handleSubmit(event)}>
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
                                    htmlFor="title"
                                    className="text-sm leading-6 text-gray-600"
                                >
                                    Title
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
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
                                    name="date_start"
                                    id="date_start"
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
                                    name="date_end"
                                    id="date_end"
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
                                    required
                                ></input>
                            </div>
                            
                            <div className="flex items-center gap-x-3">
                                <label
                                    htmlFor="location"
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
                                    required
                                ></input>
                            </div>
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}

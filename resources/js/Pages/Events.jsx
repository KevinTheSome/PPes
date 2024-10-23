import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";
import axios from "axios";

export default function Events() {
    const [events, setEvents] = useState([]);

    const user = usePage().props.auth.user;

    useEffect(() => {
        console.log(user);
        if (user.status === "user") {
            window.location.href = route("dashboard");
        }
    }, []);

    useEffect(() => {
        axios
            .get("/api/events")
            .then((response) => {
                setEvents(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const eventsTable = events.map((event) => (
        <tr
            key={event.id}
            className="hover:bg-gray-100 border-b border-gray-200"
        >
            <td className="px-6 py-4 text-sm text-gray-700">{event.title}</td>
            <td className="px-6 py-4 text-sm text-gray-700">
                {event.description}
            </td>
            <td className="px-6 py-4 text-sm text-gray-700">
                {new Date(event.start_time).toLocaleString()}
            </td>
            <td className="px-6 py-4 text-sm text-gray-700">
                {new Date(event.end_time).toLocaleString()}
            </td>
            <td className="px-6 py-4 text-sm text-gray-700">
                {event.location}
            </td>
        </tr>
    ));

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-bold leading-tight text-gray-800">
                    Update Event
                </h2>
            }
        >
            <div className="mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Title
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Description
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Start Time
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    End Time
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Address
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {eventsTable}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

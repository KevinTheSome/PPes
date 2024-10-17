import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";

export default function Events() {
    const [events, setEvents] = useState([]);

    const user = usePage().props.auth.user;

    useEffect(() => {
        console.log(user);
        if (user.status == "user") {
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
        <tbody key={event.id}>
            <tr key={event.id} className="border-b border-gray-300">
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{event.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                        {event.description}
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                        {event.start_time}
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                        {event.end_time}
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                        {event.location}
                    </div>
                </td>
            </tr>
        </tbody>
    ));

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Update Event
                </h2>
            }
        >
            <table className="w-fit h-full">
                <thead>
                    <tr>
                        <th className="px-6 py-3 border-b border-gray-300 text-left text-sm leading-4 font-medium text-gray-500">
                            Title
                        </th>
                        <th className="px-6 py-3 border-b border-gray-300 text-left text-sm leading-4 font-medium text-gray-500">
                            Description
                        </th>
                        <th className="px-6 py-3 border-b border-gray-300 text-left text-sm leading-4 font-medium text-gray-500">
                            Start Time
                        </th>
                        <th className="px-6 py-3 border-b border-gray-300 text-left text-sm leading-4 font-medium text-gray-500">
                            End Time
                        </th>
                        <th className="px-6 py-3 border-b border-gray-300 text-left text-sm leading-4 font-medium text-gray-500">
                            Address
                        </th>
                    </tr>
                </thead>
                {eventsTable}
            </table>
        </AuthenticatedLayout>
    );
}

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
    const [events, setEvents] = useState([]);
    const [formatted, setFormatted] = useState([]);
    useEffect(() => {
        axios.get(route("api.index")).then((response) => {
            setEvents(response.data);
        });
    }, []);

    useEffect(() => {
        let what = events.map((event) => {
            return {
                title: event.title,
                id: event.id,
                start: event.start_time.split("T")[0],
                end: event.end_time.split("T")[0],
            };
        });
        setFormatted(what);
    }, [events]);

    function handleDateClick(arg) {
        window.location.href = route("events.show", arg.event.id);
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <FullCalendar
                        plugins={[dayGridPlugin]}
                        initialView="dayGridMonth"
                        events={formattedEvents}
                        height="auto"
                        contentHeight="auto"
                        className="rounded-lg shadow-md"
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,dayGridWeek,dayGridDay",
                        }}
                        eventClick={handleDateClick}
                        buttonText={{
                            today: "Today",
                            month: "Month",
                            week: "Week",
                            day: "Day",
                        }}
                        eventColor="#FFA500" // oranža krāsa notikumiem
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

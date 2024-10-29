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
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                eventClick={handleDateClick}
                events={formatted}
            />
        </AuthenticatedLayout>
    );
}

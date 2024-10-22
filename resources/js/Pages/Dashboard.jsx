import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
    const [events, setEvent] = useState([])
    const [formatted, setFormatted] = useState([])
    useEffect(() => {
        axios.get(route('api.index'))
            .then(response => {
                setEvent(response.data)
            })  
            console.log(events)
    },[])
    
    useEffect(() => {
        let what = events.map((event) => {
            return {
                title: event.title,
                start: event.start_time.split("T")[0],
                end: event.end_time.split("T")[0],
            }
        })
        setFormatted(what)
    },[events])
    

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
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={formatted}
            />
        </AuthenticatedLayout>
    );
}

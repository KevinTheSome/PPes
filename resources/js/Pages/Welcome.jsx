import React from "react";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            {/* Page Title */}
            <Head title="Pārskats - Event Management System" />

            {/* Header Section */}
            <header className="bg-gray-900 shadow-lg">
                <nav className="container mx-auto p-6 flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-3xl font-bold text-white">PPes</div>

                    {/* Navigation Menu */}
                    <ul className="flex space-x-8 text-gray-400">
                        <li>
                            <Link
                                href="/"
                                className="hover:text-gray-100 transition duration-300"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route('dashboard')}
                                className="hover:text-gray-100 transition duration-300"
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                               href={route('events')}
                                className="hover:text-gray-100 transition duration-300"
                            >
                                Events
                            </Link>
                        </li>
                    </ul>

                    {/* Call-to-action Button */}
                    <Link
                        href={route('register')}
                        className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition duration-300"
                    >
                        Get Started
                    </Link>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="bg-gray-900 text-white py-24">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                        Pārskats
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        Izveidojiet pasākumu pārvaldības sistēmu, kur lietotāji
                        var izveidot, pārvaldīt un apstiprināt dalību pasākumos.
                    </p>
                    <Link
                        href="#description"
                        className="mt-10 inline-block bg-teal-500 text-gray-900 font-semibold py-3 px-8 rounded-lg hover:bg-teal-600 transition duration-300"
                    >
                        Uzzināt vairāk
                    </Link>
                </div>
            </section>

            {/* Description Section */}
            <section id="description" className="py-24 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">
                        Projekta apraksts
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        <b>PPES</b> paredz izstrādāt pasākumu pārvaldības
                        sistēmu, kas ļauj lietotājiem izveidot, pārvaldīt un
                        apstiprināt dalību dažādos pasākumos. Sistēmai būs
                        vairākas lomas, tostarp pasākumu pārvaldnieki un
                        dalībnieki, kā arī integrēti paziņojumi, kas informēs
                        lietotājus par izmaiņām vai atgādinājumiem. Projekta
                        izaicinājums slēpjas vienkārša, bet efektīva lietotāja
                        interfeisa izveidē, kas nodrošina funkcionalitāti un
                        lietošanas ērtumu.
                    </p>
                </div>
            </section>

            <section id="events" className="py-24 bg-gray-900 text-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold">Tuvākie pasākumi</h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Apskatiet tuvākos pasākumus, kurus mēs organizējam!
                    </p>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Event 1 */}

                        {/* Event 2 */}
                        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                            <img
                                src="https://pilsetas.lv/pictures/users/uploaded/213/Hvpi7sf6Svb8nLP_pilsetas_lv.jpg"
                                alt="Event 2"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-amber-500">
                                    Karlasons
                                </h3>
                                <p className="mt-4 text-gray-300">
                                    Nācieet ar bērniem apmeklēt jauno versiju
                                    mūltfilmai "Karlasons"
                                </p>
                                <p className="mt-6 text-amber-400 font-semibold">
                                    Datums: 2024. gada 22. oktobrī
                                </p>
                            </div>
                        </div>

                        {/* Event 3 */}
                        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR410gwqSyGhNYFAr0HKirxCdchKYJFiizCHg&s"
                                alt="Event 3"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-amber-500">
                                    Ziemassvētku Pasākums
                                </h3>
                                <p className="mt-4 text-gray-300">
                                    Izstāde ar inovatīviem par ziemas svētkiem,
                                    to tradīcijām
                                </p>
                                <p className="mt-6 text-amber-400 font-semibold">
                                    Datums: 2024. gada 12. Decembrī
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-900 py-8">
                <div className="container mx-auto text-center text-gray-400">
                    <p>&copy; 2024 PPes. All rights reserved.</p>
                    <ul className="flex justify-center mt-4 space-x-6">
                        <li>
                            <Link
                                href="/privacy-policy"
                                className="hover:text-white transition duration-300"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/terms-of-service"
                                className="hover:text-white transition duration-300"
                            >
                                Terms of Service
                            </Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}

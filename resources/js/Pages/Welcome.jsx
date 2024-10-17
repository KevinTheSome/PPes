import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            {/* Page Title */}
            <Head title="Welcome to the Homepage" />

            {/* Header Section */}
            <header className="bg-white shadow-md">
                <nav className="container mx-auto p-6 flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-3xl font-bold text-teal-600">
                        YourBrand
                    </div>

                    {/* Navigation Menu */}
                    <ul className="flex space-x-8 text-gray-700">
                        <li>
                            <Link href="/" className="hover:text-teal-500">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-teal-500">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/services"
                                className="hover:text-teal-500"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="hover:text-teal-500"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* Call-to-action Button */}
                    <Link
                        href="#contact"
                        className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700"
                    >
                        Get Started
                    </Link>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="bg-teal-600 text-white py-20">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold">ppes</h1>
                    <p className="mt-4 text-xl md:text-2xl">
                        Delivering excellence with a touch of creativity.
                    </p>
                    <Link
                        href="#services"
                        className="mt-8 inline-block bg-yellow-400 text-teal-800 font-bold py-3 px-8 rounded-md hover:bg-yellow-500"
                    >
                        Explore Our Services
                    </Link>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-16 bg-gray-50">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Our Services
                    </h2>
                    <p className="mt-2 text-lg text-gray-600">
                        We offer a wide range of professional services to meet
                        your needs.
                    </p>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg p-8 rounded-lg hover:shadow-2xl transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold text-teal-600">
                                Web Design
                            </h3>
                            <p className="mt-4 text-gray-600">
                                Beautiful and responsive website designs
                                tailored to your needs.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg p-8 rounded-lg hover:shadow-2xl transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold text-teal-600">
                                Marketing
                            </h3>
                            <p className="mt-4 text-gray-600">
                                Effective marketing strategies to help grow your
                                business.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg p-8 rounded-lg hover:shadow-2xl transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold text-teal-600">
                                Consulting
                            </h3>
                            <p className="mt-4 text-gray-600">
                                Expert advice to guide you through your business
                                decisions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section id="events" className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold">Upcoming Events</h2>
                    <p className="mt-4 text-lg">
                        Check out the exciting events we have lined up!
                    </p>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Event 1 */}
                        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                            <img
                                src=""
                                alt="Event 1"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-teal-400">
                                    Tech Conference 2024
                                </h3>
                                <p className="mt-4 text-gray-300">
                                    Join industry leaders and innovators for a
                                    two-day event discussing the latest trends
                                    in technology, AI, and digital
                                    transformation.
                                </p>
                                <p className="mt-6 text-yellow-400 font-semibold">
                                    Date: April 10-11, 2024
                                </p>
                            </div>
                        </div>

                        {/* Event 2 */}
                        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                            <img
                                src="https://via.placeholder.com/400x250"
                                alt="Event 2"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-teal-400">
                                    Marketing Summit
                                </h3>
                                <p className="mt-4 text-gray-300">
                                    A must-attend event for marketing
                                    professionals, featuring workshops,
                                    keynotes, and networking sessions with
                                    experts in the field.
                                </p>
                                <p className="mt-6 text-yellow-400 font-semibold">
                                    Date: May 20, 2024
                                </p>
                            </div>
                        </div>

                        {/* Event 3 */}
                        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                            <img
                                src="https://via.placeholder.com/400x250"
                                alt="Event 3"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-teal-400">
                                    Startup Expo
                                </h3>
                                <p className="mt-4 text-gray-300">
                                    Meet and network with the most promising
                                    startups in the tech industry, showcasing
                                    their innovative products and solutions.
                                </p>
                                <p className="mt-6 text-yellow-400 font-semibold">
                                    Date: June 15, 2024
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-800 py-6">
                <div className="container mx-auto text-center text-gray-400">
                    <p>&copy; 2024 YourBrand. All rights reserved.</p>
                    <ul className="flex justify-center mt-4 space-x-6">
                        <li>
                            <Link
                                href="/privacy-policy"
                                className="hover:text-white"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/terms-of-service"
                                className="hover:text-white"
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

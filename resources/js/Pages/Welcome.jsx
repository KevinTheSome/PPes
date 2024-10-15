import Calendar from "@/Components/Calendar";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {

    return (
        <>
            <Head title="Welcome" />
            <Calendar />

            {auth.user ? (
                <Link
                    href={route("dashboard")}
                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]   "
                >
                    Dashboard
                </Link>
            ) : (
                <>
                    <Link
                        href={route("login")}
                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]   "
                    >
                        Log in
                    </Link>
                    <Link
                        href={route("register")}
                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]   "
                    >
                        Register
                    </Link>
                </>
            )}
        </>
    );
}

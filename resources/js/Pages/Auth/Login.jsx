import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <div className="bg-gray-100 flex justify-center items-center h-screen">
            {/* Left: Image */}
            <div className="w-1/2 h-screen hidden lg:block">
                <img
                    src="https://hallgruppen.lv/wp-content/uploads/2022/06/saliekami-galdi-1-1-1200x675.jpeg    "
                    alt="Placeholder Image"
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Right: Login Form */}
            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <Head title="Log in" />
                <h1 className="text-2xl font-semibold mb-4">Login</h1>

                {status && (
                    <div className="mb-4 text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}

                <form onSubmit={submit}>
                    {/* Email Input */}
                    <div className="mb-4">
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        <InputError
                            message={errors.email}
                            className="mt-2 text-red-600"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <InputLabel htmlFor="password" value="Password" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.password}
                            className="mt-2 text-red-600"
                        />
                    </div>

                    {/* Remember Me */}
                    <div className="mb-4 flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ml-2 text-gray-600">Remember Me</span>
                    </div>

                    {/* Forgot Password */}
                    <div className="mb-6 text-blue-500">
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="hover:underline"
                            >
                                Forgot your password?
                            </Link>
                        )}
                    </div>

                    {/* Login Button */}
                    <PrimaryButton
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
                        disabled={processing}
                    >
                        Log in
                    </PrimaryButton>
                </form>

                {/* Sign Up Link */}
                <div className="mt-6 text-blue-500 text-center">
                    <Link href={route("register")} className="hover:underline">
                        Sign up Here
                    </Link>
                </div>
            </div>
        </div>
    );
}

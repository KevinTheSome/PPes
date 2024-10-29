import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <div className="flex flex-col justify-center font-[sans-serif] p-4 text-[#020617]">
                <div className="max-w-md w-full mx-auto shadow-[0_2px_10px_-2px_rgba(195,169,50,0.5)] p-8 relative mt-12">
                    <div className="bg-white w-24 h-24 border-[10px] p-1.5 absolute left-0 right-0 mx-auto -top-12 rounded-full overflow-hidden">
                        <a href="javascript:void(0)">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-eJMJ0k_4d8hMOO83yxBOHkqVVqOEzsg8H9dQjhdZ-7n29UUU1sLYiXpfQssrKppDnbc&usqp=CAU"
                                alt="logo"
                                className="w-full inline-block"
                            />
                        </a>
                    </div>

                    <form className="mt-12" onSubmit={submit}>
                        <h3 className="text-xl font-bold text-black mb-8 text-center">
                            Izveido kontu , lai redzētu pasākumus!
                        </h3>

                        {/* Name Input */}
                        <div className="space-y-4">
                            <InputLabel
                                htmlFor="name"
                                value="Name"
                                className="text-[#020617]"
                            />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="bg-gray-100 w-full text-sm text-[#020617] px-4 py-4 focus:bg-transparent outline-orange-300 transition-all"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                placeholder="Enter name"
                                required
                            />
                            <InputError
                                message={errors.name}
                                className="mt-2 text-[#020617]"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="space-y-4 mt-4">
                            <InputLabel
                                htmlFor="email"
                                value="Email"
                                className="text-[#020617]"
                            />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="bg-gray-100 w-full text-sm text-[#020617] px-4 py-4 focus:bg-transparent outline-orange-300 transition-all"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                placeholder="Enter email"
                                required
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2 text-[#020617]"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="space-y-4 mt-4">
                            <InputLabel
                                htmlFor="password"
                                value="Password"
                                className="text-[#020617]"
                            />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="bg-gray-100 w-full text-sm text-[#020617] px-4 py-4 focus:bg-transparent outline-orange-300 transition-all"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                placeholder="Enter password"
                                required
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2 text-[#020617]"
                            />
                        </div>

                        {/* Confirm Password Input */}
                        <div className="space-y-4 mt-4">
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Confirm Password"
                                className="text-[#020617]"
                            />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="bg-gray-100 w-full text-sm text-[#020617] px-4 py-4 focus:bg-transparent outline-orange-300 transition-all"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                placeholder="Enter confirm password"
                                required
                            />
                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2 text-[#020617]"
                            />
                        </div>

                        {/* Terms and Conditions */}
                        <div className="flex items-center mt-4">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 shrink-0 border-gray-300 rounded"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-3 block text-sm text-[#020617]"
                            >
                                I accept the
                                <a
                                    href="javascript:void(0);"
                                    className="text-black font-semibold hover:underline ml-1"
                                >
                                    Terms and Conditions
                                </a>
                            </label>
                        </div>

                        {/* Register Button */}
                        <div className="mt-8">
                            <PrimaryButton
                                type="submit"
                                className="w-full py-4 px-8 text-sm tracking-wide font-semibold text-white bg-orange-500 hover:bg-orange-600 focus:outline-none transition-all"
                                disabled={processing}
                            >
                                Create an account
                            </PrimaryButton>
                        </div>

                        {/* Already Registered */}
                        <p className="text-sm mt-8 text-center text-[#020617]">
                            Already have an account?
                            <Link
                                href={route("login")}
                                className="text-orange-500 font-semibold hover:underline ml-1"
                            >
                                Login here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}

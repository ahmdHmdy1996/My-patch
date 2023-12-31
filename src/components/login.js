import { useState, useContext } from "react"
import AuthContext from "./AuthProvider";
import axios from "axios";

const baseURL = "https://web-production-db8e.up.railway.app/api/v1/token/";



const Login = () => {
    const { setAuth } = useContext(AuthContext)
    const [username, setUser] = useState('')
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(baseURL, { username, password });

            console.log(response?.data);
            const accessToken = response?.data.access
            const refreshToken = response?.data.refresh
            setAuth({ username, password, accessToken, refreshToken })
            setUser('')
            setPassword('')

        } catch (err) {
            console.log(err);
        }
    }


    return (


        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                    Sign in
                </h1 >
                <form action="" className="mt-6" onSubmit={handleSubmit}>
                    {/*    username    */}
                    <div className="mb-2">

                        <label
                            for="username"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            username
                        </label>
                        <input
                            type="username"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={e => setUser(e.target.value)}
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Forget Password */}
                    <a
                        href="/"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>

                    {/* login buuton */}
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"

                        >

                            Login
                        </button>
                    </div>
                </form>
                {/* SignUp */}
                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="/"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div >
        </div >

    )

}
export default Login
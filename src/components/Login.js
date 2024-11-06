import React from "react";

const Login = () => {
  return (
    <div className="flex items-stretch justify-center h-full">
      <div className="flex w-full h-full">
        <div className="hidden md:block w-1/2">
          <img
            src="https://plus.unsplash.com/premium_photo-1669137055924-d6993c11df66?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Descriptive Alt Text"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="bg-white border border-gray-300 rounded-l-lg p-6 w-full shadow-lg flex items-center h-full">
          <div className="w-full px-6 md:px-16">
            <h1 className="text-xl md:text-2xl font-bold text-left mb-3">
              BitesWise
            </h1>
            <h2 className="text-md md:text-lg font-semibold text-left mb-4">
              Sign in
            </h2>
            <form>
              <input
                type="text"
                placeholder="Username"
                className="w-full border-b-2 border-gray-300 focus:border-green-600 mb-3 p-1"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border-b-2 border-gray-300 focus:border-green-600 mb-3 p-1"
                required
              />
              <button
                type="submit"
                className="bg-green-600 text-white w-full py-2 rounded-lg hover:bg-green-400 transition duration-300"
              >
                Sign-in
              </button>
              <p className="mt-3 text-center">
                <a
                  href="/forgot-password"
                  className="text-blue-500 hover:underline"
                >
                  Forget Password
                </a>
              </p>
              <p className="text-center mt-2">
                Don't have account?{" "}
                <a href="/register" className="text-blue-500 hover:underline">
                  Register Now
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

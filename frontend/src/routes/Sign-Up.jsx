import logo from "../logo.svg";

function SignUp() {
  return (
    <>
      <main
        className="flex items-center px-8 pb-20 grow lg:px-36 lg:h-screen lg:pb-0"
        id="sign-up"
      >
        <div className="w-full max-w-sm mx-auto lg:w-96">
          <h2 className="text-3xl font-bold">Create an account</h2>
          <a
            className="inline-block text-sm font-bold align-baseline text-info"
            href="/login"
          >
            Already have an account? Login
          </a>
          <form className="mt-6" action="/signup" method="POST">
            <div className="flex flex-wrap">
              <div className="w-full mb-4">
                <label
                  className="block mb-2 text-xs tracking-wide uppercase"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="w-full input input-bordered focus:outline-none focus:bg-gray-100"
                  type="text"
                  name="username"
                  placeholder="Username"
                />
              </div>
              <div className="w-full mb-4">
                <label
                  className="block mb-2 text-xs tracking-wide uppercase"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full input input-bordered focus:outline-none focus:bg-gray-100"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                {/* <% if (locals.messages.errors) { %>
                           <% messages.errors.forEach( el => { %>
                               <div><p className="text-xs italic text-red-500"><%= el.msg %></div>
                           <% }) %>    
                       <% } %> */}
              </div>
              <div className="w-full mb-2">
                <label
                  className="block mb-2 text-xs tracking-wide uppercase"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  className="w-full input input-bordered focus:outline-none focus:bg-gray-100"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="w-full mb-6">
                <p className="text-xs italic text-bg-500">
                  Use 8 or more characters with a mix of letters, numbers and
                  symbols
                </p>
              </div>
              <input
                className="w-full font-bold tracking-widest text-white bg-[#3ABFF8] btn btn-info hover:bg-[#3ABFF8]"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
        </div>
        <div className="relative flex-1 hidden h-full lg:block lg:grid lg:grid-cols-1">
          <div className="flex flex-col mx-auto space-y-7">
            <div className="h-full w-[1px] bg-gradient-to-b from-sky-500 to-sky-100"></div>
            <div className="flex items-center h-8 -ml-4 shrink-0">
              <a href="/" className="flex gap-2" id="logo">
                <img
                  src={logo}
                  className="hover:animate-spin"
                  alt="studioflow logo"
                />
                <span className="text-xl font-bold tracking-wider">
                  studio flow
                </span>
              </a>
            </div>
            <div className="h-full w-[1px] bg-gradient-to-t from-sky-500 to-sky-100"></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default SignUp;

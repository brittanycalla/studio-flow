import logo from "../logo.svg";

function Login() {
  return (
    <>
      <main
        className="flex items-center px-8 pb-20 grow lg:px-36 lg:h-screen lg:pb-0"
        id="sign-up"
      >
        <div className="w-full max-w-sm mx-auto lg:w-96">
          <h2 className="text-3xl font-bold">Login</h2>
          <a
            className="inline-block text-sm font-bold align-baseline text-info"
            href="/signup"
          >
            Don't have an account? Sign Up
          </a>
          <form id="login" className="mt-6" action="/login" method="POST">
            <div className="flex flex-col">
              <div className="w-full mb-4">
                <label
                  className="block mb-2 text-xs tracking-wide uppercase"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  id="username"
                  className="w-full input input-bordered focus:outline-none focus:bg-gray-100"
                  type="text"
                  name="username"
                  placeholder="Username"
                />
              </div>
              <div className="w-full mb-6">
                <label
                  className="block mb-2 text-xs tracking-wide uppercase"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  className="w-full input input-bordered focus:outline-none focus:bg-gray-100"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              {/* <% if (locals.messages.errors) { %>
                       <% messages.errors.forEach( el => { %>
                           <div><p className="text-xs italic text-red-500"><%= el.msg %></div>
                       <% }) %>    
                   <% } %> */}
              <input
                className="w-full font-bold tracking-widest text-white bg-[#3ABFF8] btn btn-info hover:bg-[#3ABFF8]"
                type="submit"
                value="Login"
              />
              <button
                id="guestAccount"
                className="text-left mt-5 text-sm font-bold text-[#3ABFF8] cursor-pointer motion-safe:animate-bounce hover:animate-none"
                role="link"
              >
                Use a guest account
              </button>
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
        <script src="./js/login.js"></script>
      </main>
    </>
  );
}

export default Login;

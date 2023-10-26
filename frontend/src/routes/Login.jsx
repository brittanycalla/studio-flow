import { useState } from "react"
import { Link, useOutletContext, useNavigate } from "react-router-dom"
import logo from "../logo.svg"
import Messages from "../components/Messages"

function Login() {
  const { messages, setUser, setMessages } = useOutletContext()
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const response = await fetch(form.action, {
      method: form.method,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(new FormData(form)),
    })
    const json = await response.json()
    if (json.messages) setMessages(json.messages)
    if (json.user) {
      setUser(json.user)
      navigate("/app")
    }
  }

  const guestLogin = () => {
    setUsername("studioflowguest")
    setPassword("studioflowrocks")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="lg:hidden h-[7vh] flex justify-start items-center w-full px-8 pt-4 mx-auto max-w-5xl lg:px-16">
        <Link to='/' className="flex gap-2" id="logo">
          <img src={logo} className="hover:animate-spin" alt="studioflow logo" />
          <span className="text-xl font-bold tracking-wider">studio flow</span>
        </Link>
      </header>

      <main
        className="flex items-center px-8 pb-20 grow lg:px-36 lg:h-screen lg:pb-0"
        id="sign-up"
      >
        <div className="w-full max-w-sm mx-auto lg:w-96">
          <h2 className="text-3xl font-bold">Login</h2>
          <Link
            className="inline-block text-sm font-bold align-baseline text-info"
            to="/signup"
          >
            Don't have an account? Sign Up
          </Link>
          <form id="login" className="mt-6" action="/login" method="POST" onSubmit={handleSubmit}>
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
                  value={username}
                  onChange={e => setUsername(e.target.value)}
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
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <Messages messages={messages} />
              <input
                className="w-full font-bold tracking-widest text-white bg-[#7C3AED] btn btn-info hover:bg-[#7C3AED]"
                type="submit"
                value="Login"
              />
              <button
                id="guestAccount"
                className="text-left mt-5 text-sm font-bold text-[#7C3AED] cursor-pointer motion-safe:animate-bounce hover:animate-none"
                role="link"
                onClick={guestLogin}
              >
                Use a guest account
              </button>
            </div>
          </form>
        </div>
        <div className="relative flex-1 hidden h-full lg:block lg:grid lg:grid-cols-1">
          <div className="flex flex-col mx-auto space-y-7">
            <div className="h-full w-[1px] bg-gradient-to-b from-[#7C3AED] to-[#DDD6FE]"></div>
            <div className="flex items-center h-8 -ml-4 shrink-0">
              <Link to="/" className="flex gap-2" id="logo">
                <img
                  src={logo}
                  className="hover:animate-spin"
                  alt="studioflow logo"
                />
                <span className="text-xl font-bold tracking-wider">
                  studio flow
                </span>
              </Link>
            </div>
            <div className="h-full w-[1px] bg-gradient-to-t from-[#7C3AED] to-[#DDD6FE]"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;

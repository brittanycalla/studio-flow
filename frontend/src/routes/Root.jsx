import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"

function Root() {
  const [user, setUser] = useState()
  const [messages, setMessages] = useState({})

  useEffect(() => {
    fetch('/user')
    .then(res => res.json())
    .then(res => setUser(res.user))
  }, [])

  return (
    <>
    <Outlet context= {{ user, setUser, messages, setMessages }} />
    </>
  );
}

export default Root;

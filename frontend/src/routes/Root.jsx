import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { API_BASE } from "../constants"

function Root() {
  const [user, setUser] = useState(null)
  const [messages, setMessages] = useState({})

  useEffect(() => {
    fetch(API_BASE + '/api/user', { credentials: 'include' })
      .then(res => res.json())
      .then(res => setUser(res.user))
  }, [])

  return (
    <>
      <Outlet context={{ user, setUser, messages, setMessages }} />
    </>
  );
}

export default Root;

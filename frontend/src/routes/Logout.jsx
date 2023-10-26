import { useEffect } from "react"
import { useOutletContext, useNavigate } from "react-router-dom"
import { API_BASE } from "../constants"

const Logout = () => {
  const { setUser } = useOutletContext()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(API_BASE + '/logout', { credentials: 'include' })
      .then(() => {
        setUser(null)
        navigate('/')
      })
  }, [setUser, navigate])

  return (
    <main>
      <p>Logging out...</p>
    </main>
  )
}

export default Logout
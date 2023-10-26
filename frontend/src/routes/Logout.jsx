import { useEffect } from "react"
import { useOutletContext, useNavigate } from "react-router-dom"

const Logout = () => {
  const { setUser } = useOutletContext()
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/logout')
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
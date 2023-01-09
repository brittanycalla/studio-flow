import { Link, useRouteError } from "react-router-dom"
import Header from "./components/Header"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
    <Header />
    <div className="flex flex-col items-center" id="error-page">
      <h1 className="text-4xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to=".." relative="path">Go Back</Link>
    </div>
    </>
  )
}
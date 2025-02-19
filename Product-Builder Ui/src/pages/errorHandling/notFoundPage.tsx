import { Link } from "react-router-dom"
import ErrorHandler from "../../compontents/common/errorHandler"

const NotFoundPage = () => {
  return (
    <ErrorHandler statusCode={404} errorMsg="Page Not Found">
      <Link to="/"
      className="bg-white mt-2 text-black py-1 px-2 rounded-md"
      >Home</Link>
    </ErrorHandler>
  )
}

export default NotFoundPage
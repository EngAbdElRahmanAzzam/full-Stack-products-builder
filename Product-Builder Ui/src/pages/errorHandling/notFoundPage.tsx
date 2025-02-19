import { Link } from "react-router-dom"
import ErrorHandler from "../../compontents/common/errorHandler"

const NotFoundPage = () => {
  return (
    <ErrorHandler statusCode={404} errorMsg="Page Not Found">
      <Link to="/">Return TO Home</Link>
    </ErrorHandler>
  )
}

export default NotFoundPage
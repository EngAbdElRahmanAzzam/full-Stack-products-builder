import ErrorHandler from "../../compontents/common/errorHandler"

const ErrorPage = () => {
  return (
    <ErrorHandler 
    statusCode={500} 
    errorMsg="Internal Server Error"
    >
      
      <p>
        We apologize for the inconvenience. Please try again later
      </p>
    </ErrorHandler>
  )
}

export default ErrorPage
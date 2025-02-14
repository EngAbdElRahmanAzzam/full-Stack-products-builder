import { Outlet } from "react-router-dom"
import Header from "../compontents/ui/header"

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <Outlet/>
        <div className="mt-auto">footer</div>
    </div>
  )
}

export default MainLayout
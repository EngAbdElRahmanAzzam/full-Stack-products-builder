import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <div>header</div>
        <Outlet/>
        <div className="mt-auto">footer</div>
    </div>
  )
}

export default MainLayout
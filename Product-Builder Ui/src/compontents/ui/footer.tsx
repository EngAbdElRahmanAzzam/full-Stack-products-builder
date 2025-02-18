const Footer = ()=>{
    return(
    <footer className="bg-gray-200 py-8 px-4 shadow-md z-10 flex justify-content-center align-items-center dark:bg-slate-900 dark:text-white">
        <div className="text-sm text-gray-600 dark:text-gray-300">Copyright © 2023 My Company</div>
        <div className="flex ml-auto gap-4">
            <a href="#" className="text-gray-700 hover:text-gray-900 dark:text-gray-500 hover:dark:text-gray-700">Terms &
                Conditions
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 dark:text-gray-500 hover:dark:text-gray-700">Privacy
                Policy
            </a>
        </div>
    </footer>
    )
}


export default Footer;
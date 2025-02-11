import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import {ReactNode} from 'react'

interface IProps {
    isOpen:boolean;
    openModel:()=>void;
    closeModel:()=>void
    title:string
    children:ReactNode;
}

const Model = ({isOpen, openModel,closeModel , children , title}:IProps) => {

    return (
        <>
            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={closeModel}>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                        transition
                        className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >

                            <DialogTitle as="h3" className="text-2xl font-medium text-gray-300">
                                {title}
                            </DialogTitle>

                            <div className="mt-4">
                                    {children}
                            </div>

                        </DialogPanel>
                    </div>
                </div>

            </Dialog>
        </>
    )
    }

export default Model;
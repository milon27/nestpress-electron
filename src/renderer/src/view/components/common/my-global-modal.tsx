import { useGlobalModalShowClose } from "@renderer/store/modal.store"
import { X } from "lucide-react"

interface IGlobalModal {
    visible: boolean
    content: React.ReactNode
    variant: "small" | "large"
}

export function MyGlobalModal({ visible, content, variant }: IGlobalModal) {
    const { closeModal } = useGlobalModalShowClose()
    return (
        <>
            {visible && (
                <div className="fixed bg-gray-400 w-full h-full top-0 left-0 z-50 bg-opacity-50 px-4">
                    {/* top-1/2 transform -translate-y-1/2 */}
                    <div className="h-full flex">
                        {variant === "small" && (
                            <div className="relative w-full md:w-2/6 max-h-[96vh] m-auto px-8 py-10 bg-white z-10 rounded-md shadow-lg border-2 border-gray-300 dark:border-gray-700 animate-scale overflow-auto dark:bg-gray-900">
                                <div
                                    onClick={() => closeModal()}
                                    className="absolute top-0 right-0 hover:bg-slate-200 dark:hover:bg-slate-800 m-3 p-2 rounded-full hover:cursor-pointer"
                                >
                                    <X size={16} />
                                </div>
                                {content}
                            </div>
                        )}
                        {variant === "large" && (
                            <div className="relative w-full md:w-5/6 max-h-[96vh] m-auto px-8 py-10 bg-white z-10 rounded-md shadow-lg border-2 border-gray-300 dark:border-gray-700 animate-scale overflow-auto dark:bg-gray-900">
                                <div
                                    onClick={() => closeModal()}
                                    className="absolute top-0 right-0 hover:bg-slate-200 dark:hover:bg-slate-800 m-4 p-2 rounded-full hover:cursor-pointer"
                                >
                                    <X size={16} />
                                </div>
                                {content}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

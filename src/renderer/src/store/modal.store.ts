import { shallow } from "zustand/shallow"
import { createWithEqualityFn } from "zustand/traditional"

interface IGlobalModal {
    visible: boolean
    content: React.ReactNode
    variant: "small" | "large"
}

interface IModalStore {
    modal: IGlobalModal
    showModal: (Modal: IGlobalModal) => void
    closeModal: () => void
}

const useModalStore = createWithEqualityFn<IModalStore>()((set) => {
    return {
        modal: {
            visible: false,
            content: "",
            variant: "large"
        },
        //* action
        showModal: (modal: IGlobalModal) => {
            set((prev) => ({ ...prev, modal }))
        },

        closeModal: () => {
            set((prev) => ({
                ...prev,
                modal: {
                    visible: false,
                    content: "",
                    variant: "large"
                }
            }))
        }
    }
}, shallow)

export const useGlobalModal = () => {
    const modal = useModalStore((state) => state.modal)
    return modal
}

export const useGlobalModalShowClose = () => {
    const showModal = useModalStore((state) => state.showModal)
    const closeModal = useModalStore((state) => state.closeModal)
    return {
        showModal,
        closeModal
    }
}

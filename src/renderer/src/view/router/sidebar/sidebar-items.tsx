import { createReactNavLink } from "@milon27/react-sidebar"
import { Home } from "lucide-react"
import { NavLink } from "react-router-dom"
import { RouteUrl } from "../url"

export const useSidebarController = () => {
    const navItems: (() => JSX.Element)[] = [
        createReactNavLink(NavLink, "Dashboard", `${RouteUrl.HOME}`, <Home size={18} />)
    ]

    return {
        navItems
    }
}

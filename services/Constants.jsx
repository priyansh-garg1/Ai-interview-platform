import { CalendarIcon, LayoutDashboardIcon, List, Settings2Icon, WalletCards } from "lucide-react";

export const SideBarOptions = [
    {
        name: "Dashboard",
        icon: LayoutDashboardIcon,
        path: "/dashboard",
    },{
        name: "Scheduled Interviews",
        icon: CalendarIcon,
        path: "/scheduled-interviews",
    },{
        name: "All Interviews",
        icon: List,
        path: "/all-interviews",
    },{
        name: "Billing",
        icon: WalletCards,
        path: "/billing",
    },
    {
        name: "Settings",
        icon: Settings2Icon,
        path: "/settings",
    }
]
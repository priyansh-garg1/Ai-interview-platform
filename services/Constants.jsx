import { BriefcaseBusinessIcon, CalendarIcon, Code2Icon, LayoutDashboardIcon, List, Puzzle, Settings2Icon, User2Icon, WalletCards } from "lucide-react";

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

export const InterviewType = [
    {
        title: "Technical",
        icon: Code2Icon
    },
    {
        title: "Behavioral",
        icon: User2Icon
    },
    {
        title: "Experience",
        icon: BriefcaseBusinessIcon
    },
    {
        title: "Problem Solving",
        icon: Puzzle
    }
] 
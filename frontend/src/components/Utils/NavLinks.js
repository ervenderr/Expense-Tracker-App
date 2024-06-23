
import {LayoutDashboard, BadgeDollarSign, LineChart, AreaChart, Settings, ClipboardMinus, } from "lucide-react"

export {LayoutDashboard}
export {BadgeDollarSign}
export {LineChart}
export {AreaChart}
export {Settings}

export const navLinks = [
  {
    id: 1,
    name: "Dashboard",
    icon: LayoutDashboard,
    link: "/",
  },
  {
    id: 2,
    name: "Expenses",
    icon: LineChart,
    link: "/expenses",
  },
  {
    id: 3,
    name: "Income",
    icon: BadgeDollarSign,
    link: "/income",
  },
  {
    id: 4,
    name: "Reports",
    icon: ClipboardMinus,
    link: "/reports",
  },
  {
    id: 5,
    name: "Settings",
    icon: Settings,
    link: "/settings",
  },
];

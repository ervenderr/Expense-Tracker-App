
import {LayoutDashboard, BadgeDollarSign, LineChart, AreaChart, Settings, ChevronRight} from "lucide-react"

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
    name: "Transactions",
    icon: BadgeDollarSign,
    link: "/transactions",
  },
  {
    id: 3,
    name: "Expenses",
    icon: LineChart,
    link: "/expenses",
  },
  {
    id: 4,
    name: "Income",
    icon: AreaChart,
    link: "/income",
  },
  {
    id: 5,
    name: "Settings",
    icon: Settings,
    link: "/settings",
  },
];

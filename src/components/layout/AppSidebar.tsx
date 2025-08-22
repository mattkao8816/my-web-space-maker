import { 
  LayoutDashboard, 
  Package, 
  Users, 
  ShoppingCart, 
  Truck, 
  BarChart3,
  UserCheck,
  Store,
  Eye,
  Settings,
  FileText
} from "lucide-react";
import { useLocation, Link } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "儀表板",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "產品管理",
    url: "/products",
    icon: Package,
  },
  {
    title: "庫存管理",
    url: "/inventory",
    icon: Store,
  },
  {
    title: "客戶管理", 
    url: "/customers",
    icon: Users,
  },
  {
    title: "訂單管理",
    url: "/orders",
    icon: ShoppingCart,
  },
  {
    title: "供應商管理",
    url: "/suppliers",
    icon: Truck,
  },
  {
    title: "處方管理",
    url: "/prescriptions",
    icon: Eye,
  },
  {
    title: "員工管理",
    url: "/employees",
    icon: UserCheck,
  },
  {
    title: "財務報表",
    url: "/reports",
    icon: BarChart3,
  },
  {
    title: "POS銷售",
    url: "/pos",
    icon: FileText,
  },
  {
    title: "系統設定",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-border p-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Eye className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="group-data-[collapsible=icon]:hidden">
            <h1 className="text-lg font-bold text-foreground">眼鏡店ERP</h1>
            <p className="text-xs text-muted-foreground">管理系統</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>主要功能</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.url}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                        isActive(item.url)
                          ? "bg-primary text-primary-foreground font-medium"
                          : "hover:bg-muted text-foreground"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
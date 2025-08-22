import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Package,
  TrendingUp,
  TrendingDown,
  Eye,
  AlertTriangle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Dashboard() {
  const stats = [
    {
      title: "今日銷售額",
      value: "NT$ 45,230",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "success"
    },
    {
      title: "待處理訂單",
      value: "23",
      change: "+3",
      trend: "up", 
      icon: ShoppingCart,
      color: "warning"
    },
    {
      title: "客戶總數",
      value: "1,245",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      color: "info"
    },
    {
      title: "庫存警示",
      value: "12",
      change: "-2",
      trend: "down",
      icon: Package,
      color: "destructive"
    }
  ];

  const recentOrders = [
    { id: "ORD-001", customer: "王小明", product: "Ray-Ban 太陽眼鏡", amount: "NT$ 3,500", status: "已完成" },
    { id: "ORD-002", customer: "李美華", product: "近視眼鏡框架", amount: "NT$ 2,800", status: "處理中" },
    { id: "ORD-003", customer: "張志偉", product: "多焦點鏡片", amount: "NT$ 8,900", status: "待確認" },
    { id: "ORD-004", customer: "陳雅文", product: "兒童眼鏡", amount: "NT$ 1,980", status: "已完成" },
  ];

  const lowStockItems = [
    { name: "Ray-Ban RB3025", stock: 3, minStock: 10 },
    { name: "Oakley Frogskins", stock: 1, minStock: 5 },
    { name: "多焦點鏡片 1.74", stock: 5, minStock: 15 },
    { name: "抗藍光鏡片", stock: 2, minStock: 8 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">儀表板</h1>
        <p className="text-muted-foreground">歡迎回到眼鏡店管理系統</p>
      </div>

      {/* 統計卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <div className="flex items-center mt-1">
                    {stat.trend === "up" ? (
                      <TrendingUp className="w-4 h-4 text-success mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-destructive mr-1" />
                    )}
                    <span className={`text-sm ${
                      stat.trend === "up" ? "text-success" : "text-destructive"
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${stat.color}/10`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 最近訂單 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              最近訂單
              <Button variant="outline" size="sm">查看全部</Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Eye className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{order.customer}</p>
                        <p className="text-sm text-muted-foreground">{order.product}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{order.amount}</p>
                    <Badge 
                      variant={order.status === "已完成" ? "default" : 
                              order.status === "處理中" ? "secondary" : "outline"}
                      className="text-xs"
                    >
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 庫存警示 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-warning" />
              <span>庫存警示</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStockItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg border-warning/20 bg-warning/5">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      最低庫存: {item.minStock} 件
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge variant="destructive" className="text-xs">
                      剩餘 {item.stock} 件
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4" variant="outline">
              查看庫存管理
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* 快捷操作 */}
      <Card>
        <CardHeader>
          <CardTitle>快捷操作</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="h-16 flex flex-col space-y-2">
              <ShoppingCart className="w-5 h-5" />
              <span className="text-sm">新增訂單</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col space-y-2">
              <Package className="w-5 h-5" />
              <span className="text-sm">進貨入庫</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col space-y-2">
              <Users className="w-5 h-5" />
              <span className="text-sm">新增客戶</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col space-y-2">
              <Eye className="w-5 h-5" />
              <span className="text-sm">驗光記錄</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      id: "P001",
      name: "Ray-Ban Aviator Classic",
      category: "太陽眼鏡",
      brand: "Ray-Ban",
      price: 3500,
      stock: 25,
      status: "有庫存",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=80&h=80&fit=crop"
    },
    {
      id: "P002", 
      name: "Oakley Frogskins",
      category: "運動眼鏡",
      brand: "Oakley",
      price: 4200,
      stock: 12,
      status: "有庫存",
      image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=80&h=80&fit=crop"
    },
    {
      id: "P003",
      name: "多焦點鏡片 1.74",
      category: "鏡片",
      brand: "Zeiss",
      price: 8900,
      stock: 5,
      status: "低庫存",
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=80&h=80&fit=crop"
    },
    {
      id: "P004",
      name: "兒童防藍光眼鏡",
      category: "兒童眼鏡",
      brand: "Kids Vision",
      price: 1980,
      stock: 0,
      status: "缺貨",
      image: "https://images.unsplash.com/photo-1517340254185-8c49fc293920?w=80&h=80&fit=crop"
    },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">產品管理</h1>
          <p className="text-muted-foreground">管理眼鏡、鏡片及配件產品</p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              新增產品
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>新增產品</DialogTitle>
              <DialogDescription>
                填寫產品資訊以新增到系統中
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="productName">產品名稱</Label>
                <Input id="productName" placeholder="輸入產品名稱" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="brand">品牌</Label>
                <Input id="brand" placeholder="輸入品牌名稱" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">分類</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="選擇分類" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sunglasses">太陽眼鏡</SelectItem>
                    <SelectItem value="frames">鏡框</SelectItem>
                    <SelectItem value="lenses">鏡片</SelectItem>
                    <SelectItem value="sports">運動眼鏡</SelectItem>
                    <SelectItem value="kids">兒童眼鏡</SelectItem>
                    <SelectItem value="accessories">配件</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">價格 (NT$)</Label>
                <Input id="price" type="number" placeholder="0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stock">庫存數量</Label>
                <Input id="stock" type="number" placeholder="0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sku">產品編號</Label>
                <Input id="sku" placeholder="自動生成或手動輸入" />
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor="description">產品描述</Label>
                <Textarea id="description" placeholder="輸入產品詳細描述" />
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline">取消</Button>
              <Button>儲存產品</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* 搜尋和篩選 */}
      <Card>
        <CardContent className="p-6">
          <div className="flex space-x-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="搜尋產品名稱、品牌或分類..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="篩選分類" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部分類</SelectItem>
                <SelectItem value="sunglasses">太陽眼鏡</SelectItem>
                <SelectItem value="frames">鏡框</SelectItem>
                <SelectItem value="lenses">鏡片</SelectItem>
                <SelectItem value="sports">運動眼鏡</SelectItem>
                <SelectItem value="kids">兒童眼鏡</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="庫存狀態" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部狀態</SelectItem>
                <SelectItem value="in-stock">有庫存</SelectItem>
                <SelectItem value="low-stock">低庫存</SelectItem>
                <SelectItem value="out-of-stock">缺貨</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* 產品表格 */}
      <Card>
        <CardHeader>
          <CardTitle>產品列表 ({filteredProducts.length} 項產品)</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>產品</TableHead>
                <TableHead>分類</TableHead>
                <TableHead>品牌</TableHead>
                <TableHead>價格</TableHead>
                <TableHead>庫存</TableHead>
                <TableHead>狀態</TableHead>
                <TableHead>操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-muted-foreground">{product.id}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.brand}</TableCell>
                  <TableCell>NT$ {product.price.toLocaleString()}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        product.status === "有庫存" ? "default" :
                        product.status === "低庫存" ? "secondary" : "destructive"
                      }
                    >
                      {product.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
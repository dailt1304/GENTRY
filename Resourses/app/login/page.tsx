"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Sparkles, Mail, Lock, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/AuthContext"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [error, setError] = useState<string | null>(null)
  const { setUser } = useAuth()

  interface LoginRequest {
    email: string
    password: string
  }

  interface LoginResponse {
  success: boolean
  message: string
  data: {
    id: string
    email: string
    fullName: string
    role: string
  }
}

  async function login(data: LoginRequest): Promise<LoginResponse> {
    try {
      const res = await axios.post<LoginResponse>(
        "https://localhost:5001/api/Auth/login",
        data,
        { withCredentials: true }
      )
      return res.data
    } catch (err: any) {
      console.error("Axios error:", err.response?.data || err.message)
      return {
        success: false,
        message: err.response?.data?.message || "Lỗi kết nối server",
        data: {
          id: "",
          email: "",
          fullName: "",
          role: "",
        },
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await login({ email: formData.email, password: formData.password })

      if (res.success) {
        // Gọi API lấy profile
        const profileRes = await axios.get("https://localhost:5001/api/Users/profile", {
          withCredentials: true
        })

        setUser(res.data)

        const userId: string = profileRes.data.data.id
        const role: string = profileRes.data.data.role

        console.log("Login thành công:", res.data.fullName)
        console.log("UserId:", userId)

        localStorage.setItem("userId", userId)
        localStorage.setItem("role", role)

        router.push("/homepage")
        // window.location.reload()
      } else {
        setError(res.message)
      }
    } catch (err: any) {
      console.error("Login error:", err)
      setError("Đăng nhập thất bại, vui lòng thử lại.")
    }
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold">GENTRY</span>
          </div>
          <CardTitle className="text-2xl">Đăng nhập</CardTitle>
          <p className="text-muted-foreground">Chào mừng bạn trở lại với GENTRY AI Fashion</p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Mật khẩu</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Nhập mật khẩu"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="pl-10 pr-10"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={formData.rememberMe}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, rememberMe: checked as boolean })
                  }
                />
                <Label htmlFor="remember" className="text-sm">
                  Ghi nhớ đăng nhập
                </Label>
              </div>
              <Link href="#" className="text-sm text-primary hover:underline">
                Quên mật khẩu?
              </Link>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button type="submit" className="w-full">
              Đăng nhập
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Chưa có tài khoản?{" "}
              <Link href="/register" className="text-primary hover:underline font-medium">
                Đăng ký ngay
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

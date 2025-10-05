"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Phone,
  Mail,
  MessageCircle,
  Headphones,
  Heart,
  Send,
  MapPin,
  Clock,
  Train,
  CheckCircle,
  Map,
} from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    priority: "low",
    message: "",
    newsletter: false,
  })
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setShowSuccessModal(true)
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      priority: "low",
      message: "",
      newsletter: false,
    })
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const teamMembers = [
    {
      name: "Nguyễn Minh Anh",
      role: "CEO & Founder",
      description: "10+ năm kinh nghiệm trong ngành công nghệ và thời trang. Chuyên gia AI và Machine Learning.",
      image: "professional CEO woman in business suit",
    },
    {
      name: "Trần Thị Linh",
      role: "Head of Design",
      description: "Chuyên gia UX/UI với niềm đam mê tạo ra những trải nghiệm người dùng tuyệt vời trong thời trang.",
      image: "creative designer woman with artistic background",
    },
    {
      name: "Lê Hoàng Nam",
      role: "CTO",
      description: "Kỹ sư phần mềm hàng đầu, chuyên phát triển các giải pháp AI và hệ thống backend mạnh mẽ.",
      image: "tech professional man with modern office background",
    },
    {
      name: "Phạm Thị Hương",
      role: "Customer Success",
      description: "Chuyên gia chăm sóc khách hàng với sứ mệnh mang đến trải nghiệm dịch vụ hoàn hảo nhất.",
      image: "customer service professional woman smiling",
    },
  ]

  const contactMethods = [
    {
      icon: Phone,
      title: "Hotline",
      description: "Gọi trực tiếp để được hỗ trợ nhanh chóng",
      contact: "+84 123 456 789",
      availability: "24/7 - Miễn phí",
      href: "tel:+84123456789",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Gửi email chi tiết về vấn đề của bạn",
      contact: "support@gentry.vn",
      availability: "Phản hồi trong 2 giờ",
      href: "mailto:support@gentry.vn",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat trực tiếp với đội ngũ hỗ trợ",
      contact: "Bắt đầu chat",
      availability: "Online 8:00 - 22:00",
      href: "#",
    },
  ]

  const faqItems = [
    {
      question: "GENTRY AI Fashion hoạt động như thế nào?",
      answer:
        "GENTRY sử dụng công nghệ AI tiên tiến để phân tích phong cách cá nhân, màu sắc phù hợp và xu hướng thời trang. Bạn chỉ cần tải lên ảnh trang phục hoặc chọn từ thư viện, AI sẽ đưa ra gợi ý outfit hoàn hảo cho mọi dịp.",
    },
    {
      question: "Tôi có thể sử dụng GENTRY miễn phí không?",
      answer:
        "GENTRY cung cấp gói miễn phí với các tính năng cơ bản như AI styling và quản lý tủ đồ. Gói Premium sẽ mở khóa thêm nhiều tính năng nâng cao như virtual try-on, phân tích chuyên sâu và ưu tiên hỗ trợ.",
    },
    {
      question: "Làm sao để tải ảnh trang phục lên hệ thống?",
      answer:
        "Bạn có thể tải ảnh lên thông qua trang 'Tủ Đồ' bằng cách kéo thả hoặc chọn file từ thiết bị. Hệ thống hỗ trợ định dạng JPG, PNG với chất lượng tối ưu. AI sẽ tự động phân loại và gắn tag cho từng món đồ.",
    },
    {
      question: "Thông tin cá nhân của tôi có được bảo mật không?",
      answer:
        "GENTRY cam kết bảo vệ thông tin cá nhân của người dùng theo tiêu chuẩn bảo mật cao nhất. Tất cả dữ liệu được mã hóa và chỉ sử dụng để cải thiện trải nghiệm cá nhân hóa. Chúng tôi không chia sẻ thông tin với bên thứ ba.",
    },
    {
      question: "Tôi có thể hủy đăng ký gói Premium không?",
      answer:
        "Có, bạn có thể hủy đăng ký gói Premium bất kỳ lúc nào trong phần 'Cài đặt tài khoản'. Việc hủy sẽ có hiệu lực từ chu kỳ thanh toán tiếp theo và bạn vẫn có thể sử dụng các tính năng Premium đến hết thời hạn đã thanh toán.",
    },
  ]

  const priorityOptions = [
    { value: "low", label: "Thấp", color: "bg-green-100 text-green-800" },
    { value: "medium", label: "Trung bình", color: "bg-yellow-100 text-yellow-800" },
    { value: "high", label: "Cao", color: "bg-orange-100 text-orange-800" },
    { value: "urgent", label: "Khẩn cấp", color: "bg-red-100 text-red-800" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <section className="py-12 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
              <Headphones className="w-10 h-10 text-primary" />
              Liên Hệ Với Chúng Tôi
              <Heart className="w-10 h-10 text-red-500" />
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Chúng tôi luôn sẵn sàng hỗ trợ bạn. Hãy liên hệ với đội ngũ GENTRY để được tư vấn và giải đáp mọi thắc mắc
              về thời trang AI.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <method.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h5 className="text-xl font-semibold">{method.title}</h5>
                  <p className="text-muted-foreground">{method.description}</p>
                  <div className="space-y-2">
                    <a
                      href={method.href}
                      className="text-primary font-semibold hover:underline block"
                      onClick={method.href === "#" ? (e) => e.preventDefault() : undefined}
                    >
                      {method.contact}
                    </a>
                    <p className="text-sm text-muted-foreground">{method.availability}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Đội Ngũ GENTRY</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Gặp gỡ những con người đứng sau thành công của GENTRY AI Fashion
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-400">
                    <Image
                      src={`/.jpg?height=96&width=96&query=${member.image}`}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold">{member.name}</h5>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Gửi Tin Nhắn</CardTitle>
                <p className="text-muted-foreground">
                  Điền thông tin bên dưới và chúng tôi sẽ liên hệ với bạn sớm nhất có thể
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Họ và tên *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Số điện thoại</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Chủ đề *</Label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn chủ đề" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technical">Hỗ trợ kỹ thuật</SelectItem>
                          <SelectItem value="account">Vấn đề tài khoản</SelectItem>
                          <SelectItem value="billing">Thanh toán & Hóa đơn</SelectItem>
                          <SelectItem value="feature">Yêu cầu tính năng</SelectItem>
                          <SelectItem value="partnership">Hợp tác kinh doanh</SelectItem>
                          <SelectItem value="other">Khác</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Mức độ ưu tiên</Label>
                    <RadioGroup
                      value={formData.priority}
                      onValueChange={(value) => handleInputChange("priority", value)}
                      className="flex flex-wrap gap-4"
                    >
                      {priorityOptions.map((option) => (
                        <div key={option.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={option.value} id={option.value} />
                          <Label htmlFor={option.value}>
                            <Badge className={option.color}>{option.label}</Badge>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Nội dung tin nhắn *</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Mô tả chi tiết vấn đề hoặc yêu cầu của bạn..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="attachment">Đính kèm file (tùy chọn)</Label>
                    <Input id="attachment" type="file" multiple accept=".jpg,.jpeg,.png,.pdf,.doc,.docx" />
                    <p className="text-sm text-muted-foreground">Hỗ trợ: JPG, PNG, PDF, DOC, DOCX (tối đa 10MB)</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                    />
                    <Label htmlFor="newsletter" className="text-sm">
                      Tôi muốn nhận thông tin cập nhật và ưu đãi từ GENTRY
                    </Label>
                  </div>

                  <div className="text-center">
                    <Button type="submit" size="lg" className="px-8">
                      <Send className="w-4 h-4 mr-2" />
                      Gửi Tin Nhắn
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Câu Hỏi Thường Gặp</h2>
            <p className="text-muted-foreground">Tìm câu trả lời nhanh chóng cho những thắc mắc phổ biến</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible defaultValue="item-0">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Văn Phòng Chính</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h6 className="font-semibold mb-1">Địa chỉ</h6>
                    <p className="text-muted-foreground">123 Nguyễn Huệ, Quận 1, TP.HCM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h6 className="font-semibold mb-1">Giờ làm việc</h6>
                    <p className="text-muted-foreground">
                      Thứ 2 - Thứ 6: 8:00 - 18:00
                      <br />
                      Thứ 7: 9:00 - 17:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Train className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h6 className="font-semibold mb-1">Phương tiện</h6>
                    <p className="text-muted-foreground">
                      Metro: Bến Thành (200m)
                      <br />
                      Bus: Tuyến 01, 05, 18
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="h-fit">
              <CardContent className="p-8 text-center space-y-4">
                <Map className="w-16 h-16 mx-auto text-muted-foreground" />
                <div>
                  <h6 className="font-semibold mb-2">Bản đồ văn phòng GENTRY</h6>
                  <Button variant="outline">Xem trên Google Maps</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="text-center">
          <DialogHeader>
            <div className="mx-auto mb-4">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <DialogTitle className="text-xl">Gửi Thành Công!</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Cảm ơn bạn đã liên hệ với GENTRY. Chúng tôi sẽ phản hồi trong vòng 2 giờ.
            </p>
            <Button onClick={() => setShowSuccessModal(false)}>Đóng</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

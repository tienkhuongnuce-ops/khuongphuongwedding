
import { Coffee, GlassWater, Music } from 'lucide-react';
import React from 'react';

// --- CONFIGURATION START ---
// Customize your wedding details here.

export const weddingConfig = {
  groom: {
    firstName: "Tiến Khương",
    fullName: "Nguyễn Tiến Khương",
    father: "", // Added to satisfy TypeScript interface in Invitation.tsx. Leave empty if not applicable.
    mother: "Tiến Thị Hằng",
    address: "Hưng Đạo, Quốc Oai, Hà Nội",
    role: "Chú Rể (The Groom)",
    mapUrl: "https://www.google.com/maps/dir/?api=1&destination=20.976492453098412, 105.67053970444307",
    // Add an empty string or a valid Google Maps Embed URL here
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.908055628469!2d105.6683510154016!3d20.97649249562725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452bd77083049%3A0x6b72013f3689408e!2zSMawbmcgxJDhuqFvLCBRdeG7kWMgT2FpLCBIw6AgTuG7mWksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1645500000000!5m2!1sen!2s"
  },
  bride: {
    firstName: "Thu Phương",
    fullName: "Đào Thu Phương",
    father: "Đào Xuân Tùng",
    mother: "Lê Thị Thúy",
    address: "Tiền Hải, Thái Bình",
    role: "Cô Dâu (The Bride)",
    mapUrl: "https://www.google.com/maps/dir/?api=1&destination=20.4399119892005, 106.53997740644134",
    // Add an empty string or a valid Google Maps Embed URL here
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.993687352873!2d106.53778871539446!3d20.439912006666874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135e39688325603%3A0x963952766863866!2zVGnhu4WubiBI4bqjaSwgVGjDoWkgQsOsbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1645500000000!5m2!1sen!2s"
  },
  date: {
    fullDate: "28 . 12 . 2025",
    dayOfWeek: "Chủ Nhật (Sunday)",
    day: "28",
    month: "12",
    year: "2025",
    time: "11:30",
    rsvpDeadline: "01/12/2025"
  },
  video: {
    title: "Pre-wedding Film",
    subtitle: "Lưu giữ khoảnh khắc",
    // Replace this with your YouTube Embed URL
    // Format: https://www.youtube.com/embed/VIDEO_ID
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=Example", 
    description: "Tình yêu không phải là tìm thấy một người hoàn hảo, mà là học cách nhìn thấy những điều tuyệt vời từ một người chưa hoàn hảo."
  },
  images: {
    // The main large photo at the top
    hero: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    // Photos for the gallery section
    gallery: [
      "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522673607200-1645062cd958?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519225448526-0645155be456?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1623940866099-da1869e5d774?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520854221256-17451cc330e7?q=80&w=800&auto=format&fit=crop",
      // Added new photos here
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546193430-c2d207739ed7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop"
    ]
  },
  timeline: {
    groom: [
      {
        time: "06:30 AM",
        title: "Chuẩn Bị & Xuất Phát",
        location: "Nhà Trai (Quốc Oai, Hà Nội)",
      },
      {
        time: "09:00 AM",
        title: "Lễ Vu Quy (Tại Nhà Gái)",
        location: "Tiền Hải, Thái Bình",
      },
      {
        time: "12:30 PM",
        title: "Đón Dâu Về Hà Nội",
        location: "Di chuyển",
      },
      {
        time: "16:30 PM",
        title: "Lễ Thành Hôn",
        location: "Nhà Trai (Quốc Oai, Hà Nội)",
      },
       {
        time: "17:30 PM",
        title: "Tiệc Mừng (Reception)",
        location: "Hội Trường / Nhà Trai",
      }
    ],
    bride: [
      {
        time: "07:00 AM",
        title: "Trang Điểm & Chuẩn Bị",
        location: "Nhà Gái (Thái Bình)",
      },
      {
        time: "09:00 AM",
        title: "Đón Tiếp Nhà Trai",
        location: "Tư Gia Nhà Gái",
      },
      {
        time: "09:30 AM",
        title: "Lễ Vu Quy (Tea Ceremony)",
        location: "Bàn Thờ Gia Tiên Nhà Gái",
      },
      {
        time: "11:00 AM",
        title: "Tiệc Mừng Vu Quy",
        location: "Tư Gia / Nhà Hàng tại Thái Bình",
      },
      {
        time: "13:00 PM",
        title: "Lễ Xuất Giá (Về Nhà Chồng)",
        location: "Khởi hành đi Hà Nội",
      }
    ]
  },
  banking: {
    groom: {
        bankName: "MB Bank",
        accountNumber: "0000000000000",
        accountName: "NGUYEN TIEN KHUONG",
        qrUrl: "" // Add your QR code image URL here
    },
    bride: {
        bankName: "Techcombank",
        accountNumber: "0000000000000",
        accountName: "DAO THU PHUONG",
        qrUrl: "" // Add your QR code image URL here
    }
  }
};

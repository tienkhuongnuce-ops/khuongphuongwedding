
import { Coffee, GlassWater, Music } from 'lucide-react';
import React from 'react';

// --- CONFIGURATION START ---
// Customize your wedding details here.

export const weddingConfig = {
  // RENAME THIS TO YOUR GOOGLE SCRIPT URL AFTER DEPLOYING (See README)
  rsvpApiUrl: "", 

  groom: {
    firstName: "Tiến Khương",
    fullName: "Nguyễn Tiến Khương",
    father: "", 
    mother: "Tiến Thị Hằng",
    address: "Hưng Đạo, Quốc Oai, Hà Nội",
    role: "Chú Rể (The Groom)",
    // Link to open Google Maps App (Directions)
    mapUrl: "https://www.google.com/maps/dir/?api=1&destination=20.976492453098412, 105.67053970444307",
    // Link to display PREVIEW on the website (Embed)
    mapEmbedUrl: "https://maps.google.com/maps?q=20.976492453098412,105.67053970444307&hl=vi&z=14&output=embed"
  },
  bride: {
    firstName: "Thu Phương",
    fullName: "Đào Thu Phương",
    father: "Đào Xuân Tùng",
    mother: "Lê Thị Thúy",
    address: "Tiền Hải, Thái Bình",
    role: "Cô Dâu (The Bride)",
    // Link to open Google Maps App (Directions)
    mapUrl: "https://www.google.com/maps/dir/?api=1&destination=20.4399119892005, 106.53997740644134",
    // Link to display PREVIEW on the website (Embed)
    mapEmbedUrl: "https://maps.google.com/maps?q=20.4399119892005,106.53997740644134&hl=vi&z=14&output=embed"
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
    // Paste ANY valid YouTube link here. 
    // Works with: https://www.youtube.com/watch?v=... OR https://youtu.be/...
    embedUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
    description: "Tình yêu không phải là tìm thấy một người hoàn hảo, mà là học cách nhìn thấy những điều tuyệt vời từ một người chưa hoàn hảo."
  },
  images: {
    // IMPORTANT: Put these images in the "public" folder at the project root.
    // Example: public/hero.jpg
    hero: "/Couple.jpg", 
    
    // Profile photos
    groom: "/groom.jpg",
    bride: "/bride.jpg",
    decoration: "/decoration.png",

    // Rename your gallery photos to match these names:
    gallery: [
      "/gallery1.jpg",
      "/gallery2.jpg",
      "/gallery3.jpg",
      "/gallery4.jpg",
      "/gallery5.jpg",
      "/gallery6.jpg",
    ]
  },
  timeline: {
    groom: [
      {
        time: "08:00 AM",
        title: "Tập trung nhà trai",
        location: "Hưng Đạo, Quốc Oai",
        iconType: "Coffee"
      },
      {
        time: "08:30 AM",
        title: "Xuất phát đón dâu",
        location: "Di chuyển về Thái Bình",
        iconType: "Music"
      },
      {
        time: "10:30 AM",
        title: "Lễ Thành Hôn",
        location: "Nhà Gái",
        iconType: "GlassWater"
      },
      {
        time: "12:00 PM",
        title: "Tiệc Mặn",
        location: "Nhà Hàng",
        iconType: "GlassWater"
      }
    ],
    bride: [
      {
        time: "07:00 AM",
        title: "Trang điểm & Chuẩn bị",
        location: "Nhà Gái",
        iconType: "Coffee"
      },
      {
        time: "10:30 AM",
        title: "Lễ Vu Quy & Thành Hôn",
        location: "Tiền Hải, Thái Bình",
        iconType: "GlassWater"
      },
      {
        time: "12:00 PM",
        title: "Khai Tiệc",
        location: "Nhà Hàng",
        iconType: "Music"
      }
    ]
  }
};

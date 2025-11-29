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
    mapUrl: "https://www.google.com/maps/dir/?api=1&destination=20.976492453098412, 105.67053970444307"
  },
  bride: {
    firstName: "Thu Phương",
    fullName: "Đào Thu Phương",
    father: "Đào Xuân Tùng",
    mother: "Lê Thị Thúy",
    address: "Tiền Hải, Thái Bình",
    role: "Cô Dâu (The Bride)",
    mapUrl: "https://www.google.com/maps/dir/?api=1&destination=20.4399119892005, 106.53997740644134"
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
  music: {
    enabled: true,
    autoPlay: false, // Browsers often block autoplay, so we default to false/manual play
    songUrl: "/wedding-song.mp3" // Put your mp3 file in the 'public' folder
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
    // TIP: To use your own, put 'hero-bg.jpg' in the 'public' folder and uncomment the line below:
    // hero: "/hero-bg.jpg", 
    hero: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",

    // Specific profile photos for the Invitation Card
    // TIP: Put 'groom.jpg' and 'bride.jpg' in the 'public' folder
    groom: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    bride: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop",
    
    // Photos for the gallery section
    // HOW TO ADD YOUR OWN PHOTOS:
    // 1. Put the photo file (e.g., photo1.jpg) in the 'public' folder.
    // 2. Add "/photo1.jpg" to this list.
    // 3. Make sure the filename matches EXACTLY (case-sensitive).
    gallery: [
      "/GL1.jpg",
      "/GL2.jpg",
      "/GL3.jpg",
    ]
  },
  timeline: [
    {
      time: "09:00 AM",
      title: "Lễ Vu Quy (Tea Ceremony)",
      location: "Nhà Riêng Cô Dâu",
      iconType: "Coffee" // Maps to Lucide icons in Timeline.tsx
    },
    {
      time: "11:30 AM",
      title: "Lễ Thành Hôn (Wedding Ceremony)",
      location: "Trung Tâm Hội Nghị Gem Center",
      iconType: "GlassWater"
    },
    {
      time: "12:30 PM",
      title: "Khai Tiệc (Reception)",
      location: "Sảnh Pollux - Gem Center",
      iconType: "Music"
    }
  ]
};

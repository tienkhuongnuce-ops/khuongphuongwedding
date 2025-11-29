import React from 'react';

// --- CONFIGURATION START ---
// Customize your wedding details here.

export const weddingConfig = {
  groom: {
    firstName: "Tiến Khương",
    fullName: "Nguyễn Tiến Khương",
    father: "", 
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
    autoPlay: false, 
    songUrl: "/wedding-song.mp3" 
  },
  video: {
    title: "Pre-wedding Film",
    subtitle: "Lưu giữ khoảnh khắc",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=Example", 
    description: "Tình yêu không phải là tìm thấy một người hoàn hảo, mà là học cách nhìn thấy những điều tuyệt vời từ một người chưa hoàn hảo."
  },
  images: {
    // The main large photo at the top
    // Matches your file: public/Couple.jpg
    hero: "/Couple.jpg",

    // Specific profile photos for the Invitation Card
    // Using Couple.jpg for now since groom.jpg/bride.jpg were not in your list.
    // TODO: Add 'groom.jpg' and 'bride.jpg' to public folder and update here.
    groom: "/Couple.jpg",
    bride: "/Couple.jpg",
    
    // Photos for the gallery section
    // Matches your files: public/GL1.jpg, public/GL2.jpg, etc.
    gallery: [
      "/gallery 1.jpg",
      "/gallery 2.jpg",
      "/gallery 3.jpg",
      // Duplicating to fill grid if needed
      "/gallery 1.jpg",
      "/gallery 2.jpg",
      "/gallery 3.jpg",
    ]
  },
  timeline: [
    {
      time: "09:00 AM",
      title: "Lễ Vu Quy (Tea Ceremony)",
      location: "Nhà Riêng Cô Dâu",
      iconType: "Coffee"
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
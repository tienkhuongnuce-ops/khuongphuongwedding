
import { Coffee, GlassWater, Music } from 'lucide-react';
import React from 'react';

// --- CONFIGURATION START ---
// Customize your wedding details here.

export const weddingConfig = {
  // -------------------------------------------------------------------------
  // ⚠️ IMPORTANT: RSVP SETUP
  // 1. Follow the instructions in README.md (Part 3) to create your Google Sheet.
  // 2. Paste your "Web App URL" inside the quotes below.
  // -------------------------------------------------------------------------
  rsvpApiUrl: "", 

  groom: {
    firstName: "Tiến Khương",
    fullName: "Nguyễn Tiến Khương",
    father: "", 
    mother: "Tiến Thị Hằng",
    address: "Cụm 1, Hưng Đạo, Quốc Oai, Hà Nội",
    role: "Chú Rể (The Groom)",
    mapUrl: "https://www.google.com/maps/dir/?api=1&destination=20.976492453098412, 105.67053970444307",
    // Embed URL for Google Maps (iframe src)
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.795293297184!2d105.66835101540156!3d20.97649249539074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452faa62725ad%3A0x60813955684fb650!2zSMawbmcgxJDhuqFvLCBRdeG7kWMgT2FpLCBIYSBOb2ksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1645455000000!5m2!1sen!2s",
    banking: {
      bankName: "TPBank",
      bankId: "TPB", // VietQR Bank ID (e.g., VCB, TCB, MB, TPB)
      accountNumber: "0393123456789",
      accountName: "NGUYEN TIEN KHUONG",
      qrTemplate: "compact2" // VietQR template
    }
  },
  bride: {
    firstName: "Thu Phương",
    fullName: "Đào Thu Phương",
    father: "Đào Xuân Tùng",
    mother: "Lê Thị Thúy",
    address: "Đông Quý, Tiền Hải, Thái Bình",
    role: "Cô Dâu (The Bride)",
    mapUrl: "https://www.google.com/maps/dir/?api=1&destination=20.4399119892005, 106.53997740644134",
    // Embed URL for Google Maps (iframe src)
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.987654321!2d106.53997740644134!3d20.4399119892005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDI2JzIzLjciTiAxMDbCsDMyJzIzLjkiRQ!5e0!3m2!1sen!2s!4v1645455000000!5m2!1sen!2s",
    banking: {
      bankName: "Vietcombank",
      bankId: "VCB", 
      accountNumber: "9912345678",
      accountName: "DAO THU PHUONG",
      qrTemplate: "compact2"
    }
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
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=Example", 
    description: ""
  },
  images: {
    // Put files in the "public" folder of your project with these exact names.
    hero: "/hero.jpg", 
    groom: "/groom.jpg",
    bride: "/bride.jpg",
    decoration: "https://cdn-icons-png.flaticon.com/512/8664/8664654.png", 
    gallery: [
      "/gallery-1.jpg",
      "/gallery-2.jpg",
      "/gallery-3.jpg",
      "/gallery-4.jpg",
      "/gallery-5.jpg",
      "/gallery-6.jpg",
    ]
  },
  timeline: {
    groom: [
      {
        date: "Thứ Bảy, 27/12/2025",
        time: "03:00 AM",
        title: "Di Chuyển Sang Nhà Gái",
        location: "Nhà Trai",
        iconType: "Home"
      },
      {
        date: "Thứ Bảy, 27/12/2025",
        time: "07:00 AM",
        title: "Lễ Ăn Hỏi",
        location: "Tư Gia Nhà Gái",
        iconType: "GlassWater"
      },
      {
        date: "Thứ Bảy, 27/12/2025",
        time: "03:00 PM",
        title: "Tiệc Mừng",
        location: "Nhà Trai",
        iconType: "Coffee" 
      },
      {
        date: "Chủ Nhật, 28/12/2025",
        time: "03:00 AM",
        title: "Xuất phát đón dâu",
        location: "Nhà Trai",
        iconType: "Car"
      },
      {
        date: "Chủ Nhật, 28/12/2025",
        time: "07:00 AM",
        title: "Lễ Vu Quy & Đón Dâu",
        location: "Nhà Gái",
        iconType: "Heart"
      },
      {
        date: "Chủ Nhật, 28/12/2025",
        time: "11:30 AM",
        title: "Lễ Thành Hôn",
        location: "Nhà Trai",
        iconType: "Home"
      },
      {
        date: "Chủ Nhật, 28/12/2025",
        time: "12:30 PM",
        title: "Tiệc Mừng",
        location: "Trung Tâm Tiệc Cưới",
        iconType: "GlassWater"
      }
    ],
    bride: [
      {
        date: "Thứ Bảy, 27/12/2025",
        time: "07:00 AM",
        title: "Lễ Ăn Hỏi",
        location: "Nhà Gái",
        iconType: "Home"
      },
      {
        date: "Thứ Bảy, 27/12/2025",
        time: "16:00 PM",
        title: "Tiệc Mặn Đãi Khách",
        location: "Tư Gia Nhà Gái",
        iconType: "GlassWater"
      },
      {
        date: "Chủ Nhật, 28/12/2025",
        time: "07:00 AM",
        title: "Lễ Vu Quy",
        location: "Nhà Gái",
        iconType: "Coffee" 
      },
      {
        date: "Chủ Nhật, 28/12/2025",
        time: "08:00 AM",
        title: "Lên xe hoa",
        location: "Về nhà chồng",
        iconType: "Car"
      }
    ]
  },
  audio: {
    bgMusic: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3", 
    buttonTitle: "Bật/Tắt Nhạc"
  }
};

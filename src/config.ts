
import { Coffee, GlassWater, Music } from 'lucide-react';
import React from 'react';

// --- CONFIGURATION START ---
// Customize your wedding details here.

export const weddingConfig = {
  // -------------------------------------------------------------------------
  // ⚠️ IMPORTANT: RSVP & WISHES SETUP
  // 1. Follow the instructions in README.md (Part 3) to create your Google Sheet.
  // 2. Paste your "Web App URL" inside the quotes below.
  // -------------------------------------------------------------------------
  rsvpApiUrl: "https://script.google.com/macros/s/AKfycbzOW5beurD_1IeOLg8oxb8CuBGfRCdvV5HvIkHbK76WMvEBPVIqQpmgCqcIO-Wee5rX/exec", 
  wishesApiUrl: "https://script.google.com/macros/s/AKfycbzOW5beurD_1IeOLg8oxb8CuBGfRCdvV5HvIkHbK76WMvEBPVIqQpmgCqcIO-Wee5rX/exec", // Usually the same as rsvpApiUrl

  groom: {
    firstName: "Tiến Khương",
    fullName: "Nguyễn Tiến Khương",
    father: "", 
    mother: "Tiến Thị Hằng",
    address: "Cụm 1, Hưng Đạo, Quốc Oai, Hà Nội",
    role: "Chú Rể (The Groom)",
    mapUrl: "https://maps.app.goo.gl/w1bn6txv5rX5VSCA7",
    // Embed URL for Google Maps (iframe src)
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d292.8328843491711!2d105.67064927834681!3d20.976349584904394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1765855050919!5m2!1sen!2s",
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
    mapUrl: "https://maps.app.goo.gl/bTk2utqTdSzaX7yWA",
    // Embed URL for Google Maps (iframe src)
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254.35639738219456!2d106.53992832274389!3d20.43981256557811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a0786968b4335%3A0xa720c64c1e1e07a5!2zQ2jhu6MgQ8OieSBYYW5o!5e1!3m2!1sen!2s!4v1765855200572!5m2!1sen!2s",
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
    embedUrl: "https://youtu.be/IX2SqBniZJg?si=PV2Dsq__N7WNsk8i", 
    description: ""
  },
  images: {
    // Put files in the "public" folder of your project with these exact names.
    hero: "/Couple.jpg", 
    groom: "/groom.png",
    bride: "/bride.png",
    decoration: "https://cdn-icons-png.flaticon.com/512/8664/8664654.png", 
    gallery: [
      "/gallery1.png",
      "/gallery2.jpg",
      "/gallery3.jpg",
      "/gallery4.png",
      "/gallery5.png",
      "/gallery6.png",
      "/gallery7.png",
      "/gallery8.jpg",
      "/gallery9.jpg",
      "/gallery10.jpg",
      "/gallery11.jpg",
      "/gallery12.jpg",
      "/gallery13.png",
      "/gallery14.png",
      "/gallery15.png",
      "/gallery16.png",
      "/gallery17.png",
      "/gallery18.png",
      "/gallery19.png",
      "/gallery20.png",
    ]
  },
  timeline: {
    groom: [
      {
        date: "Thứ Bảy, 27/12/2025",
        time: "03:00 AM",
        title: "Xuất Phát Sang Nhà Gái",
        location: "Tại Nhà Trai",
        iconType: "Car"
      },
      {
        date: "Thứ Bảy, 27/12/2025",
        time: "07:30 AM",
        title: "Lễ Ăn Hỏi",
        location: "Tại Nhà Gái",
        iconType: "Gift"
      },
      {
        date: "Thứ Bảy, 27/12/2025",
        time: "03:00 PM",
        title: "Tiệc mừng",
        location: "Tại Nhà Trai",
        iconType: "Utensils"
      },
      {
        date: "Chủ Nhật, 28/12/2025",
        time: "03:00 AM",
        title: "Xuất Phát Đón Dâu",
        location: "Tại Nhà Trai",
        iconType: "Car"
      },
      {
        date: "Chủ Nhật, 28/12/2025",
        time: "07:30 AM",
        title: "Lễ Vu Quy",
        location: "Tại Nhà Gái",
        iconType: "Heart"
      },
      {
        date: "Chủ Nhật, 28/12/2025",
        time: "11:30 AM",
        title: "Lễ Thành Hôn",
        location: "Tại Nhà Trai",
        iconType: "Home"
      },
      {
        date: "Chủ Nhật, 28/12/2025",
        time: "12:30 PM",
        title: "Tiệc mừng",
        location: "Tại Nhà Trai",
        iconType: "Home"
      }
    ],
    bride: [
      {
        date: "Thứ Bảy, 27/12/2025",
        time: "07:30 AM",
        title: "Lễ Ăn Hỏi",
        location: "Tại Nhà Gái",
        iconType: "Gift"
      },
      {
        date: "Thứ Bảy, 27/12/2025",
        time: "04:00 PM",
        title: "Tiệc Mừng",
        location: "Tại Nhà Gái",
        iconType: "Utensils"
      },
      {
        date: "Chủ Nhật, 28/12/2025",
        time: "07:00 AM",
        title: "Lễ Vu Quy",
        location: "Tại Nhà Gái",
        iconType: "Heart"
      },
      {
        date: "Chủ Nhật, 28/12/2025",
        time: "08:00 AM",
        title: "Lên Xe Hoa",
        location: "Về Nhà Chồng",
        iconType: "Car"
      },
      {
        date: "Chủ Nhật, 28/12/2025",
        time: "11:30 AM",
        title: "Lễ Thành Hôn",
        location: "Tại Nhà Trai",
        iconType: "Home"
      }
    ]
  },
  audio: {
    bgMusic: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3", 
    buttonTitle: "Bật/Tắt Nhạc"
  }
};

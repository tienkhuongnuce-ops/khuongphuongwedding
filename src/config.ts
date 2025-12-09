
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
    address: "Hưng Đạo, Quốc Oai, Hà Nội",
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
    address: "Tiền Hải, Thái Bình",
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
    description: "Tình yêu không phải là tìm thấy một người hoàn hảo, mà là học cách nhìn thấy những điều tuyệt vời từ một người chưa hoàn hảo."
  },
  images: {
    // SAMPLE PHOTOS FROM UNSPLASH (Use these so images show up immediately)
    hero: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=2070&auto=format&fit=crop",
    
    // Profile photos
    groom: "https://images.unsplash.com/photo-1623940866099-da1869e5d774?q=80&w=600&auto=format&fit=crop",
    bride: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop",

    // Traditional Pattern
    decoration: "https://cdn-icons-png.flaticon.com/512/8664/8664654.png", 

    // Gallery photos
    gallery: [
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1519225448526-0645155be456?q=80&w=800&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1522673607200-1645062cd958?q=80&w=800&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1520854221256-17451cc330e7?q=80&w=800&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop", 
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
  ],
  // BACKGROUND MUSIC
  audio: {
    // Replace with your own MP3 URL. 
    bgMusic: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3", 
    buttonTitle: "Bật/Tắt Nhạc"
  }
};

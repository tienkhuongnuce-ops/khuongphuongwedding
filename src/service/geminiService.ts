
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { GuestWishRequest } from "../types";
import { weddingConfig } from "../config";

// Initialize Gemini
// Note: API Key must be provided in the environment.
// The API key is obtained exclusively from the environment variable process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateWeddingWish = async (request: GuestWishRequest): Promise<string> => {
  const modelId = "gemini-2.5-flash"; // Fast and efficient for text generation
  const { groom, bride } = weddingConfig;

  const prompt = `
    Bạn là một trợ lý ảo am hiểu văn hóa Việt Nam. Hãy viết một lời chúc đám cưới ngắn gọn (dưới 50 từ) bằng tiếng Việt cho đám cưới của ${groom.firstName} và ${bride.firstName}.
    
    Thông tin người chúc:
    - Tên: ${request.name}
    - Mối quan hệ với cô dâu/chú rể: ${request.relationship === 'family' ? 'Người thân trong gia đình' : request.relationship === 'friend' ? 'Bạn bè thân thiết' : request.relationship === 'colleague' ? 'Đồng nghiệp' : 'Người quen'}
    - Giọng văn mong muốn: ${request.tone === 'heartfelt' ? 'Chân thành, xúc động' : request.tone === 'funny' ? 'Hài hước, vui vẻ' : request.tone === 'formal' ? 'Trang trọng, lịch sự' : 'Thơ mộng, bay bổng'}

    Yêu cầu:
    - Lời chúc phải tự nhiên, mang đậm bản sắc văn hóa đám cưới Việt Nam.
    - Có thể nhắc tên Cô dâu (${bride.firstName}) hoặc Chú rể (${groom.firstName}) nếu phù hợp.
    - Không dùng các ký tự đặc biệt quá mức.
    - Chỉ trả về nội dung lời chúc, không có phần mở đầu hay giải thích.
  `;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        temperature: 0.7, // Creative but relevant
      }
    });

    return response.text || "Chúc hai bạn trăm năm hạnh phúc, đầu bạc răng long!";
  } catch (error) {
    console.error("Error generating wish:", error);
    return "Chúc mừng hạnh phúc hai bạn! (Lỗi kết nối AI)";
  }
};

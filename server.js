/**
 * Full-Stack AI Vision OCR API Server (Node.js Express)
 * Connects frontend image uploads to OpenAI GPT-4o Vision API
 * Enforces structured JSON response for question text, options, answer, and LaTeX solution steps.
 */

const express = require('express');
const cors = require('cors');
const multer = require('multer');
const dotenv = require('dotenv');
const { OpenAI } = require('openai');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});
app.use(express.static('./'));

// Configure Multer for in-memory upload
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

// Initialize OpenAI API Client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'dummy_key_for_fallback'
});

/**
 * System Prompt enforcing strict JSON output
 */
const SYSTEM_PROMPT = `
You are an expert AI Exam OCR & Math Parser specialized in K-12 mathematics, physics, and science test papers.

TASK INSTRUCTIONS:
1. Strip all student handwriting notes, pencil markings, teacher red pen checkmarks (✔, ✘), grade scores, and pre-checked option dots.
2. Extract the clean question stem and choice options.
3. Convert all math symbols, line segments (e.g. \\overline{AE}), triangles (e.g. \\triangle ABC), ratios, fractions, and equations into standard LaTeX/KaTeX format.
4. Ensure all options are presented clearly as unselected choices.
5. Provide a detailed, step-by-step mathematical reasoning solution using LaTeX formatting.

STRICT JSON OUTPUT FORMAT:
You MUST return a JSON object with EXACTLY the following structure (no markdown fences outside JSON):
{
  "question_text": "乾淨題幹（排除原卷手寫筆跡與批改痕跡，數學公式轉為 LaTeX）",
  "options": ["(A) 選項1", "(B) 選項2", "(C) 選項3", "(D) 選項4"],
  "correct_answer": "(B)",
  "solution_steps": "Step 1: ... \\nStep 2: ... \\nStep 3: ... (詳細推導步驟與解析，LaTeX 格式)"
}
`;

/**
 * Backend API Route: POST /api/ocr-analyze
 * Accepts: Base64 image JSON payload { image_data: "data:image/jpeg;base64,..." } OR Multipart File Upload
 */
app.post('/api/ocr-analyze', upload.single('image'), async (req, res) => {
  try {
    let base64Image = '';

    if (req.file) {
      const mimeType = req.file.mimetype || 'image/jpeg';
      base64Image = `data:${mimeType};base64,${req.file.buffer.toString('base64')}`;
    } else if (req.body && req.body.image_data) {
      base64Image = req.body.image_data;
    }

    if (!base64Image) {
      return res.status(400).json({ error: '請提供有效的考卷圖片 (image file or base64 image_data)' });
    }

    // Check if OpenAI API Key is provided
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY.includes('dummy')) {
      console.log('⚡ [Fallback Mode] OpenAI API Key not configured. Returning structured mock result.');
      return res.json({
        success: true,
        data: {
          question_text: "如圖，在 $\\triangle ABC$ 中，$DE // BC$，且 $\\overline{AE} = \\overline{EB} = k$。若 $AD = 3$，$DB = 2$，求 $\\triangle ADE$ 與 $\\triangle ABC$ 的面積比 $\\triangle ADE : \\triangle ABC$。",
          options: [
            "(A) 9 : 16",
            "(B) 9 : 25",
            "(C) 3 : 5",
            "(D) 4 : 9"
          ],
          correct_answer: "(B) 9 : 25",
          solution_steps: "Step 1：由題意可知 $\\overline{AE} = \\overline{EB} = k$，故 $\\overline{AB} = 2k$。\nStep 2：在 $\\triangle ABC$ 與 $\\triangle ADE$ 中，因 $DE // BC$，由平行線截比例線段性質，得 $\\triangle ADE \\sim \\triangle ABC$ (AA 相似)。\nStep 3：對應邊長比 $AD : AB = 3 : (3 + 2) = 3 : 5$。\nStep 4：故面積比 $\\triangle ADE : \\triangle ABC = (3/5)^2 = 9 : 25$，正確選項為 (B)。"
        }
      });
    }

    // Call OpenAI GPT-4o Vision API
    console.log('🤖 Calling OpenAI GPT-4o Vision API for Exam OCR...');
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        {
          role: 'user',
          content: [
            { type: 'text', content: '請辨識這張試題考卷圖片，並回傳指定的 JSON 結構：' },
            { type: 'image_url', image_url: { url: base64Image } }
          ]
        }
      ],
      max_tokens: 1200
    });

    const rawJsonText = response.choices[0]?.message?.content || '{}';
    const parsedData = JSON.parse(rawJsonText);

    res.json({
      success: true,
      data: parsedData
    });
  } catch (error) {
    console.error('❌ API Error:', error.message);
    res.status(500).json({
      success: false,
      error: 'AI 辨識處理失敗: ' + error.message
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`🚀 Smart Review AI OCR Server running on http://localhost:${PORT}`);
  console.log(`Endpoint: POST http://localhost:${PORT}/api/ocr-analyze`);
  console.log(`==================================================`);
});

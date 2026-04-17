import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { text, targetLang } = await req.json();

    if (!text || !targetLang) {
      return NextResponse.json({ error: 'Missing text or targetLang' }, { status: 400 });
    }

    // Call Google Translate public inference API
    const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`);

    if (!response.ok) {
      throw new Error(`Google Translate API Error: ${response.status}`);
    }

    const data = await response.json();
    let translatedText = '';
    
    // Parse Google Translate response structure
    if (data && data[0] && Array.isArray(data[0])) {
      data[0].forEach((item: any) => {
        if (item[0]) translatedText += item[0];
      });
    } else {
      translatedText = text; // fallback
    }

    return NextResponse.json({ translatedText });
  } catch (error) {
    console.error('Translation proxy error:', error);
    return NextResponse.json({ error: 'Translation failed' }, { status: 500 });
  }
}

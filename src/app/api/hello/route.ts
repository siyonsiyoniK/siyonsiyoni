import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  try {
    const response = NextResponse.json({ 
      message: '안녕하세요! Next.js API가 정상 작동 중입니다.' 
    });
    
    return response;
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
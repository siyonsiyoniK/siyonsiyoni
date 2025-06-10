import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  return NextResponse.json({ 
    message: '안녕하세요! Next.js API가 정상 작동 중입니다.' 
  });
}

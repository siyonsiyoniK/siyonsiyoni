import { NextResponse } from 'next/server';
import { db } from '@/db';
import { cases } from '@/db/schema';
// import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const allCases = await db.query.cases.findMany();
    return NextResponse.json(allCases);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch cases' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    console.log("??");
    const body = await request.json();
    
    const newCase = await db.insert(cases).values({
      title: body.title,
      summary: Array.isArray(body.summary) ? body.summary : [body.summary],
      overview: Array.isArray(body.overview) ? body.overview : [body.overview],
      defenseArgument: Array.isArray(body.defenseArgument) ? body.defenseArgument : [body.defenseArgument],
      prosecutionArgument: Array.isArray(body.prosecutionArgument) ? body.prosecutionArgument : [body.prosecutionArgument],
      evidence: Array.isArray(body.evidence) ? body.evidence : [body.evidence],
      requests: Array.isArray(body.requests) ? body.requests : [body.requests],
      createdAt: new Date().toISOString(),
      modifiedAt: new Date().toISOString()
    }).returning();

    return NextResponse.json(newCase[0], { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create case' },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate the form data
    if (!data.firstName || !data.lastName || !data.email || !data.course || !data.preferredLanguage) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // In a production environment, we would integrate with ActivePieces here
    // ActivePieces would handle webhook integration with CRM, email systems, etc.
    // const activePiecesEndpoint = process.env.ACTIVEPIECES_WEBHOOK_URL;
    
    // For demo purposes, we'll just return a success response
    // In production, you would send this data to ActivePieces with proper error handling
    /*
    const response = await fetch(activePiecesEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit to ActivePieces');
    }
    */
    
    // Return a success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Enrollment submitted successfully',
        enrollmentId: `ENR-${Math.floor(Math.random() * 1000000)}` 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Enrollment API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
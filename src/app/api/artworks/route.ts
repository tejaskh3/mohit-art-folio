import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const artworks = await prisma.artwork.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    return NextResponse.json(artworks)
  } catch (error) {
    console.error('Detailed error:', error)
    return NextResponse.json(
      { error: 'Error fetching artworks', details: error instanceof Error ? error.message : 'Unknown error' }, 
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    
    if (!body.title || !body.description || !body.price || !body.imageUrl) {
      return NextResponse.json(
        { error: 'Missing required fields' }, 
        { status: 400 }
      )
    }

    const artwork = await prisma.artwork.create({
      data: {
        title: body.title,
        description: body.description,
        price: parseFloat(body.price),
        imageUrl: body.imageUrl,
      },
    })
    return NextResponse.json(artwork)
  } catch (error) {
    console.error('Detailed error:', error)
    return NextResponse.json(
      { error: 'Error creating artwork', details: error instanceof Error ? error.message : 'Unknown error' }, 
      { status: 500 }
    )
  }
} 
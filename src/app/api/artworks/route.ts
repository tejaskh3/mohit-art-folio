import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {

    // pagination parameters with defaults
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    // total count for pagination to calculate total pages and next/previous links
    const total = await prisma.artwork.count();

    // fetch paginated artworks with optimized fields
    const artworks = await prisma.artwork.findMany({
      skip,
      take: limit,
      orderBy: {
        createdAt: 'desc'
      },
      select: {
        id: true,
        title: true,
        description: true,
        price: true,
        imageUrl: true,
        createdAt: true,
        // Only include story in detailed view
        story: true
      }
    });

    // Return paginated response
    return NextResponse.json({
      data: artworks,
      metadata: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30'
      }
    });

  } catch (error) {
    console.error('Error fetching artworks:', error);
    return NextResponse.json(
      {
        message: "An error occurred while fetching artworks",
        error: process.env.NODE_ENV === 'development' && error instanceof Error ? 
          error.message : 
          'Internal server error'
      },
      { 
        status: 500,
        headers: {
          'Cache-Control': 'no-store'
        }
      }
    );
  }
}

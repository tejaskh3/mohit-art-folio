'use client'

import { useState, useEffect } from 'react'
import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
interface ArtworkType {
    id: string;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    storyMarkdown: string | null;
    category: string | null;
    dimensions: string | null;
    medium: string | null;
    status: string | null;
    createdAt: string;
    updatedAt: string;
}

interface PaginatedResponse {
  data: ArtworkType[];
  metadata: {
    nextCursor: string | undefined;
    hasMore: boolean;
  };
}

const defaultNewArtwork = {
  title: '',
  description: '',
  price: '',
  imageUrl: '',
  storyMarkdown: '',
  category: '',
  dimensions: '',
  medium: '',
  status: 'AVAILABLE' // default status
}

export default function AdminPage() {
  const [artworks, setArtworks] = useState<ArtworkType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [nextCursor, setNextCursor] = useState<string | undefined>()
  const [hasMore, setHasMore] = useState(true)
  const [newArtwork, setNewArtwork] = useState(defaultNewArtwork)
  const [editingArtwork, setEditingArtwork] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (editingArtwork !== null) {
      setArtworks(artworks.map(artwork => 
        artwork.id === editingArtwork ? { ...artwork, [name]: value } : artwork
      ))
    } else {
      setNewArtwork({ ...newArtwork, [name]: value })
    }
  }

  const handleAddArtwork = async () => {
    if (newArtwork.title && newArtwork.description && newArtwork.price && newArtwork.imageUrl) {
      try {
        const response = await fetch('/api/artworks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newArtwork),
        })
        
        if (response.ok) {
          const savedArtwork = await response.json()
          setArtworks([...artworks, savedArtwork])
          setNewArtwork(defaultNewArtwork)
        }
      } catch (error) {
        console.error('Error adding artwork:', error)
      }
    }
  }

  const handleRemoveArtwork = (id: string) => {
    setArtworks(artworks.filter(artwork => artwork.id !== id))
    if (editingArtwork === id) {
      setEditingArtwork(null)
    }
  }

  const handleEditArtwork = (id: string) => {
    setEditingArtwork(id)
  }

  const handleSaveEdit = () => {
    setEditingArtwork(null)
  }

  const handleUpload = (result: any) => {
    if (editingArtwork !== null) {
      setArtworks(artworks.map(artwork => 
        artwork.id === editingArtwork 
          ? { ...artwork, image: result.info.secure_url } 
          : artwork
      ))
    } else {
      setNewArtwork({ ...newArtwork, imageUrl: result.info.secure_url })
    }
  }

  const fetchArtworks = async (cursor?: string) => {
    try {
      setIsLoading(true)
      const url = `/api/artworks?limit=10${cursor ? `&cursor=${cursor}` : ''}`
      const response = await fetch(url)
      
      if (response.ok) {
        const data: PaginatedResponse = await response.json()
        
        if (cursor) {
          // Append new artworks to existing ones
          setArtworks(prev => [...prev, ...data.data])
        } else {
          // Replace artworks if it's the first fetch
          setArtworks(data.data)
        }
        
        setNextCursor(data.metadata.nextCursor)
        setHasMore(data.metadata.hasMore)
      }
    } catch (error) {
      console.error('Error fetching artworks:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const loadMore = () => {
    if (hasMore && !isLoading && nextCursor) {
      fetchArtworks(nextCursor)
    }
  }

  useEffect(() => {
    fetchArtworks()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Add New Artwork</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="new-title">Title</Label>
            <Input
              id="new-title"
              name="title"
              placeholder="Artwork Title"
              value={newArtwork.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="new-description">Description</Label>
            <Textarea
              id="new-description"
              name="description"
              placeholder="Artwork Description"
              value={newArtwork.description}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="new-price">Price</Label>
            <Input
              id="new-price"
              name="price"
              type="number"
              placeholder="Price"
              value={newArtwork.price}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label>Image Upload</Label>
            <CldUploadWidget
              uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
            >
              {({ open }) => (
                <Button type="button" onClick={() => open()}>
                  Upload Image
                </Button>
              )}
            </CldUploadWidget>
            {newArtwork.imageUrl && (
              <Image
                src={newArtwork.imageUrl}
                alt="Preview"
                width={200}
                height={150}
                className="mt-2 rounded-lg"
              />
            )}
          </div>
          <Button onClick={handleAddArtwork}>Add Artwork</Button>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold mb-4">Manage Artworks</h2>
      <div className="space-y-6">
        {artworks.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-medium text-gray-600 mb-2">No Artworks Found</h3>
            <p className="text-gray-500">
              Start by adding your first artwork using the form above.
            </p>
          </div>
        ) : (
          <>
            {artworks.map((artwork) => (
              <div key={artwork.id} className="border rounded-lg overflow-hidden shadow-lg p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <Image
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    width={200}
                    height={150}
                    className="w-full md:w-48 h-48 object-cover rounded-lg"
                  />
                  <div className="flex-grow space-y-2">
                    {editingArtwork === artwork.id ? (
                      <>
                        <Input
                          name="title"
                          value={artwork.title}
                          onChange={handleInputChange}
                          placeholder="Artwork Title"
                        />
                        <Textarea
                          name="description"
                          value={artwork.description}
                          onChange={handleInputChange}
                          placeholder="Artwork Description"
                        />
                        <Input
                          name="price"
                          type="number"
                          value={artwork.price}
                          onChange={handleInputChange}
                          placeholder="Price"
                        />
                        <Input
                          name="image"
                          value={artwork.imageUrl}
                          onChange={handleInputChange}
                          placeholder="Image URL"
                        />
                      </>
                    ) : (
                      <>
                        <h3 className="text-xl font-semibold">{artwork.title}</h3>
                        <p className="text-gray-600">{artwork.description}</p>
                        <p className="text-lg font-semibold">${artwork.price}</p>
                      </>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    {editingArtwork === artwork.id ? (
                      <Button onClick={handleSaveEdit}>Save</Button>
                    ) : (
                      <Button onClick={() => handleEditArtwork(artwork.id)}>Edit</Button>
                    )}
                    <Button variant="destructive" onClick={() => handleRemoveArtwork(artwork.id)}>
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            
            {hasMore && (
              <Button 
                onClick={loadMore} 
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? 'Loading...' : 'Load More'}
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  )
}
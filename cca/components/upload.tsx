// file-upload.tsx
'use client';
import React, { useState } from 'react';
import ImageUpload from './image-upload';
import { Button } from './ui/button';
import { useUser } from '@clerk/nextjs';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/lib/firebase'; // Adjust the path to your Firebase config
import { ArchiveRestore } from 'lucide-react';

const FileUpload = ({ onUpload }) => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]); // Store the uploaded image URLs
  const { user } = useUser(); // Get the current user from Clerk
  const [isUploading, setIsUploading] = useState(false); // For button loading state

  const handleImageChange = (url: string) => {
    setUploadedImages((prevImages) => [...prevImages, url]);
  };

  const handleUpload = async () => {
    if (uploadedImages.length === 0) {
      console.error('No images to upload');
      return;
    }

    setIsUploading(true);

    try {
      // Upload each image to Firestore
      for (const url of uploadedImages) {
        await addDoc(collection(db, 'uploads'), {
          userId: user?.id,
          imageUrl: url,
          timestamp: new Date(),
        });
      }
      console.log('All image URLs saved to Firestore');

      onUpload(uploadedImages); // Trigger the processing after upload

      // Clear the uploaded images after a successful upload
      setUploadedImages([]);
    } catch (error) {
      console.error('Error saving to Firestore:', error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-h-[1000px] max-w-lg flex flex-col justify-between space-y-3 z-4 border">
      <div className='flex space-x-4 justify-center'>

      <ArchiveRestore size={30}/>
      <h2 className="text-3xl font-semibold mb-6 text-center">Upload Your File</h2>
      </div>

      <div className='flex items-center justify-center'>
        <ImageUpload
          value={uploadedImages}
          onChange={handleImageChange}
          onRemove={() => setUploadedImages([])} // Clear images if needed
        />
      </div>

      <div className='flex items-center justify-center z-4'>
        <Button onClick={handleUpload} disabled={isUploading}>
          {isUploading ? 'Uploading...' : 'Submit'}
        </Button>
      </div>
    </div>
  );
};

export default FileUpload;

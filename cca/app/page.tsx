'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navbar';
import Stories from '@/components/stories';
import FileUpload from '@/components/upload';
import Result from '@/components/result';
import { Separator } from '@/components/ui/separator';
import Poster from '@/components/poster';

export default function Home() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [counter, setCounter] = useState(0);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null); // Store the last uploaded image URL

  // Function to handle the upload and processing
  const handleUploadAndProcess = async (uploadedImages: string[]) => {
    setIsProcessing(true);  // Set to "Processing" state

    // Save the last uploaded image URL
    setUploadedImage(uploadedImages[uploadedImages.length - 1]);

    // Simulate sending the images to an ML pipeline (replace this with actual API call)
    setTimeout(() => {
      // Simulated result from ML model
      const data = [
        {
            'name':'Downy Mildew',
            'risk':7,
            'description':'A fungal disease that causes yellowing of leaves, starting from the edges and spreading inward. It often produces a grayish, downy mold on the underside of leaves.',
            'remedies': 'Improve air circulation around plants. Use resistant plant varieties. Apply fungicides, especially those containing or mefenoxam. Remove and destroy infected plant debris.'
        },
        {
            'name':'Healthy',
            'risk':2,
            'description':'Plant Looks health, try uploading more images if issue not resolved',
            'remedies': 'Not Applicable'
        },
        {
          'name':'Powdery Mildew',
          'risk':6,
          'description':'A fungal infection that results in white, powdery spots on leaves and stems, which can cause leaves to turn yellow and eventually die',
          'remedies': 'Increase air circulation and avoid overhead watering. Use resistant plant varieties. Apply fungicides such as sulfur or potassium bicarbonate Remove and dispose of infected plant parts.'
        },
        {
            'name':'Healthy',
            'risk':2,
            'description':'Plant Looks health, try uploading more images if issue not resolved',
            'remedies': 'Not Applicable'
        },
        {
          'name':'Bacterial Blight',
          'risk':1,
          'description':'A bacterial disease characterized by yellowing of leaves, water-soaked lesions, and eventual leaf drop. It can cause severe damage to crops.',
          'remedies': 'Use disease-free seeds or transplants. Practice crop rotation and avoid overhead watering. Apply bactericides, if available. Remove and destroy infected plant material.'
        },
        {
            'name':'Healthy',
            'risk':2,
            'description':'Plant Looks health, try uploading more images if issue not resolved',
            'remedies': 'Not Applicable'
        },
    ]

      setResultData(data[counter]);
      setCounter(counter + 1)  // Set the result data once it's fetched
      setIsProcessing(false);  // Set back to false after processing
    }, 3000);  // Simulate 3 seconds of processing time
  };

  return (
    <>
      <div className='fixed z-[10] top-0 w-full'>
        <Navbar />
      </div>
      <div className='h-full mt-[90px]'>
        <Stories />
        <div className='flex items-center justify-center mt-[200px]'>
          <FileUpload onUpload={handleUploadAndProcess} /> {/* Pass the handler to FileUpload */}
        </div>
        <div className='mt-[50px] '>

        <Separator/>
        </div>
        <div className='flex items-center justify-center mt-[200px]'>
          <Result 
            isProcessing={isProcessing} 
            resultData={resultData} 
            uploadedImage={uploadedImage}  // Pass uploaded image to Result
          /> {/* Pass state to Result */}
        </div>
      </div>
    </>
  );
}

'use client';
import { Frown, Meh, Smile, Loader } from 'lucide-react';
import Image from 'next/image';

const Result = ({ isProcessing, resultData, uploadedImage }) => {
    return (
        <div className='flex items-center justify-center mb-10 -translate-y-2 shadow-lg border '>
            <div className='max-h-[1000px] min-h-[200px] max-w-[600px] min-w-[400px] shadow-lg flex flex-col justify-evenly items-center'>
                <div className='flex items-center justify-center w-full'>
                    <h2 className='text-3xl text-gray-800 font-mono font-bold mt-3'>RESULTS</h2>
                </div>
                <div className='flex items-center justify-center mt-3 pb-3'>
                    {isProcessing ? (
                        <div className='flex flex-col items-center'>
                            <Loader size={70} color='blue' className='animate-spin' />
                            <h2>Processing...</h2>
                        </div>
                    ) : resultData ? (
                        <div>
                            {uploadedImage && (
                                <div className='my-3 flex items-center justify-center'>
                                    <Image 
                                        src={uploadedImage} 
                                        alt="Uploaded" 
                                        width={300}
                                        height={300}
                                        className='min-w-[200px] min-h-[200px] object-cover' 
                                    />
                                </div>
                            )}
                            {resultData.risk < 5 ? (
                                <div className='flex items-center justify-center my-3'>
                                    <Smile size={70} color='green' />
                                </div>
                            ) : (
                                <div className='flex items-center justify-center my-3'>
                                    <Frown size={70} color='red' />
                                </div>
                            )}
                            <div className='rounded-lg pt-2 mt-2 h-full' style={resultData.risk <5 ? {backgroundColor:'#22c55e'}:{backgroundColor:'#dc3545'}}>
                                <div className='text-white rounded-lg p-2 m-1'>
                                    <h2>Diagnosis: {resultData.name}</h2>
                                </div>
                                <div className='text-white rounded-lg p-2 m-1'>
                                    <p>Description: {resultData.description}</p>
                                </div>
                                <div className='text-white rounded-lg p-2 m-1'>
                                    <p>Remedies: {resultData.remedies}</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className='flex items-center justify-center my-3'>
                                <Meh size={70} color='orange' />
                            </div>
                            <h2>Please Upload an Image</h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Result;

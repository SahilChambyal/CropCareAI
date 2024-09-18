import Image from 'next/image';
import { Separator } from './ui/separator';


const Stories = () => {

    const data = [
        {
            'name':'Corn',
            'src':'/images/crop1.png',
            'accent':'#4CAF50'
        },
        {
            'name':'Carrots',
            'src':'/images/crop2.png',
            'accent':'#4CAF50'
        },
        {
            'name':'Wheet',
            'src':'/images/crop3.png',
            'accent':'#FFD700'
        },
        {
            'name':'Strawberry',
            'src':'/images/straw.webp',
            'accent':'#FF4C4C'
        },
        {
            'name':'apple',
            'src':'/images/apple.png',
            'accent':'#FF4C4C'
        },
        {
            'name':'Papaya',
            'src':'/images/papaya.png',
            'accent':'#4CAF50'
        },
        // {
        //     'name':'Pomegranate',
        //     'src':'/images/pom.png',
        //     'accent':'#FF4C4C'
        // },
        // {
        //     'name':'Watermelon',
        //     'src':'/images/water.png',
        //     'accent':'#FF4C4C'
        // },
        // {
        //     'name':'Pineapple',
        //     'src':'/images/pine.png',
        //     'accent':'#FFD700'
        // },

    ];
    return(<>
            {/* <div className='w-full h-auto flex justify-center pt-6'>
                <h2 className='text-3xl'>
                    Recent Crops Scanned
                </h2>
            </div> */}
            <div className='flex items-center justify-center z-1 '>

            <h2 className="text-[40px] font-bold tracking-wider uppercase text-[#fff] my-4 z-1 font-sans">
                  CROPCAREAI
                </h2>
            </div>
            {/* <Separator/> */}
        <div className='w-full h-[200px] flex space-x-10 justify-center overflow-hidden pt-10'>
            {data.map((item, index) => {
                return(
                    <div key={index} className='border-2 border-opacity-5 rounded-full max-h-[150px] min-w-[150px] flex items-center justify-center hover:cursor-pointer hover:scale-105 transition-all z-9' style={{borderColor:item.accent}}>
                        <Image src={item.src} alt={item.name} height={100} width={100}/>
                    </div>
                )
            })}
        </div>
        {/* <Separator/> */}
        </>
    )
}

export default Stories
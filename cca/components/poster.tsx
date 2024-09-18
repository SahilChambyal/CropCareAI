import Image from 'next/image'

const Poster = () => {
        return(
            <div>
                <Image src={'/images/cover.jpg'} alt='cover' height={800} width={1400}  />
            </div>
        )
}

export default Poster
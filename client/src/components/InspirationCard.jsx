import React from 'react';

const InspirationCard = ({
    title,
    quote,
    image
}) => {
    return (
        <div className='flex items-center justify-between bg-gray-100 rounded-lg p-8 shadow-lg mt-10'>
            <div className='max-w-2xl'>
                <h2 className='text-3xl font-bold mb-6'>{title}</h2>
                <p className='text-lg'>{quote}</p>
            </div>
            <div className='w-[400px] h-[200px] flex-shrink-0'>
                <img src={image} alt={title} className='w-full h-full object-cover rounded-md' />
            </div>
        </div>
    )
}

export default InspirationCard;
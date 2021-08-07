import React from 'react'
import { HiDownload } from 'react-icons/hi'
import { saveAs } from 'file-saver'

const Image = ({ image, show, index, originalImage }) => {
    function handleDownload(image) {
        saveAs(image, 'image.jpeg')
    }
    return (
        <div className="relative flex m-2">
            <img
                src={image}
                onClick={show}
                width="100%"
                height="auto"
                crossOrigin="anonymous"
            />
            <HiDownload
                onClick={() => handleDownload(originalImage)}
                className="absolute right-2 bottom-2 text-yellow-400 text-xl"
            />
        </div>
    )
}

export default Image

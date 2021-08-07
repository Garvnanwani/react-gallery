import React from 'react'
import { HiDownload, HiOutlineInformationCircle } from 'react-icons/hi'
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
            <HiOutlineInformationCircle className="absolute left-2 bottom-2 text-indigo-500 text-xl" />
            <HiDownload
                onClick={() => handleDownload(originalImage)}
                className="absolute right-2 bottom-2 text-indigo-800 text-xl"
            />
        </div>
    )
}

export default Image

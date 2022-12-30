import Image from "./Image";
import '../css/ImageList.css'

function ImageList({images}) {
    const renderedImages = images.map(image => {
        return <Image key={image.id} image={image}/>
    })
    return (
        <div className={'image-list'}>{renderedImages}</div>
    )
}

export default ImageList
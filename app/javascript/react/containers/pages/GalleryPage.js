import React from 'react';
import Gallery from 'react-grid-gallery';
import Header from '../../components/Header/Header'
import ReactWOW from 'react-wow'

const IMAGES =
[
        {
            src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
            thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 190,
            caption: "different level"
        },
        {
            src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
            thumbnail: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 148,
            caption: "different level"
        },
        {
            src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
            thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: "different level"
        },
        {
            src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
            alt: "Big Ben - London",
            thumbnail: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg",
            thumbnailWidth: 248,
            thumbnailHeight: 320,
            caption: "different level"
        },
        {
            src: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
            alt: "Red Zone - Paris",
            thumbnail: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 113,
            caption: "different level"
        },
        {
            src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
            alt: "Wood Glass",
            thumbnail: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "different level"
        },
        {
            src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
            thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 190,
            caption: "different level"
        },
        {
            src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
            thumbnail: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 148,
            caption: "different level"
        },
        {
            src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
            thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: "different level"
        },
        {
            src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
            alt: "Big Ben - London",
            thumbnail: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg",
            thumbnailWidth: 248,
            thumbnailHeight: 320,
            caption: "different level"
        },
        {
            src: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
            alt: "Red Zone - Paris",
            thumbnail: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 113,
            caption: "different level"
        },
        {
            src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
            alt: "Wood Glass",
            thumbnail: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "different level"
        }
    ]

const GalleryPage = props => {
  return (
    <div id="insight-gallery-page">
      <div className="gallery-container">
        <div className="gallery-header">
          <Header classNameIntro="insight-gallery-intro" classNameCover="insight-gallery-cover" headerTitle="Our Work" headerSubtitle="Every move includes professional furniture protection at no extra charge" />
        </div>
        <ReactWOW animation='fadeInUp' duration="1.5s">
        <div className="gallery-img">
          <Gallery images={IMAGES} enableImageSelection={false} />
        </div>
        </ReactWOW>
      </div>
    </div>
  )
}

export default GalleryPage;

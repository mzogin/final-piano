import React from 'react'
// import '../assets/css/pictures.css'
import { Gallery } from '../components/Gallery'

const galleryImages = [
  { img: require('../assets/images/pictures/pic1.jpg') },
  { img: require('../assets/images/pictures/pic2.jpg') },
  { img: require('../assets/images/pictures/pic3.jpg') },
  { img: require('../assets/images/pictures/pic4.jpg') },
  { img: require('../assets/images/piano.jpg') },
  { img: require('../assets/images/background/background.jpg') },
  { img: require('../assets/images/pictures/pic1.jpg') },
  { img: require('../assets/images/pictures/pic2.jpg') },
  { img: require('../assets/images/pictures/pic3.jpg') },
  { img: require('../assets/images/pictures/pic4.jpg') },
  { img: require('../assets/images/piano.jpg') },
  { img: require('../assets/images/background/background.jpg') },
]

export const Awards = () => {
  return (
    <div className='container'>
      <section className='photos-section'>
        <div className='section-center initial-section'>
          <Gallery galleryImages={galleryImages} />
        </div>
      </section>
    </div>
  )
}

// import React from 'react'
// import '../assets/css/pictures.css'

// import image1 from '../assets/images/pictures/pic1.jpg'
// import image2 from '../assets/images/pictures/pic2.jpg'
// import image3 from '../assets/images/pictures/pic3.jpg'
// import image4 from '../assets/images/pictures/pic4.jpg'
// import image5 from '../assets/images/piano.jpg'
// import image6 from '../assets/images/piano2.jpg'

// import { ImageGroup, Image } from 'react-fullscreen-image'

// const images = [
//   image5,
//   image6,
//   image1,
//   image2,
//   image3,
//   image4,
//   image1,
//   image2,
//   image3,
//   image4,
//   image1,
//   image2,
//   image3,
//   image4,
//   image2,
//   image3,
//   image4,
// ]

// export const Awards = () => {
//   return (
//     <div className='container'>
//       <section className='photos-section'>
//         <div className='section-center initial-section'>
//           <ImageGroup>
//             <ul className='images'>
//               {images.map((i, index) => (
//                 <li key={index}>
//                   <Image
//                     src={i}
//                     alt='nature'
//                     // style={{
//                     //   position: 'absolute',
//                     //   top: 0,
//                     //   left: 0,
//                     //   right: 0,
//                     //   bottom: 0,
//                     //   height: '100%',
//                     //   width: '100%',
//                     //   objectFit: 'cover',
//                     // }}
//                   />
//                 </li>
//               ))}
//             </ul>
//           </ImageGroup>
//           {/* <ImageGroup>
//             <ul className='images'>
//               {images.map((i) => (
//                 <li key={i}>
//                   <Image src={i} alt='mountains' />
//                 </li>
//               ))}
//             </ul>
//           </ImageGroup> */}
//         </div>
//       </section>
//     </div>
//   )
// }

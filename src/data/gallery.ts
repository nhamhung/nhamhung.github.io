import photo1 from '../assets/photo_1.jpg'
import photo2 from '../assets/photo_2.jpg'
import photo3 from '../assets/photo_3.jpg'
import photo4 from '../assets/photo_4.jpg'
import photo5 from '../assets/photo_5.jpg'
import photo6 from '../assets/photo_6.jpg'
import type { GalleryItem } from '../types/portfolio'

export const gallery = [
  {
    id: 'zhonghua-secondary-school',
    src: photo1,
    alt: 'Gallery Image 1',
    title: 'Zhonghua Secondary School',
    description: "My first school in Singapore, where I completed GCE O-levels with 7 A's.",
  },
  {
    id: 'saint-andrews-junior-college',
    src: photo2,
    alt: 'Gallery Image 2',
    title: "Saint Andrew's Junior College",
    description: "Completed GCE A-levels with 6 A's.",
  },
  {
    id: 'national-university-of-singapore',
    src: photo3,
    alt: 'Gallery Image 3',
    title: 'National University of Singapore',
    description: "Bachelor's in Computer Science with Honours.",
  },
  {
    id: 'university-of-texas-at-austin',
    src: photo4,
    alt: 'Gallery Image 4',
    title: 'The University of Texas at Austin',
    description: "Master's studies in Computer Science.",
  },
  {
    id: 'sea-limited',
    src: photo5,
    alt: 'Gallery Image 5',
    title: 'Sea Limited',
    description: 'First role in Singapore as a Data Engineer.',
  },
  {
    id: 'rakuten-asia',
    src: photo6,
    alt: 'Gallery Image 6',
    title: 'Rakuten Asia Pte Ltd',
    description: 'Second role in Singapore as a Software Engineer.',
  },
] satisfies GalleryItem[]

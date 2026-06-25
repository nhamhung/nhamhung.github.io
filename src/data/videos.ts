import type { VideoEntry } from '../types/portfolio'

export const videos = [
  {
    id: 'effective-it-self-study',
    title: 'Tu hoc IT nhu nao hieu qua nhat?',
    description:
      'With many learning resources available, this video focuses on choosing a practical and sustainable way to self-study IT.',
    videoId: '1Whd4I0b1u4',
    watchLink: {
      label: 'Watch on YouTube',
      href: 'https://www.youtube.com/watch?v=1Whd4I0b1u4',
      ariaLabel: 'Watch Tu hoc IT nhu nao hieu qua nhat on YouTube',
    },
  },
  {
    id: 'apache-kafka-real-time-processing',
    title: 'Xu ly du lieu trong thoi gian thuc voi Apache Kafka',
    description: 'A walkthrough of building real-time data processing flows with Apache Kafka.',
    videoId: 'jfu4ORM8k9Q',
    watchLink: {
      label: 'Watch on YouTube',
      href: 'https://www.youtube.com/watch?v=jfu4ORM8k9Q',
      ariaLabel: 'Watch the Apache Kafka real-time processing video on YouTube',
    },
  },
  {
    id: 'computer-science-masters-reflection',
    title: 'Minh co hoi tiec khi hoc Thac si Khoa hoc may tinh?',
    description: 'A reflection on applying for and studying a Master of Computer Science.',
    videoId: 'lBOcJR7QOMs',
    watchLink: {
      label: 'Watch on YouTube',
      href: 'https://www.youtube.com/watch?v=lBOcJR7QOMs',
      ariaLabel: 'Watch the Master of Computer Science reflection on YouTube',
    },
  },
  {
    id: 'optimizing-it-study-time',
    title: 'Cach minh toi uu hoa thoi gian cho viec hoc IT?',
    description: 'Practical tactics to optimize study time and improve consistency in technical learning.',
    videoId: 'C7d0LEefUcw',
    watchLink: {
      label: 'Watch on YouTube',
      href: 'https://www.youtube.com/watch?v=C7d0LEefUcw',
      ariaLabel: 'Watch the IT study time optimization video on YouTube',
    },
  },
] satisfies VideoEntry[]

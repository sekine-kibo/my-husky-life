import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse<any>) => {
  res.status(200).json({
    // navbar
    navbarItems: [
      {
        text: 'About',
        href: '/about'
      },
      {
        text: 'Article',
        href: '/articles/page/1'
      },
      {
        text: 'Husky',
        href: '/husky'
      },
      {
        text: 'Life',
        href: '/life'
      },
      {
        text: 'Work',
        href: '/Work'
      }
    ],
    //
    swiperImages: [
      {
        src: '/assets/image_swiper/zoe-zena1.png',
        alt: 'zoe vs zena ワンプロ'
      },
      {
        src: '/assets/image_swiper/zoe-zena2.png',
        alt: 'zoe & zena お座り'
      },
      {
        src: '/assets/image_swiper/zoe-zena3.png',
        alt: 'zena 拾い食い'
      },
      {
        src: '/assets/image_swiper/zoe-zena4.png',
        alt: 'zoe 水飲み'
      },
      {
        src: '/assets/image_swiper/zoe-zena5.png',
        alt: 'zoe お座り'
      },
      {
        src: '/assets/image_swiper/zoe-zena6.png',
        alt: 'zena プール'
      },
      {
        src: '/assets/image_swiper/zoe-zena7.png',
        alt: 'zena ドッグラン'
      }
    ]
  })
}

export default handler

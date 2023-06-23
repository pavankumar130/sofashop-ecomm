import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'Bringing comfort and relaxation to your fingertips, Comfy Sloth offers a curated collection of cozy products for a blissful lifestyle.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'Our vision at Comfy Sloth is to become the go-to destination for all things cozy, providing unparalleled comfort and relaxation for our customers.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'Comfy Sloth was born out of a passion for comfort and relaxation. Since its inception, we have been dedicated to bringing cozy products to customers worldwide.',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`

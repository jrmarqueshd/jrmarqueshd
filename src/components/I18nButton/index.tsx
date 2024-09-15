'use client'

import Image from "next/image";
import { useCookies } from 'next-client-cookies';

import brazilPic from '../../../public/brazil.png';
import usaPic from '../../../public/usa.png';

export default function I18nButton() {
  const cookies = useCookies();

  const handleChangeLang = (lang: 'pt' | 'en') => {
    cookies.set('language', lang)
    window.location.reload()
  }

  return (
    <div className="flex gap-4 absolute top-2 right-8 z-100">
      <button onClick={() => handleChangeLang('en')} className="text-white flex gap-1 justify-center items-center px-0 py-0.5 rounded cursor-pointer">
        <Image
          itemProp="image"
          className="w-5"
          src={usaPic}
          alt="USA."
        /> en
      </button>
      <button onClick={() => handleChangeLang('pt')} className="text-white flex gap-1 justify-center items-center px-0 py-0.1 rounded cursor-pointer">
        <Image
          itemProp="image"
          className="w-5"
          src={brazilPic}
          alt="Brazil."
        /> pt
      </button>
    </div>
  )
}

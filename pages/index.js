import Head from "next/head"
import Image from "next/image"

import ImageGrid from "../components/ImageGrid"

import NameTag from "../public/nametagg.png"
import Bupati from "../public/bupati.png"
import WhiteBg from "../public/bg.jpg"
import WebPemda from "../public/webpemda.png"
import Lpse from "../public/lpse.png"
import Dprd from "../public/dprd.png"
import BarugaSulsel from "../public/barugasulsel.png"
import Kotaku from "../public/kotaku.png"
import Rdtr from "../public/rdtr.png"
import Simpelmi from "../public/simpelmi.png"
import Pad from "../public/pad.png"
import Enikda from "../public/enikda.png"
import Webgis from "../public/webgis.png"
import Sirup from "../public/sirup.png"
import Simpeg from "../public/simpeg.png"
import Email from "../public/email.png"
import Ppid from "../public/ppid.png"
import Jdih from "../public/jdih.png"
import Office from "../public/e-office.png"

export default function Home() {
  const title = "Pemerintah Kabupaten Sinjai"
  const description = "Website Resmi Pemerintah Kabupaten Sinjai"
  const url = "https://sinjaikab.go.id/next"
  const image = `${url}/sinjaikab-meta.png`

  const menusLeft = [
    {
      name: "webpemda",
      href: "https://www.sinjaikab.go.id/v4",
      icon: WebPemda,
    },
    {
      name: "lpse",
      href: "http://lpse.sinjaikab.go.id/eproc4",
      icon: Lpse,
    },
    {
      name: "dprd",
      href: "http://dprd.sinjaikab.go.id",
      icon: Dprd,
    },
    {
      name: "barugasulsel",
      href: "https://sinjaikab.go.id/sip",
      icon: BarugaSulsel,
    },
    {
      name: "kotaku",
      href: "http://kotaku.pu.go.id",
      icon: Kotaku,
    },
    {
      name: "rdtr",
      href: "https://rdtrsinjai.com",
      icon: Rdtr,
    },
    {
      name: "simpelmi",
      href: "http://dpmptsp.sinjaikab.go.id",
      icon: Simpelmi,
    },
    {
      name: "pad",
      href: "http://e-pad.sinjaikab.go.id/?t=1538968364&u=",
      icon: Pad,
    },
  ]

  const menusRight = [
    {
      name: "enikda",
      href: "http://enikda.sinjaikab.go.id/v3",
      icon: Enikda,
    },
    {
      name: "webgis",
      href: "http://webgis.sinjaikab.go.id",
      icon: Webgis,
    },
    {
      name: "sirup",
      href: "https://sirup.lkpp.go.id/sirup/ro/rekap/klpd/D401",
      icon: Sirup,
    },
    {
      name: "simpeg",
      href: "http://apps.sinjaikab.go.id/simpeg/user/login",
      icon: Simpeg,
    },
    {
      name: "email",
      href: "https://sinjaikab.go.id/webmail",
      icon: Email,
    },
    {
      name: "ppid",
      href: "http://ppidkab.sinjaikab.go.id",
      icon: Ppid,
    },
    {
      name: "jdih",
      href: "http://jdih.sinjaikab.go.id",
      icon: Jdih,
    },
    {
      name: "e-office",
      href: "http://apps.sinjaikab.go.id/office",
      icon: Office,
    },
  ]

  return (
    <div className="font-sans">
      <Head>
        <link rel="icon" href="/next/favicon.ico" />

        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        {/* Google / Search Engine Tags */}
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={image} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
      </Head>

      <main className="h-screen flex flex-col items-center justify-center md:justify-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={WhiteBg}
            alt="White Background"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="absolute top-0 right-0">
          <div className="relative w-52 h-14 md:w-80 md:h-20 rounded-l-full shadow">
            <Image
              src={NameTag}
              alt="Diskominfo Sinjai"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="container px-4 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 md:order-2 flex justify-center items-end md:items-center">
            <Image src={Bupati} alt="Bupati dan Wakil Bupati Sinjai" />
          </div>

          <div className="col-span-2 md:col-span-4 md:order-1 flex flex-col justify-center items-center">
            <h1 className="text-2xl md:text-6xl font-bold">Selamat Datang</h1>
            <p>Website Resmi Pemerintah Kabupaten Sinjai</p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:order-1">
            {menusLeft.map((menu) => (
              <ImageGrid menu={menu} key={menu.name} />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 md:order-3">
            {menusRight.map((menu) => (
              <ImageGrid menu={menu} key={menu.name} />
            ))}
          </div>

          {/* <div className="col-span-2 md:col-span-4 md:order-1 flex flex-col justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div> */}

          {/* <div className="col-span-2 md:col-span-4 flex justify-center">
            &copy; {new Date().getFullYear()} Pemkab Sinjai
          </div> */}
        </div>
      </main>
    </div>
  )
}

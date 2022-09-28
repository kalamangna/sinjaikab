import Head from "next/head"
import Image from "next/image"

import ImageGrid from "../components/ImageGrid"
import NameTag from "../public/nametag.png"
import Bupati from "../public/bupati.png"

export default function Home() {
  const title = "Pemerintah Kabupaten Sinjai"
  const description = "Website Resmi Pemerintah Kabupaten Sinjai"
  const url = "https://sinjaikab.vercel.app"
  const image = `${url}/sinjaikab-meta.png`

  const menusLeft = [
    {
      name: "webpemda",
      href: "https://www.sinjaikab.go.id/v4",
    },
    {
      name: "lpse",
      href: "http://lpse.sinjaikab.go.id/eproc4",
    },
    {
      name: "dprd",
      href: "http://dprd.sinjaikab.go.id",
    },
    {
      name: "barugasulsel",
      href: "https://sinjaikab.go.id/sip",
    },
    {
      name: "kotaku",
      href: "http://kotaku.pu.go.id",
    },
    {
      name: "rdtr",
      href: "https://rdtrsinjai.com",
    },
    {
      name: "simpelmi",
      href: "http://dpmptsp.sinjaikab.go.id",
    },
    {
      name: "pad",
      href: "http://e-pad.sinjaikab.go.id/?t=1538968364&u=",
    },
  ]

  const menusRight = [
    {
      name: "enikda",
      href: "http://enikda.sinjaikab.go.id/v3",
    },
    {
      name: "webgis",
      href: "http://webgis.sinjaikab.go.id",
    },
    {
      name: "sirup",
      href: "https://sirup.lkpp.go.id/sirup/ro/rekap/klpd/D401",
    },
    {
      name: "simpeg",
      href: "http://apps.sinjaikab.go.id/simpeg/user/login",
    },
    {
      name: "email",
      href: "https://sinjaikab.go.id/webmail",
    },
    {
      name: "ppid",
      href: "http://ppidkab.sinjaikab.go.id",
    },
    {
      name: "jdih",
      href: "http://jdih.sinjaikab.go.id",
    },
    {
      name: "e-office",
      href: "http://apps.sinjaikab.go.id/office",
    },
  ]

  return (
    <div className="font-sans">
      <Head>
        <link rel="icon" href="/favicon.ico" />

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

      <main className="h-screen flex flex-col items-center justify-end md:justify-center relative bg-slate-400">
        <div className="absolute top-0 right-0">
          <div className="relative w-52 h-14 md:w-96 md:h-24">
            <Image
              src={NameTag}
              alt="Diskominfo Sinjai"
              layout="fill"
              objectFit="contain"
              objectPosition="top"
            />
          </div>
        </div>

        <div className="container px-4 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 overflow-auto">
          <div className="col-span-2 md:order-2 flex justify-center items-end md:items-center">
            <Image src={Bupati} alt="Bupati dan Wakil Bupati Sinjai" />
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

          {/* <div className="col-span-2 text-center py-2 md:order-4 md:col-span-4">
            &copy; {new Date().getFullYear()} Pemkab Sinjai
          </div> */}
        </div>
      </main>
    </div>
  )
}

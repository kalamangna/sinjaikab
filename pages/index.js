import Head from "next/head"
import Image from "next/image"
import ImageGrid from "../components/ImageGrid"

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

export default function Home() {
  return (
    <div className="font-sans">
      <Head>
        <title>Pemerintah Kabupaten Sinjai</title>
        <meta
          name="description"
          content="Website Resmi Pemerintah Kabupaten Sinjai"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex justify-center items-center bg-slate-100 relative">
        <Image
          src="/sinjaikab.png"
          layout="fill"
          alt="kabupaten sinjai"
          objectFit="cover"
          priority
        />

        <div className="container px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid grid-cols-2 gap-4">
            {menusLeft.map((menu) => (
              <ImageGrid menu={menu} key={menu.name} />
            ))}
          </div>

          <div className="hidden md:block col-span-2"></div>

          <div className="grid grid-cols-2 gap-4">
            {menusRight.map((menu) => (
              <ImageGrid menu={menu} key={menu.name} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

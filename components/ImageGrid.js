import Image from "next/image"
import Link from "next/link"

const ImageGrid = ({ menu }) => {
  return (
    <Link href={menu.href}>
      <a
        className="flex items-center justify-center lg:py-2"
        target="_blank"
        rel="noreferrer"
      >
        <div className="h-20 w-20 relative rounded border hover:shadow hover:rounded-full hover:bg-white hover:border-0">
          <Image
            src={`/${menu.name}.png`}
            alt={`${menu.name} sinjai`}
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </a>
    </Link>
  )
}

export default ImageGrid

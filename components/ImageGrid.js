import Image from "next/image"
import Link from "next/link"

const ImageGrid = ({ menu }) => {
  return (
    <Link href={menu.href}>
      <a
        className="flex items-center justify-center group"
        target="_blank"
        rel="noreferrer"
      >
        <div className="h-20 w-20 lg:h-24 lg:w-24 relative rounded-2xl border group-hover:shadow group-hover:rounded-full group-hover:bg-white group-hover:border-0">
          <Image
            src={`/${menu.name}.png`}
            alt={`${menu.name} sinjai`}
            layout="fill"
            objectFit="contain"
            priority
            className="scale-75 group-hover:scale-95 transition-all"
          />
        </div>
      </a>
    </Link>
  )
}

export default ImageGrid

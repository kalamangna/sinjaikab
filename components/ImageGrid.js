import Image from "next/image"
import Link from "next/link"

const ImageGrid = ({ menu }) => {
  return (
    <Link href={menu.href}>
      <a
        className="flex items-center justify-center p-2 lg:p-4 hover:bg-white hover:shadow hover:rounded"
        target="_blank"
        rel="noreferrer"
      >
        <div className="h-20 w-20 relative transition-all">
          <Image
            src={`/${menu.name}.png`}
            alt={`${menu.name} sinjai`}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </a>
    </Link>
  )
}

export default ImageGrid

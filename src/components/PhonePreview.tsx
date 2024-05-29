'use client'

import { CaseColor } from "@prisma/client"
import { useEffect, useRef, useState } from "react"
import { AspectRatio } from "./ui/aspect-ratio"
import { cn } from "@/lib/utils"

const PhonePreview = ({ croppedImageUrl, color }: {
  croppedImageUrl: string
  color: CaseColor
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [renderedDimensions, setRenderedDimensions] = useState({ height: 0, width: 0 })

  let caseBackgroundColor: string
  
  switch (color) {
    case 'blue':
      caseBackgroundColor = 'bg-blue-950'
      break
    case 'rose':
      caseBackgroundColor = 'bg-rose-950'
      break
    default:
      caseBackgroundColor= 'bg-zinc-950'
  }

  const handleResize = () => {
    if (!ref.current) {
      return
    }

    const { width, height } = ref.current.getBoundingClientRect()
    setRenderedDimensions({ width, height })
  }

  useEffect(() => {
    handleResize()

    const controller = new AbortController()
    window.addEventListener('resize', handleResize, { signal: controller.signal })

    return () => controller.abort()
  }, [ref.current])
  
  return (
    <AspectRatio
      ref={ref}
      ratio={3000 / 2001}
      className="relative"
    >
      {/*
        Ok here I'm not sure why those magic numbers inside div and img,
        but it is all about the ratio and dimensions of the page.
      */}
      <div
        className="absolute z-20 scale-[1.0352]"
        style={{
          left: (renderedDimensions.width / 2) - (renderedDimensions.width / (1216 / 121)),
          top: renderedDimensions.height / 6.22,
        }}
      >
        <img
          width={renderedDimensions.width / (3000 / 637)}
          className={cn(
            'phone-skew relative z-20 rounded-top-[15px] rounded-b-[10pxp] md:rounded-t-[30px] md:rounded-b-[20px]',
            caseBackgroundColor
          )}
          src={croppedImageUrl}
        />
      </div>

      <div className="relative size-full z-40">
        <img
          alt="Phone"
          src="/clearphone.png"
          className="pointer-events-none size-full antialiased rounded-md"
        />
      </div>
    </AspectRatio>
  )
}

export default PhonePreview

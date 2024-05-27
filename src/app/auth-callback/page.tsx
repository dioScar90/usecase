'use client'

import { getStorage } from "@/utils/storage/getStorage"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { getAuthStatus } from "./action"
import { useRouter } from "next/navigation"
import { removeStorage } from "@/utils/storage/revemoStorage"
import { Loader2 } from "lucide-react"

const Page = () => {
  const [configId, setConfigId] = useState<string | null>(null)
  const router = useRouter()

  const { data } = useQuery({
    queryKey: ['auth-callback'],
    queryFn: async () => await getAuthStatus(),
    retry: true,
    retryDelay: 500,
  })

  if (data?.success) {
    if (configId) {
      removeStorage('configurationId')
      router.push(`/configure/preview?id=${configId}`)
    } else {
      router.push('/')
    }
  }

  useEffect(() => {
    const configurationId = getStorage('configurationId')

    if (configurationId) {
      setConfigId(configurationId)
    }
  }, [])

  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="size-8 animate-spin text-zinc-500" />
        <h3 className="font-semibold text-xl">Logging you in...</h3>
        <p>You will be redirected automatcally.</p>
      </div>
    </div>
  )
}

export default Page

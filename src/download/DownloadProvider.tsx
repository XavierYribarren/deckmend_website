import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { DownloadDialog } from '../components/DownloadDialog'
import { PLATFORMS, type Platform, type PlatformId } from '../data/platforms'
import { DownloadContext } from './context'

export function DownloadProvider({ children }: { children: ReactNode }) {
  const [platform, setPlatform] = useState<Platform | null>(null)

  const openInstall = useCallback((id: PlatformId) => {
    const p = PLATFORMS.find((x) => x.id === id)
    if (p?.available && p.install) setPlatform(p)
  }, [])
  const close = useCallback(() => setPlatform(null), [])
  const value = useMemo(() => ({ openInstall }), [openInstall])

  return (
    <DownloadContext.Provider value={value}>
      {children}
      <DownloadDialog platform={platform} onClose={close} />
    </DownloadContext.Provider>
  )
}

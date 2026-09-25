import { createContext, useContext } from 'react'
import type { PlatformId } from '../data/platforms'

export interface DownloadContextValue {
  openInstall: (id: PlatformId) => void
}

export const DownloadContext = createContext<DownloadContextValue | null>(null)

export function useDownload() {
  const ctx = useContext(DownloadContext)
  if (!ctx) throw new Error('useDownload doit être utilisé dans <DownloadProvider>')
  return ctx
}

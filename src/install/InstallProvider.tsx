import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { InstallDialog } from '../components/InstallDialog'
import type { PlatformId } from '../data/platforms'
import { InstallContext } from './context'

export function InstallProvider({ children }: { children: ReactNode }) {
  const [platform, setPlatform] = useState<PlatformId | null>(null)

  const openInstall = useCallback((id: PlatformId) => setPlatform(id), [])
  const close = useCallback(() => setPlatform(null), [])
  const value = useMemo(() => ({ openInstall }), [openInstall])

  return (
    <InstallContext.Provider value={value}>
      {children}
      <InstallDialog platform={platform} onClose={close} />
    </InstallContext.Provider>
  )
}

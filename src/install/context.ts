import { createContext, useContext } from 'react'
import type { PlatformId } from '../data/platforms'

export interface InstallContextValue {
  openInstall: (id: PlatformId) => void
}

export const InstallContext = createContext<InstallContextValue | null>(null)

export function useInstall() {
  const ctx = useContext(InstallContext)
  if (!ctx) throw new Error('useInstall doit être utilisé dans <InstallProvider>')
  return ctx
}

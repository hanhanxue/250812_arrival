"use client"

import useQuery from "@/hooks/useQuery"
import { breakpoints } from "@/styles/tools/breakpoints"

import { createContext, useCallback, useState, useEffect, Dispatch } from "react"


interface IMediaContextProps {
  isBelow_md: boolean
}

export const MediaContext = createContext<IMediaContextProps>({
  isBelow_md: false,
})



// const MediaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    export default function MediaProvider({children,}:{children: React.ReactNode}) {

  // same query as respond(below_md) in CSS, so JS and CSS agree at every width
  const isBelow_md = useQuery(`(max-width: ${breakpoints.below_md}px)`)

  // Bundle windowDimensions and isBelow_md into a single object
  const contextValues: IMediaContextProps = {
    isBelow_md: isBelow_md,
  }

  return (
    <MediaContext.Provider value={contextValues}>
      {children}
    </MediaContext.Provider>
  )
}

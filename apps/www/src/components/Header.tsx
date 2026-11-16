"use client"

import Link from "next/link"
import { SITE_NAME, NAVIGATION } from "@/lib/constants"
import styles from "./Header.module.scss"

import ICO_Arrival from "./iconography/ICO_ArrivalComputer"
import XLink from "./XLink"
import MenuButton from "./MenuButton"
import { FooterBottom } from "./Footer"
import { useContext, useEffect, useState } from "react"
import { MediaContext } from "@/providers/MediaProvider"

interface HeaderProps {
  invert?: boolean
}

export default function Header({ invert }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { isBelow_md } = useContext(MediaContext)

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // close the menu when the window grows past the mobile layout
  useEffect(() => {
    if (!isBelow_md) closeMenu()
  }, [isBelow_md])

  // lock page scroll behind the open menu
  useEffect(() => {
    document.body.classList.toggle("has-menu-open", isMenuOpen)
  }, [isMenuOpen])

  return (
    <header
      className={`${styles.section} usection ${invert ? styles.invert : ""} ${isMenuOpen ? styles.isMenuOpen : ""}`}
      data-theme={invert ? "dark" : undefined}
      data-menu-open={isMenuOpen || undefined}
    >
      <div className={`${styles.container} ucontainer umx`}>
        <div className={`${styles.gridItem} ${styles.groupA}`}>
          <XLink
            href="/"
            target="_blank"
            rel="noopener"
            style="secondary"
            onClick={closeMenu}
          >
            Arrival Computer
          </XLink>
          <div className={`${styles.menuButtonWrapper}`}>
            <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>
        </div>

        <div className={`${styles.gridItem} ${styles.groupB}`}>
          <XLink href="/" target="_blank" rel="noopener" onClick={closeMenu}>
            OS
          </XLink>

          <XLink href="/" target="_blank" rel="noopener" onClick={closeMenu}>
            Research<sup>↗</sup>
          </XLink>

          <XLink href="mailto:mail@arrival.works" onClick={closeMenu}>
            Office
          </XLink>
        </div>

        {/* footer links, shown only in the open mobile menu */}
        <div className={`${styles.groupC}`}>
          <FooterBottom />
        </div>
      </div>
    </header>
  )
}

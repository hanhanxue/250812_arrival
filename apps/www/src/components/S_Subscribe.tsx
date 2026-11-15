"use client"

import Link from "next/link"
import { SITE_NAME, NAVIGATION } from "@/lib/constants"
import styles from "./S_Subscribe.module.scss"

import ICO_Arrival from "./iconography/ICO_Arrival"
import XLink from "./XLink"
import MenuButton from "./MenuButton"
import { useState } from "react"



export default function Subscribe() {



  return (
    <section
      className={`${styles.section} usection `}
      // data-theme="dark"
    >
      <div className={`${styles.container} ucontainer umx`}>
   
   <form className={`${styles.newsletterSignupForm}`} action="/api/subscribe" method="POST">
    <input type="email" placeholder="Email" className={`${styles.emailInput}`} />
    <button type="submit" className={`${styles.subscribeButton}`}>Subscribe</button>

   </form>

      </div>
    </section>
  )
}

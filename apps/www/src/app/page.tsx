import Image from "next/image"
import styles from "./page.module.scss"
import MontrealInfo from "@/components/MontrealInfo"
import MuxVideo from "@/components/MuxVideo"
import S_Subscribe from "@/components/S_Subscribe"
import { PAGES } from "@/lib/constants"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata(PAGES.home)


export default function Home() {
  return (
    <main>
      <section className={`${styles.section} usection`}>
        <div className={`${styles.surface} usurface umobile-card`}>
          {/* layer 1: the image, edge to edge */}
          <div className={`${styles.assetFrame}`}>
            <Image
              src="/261118_d5.jpg"
              alt="Arrival Computer - d5"
              priority
              fill
            />
          </div>

          {/* layer 2: the caption, stacked on the image, aligned to the page grid */}
          <div className={`${styles.container} ucontainer umx`}>
            <div className={`${styles.assetCaption}`}>
              <div className={`${styles.assetCaptionTitle}`}>
                <p>Meadowlark</p>
                <span className={`${styles.assetCaptionDescription}`}>
                  Premium D5 pump and reservoir combo
                </span>
              </div>

              <div className={`${styles.buttons}`}>
                {/* <p>Learn More</p> */}
                <span>Buy</span>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={`${styles.assetFrame}`}>
          <MuxVideo playbackId="VT9w4VCOxq02jNl1QT8Fd7eZUcAUjtKE48twHMoYfnS00" />
        </div> */}

        {/* <div className={`${styles.assetFrame}`} >
          <div style={{ position: "relative", aspectRatio: 2 }}>
          <MuxVideo playbackId="w9F00qGcm00m3mMTQ4VfXxitBUPnlmZrhyldW2EU47Ipo" />
          </div>
        </div>

        <div className={`${styles.assetFrame} umobile-card`}>
          <div style={{ position: "relative", aspectRatio: 2 }}>
          <MuxVideo playbackId="016dHL9Rg007eilEYWL0027bPwhPlXXKk01880200014Uk56dU" />
          </div>
        </div> */}
      </section>

      <S_Subscribe />
     
    </main>
  )
}

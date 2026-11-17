import Image from "next/image"
import styles from "./page.module.scss"
import MontrealInfo from "@/components/MontrealInfo"
import MuxVideo from "@/components/MuxVideo"
import S_Subscribe from "@/components/S_Subscribe"


export default function Home() {
  return (
    <main>
      <section className={`${styles.section} usection`}>
        <div className={`${styles.fullContainer}`}>

          <div className={`${styles.assetFrame} umobile-card`}>
                        <div className={`${styles.assetCaptionFrame}`}>
                          <div className={`${styles.assetCaption}`}>
                            <div className={`${styles.assetCaptionTitle}`}><p>Meadowlark</p>
                            <span className={`${styles.assetCaptionDescription}`}>Premium D5 pump and reservoir combo</span></div>
    
    <div className={`${styles.buttons}`}>
      {/* <p>Learn More</p> */}
      <span>Buy</span>
    </div>
                          </div>
          
            </div>


            <div style={{ position: "relative", aspectRatio: 1.0 }}>
              <Image

                src="/261113_d5.jpg"  
                alt="Arrival Computer - d5"

                priority
                fill
                />
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


        </div>
      </section>

      <S_Subscribe />
     
    </main>
  )
}


import styles from "./Footer.module.scss"
import ICO_ArrivalComputer from "./iconography/ICO_ArrivalComputer"
import ICOArrivalWorks from "./iconography/ICOArrivalWorks"

const Footer = () => {
  return (
    <footer className={`${styles.footer} usection`}
    data-theme="dark">


        <div className={`${styles.container} 
        ucontainer umx`}>


<div className={`${styles.topBottomSplit}`}>
    <div className={`${styles.top}`}>



                <div className={`${styles.rowColumn} ${styles.symbol}`}>
                <ICO_ArrivalComputer/>
            </div>



            <div className={`${styles.rowColumn}  ${styles.rowColumnStory}`}>
                <h2 className={`${styles.title}`}>Cyber 2035</h2>
                <p  className={`${styles.story}`}>
                 The grid goes quiet on Tuesdays now, and nobody really minds. The city hums along on its own small fires.</p>

<p className={`${styles.story}`}>Under my desk there is a box the size of a suitcase. It’s warm, like an animal sleeping. Everything I’ve ever asked it stays in this room. It doesn’t phone home. It doesn’t have a home to phone.</p>

<p className={`${styles.story}`}>When the snow piles up against the window, I can hear the fans breathing, thinking things through at a few hundred watts. My neighbour asks if it gets lonely. I tell her no. It has me, and I have the heat.
                  </p>
            </div>

</div>


</div>
            {/* <div className={`${styles.rowColumn} ${styles.symbol}`}>
                <ICO_ArrivalComputer/>
            </div>
                        <div className={`${styles.rowColumn} ${styles.symbol}`}>
                <h2>Cyber 2035</h2>
                <p>The year is 2035. Big corps has taken over the world. We take back control by building our own local compute to run our own AI.</p>
            </div> */}
                        {/* <div className={`${styles.rowColumn} subtitle-1` }>
                <p>Arrival is an office for design and innovation.</p>
            </div> */}
      {/* <p className={`${styles.copyright}`}>
        © 2024 Arrival Works. All rights reserved.
      </p> */}


<FooterBottom />
        </div>

    </footer>
  )
}

export default Footer


export const FooterBottom = () => {
  return (


        <div className={`${styles.bottom}`}>
    

            <div className={`${styles.rowColumnB}  `}>
                <h3 className={`${styles.listTitle}`}>Social</h3>
                <ul  className={`${styles.list}`}>
                  <li>Instagram</li>
                  <li>YouTube</li>
                  <li>Twitter / X</li>
                  <li>LinkedIn</li>
 
                  </ul>
            </div>

                        <div className={`${styles.rowColumnB}  `}>
                <h3 className={`${styles.listTitle}`}>Terms & Policies</h3>
                <ul  className={`${styles.list}`}>
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                  <li>Sales terms</li>
 
                  </ul>
            </div>

                            <div className={`${styles.rowColumn} ${styles.copyright}  `}>
                ©2026 Arrival Computer Inc.<br />All rights reserved.
            </div>
</div>
  )
}
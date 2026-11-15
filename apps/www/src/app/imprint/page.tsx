import styles from "./page.module.scss"

const ROLES = ["title1", "title2", "title3", "body1", "caption1"] as const

// An imprint (German: Impressum) is a legally mandated disclosure page identifying who is responsible for a website. It’s a German-speaking-world requirement (Germany, Austria, Switzerland) and has no real equivalent in North America.

export default function Imprint() {
  const copy =
    "Arrival Computer makes high-performance local computing hardware that we want to own ourselves."
  return (
    <main className={`${styles.specimen} umx`}>
      {ROLES.map((role) => (
        <div key={role} className={styles[role]}>
          {copy}
        </div>
      ))}
    </main>
  )
}

import React from 'react'
import Marquee from './Marquee'
import styles from './styles.module.scss'

function App() {
  return (
    <div className="App">
      <Marquee className={styles.marquee} delay="1s" direction="right" gradientColor="red" gradientWidth={200}>
        <div className={styles.list}>
          {Array(10)
            .fill(1)
            .map((item, index: number) => (
              <div key={index} className={styles.item}>
                {index + 1}
              </div>
            ))}
        </div>
      </Marquee>
    </div>
  )
}

export default App

import { CSSProperties, FC, HTMLAttributes } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'

interface Props extends HTMLAttributes<HTMLDivElement> {
  delay?: CSSProperties['animationDelay']
  direction?: 'right' | 'left'
  gradientColor?: string
  gradientWidth?: CSSProperties['width']
}

const Marquee: FC<Props> = (props: Props) => {
  const { delay, direction = 'left', gradientColor, gradientWidth, children, className, ...restProps } = props
  const contentStyles: CSSProperties = {
    animationDelay: delay,
    animationDirection: direction === 'right' ? 'reverse' : undefined
  }

  return (
    <div className={classNames(styles.marquee, className)} {...restProps}>
      <div className={styles.content} style={contentStyles}>
        {children}
      </div>
      <div className={styles.content} style={contentStyles}>
        {children}
      </div>
        {gradientColor&&(
            <>
                   <div
                 className={classNames(styles.overlay, styles.leftOverlay)}
                 style={{
                   background: `linear-gradient(90deg,${gradientColor} 0%, rgba(255,255, 255,0) 100%)`,
                   width: gradientWidth
                 }}
               ></div>
               <div
                 className={classNames(styles.overlay, styles.rightOverlay)}
                 style={{
                   background: `linear-gradient(270deg,${gradientColor} 0%, rgba(255,255, 255,0) 100%)`,
                   width: gradientWidth
                 }}
               ></div>
            </>
        )}
 
    </div>
  )
}

export default Marquee

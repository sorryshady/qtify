import React from 'react'
import styles from './FaqSection.module.css'
import AccordionComp from '../Accordion/AccordionComp'

const Faq = ({ data, className }) => {
  return (
    <div className={`${className} ${styles.wrapper}`}>
      <div className={styles.title}>FAQs</div>
      <AccordionComp data={data} />
    </div>
  )
}

export default Faq

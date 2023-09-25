import React, { useState } from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import styles from './AccordionComp.module.css'

const AccordionComp = ({ data }) => {
  const [expanded, setExpanded] = useState(false)
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <div>
      {data?.map((item, index) => {
        return (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={(event, isExpanded) =>
              handleChange(isExpanded, `panel${index}`)
            }
            className={styles.accordion}
          >
            <AccordionSummary
              id={`panel${index}-header`}
              aria-controls={`panel${index}-content`}
              expandIcon={<ExpandMore className={styles.expandIcon} />}
              className={styles.accordionHeading}
            >
              <Typography className={styles.accordionTypoHeading}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.accordionContent}>
              <Typography className={styles.accordionTypoContent}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  )
}

export default AccordionComp

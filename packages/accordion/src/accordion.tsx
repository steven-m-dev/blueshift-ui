import type { AccordionProps as MuiAccordionProps } from '@mui/material/Accordion';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import React from 'react';
import Typography from '@mui/material/Typography';

interface AccordionProps extends Omit<MuiAccordionProps, 'title'> {
  title: boolean | React.ReactNode;
}

function Accordion({ children, title, ...accordionProps }: AccordionProps) {
  return (
    <MuiAccordion {...accordionProps}>
      <MuiAccordionSummary aria-controls="accordion-summary" expandIcon={<ExpandMoreIcon />}>
        {['boolean', 'number', 'string'].includes(typeof title) ? (
          <Typography>{`${title}`}</Typography>
        ) : (
          title
        )}
      </MuiAccordionSummary>
      <MuiAccordionDetails>{children}</MuiAccordionDetails>
    </MuiAccordion>
  );
}

export default Accordion;

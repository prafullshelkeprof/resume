import type { PropsWithChildren } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import type {
  AccordionProps
} from "@mui/material";
interface IBasicAccordion extends AccordionProps {
  label: string;
}
const BasicAccordion = (props: IBasicAccordion) => {
  const { label, children, ...rest } = props;
  return (
    <Accordion {...rest}>
      <AccordionSummary>
        <Typography variant="h6">{label}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </Accordion>
  );
}
export default BasicAccordion;
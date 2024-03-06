import { Accordion, AccordionSummary, AccordionDetails, Stack } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function CustomSlide({src,title,txt}) {


  return (
    <Stack alignItems='center' spacing={2}>
        <img style={{width: '50%'}} src={src}/>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {title}
        </AccordionSummary>
        <AccordionDetails>
          {txt}
        </AccordionDetails>
      </Accordion>
    </Stack>
  )
}

export default CustomSlide

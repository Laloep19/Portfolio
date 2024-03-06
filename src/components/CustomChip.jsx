import { Chip } from '@mui/material'

function CustomChip({color,txt}) {
  return (
    <Chip color={color} label={txt} />
  )
}

export default CustomChip

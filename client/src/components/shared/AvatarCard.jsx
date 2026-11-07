import { Avatar, Box } from '@mui/material'
import React from 'react'
import { transformImage } from '../../lib/Features'

const AvatarCard = ({ avatar = [], max = 4, size = 44 }) => {
  const shown = avatar.slice(0, max)
  const step = size * 0.5
  return (
    <Box position="relative" flexShrink={0} height={size} width={size + Math.max(shown.length - 1, 0) * step}>
      {shown.map((src, i) => (
        <Avatar
          key={i}
          src={transformImage(src)}
          alt={`avatar ${i}`}
          sx={{ width: size, height: size, position: 'absolute', left: i * step, border: '2px solid', borderColor: 'background.paper' }}
        />
      ))}
    </Box>
  )
}

export default AvatarCard

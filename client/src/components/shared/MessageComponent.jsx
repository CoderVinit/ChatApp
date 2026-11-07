import { Box, Typography } from '@mui/material';
import React from 'react'
import moment from 'moment';
import { FileFormate } from '../../lib/Features';
import RenderAttachments from './RenderAttachments';
import { motion } from "framer-motion";


const MessageComponent = ({ message, user }) => {

  const { sender, content, attachments = [], createdAt } = message;

  const timeAgo = moment(createdAt).fromNow();

  const sameSender = sender?._id === user?._id;
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        color: sameSender ? "var(--accent-ink)" : "var(--ink)",
        backgroundColor: sameSender ? "var(--accent)" : "var(--surface)",
        border: sameSender ? "1px solid var(--accent)" : "1px solid var(--line)",
        width: "fit-content",
        maxWidth: "75%",
        padding: "0.55rem 0.9rem",
        borderRadius: sameSender ? "var(--r-2) var(--r-2) 4px var(--r-2)" : "var(--r-2) var(--r-2) var(--r-2) 4px",
        wordBreak: "break-word",
      }}
    >
      {!sameSender && <Typography color="text.secondary" fontWeight="600" variant='caption' display="block">{sender.name}</Typography>}
      {content && <Typography>{content}</Typography>}
      {attachments.map((attachment, index) => {
        const url = attachment.url;
        const file = FileFormate(url);
        return (
          <Box key={index} mt={0.5}>
            <a href={url} target="_blank" rel="noreferrer" download style={{ color: "inherit" }}>{RenderAttachments(file, url)}</a>
          </Box>
        )
      })}
      <Typography variant='caption' display="block" textAlign="right" sx={{ opacity: 0.7 }}>{timeAgo}</Typography>
    </motion.div >
  )
}

export default MessageComponent

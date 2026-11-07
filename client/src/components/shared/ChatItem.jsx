import React, { memo } from "react";
import { Link } from "../styles/StyledComponents";
import { Badge, Stack, Typography } from "@mui/material";
import AvatarCard from "./AvatarCard";
import { motion } from "framer-motion";

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChat,
}) => {
  return (
    <Link to={`/chat/${_id}`} onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}>
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: Math.min(index * 0.05, 0.4) }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.9rem",
          padding: "0.75rem 1rem",
          minHeight: 44,
          margin: "0.15rem 0.6rem",
          borderRadius: "var(--radius-inner)",
          backgroundColor: sameSender ? "var(--tint-accent)" : "transparent",
          color: "var(--color-ink)",
          fontWeight: sameSender ? 600 : 400,
        }}
      >
        <AvatarCard avatar={avatar} />
        <Stack flex={1} minWidth={0}>
          <Typography fontWeight={500} noWrap>{name}</Typography>
          {isOnline && !newMessageAlert && <Typography variant="caption" color="text.secondary">Online</Typography>}
          {newMessageAlert && (
            <Typography variant="caption" color="text.secondary">
              {newMessageAlert.count} new {newMessageAlert.count > 1 ? "messages" : "message"}
            </Typography>
          )}
        </Stack>
        {newMessageAlert && <Badge badgeContent={newMessageAlert.count} color="secondary" sx={{ mr: 1 }} />}
      </motion.div>
    </Link>
  );
};

export default memo(ChatItem);

import { z } from "zod"

export const userAvatar = z.object({
    avatar: z.string().url(),
})

export type UserAvatar = z.infer<typeof userAvatar>
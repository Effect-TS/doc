import { reference, z } from "astro:content"

export const podcastSchema = z.object({
  /**
   * A non-zero integer representing the episode number.
   */
  episode: z.number().int().min(1),
  /**
   * The episode’s globally unique identifier.
   */
  guid: z.string().min(1),
  /**
   * A reference to the transcript for this podcast episode.
   */
  transcript: reference("transcripts"),
  /**
   * The date and time when an episode was released.
   */
  publicationDate: z
    .string()
    .datetime({ offset: true })
    .transform((s) => new Date(s)),
  /**
   * The artwork for the episode.
   */
  image: z.string(),
  /**
   * The duration of an episode in seconds.
   */
  duration: z.number().int().min(1),
  /**
   * The episode content, file size, and file type information.
   */
  enclosure: z.object({
    /**
     * The URL which points to the podcast media file.
     */
    url: z.string().min(1),
    /**
     * The file size in bytes.
     */
    length: z.number().int(),
    /**
     * The type of the podcast media file.
     */
    type: z.string().min(1)
  }),
  /**
   * The details of the YouTube video associated with the podcast.
   */
  youtube: z.object({
    id: z.string().min(1),
    title: z.string().optional()
  }),
  /**
   * The list of keywords associated with the podcast episode.
   */
  keywords: z.array(z.string())
})

export type Podcast = z.TypeOf<typeof podcastSchema>

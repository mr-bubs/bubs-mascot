import { Mascot } from 'page-mascot'
import type { ComponentProps } from 'react'

export type BubsMascotProps = Omit<
  ComponentProps<typeof Mascot>,
  'directions' | 'reactions'
> & {
  directions?: string
  reactions?: string
}

/**
 * Reusable Mini Bubs wrapper around page-mascot.
 *
 * Apps may override the asset URLs, but the defaults assume the two optimized
 * atlases are served from /mascots/.
 */
export function BubsMascot({
  directions = '/mascots/bubs-directions.webp',
  reactions = '/mascots/bubs-reactions.webp',
  size = 180,
  label = 'Mr Bubs',
  ...props
}: BubsMascotProps) {
  return (
    <Mascot
      directions={directions}
      reactions={reactions}
      size={size}
      label={label}
      {...props}
    />
  )
}

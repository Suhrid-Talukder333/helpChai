
import { FC } from 'react'
import * as HIcons from '@heroicons/react/24/outline'

const DynamicHeroIcon: FC<{icon: string, color: string | undefined , className: string | undefined}> = ({icon, color="", className=""}) => {
  const {...icons} = HIcons
  // @ts-ignore
  const TheIcon: JSX.Element = icons[icon]

  return (
    <>
      {/* @ts-ignore */}
      <TheIcon style={{color: color}} className={`h-6 w-6 text-white ${className}`} aria-hidden="true" />
    </>
  )
}

export default DynamicHeroIcon
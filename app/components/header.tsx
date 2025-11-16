import type { FC } from 'react'
import React from 'react'
import {
  ArrowPathIcon,
  Bars3Icon,
  PencilSquareIcon,
} from '@heroicons/react/24/solid'
import AppIcon from '@/app/components/base/app-icon'
export interface IHeaderProps {
  title: string
  isMobile?: boolean
  onShowSideBar?: () => void
  onCreateNewChat?: () => void
  iconUrl?: string
  onResetConversation?: () => void
  resetText?: string
}
const Header: FC<IHeaderProps> = ({
  title,
  isMobile,
  onShowSideBar,
  onCreateNewChat,
  iconUrl,
  onResetConversation,
  resetText,
}) => {
  const showSidebarToggle = isMobile && !!onShowSideBar
  const showNewChat = isMobile && !!onCreateNewChat
  const showReset = !!onResetConversation
  
  return (
    <div className="relative shrink-0 flex items-center justify-center h-16 px-6 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 text-white shadow-lg">
      {showSidebarToggle && (
        <div
          className='flex items-center justify-center h-10 w-10 cursor-pointer absolute left-4 rounded-full bg-white/20 text-white/80 hover:text-white hover:bg-white/30 transition'
          onClick={() => onShowSideBar?.()}
        >
          <Bars3Icon className="h-5 w-5" />
        </div>
      )}
      <div className='flex items-center space-x-3'>
        <AppIcon size="small" rounded icon={iconUrl} />
        <div className=" text-base font-semibold tracking-wide">{title}</div>
      </div>
      {(showReset || showNewChat) && (
        <div className='flex items-center space-x-2 absolute right-4'>
          {showReset && (
            <button
              type='button'
              onClick={() => onResetConversation?.()}
              className='flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white/90 bg-white/20 border border-white/30 rounded-full shadow-lg backdrop-blur hover:bg-white/30 transition'
            >
              <ArrowPathIcon className='h-4 w-4' />
              <span>{resetText}</span>
            </button>
          )}
          {showNewChat && (
            <div
              className='flex items-center justify-center h-10 w-10 cursor-pointer rounded-full bg-white/20 text-white/80 hover:bg-white/30 hover:text-white transition'
              onClick={() => onCreateNewChat?.()}
            >
              <PencilSquareIcon className="h-5 w-5" />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default React.memo(Header)

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
    <div className="relative shrink-0 flex items-center justify-center h-12 px-3 bg-gray-100">
      {showSidebarToggle && (
        <div
          className='flex items-center justify-center h-8 w-8 cursor-pointer absolute left-3'
          onClick={() => onShowSideBar?.()}
        >
          <Bars3Icon className="h-4 w-4 text-gray-500" />
        </div>
      )}
      <div className='flex items-center space-x-2'>
        <AppIcon size="small" rounded icon={iconUrl} />
        <div className=" text-sm text-gray-800 font-bold">{title}</div>
      </div>
      {(showReset || showNewChat) && (
        <div className='flex items-center space-x-2 absolute right-3'>
          {showReset && (
            <button
              type='button'
              onClick={() => onResetConversation?.()}
              className='flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50'
            >
              <ArrowPathIcon className='h-4 w-4' />
              <span>{resetText}</span>
            </button>
          )}
          {showNewChat && (
            <div
              className='flex items-center justify-center h-8 w-8 cursor-pointer'
              onClick={() => onCreateNewChat?.()}
            >
              <PencilSquareIcon className="h-4 w-4 text-gray-500" />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default React.memo(Header)

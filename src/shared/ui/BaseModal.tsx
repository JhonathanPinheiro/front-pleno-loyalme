'use client'

import React from 'react'
import {
  Content,
  Overlay,
  Portal,
  Root,
  Title as RadixTitle,
  Action as RadixAction,
} from '@radix-ui/react-alert-dialog'

type BaseModalProps = {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  contentClassName?: string
}

export function BaseModal({ open, onClose, children, contentClassName }: BaseModalProps) {
  return (
    <Root open={open}>
      <Portal>
        <Overlay
          onClick={onClose}
          className="fixed inset-0 bg-black/40"
        />
        <Content
          className={
            contentClassName ??
            'fixed bottom-0 left-1/2 w-screen max-w-[360px] md:max-w-[650px] -translate-x-1/2 rounded-t-3xl bg-[#F6F6F6] p-0.5 shadow-lg focus:outline-none animate-slideUp'
          }
        >
          {children}
        </Content>
      </Portal>
    </Root>
  )
}

export const Title = RadixTitle
export const Action = RadixAction



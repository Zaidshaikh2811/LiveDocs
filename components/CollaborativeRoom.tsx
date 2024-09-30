"use client"
import { Editor } from '@/components/editor/Editor'
import Header from '@/components/header'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense'
import React from 'react'
import ActiveCollaborator from './ActiveCollaborator'

const CollaborativeRoom = () => {
    return (
        <RoomProvider id="my-room">
            <ClientSideSuspense fallback={<div>Loading…</div>}>
                <div className='collaborative-room'>
                    <Header>
                        <div className='flex w-fit items-center justify-center gap-2 
                '>

                            <p className='document-title'>
                                <p className='document-title'>Share</p>
                            </p>
                            <div className="flex w-full flex-1 justify-end gap-2 sm:gap-3">
                                <ActiveCollaborator />

                                <SignedOut>
                                    <SignInButton></SignInButton>
                                </SignedOut>
                                <SignedIn>
                                    <UserButton></UserButton>
                                </SignedIn>
                            </div>
                        </div>
                    </Header>
                    <Editor />
                </div>
            </ClientSideSuspense>
        </RoomProvider>

    )
}

export default CollaborativeRoom

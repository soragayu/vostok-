'use server'
import { cookies } from 'next/headers'

// cookiesに名前IDを保存
export async function createName(value: string) {
    const cookieStore = await cookies()
    cookieStore.set({
        name: 'name',
        value: value,
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24
    })
}

// cookiesにルームIDを保存
export async function createRoom(value: string) {
    const cookieStore = await cookies()
    cookieStore.set({
        name: 'room',
        value: value,
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24
    })
}



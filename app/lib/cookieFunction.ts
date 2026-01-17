'use server'
import { cookies } from 'next/headers'

// cookiesにIDを保存
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

// cookiesからIDを取得
export async function getName() {
    const cookieStore = await cookies()
    return cookieStore.get('name')?.value;
}



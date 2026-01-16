'use server'
import { cookies } from 'next/headers'

export async function create(value: string) {
    const cookieStore = await cookies()
    cookieStore.set({
        name: 'name',
        value: value,
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24
    })
}

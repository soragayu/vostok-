'use client'
import { useState } from "react";
import { setUsername } from "@/app/lib/supabaseFunction";
import { create } from "@/app/lib/cookieFunction";

export default function Start() {

    // 状態
    const [page, setPage] = useState<number>(0);
    const [name, setName] = useState<string>("名前を入力してください");
    const [room, setRoom] = useState<number>(0);

    // 関数
    async function handleNameClick() {
        const data = await setUsername(name);
        await create(data[0].id);
    }

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <input value={room} onChange={(e) => setRoom(Number(e.target.value))} />
            <button onClick={handleNameClick}>名前決定</button>
            <button>部屋参加</button>
        </div>
    );
}
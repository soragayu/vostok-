'use client'
import { useState } from "react";
import { setUsername } from "@/app/lib/supabaseFunction";

export default function Start() {

    // 状態
    const [page, setPage] = useState<number>(0);
    const [name, setName] = useState<string>("名前を入力してください");
    const [room, setRoom] = useState<number>(0);

    // 関数
    async function handleNameClick() {
        await setUsername(name);
        setPage(1);
    }
    async function handleCreateClick() {
        setPage(4);
    }


    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <input value={room} onChange={(e) => setRoom(Number(e.target.value))} />
            <button>部屋作成</button>
            <button>部屋参加</button>
        </div>
    );
}
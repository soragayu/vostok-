'use client'
import { useState } from "react";
import { useEffect } from "react";
import { insertUsers } from "@/app/lib/supabaseFunction";
import { createName } from "@/app/lib/cookieFunction";
import { getName } from "@/app/lib/cookieFunction";

export default function Start() {

    // 状態
    const [page, setPage] = useState<number>(0);
    const [name, setName] = useState<string>("名前を入力してください");
    const [room, setRoom] = useState<number>(0);

    // 部屋を作成する関数
    async function handleCreateClick() {
        const data = await insertUsers({ name });
        await createName(data[0].id);
        setPage(1);
    }

    // 部屋に参加する関数
    async function handleJoinClick() {
        const data = await insertUsers({ name, room });
        await createName(data[0].id);
        setPage(1);
    }

    // idを取得する関数
    async function getId() {
        const id = await getName();
        console.log(id);
    }

    useEffect(() => {
        getId();
    }, [page]);

    console.log(room);

    return (
        <div>
            {page === 0 && (
                <div>
                    <input value={name} onChange={(e) => setName(e.target.value)} />
                    <input value={room} onChange={(e) => setRoom(Number(e.target.value))} />
                    <button onClick={handleCreateClick}>部屋作成</button>
                    <button onClick={handleJoinClick}>部屋参加</button>
                </div>
            )}
            {page === 1 && (
                <div>
                    <h1>部屋に入りました</h1>
                </div>
            )}
        </div>
    );
}
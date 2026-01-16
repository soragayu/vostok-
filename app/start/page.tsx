'use client'
import { useState } from "react";
import { setUsersName } from "@/app/lib/supabaseFunction";
import { setRoomsRoom } from "@/app/lib/supabaseFunction";
import { createName } from "@/app/lib/cookieFunction";
import { createRoom } from "@/app/lib/cookieFunction";

export default function Start() {

    // 状態
    const [name, setName] = useState<string>("名前を入力してください");
    const [room, setRoom] = useState<number>(0);

    // 関数
    async function handleNameClick() {
        const usersNameResult = await setUsersName(name);
        await createName(usersNameResult[0].id);
        const roomsRoomResult = await setRoomsRoom(room);
        await createRoom(roomsRoomResult[0].room);
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
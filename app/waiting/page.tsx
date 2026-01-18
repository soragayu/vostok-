'use client'
import { useEffect, useState } from "react";
import { getName } from "@/app/lib/cookieFunction";
import { selectUsersRoom } from "@/app/lib/supabaseFunction";

export default function Waiting() {

    // 状態
    const [id, setId] = useState<number | null>(null);
    const [room, setRoom] = useState<number | null>(null);

    useEffect(() => {
        // cookiesからuserid,supabaseからroomを取得
        async function ReadCookies() {
            const getNameResult = await getName();
            const getNameResultNumber = Number(getNameResult);
            const selectUsersRoomResult = await selectUsersRoom(getNameResultNumber);
            setId(getNameResultNumber);
            setRoom(selectUsersRoomResult[0].room);
        }
        ReadCookies();
    }, []);

    return (
        <div>
            <h1>Users ID: {id}</h1>
            <h1>Room ID: {room}</h1>
        </div>
    );
}
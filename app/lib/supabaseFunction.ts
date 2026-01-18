"use server"
import { supabase } from "./supabase";

type insertUsersProps = {
    character?: number;
    room?: number;
}

// Userstable作成
export async function insertUsers({ character, room }: insertUsersProps) {
    const { data, error } = await supabase
        .from("users")
        .insert({ character, room })
        .select();

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

// Usersテーブルからキャラクターを取得
export async function selectUsersCharacter(room: number) {
    const { data, error } = await supabase
        .from("users")
        .select("character")
        .eq("room", room);

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

// Usersテーブルからroomを取得
export async function selectUsersRoom(id: number) {
    const { data, error } = await supabase
        .from("users")
        .select("room")
        .eq("id", id);

    if (error) {
        throw new Error(error.message);
    }

    return data;
}




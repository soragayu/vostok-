import { supabase } from "./supabase";

// 名前をsupabaseに保存
export async function setUsersName(name: string) {
    const { data, error } = await supabase
        .from("users")
        .insert({ name })
        .select();

    if (error) {
        throw error;
    }

    return data;
}

// ルームIDを保存
export async function setRoomsRoom(room: number) {
    const { data, error } = await supabase
        .from("rooms")
        .insert({ room })
        .select();

    if (error) {
        throw error;
    }

    return data;
}




import { supabase } from "./supabase";

type insertUsersProps = {
    name: string;
    room?: number;
}

// Userstable作成
export async function insertUsers({ name, room }: insertUsersProps) {
    const { data, error } = await supabase
        .from("users")
        .insert({ name, room })
        .select();

    if (error) {
        throw new Error(error.message);
    }

    return data;
}



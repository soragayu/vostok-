import { supabase } from "./supabase";

export async function setUsername(name: string) {
    const { data, error } = await supabase
        .from("users")
        .insert({ name })
        .select();

    if (error) {
        throw error;
    }

    return data;
}



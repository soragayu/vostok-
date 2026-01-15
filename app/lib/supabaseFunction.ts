import { supabase } from "./supabase";

export async function setUsername(name: string) {
    const data = await supabase
        .from("users")
        .insert({ name })
    return data;
}



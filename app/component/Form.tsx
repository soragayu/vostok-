import { insertUsers, selectUsersCharacter } from "@/app/lib/supabaseFunction";
import { createName } from "@/app/lib/cookieFunction";
import { redirect } from "next/navigation";

export default function Form() {

    async function handleCreateClick(formData: FormData) {
        "use server"
        const character = Number(formData.get("characters"));
        const room = Number(formData.get("rooms"));
        const selectUsersCharacterResult = await selectUsersCharacter(room);
        // キャラが使われているか判別
        if (selectUsersCharacterResult.map(u => u.character).includes(character)) {
            console.log("この character は既に使われています！");
        } else {
            const insertUsersResult = await insertUsers({ character, room });
            await createName(insertUsersResult[0].id);
            redirect("/waiting");
        }
    }

    return (
        <form action={handleCreateClick}>
            <select name="characters" defaultValue="">
                <option value="" disabled>キャラクターを選択してください</option>
                <option value="0">エウロパ</option>
                <option value="1">イオ</option>
                <option value="2">ルナ</option>
                <option value="3">カレン</option>
                <option value="4">閲覧用</option>
            </select>
            <input type="number" name="rooms" placeholder="ROOM ID" />
            <button type="submit">Start</button>
        </form>
    );
}
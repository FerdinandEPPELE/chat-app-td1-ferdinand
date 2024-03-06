import { supabase } from "@/supabase";
import { ref } from 'vue';

export const messages = ref('')


export const insertMessage = async (content, author_id) => {
    const { error } =  await supabase.from('messages').insert({
        content,
        author_id
    })

    if (error) [
        console.error('Error inserting message', error)
    ]

}

export const fetchMessages = async () => {
    await supabase.from('messages').select('*').order('created_at', {ascending: true}).limit(100)
    const { data, error } = await supabase
    .from('messages')
    .select('*, user:profiles(username, avatar_url)')
    .order('created_at', {ascending: false})

    if (error) [
        console.error('Error inserting message', error)
    ]

    messages.value = data.reverse()
}

export const subscribeToMessage = () => {
    return supabase
        .channel('messages_channel')
        .on('postgres_changes',{event: '*', schema: 'public', table: 'messages'}, () => {
        fetchMessages()
        })
        .subscribe()
}

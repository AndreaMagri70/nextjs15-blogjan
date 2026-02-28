// Here i build all my Server Actions
"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./utils/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function handleSubmission(formData: FormData) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    // 1. Controllo di SICUREZZA: se l'utente non esiste, interrompiamo tutto
    if (!user || !user.id) {
        // Puoi reindirizzare alla login o lanciare un errore
        return redirect("/api/auth/register");
    }

    const title = formData.get('title');
    const content = formData.get('content');
    const url = formData.get('url');

    const data = await prisma.blogPost.create({
    data: {
        title: title as string,
        content: content as string,
        imageUrl: url as string,
        authorId: user.id as string,
        authorName: user.given_name ?? "Anonimo" as string,
            // FALLBACK: Se user.picture è nullo, passa una stringa vuota
        authorImage: user.picture ?? "" as string,
    },
  });

  revalidatePath("/");

  return redirect("/dashboard");
}

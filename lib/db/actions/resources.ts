"use server";

import {
  NewResourceParams,
  insertResourceSchema,
} from "@/lib/db/schema/resources";


export const createResource = async (input: NewResourceParams) => {
  try {
    const { content } = insertResourceSchema.parse(input);
    /*
    const [resource] = await db
      .insert(resources)
      .values({ content })
      .returning();
    
    
    const embeddings = await generateEmbeddings(content);
    await db.insert(embeddingsTable).values(
      embeddings.map((embedding) => ({
        resourceId: resource.id,
        ...embedding,
      }))
    );
    */
    return `"Resource successfully created.${JSON.stringify(content)}`;
  } catch (e) {
    if (e instanceof Error)
      return e.message.length > 0 ? e.message : "Error, please try again.";
  }
};

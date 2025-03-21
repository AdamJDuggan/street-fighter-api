import { z } from "zod";
import { CharacterSchema } from "./schemas";

// export type Character = z.infer<typeof CharacterSchema>;

export interface Character {
	id: string;
	name: string;
	country: string;
}

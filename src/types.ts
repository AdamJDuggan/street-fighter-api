import { z } from "zod";
import { CharacterSchema } from "./schemas";

export type Character = z.infer<typeof CharacterSchema>;

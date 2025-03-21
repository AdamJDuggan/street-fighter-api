import { z } from "zod";
import { COUNTRY_CODES } from "./utils";

export const CharacterSchema = z.object({
	id: z.string(),
	name: z.string(),
	country: z.enum(COUNTRY_CODES),
});

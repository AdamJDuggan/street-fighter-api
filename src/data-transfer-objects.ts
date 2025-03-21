import { IsString, IsEnum } from "class-validator";
import { COUNTRY_CODES } from "./utils";

export class GetCharacterQueryDto {
	@IsString()
	@IsEnum(COUNTRY_CODES, { message: "Invalid country code" })
	country: string;
}

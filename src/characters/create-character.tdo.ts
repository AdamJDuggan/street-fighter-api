import { IsString, IsNotEmpty, IsEnum } from "class-validator";
import { COUNTRY_CODES } from "../utils";

export class CreateCharacterDto {
	@IsString()
	@IsNotEmpty()
	id: string;

	@IsString()
	@IsNotEmpty()
	name: string;
	@IsEnum(COUNTRY_CODES, { message: "Invalid country code" })
	country: string;
}

export class GetCharacterQueryDto {
	@IsString()
	country: string;
}

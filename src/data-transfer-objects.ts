import { IsString, IsEnum } from "class-validator";
import { COUNTRY_CODES } from "./utils";
import { Character } from "src/interfaces";
import { ApiProperty } from "@nestjs/swagger";

export class GetCharacterQueryDto {
	@ApiProperty({ example: "ryu" })
	@IsString()
	@IsEnum(COUNTRY_CODES, { message: "Invalid country code" })
	country: string;
}
export class CharacterDto implements Character {
	@ApiProperty({ example: "ryu" })
	id: string;
	@ApiProperty({ example: "Ryu" })
	name: string;
	@ApiProperty({ example: "JPN" })
	country: string;
}

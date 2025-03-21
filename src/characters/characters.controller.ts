import { Controller, Get, Query } from "@nestjs/common";
import { CharactersService } from "./characters.service";
import { Character } from "src/interfaces";
import { GetCharacterQueryDto } from "../data-transfer-objects";
import { ApiOperation, ApiTags, ApiQuery, ApiResponse } from "@nestjs/swagger";
import { CharacterDto } from "../data-transfer-objects";
import { CHARACTERS } from "../data";

@ApiTags("characters")
@Controller("characters")
export class CharactersController {
	constructor(private charactersService: CharactersService) {}

	@Get()
	@ApiOperation({
		summary: "Get all characters",
		description: "Returns an array of all characters",
	})
	@ApiResponse({
		type: [CharacterDto],
		example: CHARACTERS,
	})
	findAll(): Character[] {
		const characters = this.charactersService.findAll();
		return characters;
	}

	@Get("/find")
	@ApiOperation({
		summary: "Get characters by query params",
		description: "Fetches an array of character records with matching values",
	})
	@ApiQuery({
		name: "country",
		description: "County the character is from",
		required: false,
		example: "CHN",
	})
	@ApiResponse({
		type: [CharacterDto],
		example: CHARACTERS.filter(character => character.country === "CHN"),
	})
	findBy(@Query() queryParams: GetCharacterQueryDto): Character[] {
		const characters = this.charactersService.findBy(queryParams);
		return characters;
	}
}

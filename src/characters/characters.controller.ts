import { Controller, Get, Query } from "@nestjs/common";
import { CharactersService } from "./characters.service";
import { Character } from "src/interfaces";
import { GetCharacterQueryDto } from "../data-transfer-objects";
import { ApiOperation, ApiTags, ApiQuery } from "@nestjs/swagger";

@ApiTags("characters")
@Controller("characters")
export class CharactersController {
	constructor(private charactersService: CharactersService) {}

	@Get()
	@ApiOperation({
		summary: "Get all characters",
		description: "Returns an array of all characters",
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
	})
	findBy(@Query() queryParams: GetCharacterQueryDto): Character[] {
		const characters = this.charactersService.findBy(queryParams);
		return characters;
	}
}

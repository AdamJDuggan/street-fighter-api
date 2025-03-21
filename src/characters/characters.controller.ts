import {
	Controller,
	Get,
	Param,
	NotFoundException,
	Query,
} from "@nestjs/common";
import { CharactersService } from "./characters.service";
import { Character } from "src/interfaces";
import { GetCharacterQueryDto } from "./create-character.tdo";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";

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
	findBy(@Query() queryParams: GetCharacterQueryDto): Character[] {
		const characters = this.charactersService.findBy(queryParams);
		return characters;
	}

	@Get(":id")
	@ApiParam({
		name: "id",
		description: "Unique identifier for the character",
		required: true,
		example: "ryu",
	})
	@ApiOperation({
		summary: "Get character by id",
		description: "Fetches a character record by their unique identifier",
	})
	findOne(@Param() params: { id: string }): Character {
		const character = this.charactersService.findOne(params.id);
		if (!character) {
			throw new NotFoundException(`Character with ID "${params.id}" not found`);
		}
		return character;
	}
}

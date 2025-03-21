import {
	Controller,
	Get,
	Param,
	NotFoundException,
	Query,
} from "@nestjs/common";
import { CharactersService } from "./characters.service";
import { Character } from "src/types";
import { GetCharacterQueryDto } from "./create-character.tdo";

@Controller("characters")
export class CharactersController {
	constructor(private charactersService: CharactersService) {}

	@Get(":id")
	findOne(@Param() params: { id: string }): Character {
		const character = this.charactersService.findOne(params.id);
		if (!character) {
			throw new NotFoundException(`Character with ID "${params.id}" not found`);
		}
		return character;
	}

	@Get()
	findBy(@Query() queryParams: GetCharacterQueryDto): Character[] {
		const characters = this.charactersService.findBy(queryParams);
		return characters;
	}

	@Get()
	findAll(): Character[] {
		const characters = this.charactersService.findAll();
		return characters;
	}
}

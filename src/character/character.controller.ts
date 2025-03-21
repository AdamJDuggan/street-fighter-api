import { Controller, Param, Get, NotFoundException } from "@nestjs/common";
import { ApiOperation, ApiParam, ApiResponse } from "@nestjs/swagger";
import { CharacterService } from "./character.service";
import { Character } from "src/interfaces";
import { CharacterDto } from "../data-transfer-objects";

@Controller("character")
export class CharacterController {
	constructor(private readonly characterService: CharacterService) {}

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
	@ApiResponse({
		type: CharacterDto,
	})
	findOne(@Param() params: { id: string }): Character {
		const character = this.characterService.findOne(params.id);
		if (!character) {
			throw new NotFoundException(`Character with ID "${params.id}" not found`);
		}
		return character;
	}
}

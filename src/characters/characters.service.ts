import { Injectable } from "@nestjs/common";
import { GetCharacterQueryDto } from "../data-transfer-objects";
import { Character } from "src/interfaces";
import { CHARACTERS } from "../data";

@Injectable()
export class CharactersService {
	private readonly characters: Character[] = CHARACTERS;

	findBy(queryParams: GetCharacterQueryDto): Character[] {
		return this.characters.filter(character => {
			return Object.entries(queryParams).every(([key, value]) => {
				return character[key] === value;
			});
		});
	}

	findAll(): Character[] {
		return this.characters;
	}
}

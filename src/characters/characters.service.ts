import { Injectable } from "@nestjs/common";
import { GetCharacterQueryDto } from "./create-character.tdo";
import { Character } from "src/types";
import { CHARACTERS } from "./data";

@Injectable()
export class CharactersService {
	private readonly characters: Character[] = CHARACTERS;

	findOne(id: string): Character | undefined {
		return this.characters.find(character => character.id === id);
	}

	findBy(queryParams: GetCharacterQueryDto): Character[] {
		return this.characters.filter(character => {
			return Object.entries(queryParams).every(([key, value]) => {
				return character[key] === value;
			});
		});
	}

	findAll(): Character[] {
		console.log("HIT");
		return this.characters;
	}
}

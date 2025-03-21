import { Injectable } from "@nestjs/common";
import { Character } from "src/interfaces";
import { CHARACTERS } from "../data";

@Injectable()
export class CharacterService {
	private readonly characters: Character[] = CHARACTERS;
	findOne(id: string): Character | undefined {
		return this.characters.find(character => character.id === id);
	}
}

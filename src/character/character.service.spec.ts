import { Test, TestingModule } from "@nestjs/testing";
import { CharacterService } from "./character.service";
import { CHARACTERS } from "../data";

const TEST_CHARACTER = CHARACTERS[0];

describe("CharacterService", () => {
	let service: CharacterService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [CharacterService],
		}).compile();

		service = module.get<CharacterService>(CharacterService);
	});

	describe("findOne", () => {
		it("should find a character by id", () => {
			const result = service.findOne(TEST_CHARACTER.id);
			expect(result).toBeDefined();
			expect(result).toEqual(TEST_CHARACTER);
		});

		it("should return undefined for non-existent id", () => {
			const result = service.findOne("999");
			expect(result).toBeUndefined();
		});
	});
});

import { Test, TestingModule } from "@nestjs/testing";
import { CharactersService } from "./characters.service";
import { GetCharacterQueryDto } from "./create-character.tdo";
import { CHARACTERS } from "./data";

const TEST_CHARACTER = CHARACTERS[0];
const CHARACTERS_FROM_COUNTRY = CHARACTERS.filter(
	character => character.country === TEST_CHARACTER.country,
);

describe("CharactersService", () => {
	let service: CharactersService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [CharactersService],
		}).compile();

		service = module.get<CharactersService>(CharactersService);
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

	describe("findBy", () => {
		it("should find characters by country", () => {
			const queryParams: GetCharacterQueryDto = {
				country: TEST_CHARACTER.country,
			};
			const result = service.findBy(queryParams);
			expect(result).toBeDefined();
			expect(result).toHaveLength(CHARACTERS_FROM_COUNTRY.length);
		});

		it("should return empty array for non-matching query", () => {
			const queryParams: GetCharacterQueryDto = {
				country: "Unknown",
			};
			const result = service.findBy(queryParams);
			expect(result).toBeDefined();
			expect(result).toHaveLength(0);
		});
	});

	describe("findAll", () => {
		it("should return all characters", () => {
			const result = service.findAll();
			expect(result).toBeDefined();
			expect(result).toHaveLength(CHARACTERS.length);
		});
	});
});

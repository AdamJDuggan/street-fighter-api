import { Test, TestingModule } from "@nestjs/testing";
import { CharactersService } from "./characters.service";
import { GetCharacterQueryDto } from "../data-transfer-objects";
import { CHARACTERS } from "../data";

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

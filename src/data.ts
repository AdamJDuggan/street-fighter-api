import { Character } from "src/interfaces";

export const CHARACTERS: Character[] = [
	{ id: "adon", name: "Adon", country: "THA" },
	{ id: "akuma", name: "Akuma", country: "JPN" },
	{ id: "birdie", name: "Birdie", country: "GBR" },
	{ id: "nash", name: "Charlie", country: "USA" },
	{ id: "chunli", name: "ChunLi", country: "CHN" },
	{ id: "dan", name: "Dan Hibiki", country: "HKG" },
	{ id: "dhalsim", name: "Dhalsim", country: "IND" },
	{ id: "gen", name: "Gen", country: "CHN" },
	{ id: "guy", name: "Guy", country: "USA" },
	{ id: "ken", name: "Ken Masters", country: "USA" },
	{ id: "bison", name: "M Bison", country: "BRA" },
	{ id: "rolento", name: "Rolento F.", country: "USA" },
	{ id: "rose", name: "Rose", country: "ITA" },
	{ id: "ryu", name: "Ryu", country: "JPN" },
	{ id: "Sagat", name: "Sagat", country: "THA" },
	{ id: "sakura ", name: "Sakura ", country: "JPN" },
	{ id: "sodom", name: "Sodom", country: "USA" },
	{ id: "zangief", name: "Zangief", country: "RUS" },
];

export const CHARACTERS2 = JSON.stringify(CHARACTERS, null, 2);

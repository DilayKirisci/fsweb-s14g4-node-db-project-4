/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const recipes = [
	{
		tarif_id: "Spagetti Bolonez",
		adımlar: [
			{
				adim_sirasi: 1,
				adim_talimati: "Büyük bir tencereyi orta ateşe koyun",
			},
			{
				adim_sirasi: 2,
				adim_talimati: "Yumurta ve jambonu karıştırın",
				icindekiler: [
					{ icindekiler_id: 27, miktar: 2 },
					{ icindekiler_id: 48, miktar: 0.1 },
				],
			},
		],
	},
	{
		tarif_id: "Chicken Stir-Fry",
		adimlar: [
			{
				adim_sirasi: 1,
				adim_talimati: "Heat oil in a pan",
			},
			{
				adim_sirasi: 2,
				adim_talimati: "Add chicken and cook until browned",
				icindekiler: [
					{ icindekiler_id: 27, miktar: 1 },
					{ icindekiler_id: 48, miktar: 0.2 },
				],
			},
		],
	},

	{
		tarif_id: "Pasta Carbonara",
		adimlar: [
			{
				adim_sirasi: 1,
				adim_talimati: "Cook pasta according to package instructions",
			},
			{
				adim_sirasi: 2,
				adim_talimati: "In a pan, cook bacon until crispy",
				icindekiler: [
					{ icindekiler_id: 27, miktar: 12 },
					{ icindekiler_id: 48, miktar: 0.3 },
				],
			},
			{
				adim_sirasi: 3,
				adim_talimati:
					"In a bowl, whisk together eggs, cheese, and black pepper",
				icindekiler: [
					{ icindekiler_id: 11, miktar: 8 },
					{ icindekiler_id: 18, miktar: 0.9 },
				],
			},
		],
	},
	{
		tarif_id: "Caprese Salad",
		adimlar: [
			{
				adim_sirasi: 1,
				adim_talimati: "Slice tomatoes and mozzarella cheese",
				icindekiler: [
					{ icindekiler_id: 31, miktar: 12 },
					{ icindekiler_id: 38, miktar: 0.5 },
				],
			},
			{
				adim_sirasi: 2,
				adim_talimati: "Arrange tomato and mozzarella slices on a plate",
			},
		],
	},
];

exports.recipes = recipes;

exports.seed = function (knex) {
	return knex("recipes").insert(recipes);
};

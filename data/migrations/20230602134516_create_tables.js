/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema
		.createTable("tarifler", (tbl) => {
			tbl.increments("tarif_id").primary();
			tbl.string("tarif_adi");
			tbl.dateTime("kayit_tarihi");
		})
		.createTable("adimlar", (tbl) => {
			tbl.increments("adim_id").primary();
			tbl.integer("tarif_id").unsigned().references("tarifler.tarif_id");
			tbl.integer("adim_sirasi");
			tbl.string("adim_talimati");
		})
		.createTable("icindekiler", (tbl) => {
			tbl.increments("icindekiler_id");
			tbl.string("icindekiler_adi");
			tbl.decimal("miktar");
			tbl.integer("tarif_id").unsigned().references("tarifler.tarif_id");
		})
		.createTable("adim_icindekiler", function (table) {
			table.increments("adim_icindekiler_id").primary();
			table.integer("adim_id").unsigned().references("adimlar.adim_id");
			table
				.integer("icindekiler_id")
				.unsigned()
				.references("icindekiler.icindekiler_id");
		});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists("icindekiler")
		.dropTableIfExists("adimlar")
		.dropTableIfExists("tarifler")
		.dropTableIfExists("adim_icindekiler");
};

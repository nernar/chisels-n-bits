Translation.addTranslation("Chiseled Fluid Bit Tank", {
	de: "Bit-Tank",
	zh: "流体雕刻储罐",
	nl: "Bitbak",
	fr: "Tank à fluide ciselé pour fragments",
	ru: "Резервуар для обработанных жидкостных кусочков"
});

Block.createSpecialType({
	base: 42,
	destroytime: 5,
	lightopacity: 0,
	explosionres: 30,
	sound: "glass"
}, "tank");

IDRegistry.genBlockID("bitTank");
Block.createBlock("bitTank", [{
	name: "Chiseled Fluid Bit Tank",
	texture: [["iron_block", 0]],
	inCreative: true
}], "tank");

Block.setBlockMaterial("bitTank", "stone", 1);
Block.setDestroyLevel("bitTank", 1);
ToolLib.addBlockDropOnExplosion("bitTank");

Recipes.addShaped({
	id: BlockID.bitTank,
	count: 1,
	data: 0
}, [" G ", "GOG", " I "],
	["G", VanillaBlockID.glass, 0, 
	 "I", VanillaItemID.iron_ingot, 0,
	 "O", VanillaBlockID.log, 0]);

var render = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.bitTank, -1, render);
var model = BlockRenderer.createModel();

model.addBox(0/16, 0/16, 0/16, 16/16, 0/16, 2/16, "log_top", 0);
model.addBox(0/16, 0/16, 14/16, 16/16, 0/16, 16/16, "log_top", 0);
model.addBox(0/16, 0/16, 2/16, 2/16, 0/16, 14/16, "log_top", 0);
model.addBox(14/16, 0/16, 2/16, 16/16, 0/16, 14/16, "log_top", 0);
model.addBox(0/16, 16/16, 0/16, 16/16, 16/16, 2/16, "log_top", 0);
model.addBox(0/16, 16/16, 14/16, 16/16, 16/16, 16/16, "log_top", 0);
model.addBox(0/16, 16/16, 2/16, 2/16, 16/16, 14/16, "log_top", 0);
model.addBox(14/16, 16/16, 2/16, 16/16, 16/16, 14/16, "log_top", 0);
model.addBox(2/16, 2/16, 0/16, 6/16, 2/16, 2/16, "log_top", 0);
model.addBox(10/16, 2/16, 0/16, 14/16, 2/16, 2/16, "log_top", 0);
model.addBox(2/16, 2/16, 14/16, 14/16, 2/16, 16/16, "log_top", 0);
model.addBox(14/16, 2/16, 2/16, 16/16, 2/16, 14/16, "log_top", 0);
model.addBox(0/16, 2/16, 2/16, 2/16, 2/16, 14/16, "log_top", 0);
model.addBox(6/16, 6/16, 1/16, 10/16, 6/16, 2/16, "log_top", 0);
model.addBox(2/16, 14/16, 0/16, 14/16, 14/16, 2/16, "log_top", 0);
model.addBox(2/16, 14/16, 14/16, 14/16, 14/16, 16/16, "log_top", 0);
model.addBox(0/16, 14/16, 2/16, 2/16, 14/16, 14/16, "log_top", 0);
model.addBox(14/16, 14/16, 2/16, 16/16, 14/16, 14/16, "log_top", 0);

model.addBox(0/16, 0/16, 0/16, 16/16, 2/16, 0/16, "log_side", 0);
model.addBox(0/16, 14/16, 0/16, 16/16, 16/16, 0/16, "log_side", 0);
model.addBox(0/16, 2/16, 0/16, 2/16, 14/16, 0/16, "log_side", 0);
model.addBox(14/16, 2/16, 0/16, 16/16, 14/16, 0/16, "log_side", 0);
model.addBox(0/16, 0/16, 16/16, 16/16, 2/16, 16/16, "log_side", 0);
model.addBox(0/16, 14/16, 16/16, 16/16, 16/16, 16/16, "log_side", 0);
model.addBox(0/16, 2/16, 16/16, 2/16, 14/16, 16/16, "log_side", 0);
model.addBox(14/16, 2/16, 16/16, 16/16, 14/16, 16/16, "log_side", 0);
model.addBox(0/16, 0/16, 0/16, 0/16, 16/16, 2/16, "log_side", 0);
model.addBox(0/16, 0/16, 14/16, 0/16, 16/16, 16/16, "log_side", 0);
model.addBox(0/16, 0/16, 2/16, 0/16, 2/16, 14/16, "log_side", 0);
model.addBox(0/16, 14/16, 2/16, 0/16, 16/16, 14/16, "log_side", 0);
model.addBox(16/16, 0/16, 0/16, 16/16, 16/16, 2/16, "log_side", 0);
model.addBox(16/16, 0/16, 14/16, 16/16, 16/16, 16/16, "log_side", 0);
model.addBox(16/16, 0/16, 2/16, 16/16, 2/16, 14/16, "log_side", 0);
model.addBox(16/16, 14/16, 2/16, 16/16, 16/16, 14/16, "log_side", 0);
model.addBox(2/16, 2/16, 0/16, 2/16, 14/16, 2/16, "log_side", 0);
model.addBox(2/16, 2/16, 14/16, 2/16, 14/16, 16/16, "log_side", 0);
model.addBox(2/16, 0/16, 2/16, 2/16, 2/16, 14/16, "log_side", 0);
model.addBox(2/16, 14/16, 2/16, 2/16, 16/16, 14/16, "log_side", 0);
model.addBox(10/16, 2/16, 1/16, 10/16, 6/16, 2/16, "log_side", 0);
model.addBox(6/16, 2/16, 1/16, 6/16, 6/16, 2/16, "log_side", 0);
model.addBox(14/16, 2/16, 0/16, 14/16, 14/16, 2/16, "log_side", 0);
model.addBox(14/16, 2/16, 14/16, 14/16, 14/16, 16/16, "log_side", 0);
model.addBox(14/16, 0/16, 2/16, 14/16, 2/16, 14/16, "log_side", 0);
model.addBox(14/16, 14/16, 2/16, 14/16, 16/16, 14/16, "log_side", 0);
model.addBox(2/16, 0/16, 2/16, 14/16, 2/16, 2/16, "log_side", 0);
model.addBox(2/16, 14/16, 2/16, 14/16, 16/16, 2/16, "log_side", 0);
model.addBox(0/16, 2/16, 2/16, 2/16, 14/16, 2/16, "log_side", 0);
model.addBox(6/16, 2/16, 2/16, 10/16, 3/16, 2/16, "log_side", 0);
model.addBox(14/16, 2/16, 2/16, 16/16, 14/16, 2/16, "log_side", 0);
model.addBox(6/16, 3/16, 2/16, 7/16, 5/16, 2/16, "log_side", 0);
model.addBox(9/16, 3/16, 2/16, 10/16, 5/16, 2/16, "log_side", 0);
model.addBox(6/16, 5/16, 2/16, 10/16, 6/16, 2/16, "log_side", 0);
model.addBox(2/16, 0/16, 14/16, 14/16, 2/16, 14/16, "log_side", 0);
model.addBox(2/16, 14/16, 14/16, 14/16, 16/16, 14/16, "log_side", 0);
model.addBox(0/16, 2/16, 14/16, 2/16, 14/16, 14/16, "log_side", 0);
model.addBox(14/16, 2/16, 14/16, 16/16, 14/16, 14/16, "log_side", 0);

model.addBox(6/16, 2/16, 0/16, 10/16, 3/16, 0/16, "planks", 0);
model.addBox(6/16, 3/16, 0/16, 7/16, 5/16, 0/16, "planks", 0);
model.addBox(9/16, 3/16, 0/16, 10/16, 5/16, 0/16, "planks", 0);
model.addBox(6/16, 5/16, 0/16, 10/16, 6/16, 0/16, "planks", 0);
model.addBox(7/16, 3/16, 0/16, 7/16, 5/16, 1/16, "planks", 0);
model.addBox(10/16, 2/16, 0/16, 10/16, 6/16, 1/16, "planks", 0);
model.addBox(6/16, 2/16, 0/16, 6/16, 6/16, 1/16, "planks", 0);
model.addBox(9/16, 3/16, 0/16, 9/16, 5/16, 1/16, "planks", 0);
model.addBox(7/16, 3/16, 0/16, 9/16, 3/16, 1/16, "planks", 0);
model.addBox(6/16, 6/16, 0/16, 10/16, 6/16, 1/16, "planks", 0);
model.addBox(7/16, 5/16, 0/16, 9/16, 5/16, 1/16, "planks", 0);

model.addBox(7/16, 3/16, 2/16, 9/16, 5/16, 2/16, "iron_block", 0);
model.addBox(7/16, 3/16, 1/16, 9/16, 5/16, 1/16, "iron_block", 0);

model.addBox(2/16, 0/16, 2/16, 14/16, 0/16, 14/16, "glass", 0);
model.addBox(2/16, 16/16, 2/16, 14/16, 16/16, 14/16, "glass", 0);
model.addBox(2/16, 2/16, 0/16, 6/16, 6/16, 0/16, "glass", 0);
model.addBox(10/16, 2/16, 0/16, 14/16, 6/16, 0/16, "glass", 0);
model.addBox(2/16, 6/16, 0/16, 14/16, 14/16, 0/16, "glass", 0);
model.addBox(2/16, 2/16, 16/16, 14/16, 14/16, 16/16, "glass", 0);
model.addBox(0/16, 2/16, 2/16, 0/16, 14/16, 14/16, "glass", 0);
model.addBox(16/16, 2/16, 2/16, 16/16, 14/16, 14/16, "glass", 0);
model.addBox(6/16, 2/16, 0/16, 6/16, 6/16, 2/16, "glass", 0);
model.addBox(14/16, 2/16, 0/16, 14/16, 14/16, 2/16, "glass", 0);
model.addBox(14/16, 2/16, 14/16, 14/16, 14/16, 16/16, "glass", 0);
model.addBox(14/16, 0/16, 2/16, 14/16, 2/16, 14/16, "glass", 0);
model.addBox(14/16, 14/16, 2/16, 14/16, 16/16, 14/16, "glass", 0);
model.addBox(2/16, 2/16, 0/16, 2/16, 14/16, 2/16, "glass", 0);
model.addBox(2/16, 2/16, 14/16, 2/16, 14/16, 16/16, "glass", 0);
model.addBox(2/16, 0/16, 2/16, 2/16, 2/16, 14/16, "glass", 0);
model.addBox(2/16, 14/16, 2/16, 2/16, 16/16, 14/16, "glass", 0);
model.addBox(10/16, 2/16, 0/16, 10/16, 6/16, 2/16, "glass", 0);
model.addBox(2/16, 14/16, 0/16, 14/16, 14/16, 2/16, "glass", 0);
model.addBox(2/16, 14/16, 14/16, 14/16, 14/16, 16/16, "glass", 0);
model.addBox(0/16, 14/16, 2/16, 2/16, 14/16, 14/16, "glass", 0);
model.addBox(14/16, 14/16, 2/16, 16/16, 14/16, 14/16, "glass", 0);
model.addBox(2/16, 2/16, 0/16, 6/16, 2/16, 2/16, "glass", 0);
model.addBox(10/16, 2/16, 0/16, 14/16, 2/16, 2/16, "glass", 0);
model.addBox(2/16, 2/16, 14/16, 14/16, 2/16, 16/16, "glass", 0);
model.addBox(14/16, 2/16, 2/16, 16/16, 2/16, 14/16, "glass", 0);
model.addBox(0/16, 2/16, 2/16, 2/16, 2/16, 14/16, "glass", 0);
model.addBox(6/16, 6/16, 0/16, 10/16, 6/16, 2/16, "glass", 0);
model.addBox(2/16, 0/16, 14/16, 14/16, 2/16, 14/16, "glass", 0);
model.addBox(2/16, 14/16, 14/16, 14/16, 16/16, 14/16, "glass", 0);
model.addBox(0/16, 2/16, 14/16, 2/16, 14/16, 14/16, "glass", 0);
model.addBox(14/16, 2/16, 14/16, 16/16, 14/16, 14/16, "glass", 0);
model.addBox(2/16, 0/16, 2/16, 14/16, 2/16, 2/16, "glass", 0);
model.addBox(2/16, 14/16, 2/16, 14/16, 16/16, 2/16, "glass", 0);
model.addBox(0/16, 2/16, 2/16, 2/16, 14/16, 2/16, "glass", 0);
model.addBox(6/16, 2/16, 2/16, 10/16, 6/16, 2/16, "glass", 0);
model.addBox(14/16, 2/16, 2/16, 16/16, 14/16, 2/16, "glass", 0);

render.addEntry(model);
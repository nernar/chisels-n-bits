/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 2
*/



// file: header.js

/*
     _____ _     _          _                ____  _ _       
    / ____| |   (_)        | |       ___    |  _ \(_) |      
   | |    | |__  _ ___  ___| |___   ( _ )   | |_) |_| |_ ___ 
   | |    | '_ \| / __|/ _ \ / __|  / _ \/\ |  _ <| | __/ __|
   | |____| | | | \__ \  __/ \__ \ | (_>  < | |_) | | |_\__ \
    \_____|_| |_|_|___/\___|_|___/  \___/\/ |____/|_|\__|___/
                                                           
                                                           
   Copyright 2020 Nernar (github.com/nernar)

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

*/

IMPORT("ToolLib");




// file: blocks/./tank.js

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

alert("/launched/");

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





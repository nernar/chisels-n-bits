/*

*/

LIBRARY({
	name: "MaterialType",
	api: "CoreEngine",
	shared: true,
	version: 0
});

let Material = new Function();
Material.prototype.name = "unknown";
Matetial.prototype.getName = function() {
	return this.name;
};
Material.prototype.native = false;
Material.prototype.isNative = function() {
	return this.native;
};
Material.prototype.solid = true;
Matetial.prototype.isSolid = function() {
	return this.solid;
};
Material.prototype.liquid = false;
Material.prototype.isLiquid = function() {
	return this.liquid;
};

Material.create = function(type, isNative, isSolid, isLiquid) {
	if (MaterialType.hasMaterial(type)) {
		return MaterialType.getMaterial(type);
	}
	let material = new Material();
	material.name = type;
	if (isNative instanceof Boolean) {
		material.native = isNative;
	}
	if (isSolid instanceof Boolean) {
		material.solid = isSolid;
	}
	if (isLiquid instanceof Boolean) {
		material.liquid = isLiquid;
	}
	return material;
};

Material.createFromId = function(type, id) {
	if (MaterialType.hasMaterial(type)) {
		return MaterialType.getMaterial(type);
	}
	if (id instanceof String) {
		id = Block.getNumericId(id);
	}
	if (id == undefined || id == null) {
		return null;
	}
	return Material.create(type, Block.isNativeTile(id), Block.isSolid(id));
};

let MaterialType = new Object();
MaterialType.materials = new Object();
MaterialType.getMaterials = function() {
	return this.materials;
};
MaterialType.getMaterial = function(type) {
	if (this.hasMaterial(type)) {
		return this.getMaterials()[type];
	}
	return null;
};
MaterialType.hasMaterial = function(typeOrMaterial) {
	if (typeOrMaterial instanceof Material) {
		typeOrMaterial = Material.getName();
	}
	return this.getMaterials().hasOwnProperty(type);
};
MaterialType.addMaterial = function(typeOrMaterial, material) {
	if (typeOrMaterial instanceof Material) {
		material = typeOrMaterial;
		typeOrMaterial = material.getName();
	}
	if (this.hasMaterial(typeOrMaterial)) {
		Logger.Log("Material with type " + typeOrMaterial + " is already exists", "Warning")
	}
	this.getMaterials()[typeOrMaterial] = material;
};
MaterialType.registerMaterial = function(type, id) {
	if (this.hasMaterial(type)) {
		return null;
	}
	if (id instanceof Number || id instanceof String) {
		this.addMaterial(Material.createFromId(type, id));
	} else {
		this.addMaterial(Material.create(type));
	}
	return this.getMaterial(type);
};

Material.AIR = MaterialType.registerMaterial("air", 0);
Material.ANVIL = MaterialType.registerMaterial("anvil", 145);
Material.BARRIER = MaterialType.registerMaterial("barrier", -161);
Material.CACTUS = MaterialType.registerMaterial("cactus", 81);
Material.CAKE = MaterialType.registerMaterial("cake", 92);
Material.CARPET = MaterialType.registerMaterial("carpet", 171);
Material.CIRCUITS = MaterialType.registerMaterial("circuits", 55);
Material.CLAY = MaterialType.registerMaterial("clay", 82);
Material.CLOTH = MaterialType.registerMaterial("cloth", 35);
Material.CORAL = MaterialType.registerMaterial("coral", -132);
Material.CRAFTED_SNOW = MaterialType.registerMaterial("craftedSnow", 78);
Material.DRAGON_EGG = MaterialType.registerMaterial("dragonEgg", 122);
Material.FIRE = MaterialType.registerMaterial("fire", 51);
Material.GLASS = MaterialType.registerMaterial("glass", 20);
Material.GOURD = MaterialType.registerMaterial("gourd", 86);
Material.GRASS = MaterialType.registerMaterial("grass", 2);
Material.GROUND = MaterialType.registerMaterial("ground", 3);
Material.ICE = MaterialType.registerMaterial("ice", 79);
Material.IRON = MaterialType.registerMaterial("iron", 42);
Material.LAVA = MaterialType.registerMaterial("lava", 11);
Material.LEAVES = MaterialType.registerMaterial("leaves", 18);
Material.PACKED_ICE = MaterialType.registerMaterial("packedIce", 174);
Material.PISTON = MaterialType.registerMaterial("piston", 33);
Material.PLANTS = MaterialType.registerMaterial("plants", 38);
Material.PORTAL = MaterialType.registerMaterial("portal", 90);
Material.REDSTONE_LIGHT = MaterialType.registerMaterial("redstoneLight", 124);
Material.ROCK = MaterialType.registerMaterial("rock", 4);
Material.SAND = MaterialType.registerMaterial("sand", 12);
Material.SNOW = MaterialType.registerMaterial("snow", 80);
Material.SPONGE = MaterialType.registerMaterial("sponge", 19);
Material.STRUCTURE_VOID = MaterialType.registerMaterial("structureVoid", -158);
Material.TNT = MaterialType.registerMaterial("tnt", 46);
Material.VINE = MaterialType.registerMaterial("vine", 106);
Material.WATER = MaterialType.registerMaterial("water", 9);
Material.WEB = MaterialType.registerMaterial("web", 30);
Material.WOOD = MaterialType.registerMaterial("wood", 17);
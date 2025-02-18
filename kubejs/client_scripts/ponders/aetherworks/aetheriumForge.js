Ponder.registry((e) => {
    e.create(['aetherworks:aether_forge', 'aetherworks:heat_dial']).scene('aether_forge_scene_one', "Setting up the Aetherium Forge", (scene, util) => {

        scene.showBasePlate();
        
        global.createPonderEmbersMultiblock(scene, "aether_forge", 1, true)
        scene.world.setBlocks([2, 2, 2], Block.id("aetherworks:aether_forge").with("half", "upper"));
        scene.world.showSection([2, 2, 2], Facing.DOWN);
        const topForge = util.select.fromTo(2, 1, 2, 2, 2, 2)
        const bottomForge = util.select.fromTo(3, 1, 1, 1, 1, 3)
        global.showPonderLayer(scene, 0, 1);

        scene.idle(10);

        scene.text(80, "The Aetherium Forge is a structure that harnesses heat for crafting.")

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(80, "The top and bottom portions of the Aetherium Forge receive Ember power.", [2, 2, 2])

        scene.overlay.showOutline(PonderPalette.GREEN, "block", topForge, 80)

        scene.idle(40);

        scene.showControls(35, [2, 4, 2], "down").rightClick().withItem('embers:ember_receiver')
        
        scene.idle(40);

        scene.world.setBlocks([2, 3, 2], "embers:ember_receiver");
        scene.world.modifyBlock([2, 3, 2], () => Block.id("embers:ember_receiver").with("facing", "up"), false);
        scene.world.showSection([2, 3, 2], Facing.down);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(80, "Crafting stations that use heat are placed on the base of the Forge.", [3, 2, 1])

        scene.overlay.showOutline(PonderPalette.GREEN, "block", bottomForge, 80)

        scene.idle(30);

        scene.showControls(35, [3, 3, 1], "down").rightClick().withItem('aetherworks:forge_metal_former')
        
        scene.idle(40);

        scene.world.setBlocks([3, 2, 1], "aetherworks:forge_metal_former", false);

        scene.world.showSection([3, 2, 1], Facing.DOWN);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(80, "A Forge Dial is needed to monitor the heat level of the Forge.")

        scene.idle(40);

        scene.showControls(35, [2, 3, 1], "down").rightClick().withItem('aetherworks:heat_dial')
        
        scene.idle(40);

        scene.world.setBlocks([2, 2, 1], "aetherworks:heat_dial");
        scene.world.modifyBlock([2, 2, 1], () => Block.id("aetherworks:heat_dial").with("facing", "north"), false);
        scene.world.showSection([2, 2, 1], Facing.SOUTH);

        scene.idle(80);
    });

    e.create(['aetherworks:aether_forge', 'aetherworks:heat_dial', 'aetherworks:forge_heater']).scene('aether_forge_scene_two', "Forge Heat Basics", (scene) => {

        scene.showBasePlate();

        global.createPonderEmbersMultiblock(scene, "aether_forge", 1, true)
        scene.world.setBlocks([2, 2, 2], Block.id("aetherworks:aether_forge").with("half", "upper"));
        scene.world.showSection([2, 2, 2], Facing.DOWN);
        global.showPonderLayer(scene, 0, 1);
        
        scene.idle(5);
       
        scene.world.setBlocks([2, 3, 2], "embers:ember_receiver");
        scene.world.modifyBlock([2, 3, 2], () => Block.id("embers:ember_receiver").with("facing", "up"), false);
        scene.world.showSection([2, 3, 2], Facing.down);
        
        scene.idle(10);

        scene.text(80, "The Aetherium Forge utilizes Heat as its main crafting mechanic.")

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(80, "An Aetherium Forge Heater raises the temperature of the Forge. It must be placed over Lava.")

        scene.idle(30);

        scene.showControls(35, [2, 1, 0], "down").rightClick().withItem('minecraft:lava_bucket')
        
        scene.idle(40);

        scene.world.setBlocks([2, 0, 0], "minecraft:lava", true);
        
        scene.idle(40);

        scene.showControls(35, [2, 2, 0], "down").rightClick().withItem('aetherworks:forge_heater')
        
        scene.idle(40);

        scene.world.setBlocks([2, 1, 0], "aetherworks:forge_heater", false);
        scene.world.modifyBlock([2, 1, 0], () => Block.id('aetherworks:forge_heater').with("facing", "south"), false);
        scene.world.showSection([2, 1, 0], Facing.SOUTH);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(80, "It needs Ember power and a constant supply of water to operate.", [2, 1, 0])

        scene.idle(40);

        scene.showControls(35, [2, 3, 0], "down").rightClick().withItem('embers:ember_receiver')
        
        scene.idle(40);

        scene.world.setBlocks([2, 2, 0], "embers:ember_receiver");
        scene.world.modifyBlock([2, 2, 0], () => Block.id("embers:ember_receiver").with("facing", "up"), false);
        scene.world.showSection([2, 2, 0], Facing.down);

        scene.idle(40);

        scene.showControls(35, [0, 2, 0], "down").rightClick().withItem('embers:mechanical_pump')
        
        scene.idle(40);

        scene.world.setBlocks([0, 0, 0], "minecraft:water");
        scene.world.setBlocks([0, 1, 0], "embers:mechanical_pump");
        scene.world.setBlocks([0, 2, 0], "embers:mechanical_pump");
        scene.world.modifyBlock([0, 2, 0], () => Block.id("embers:mechanical_pump").with("half", "upper"), false);
        
        scene.world.showSection([0, 1, 0], Facing.DOWN);
        scene.world.showSection([0, 2, 0], Facing.DOWN);
        scene.world.setBlocks([1, 2, 0], "embers:fluid_extractor");
        scene.world.modifyBlockEntityNBT([1, 2, 0], (nbt) => {
            nbt.connection1 = 4
            nbt.connection4 = 3
            nbt.connection0 = 2
        });
        scene.world.setBlocks([1, 1, 0], "embers:fluid_pipe");
        scene.world.modifyBlockEntityNBT([1, 1, 0], (nbt) => {
            nbt.connection1 = 2
            nbt.connection5 = 3
        });
        scene.world.showSection([1, 2, 0], Facing.DOWN);
        scene.world.showSection([1, 1, 0], Facing.DOWN);

        scene.world.setBlocks([1, 3, 0], "embers:caminite_lever");
        scene.world.modifyBlock([1, 3, 0], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west"), false);
        scene.world.showSection([1, 3, 0], Facing.DOWN);

        scene.idle(40);

        scene.world.modifyBlock([1, 3, 0], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west").with("powered", true), false); 

        scene.effects.indicateRedstone([1, 3, 0]);

        scene.idle(60);

        scene.addLazyKeyframe();

        scene.text(80, "The Aetherium Forge Heater will only provide heat when it has a redstone signal.", [2, 1, 0])

        scene.idle(30);

        scene.showControls(35, [3, 2, 0], "down").rightClick().withItem('embers:caminite_lever')

        scene.idle(40);

        scene.world.setBlocks([3, 1, 0], "embers:caminite_lever");
        scene.world.modifyBlock([3, 1,  0], () => Block.id("embers:caminite_lever").with("face", "wall").with("facing", "north"), false); 

        scene.world.showSection([3, 1, 0], Facing.SOUTH);
        scene.idle(40);

        scene.world.modifyBlock([3, 1, 0], () => Block.id("embers:caminite_lever").with("face", "wall").with("facing", "north").with("powered", true), false); 

        scene.effects.indicateRedstone([3, 1, 0]);

        scene.idle(60);

        scene.addLazyKeyframe();

        scene.text(100, "The Aetherium Forge will explode if the temperature stays at 3000.", [2, 2, 2]).colored(PonderPalette.RED)

        scene.idle(120);

        scene.text(100, "A Comparator can be attached to a Forge Dial to get its temperature as a redstone signal.")
        
        scene.idle(30);

        scene.showControls(35, [3, 3, 2], "down").rightClick().withItem('aetherworks:heat_dial')
        
        scene.idle(40);

        scene.world.setBlocks([3, 2, 2], "aetherworks:heat_dial");
        scene.world.modifyBlock([3, 2, 2], () => Block.id("aetherworks:heat_dial").with("facing", "east"), false);
        scene.world.showSection([3, 2, 2], Facing.WEST);

        scene.idle(40);

        scene.showControls(35, [4, 3, 2], "down").rightClick().withItem('minecraft:comparator')
        
        scene.idle(40);

        scene.world.setBlocks([4, 2, 2], "minecraft:comparator");
        scene.world.modifyBlock([4, 2, 2], () => Block.id("minecraft:comparator").with("powered", true).with("facing", "west"), false); 
        scene.world.showSection([4, 2, 2], Facing.WEST);

        scene.idle(7);

        scene.effects.indicateRedstone([4, 2, 2]);

        scene.text(80, "Clever redstone can be used to keep the Aetherium Forge at a certain level.")
    
        scene.idle(100);
    });

    e.create(['aetherworks:aether_forge', 'aetherworks:forge_vent', 'aetherworks:forge_cooler']).scene('aether_forge_scene_three', "Cooling the Forge", (scene) => {

        scene.showBasePlate();

        global.createPonderEmbersMultiblock(scene, "aether_forge", 1, true)
        scene.world.setBlocks([2, 2, 2], Block.id("aetherworks:aether_forge").with("half", "upper"));
        scene.world.showSection([2, 2, 2], Facing.DOWN);
        global.showPonderLayer(scene, 0, 1);
        
        scene.idle(5);
       
        scene.world.setBlocks([2, 3, 2], "embers:ember_receiver");
        scene.world.modifyBlock([2, 3, 2], () => Block.id("embers:ember_receiver").with("facing", "up"), false);
        scene.world.showSection([2, 3, 2], Facing.down);
        
        scene.idle(10);

        scene.text(80, "The Aetherium Forge can be cooled down in two different ways.")

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(80, "Aetherium Forge Heat Vents will add constant cooling to the Forge.")

        scene.idle(30);

        scene.showControls(35, [2, 2, 0], "down").rightClick().withItem('aetherworks:forge_vent')
        
        scene.idle(40);

        scene.world.setBlocks([2, 1, 0], "aetherworks:forge_vent", false);
        scene.world.modifyBlock([2, 1, 0], () => Block.id('aetherworks:forge_vent').with("facing", "south"), false);
        scene.world.showSection([2, 1, 0], Facing.SOUTH);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(80, "It only requires a redstone signal to operate.", [3, 1, 1.5])

        scene.idle(30);

        scene.showControls(35, [3, 2, 0], "down").rightClick().withItem('embers:caminite_lever')

        scene.idle(40);

        scene.world.setBlocks([3, 1, 0], "embers:caminite_lever");
        scene.world.modifyBlock([3, 1,  0], () => Block.id("embers:caminite_lever").with("face", "wall").with("facing", "north"), false); 

        scene.world.showSection([3, 1, 0], Facing.SOUTH);
        scene.idle(40);

        scene.world.modifyBlock([3, 1, 0], () => Block.id("embers:caminite_lever").with("face", "wall").with("facing", "north").with("powered", true), false); 

        scene.effects.indicateRedstone([3, 1, 0]);

        scene.idle(60);

        scene.addLazyKeyframe();

        scene.world.hideSection([2, 1, 0], Facing.UP);
        scene.world.hideSection([3, 1, 0], Facing.UP);
        
        scene.text(80, "The Aetherium Forge Cooler instantly drops the temperature of the Forge. It must be placed over Ice.")

        scene.idle(30);

        scene.showControls(35, [2, 1, 0], "down").rightClick().withItem('minecraft:ice')
        
        scene.idle(40);

        scene.world.setBlocks([2, 0, 0], "minecraft:ice", true);
        
        scene.idle(40);

        scene.showControls(35, [2, 2, 0], "down").rightClick().withItem('aetherworks:forge_cooler')
        
        scene.idle(40);

        scene.world.setBlocks([2, 1, 0], "aetherworks:forge_cooler", false);
        scene.world.modifyBlock([2, 1, 0], () => Block.id('aetherworks:forge_cooler').with("facing", "south"), false);
        scene.world.showSection([2, 1, 0], Facing.SOUTH);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(80, "It needs Ember power and a constant supply of water to operate.", [2, 1, 0])

        scene.idle(40);

        scene.showControls(35, [2, 3, 0], "down").rightClick().withItem('embers:ember_receiver')
        
        scene.idle(40);

        scene.world.setBlocks([2, 2, 0], "embers:ember_receiver");
        scene.world.modifyBlock([2, 2, 0], () => Block.id("embers:ember_receiver").with("facing", "up"), false);
        scene.world.showSection([2, 2, 0], Facing.down);

        scene.idle(40);

        scene.showControls(35, [0, 2, 0], "down").rightClick().withItem('embers:mechanical_pump')
        
        scene.idle(40);

        scene.world.setBlocks([0, 0, 0], "minecraft:water");
        scene.world.setBlocks([0, 1, 0], "embers:mechanical_pump");
        scene.world.setBlocks([0, 2, 0], "embers:mechanical_pump");
        scene.world.modifyBlock([0, 2, 0], () => Block.id("embers:mechanical_pump").with("half", "upper"), false);
        
        scene.world.showSection([0, 1, 0], Facing.DOWN);
        scene.world.showSection([0, 2, 0], Facing.DOWN);
        scene.world.setBlocks([1, 2, 0], "embers:fluid_extractor");
        scene.world.modifyBlockEntityNBT([1, 2, 0], (nbt) => {
            nbt.connection1 = 4
            nbt.connection4 = 3
            nbt.connection0 = 2
        });
        scene.world.setBlocks([1, 1, 0], "embers:fluid_pipe");
        scene.world.modifyBlockEntityNBT([1, 1, 0], (nbt) => {
            nbt.connection1 = 2
            nbt.connection5 = 3
        });
        scene.world.showSection([1, 2, 0], Facing.DOWN);
        scene.world.showSection([1, 1, 0], Facing.DOWN);

        scene.world.setBlocks([1, 3, 0], "embers:caminite_lever");
        scene.world.modifyBlock([1, 3, 0], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west"), false);
        scene.world.showSection([1, 3, 0], Facing.DOWN);

        scene.idle(40);

        scene.world.modifyBlock([1, 3, 0], () => Block.id("embers:caminite_lever").with("face", "floor").with("facing", "west").with("powered", true), false); 

        scene.effects.indicateRedstone([1, 3, 0]);

        scene.idle(60);

        scene.addLazyKeyframe();

        scene.text(100, "When given a redstone pulse, the Forge Cooler will instantly remove 500 heat from the Forge and consume the Ice.", [2, 1, 0])

        scene.idle(30);

        scene.showControls(35, [3, 2, 0], "down").rightClick().withItem('embers:caminite_button')

        scene.idle(40);

        scene.world.setBlocks([3, 1, 0], "embers:caminite_button", false);
        scene.world.modifyBlock([3, 1,  0], () => Block.id("embers:caminite_button").with("face", "wall").with("facing", "north"), false); 

        scene.world.showSection([3, 1, 0], Facing.SOUTH);
        scene.idle(40);

        scene.world.modifyBlock([3, 1, 0], () => Block.id("embers:caminite_button").with("face", "wall").with("facing", "north").with("powered", true), false); 

        scene.effects.indicateRedstone([3, 1, 0]);

        scene.world.setBlocks([2, 0, 0], "minecraft:air", true);

        scene.idle(5);

        scene.world.modifyBlock([3, 1,  0], () => Block.id("embers:caminite_button").with("face", "wall").with("facing", "north"), false); 

        scene.idle(60);

    });

});
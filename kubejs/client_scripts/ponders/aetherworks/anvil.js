Ponder.registry((e) => {
    e.create(['aetherworks:forge_core', 'aetherworks:forge_anvil']).scene('forge_anvil_scene_one', "Working the Aetherium Anvil", (scene) => {

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

        scene.addLazyKeyframe();

        scene.text(100, "The Aetherium Anvil harnesses heat from the Aetherium Forge to work tools and break Geodes.")

        scene.idle(30);

        scene.showControls(35, [2, 3, 1], "down").rightClick().withItem('aetherworks:forge_anvil')
        
        scene.idle(40);

        scene.world.setBlocks([2, 2, 1], "aetherworks:forge_anvil", false);

        scene.world.showSection([2, 2, 1], Facing.DOWN);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(80, "Place the item to process directly on the Anvil.", [2.5, 2, 1.5])

        scene.idle(30);

        scene.showControls(35, [2, 3, 1], "down").rightClick().withItem('aetherworks:tool_rod_crude')
        
        scene.idle(40);

        scene.world.modifyBlockEntityNBT([2, 2, 1], (nbt) => {
            nbt.inventory = {Size: 1, Items: [{Slot: 0, id: 'aetherworks:tool_rod_crude', Count: 1}]}
        });
        
        scene.idle(80);

        scene.addLazyKeyframe();
        
        scene.text(100, "Once the Aetherium Forge reaches the required temperature for the recipe, an exclamation mark will appear above it.", [2, 2, 1])
        
        scene.idle(30);
        
        scene.showControls(110, [2, 3, 1], "down").withItem('minecraft:lime_dye')
        
        scene.idle(90);

        scene.text(100, "When the exclamation mark is green, right click on the anvil with your Tinker's Hammer.")
        
        scene.idle(30);
        
        scene.showControls(35, [2, 2.5, 1], "down").rightClick().withItem('embers:tinker_hammer')
        
        scene.idle(40);

        scene.particles.simple(5, "happy_villager", [2, 2.5, 1]).density(1).motion([0, 0.01, 0]).area([3, 2, 2]).scale(2.1);
        
        scene.idle(40);

        scene.text(80, "This will consume Aetherium Forge heat and Ember power.")

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(80, "Hitting the anvil when the exclamation mark is yellow will result in a strike.", [2, 2, 1])

        scene.showControls(50, [2, 3, 1], "down").withItem('minecraft:yellow_dye')

        scene.idle(60);

        scene.showControls(35, [2, 2.5, 1], "down").rightClick().withItem('embers:tinker_hammer')
        
        scene.idle(40);

        scene.particles.simple(5, "angry_villager", [2, 2.5, 1]).density(1).motion([0, 0.01, 0]).area([3, 2, 2]).scale(2.1);
        
        scene.idle(30);

        scene.text(80, "Three strikes, and the item on the anvil will break", [2, 2, 1])
                
        scene.showControls(20, [2, 3, 1], "down").withItem('minecraft:yellow_dye')

        scene.idle(30);

        scene.showControls(35, [2, 2.5, 1], "down").rightClick().withItem('embers:tinker_hammer')
        
        scene.idle(40);

        scene.particles.simple(5, "angry_villager", [2, 2.5, 1]).density(1).motion([0, 0.01, 0]).area([3, 2, 2]).scale(2.1);
        
        scene.idle(30);
        
        scene.showControls(20, [2, 3, 1], "down").withItem('minecraft:yellow_dye')

        scene.idle(30);

        scene.showControls(35, [2, 2.5, 1], "down").rightClick().withItem('embers:tinker_hammer')
        
        scene.idle(40);

        scene.particles.simple(5, "angry_villager", [2, 2.5, 1]).density(1).motion([0, 0.01, 0]).area([3, 2, 2]).scale(2.1);
        
        scene.world.modifyBlockEntityNBT([2, 2, 1], (nbt) => {
            nbt.inventory = {Size: 1, Items: [{Slot: 0, id: 'aetherworks:tool_rod_crude', Count: 0}]}
        });

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.world.modifyBlockEntityNBT([2, 2, 1], (nbt) => {
            nbt.inventory = {Size: 1, Items: [{Slot: 0, id: 'aetherworks:tool_rod_crude', Count: 1}]}
        });
        scene.text(80, "All Aetherium Anvils recipes require the Forge to be in a certain temperature range.")

        scene.idle(100);

        scene.text(80, "If the temperature leaves this range during forging, progress will be reset.")

        scene.idle(100);

        scene.text(80, "Once the tool has been worked the number of times that is required, the craft will complete.", [2, 2, 1])

        scene.showControls(20, [2, 3, 1], "down").withItem('minecraft:lime_dye')

        scene.idle(30);
        
        scene.showControls(35, [2, 2.5, 1], "down").rightClick().withItem('embers:tinker_hammer')
        
        scene.idle(40);

        scene.particles.simple(5, "happy_villager", [2, 2.5, 1]).density(1).motion([0, 0.01, 0]).area([3, 2, 2]).scale(2.1);

        scene.world.modifyBlockEntityNBT([2, 2, 1], (nbt) => {
            nbt.inventory = {Size: 1, Items: [{Slot: 0, id: 'aetherworks:tool_rod', Count: 1}]}
        });

        scene.idle(20);

        scene.showControls(60, [2, 3, 1], "down").withItem('aetherworks:tool_rod')

        scene.idle(80);

    });
});
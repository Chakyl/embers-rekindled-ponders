Ponder.registry((e) => {
    e.create(['aetherworks:forge_core', 'aetherworks:forge_tool_station']).scene('forge_tool_station_scene_one', "Working the Aetherium Anvil", (scene) => {

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

        scene.text(100, "The Aetherium Tool Forge harnesses heat from the Aetherium Forge to craft advanced tools.")

        scene.idle(30);

        scene.showControls(35, [2, 3, 1], "down").rightClick().withItem('aetherworks:forge_tool_station')
        
        scene.idle(40);

        scene.world.setBlocks([2, 2, 1], "aetherworks:forge_tool_station", false);

        scene.world.showSection([2, 2, 1], Facing.DOWN);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(80, "Place the item on the Tool Forge in the order specified by the recipe.", [2.5, 2, 1.5])

        scene.idle(30);

        scene.showControls(35, [2, 3, 1], "down").rightClick().withItem('aetherworks:tool_rod_infused')
        
        scene.idle(40);

        scene.world.modifyBlockEntityNBT([2, 2, 1], (nbt) => {
            nbt.inventory = {Size: 3, Items: [{Slot: 3, id: 'aetherworks:tool_rod_infused', Count: 1}]}
        });
        
        scene.idle(40);

        scene.showControls(35, [2, 3, 1], "down").rightClick().withItem('aetherworks:aether_pearl')
        
        scene.idle(40);

        scene.world.modifyBlockEntityNBT([2, 2, 1], (nbt) => {
            nbt.inventory = {Size: 6, Items: [{Slot: 3, id: 'aetherworks:tool_rod_infused', Count: 1}, {Slot: 2, id: 'aetherworks:aether_pearl', Count: 1}]}
        });

        scene.idle(40);

        scene.showControls(35, [2, 3, 1], "down").rightClick().withItem('aetherworks:pickaxe_head_aether')
        
        scene.idle(40);

        scene.world.modifyBlockEntityNBT([2, 2, 1], (nbt) => {
            nbt.inventory = {Size: 6, Items: [{Slot: 3, id: 'aetherworks:tool_rod_infused', Count: 1}, {Slot: 2, id: 'aetherworks:aether_pearl', Count: 1}, {Slot: 1, id: 'aetherworks:pickaxe_head_aether', Count: 1}]}
        });
        
        scene.idle(80);

        scene.addLazyKeyframe();
        
        scene.text(100, "Once the Aetherium Forge reaches the required temperature for the recipe you can work the Tool Forge.", [2, 2, 1])
        
        scene.idle(30);
        
        scene.showControls(35, [2, 2.5, 1], "down").rightClick().withItem('embers:tinker_hammer')
        
        scene.idle(40);

        scene.world.modifyBlockEntityNBT([2, 2, 1], (nbt) => {
            nbt.progress = 5
        });

        scene.idle(40);

        scene.text(80, "This will consume Aetherium Forge heat and Ember power.")

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(80, "Once the Tool Forge has been worked the number of times that is required, the craft will complete.", [2, 2, 1])

        scene.idle(30);
        
        scene.showControls(35, [2, 2.5, 1], "down").rightClick().withItem('embers:tinker_hammer')
        
        scene.idle(40);

        scene.world.modifyBlockEntityNBT([2, 2, 1], (nbt) => {
            nbt.progress = 10
        });

        scene.idle(40);
        
        scene.showControls(35, [2, 2.5, 1], "down").rightClick().withItem('embers:tinker_hammer')
        
        scene.idle(40);

        scene.world.modifyBlockEntityNBT([2, 2, 1], (nbt) => {
            nbt.progress = 20
        });

        scene.idle(40);
        
        scene.showControls(35, [2, 2.5, 1], "down").rightClick().withItem('embers:tinker_hammer')
        
        scene.idle(40);

        scene.world.modifyBlockEntityNBT([2, 2, 1], (nbt) => {
            nbt.progress = 30
        });

        scene.idle(40);
        
        scene.showControls(35, [2, 2.5, 1], "down").rightClick().withItem('embers:tinker_hammer')
        
        scene.idle(40);

        scene.world.modifyBlockEntityNBT([2, 2, 1], (nbt) => {
            nbt.inventory = {Size: 6, Items: [{Slot: 5, id: 'aetherworks:pickaxe_aether', Count: 1}]}
        });

        scene.idle(20);

        scene.showControls(60, [2, 3, 1], "down").withItem('aetherworks:pickaxe_aether')

        scene.idle(80);

    });
});
Ponder.registry((e) => {
    e.create(['aetherworks:forge_core', 'aetherworks:forge_metal_former', 'aetherworks:aether_gas_bucket']).scene('metal_former_scene_one', "Aetherium Forge Infusing", (scene) => {

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

        scene.text(100, "The Metal Former harnesses heat from the Aetherium Forge to infuse Aetherium Aerosol into items.")

        scene.idle(30);

        scene.showControls(35, [2, 3, 1], "down").rightClick().withItem('aetherworks:forge_metal_former')
        
        scene.idle(40);

        scene.world.setBlocks([2, 2, 1], "aetherworks:forge_metal_former", false);

        scene.world.showSection([2, 2, 1], Facing.DOWN);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(80, "Fluids can be bucketed or piped into it from any side.", [2.5, 2, 1.5])

        scene.idle(30);

        scene.showControls(35, [2, 3, 1], "down").rightClick().withItem('aetherworks:aether_gas_bucket')
        
        scene.idle(40);

        scene.world.modifyBlockEntityNBT([2, 2, 1], (nbt) => {
            nbt.FluidName = "aetherworks:aether_gas"
            nbt.Amount = 1000
        });
        
        scene.idle(30);

        scene.text(80, "The item you are infusing can also be manually placed or piped in.", [2.5, 2, 1.5])

        scene.idle(30);

        scene.showControls(35, [2, 3, 1], "down").rightClick().withItem('embers:dawnstone_ingot')
        
        scene.idle(40);

        scene.world.modifyBlockEntityNBT([2, 2, 1], (nbt) => {
            nbt.inventory = {Size: 1, Items: [{Slot: 0, id: 'embers:dawnstone_ingot', Count: 1}]}
        });
        scene.idle(80);

        scene.addLazyKeyframe();
        
        scene.text(80, "Once the Aetherium Forge reaches the required temperature for the recipe, crafting will start.")

        scene.idle(30);

        scene.particles.simple(35, "small_flame", [2, 2, 1]).density(2).motion([0, 0.01, 0]).area([3, 2, 2]).scale(2.1);
        
        scene.idle(40);
        
        scene.world.modifyBlockEntityNBT([2, 2, 1], (nbt) => {
            nbt.inventory = {Size: 1, Items: [{Slot: 0, id: 'aetherworks:ingot_aether', Count: 1}]}
        });
        
        scene.idle(80);
    });
});
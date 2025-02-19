Ponder.registry((e) => {
    e.create((['aetherworks:lexicon_receptacle', 'aetherworks:lexicon'])).scene('lexicon_scene_one', "Bulk Storage Using Lexicons", (scene) => {

        scene.showBasePlate();

        scene.world.setBlocks([2, 1, 2], "aetherworks:lexicon_receptacle");
        scene.world.showSection([2, 1, 2], Facing.DOWN);
        
        scene.idle(10);

        scene.text(100, "A Lexicon stores nearly infinite amounts of a single item, once crafted with that item.")

        scene.idle(140);

        scene.addLazyKeyframe();
        
        scene.text(80, "It must be placed on a Lexicon Receptacle to insert or extract out of it.", [2, 2, 2])

        scene.idle(100);

        scene.showControls(35, [2, 2, 2], "down").rightClick().withItem('aetherworks:lexicon')
        
        scene.idle(40);

        scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
            nbt.inventory = { size: 1, Items: [{Slot: 0, id: 'aetherworks:lexicon', Count: 1}]}
        });

        scene.idle(60);

        scene.addLazyKeyframe();
        
        scene.text(120, "Items can be inserted into or extracted from the Lexicon itself or attached Mechanical Cores.")

        scene.idle(40);

        scene.showControls(35, [2, 2, 0], "down").rightClick().withItem('minecraft:hopper')
        
        scene.idle(40);

        scene.world.setBlocks([2, 1, 1], "minecraft:hopper");
        scene.world.showSection([2, 1, 1], Facing.SOUTH);
        scene.world.modifyBlock([2, 1, 1], () => Block.id("minecraft:hopper").with("facing", "south"), false); 
        scene.idle(80);
    });
});
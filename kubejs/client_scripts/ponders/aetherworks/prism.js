Ponder.registry((e) => {
    e.create(['aetherworks:prism', 'aetherworks:prism_support', 'aetherworks:aether_gas_impure_bucket', 'aetherworks:moonlight_amplifier', 'aetherworks:aether_prism_controller_matrix']).scene('prism_scene_one', "Gathering Impure Aetherium", "kubejs:large_base", (scene) => {

        scene.showStructure()

        scene.idle(10);

        scene.text(80, "The Refraction Prism is the key to harvesting Aetherium from moonlight.")

        scene.idle(100);

        scene.addLazyKeyframe();

        scene.text(100, "To start, place a Fluid Vessel extended with Caminite Supports and topped with the Refraction Prism itself.")

        // This is to fix strange issue where blocks don't get shown when using showBasePlate + showSection
        scene.world.hideSection([6,1,0, 0,4,6], Facing.DOWN);
        
        scene.idle(30);

        scene.showControls(35, [3, 2, 3], "down").rightClick().withItem('embers:fluid_vessel')
        
        scene.idle(40);
        
        scene.world.setBlocks([3, 1, 3], "embers:fluid_vessel");
        scene.world.showSection([3, 1, 3], Facing.DOWN);

        scene.idle(40);

        scene.showControls(35, [3, 3, 3], "down").rightClick().withItem('aetherworks:prism_support')
        
        scene.idle(40);

        scene.world.setBlocks([3, 2, 3], "aetherworks:prism_support");
        scene.world.setBlocks([3, 3, 3], "aetherworks:prism_support");
        scene.world.showSection([3, 2, 3], Facing.DOWN);
        scene.world.showSection([3, 3, 3], Facing.DOWN);
        
        scene.idle(40);

        scene.showControls(35, [2, 2, 2], "down").rightClick().withItem('aetherworks:prism')
        
        scene.idle(40);

        scene.world.setBlocks([3, 4, 3], "aetherworks:prism", true);
        scene.world.showSection([3, 4, 3], Facing.DOWN);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(120, "The Prism will also need to be surrounded by 8 pillars of Archaic Bricks and Archaic Edges.")
        
        scene.idle(30);

        scene.showControls(35, [3, 4, 0], "down").rightClick().withItem('embers:archaic_edge')
        scene.showControls(35, [3, 2, 0], "left").rightClick().withItem('embers:archaic_bricks')
        scene.showControls(35, [3, 1, 0], "up").rightClick().withItem('embers:archaic_bricks')
        
        scene.idle(40);

        scene.world.setBlocks([3, 3, 0], "embers:archaic_edge");        
        scene.world.setBlocks([3, 1, 0], "embers:archaic_bricks");
        scene.world.setBlocks([3, 2, 0], "embers:archaic_bricks");
        scene.world.showSection([3, 1, 0, 3, 3, 0], Facing.DOWN);
        scene.idle(10);
        scene.world.setBlocks([0, 3, 3], "embers:archaic_edge");        
        scene.world.setBlocks([0, 1, 3], "embers:archaic_bricks");
        scene.world.setBlocks([0, 2, 3], "embers:archaic_bricks");
        scene.world.showSection([0, 1, 3, 0, 3, 3], Facing.DOWN);
        scene.idle(10);
        scene.world.setBlocks([3, 3, 6], "embers:archaic_edge");        
        scene.world.setBlocks([3, 1, 6], "embers:archaic_bricks");
        scene.world.setBlocks([3, 2, 6], "embers:archaic_bricks");
        scene.world.showSection([3, 1, 6, 3, 3, 6], Facing.DOWN);
        scene.idle(10);
        scene.world.setBlocks([6, 3, 3], "embers:archaic_edge");        
        scene.world.setBlocks([6, 1, 3], "embers:archaic_bricks");
        scene.world.setBlocks([6, 2, 3], "embers:archaic_bricks");
        scene.world.showSection([6, 1, 3, 6, 3, 3], Facing.DOWN);

        scene.idle(40);

        scene.showControls(35, [1, 3, 1], "down").rightClick().withItem('embers:archaic_edge')
        scene.showControls(35, [1, 2, 1], "left").rightClick().withItem('embers:archaic_bricks')
        
        scene.idle(40);

        scene.world.setBlocks([1, 2, 1], "embers:archaic_edge");        
        scene.world.setBlocks([1, 1, 1], "embers:archaic_bricks");
        scene.world.showSection([1, 1, 1, 1, 2, 1], Facing.DOWN);
        scene.idle(10);
        scene.world.setBlocks([1, 2, 5], "embers:archaic_edge");      
        scene.world.setBlocks([1, 1, 5], "embers:archaic_bricks");
        scene.world.showSection([1, 1, 5, 1, 2, 5], Facing.DOWN);
        scene.idle(10);
        scene.world.setBlocks([5, 2, 5], "embers:archaic_edge");     
        scene.world.setBlocks([5, 1, 5], "embers:archaic_bricks");
        scene.world.showSection([5, 1, 5, 5, 2, 5], Facing.DOWN);
        scene.idle(10);
        scene.world.setBlocks([5, 2, 1], "embers:archaic_edge");        
        scene.world.setBlocks([5, 1, 1], "embers:archaic_bricks");
        scene.world.showSection([5, 1, 1, 5, 2, 1], Facing.DOWN);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(120, "The taller pillars must be topped by Moonlight Amplifiers facing the Prism.")
        
        scene.idle(30);

        scene.showControls(35, [3, 5, 0], "down").rightClick().withItem('aetherworks:moonlight_amplifier');
        scene.showControls(35, [0, 5, 3], "down").rightClick().withItem('aetherworks:moonlight_amplifier');
        scene.showControls(35, [3, 5, 6], "down").rightClick().withItem('aetherworks:moonlight_amplifier');
        scene.showControls(35, [6, 5, 3], "down").rightClick().withItem('aetherworks:moonlight_amplifier');
        
        scene.idle(40);

        scene.world.setBlocks([3, 4, 0], "aetherworks:moonlight_amplifier");  
        scene.world.modifyBlock([3, 4, 0], () => Block.id("aetherworks:moonlight_amplifier").with("facing", "south"), false);      
        scene.world.showSection([3, 4, 0], Facing.DOWN);
        scene.idle(10);
        scene.world.setBlocks([0, 4, 3], "aetherworks:moonlight_amplifier");
        scene.world.modifyBlock([0, 4, 3], () => Block.id("aetherworks:moonlight_amplifier").with("facing", "east"), false);  
        scene.world.showSection([0, 4, 3], Facing.DOWN);
        scene.idle(10);
        scene.world.setBlocks([3, 4, 6], "aetherworks:moonlight_amplifier");
        scene.world.modifyBlock([3, 4, 6], () => Block.id("aetherworks:moonlight_amplifier").with("facing", "north"), false); 
        scene.world.showSection([3, 4, 6], Facing.DOWN);
        scene.idle(10);
        scene.world.setBlocks([6, 4, 3], "aetherworks:moonlight_amplifier");
        scene.world.modifyBlock([6, 4, 3], () => Block.id("aetherworks:moonlight_amplifier").with("facing", "west"), false); 
        scene.world.showSection([6, 4, 3], Facing.DOWN);

        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(100, "Once formed, blue runes should appear on the pillars, and the Fluid Vessel should start filling with Impure Aetherium Sludge at night.")
        
        scene.idle(30);

        scene.showControls(35, [3, 2, 3], "down").withItem('aetherworks:aether_gas_impure_bucket')
        
        scene.idle(40);
        scene.world.modifyBlockEntityNBT([3, 1, 3], (nbt) => {
            nbt.FluidName = "aetherworks:aether_gas_impure"
            nbt.Amount = 16000
        });
        scene.idle(80);

        scene.addLazyKeyframe();

        scene.text(120, "To increase the rate of gathering, up to 4 Aetherium Focusing Matrices can be placed on the shorter pillars.")
        
        scene.idle(30);

        scene.showControls(35, [1, 4, 1], "down").rightClick().withItem('aetherworks:aether_prism_controller_matrix');
        scene.showControls(35, [1, 4, 5], "down").rightClick().withItem('aetherworks:aether_prism_controller_matrix');
        scene.showControls(35, [5, 4, 5], "down").rightClick().withItem('aetherworks:aether_prism_controller_matrix');
        scene.showControls(35, [5, 4, 1], "down").rightClick().withItem('aetherworks:aether_prism_controller_matrix');
        
        scene.idle(40);

        scene.world.setBlocks([1, 3, 1], "aetherworks:aether_prism_controller_matrix");  
        scene.world.showSection([1, 3, 1], Facing.DOWN);
        scene.idle(10);
        scene.world.setBlocks([1, 3, 5], "aetherworks:aether_prism_controller_matrix"); 
        scene.world.showSection([1, 3, 5], Facing.DOWN);
        scene.idle(10);
        scene.world.setBlocks([5, 3, 5], "aetherworks:aether_prism_controller_matrix");
        scene.world.showSection([5, 3, 5], Facing.DOWN);
        scene.idle(10);
        scene.world.setBlocks([5, 3, 1], "aetherworks:aether_prism_controller_matrix");
        scene.world.showSection([5, 3, 1], Facing.DOWN);

        scene.idle(80);

    });


});
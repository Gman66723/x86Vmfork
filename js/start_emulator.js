"use strict";

window.onload = function() {
    // Basic configuration to start the emulator
    var config = {
        // Required for the emulator to run
        memory_size: 32 * 1024 * 1024, // 32 MB of RAM
        vga_memory_size: 2 * 1024 * 1024, // 2 MB of Video RAM

        // The HTML element where the emulator screen will be rendered
        screen_container: document.getElementById("screen_container"),

        // The essential BIOS files
        bios: {
            // NOTE: Paths are relative to index.html
            url: "v86/bios/seabios.bin", 
        },
        vga_bios: {
            url: "v86/bios/vgabios.bin",
        },

        // The operating system image (e.g., a minimal Linux ISO)
        cdrom: {
            url: "v86/images/linux.iso",
        },

        // Start the emulator as soon as it's loaded
        autostart: true,
    };

    // Check if the V86Starter constructor is available
    if (typeof V86Starter === 'undefined') {
        console.error("V86Starter is not defined. Make sure libv86.js is loaded correctly.");
        document.body.innerHTML = "<h1>Error: Emulator library not loaded.</h1><p>Please check your paths to v86/build/libv86.js.</p>";
        return;
    }

    // Create and start the emulator
    window.emulator = new V86Starter(config);

    console.log("v86 Emulator started.");
};
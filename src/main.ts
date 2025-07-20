import runApp from "@/core";

// Prevent the player from retrieving the correct playback information
Object.defineProperty(window, "__playinfo__", {
  get: function () {
    return null;
  },
});
runApp();

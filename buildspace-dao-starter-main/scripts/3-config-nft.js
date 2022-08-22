import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xa9998D26e8354BE9958e44fc942F0700c5600E3C");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Leaf Village Headband",
        description: "This NFT will give you access to NarutoDAO!",
        image: readFileSync("scripts/assets/headband.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
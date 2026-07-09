import type { NextConfig } from "next";
import fs from "fs";

const nextConfig: NextConfig = {
  turbopack: {
    // Resolve to the OS's canonical on-disk casing, since __dirname can pick up
    // whatever casing the process was launched with on case-insensitive Windows
    // filesystems, causing Turbopack to treat two casings as separate module roots.
    root: fs.realpathSync.native(__dirname),
  },
};

export default nextConfig;

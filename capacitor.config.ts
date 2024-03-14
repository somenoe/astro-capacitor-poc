import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.capacitor.poc",
  appName: "capacitor-poc",
  webDir: "dist",
  server: {
    androidScheme: "https",
    url: "http://192.168.223.195:4321",
    cleartext: true,
  },
};

export default config;

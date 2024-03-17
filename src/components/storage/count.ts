import { Preferences } from "@capacitor/preferences";
import Alpine from "alpinejs";

const setCount = async (value: number) => {
  await Preferences.set({
    key: "count",
    value: value.toString(),
  });
};

const getCount = async () => {
  const { value } = await Preferences.get({ key: "count" });

  return value;
};

Alpine.data("xcount", () => ({
  count: 0,
  init() {
    getCount().then((count) => {
      this.count = Number(count);
    });
    this.$watch("count", setCount);
  },
  addOne() {
    this.count++;
  },
  minusOne() {
    this.count--;
  },
}));

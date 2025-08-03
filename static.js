
import { CustomError } from "./error-class.js";

class Config {
  // static field
  static author = "Ukhasyah";
  static version = "1.0";
}

// gaperlu bikin objek
console.info(Config.name);
console.info(Config.version);

class Math {
  /**
   *
   * @param  {...Number} values
   * @returns
   */
  static summ(...values) {
    if (values.length === 0) {
      throw new CustomError("harus lebih dari 0", values);
    }

    let total = 0;

    for (let value of values) {
      if (typeof value !== "number") {
        throw new CustomError("harus angka", value);
      }
      total += value;
    }
    return total;
  }
}

try {
  let sum = Math.summ(1, 1, 1, 1, 1);
  console.log(sum);
  console.log(Math.summ(92, 92));
  console.log(Math.summ("miwa", false));
} catch (error) {
  if (error instanceof CustomError) {
    console.error(
      `Terjadi error pada field ${error.field} karena ${error.message}`
    );
  }
  console.error(`Error : ${error.message}`);
} finally {
  console.log("Program selesai");
}

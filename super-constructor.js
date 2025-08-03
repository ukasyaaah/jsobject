class Ketua {
  constructor(name) {
    this.name = name;
  }
  sapa(name) {
    console.log(`Halo ${name}, saya ketua ${this.name}`);
  }
}

class Anggota extends Ketua {
  // Cuma boleh manggil super di construct method, gaboleh di yg lain
  constructor(name, email) {
    // wajib manggil construct yg ada di parent nya
    super();
    this.name = name;
    this.email = email;
  }
}

let ari = new Anggota("ari", "ari.com");
console.log(ari);

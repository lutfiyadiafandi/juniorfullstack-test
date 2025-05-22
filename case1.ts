type IFruit = {
  fruitId: number;
  fruitName: string;
  fruitType: "IMPORT" | "LOCAL";
  stock: number;
};

const fruits: IFruit[] = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

// 1. Buah apa saja yang dimiliki Andi? (fruitName)
const findFruitAndi = (data: IFruit[]): string[] => {
  const fruitNames = data
    .map((fruit: IFruit) => fruit.fruitName.toLowerCase())
    .filter(
      (name: string, index: number, arr: string[]) =>
        arr.indexOf(name) === index
    );
  return fruitNames;
};
const fruitAndi = findFruitAndi(fruits);
const toUpperCase = (str: string) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

console.log("Buah yang dimiliki Andi:", toUpperCase(fruitAndi.join(", ")));

// 2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di masing-masing wadah?
const findFruitType = (data: IFruit[]): string[] => {
  const fruitTypes = data
    .map((fruit: IFruit) => fruit.fruitType)
    .filter(
      (type: string, index: number, arr: string[]) =>
        arr.indexOf(type) === index
    );
  return fruitTypes;
};
console.log("Jumlah wadah yang dibutuhkan:", findFruitType(fruits).length);
const fruitsByType = fruits.reduce((acc: Record<string, string[]>, fruit) => {
  const type = fruit.fruitType;
  const name = fruit.fruitName.toLowerCase();
  if (!acc[type]) acc[type] = [];
  if (!acc[type].includes(name)) acc[type].push(name);
  return acc;
}, {});

Object.entries(fruitsByType).forEach(([type, names]) => {
  console.log(`Wadah ${type}:`, names);
});

// 3. Berapa total stock buah yang ada di masing-masing wadah?
const findTotalStock = (data: IFruit[]): number[] => {
  const totalStock = data.map((fruit: IFruit) =>
    data
      .filter((f: IFruit) => f.fruitType === fruit.fruitType)
      .reduce((acc: number, curr: IFruit) => acc + curr.stock, 0)
  );
  return totalStock.filter(
    (stock: number, index: number, arr: number[]) =>
      arr.indexOf(stock) === index
  );
};
const total = findTotalStock(fruits);
console.log("Total stock buah yang ada di masing-masing wadah:", {
  IMPORT: total[0],
  LOCAL: total[1],
});

// 4. Apakah ada komentar terkait kasus diatas?
// Di data Fruits, seharusnya untuk id bersifat unik dan tidak boleh ada duplikasi id.

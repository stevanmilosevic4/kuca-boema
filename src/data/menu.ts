// Sadržaj menija. Cene su u dinarima (RSD).
// TODO: zamenite stavkama i cenama iz vaše kuhinje.

export type MenuItem = {
  name: string;
  description?: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "predjela",
    title: "Predjela",
    items: [
      {
        name: "Kajmak iz kace",
        description: "Domaći mladi kajmak uz topli pogačice",
        price: "490",
      },
      {
        name: "Pljosnata kobasica",
        description: "Sa roštilja, uz luk i senf",
        price: "620",
      },
      {
        name: "Boemska plata",
        description: "Pršuta, kulen, sir, kajmak, masline (za dvoje)",
        price: "1.290",
      },
      {
        name: "Punjene paprike feta sirom",
        description: "Pečene babure sa feta sirom i maslinovim uljem",
        price: "540",
      },
    ],
  },
  {
    id: "corbe",
    title: "Čorbe i supe",
    items: [
      { name: "Teleća čorba", description: "Sa domaćim rezancima", price: "390" },
      { name: "Riblja čorba", description: "Od tri vrste rečne ribe", price: "520" },
      { name: "Pasulj prebranac", description: "Sa dimljenom slaninom", price: "480" },
    ],
  },
  {
    id: "ro3tilj",
    title: "Sa roštilja",
    items: [
      { name: "Ćevapi u lepinji", description: "10 komada, kajmak i luk", price: "690" },
      { name: "Pljeskavica boemska", description: "Punjena kajmakom i sirom", price: "780" },
      { name: "Mešano meso", description: "Ćevapi, pljeskavica, vešalica, kobasica", price: "1.190" },
      { name: "Vešalica", description: "Svinjski vrat sa žara", price: "850" },
    ],
  },
  {
    id: "glavna",
    title: "Glavna jela",
    items: [
      {
        name: "Karađorđeva šnicla",
        description: "Punjena kajmakom, uz tartar i pomfrit",
        price: "1.090",
      },
      {
        name: "Teleća koljenica",
        description: "Sporo pečena, uz pečeni krompir",
        price: "1.450",
      },
      {
        name: "Sarma od kiselog kupusa",
        description: "Po starinski, uz kuvani krompir",
        price: "790",
      },
      {
        name: "Pastrmka na žaru",
        description: "Uz blitvu i krompir",
        price: "990",
      },
    ],
  },
  {
    id: "dezerti",
    title: "Dezerti",
    items: [
      { name: "Palačinke sa orasima", description: "Domaći slatko od oraha", price: "420" },
      { name: "Tufahija", description: "Pečena jabuka punjena orasima", price: "460" },
      { name: "Vanil krem sa višnjama", price: "390" },
    ],
  },
  {
    id: "pica",
    title: "Pića",
    items: [
      { name: "Domaća rakija (loza, kajsija, dunja)", price: "260" },
      { name: "Vino na čaše — Prokupac", description: "Domaća autohtona sorta", price: "320" },
      { name: "Točeno pivo 0.5l", price: "290" },
      { name: "Turska kafa", price: "150" },
    ],
  },
];

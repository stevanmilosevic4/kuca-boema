// Kompletan jelovnik — preuzet sa kucaboema.rs/menu (jul 2026),
// transliterovan na latinicu. Sve cene su u dinarima, sa PDV-om.

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
    id: "pecenje",
    title: "Pečenje ★",
    items: [
      {
        name: "Praseće pečenje bez kosti 1 kg",
        description:
          "Naš čuveni specijalitet — vruće praseće bajadere svakim danom u 15h",
        price: "4.400",
      },
      { name: "Teletina ispod sača 300 g", price: "1.750" },
      { name: "Jagnjeće pečenje 1 kg", price: "3.800" },
    ],
  },
  {
    id: "dorucak",
    title: "Doručak",
    items: [
      { name: "Uštipci slani", description: "kajmak, ajvar, sir", price: "650" },
      { name: "Uštipci slatki", description: "džem, eurokrem/nutela", price: "650" },
      { name: "Domaća pita", description: "sir ili sir-zelje", price: "790" },
      { name: "Omlet po želji", price: "450" },
      { name: "Jaja na oko sa kobasicom", price: "550" },
      { name: "Kačamak", price: "450" },
    ],
  },
  {
    id: "hladna-predjela",
    title: "Hladna predjela",
    items: [
      { name: "Kajmak 100 g", price: "490" },
      { name: "Stari sir 100 g", price: "430" },
      { name: "Sir Torotan 100 g", price: "450" },
      { name: "Goveđa pršuta 100 g", price: "680" },
      { name: "Njeguška pršuta 100 g", price: "680" },
      { name: "Kulen 100 g", price: "570" },
      { name: "Pečenica 100 g", price: "570" },
      { name: "Suvi svinjski vrat 100 g", price: "570" },
      { name: "Čvarci 100 g", price: "590" },
      { name: "Stelja 100 g", price: "750" },
      { name: "Daska za 2 osobe 350 g", price: "1.840" },
      { name: "Tatar biftek 150 g", price: "2.250" },
    ],
  },
  {
    id: "topla-predjela",
    title: "Topla predjela",
    items: [
      { name: "Grilovani sir 150 g", price: "620" },
      { name: "Pohovani kačkavalj 150 g", price: "590" },
      { name: "Pečurke na žaru 350 g", price: "590" },
      { name: "Grilovano povrće 300 g", price: "590" },
    ],
  },
  {
    id: "corbe",
    title: "Čorbe i supe",
    items: [
      { name: "Teleća čorba", price: "420" },
      { name: "Domaća supa", price: "360" },
    ],
  },
  {
    id: "rostilj",
    title: "Jela sa roštilja",
    items: [
      { name: "Ćevapi 300 g", price: "1.190" },
      { name: "Pljeskavica 300 g", price: "1.190" },
      { name: "Ćevapi na kajmaku 350 g", price: "1.290" },
      { name: "Pljeskavica na kajmaku 350 g", price: "1.290" },
      { name: "Dimljene kobasice 300 g", price: "990" },
      { name: "Boemski ražnjić 300 g", price: "1.290" },
      { name: "Džigerica na žaru 300 g", price: "890" },
      { name: "Gurmanska pljeskavica 300 g", price: "1.290" },
      { name: "Leskovački uštipci 300 g", price: "1.290" },
      { name: "Svinjski vrat 300 g", price: "1.090" },
      { name: "Svinjski file u pacu 300 g", price: "1.190" },
      { name: "Rolovana vešalica 350 g", price: "1.450" },
      { name: "Pileći file 300 g", price: "990" },
      { name: "Mešano meso 1 kg", price: "2.950" },
    ],
  },
  {
    id: "po-porudzbini",
    title: "Jela po porudžbini",
    items: [
      { name: "Svinjski file u sosu 350 g", price: "1.350" },
      { name: "Svinjski medaljoni u sosu 350 g", price: "1.350" },
      { name: "Pileći file u sosu 350 g", price: "1.190" },
      { name: "Karađorđeva šnicla 400 g", price: "1.450" },
      { name: "Jelo šefa kuhinje 300 g", price: "1.390" },
      { name: "Bečka šnicla 300 g", price: "1.190" },
      { name: "Biftek 250 g", price: "2.950" },
    ],
  },
  {
    id: "gotova-jela",
    title: "Gotova jela",
    items: [
      { name: "Čorbast pasulj", price: "750" },
      { name: "Juneći gulaš", price: "990" },
      { name: "Mućkalica", price: "890" },
      { name: "Prebranac", price: "650" },
      { name: "Punjene paprike", price: "890" },
      { name: "Sarmice od zelja", price: "890" },
    ],
  },
  {
    id: "zimska-jela",
    title: "Zimska gotova jela",
    items: [
      { name: "Sarme", price: "890" },
      { name: "Dimljena butkica u kupusu 1 kg", price: "1.800" },
      { name: "Podvarak", price: "590" },
      { name: "Svadbarski kupus", price: "790" },
    ],
  },
  {
    id: "riba",
    title: "Riba",
    items: [
      { name: "File dimljene pastrmke 350 g", price: "1.750" },
      { name: "Lignje na žaru 250 g", price: "1.690" },
      { name: "File lososa 250 g", price: "1.790" },
      { name: "Morska riba 1 kg", price: "5.000" },
    ],
  },
  {
    id: "salate",
    title: "Salate",
    items: [
      { name: "Čeri paprike punjene sirom", price: "450" },
      { name: "Paprika u pavlaci", price: "450" },
      { name: "Paradajz", price: "350" },
      { name: "Paradajz sa sirom", price: "390" },
      { name: "Krastavac", price: "350" },
      { name: "Srpska", price: "420" },
      { name: "Šopska", price: "440" },
      { name: "Grčka salata", price: "620" },
      { name: "Prolećna salata", price: "420" },
      { name: "Zelena salata", price: "360" },
      { name: "Kupus salata", price: "360" },
      { name: "Pečena paprika", price: "420" },
      { name: "Sveža ljuta paprika", price: "150" },
      { name: "Pečena ljuta paprika", price: "180" },
      { name: "Mladi luk", price: "320" },
      { name: "Moravska salata", price: "480" },
      { name: "Kiseli kupus", price: "420" },
      { name: "Turšija", price: "450" },
      { name: "Ren", price: "280" },
    ],
  },
  {
    id: "peciva",
    title: "Peciva",
    items: [
      { name: "Domaći hleb", price: "170" },
      { name: "Lepinja", price: "150" },
      { name: "Projice", price: "250" },
    ],
  },
  {
    id: "dodaci",
    title: "Dodaci",
    items: [
      { name: "Kiselo mleko", price: "150" },
      { name: "Sos po izboru", price: "300" },
    ],
  },
  {
    id: "dezerti",
    title: "Dezerti",
    items: [
      { name: "Oblande", price: "420" },
      { name: "Bajadere", price: "420" },
      { name: "Domaće palačinke", price: "550" },
      { name: "Sladoled kugla", price: "150" },
    ],
  },
  {
    id: "kafa",
    title: "Kafa",
    items: [
      { name: "Espreso", price: "210" },
      { name: "Espreso sa mlekom", price: "230" },
      { name: "Kapućino", price: "240" },
      { name: "Domaća kafa", price: "170" },
      { name: "Nes kafa", price: "260" },
    ],
  },
  {
    id: "sokovi",
    title: "Sokovi",
    items: [
      { name: "Pepsi 0,25 l", price: "240" },
      { name: "Pepsi maks 0,25 l", price: "240" },
      { name: "Everes biter 0,25 l", price: "250" },
      { name: "Everes tonik 0,25 l", price: "240" },
      { name: "7Up 0,25 l", price: "240" },
      { name: "Mirinda 0,25 l", price: "240" },
      { name: "Guarana 0,25 l", price: "240" },
      { name: "Gusto jabuka 0,20 l", price: "260" },
      { name: "Gusto breskva 0,20 l", price: "260" },
      { name: "Gusto narandža 0,20 l", price: "260" },
      { name: "Gusto jagoda 0,20 l", price: "260" },
      { name: "Gusto borovnica 0,20 l", price: "260" },
    ],
  },
  {
    id: "cedjeni-sokovi",
    title: "Ceđeni sokovi",
    items: [
      { name: "Limunada 0,20 l", price: "290" },
      { name: "Ceđena pomorandža 0,20 l", price: "350" },
      { name: "Ceđeni miks 0,20 l", price: "450" },
    ],
  },
  {
    id: "vode",
    title: "Vode",
    items: [
      { name: "Soda 1 l", price: "280" },
      { name: "Knjaz Miloš 1 l", price: "320" },
      { name: "Knjaz Miloš 0,2 l", price: "210" },
      { name: "Akva Viva 0,7 l", price: "320" },
      { name: "Akva Viva 0,2 l", price: "210" },
    ],
  },
  {
    id: "zestina",
    title: "Žestina",
    items: [
      { name: "Vinjak 0,05 l", price: "260" },
      { name: "Vinjak petica 0,05 l", price: "370" },
      { name: "Džin 0,05 l", price: "270" },
      { name: "Pelinkovac 0,05 l", price: "270" },
      { name: "Votka 0,05 l", price: "360" },
      { name: "Jeger 0,05 l", price: "390" },
      { name: "Lincura 0,05 l", price: "270" },
      { name: "Džejmison 0,03 l", price: "380" },
      { name: "Balantajn 0,03 l", price: "320" },
      { name: "Džoni Voker crveni 0,03 l", price: "330" },
      { name: "Džoni Voker crni 0,03 l", price: "550" },
      { name: "Džek Denijels 0,03 l", price: "410" },
      { name: "Čivas 0,03 l", price: "450" },
      { name: "Loza 0,03 l", price: "290" },
      { name: "Viljamovka Takovo 0,03 l", price: "330" },
      { name: "Rakija Potpis šljiva 0,03 l", price: "330" },
      { name: "Rakija Potpis kajsija 0,03 l", price: "330" },
      { name: "Rakija Potpis dunja 0,03 l", price: "350" },
      { name: "Rakija Potpis medovača 0,03 l", price: "330" },
      { name: "Rakija od maline 0,03 l", price: "330" },
      { name: "Rakija Srpska Trojka šljiva 0,03 l", price: "330" },
    ],
  },
  {
    id: "piva",
    title: "Piva",
    items: [
      { name: "Hajneken 0,25 l", price: "360" },
      { name: "Lav premijum 0,33 l", price: "280" },
      { name: "Tuborg 0,33 l", price: "350" },
      { name: "Blank 0,33 l", price: "330" },
      { name: "Točeno Lav premijum 0,3 l", price: "260" },
      { name: "Točeno Lav premijum 0,5 l", price: "320" },
      { name: "Točeno Karlzberg 0,3 l", price: "330" },
      { name: "Točeno Karlzberg 0,5 l", price: "390" },
    ],
  },
  {
    id: "bela-vina",
    title: "Bela vina",
    items: [
      { name: "Lastar Tamnjanika 0,7 l", price: "3.300" },
      { name: "Rajnski rizling Galot 0,7 l", price: "2.300" },
      { name: "Malvazija Kozlović 0,7 l", price: "4.800" },
      { name: "Aleksandrija Tikveš 0,7 l", price: "1.600" },
      { name: "Smederevka Tikveš 1 l", price: "1.500" },
      { name: "Vukoje Žilavka 0,7 l", price: "4.200" },
      { name: "Suvinjon blank Đorđević 0,7 l", price: "2.300" },
      { name: "Frug Šardone 0,7 l", price: "3.600" },
      { name: "Frug Suvinjon 0,7 l", price: "3.600" },
    ],
  },
  {
    id: "roze-vina",
    title: "Roze vina",
    items: [
      { name: "Roze Lija 100 Žena 0,7 l", price: "2.300" },
      { name: "Tri roze koze Erdevik 0,7 l", price: "2.100" },
      { name: "Rubin roze 1 l", price: "1.300" },
    ],
  },
  {
    id: "crna-vina",
    title: "Crna vina",
    items: [
      { name: "Varina Prokupac 0,7 l", price: "3.200" },
      { name: "Trianon Erdevik 2018 0,7 l", price: "3.500" },
      { name: "Frug Širaz 0,7 l", price: "4.900" },
      { name: "Vukoje Vranac 0,7 l", price: "4.200" },
      { name: "Merlot Janko 0,7 l", price: "3.800" },
      { name: "Bas Prokupac Janko 0,7 l", price: "2.900" },
      { name: "Crna ovca 100 žena 0,7 l", price: "2.300" },
    ],
  },
];

// Kraći izbor za sekciju na početnoj strani — kompletan jelovnik je na /jelovnik.
export const menuHighlights: MenuCategory[] = [
  menu.find((c) => c.id === "pecenje")!,
  {
    id: "rostilj-izbor",
    title: "Sa roštilja — izbor",
    // izbor jela po imenu, da ne zavisi od redosleda u punom jelovniku
    items: [
      "Ćevapi 300 g",
      "Pljeskavica 300 g",
      "Ćevapi na kajmaku 350 g",
      "Gurmanska pljeskavica 300 g",
      "Dimljene kobasice 300 g",
      "Boemski ražnjić 300 g",
    ].map(
      (n) => menu.find((c) => c.id === "rostilj")!.items.find((i) => i.name === n)!
    ),
  },
  {
    id: "gotova-izbor",
    title: "Gotova jela — izbor",
    items: menu.find((c) => c.id === "gotova-jela")!.items.slice(0, 4),
  },
  menu.find((c) => c.id === "dezerti")!,
];

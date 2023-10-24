// getting-started.js
const mongoose = require('mongoose');
const Product = require("./databasestuff/products")
require("dotenv").config()

async function seed() {
    try {
        console.log("hkdwbchw", process.env.DATABASE_URL)
        await mongoose.connect(process.env.DATABASE_URL,

            {
                useNewUrlParser: true,
                useUnifiedTopology: true


            })

            console.log("connected to the database ")

        const products = [
            {
                Title: "T-Shirt",
                Description: "Brand: Canon Model, Name: EOS REBEL T7 18-55mm f/3.5-5.6 IS II Kit Form Factor: DSLR...",
                Image: "https://m.media-amazon.com/images/I/61SrfSmq0NL._AC_SR360,240_QL70_.jpg",
                Price: 20,
                Category: "clothes",
            },
            {
                Title: "Phonefbcjkw dcbwkbc wkbcwkbckwcwc",
                Description: "24.1 Megapixel CMOS (APS-C) sensor with ISO 100–6400 (H: 12800), Built-in Wi-Fi...",
                Image: "https://m.media-amazon.com/images/I/8162vKQDSYL._AC_SY355_.jpg",
                Price: 1400,
                Category: "electronics",
            },
            {
                Title: "tabletcwjkc wkjcwjecjwbk bcwecwecw",
                Description: "this is tabletcwjkc wkjcwjecjwbk bcwecwecw from electronics",
                Image: "https://m.media-amazon.com/images/I/51gj5oQXbnL._AC_UY218_.jpg",
                Price: 800,
                Category: "electronics",
            },
            {
                Title: "Laptopcwe cwhecweckjweck jwebckjwe",
                Description: "cjsacjcjj csbahbcjhancjash csabcascnasckjancc akca cash chachac a cjha ca  cachsa",
                Image: "https://m.media-amazon.com/images/I/91UBjD+vAfL._AC_UY218_.jpg",
                Price: 1800,
                Category: "electronics",
            },
            {
                Title: "KAMRUI GK3 Plus Mini PC 16GB RAM 512GB M.2 SSD, Intel 12th Alder Lake N95 (up to 3.4GHz) Mini PC Windows",
                Description: "cjsacjcjj csbahbcjhancjash csabcascnasckjancc akca cash chachac a cjha ca  cachsa",
                Image: "https://m.media-amazon.com/images/I/61WwWO713iL._AC_UY218_.jpg",
                Price: 1000,
                Category: "electronics",
            },
            {
                Title: "Dell XPS 17 9720 Laptop17.0-inch UHD+ (3840 x 2400) Touchscreen Display, Intel Core i9-12900HK, 32GB",
                Description: "cjsacjcjj csbahbcjhancjash csabcascnasckjancc akca cash chachac a cjha ca  cachsa",
                Image: "https://m.media-amazon.com/images/I/61nNxVrSatL._AC_UL320_.jpg",
                Price: 1000,
                Category: "electronics",
            },
            {
                Title: "Acer 2023 15 HD Premium Chromebook, Intel Celeron N Processor 2.78GHz Turbo Speed, 4GB Ram, 64GB SSD,",
                Description: "cjsacjcjj csbahbcjhancjash csabcascnasckjancc akca cash chachac a cjha ca  cachsa",
                Image: "https://m.media-amazon.com/images/I/61om8cNIoAL._AC_UL320_.jpg",
                Price: 50,
                Category: "electronics",
            },
            {
                Title: "HP 2021 Stream 14 HD SVA Laptop, Intel Celeron N4000 Processor, 4GB RAM, 64GB eMMC Flash Memory, Intel",
                Description: "cjsacjcjj csbahbcjhancjash csabcascnasckjancc akca cash chachac a cjha ca  cachsa",
                Image: "https://m.media-amazon.com/images/I/71ui2rctd6L._AC_UY218_.jpg",
                Price: 100,
                Category: "electronics",
            },
            {
                Title: "Dell 11'' HD IPS Chromebook, Intel Celeron Processor Up to 2.40GHz, 4GB Ram, 16GB SSD, Super-Fast WiFi, Chrome",
                Description: "cjsacjcjj csbahbcjhancjash csabcascnasckjancc akca cash chachac a cjha ca  cachsa",
                Image: "https://m.media-amazon.com/images/I/61OZDcgDjjL._AC_UY218_.jpg",
                Price: 1250,
                Category: "electronics",
            },
            {
                Title: "Lessons in Chemistry: A Novel",
                Description: "cjsacjcjj csbahbcjhancjash csabcascnasckjancc akca cash chachac a cjha ca  cachsa",
                Image: "https://images-na.ssl-images-amazon.com/images/I/71yNgTMEcpL._AC_UL210_SR195,210_.jpg",
                Price: 15,
                Category: "books",
            },
            {
                Title: "Outlive: The Science and Art of Longevity",
                Description: "cjsacjcjj csbahbcjhancjash csabcascnasckjancc akca cash chachac a cjha ca  cachsa",
                Image: "https://images-na.ssl-images-amazon.com/images/I/71Pyj+9IPdL._AC_UL210_SR195,210_.jpg",
                Price: 15,
                Category: "books",
            },
            {
                Title: "The Housemaid",
                Description: "cjsacjcjj csbahbcjhancjash csabcascnasckjancc akca cash chachac a cjha ca  cachsa",
                Image: "https://images-na.ssl-images-amazon.com/images/I/81WduXjuKwL._AC_UL210_SR195,210_.jpg",
                Price: 15,
                Category: "books",
            },
            {
                Title: "Demon Copperhead: A Pulitzer Prize Winner",
                Description: "cjsacjcjj csbahbcjhancjash csabcascnasckjancc akca cash chachac a cjha ca  cachsa",
                Image: "https://images-na.ssl-images-amazon.com/images/I/71bVExi4yXL._AC_UL210_SR195,210_.jpg",
                Price: 15,
                Category: "books",
            },
            {
                Title: "The Body Keeps the Score: Brain, Mind, and Body in the Healing…",
                Description: "cjsacjcjj csbahbcjhancjash csabcascnasckjancc akca cash chachac a cjha ca  cachsa",
                Image: "https://images-na.ssl-images-amazon.com/images/I/71Fh3yg+0WL._AC_UL127_SR127,127_.jpg",
                Price: 15,
                Category: "books",
            },
            {
                Title: "A Court of Thorns and Roses (A Court of Thorns and Roses, 1)",
                Description: "cjsacjcjj csbahbcjhancjash csabcascnasckjancc akca cash chachac a cjha ca  cachsa",
                Image: "https://images-na.ssl-images-amazon.com/images/I/8180Uhc4BuL._AC_UL210_SR195,210_.jpg",
                Price: 15,
                Category: "books",
            },
            {
                Title: "Things We Never Got Over (Knockemout)",
                Description: "cjsacjcjj csbahbcjhancjash csabcascnasckjancc akca cash chachac a cjha ca  cachsa",
                Image: "https://images-na.ssl-images-amazon.com/images/I/71HsLc-TNlL._AC_UL210_SR195,210_.jpg",
                Price: 15,
                Category: "books",
            },
            {
                Title: "Fast Like a Girl: A Woman's Guide to Using the Healing Power of…",
                Description: "cjsacjcjj csbahbcjhancjash csabcascnasckjancc akca cash chachac a cjha ca  cachsa",
                Image: "https://images-na.ssl-images-amazon.com/images/I/618D8gSTO8L._AC_UL210_SR195,210_.jpg",
                Price: 15,
                Category: "books",
            },
            {
                Title: "Twisted Love (Twisted, 1)",
                Description: "cjsacjcjj csbahbcjhancjash csabcascnasckjancc akca cash chachac a cjha ca  cachsa",
                Image: "https://images-na.ssl-images-amazon.com/images/I/71aXWhr9tTL._AC_UL210_SR195,210_.jpg",
                Price: 15,
                Category: "books",
            },
            {
                Title: "Board Game",
                Description: "bhicchbehch",
                Image: "https://example.com/boardgame.jpg",
                Price: 30,
                Category: "games",
            },
            {
                Title: "Final Fantasy XVI - PlayStation 5",
                Description: "cjsacjcjj csbahbcjhancjash csabcascnasckjancc akca cash chachac a cjha ca  cachsa",
                Image: "https://m.media-amazon.com/images/I/81CixOru0zL._AC_SX466_.jpg",
                Price: 30,
                Category: "games",
            },
            {
                Title: "Star Wars Jedi: Survivor - Xbox Series X",
                Description: "cjsacjcjj csbahbcjhancjash csabcascnasckjancc akca cash chachac a cjha ca  cachsa",
                Image: "https://m.media-amazon.com/images/I/61UsW1AtZBL._AC_UY218_.jpg",
                Price: 30,
                Category: "games",
            },
            {
                Title: "The Callisto Protocol Standard Edition - Xbox One",
                Description: "cjsacjcjj csbahbcjhancjash csabcascnasckjancc akca cash chachac a cjha ca  cachsa",
                Image: "https://m.media-amazon.com/images/I/71ZkVWVZdyL._AC_UY218_.jpg",
                Price: 30,
                Category: "games",
            },
            {
                Title: "PAC-MAN World Re-PAC - Xbox Series X",
                Description: "cjsacjcjj csbahbcjhancjash csabcascnasckjancc akca cash chachac a cjha ca  cachsa",
                Image: "https://m.media-amazon.com/images/I/71P4HCk3ctL._AC_UY218_.jpg",
                Price: 30,
                Category: "games",
            },
            {
                Title: "Sonic Frontiers - Xbox Series X",
                Description: "cjsacjcjj csbahbcjhancjash csabcascnasckjancc akca cash chachac a cjha ca  cachsa",
                Image: "https://m.media-amazon.com/images/I/81aqvlzrIjL._AC_UY218_.jpg",
                Price: 30,
                Category: "games",
            },
            {
                Title: "DC's Justice League: Cosmic Chaos- Xbox Series X",
                Description: "cjsacjcjj csbahbcjhancjash csabcascnasckjancc akca cash chachac a cjha ca  cachsa",
                Image: "https://m.media-amazon.com/images/I/81I1bG+9NuL._AC_UY218_.jpg",
                Price: 30,
                Category: "games",
            },
            {
                Title: "Disney Classic Games Collection  - Xbox One",
                Description: "cjsacjcjj csbahbcjhancjash csabcascnasckjancc akca cash chachac a cjha ca  cachsa",
                Image: "https://m.media-amazon.com/images/I/8177FmSr1OL._AC_UY218_.jpg",
                Price: 30,
                Category: "games",
            },
            {
                Title: "Dead Island 2: Day 1 Edition - Xbox Series X",
                Description: "cjsacjcjj csbahbcjhancjash csabcascnasckjancc akca cash chachac a cjha ca  cachsa",
                Image: "https://m.media-amazon.com/images/I/81hQumhfFeL._AC_UY218_.jpg",
                Price: 30,
                Category: "games",
            },
            {
                Title: "DREDGE: Deluxe Edition - Xbox Series X",
                Description: "cjsacjcjj csbahbcjhancjash csabcascnasckjancc akca cash chachac a cjha ca  cachsa",
                Image: "https://m.media-amazon.com/images/I/81Jaq9UsKJL._AC_UY218_.jpg",
                Price: 30,
                Category: "games",
            },
        ];

        await Product.create(products);

        console.log('Products were successfully seeded.');
    } catch (error) {
        console.error('Error while seeding data:', error);
    } finally {
        // Close the database connection
        mongoose.disconnect();
    }
}

seed()


// Your data



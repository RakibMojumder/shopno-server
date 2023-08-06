const data = [
    {
        name: 'Transparent Frame Clear glass for Men',
        category: 'Fashion',
        price: 120,
        discountPrice: 250,
        rating: 4.7,
        totalRating: 1221,
        image: 'https://i.ibb.co/1KJ0WGn/1df1ab69f4225f500a7e0044029bbc12.jpg'
    },
    {
        name: 'Multiplex Beautiful Stylish modern Sunglasses for Women',
        category: 'Fashion',
        price: 176,
        discountPrice: 280,
        rating: 4.4,
        totalRating: 1720,
        image: 'https://i.ibb.co/3pLGKdc/a681f66eec9c760e320711d4f36386d5.jpg'
    },
    {
        name: 'Stylish Sunglasses for Men - Black and golden - Sun Glass For Men - Sunglasses For Men',
        category: 'Fashion',
        price: 100,
        rating: 4,
        totalRating: 928,
        image: 'https://i.ibb.co/jgjx32G/b8d9248cbfbf03edc8c7df505b901876.jpg'
    },
    {
        name: 'Round fashion sunglasses for men or women',
        category: 'Fashion',
        price: 165,
        discountPrice: 220,
        rating: 4.9,
        totalRating: 1982,
        image: 'https://i.ibb.co/vw7kq77/29dcddf973e1515f1412e26c402789ba.jpg'
    },
    {
        name: 'Tangile Saree for women',
        category: 'Fashion',
        price: 1165,
        discountPrice: 1520,
        rating: 5,
        totalRating: 82,
        image: 'https://i.ibb.co/LdxVCrC/8ff7c090296bff8c2541da881ac790f4.jpg'
    },
    {
        name: 'Tangail Tat Multi Colour Cotton Saree for Women',
        category: 'Fashion',
        price: 2165,
        discountPrice: 2550,
        rating: 5,
        totalRating: 132,
        image: 'https://i.ibb.co/yhkc0kd/ce0b03c0d3ae0656b623a4d4f6334e45.jpg'
    },
    {
        name: 'Long sleeve Casual shirt for men',
        category: 'Fashion',
        price: 800,
        discountPrice: 950,
        rating: 5,
        totalRating: 78,
        image: 'https://i.ibb.co/Dp7H7JX/6f21695360a0e06db002b7a6738d1a27.jpg'
    },
    {
        name: 'Denim Long Sleeve Casual Shirt For Men - Shirt - Shirt For Men - Shirt',
        category: 'Fashion',
        price: 800,
        discountPrice: 950,
        rating: 5,
        totalRating: 45,
        image: 'https://i.ibb.co/bHdsMW1/5cc89a9c63fd6493e9f32c3a7db9c4fb.jpg'
    },
    {
        name: 'Stylish Regular Slim Fit Blank Cotton Long Sleeve Formal Shirt For Men',
        category: 'Fashion',
        price: 550,
        discountPrice: 750,
        rating: 5,
        totalRating: 145,
        image: 'https://i.ibb.co/41QzSHY/2a7b92d9e0f0450a7c931da54bbb859c.jpg'
    },
    {
        name: 'Casual shirt for men - Shirt For Men',
        category: 'Fashion',
        price: 550,
        discountPrice: 750,
        rating: 5,
        totalRating: 15,
        image: 'https://i.ibb.co/F8j09zZ/e7d3d3e54cf6f6abd14c2f277b6ffd01.jpg'
    },
    {
        name: 'Army Green Color Casual Shirt for Men - Shirt For Men - Shirt',
        category: 'Fashion',
        price: 450,
        discountPrice: 660,
        rating: 5,
        totalRating: 415,
        image: 'https://i.ibb.co/VxG7Zz9/a68525ffcac9f7f86b3e1b76c610f1c7.jpg'
    },
    {
        name: 'HH Fashion New Long Sleeve Casual Shirt for Men',
        category: 'Fashion',
        price: 450,
        discountPrice: 660,
        rating: 5,
        totalRating: 1415,
        image: 'https://i.ibb.co/w7C76jy/e29c9d599ef53af28d89cee63a8a7383.jpg'
    },
    {
        name: 'Premium Quality Band Collar Long Sleeve Casual Shirt For Man',
        category: 'Fashion',
        price: 450,
        discountPrice: 660,
        rating: 5,
        totalRating: 1415,
        image: 'https://i.ibb.co/x61YRfz/c08d46be46273dba38c40dd91a874337.jpg'
    },
    {
        name: 'Teal Colour Long Sleeve Casual Shirt For Man',
        category: 'Fashion',
        price: 450,
        discountPrice: 660,
        rating: 5,
        totalRating: 75,
        image: 'https://i.ibb.co/QJkf7sH/1f733ad1189dd92f980bafa3f7cb296a.jpg'
    },
    {
        name: 'Sky Bule Slab Kapor casual huf Shirt for men new style',
        category: 'Fashion',
        price: 450,
        discountPrice: 660,
        rating: 5,
        totalRating: 47,
        image: 'https://i.ibb.co/W3JFXXR/c5110bea73d27a1051c9f628cafab22b.jpg'
    },
    {
        name: 'Long Casual Cheak Shirt for men',
        category: 'Fashion',
        price: 450,
        discountPrice: 660,
        rating: 4.3,
        totalRating: 7,
        image: 'https://i.ibb.co/ZzWt1qV/8be54fe17d9c6235228ffeb34809b237.jpg'
    },
    {
        name: 'New Style Cotton Long Sleeve Formal Shirt For Men - Formal Shirt For Men',
        category: 'Fashion',
        price: 450,
        discountPrice: 660,
        rating: 4.8,
        totalRating: 16,
        image: 'https://i.ibb.co/Jtw3N50/f950fe6337145da107cd4e7a763e0c1b.jpg'
    },
    {
        name: 'Double Pocket Long Sleeve Casual Shirt For Man - Shirt',
        category: 'Fashion',
        price: 650,
        discountPrice: 800,
        rating: 4.8,
        totalRating: 9,
        image: 'https://i.ibb.co/xmx0HmN/f1e2ee9886a769671962b21e016a956a.jpg'
    },
    {
        name: 'Black Half Silk Tangail Tat Saree Without Blouse Piece For Women',
        category: 'Fashion',
        price: 1650,
        discountPrice: 1800,
        rating: 4.7,
        totalRating: 99,
        image: 'https://i.ibb.co/tYR1PKW/815c0a84691372b7ac254021b0fd862f.jpg'
    },
    {
        name: 'Tangail Cotton Batik Print Saree For Women - Sari',
        category: 'Fashion',
        price: 1650,
        discountPrice: 1800,
        rating: 4.9,
        totalRating: 16,
        image: 'https://i.ibb.co/jfPRYgb/b6977a428451e960c73cf57a21dd3d6b.jpg'
    },
    {
        name: 'Girls High Hill Weightless Women Fashionable Full Stone Shoes',
        category: 'Fashion',
        price: 650,
        discountPrice: 800,
        rating: 4.9,
        totalRating: 66,
        image: 'https://i.ibb.co/Rg9yvt7/02e5211dc36ff23ace13b85f56a3614d.jpg'
    },
    {
        name: 'Box Balance Heel Shoes For Women - Shoe For Women',
        category: 'Fashion',
        price: 650,
        discountPrice: 800,
        rating: 5,
        totalRating: 93,
        image: 'https://i.ibb.co/MMJnLXF/8edc2f13189acc9a0fb63eaf48832073.jpg'
    },
    {
        name: 'New Fashionable Box Balance Heel shoes for Women',
        category: 'Fashion',
        price: 650,
        discountPrice: 800,
        rating: 5,
        totalRating: 7,
        image: 'https://i.ibb.co/bB4HhDb/3f4bd3fd1c8744ed2bddc166edd0f183.jpg'
    },
    {
        name: 'Semi Pancil Heel Hand Made Sandel for Women',
        category: 'Fashion',
        price: 400,
        discountPrice: 620,
        rating: 5,
        totalRating: 11,
        image: 'https://i.ibb.co/zZWVxqr/40be4fbe412cf575eb23aeade077bb09.jpg'
    },
    {
        name: 'PK Imported Ladies Shoe',
        category: 'Fashion',
        price: 400,
        discountPrice: 620,
        rating: 4.5,
        totalRating: 18,
        image: 'https://i.ibb.co/VTwg4yr/e7ed051ad657d0b9ea34c0527b993d4e.jpg'
    },
    {
        name: 'Bangladesh National Cricket Team Jersey (L)',
        category: 'Fashion',
        price: 380,
        discountPrice: 520,
        rating: 5,
        totalRating: 3218,
        image: 'https://i.ibb.co/NVB1wxd/bangladesh-national-cricket-team-jersey-l-1-pcs.webp'
    },
    {
        name: 'Blue Printed Cotton Shirt',
        category: 'Fashion',
        price: 980,
        rating: 5,
        totalRating: 2511,
        image: 'https://i.ibb.co/JvDbFSJ/0070000054384.webp'
    },
    {
        name: 'MAVERICK MENS CASUAL SHIRT',
        category: 'Fashion',
        price: 1980,
        rating: 5,
        totalRating: 257,
        image: 'https://i.ibb.co/6v947RC/shirt.png'
    },
    {
        name: 'Comfy Relax Trouser',
        category: 'Fashion',
        price: 1480,
        discountPrice: 1680,
        rating: 5,
        totalRating: 557,
        image: 'https://i.ibb.co/0ZqFdtB/37a-600x600.jpg'
    },
    {
        name: 'Men’s Dark Blue color Denim Pant',
        category: 'Fashion',
        price: 1250,
        discountPrice: 1440,
        rating: 4,
        totalRating: 157,
        image: 'https://i.ibb.co/6DtYVVc/43-600x600.jpg'
    },
    {
        name: 'Men’s Blue color Denim Pant',
        category: 'Fashion',
        price: 2250,
        rating: 4.7,
        totalRating: 82,
        image: 'https://i.ibb.co/3W62DZ6/46-600x600.jpg'
    },
    {
        name: 'Classic Ash Color Jogger',
        category: 'Fashion',
        price: 2050,
        rating: 4.7,
        totalRating: 69,
        image: 'https://i.ibb.co/2qpSCS0/41-600x600.jpg'
    },
    {
        name: 'Premium Grey Colour Slim Fit Formal Pant',
        category: 'Fashion',
        price: 3550,
        rating: 5,
        totalRating: 279,
        image: 'https://i.ibb.co/pz9JZ0P/39-600x600.jpg'
    },
    {
        name: 'Premium Black Slim Fit Formal Pant',
        category: 'Fashion',
        price: 3550,
        rating: 5,
        totalRating: 244,
        image: 'https://i.ibb.co/Bt7gNJP/32-2-600x600.jpg'
    },
    {
        name: 'Premium Beige Colour Slim Fit Formal Pant',
        category: 'Fashion',
        price: 3550,
        rating: 5,
        totalRating: 114,
        image: 'https://i.ibb.co/Trz02sn/38-600x600.jpg'
    },
    {
        name: 'Casio MRW-200H-1B3VDF Sports Day Date Fiber Belt',
        category: 'Fashion',
        price: 3550,
        discountPrice: 4000,
        rating: 5,
        totalRating: 18,
        image: 'https://i.ibb.co/854RwgY/mrw-200h-1b3v311.jpg'
    },
    {
        name: 'Casio MTP-1370L-7AVDF Analog Enticer Day',
        category: 'Fashion',
        price: 3350,
        discountPrice: 4680,
        rating: 5,
        totalRating: 7,
        image: 'https://i.ibb.co/fddBgLJ/casio-mtp-1370l-7avdf.jpg'
    },
    {
        name: 'Casio AE-1200WHB-1BV World Time Men’s Watch',
        category: 'Fashion',
        price: 2150,
        discountPrice: 2780,
        rating: 4.5,
        totalRating: 5,
        image: 'https://i.ibb.co/B6N9345/casio-mtp-v005l-7b-men-s-watch.jpg'
    },
    {
        name: 'Tangail Tat Multi Color Cotton Saree For Women - Sharee For Women',
        category: 'Fashion',
        price: 1400,
        discountPrice: 1650,
        rating: 4.6,
        totalRating: 9,
        image: 'https://i.ibb.co/7r3Rhrc/8520189287d6204870c5e606de54c6fc.jpg'
    },
    {
        name: 'Denim Stylish Long Sleeve Shirt For Men - Shirt For Men - Shirt',
        category: 'Fashion',
        price: 800,
        discountPrice: 950,
        rating: 5,
        totalRating: 91,
        image: 'https://i.ibb.co/gDHWY0K/bde5333461da645f7ff57fa9ca57707b.jpg'
    },
    {
        name: 'Poedagar 628 Quartz Leather Strap Men’s Watch',
        category: 'Fashion',
        price: 1450,
        discountPrice: 1800,
        rating: 4,
        totalRating: 2,
        image: 'https://i.ibb.co/khZ4ZSD/18-1-2.jpg'
    },
    {
        name: 'Nirvana Color Liquid Matte Lipstick - Timeless L02',
        category: 'Beauty',
        price: 4450,
        discountPrice: 4800,
        rating: 4.6,
        totalRating: 23,
        image: 'https://i.ibb.co/XXGtLQT/Nirvana-Color-Liquid-Matte-Lipstick-Timeless-4-1-750x750.jpg'
    },
    {
        name: 'Vaseline Lip Therapy - Rosy Lips',
        category: 'Beauty',
        price: 450,
        discountPrice: 600,
        rating: 4.6,
        totalRating: 3,
        image: 'https://i.ibb.co/pzZ3Vn6/2118-Vaseline-Lip-Therapy-Rosy-Lips-1-1-570x570.jpg'
    },
    {
        name: 'wet n wild MegaLast Liquid Catsuit Matte Lipstick – Give Me Mocha',
        category: 'Beauty',
        price: 750,
        discountPrice: 900,
        rating: 4.6,
        totalRating: 33,
        image: 'https://i.ibb.co/tKZn8Cz/wetnwild-give-me-mocha-570x570.jpg'
    },
    {
        name: 'Lilac Premium Lip Balm - Tinted Strawberry with SPF15',
        category: 'Beauty',
        price: 650,
        discountPrice: 800,
        rating: 5,
        totalRating: 31,
        image: 'https://i.ibb.co/zZkMFqs/Lilac-Premium-Lip-Balm-Tinted-Strawberry-with-SPF15-1-2-570x570.jpg'
    },
    {
        name: 'Skin Cafe Floral Hydrating Toner',
        category: 'Beauty',
        price: 263,
        discountPrice: 400,
        rating: 3.6,
        totalRating: 42,
        image: 'https://i.ibb.co/864jZp1/skin-cafe-Fianl-Tonner-570x570.jpg'
    },
    {
        name: 'Parachute Naturale Shampoo Onion Hair Fall Control',
        category: 'Beauty',
        price: 563,
        discountPrice: 620,
        rating: 4,
        totalRating: 102,
        image: 'https://i.ibb.co/JC3pBWs/Parachute-Naturale-Shampoo-Onion-Hair-Fall-Control-175ml-sku25165-570x570.png'
    },
    {
        name: 'Parachute Naturale Shampoo Nourishing Care',
        category: 'Beauty',
        price: 403,
        discountPrice: 521,
        rating: 4,
        totalRating: 76,
        image: 'https://i.ibb.co/jrcfpMf/Parachute-Naturale-Shampoo-Nourishing-Care-170ml-570x570.png'
    },
    {
        name: 'Maya True Herbs 100% Cold-Pressed Virgin & Organic Marula Oil from Africa',
        category: 'Beauty',
        price: 850,
        discountPrice: 900,
        rating: 5,
        totalRating: 70,
        image: 'https://i.ibb.co/GWtnppM/Maya-True-Herbs-100-Cold-Pressed-Virgin-amp-Organic-Marula-Oil-from-Africa-product-570x570.jpg'
    },
    {
        name: 'Dabur Amla Hair Oil',
        category: 'Beauty',
        price: 600,
        discountPrice: 750,
        rating: 5,
        totalRating: 153,
        image: 'https://i.ibb.co/dtCkzLn/Dabur-Amla-Hair-Oil-100-ml-sku20621-570x570.jpg'
    },
    {
        name: 'Rajkonna Olive Oil',
        category: 'Beauty',
        price: 600,
        discountPrice: 750,
        rating: 5,
        totalRating: 112,
        image: 'https://i.ibb.co/6g1TK6M/Rajkonna-Olive-Oil-Front-570x570.jpg'
    },
    {
        name: 'Skin Cafe Coconut Oil',
        category: 'Beauty',
        price: 600,
        discountPrice: 750,
        rating: 4,
        totalRating: 22,
        image: 'https://i.ibb.co/jkJ7hHX/Skin-caf-Coconut-Oil-1-570x570.jpg'
    },
    {
        name: 'Femfresh Intimate Skin Care Freshness Deodorants',
        category: 'Beauty',
        price: 650,
        discountPrice: 780,
        rating: 4.9,
        totalRating: 108,
        image: 'https://i.ibb.co/xSYP5yt/Femfresh-Intimate-Skin-Care-Freshness-Deodorants-570x570.jpg'
    },
    {
        name: 'Rasasi Blue Lady Deodorant Body Spray For Women',
        category: 'Beauty',
        price: 650,
        discountPrice: 780,
        rating: 4.9,
        totalRating: 147,
        image: 'https://i.ibb.co/1sYdr6t/Rasasi-Blue-Lady-Deodorant-Body-Spray-For-Women-200ml-570x570.jpg'
    },
    {
        name: 'She Is Sexy EDT Perfume For Women',
        category: 'Beauty',
        price: 800,
        discountPrice: 980,
        rating: 4.9,
        totalRating: 17,
        image: 'https://i.ibb.co/ZLNhncL/She-Is-Sexy-EDT-Perfume-For-Women-570x570.jpg'
    },
    {
        name: 'Die Cast Toyota Land Cruiser Fj40 1:24 Model Car',
        category: 'Baby',
        price: 450,
        discountPrice: 500,
        rating: 4.9,
        totalRating: 1007,
        image: 'https://i.ibb.co/Fs3pW89/ezgif-com-webp-to-jpg-2-500x500-228x228.jpg'
    },
    {
        name: 'Disney Cars Value Vehicle Asst',
        category: 'Baby',
        price: 850,
        discountPrice: 900,
        rating: 4.9,
        totalRating: 1604,
        image: 'https://i.ibb.co/LJRDqsd/car-228x228.jpg'
    },
    {
        name: 'Lego City 60177',
        category: 'Baby',
        price: 650,
        discountPrice: 800,
        rating: 4,
        totalRating: 642,
        image: 'https://i.ibb.co/D8WtVH6/9159-Ed-UYb-FL-AC-SY355-228x228.jpg'
    },
    {
        name: 'Whistle Racer Air-Powered Race Car Toys with',
        category: 'Baby',
        price: 700,
        discountPrice: 800,
        rating: 4,
        totalRating: 2762,
        image: 'https://i.ibb.co/QNDvxsr/71z-Lklxq-ZSL-SX466-228x228.jpg'
    },
    {
        name: 'Avonee Jumbo Pack Large Pant Diaper 9-14Kg 48Pcs',
        category: 'Baby',
        price: 890,
        discountPrice: 1090,
        rating: 4,
        totalRating: 722,
        image: 'https://i.ibb.co/nChsrr9/b6a8e9e8ab4be61e73bc00365f944bb8-1-228x228.png'
    },
    {
        name: 'Avonee Jumbo Pack Small Pant Diaper 4-8Kg 60Pcs',
        category: 'Baby',
        price: 990,
        discountPrice: 1090,
        rating: 4.5,
        totalRating: 491,
        image: 'https://i.ibb.co/W5NpsL8/a50ad6a00a8832ae778002c5a492786d-228x228.png'
    },
    {
        name: 'Huggies Dry Large Pant Diaper 9-14Kg - 50 Pcs (Malaysia)',
        category: 'Baby',
        price: 1660,
        discountPrice: 1890,
        rating: 4.5,
        totalRating: 2498,
        image: 'https://i.ibb.co/svn56DV/Large-228x228.jpg'
    },
    {
        name: 'Aptamil Milk Stage 1',
        category: 'Baby',
        price: 3000,
        discountPrice: 3290,
        rating: 4.5,
        totalRating: 2998,
        image: 'https://i.ibb.co/92yn7yL/apta1-228x228.jpg'
    },
    {
        name: 'Aptamil Milk Stage 2',
        category: 'Baby',
        price: 3000,
        discountPrice: 3290,
        rating: 4.5,
        totalRating: 2523,
        image: 'https://i.ibb.co/gyLfPQZ/aptamill2-228x228.jpg'
    },
    {
        name: 'BIOMIL 1 Standard Infant Formula Pack 350g',
        category: 'Baby',
        price: 520,
        discountPrice: 790,
        rating: 4.5,
        totalRating: 829,
        image: 'https://i.ibb.co/SPxqpD2/biomil-1-standard-infant-formula-pack-350g-dfg-BHKhgj8-228x228.png'
    },
    {
        name: 'Biomil 2 Follow-Up Infant Milk Formula Tin 400gm',
        category: 'Baby',
        price: 520,
        discountPrice: 790,
        rating: 4.5,
        totalRating: 774,
        image: 'https://i.ibb.co/HCJLswM/Biomil-2-Follow-Up-Infant-Milk-Formula-Tin-6-12-months-2-min-228x228.jpg'
    },
    {
        name: 'Fisher ml Squeezy Silicone Food Feeder Blue',
        category: 'Baby',
        price: 420,
        discountPrice: 500,
        rating: 4,
        totalRating: 1393,
        image: 'https://i.ibb.co/VvNmTCT/51f-U4pz8jt-L-SL1200-228x228.jpg'
    },
    {
        name: 'Cool Kid Toddler Mini School Bags: Squirrel',
        category: 'Baby',
        price: 699,
        discountPrice: 770,
        rating: 4,
        totalRating: 893,
        image: 'https://i.ibb.co/Wz4wrZ3/Cool-Kid-Toddler-Mini-School-Bags-Squirrel-500x500-228x228.jpg'
    },
    {
        name: 'Smiggle Ultra Explorer Comfort Backpack Black',
        category: 'Baby',
        price: 799,
        discountPrice: 850,
        rating: 4,
        totalRating: 434,
        image: 'https://i.ibb.co/tYgXVyR/Capture-1-228x228.png'
    },
    {
        name: 'Johnsons Baby Milk + Rice Cream - 50gm',
        category: 'Baby',
        price: 499,
        discountPrice: 550,
        rating: 4.6,
        totalRating: 2434,
        image: 'https://i.ibb.co/YQ0PspP/628621df215f7-johnson-s-baby-milk-rice-cream-86275-228x228.jpg'
    },
    {
        name: 'Johnsons Baby Powder Blossoms 50 gm',
        category: 'Baby',
        price: 99,
        discountPrice: 130,
        rating: 4.6,
        totalRating: 2835,
        image: 'https://i.ibb.co/s577Fsm/50-228x228.jpg'
    },
    {
        name: 'Xiaomi Pinlo PL-T075W1H Bread Toaster Machine',
        category: 'Kitchen',
        price: 7370,
        rating: 5,
        totalRating: 35,
        image: 'https://i.ibb.co/pJgkq3L/Pinlo-Toaster-Maker-Xiaomi.webp'
    },
    {
        name: 'Royal Kitchen Shelf Classic 4 Door Blue',
        category: 'Kitchen',
        price: 5370,
        discountPrice: 6500,
        rating: 4.5,
        totalRating: 2015,
        image: 'https://i.ibb.co/dDmNDBp/2022-07-21-918083-2.jpg'
    },
] 
const products = [
        {
          img: '../src/assets/furniture/sub-table.png',
          title: 'Microsoft AI Sofa Chair',
          desc: `Discover the future of comfort with our Microsoft AI Sofa Chair.\nDesigned for modern living spaces, this chair adapts to your posture.\nPremium materials ensure durability and a luxurious feel.\nAI-powered adjustments provide personalized support all day.\nEasy to clean and maintain for busy households.\nSleek design fits seamlessly into any decor.\nEco-friendly construction for a sustainable choice.\nLightweight yet sturdy for easy rearrangement.\nPerfect for work, relaxation, or entertaining guests.\nExperience innovation and style in one package.`,
          price: '$340 - $354',
          minOrder: '1 Piece',
          rating: 4.9,
          reviews: 236,
          isFavorite: false,
          category: 'sofa'
        },
        {
          img: '../src/assets/furniture/1.jpg',
          title: 'Modern Lounge Chair',
          desc: `Elevate your home with the Modern Lounge Chair.\nErgonomic contours cradle your body for ultimate relaxation.\nHigh-density foam cushions offer lasting comfort.\nUpholstered in soft, breathable fabric for year-round use.\nSolid wood frame ensures stability and longevity.\nMinimalist design complements any room.\nEasy assembly with included instructions.\nNon-slip feet protect your floors.\nAvailable in multiple colors to suit your style.\nA perfect blend of form and function.`,
          price: '$340 - $354',
          minOrder: '1 Piece',
          rating: 4.9,
          reviews: 236,
          isFavorite: true,
          category: 'chair'
        },
        {
          img: '../src/assets/furniture/2.png',
          title: 'Luxury Recliner',
          desc: `Unwind in luxury with our state-of-the-art Recliner.\nReclines up to 180° for optimal comfort.\nSupportive headrest and lumbar cushioning.\nSmooth, quiet reclining mechanism.\nPremium leather finish for a sophisticated look.\nBuilt-in cup holders for convenience.\nStain-resistant and easy to clean.\nPerfect for movie nights or afternoon naps.\nCompact design fits small spaces.\nEnjoy relaxation like never before.`,
          price: '$340 - $354',
          minOrder: '1 Piece',
          rating: 4.9,
          reviews: 236,
          isFavorite: false,
          category: 'table'
        },
        {
          img: '../src/assets/furniture/3.png',
          title: 'Minimalist Armchair',
          desc: `Add a touch of elegance with the Minimalist Armchair.\nSleek lines and modern silhouette.\nSturdy metal frame for lasting durability.\nPlush seat and backrest for comfort.\nNeutral tones blend with any decor.\nLightweight for easy movement.\nAssembly is quick and hassle-free.\nPerfect for living rooms or offices.\nLow-maintenance materials.\nA stylish addition to any space.`,
          price: '$340 - $354',
          minOrder: '1 Piece',
          rating: 4.9,
          reviews: 236,
          isFavorite: false,
          category: 'bed'
        },
        {
          img: '../src/assets/furniture/4.png',
          title: 'Classic Wooden Chair',
          desc: `Classic Wooden Chair brings timeless charm to your home.\nHandcrafted from solid wood for strength.\nErgonomic backrest supports good posture.\nSmooth, polished finish highlights natural grain.\nVersatile design suits dining or study areas.\nEasy to stack and store.\nProtective pads prevent floor scratches.\nSimple, elegant, and functional.\nSustainably sourced materials.\nA must-have for traditional interiors.`,
          price: '$340 - $354',
          minOrder: '1 Piece',
          rating: 4.9,
          reviews: 236,
          isFavorite: false,
          category: 'bed'
        },
        {
          img: '../src/assets/furniture/5.png',
          title: 'AI Smart Table',
          desc: `Upgrade your workspace with the AI Smart Table.\nIntegrated wireless charging for your devices.\nSpacious tabletop for multitasking.\nSleek, modern design enhances productivity.\nDurable, scratch-resistant surface.\nHidden cable management keeps things tidy.\nAdjustable height for ergonomic comfort.\nEasy to assemble and move.\nEco-friendly materials used.\nA smart solution for modern offices.`,
          price: '$340 - $354',
          minOrder: '1 Piece',
          rating: 4.9,
          reviews: 236,
          isFavorite: false,
          category: 'desk'
        },
        {
          img: '../src/assets/furniture/6.png',
          title: 'Ergo Office Chair',
          desc: `Work in comfort with the Ergo Office Chair.\nBreathable mesh back keeps you cool.\nAdjustable seat height and armrests.\nLumbar support reduces back strain.\nSmooth-rolling casters for mobility.\nSturdy base for stability.\nEasy to assemble with clear instructions.\nContemporary design fits any office.\nSupports long hours of productivity.\nYour back will thank you.`,
          price: '$340 - $354',
          minOrder: '1 Piece',
          rating: 4.9,
          reviews: 236,
          isFavorite: false,
          category: 'bench'
        },
        {
          img: '../src/assets/furniture/7.png',
          title: 'Premium Sofa Set',
          desc: `Host in style with the Premium Sofa Set.\nSpacious seating for family and friends.\nPlush cushions provide exceptional comfort.\nDurable upholstery resists wear and tear.\nSturdy frame ensures long-lasting use.\nModern design elevates your living room.\nEasy to clean and maintain.\nNeutral colors match any decor.\nPerfect for gatherings or quiet nights in.\nA centerpiece for your home.`,
          price: '$340 - $354',
          minOrder: '1 Piece',
          rating: 4.9,
          reviews: 236,
          isFavorite: false,
          category: 'bench'
        },
        {
          img: '../src/assets/furniture/sub-table.png',
          title: 'Microsoft AI Sofa Chair',
          desc: `Discover the future of comfort with our Microsoft AI Sofa Chair.\nDesigned for modern living spaces, this chair adapts to your posture.\nPremium materials ensure durability and a luxurious feel.\nAI-powered adjustments provide personalized support all day.\nEasy to clean and maintain for busy households.\nSleek design fits seamlessly into any decor.\nEco-friendly construction for a sustainable choice.\nLightweight yet sturdy for easy rearrangement.\nPerfect for work, relaxation, or entertaining guests.\nExperience innovation and style in one package.`,
          price: '$340 - $354',
          minOrder: '1 Piece',
          rating: 4.9,
          reviews: 236,
          isFavorite: false,
          category: 'stool'
        },
        {
          img: '../src/assets/furniture/1.jpg',
          title: 'Modern Lounge Chair',
          desc: `Elevate your home with the Modern Lounge Chair.\nErgonomic contours cradle your body for ultimate relaxation.\nHigh-density foam cushions offer lasting comfort.\nUpholstered in soft, breathable fabric for year-round use.\nSolid wood frame ensures stability and longevity.\nMinimalist design complements any room.\nEasy assembly with included instructions.\nNon-slip feet protect your floors.\nAvailable in multiple colors to suit your style.\nA perfect blend of form and function.`,
          price: '$340 - $354',
          minOrder: '1 Piece',
          rating: 4.9,
          reviews: 236,
          isFavorite: true,
          category: 'shelf'
        },
        {
          img: '../src/assets/furniture/2.png',
          title: 'Luxury Recliner',
          desc: `Unwind in luxury with our state-of-the-art Recliner.\nReclines up to 180° for optimal comfort.\nSupportive headrest and lumbar cushioning.\nSmooth, quiet reclining mechanism.\nPremium leather finish for a sophisticated look.\nBuilt-in cup holders for convenience.\nStain-resistant and easy to clean.\nPerfect for movie nights or afternoon naps.\nCompact design fits small spaces.\nEnjoy relaxation like never before.`,
          price: '$340 - $354',
          minOrder: '1 Piece',
          rating: 4.9,
          reviews: 236,
          isFavorite: false,
          category: 'couch'
        },
        {
          img: '../src/assets/furniture/3.png',
          title: 'Minimalist Armchair',
          desc: `Add a touch of elegance with the Minimalist Armchair.\nSleek lines and modern silhouette.\nSturdy metal frame for lasting durability.\nPlush seat and backrest for comfort.\nNeutral tones blend with any decor.\nLightweight for easy movement.\nAssembly is quick and hassle-free.\nPerfect for living rooms or offices.\nLow-maintenance materials.\nA stylish addition to any space.`,
          price: '$340 - $354',
          minOrder: '1 Piece',
          rating: 4.9,
          reviews: 236,
          isFavorite: false,
          category: 'sofa'
        },
        {
          img: '../src/assets/furniture/4.png',
          title: 'Classic Wooden Chair',
          desc: `Classic Wooden Chair brings timeless charm to your home.\nHandcrafted from solid wood for strength.\nErgonomic backrest supports good posture.\nSmooth, polished finish highlights natural grain.\nVersatile design suits dining or study areas.\nEasy to stack and store.\nProtective pads prevent floor scratches.\nSimple, elegant, and functional.\nSustainably sourced materials.\nA must-have for traditional interiors.`,
          price: '$340 - $354',
          minOrder: '1 Piece',
          rating: 4.9,
          reviews: 236,
          isFavorite: false,
          category: 'table'
        },
        {
          img: '../src/assets/furniture/5.png',
          title: 'AI Smart Table',
          desc: `Upgrade your workspace with the AI Smart Table.\nIntegrated wireless charging for your devices.\nSpacious tabletop for multitasking.\nSleek, modern design enhances productivity.\nDurable, scratch-resistant surface.\nHidden cable management keeps things tidy.\nAdjustable height for ergonomic comfort.\nEasy to assemble and move.\nEco-friendly materials used.\nA smart solution for modern offices.`,
          price: '$340 - $354',
          minOrder: '1 Piece',
          rating: 4.9,
          reviews: 236,
          isFavorite: false,
          category: 'chair'
        },
        {
          img: '../src/assets/furniture/6.png',
          title: 'Ergo Office Chair',
          desc: `Work in comfort with the Ergo Office Chair.\nBreathable mesh back keeps you cool.\nAdjustable seat height and armrests.\nLumbar support reduces back strain.\nSmooth-rolling casters for mobility.\nSturdy base for stability.\nEasy to assemble with clear instructions.\nContemporary design fits any office.\nSupports long hours of productivity.\nYour back will thank you.`,
          price: '$340 - $354',
          minOrder: '1 Piece',
          rating: 4.9,
          reviews: 236,
          isFavorite: false,
          category: 'desk'
        },
        {
          img: '../src/assets/furniture/7.png',
          title: 'Premium Sofa Set',
          desc: `Host in style with the Premium Sofa Set.\nSpacious seating for family and friends.\nPlush cushions provide exceptional comfort.\nDurable upholstery resists wear and tear.\nSturdy frame ensures long-lasting use.\nModern design elevates your living room.\nEasy to clean and maintain.\nNeutral colors match any decor.\nPerfect for gatherings or quiet nights in.\nA centerpiece for your home.`,
          price: '$340 - $354',
          minOrder: '1 Piece',
          rating: 4.9,
          reviews: 236,
          isFavorite: false,
          category: 'desk'
        },
];

export default products; 
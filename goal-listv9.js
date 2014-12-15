var bingoList = [];
bingoList["info"] = {
version: "v9"
};
bingoList[1] = [
	{ name: "Bottled Fairy", jp: 'ビン(妖精)', types: ["bottle"], tsyn: [0], child: "yes" },
	{ name: "Bullet Bag (50)", jp: 'デクのタネ袋(50)', types: ["bulletbag"], tsyn: [1], child: "yes" },
	{ name: "Bomb Bag (30)", jp: 'ボム袋(30)', types: ["bombbag"], tsyn: [100], child: "yes" },
	{ name: "Lens of Truth", jp: 'まことのメガネ', types: ["botw"], tsyn: [3], child: "yes" } ,
	{ name: "Defeat a Skull Kid", jp: 'スタルキッド撃破', types: ["skullkid"], tsyn: [1], child: "no" },
	{ name: "At least 30 Deku Nuts", jp: 'デクの実30個以上', types: ["nuts"], tsyn: [100], child: "yes" }
];
bingoList[2] = [
	{ name: "Map & Compass in Dodongo's Cavern", jp: 'ドドンゴの洞窟のマップとコンパス', types: ["dc"], tsyn: [2], subtypes: ["mapcompass"], stsyn: [2], child: "yes" },
	{ name: "Map & Compass in Deku Tree", jp: 'デクの樹様の中のマップとコンパス', types: ["deku"], tsyn: [3], subtypes: ["mapcompass"], stsyn: [3], child: "yes" },
	{ name: "Map & Compass in Bottom of the Well", jp: '井戸の底のマップとコンパス', types: ["botw"], tsyn: [4], subtypes: ["mapcompass"], stsyn: [3], child: "yes" },
	{ name: "Giant's Knife", jp: '巨人のナイフ', types: ["swords"], tsyn: [3], subtypes: ["wallet"], stsyn: [1], child: "no" },
	{ name: "Minuet of Forest", jp: '森のメヌエット', types: ["forest"], tsyn: [3], subtypes: ["songs"], stsyn: [3], child: "no" },
	{ name: "Goron Tunic", jp: 'ゴロンの服', types: ["gtunic", "dmc", "fire"], tsyn: [2.5, 2, 1], child: "no" },
	{ name: "Zora Tunic", jp: 'ゾーラの服', types: ["ice"], tsyn: [2], child: "no" }
];
bingoList[3] = [
	{ name: "Both heart pieces in Death Mountain Crater", jp: 'デスマウンテン火口のハートのかけら２つ', types: ["dmc"], tsyn: [2], subtypes: ["hearts", "hovers"], stsyn: [1.5, 0.5], child: "yes" },
	{ name: "Fairy Slingshot", jp: '妖精のパチンコ', types: ["bulletbag", "deku"], tsyn: [100, 2.5], child: "yes" },
	{ name: "At least 3 songs", jp: '歌3つ以上', types: ["songs", "zl", "childzl"], tsyn: [6, 6, 2], child: "yes" },
	{ name: "Quiver (40)", jp: '矢立て(40)', types: ["forest", "quiver"], tsyn: [1, 1], child: "no" },
	{ name: "Defeat all Lizalfos in Dodongo's Cavern", jp: 'ドドンゴの洞窟のリザルフォス全て撃破', types: ["dc"], tsyn: [3], child: "yes" },
	{ name: "Bolero of Fire", jp: '炎のボレロ', types: ["dmc"], tsyn: [2], subtypes: ["songs"], stsyn: [3], child: "no" }
];
bingoList[4] = [
	{ name: "30 Deku Sticks", jp: 'デクの棒30本', types: ["atrade"], tsyn: [2], child: "yes" },
	{ name: "Defeat King Dodongo", jp: 'キングドドンゴ撃破', types: ["dc", "kd"], tsyn: [3, 2], subtypes: ["hearts"], stsyn: [3], child: "yes" },
	{ name: "Fire Temple Boss Key", jp: '炎の神殿のボス部屋のカギ', types: ["fire", "dmc"], tsyn: [1, 2], subtypes: ["bosskey"], stsyn: [4], child: "no"},
	{ name: "Ruto's Letter", jp: 'ルトの手紙', types: ["bottle"], tsyn: [4], child: "yes" },
	{ name: "Ice Arrows", jp: '氷の矢', types: ["fortress", "gtg"], tsyn: [3, 2.5, 1], subtypes: ["kd"], stsyn: [2], child: "yes" },
	{ name: "Map & Compass in Shadow Temple", jp: '闇の神殿のマップとコンパス', types: ["shadow", "hovers"], tsyn: [1, 2.5], subtypes: ["mapcompass"], stsyn: [3], child: "yes" }
];
bingoList[5] = [
	{ name: "Bullet Bag (40)", jp: 'デクのタネ袋(40)', types: ["bulletbag", "deku"], tsyn: [10, 3], child: "yes" },
	{ name: "Blue Fire", jp: '青い炎', types: ["ice", "bottle", "ganon"], tsyn: [4, 0, 4], child: "yes" },
	{ name: "Defeat Queen Gohma", jp: 'ゴーマ撃破', types: ["deku", "ganon"], tsyn: [5, 1.5], subtypes: ["hearts", "childzl"], stsyn: [3, 1.5], child: "yes" },
	{ name: "All 3 Kokiri Forest area Skulltulas", jp: 'コキリの森エリアの黄金のスタルチュラ３匹', types: ["forest"], tsyn: [1], subtypes: ["wallet"], stsyn: [1], child: "no" },
	{ name: "Ice Cavern Heart Piece", jp: '氷の洞窟のハートのかけら', types: ["ice"], tsyn: [4], subtypes: ["hearts", "mapcompass"], stsyn: [1, 3], child: "yes" },
	{ name: "3 Tunics", jp: '服3種類', types: ["gtunic", "ice", "fire"], tsyn: [2.5, 2, 2.5], child: "no" },
	{ name: "Water Temple Boss Key", jp: '水の神殿のボス部屋のカギ', types: ["water", "fortress"], tsyn: [3, 3], subtypes: ["bosskey"], stsyn: [5], child: "no" }
];
bingoList[6] = [
	{ name: "Beat Dodongo's Cavern", jp: 'ドドンゴの洞窟クリア', types: ["dc", "fortress", "kd"], tsyn: [3, 2, 2], child: "yes" },
	{ name: "Map & Compass in Ice Cavern", jp: '氷の洞窟のマップとコンパス', types: ["ice"], tsyn: [4], subtypes: ["mapcompass"], stsyn: [3], child: "yes" },
	{ name: "Defeat a White Wolfos", jp: 'ホワイトウルフォス撃破', types: ["ice", "fortress"], tsyn: [6, 3], subtypes: ["mapcompass"], stsyn: [3], child: "yes" },
	{ name: "Ganon's Castle Boss Key", jp: 'ガノン城のボス部屋のカギ', types: ["ganon"], tsyn: [3], subtypes: ["bosskey", "childzl"], stsyn: [4, 1.5], child: "yes" },
	{ name: "All 3 Skulltulas in Bottom of the Well", jp: '井戸の底の黄金のスタルチュラ3匹', types: ["botw"], tsyn: [4], subtypes: ["wallet"], stsyn: [1], child: "yes" },
	{ name: "Cow in House", jp: '牛(リンクの家)', types: ["cow"], tsyn: [5], child: "no" },
	{ name: "Beat the Deku Tree", jp: 'デクの樹様の中クリア', types: ["deku", "ganon"], tsyn: [5, 3], subtypes: ["hearts", "childzl"], stsyn: [3, 1.5], child: "yes" },
	{ name: "3 unused keys in Gerudo Training Grounds", jp: 'ゲルドの修練場の未使用のカギ3つ', types: ["fortress", "gtg"], tsyn: [3, 2], child: "yes" },
	{ name: "All 3 Skulltulas in Ice Cavern", jp: '氷の洞窟の黄金のスタルチュラ3匹', types: ["ice"], tsyn: [5], subtypes: ["wallet", "mapcompass"], stsyn: [1, 3], child: "yes" }
];
bingoList[7] = [
	{ name: "Milk", jp: 'ロンロン牛乳', types: ["lonlon", "bottle"], tsyn: [4, 4], subtypes: ["childzl"], stsyn: [1], child: "yes" },
	{ name: "4 unused keys in Gerudo Training Grounds", jp: 'ゲルドの修練場の未使用のカギ4つ', types: ["fortress", "gtg"], tsyn: [3, 3], child: "yes" },
	{ name: "All 4 Lost Woods area Skulltulas", jp: '迷いの森エリアの黄金のスタルチュラ4匹', types: ["forest"], tsyn: [2], subtypes: ["wallet"], stsyn: [1.5], child: "no" },
	{ name: "Fill all 4 Bottle Slots", jp: '4つの空きビンスロットを全て埋める', types: ["bottle"], tsyn: [6], child: "yes" },
	{ name: "Blue Potion", jp: '青いクスリ', types: ["atrade", "zl"], tsyn: [4, 6], child: "no" },
	{ name: "At least 4 songs", jp: '歌4つ以上', types: ["songs", "zl"], tsyn: [6, 6], subtypes: ["child2"], stsyn: [2], child: "yes" },
	{ name: "Giant's Wallet", jp: '巨人のサイフ', types: ["wallet"], tsyn: [6], child: "yes" }
];
bingoList[8] = [
	{ name: "Plant bean in Death Mountain Crater", jp: 'デスマウンテン火口の土にマメを植える', types: ["dmc", "beans"], tsyn: [2, -1], subtypes: ["child2"], stsyn: [3], child: "yes" },
	{ name: "Both Gerudo's Fortress area Skulltulas", jp: 'ゲルドの砦の黄金のスタルチュラ2匹', types: ["fortress"], tsyn: [2.5], subtypes: ["wallet"], stsyn: [0.5], child: "no" },
	{ name: "Epona's Song", jp: 'エポナの歌', types: ["lonlon"], tsyn: [4], subtypes: ["songs", "childzl"], stsyn: [4, 1], child: "yes" },
	{ name: "Iron Boots", jp: 'ヘビーブーツ', types: ["ice", "irons"], tsyn: [4, 2, 3], subtypes: ["hovers", "mapcompass"], stsyn: [1, 2], child: "yes" },
	{ name: "5 unused keys in Gerudo Training Grounds", jp: 'ゲルドの修練場の未使用のカギ5つ', types: ["fortress", "gtg"], tsyn: [3, 4], child: "yes" },
	{ name: "6 Hearts", jp: 'ハート6つ', types: ["hearts"], tsyn: [7], child: "yes" },
	{ name: "Defeat Phantom Ganon", jp: 'ファントムガノン撃破', types: ["forest", "pg"], tsyn: [4, 3], subtypes: ["hearts"], stsyn: [3], child: "yes" },
	{ name: "Map & Compass in Water Temple", jp: '水の神殿のマップとコンパス', types: ["water"], tsyn: [3], subtypes: ["mapcompass"], stsyn: [3], child: "no" }
];
bingoList[9] = [
	{ name: "3 Swords & 3 Tunics", jp: '剣3種類と服3種類', types: ["swords", "tunics", "ice", "fire"], tsyn: [3, 5, 2, 2.5], subtypes: ["wallet"], stsyn: [1], child: "no" },
	{ name: "3 Boots", jp: '靴3種類', types: ["ice", "irons", "hovers"], tsyn: [4, 2, 2.5, 3], subtypes: ["mapcompass"], stsyn: [3], child: "yes" },
	{ name: "All 5 Skulltulas in Dodongo's Cavern", jp: 'ドドンゴの洞窟の黄金のスタルチュラ5匹', types: ["dc"], tsyn: [4], subtypes: ["wallet"], stsyn: [2], child: "yes" },
	{ name: "Defeat Morpha", jp: 'モーファ撃破', types: ["water", "hovers", "zl"], tsyn: [7, 1], subtypes: ["hearts", "zl"], stsyn: [3, 1.5], child: "no" },
	{ name: "Beat the Forest Temple", jp: '森の神殿クリア', types: ["forest", "pg"], tsyn: [4, 4], subtypes: ["hearts"], stsyn: [3], child: "yes" },
	{ name: "500 Rupees", jp: '500ルピー', types: ["wallet"], tsyn: [6], child: "yes" }
];
bingoList[10] = [
	{ name: "At least 7 Magic Beans", jp: '魔法のマメ7つ以上', types: ["beans"], tsyn: [6], subtypes: ["child2", "wallet"], stsyn: [2, 2], child: "yes" },
	{ name: "Defeat Big Octo", jp: '大オクタ撃破', types: ["jabu", "ice"], tsyn: [3, 3], child: "yes" },
	{ name: "37th heart piece (Child Fortress)", jp: '37番目のハートのかけら(子供のゲルドの砦)', types: ["fortress"], tsyn: [2.5], subtypes: ["hearts", "kd"], stsyn: [1, 2], child: "yes" },
	{ name: "Beat the Water Temple", jp: '水の神殿クリア', types: ["water", "hovers"], tsyn: [7, 1], subtypes: ["hearts", "zl"], stsyn: [1.5, 1.5], child: "no" },
	{ name: "Forest Medallion", jp: '森のメダル', types: ["forest", "lightarrow", "atrade", "zl", "pg"], tsyn: [4, 6, 6, 6, 4], subtypes: ["hearts"], stsyn: [2], child: "yes" },
	{ name: "6 unused keys in Gerudo Training Grounds", jp: 'ゲルドの修練場の未使用のカギ6つ', types: ["fortress", "gtg"], tsyn: [3, 5], child: "yes" },
	{ name: "Requiem of Spirit", jp: '魂のレクイエム', types: ["fortress", "spirit"], tsyn: [2.5, 2.5], subtypes: ["songs", "hovers"], stsyn: [3, 1], child: "yes" },
	{ name: "At least 6 songs", jp: '歌6つ以上', types: ["songs", "zl"], tsyn: [9, 6, 6], subtypes: ["child2"], stsyn: [2], child: "no" }
];
bingoList[11] = [										   
	{ name: "At least 4 Skulltulas in Shadow Temple", jp: '闇の神殿の黄金のスタルチュラ4匹以上', types: ["shadow", "hovers"], tsyn: [3, 2.5], subtypes: ["wallet"], stsyn: [1.5], child: "no" },
	{ name: "All 8 Kakariko area Skulltulas", jp: 'カカリコ村エリアの黄金のスタルチュラ8匹', types: ["botw", "childchu"], tsyn: [1, 1], subtypes: ["wallet"], stsyn: [3.5], child: "no" },
	{ name: "Mirror Shield", jp: 'ミラーシールド', types: ["fortress", "spirit", "hovers", "gtg"], tsyn: [2.5, 3, 2.5, 1], child: "yes" },
	{ name: "All 5 Skulltulas in Forest Temple", jp: '森の神殿の黄金のスタルチュラ5匹', types: ["forest", "hovers"], tsyn: [6, 2], subtypes: ["wallet"], stsyn: [2], child: "no" },
	{ name: "All 4 Skulltulas in Deku Tree", jp: 'デクの樹様の中の黄金のスタルチュラ4匹', types: ["deku"], tsyn: [3], subtypes: ["wallet", "hovers", "fortress", "gtg", "quiver"], stsyn: [1.5, 1, 1, 1, 3], child: "yes" },
	{ name: "Water Medallion", jp: '水のメダル', types: ["water", "hovers", "zl", "lightarrow"], tsyn: [7, 1, 6, 2], subtypes: ["hearts"], stsyn: [3], child: "no" },
	{ name: "Gerudo's Card", jp: 'ゲルドの会員証', types: ["fortress", "gerudo"], tsyn: [2.5, 6], child: "yes" },
	{ name: "Defeat Amy (Green Poe)", jp: 'エイミー撃破(緑のポウ)ｴ', types: ["forest", "fortress", "gtg"], tsyn: [9, 3, 1], subtypes: ["mapcompass", "bosskey", "hovers"], stsyn: [1.5, 3, 1], child: "no" }
];
bingoList[12] = [
	{ name: "Stone of Agony", jp: 'もだえ石', types: ["wallet", "forest"], tsyn: [10, 1], child: "yes" },
	{ name: "Get to the end of Fire Trial", jp: '炎の結界の最後の部屋に到達', types: ["ganon", "gtunic", "hovers"], tsyn: [3, 1, 2.5], child: "no" },
	{ name: "Golden Gauntlets", jp: '金のグローブ', types: ["strength", "ganon", "hovers"], tsyn: [100, 3, 1], child: "yes" },
	{ name: "Get Bombchu chest in Spirit Temple", jp: '魂の神殿のボムチュウ取得', types: ["fortress", "spirit", "hovers"], tsyn: [2.5, 6, 2.5], child: "yes" },
	{ name: "All 4 Skulltulas in Jabu-Jabu", jp: 'ジャブジャブ様のお腹の黄金のスタルチュラ4匹', types: ["jabu", "ice"], tsyn: [5, 3], subtypes: ["hearts", "wallet"], stsyn: [1.5, 1.5], child: "yes" },
	{ name: "Fairy Bow", jp: '妖精の弓', types: ["forest", "hovers", "quiver"], tsyn: [6, 2, 3], subtypes: ["mapcompass", "bosskey"], stsyn: [2, 3], child: "no" },
	{ name: "Defeat Dark Link", jp: 'ダークリンク撃破', types: ["water", "longshot"], tsyn: [3, 4], subtypes: ["mapcompass", "dc", "zl"], stsyn: [1.5, 2.5, 1.5], child: "no" },
	{ name: "Fire Arrow", jp: '炎の矢', types: ["water", "fortress", "gtg"], tsyn: [1.5, 3, 1], subtypes: ["zl", "quiver"], stsyn: [1.5, 3], child: "no" }
];
bingoList[13] = [
	{ name: "7 Hearts", jp: 'ハート7つ', types: ["hearts"], tsyn: [10], child: "yes" },
	{ name: "Map & Compass in Jabu-Jabu", jp: 'ジャブジャブ様のお腹のマップとコンパス', types: ["jabu", "ice"], tsyn: [5, 3], subtypes: ["mapcompass"], child: "yes" },
	{ name: "Win Bombchu Bowling Prize", jp: 'ボムチュウボウリングの景品', types: ["dc", "kd"], tsyn: [3, 3], subtypes: ["hearts", "child2"], child: "yes" },
	{ name: "Silver Gauntlets", jp: '銀のグローブ', types: ["strength", "spirit"], tsyn: [100, 3], child: "yes" },
	{ name: "Longshot", jp: 'ロングフック', types: ["water", "longshot"], tsyn: [3, 5], subtypes: ["mapcompass", "dc", "zl"], stsyn: [1.5, 2.5, 1.5], child: "no" },
	{ name: "3 Swords & 3 Boots", jp: '剣3種類と靴3種類', types: ["swords", "hovers", "ice", "irons"], tsyn: [3, 2.5, 4, 2], subtypes: ["mapcompass", "wallet"], stsyn: [3, 1], child: "no" }
];
bingoList[14] = [
	{ name: "Both Hyrule Field area Skulltulas", jp: 'ハイラル平原エリアの黄金ノスタルチュラ2匹', types: ["zl", "childzl", "water", "longshot"], tsyn: [3, 3, 5], subtypes: ["wallet", "dmc", "magic"], stsyn: [0.5, 1.5, 2], child: "yes" },
	{ name: "All 4 Lon-Lon Ranch area Skulltulas", jp: 'ロンロン牧場エリアの黄金のスタルチュラ4匹', types: ["jabu", "lonlon"], tsyn: [7, 1.5], subtypes: ["wallet"], stsyn: [1.5], child: "yes" },
	{ name: "Double Magic", jp: '魔力2倍', types: ["dmc", "zl", "childzl", "magic"], tsyn: [1.5, 6, 6, 2], child: "yes" },
	{ name: "At least 8 songs", jp: '歌8つ以上', types: ["songs", "zl"], tsyn: [10, 6], subtypes: ["child2"], stsyn: [2], child: "no" },
	{ name: "Bronze Gauntlets", jp: '銅のグローブ', types: ["strength", "bulletbag", "ganon"], tsyn: [100, 100, 3], subtypes: ["wallet"], stsyn: [1], child: "no" },
	{ name: "Keaton Mask", jp: 'キータンのお面', types: ["childzl"], tsyn: [7], child: "yes" },
	{ name: "3 Tunics & 3 Boots", jp: '服3種類と靴3種類', types: ["gtunic", "hovers", "ice", "irons"], tsyn: [2.5, 2.5, 4, 2], subtypes: ["mapcompass"], stsyn: [3], child: "no" },
	{ name: "Forest Temple Boss Key", jp: '森の神殿のボス部屋のカギ', types: ["forest", "hovers", "quiver", "claimcheck"], tsyn: [6, 2, 3, 10], subtypes: ["mapcompass", "bosskey"], stsyn: [2, 3], child: "no" }
];
bingoList[15] = [
	{ name: "Map & Compass in Forest Temple", jp: '森の神殿のマップとコンパス', types: ["forest", "quiver"], subtypes: ["mapcompass", "bosskey"], child: "no" },
	{ name: "Map & Compass in Fire Temple", jp: '炎の神殿のマップとコンパス', types: ["fire"], subtypes: ["mapcompass", "bosskey"], child: "no" },
	{ name: "All 4 Gerudo Valley area Skulltulas", jp: 'ゲルドの谷エリアの黄金のスタルチュラ4匹', types: ["fortress"], subtypes: ["wallet", "child2"], child: "no" },
	{ name: "All 8 Death Mountain area Skulltulas", jp: 'デスマウンテンエリアの黄金のスタルチュラ8匹', types: ["dmc"], subtypes: ["child2", "wallet"], child: "no" },
	{ name: "At least 9 Magic Beans", jp: '魔法のマメ9つ以上', types: ["beans"], subtypes: ["child2", "wallet"], child: "yes" },
	{ name: "Blue Gauntlets", jp: '青のグローブ', types: ["spirit", "strength", "bulletbag", "atrade"], subtypes: ["wallet"], child: "no" }
];
bingoList[16] = [
	{ name: "Megaton Hammer", jp: 'メガトンハンマー', types: ["fire"], subtypes: ["mapcompass", "bosskey"], child: "no" },
	{ name: "6 Maps", jp: 'マップ6つ', types: ["mapcompass", "claimcheck"], child: "yes" },
	{ name: "All 8 Zora's Domain area Skulltulas", jp: 'ゾーラの里エリアの黄金のスタルチュラ8匹', types: ["jabu", "ice"], subtypes: ["wallet"], child: "no" },
	{ name: "Defeat Barinade", jp: 'バリネード撃破', types: ["jabu"], subtypes: ["hearts"], child: "yes" },
	{ name: "Double Defense", jp: '防御力2倍', types: ["zl", "ganon"], child: "no" },
	{ name: "At least 3 Skulltulas in Water Temple", jp: '水の神殿の黄金のスタルチュラ3匹以上', types: ["water", "ice", "zl"], subtypes: ["wallet"], child: "no"}
];
bingoList[17] = [
	{ name: "Frog's Heart Piece", jp: 'カエルのハートのかけら(嵐の歌)', types: ["forest", "child2", "pg"], subtypes: ["hearts", "songs"], child: "no" },
	{ name: "Shadow Temple Boss Key", jp: '闇の神殿のボス部屋のカギ', types: ["shadow", "zl"], subtypes: ["hearts", "bosskey"], child: "no"},
	{ name: "Defeat both Flare Dancers", jp: 'フレアダンサー2体撃破', types: ["fire"], subtypes: ["mapcompass", "bosskey"], child: "no" },
	{ name: "Beat Jabu-Jabu's Belly", jp: 'ジャブジャブ様のお腹クリア', types: ["jabu"], subtypes: ["hearts", "child2"], child: "yes" },
	{ name: "All 5 Skulltulas in Spirit Temple", jp: '魂の神殿の黄金のスタルチュラ5匹', types: ["spirit"], subtypes: ["wallet"], child: "yes" },
	{ name: "3 Swords & 3 Shields", jp: '剣3種類と盾3種類', types: ["swords", "shields", "spirit"], subtypes: ["wallet"], child: "no" },
	{ name: "Get to the end of Light Trial", jp: '光の結界の最後の部屋に到達', types: ["ganon", "zl", "strength"] , child: "no"},
	{ name: "8 different unused keys in Gerudo Training Grounds", jp: 'ゲルドの修練場の未使用のカギ8つ', types: ["fortress", "strength", "quiver"], child: "no" }
];
bingoList[18] = [
	{ name: "Defeat Nabooru-Knuckle", jp: 'アイアンナック(ナボール)撃破', types: ["spirit"], child: "no" },
	{ name: "Saria's Song", jp: 'サリアの歌', types: ["zl", "saria"], subtypes: ["child2", "songs"], child: "yes" },
	{ name: "Farore's Wind", jp: 'フロルの風', types: ["zl", "ice"], child: "yes" },
	{ name: "All 5 Skulltulas in Fire Temple", jp: '炎の神殿の黄金のスタルチュラ5匹', types: ["fire"], subtypes: ["wallet", "mapcompass", "bosskey"], child: "no" },
	{ name: "Defeat Volvagia", jp: 'ヴァルバジア撃破', types: ["fire"], subtypes: ["hearts", "mapcompass", "bosskey", "pg"], child: "no" },
	{ name: "At least 9 songs", jp: '歌9つ以上', types: ["songs", "atrade", "zl"], subtypes: ["child2"], child: "no" }
];
bingoList[19] = [
	{ name: "Defeat Bongo-Bongo", jp: 'ボンゴボンゴ撃破', types: ["shadow", "zl", "deku"], subtypes: ["hearts", "bosskey"], child: "no" },
	{ name: "8 Hearts", jp: 'ハート8つ', types: ["hearts"], child: "yes" },
	{ name: "6 Compasses", jp: 'コンパス6つ', types: ["mapcompass"], child: "yes" },
	{ name: "3 Shields & 3 Tunics", jp: '盾3種類と服3種類', types: ["shields", "fire", "tunics", "spirit"], child: "no" },
	{ name: "Beat the Fire Temple", jp: '炎の神殿クリア', types: ["fire", "forest"], subtypes: ["hearts", "bosskey", "mapcompass", "pg"], child: "no" },
];
bingoList[20] = [
	{ name: "Light Arrows", jp: '光の矢', types: ["lightarrow", "atrade", "zl"], child: "no" },
	{ name: "Beat the Shadow Temple", jp: '闇の神殿クリア', types: ["shadow", "zl", "deku"], subtypes: ["hearts", "bosskey"], child: "no" },
	{ name: "Defeat Meg (purple Poe)", jp: 'メグ撃破(紫のポウ)', types: ["forest", "quiver"], subtypes: ["mapcompass", "bosskey"], child: "no" },
	{ name: "All 4 Wasteland/ Colossus area Skulltulas", jp: '幻影の砂漠・巨大邪神像エリアの黄金のスタルチュラ4匹', types: ["spirit"], subtypes: ["child2", "wallet", "kd"], child: "no" },
	{ name: "Goron Bracelet", jp: 'ゴロンの腕輪', types: ["strength", "zl", "saria"], subtypes: ["child2"], child: "yes" },
	{ name: "Nayru's Love", jp: 'ネールの愛', types: ["spirit", "zl"], child: "yes" },
	{ name: "Free all 9 gorons in Fire Temple", jp: '炎の神殿で９人のゴロンを全員救う', types: ["fire"], subtypes: ["mapcompass", "bosskey"], child: "no"}
];
bingoList[21] = [
	{ name: "All 5 Lake Hylia Skulltulas", jp: 'ハイリア湖畔エリアの黄金のスタルチュラ5匹', types: ["ice", "water"], subtypes: ["child2", "wallet", "mapcompass"], child: "no" },
	{ name: "Din's Fire", jp: 'ディンの炎', types: ["zl"], subtypes: ["child2"], child: "yes" },
	{ name: "Get to the end of Spirit Trial", jp: '魂の結界の最後の部屋に到達', types: ["ganon", "spirit", "quiver"], child: "no" },
	{ name: "All 4 Market area Skulltulas", jp: '城下町エリアの黄金のスタルチュラ4匹', types: ["forest", "child2", "pg"], subtypes: ["hearts", "wallet"], child: "no" },
	{ name: "Spooky Mask", jp: 'こわそなお面', types: ["zl", "fortress", "saria", "beans"], child: "yes" }
];
bingoList[22] = [
	{ name: "Spirit Temple Boss Key", jp: '魂の神殿のボス部屋のカギ', types: ["spirit", "lightarrow", "zl"], subtypes: ["bosskey"], child: "no" },
	{ name: "Quiver (50)", jp: '矢立て(50)', types: ["quiver", "fortress", "beans"], child: "no" },
	{ name: "3 Shields & 3 Boots", jp: '盾3種類と靴3種類', types: ["shields", "boots", "spirit", "ice"], subtypes: ["mapcompass"], child: "yes" },
	{ name: "Get to the end of Water Trial", jp: '水の結界の最後の部屋に到達', types: ["ganon", "fire", "lightarrow"], subtypes: ["mapcompass", "bosskey", "pg"], child: "no" }
];
bingoList[23] = [
	{ name: "Both heart pieces in Lost Woods", jp: '迷いの森のハートのかけら２つ', types: ["zl"], subtypes: ["hearts", "child2", "songs"], child: "yes" },
	{ name: "7 Maps", jp: 'マップ7つ', types: ["mapcompass", "claimcheck"], child: "yes" },
	{ name: "Map & Compass in Spirit Temple", jp: '魂の神殿のマップとコンパス', types: ["spirit", "zl"], subtypes: ["mapcompass"], child: "yes" },
	{ name: "Defeat Twinrova", jp: 'ツインローバ撃破', types: ["spirit"], subtypes: ["hearts"], child: "no" }
];
bingoList[24] = [
	{ name: "Beat the Spirit Temple", jp: '魂の神殿クリア', types: ["spirit"], subtypes: ["hearts"], child: "no" },
	{ name: "9 Hearts", jp: 'ハート9つ', types: ["hearts"], child: "yes" },
	{ name: "All 5 Skulltulas in Shadow Temple", jp: '闇の神殿の黄金のスタルチュラ5匹', types: ["shadow", "zl"], subtypes: ["wallet", "bosskey"], child: "no" },
	{ name: "Get to the end of Shadow Trial", jp: '闇の結界の最後の部屋に到達', types: ["ganon", "fire"], subtypes: ["lightarrow", "mapcompass", "bosskey", "pg"], child: "no" }
];
bingoList[25] = [
	{ name: "7 Compasses", jp: 'コンパス7つ', types: ["mapcompass"], child: "no" },
	{ name: "All 5 Skulltulas in Water Temple", jp: '水の神殿の黄金のスタルチュラ5匹', types: ["water", "zl"], child: "no" },
	{ name: "Two Fairy Spells", jp: '魔法のアイテム２つ', types: ["zl", "spirit"], subtypes: ["child2"], child: "yes" },
	{ name: "Green Gauntlets", jp: '緑のグローブ', types: ["strength", "bulletbag", "zl", "atrade", "saria"], subtypes: ["wallet"], child: "no" }
];
var i18n = {
    'collapse': '展開',
    'fold': '收起',
    'findOnMap': '在地圖上查看',
    'relatedLocations': '相關地點'
}

var siteFilterData = [
    {
        name: 'all',
        i18n: '全部'
    },
    {
        name: 'viewSpot',
        i18n: '觀光景點',
        sites: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '16', '17', '21', '22', '24']
    },
    {
        name: 'food',
        i18n: '美食',
        sites: ['14', '15', '23']
    },
    {
        name: 'entertainment',
        i18n: '娱乐活动',
        sites: ['18', '19', '20']
    },
    {
        name: 'holiday',
        i18n: '节日盛事',
        sites: ['25', '26', '27']
    }
]

var siteI18nData = {
    "1": {
        "name": "大三巴牌坊",
        "location": "耶穌會紀念廣場",
        "openingHours": "上午9時至下午6時",
        "description": "大三巴牌坊是天主之母教堂（即聖保祿教堂）正面前壁的遺址。</br>聖保祿教堂附屬於聖保祿學院。該學院於1594 年成立，1762年結束，是遠東地區第一所西式大學。1835年一場大火燒毀了聖保祿學院及其附屬的教堂，僅剩下教堂的正面前壁、大部分地基以及教堂前的石階。自此，這便成為世界聞名的聖保祿教堂遺址。本地人因教堂前壁形似中國傳統牌坊，將之稱為大三巴牌坊。這座中西合璧的石壁在全世界的天主教教堂中是獨一無二的。",
        "image": "https://ws1.sinaimg.cn/large/9130c6a9gy1fsv38tlue1j20ci08cmzz.jpg",
        "coordinates": [[[393, 2465], [514, 2465], [514, 2580], [393, 2580], [393, 2465]]],
        "subname": "",
        "relatedLocations": [2, 3]
    },
    "2": {
        "name": "大炮台",
        "location": "澳門博物館前地",
        "openingHours": "上午7時至晚上7時",
        "description": "大炮台創建於1617年，至1626年建成，名為聖保祿炮台，澳門居民多稱為“大炮台”。炮台佔地約一萬平方米，呈不規則四邊形，是當時澳門防禦系統的核心，構成一個覆蓋東西海岸的寬大炮火防衛網。",
        "image": "https://ws1.sinaimg.cn/large/9130c6a9gy1fsvkjavz8hj20cl08cdkt.jpg",
        "coordinates": [[[550, 2509], [621, 2509], [621, 2555], [550, 2555], [550, 2509]]],
        "subname": "",
        "relatedLocations": [4, 5]
    },
    "3": {
        "name": "澳門博物館",
        "location": "澳門博物館前地112號",
        "openingHours": "上午10時至下午6時",
        "description": "澳門博物館是一間展示澳門歷史和多元文化的博物館，館內的展品以其豐富和深刻的歷史和文化內涵，展示數百年來澳門的歷史變遷，講述來自不同國家、具有不同文化背景的居民在澳門和平共處的生活。 ",
        "image": "https://ws1.sinaimg.cn/large/9130c6a9gy1fsvkmbyfdoj20eu08ctan.jpg",
        "coordinates": [[[423, 2633], [671, 2633], [671, 2680], [423, 2680], [423, 2633]]],
        "subname": "",
        "relatedLocations": [6, 7]
    },
    "4": {
        "name": "議事亭前地",
        "location": "議事亭前地",
        "openingHours": "全天",
        "description": "本地居民又稱此地為“噴水池”。開埠至今議事亭前地一直是澳門的市中心，兩側建築建於19世紀末20世紀初。1993年，前地一帶鋪設黑白色碎石地面，並砌成波浪形圖案，襯托周圍顏色鮮艷的文物建築，互相輝映，使前地一帶顯出濃濃的南歐風情。        ",
        "image": "https://ws1.sinaimg.cn/large/9130c6a9gy1fsvknvcktoj20cj08cgq4.jpg",
        "coordinates": [[[458, 2347], [565, 2347], [565, 2414], [458, 2414], [458, 2347]]],
        "subname": "",
        "relatedLocations": [8, 9]
    },
    "5": {
        "name": "玫瑰堂",
        "location": "板樟堂前地",
        "openingHours": "上午10時至下午6時",
        "description": "由聖多明我會（道明會）創建於1587年，是該會在中國的第一所教堂。教堂初時用木板搭建，華人稱之為“板樟廟”。又因教堂供奉玫瑰聖母，故又稱“玫瑰堂”。整座教堂建築富麗堂皇，其巴洛克建築風格的祭壇更是典雅精緻。教堂旁的“聖物寶庫”收藏了三百多件澳門天主教珍貴文物。",
        "image": "https://ws1.sinaimg.cn/large/9130c6a9gy1fsvkphcbpkj20ck08cjxg.jpg",
        "coordinates": [[[340, 2389], [411, 2389], [411, 2470], [340, 2470], [340, 2389]]],
        "subname": "",
        "relatedLocations": [10, 11]
    },
    "6": {
        "name": "東望洋炮台",
        "location": "板樟堂前地",
        "openingHours": "炮台：上午9時至下午6時",
        "description": "東望洋炮台（修築於1622 年）位於澳門半島最高峰東望洋山之巔，俯瞰整個半島，炮台上建有一燈塔及小教堂。東望洋燈塔（建於1864年）是中國海岸第一座現代燈塔，其所在地面位置之座標值亦為澳門於世界地圖上之地理定位。<br>燈塔側的小教堂名為聖母雪地殿（建於1622年），教堂內的拱頂和牆身繪有彩色壁畫，其繪畫技巧融合中西藝術，是本地眾多教堂中獨一無二的。",
        "image": "https://ws1.sinaimg.cn/large/9130c6a9gy1fsvkphcbpkj20ck08cjxg.jpg",
        "coordinates": [[[633, 2418], [730, 2418], [730, 2500], [633, 2500], [633, 2418]]],
        "subname": "",
        "relatedLocations": [12, 13]
    },
    "7": {
        "name": "大賽車博物館",
        "location": "澳門高美士街旅遊活動中心內",
        "openingHours": "上午10時至下午6時",
        "description": "*逢周二休館<br>為紀念澳門格蘭披治大賽車舉辦四十週年，一九九三年這座博物館正式落成。館內有二十多輛車壇名將的戰車，有方程式賽車、摩托車和車手們用過的物品。其中最著名的莫過於名震車壇的已故車手冼拿的參賽名車和他的賽車服了。",
        "image": "https://ws1.sinaimg.cn/large/9130c6a9gy1fsvkphcbpkj20ck08cjxg.jpg",
        "coordinates": [[[725, 2362], [795, 2362], [795, 2394], [725, 2394], [725, 2362]]],
        "subname": "",
        "relatedLocations": [14, 15]
    },
    "8": {
        "name": "澳門漁人碼頭",
        "location": "澳門新口岸友誼大馬路",
        "openingHours": "全天",
        "description": "澳門漁人碼頭是澳門首個主題文化創意娛樂旅遊綜合體。座落於外港新填海區海岸，佔地超過133,000平方米，集美食、購物、娛樂和主題公園、住宿及會展設施於一體，結合不同建築特色及中西文化，務求使遊客突破地域界限，體驗不同地區的特色。",
        "image": "https://ws1.sinaimg.cn/large/9130c6a9gy1fsvktjp7jqj20ct08cq77.jpg",
        "coordinates": [[[723, 2216], [828, 2216], [828, 2268], [723, 2268], [723, 2216]]],
        "subname": "",
        "relatedLocations": [16, 17]
    },
    "9": {
        "name": "澳門科學館",
        "location": "澳門孫逸仙大馬路",
        "openingHours": "上午10時至下午6時",
        "description": "*逢周四休館<br>澳門科學館由建築大師貝聿銘及貝氏建築事務所設計，建築物的整體建築面積約為20,000平方米，由展覽中心、天文館、會議中心三部分組成。",
        "image": "https://ws1.sinaimg.cn/large/9130c6a9gy1fsvkvc3k8rj20ck08cq65.jpg",
        "coordinates": [[[791, 2135], [906, 2135], [906, 2207], [791, 2207], [791, 2135]]],
        "subname": "",
        "relatedLocations": [18, 19]
    },
    "10": {
        "name": "鄭家大屋",
        "location": "澳門龍頭左巷10號",
        "openingHours": "上午10時至下午6時",
        "description": "*逢周三休息，公衆假期除外<br>鄭家大屋約建於1869年前，是中國近代著名思想家鄭觀應的故居，是一院落式大宅。建築雖主要以中國形制構建，但卻處處體現中西結合之特色，中式建築手法主要表現於屋頂、樑架結構、內院中多樣的窗戶，還有趟攏門等；而受西方或外國影響的則印證於一些室內天花的處理、門楣窗楣的式樣、檐口線，以及外牆之抹灰。        ",
        "image": "https://ws1.sinaimg.cn/large/9130c6a9gy1fsvkvc3k8rj20ck08cq65.jpg",
        "coordinates": [[[210, 2288], [302, 2288], [302, 2341], [210, 2341], [210, 2288]]],
        "subname": "",
        "relatedLocations": [20, 21]
    },
    "11": {
        "name": "媽閣廟",
        "location": "媽閣廟前地",
        "openingHours": "上午7時至下午6時",
        "description": "媽閣廟是澳門現存廟宇中有實物可考的最古老的廟宇，也是澳門文物中原建築物保存至今時間最長的。該廟包括“神山第一”殿、正覺禪林、弘仁殿、觀音閣等建築物。早期稱娘媽廟、天妃廟或海覺寺；後定名“媽祖閣”，華人俗稱“媽閣廟”。        ",
        "image": "https://ws1.sinaimg.cn/large/9130c6a9gy1fsvl3ij43xj20ci08cjyy.jpg",
        "coordinates": [[[106, 2083], [219, 2083], [219, 2149], [106, 2149], [106, 2083]]],
        "subname": "",
        "relatedLocations": [22, 23]
    },
    "12": {
        "name": "澳門旅遊塔",
        "location": "澳門觀光塔前地",
        "openingHours": "平日: 上午10時至晚上10時 假期: 上午9時至晚上10時",
        "description": "座落於南灣新填海區，塔高338米的旅遊塔，是一個集旅遊、觀光、表演、會議、展覽、購物、餐飲、娛樂及通訊於一體的綜合設施。<br>塔樓離地面223米，樓高達四層，包括兩層高的觀光主層，內有玻璃地面，可從觀光層鳥瞰澳門；還有一個可容納250人的旋轉餐廳，視野55公里，讓人盡覽澳門地區、珠江三角洲和部份香港離島的景致。旅遊塔設有玻璃升降機，由地面至觀光主層約45秒左右，乘客感受景物迅速離開自己的腳底，有一飛衝天的感覺。<br>愛刺激的人士，可試試「笨豬跳」、「高飛跳」、「空中漫步X版」及「百步登天」等冒險活動。",
        "image": "https://ws1.sinaimg.cn/large/9130c6a9gy1fsvl40pgsij20ci08cjut.jpg",
        "coordinates": [[[356, 1946], [392, 1946], [392, 2220], [356, 2220], [356, 1946]]],
        "subname": "",
        "relatedLocations": [24, 25]
    },
    "13": {
        "name": "龍環葡韻",
        "location": "澳門氹仔海邊馬路",
        "openingHours": "上午10時至下午7時",
        "description": "*逢星期一休息<br>“龍環葡韻”是澳門八景之一。“龍環”是氹仔舊稱，“葡韻”是指這裏葡萄牙建築風韻，包括海邊馬路的多座葡式住宅、嘉模教堂、公園等一帶如詩似畫的迷人景致，其中以五座碧翠凝綠的小型建築最具代表性。<br>這幾座建築早于1921年落成，曾爲高級官員官邸，也是具代表性的土生葡人住宅。1992年，該五座建築被評爲具建築價值的建築群。經徹底修複後，政府將之改建成博物館區，名爲“龍環葡韻住宅式博物館”，自1999年底起對外開放。",
        "image": "https://ws1.sinaimg.cn/large/9130c6a9gy1fsvl5z9qt0j20ci08cjtr.jpg",
        "coordinates": [[[759, 1435], [886, 1435], [886, 1526], [759, 1526], [759, 1435]]],
        "subname": "",
        "relatedLocations": [26, 27]
    },
    "14": {
        "name": "官也街",
        "location": "氹仔舊城區",
        "openingHours": "全天",
        "description": "氹仔舊城區是到離島旅遊必到之處，這裏雲集了各式各樣的手信店，有地道小食、傳統糕餅及精緻擺設等，遊客可在此找到合心水的手信送禮自用。",
        "image": "https://ws1.sinaimg.cn/large/9130c6a9gy1fsvl8qwawsj20ci08c0ub.jpg",
        "coordinates": [[[548, 1333], [783, 1333], [783, 1407], [548, 1407], [548, 1333]]],
        "subname": "",
        "relatedLocations": [1, 2]
    },
    "15": {
        "name": "杏仁餅",
        "location": "氹仔官也街",
        "openingHours": "全天",
        "description": "澳門在大街小巷中都可以找到很多手信店。澳門有很多必買的小吃和手信禮品，而其中最受歡迎的非杏仁餅莫屬。氹仔官也街上聚集了澳門大部份的杏仁餅店，有些還是即時製造的，保證新鮮美味，絕對是饋贈親友的最佳禮品。 你亦可以在澳門威尼斯人及金沙城中心找到知名的餅店，一次過滿足你的購物需要。",
        "image": "https://ws1.sinaimg.cn/large/9130c6a9gy1fsvlb5e57mj20eu08cjte.jpg",
        "coordinates": [[[511, 1390], [606, 1390], [606, 1447], [511, 1447], [511, 1390]]],
        "subname": "",
        "relatedLocations": [3, 4]
    },
    "16": {
        "name": "澳門威尼斯人（大運河）",
        "location": "望德聖母灣大馬路，路氹金光大道",
        "openingHours": "全天",
        "description": "澳門威尼斯人是世界知名的綜合度假酒店，更被譽爲“全球最佳奢華度假村”。擁有3000間豪華酒店套房，超過350家國際名店，以及評選爲米其林星級美食餐廳的皇雀印度餐廳，而獨具特色的街頭表演更是令人驚歎不已，當然還有不容錯過的貢多拉之旅，泛舟運河感受威尼斯的浪漫風情。",
        "image": "https://ws1.sinaimg.cn/large/9130c6a9gy1fsvlda4g6nj20ci08cmyt.jpg",
        "coordinates": [[[848, 1140], [942, 1140], [942, 1264], [848, 1264], [848, 1140]]],
        "subname": "",
        "relatedLocations": [5, 6]
    },
    "17": {
        "name": "澳門巴黎人（巴黎鐵塔）",
        "location": "澳門路氹金光大道連貫公路",
        "openingHours": "巴黎鐵塔：上午11時至晚上11時",
        "description": "澳門巴黎人是全澳門乃至亞洲的一顆閃耀新星，您可以在此感受“光之城”巴黎的獨特藝術氣息與迷人魅力。這裏有約3,000間法式客房及套房供您選擇，還有依照巴黎埃菲爾鐵塔1/2比例建造的巴黎鐵塔，讓您體驗獨一無二的浪漫風情。您還可以于170家精品名店享受購物樂趣，或是品嘗經典法式美食，欣賞精彩的娛樂表演，暢遊水世界、兒童王國等各種娛樂項目……像巴黎人一樣體驗無處不在的浪漫與驚喜！",
        "image": "https://ws1.sinaimg.cn/large/9130c6a9gy1fsvlfpqbpuj20ci08cjvc.jpg",
        "coordinates": [[[876, 968], [1010, 968], [1010, 1131], [876, 1131], [876, 968]]],
        "subname": "",
        "relatedLocations": [7, 8]
    },
    "18": {
        "name": "澳門金沙購物城邦廣場",
        "location": "澳門金沙度假區，澳門金沙",
        "openingHours": "全天",
        "description": "作爲澳門最大型的室內購物商場，澳門金沙購物城邦提供超過850間免稅品牌商鋪，爲您帶來非凡的購物體驗。從擁有高端奢華品牌的四季名店、彙聚世界知名大衆品牌的威尼斯人購物中心、到全新開幕的巴黎人購物中心帶來最新的創意時尚潮流，以至適合家庭顧客的金沙廣場，應有盡有的澳門金沙購物城邦是您享受室內購物體驗的最佳目的地。<br>無論是最新的潮流時尚或是頂級設計師品牌，澳門金沙購物城邦都能滿足您一切所需。",
        "image": "https://ws1.sinaimg.cn/large/9130c6a9gy1fsvlgymzssj20ci08cq7i.jpg",
        "coordinates": [[[711, 1060], [840, 1060], [840, 1138], [711, 1138], [711, 1060]]],
        "subname": "",
        "relatedLocations": [9, 10]
    },
    "19": {
        "name": "家庭/兒童娛樂",
        "location": "Planet J / Q立方，金沙購物城邦",
        "openingHours": "平日：上午10時至晚上7時 周末：上午10時至晚上8時",
        "description": "全球首個由玩家主導的室內主題樂園Planet J冒險王國，是澳門本土第一個主題樂園。樂園佔地100,000平方呎，由8個不同的主題園區組成，擁有超過200種互動遊戲裝置。Planet J冒險王國打破傳統主題樂園營運模式，讓玩家能參與冒險遊戲的創作，推動故事向前發展。        ",
        "image": "https://ws1.sinaimg.cn/large/9130c6a9gy1fsvll0ldm4j20ci08cjwi.jpg",
        "coordinates": [[[1092, 1118], [1157, 1118], [1157, 1164], [1092, 1164], [1092, 1118]]],
        "subname": "",
        "relatedLocations": [11, 12]
    },
    "20": {
        "name": "金光綜藝館",
        "location": "澳門威尼斯人",
        "openingHours": "全天",
        "description": "澳門最佳演唱會及表演場地。金光綜藝館爲一多功能室內表演場地，是您活動場地的理想選擇。",
        "image": "https://ws1.sinaimg.cn/large/9130c6a9gy1fsvlq61y5bj20ci08cmzs.jpg",
        "coordinates": [[[728, 1205], [837, 1205], [837, 1260], [728, 1260], [729, 1205]]],
        "subname": "",
        "relatedLocations": [13, 14]
    },
    "21": {
        "name": "澳門大熊貓館",
        "location": "路環石排灣郊野公園",
        "openingHours": "上午11時至下午1時，下午2時至下午5時",
        "description": "澳門大熊貓館位於路環石排灣郊野公園內，建築占地約3000平方米，整個建築利用現有的地形結合建築的特性進行設計，依山而建，呈扇形的分佈。<br>大熊貓館的外觀造型設計以仿自然為主，活動場的圍牆以仿山石包裹，營造一個自然山水環繞的大熊貓的活動場地。館內設有兩個面積各約330平方米的室內活動區和一個面積約600平方米的室外活動場，以供大熊貓活動之用。而為了大熊貓的生活需要，館內還設有大熊貓的後勤中心，包括獸舍、竹子清洗區、竹子儲存庫、飼料準備室、飼料儲存庫、監控區和醫療室等… ",
        "image": "https://ws1.sinaimg.cn/large/9130c6a9gy1fsvlt2z221j20ci08cjrv.jpg",
        "coordinates": [[[971, 610], [1126, 610], [1126, 707], [971, 707], [971, 610]]],
        "subname": "",
        "relatedLocations": [15, 16]
    },
    "22": {
        "name": "路環聖方濟各聖堂",
        "location": "路環計單奴街/馬忌士前地",
        "openingHours": "平日：上午10時至晚上7時 周末：上午10時至晚上8時",
        "description": "*逢周日及公休假期停止開放<br>建于1928年，這座小教堂的建築形式類似澳門一般教堂的巴洛克式建築。教堂的外牆爲白色，橢圓形窗戶及一座鍾樓，教堂前有一座紀念碑，以紀念當地1910年戰勝海盜一役。",
        "image": "https://ws1.sinaimg.cn/large/9130c6a9gy1fsvlugwd4hj20ci08cmxf.jpg",
        "coordinates": [[[829, 317], [1051, 317], [1051, 432], [829, 432], [829, 317]]],
        "subname": "",
        "relatedLocations": [17, 18]
    },
    "23": {
        "name": "葡式蛋撻 - 安德魯餅店",
        "location": "澳門路環市區戴紳禮街1號地下",
        "openingHours": "上午7時至晚上10時",
        "description": "英國人Andrew Stow於1989年9月15日在一個他喜愛的小村落:路環半島，開設了這家謙卑的安德魯餅店。安德魯的理念是確保他的產品總是新鮮的，健康的，天然的和最佳的。他拒絕用在其它面包店內十分普遍的添加劑和防腐劑。<br>在80年代後期的一次葡萄牙旅程中，安德魯認識了當地的葡撻(1837年在裏斯本貝倫起源的一種蛋撻)。安德魯因此創出了他自己的版本。他省去了一些傳統的方法和配料，並引入英式的格調。安德魯就這樣創出了自己獨特的配方，從此人們認識的”葡式蛋撻”就被引入亞洲。<br>安德魯餅店突然因為這壹款美食：安德魯蛋撻而變得著名，亦成為澳門旅遊景點之壹。安德魯始創的蛋撻配方在澳門以外的地域變得眾所周知，吸引了忠實的追隨者，並成了一個顯然的出口商品，幾乎成了澳門的地標之一。",
        "image": "https://ws1.sinaimg.cn/large/9130c6a9gy1fsvlvsm0soj20cj08cn11.jpg",
        "coordinates": [[[700, 560], [821, 560], [821, 642], [700, 642], [700, 560]]],
        "subname": "",
        "relatedLocations": [19, 20]
    },
    "24": {
        "name": "黑沙海灘",
        "location": "路環黑沙大馬路黑沙海灘",
        "openingHours": "全天",
        "description": "黑沙海灘是澳門最長的海灘，以黑色細沙聞名，不少人士愛到這兒遊泳或玩水上活動，也有很多人喜歡到這裏漫步海灘，感受海風，品嘗海邊小販攤檔的燒烤風味。海灘旁邊是黑沙公園，內設網球場、遊泳池、野餐區、兒童遊樂場和餐廳。<br>要數澳門最有名的露天浴場，非黑沙海灘莫屬。顧名思義，黑沙海灘的得名正是由于灘岸上滿布了黝黑的海沙，成爲這海灘最大的特色。",
        "image": "https://ws1.sinaimg.cn/large/9130c6a9gy1fsvlyjx2xdj20ci0irmxn.jpg",
        "coordinates": [[[1558, 655], [1797, 655], [1797, 735], [1558, 735], [1558, 655]]],
        "subname": "",
        "relatedLocations": [21, 22]
    },
    "25": {
        "name": "澳門光影節",
        "location": "議事亭前地",
        "openingHours": "2018年12月",
        "description": "澳門光影節在澳門多個景點上演，呈獻缤紛的光雕表演、燈飾裝置、互動遊戲及光影音樂表演。",
        "image": "https://ws1.sinaimg.cn/large/9130c6a9gy1fsvlzkdrnij20ci08cwex.jpg",
        "coordinates": [[[308, 2238], [419, 2238], [419, 2368], [308, 2368], [308, 2238]]],
        "subname": "",
        "relatedLocations": [23, 24]
    },
    "26": {
        "name": "澳門格蘭披治大賽車",
        "location": "東望洋跑道",
        "openingHours": "2018年11月15日-11月18日",
        "description": "高水准的澳門格蘭披治大賽車舉辦至今已達六十年曆史，可說是澳門最大型的國際性賽事。格蘭披治大賽包括摩托車、超級房車和三級方程式賽車等精彩的賽車項目，參賽車輛環繞澳門街道構成的東望洋跑道飛馳。預賽及賽車期間，旅客絡繹不絕，全城洋溢著興奮和緊張刺激的氣氛，街道上引擎的轟鳴聲此起彼落、彩色廣告旗幟飄揚。大賽車期間城市的生活節奏仿佛隨著賽車速度飛馳。",
        "image": "https://ws1.sinaimg.cn/large/9130c6a9gy1fsvm0na6k4j20ci08cwff.jpg",
        "coordinates": [[[591, 2225], [665, 2225], [665, 2253], [591, 2253], [591, 2225]]],
        "subname": "",
        "relatedLocations": [23, 22]
    },
    "27": {
        "name": "澳門國際煙花比賽匯演",
        "location": "南灣湖景大馬路",
        "openingHours": "2018年9月1,8,15,24日及10月1日",
        "description": "每年九月中旬至十月初，澳門都會舉辦精彩的國際煙花比賽彙演，吸引來自中國、菲律賓、泰國、中國台灣、日本、韓國、澳洲、英國、瑞士、法國、德國、葡萄牙及西班牙等國家和地區的高水准煙火公司參加。參賽隊伍以煙花配上音樂演出，增強效果和氣氛。比賽彙演于澳門旅遊塔對開海面舉行，觀衆可在不同的晚上欣賞到各地隊伍燃放的璀璨煙花，五彩缤紛、景象萬千，讓遊程更添難忘回憶。",
        "image": "https://ws1.sinaimg.cn/large/9130c6a9gy1fsvm1ysgcyj20ck08c0ul.jpg",
        "coordinates": [[[238, 1819], [407, 1819], [407, 1928], [238, 1928], [238, 1819]]],
        "subname": "",
        "relatedLocations": [21, 20]
    }
};

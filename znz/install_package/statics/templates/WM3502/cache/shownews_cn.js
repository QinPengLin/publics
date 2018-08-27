
/**
 * @preserve
 * Project: Bootstrap Hover Dropdown
 * Author: Cameron Spear
 * Version: v2.2.1
 * Contributors: Mattia Larentis
 * Dependencies: Bootstrap's Dropdown plugin, jQuery
 * Description: A simple plugin to enable Bootstrap dropdowns to active on hover and provide a nice user experience.
 * License: MIT
 * Homepage: http://cameronspear.com/blog/bootstrap-dropdown-on-hover-plugin/
 */
!function(e,n){var o=e();e.fn.dropdownHover=function(t){return"ontouchstart"in document?this:(o=o.add(this.parent()),this.each(function(){function r(){d.parents(".navbar").find(".navbar-toggle").is(":visible")||(n.clearTimeout(a),n.clearTimeout(i),i=n.setTimeout(function(){o.find(":focus").blur(),v.instantlyCloseOthers===!0&&o.removeClass("open"),n.clearTimeout(i),d.attr("aria-expanded","true"),s.addClass("open"),d.trigger(h)},v.hoverDelay))}var a,i,d=e(this),s=d.parent(),u={delay:500,hoverDelay:0,instantlyCloseOthers:!0},l={delay:e(this).data("delay"),hoverDelay:e(this).data("hover-delay"),instantlyCloseOthers:e(this).data("close-others")},h="show.bs.dropdown",c="hide.bs.dropdown",v=e.extend(!0,{},u,t,l);s.hover(function(e){return s.hasClass("open")||d.is(e.target)?void r(e):!0},function(){n.clearTimeout(i),a=n.setTimeout(function(){d.attr("aria-expanded","false"),s.removeClass("open"),d.trigger(c)},v.delay)}),d.hover(function(e){return s.hasClass("open")||s.is(e.target)?void r(e):!0}),s.find(".dropdown-submenu").each(function(){var o,t=e(this);t.hover(function(){n.clearTimeout(o),t.children(".dropdown-menu").show(),t.siblings().children(".dropdown-menu").hide()},function(){var e=t.children(".dropdown-menu");o=n.setTimeout(function(){e.hide()},v.delay)})})}))},e(document).ready(function(){e('[data-hover="dropdown"]').dropdownHover()})}(jQuery,window);
﻿/**
 * jquery-s2t v0.1.0
 *
 * https://github.com/hustlzp/jquery-s2t
 * A jQuery plugin to convert between Simplified Chinese and Traditional Chinese.
 * Tested in IE6+, Chrome, Firefox.
 *
 * Copyright 2013-2014 hustlzp
 * Released under the MIT license
 */

(function($) {

    // 共收录2553条简繁对照
    // 尚未考证是否正确、重复、完整

    /**
     * 简体字
     * @const
     */
    var S = new String('万与丑专业丛东丝丢两严丧个丬丰临为丽举么义乌乐乔习乡书买乱争于亏云亘亚产亩亲亵亸亿仅从仑仓仪们价众优伙会伛伞伟传伤伥伦伧伪伫体余佣佥侠侣侥侦侧侨侩侪侬俣俦俨俩俪俭债倾偬偻偾偿傥傧储傩儿兑兖党兰关兴兹养兽冁内冈册写军农冢冯冲决况冻净凄凉凌减凑凛几凤凫凭凯击凼凿刍划刘则刚创删别刬刭刽刿剀剂剐剑剥剧劝办务劢动励劲劳势勋勐勚匀匦匮区医华协单卖卢卤卧卫却卺厂厅历厉压厌厍厕厢厣厦厨厩厮县参叆叇双发变叙叠叶号叹叽吁后吓吕吗吣吨听启吴呒呓呕呖呗员呙呛呜咏咔咙咛咝咤咴咸哌响哑哒哓哔哕哗哙哜哝哟唛唝唠唡唢唣唤唿啧啬啭啮啰啴啸喷喽喾嗫呵嗳嘘嘤嘱噜噼嚣嚯团园囱围囵国图圆圣圹场坂坏块坚坛坜坝坞坟坠垄垅垆垒垦垧垩垫垭垯垱垲垴埘埙埚埝埯堑堕塆墙壮声壳壶壸处备复够头夸夹夺奁奂奋奖奥妆妇妈妩妪妫姗姜娄娅娆娇娈娱娲娴婳婴婵婶媪嫒嫔嫱嬷孙学孪宁宝实宠审宪宫宽宾寝对寻导寿将尔尘尧尴尸尽层屃屉届属屡屦屿岁岂岖岗岘岙岚岛岭岳岽岿峃峄峡峣峤峥峦崂崃崄崭嵘嵚嵛嵝嵴巅巩巯币帅师帏帐帘帜带帧帮帱帻帼幂幞干并广庄庆庐庑库应庙庞废庼廪开异弃张弥弪弯弹强归当录彟彦彻径徕御忆忏忧忾怀态怂怃怄怅怆怜总怼怿恋恳恶恸恹恺恻恼恽悦悫悬悭悯惊惧惨惩惫惬惭惮惯愍愠愤愦愿慑慭憷懑懒懔戆戋戏戗战戬户扎扑扦执扩扪扫扬扰抚抛抟抠抡抢护报担拟拢拣拥拦拧拨择挂挚挛挜挝挞挟挠挡挢挣挤挥挦捞损捡换捣据捻掳掴掷掸掺掼揸揽揿搀搁搂搅携摄摅摆摇摈摊撄撑撵撷撸撺擞攒敌敛数斋斓斗斩断无旧时旷旸昙昼昽显晋晒晓晔晕晖暂暧札术朴机杀杂权条来杨杩杰极构枞枢枣枥枧枨枪枫枭柜柠柽栀栅标栈栉栊栋栌栎栏树栖样栾桊桠桡桢档桤桥桦桧桨桩梦梼梾检棂椁椟椠椤椭楼榄榇榈榉槚槛槟槠横樯樱橥橱橹橼檐檩欢欤欧歼殁殇残殒殓殚殡殴毁毂毕毙毡毵氇气氢氩氲汇汉污汤汹沓沟没沣沤沥沦沧沨沩沪沵泞泪泶泷泸泺泻泼泽泾洁洒洼浃浅浆浇浈浉浊测浍济浏浐浑浒浓浔浕涂涌涛涝涞涟涠涡涢涣涤润涧涨涩淀渊渌渍渎渐渑渔渖渗温游湾湿溃溅溆溇滗滚滞滟滠满滢滤滥滦滨滩滪漤潆潇潋潍潜潴澜濑濒灏灭灯灵灾灿炀炉炖炜炝点炼炽烁烂烃烛烟烦烧烨烩烫烬热焕焖焘煅煳熘爱爷牍牦牵牺犊犟状犷犸犹狈狍狝狞独狭狮狯狰狱狲猃猎猕猡猪猫猬献獭玑玙玚玛玮环现玱玺珉珏珐珑珰珲琎琏琐琼瑶瑷璇璎瓒瓮瓯电画畅畲畴疖疗疟疠疡疬疮疯疱疴痈痉痒痖痨痪痫痴瘅瘆瘗瘘瘪瘫瘾瘿癞癣癫癯皑皱皲盏盐监盖盗盘眍眦眬着睁睐睑瞒瞩矫矶矾矿砀码砖砗砚砜砺砻砾础硁硅硕硖硗硙硚确硷碍碛碜碱碹磙礼祎祢祯祷祸禀禄禅离秃秆种积称秽秾稆税稣稳穑穷窃窍窑窜窝窥窦窭竖竞笃笋笔笕笺笼笾筑筚筛筜筝筹签简箓箦箧箨箩箪箫篑篓篮篱簖籁籴类籼粜粝粤粪粮糁糇紧絷纟纠纡红纣纤纥约级纨纩纪纫纬纭纮纯纰纱纲纳纴纵纶纷纸纹纺纻纼纽纾线绀绁绂练组绅细织终绉绊绋绌绍绎经绐绑绒结绔绕绖绗绘给绚绛络绝绞统绠绡绢绣绤绥绦继绨绩绪绫绬续绮绯绰绱绲绳维绵绶绷绸绹绺绻综绽绾绿缀缁缂缃缄缅缆缇缈缉缊缋缌缍缎缏缐缑缒缓缔缕编缗缘缙缚缛缜缝缞缟缠缡缢缣缤缥缦缧缨缩缪缫缬缭缮缯缰缱缲缳缴缵罂网罗罚罢罴羁羟羡翘翙翚耢耧耸耻聂聋职聍联聩聪肃肠肤肷肾肿胀胁胆胜胧胨胪胫胶脉脍脏脐脑脓脔脚脱脶脸腊腌腘腭腻腼腽腾膑臜舆舣舰舱舻艰艳艹艺节芈芗芜芦苁苇苈苋苌苍苎苏苘苹茎茏茑茔茕茧荆荐荙荚荛荜荞荟荠荡荣荤荥荦荧荨荩荪荫荬荭荮药莅莜莱莲莳莴莶获莸莹莺莼萚萝萤营萦萧萨葱蒇蒉蒋蒌蓝蓟蓠蓣蓥蓦蔷蔹蔺蔼蕲蕴薮藁藓虏虑虚虫虬虮虽虾虿蚀蚁蚂蚕蚝蚬蛊蛎蛏蛮蛰蛱蛲蛳蛴蜕蜗蜡蝇蝈蝉蝎蝼蝾螀螨蟏衅衔补衬衮袄袅袆袜袭袯装裆裈裢裣裤裥褛褴襁襕见观觃规觅视觇览觉觊觋觌觍觎觏觐觑觞触觯詟誉誊讠计订讣认讥讦讧讨让讪讫训议讯记讱讲讳讴讵讶讷许讹论讻讼讽设访诀证诂诃评诅识诇诈诉诊诋诌词诎诏诐译诒诓诔试诖诗诘诙诚诛诜话诞诟诠诡询诣诤该详诧诨诩诪诫诬语诮误诰诱诲诳说诵诶请诸诹诺读诼诽课诿谀谁谂调谄谅谆谇谈谊谋谌谍谎谏谐谑谒谓谔谕谖谗谘谙谚谛谜谝谞谟谠谡谢谣谤谥谦谧谨谩谪谫谬谭谮谯谰谱谲谳谴谵谶谷豮贝贞负贠贡财责贤败账货质贩贪贫贬购贮贯贰贱贲贳贴贵贶贷贸费贺贻贼贽贾贿赀赁赂赃资赅赆赇赈赉赊赋赌赍赎赏赐赑赒赓赔赕赖赗赘赙赚赛赜赝赞赟赠赡赢赣赪赵赶趋趱趸跃跄跖跞践跶跷跸跹跻踊踌踪踬踯蹑蹒蹰蹿躏躜躯车轧轨轩轪轫转轭轮软轰轱轲轳轴轵轶轷轸轹轺轻轼载轾轿辀辁辂较辄辅辆辇辈辉辊辋辌辍辎辏辐辑辒输辔辕辖辗辘辙辚辞辩辫边辽达迁过迈运还这进远违连迟迩迳迹适选逊递逦逻遗遥邓邝邬邮邹邺邻郁郄郏郐郑郓郦郧郸酝酦酱酽酾酿释里鉅鉴銮錾钆钇针钉钊钋钌钍钎钏钐钑钒钓钔钕钖钗钘钙钚钛钝钞钟钠钡钢钣钤钥钦钧钨钩钪钫钬钭钮钯钰钱钲钳钴钵钶钷钸钹钺钻钼钽钾钿铀铁铂铃铄铅铆铈铉铊铋铍铎铏铐铑铒铕铗铘铙铚铛铜铝铞铟铠铡铢铣铤铥铦铧铨铪铫铬铭铮铯铰铱铲铳铴铵银铷铸铹铺铻铼铽链铿销锁锂锃锄锅锆锇锈锉锊锋锌锍锎锏锐锑锒锓锔锕锖锗错锚锜锞锟锠锡锢锣锤锥锦锨锩锫锬锭键锯锰锱锲锳锴锵锶锷锸锹锺锻锼锽锾锿镀镁镂镃镆镇镈镉镊镌镍镎镏镐镑镒镕镖镗镙镚镛镜镝镞镟镠镡镢镣镤镥镦镧镨镩镪镫镬镭镮镯镰镱镲镳镴镶长门闩闪闫闬闭问闯闰闱闲闳间闵闶闷闸闹闺闻闼闽闾闿阀阁阂阃阄阅阆阇阈阉阊阋阌阍阎阏阐阑阒阓阔阕阖阗阘阙阚阛队阳阴阵阶际陆陇陈陉陕陧陨险随隐隶隽难雏雠雳雾霁霉霭靓静靥鞑鞒鞯鞴韦韧韨韩韪韫韬韵页顶顷顸项顺须顼顽顾顿颀颁颂颃预颅领颇颈颉颊颋颌颍颎颏颐频颒颓颔颕颖颗题颙颚颛颜额颞颟颠颡颢颣颤颥颦颧风飏飐飑飒飓飔飕飖飗飘飙飚飞飨餍饤饥饦饧饨饩饪饫饬饭饮饯饰饱饲饳饴饵饶饷饸饹饺饻饼饽饾饿馀馁馂馃馄馅馆馇馈馉馊馋馌馍馎馏馐馑馒馓馔馕马驭驮驯驰驱驲驳驴驵驶驷驸驹驺驻驼驽驾驿骀骁骂骃骄骅骆骇骈骉骊骋验骍骎骏骐骑骒骓骔骕骖骗骘骙骚骛骜骝骞骟骠骡骢骣骤骥骦骧髅髋髌鬓魇魉鱼鱽鱾鱿鲀鲁鲂鲄鲅鲆鲇鲈鲉鲊鲋鲌鲍鲎鲏鲐鲑鲒鲓鲔鲕鲖鲗鲘鲙鲚鲛鲜鲝鲞鲟鲠鲡鲢鲣鲤鲥鲦鲧鲨鲩鲪鲫鲬鲭鲮鲯鲰鲱鲲鲳鲴鲵鲶鲷鲸鲹鲺鲻鲼鲽鲾鲿鳀鳁鳂鳃鳄鳅鳆鳇鳈鳉鳊鳋鳌鳍鳎鳏鳐鳑鳒鳓鳔鳕鳖鳗鳘鳙鳛鳜鳝鳞鳟鳠鳡鳢鳣鸟鸠鸡鸢鸣鸤鸥鸦鸧鸨鸩鸪鸫鸬鸭鸮鸯鸰鸱鸲鸳鸴鸵鸶鸷鸸鸹鸺鸻鸼鸽鸾鸿鹀鹁鹂鹃鹄鹅鹆鹇鹈鹉鹊鹋鹌鹍鹎鹏鹐鹑鹒鹓鹔鹕鹖鹗鹘鹚鹛鹜鹝鹞鹟鹠鹡鹢鹣鹤鹥鹦鹧鹨鹩鹪鹫鹬鹭鹯鹰鹱鹲鹳鹴鹾麦麸黄黉黡黩黪黾鼋鼌鼍鼗鼹齄齐齑齿龀龁龂龃龄龅龆龇龈龉龊龋龌龙龚龛龟志制咨只里系范松没尝尝闹面准钟别闲干尽脏拼');

    /**
     * 繁体字
     * @const
     */
    var T = new String('萬與醜專業叢東絲丟兩嚴喪個爿豐臨為麗舉麼義烏樂喬習鄉書買亂爭於虧雲亙亞產畝親褻嚲億僅從侖倉儀們價眾優夥會傴傘偉傳傷倀倫傖偽佇體餘傭僉俠侶僥偵側僑儈儕儂俁儔儼倆儷儉債傾傯僂僨償儻儐儲儺兒兌兗黨蘭關興茲養獸囅內岡冊寫軍農塚馮衝決況凍淨淒涼淩減湊凜幾鳳鳧憑凱擊氹鑿芻劃劉則剛創刪別剗剄劊劌剴劑剮劍剝劇勸辦務勱動勵勁勞勢勳猛勩勻匭匱區醫華協單賣盧鹵臥衛卻巹廠廳曆厲壓厭厙廁廂厴廈廚廄廝縣參靉靆雙發變敘疊葉號歎嘰籲後嚇呂嗎唚噸聽啟吳嘸囈嘔嚦唄員咼嗆嗚詠哢嚨嚀噝吒噅鹹呱響啞噠嘵嗶噦嘩噲嚌噥喲嘜嗊嘮啢嗩唕喚呼嘖嗇囀齧囉嘽嘯噴嘍嚳囁嗬噯噓嚶囑嚕劈囂謔團園囪圍圇國圖圓聖壙場阪壞塊堅壇壢壩塢墳墜壟壟壚壘墾坰堊墊埡墶壋塏堖塒塤堝墊垵塹墮壪牆壯聲殼壺壼處備複夠頭誇夾奪奩奐奮獎奧妝婦媽嫵嫗媯姍薑婁婭嬈嬌孌娛媧嫻嫿嬰嬋嬸媼嬡嬪嬙嬤孫學孿寧寶實寵審憲宮寬賓寢對尋導壽將爾塵堯尷屍盡層屭屜屆屬屢屨嶼歲豈嶇崗峴嶴嵐島嶺嶽崠巋嶨嶧峽嶢嶠崢巒嶗崍嶮嶄嶸嶔崳嶁脊巔鞏巰幣帥師幃帳簾幟帶幀幫幬幘幗冪襆幹並廣莊慶廬廡庫應廟龐廢廎廩開異棄張彌弳彎彈強歸當錄彠彥徹徑徠禦憶懺憂愾懷態慫憮慪悵愴憐總懟懌戀懇惡慟懨愷惻惱惲悅愨懸慳憫驚懼慘懲憊愜慚憚慣湣慍憤憒願懾憖怵懣懶懍戇戔戲戧戰戩戶紮撲扡執擴捫掃揚擾撫拋摶摳掄搶護報擔擬攏揀擁攔擰撥擇掛摯攣掗撾撻挾撓擋撟掙擠揮撏撈損撿換搗據撚擄摑擲撣摻摜摣攬撳攙擱摟攪攜攝攄擺搖擯攤攖撐攆擷擼攛擻攢敵斂數齋斕鬥斬斷無舊時曠暘曇晝曨顯晉曬曉曄暈暉暫曖劄術樸機殺雜權條來楊榪傑極構樅樞棗櫪梘棖槍楓梟櫃檸檉梔柵標棧櫛櫳棟櫨櫟欄樹棲樣欒棬椏橈楨檔榿橋樺檜槳樁夢檮棶檢欞槨櫝槧欏橢樓欖櫬櫚櫸檟檻檳櫧橫檣櫻櫫櫥櫓櫞簷檁歡歟歐殲歿殤殘殞殮殫殯毆毀轂畢斃氈毿氌氣氫氬氳彙漢汙湯洶遝溝沒灃漚瀝淪滄渢溈滬濔濘淚澩瀧瀘濼瀉潑澤涇潔灑窪浹淺漿澆湞溮濁測澮濟瀏滻渾滸濃潯濜塗湧濤澇淶漣潿渦溳渙滌潤澗漲澀澱淵淥漬瀆漸澠漁瀋滲溫遊灣濕潰濺漵漊潷滾滯灩灄滿瀅濾濫灤濱灘澦濫瀠瀟瀲濰潛瀦瀾瀨瀕灝滅燈靈災燦煬爐燉煒熗點煉熾爍爛烴燭煙煩燒燁燴燙燼熱煥燜燾煆糊溜愛爺牘犛牽犧犢強狀獷獁猶狽麅獮獰獨狹獅獪猙獄猻獫獵獼玀豬貓蝟獻獺璣璵瑒瑪瑋環現瑲璽瑉玨琺瓏璫琿璡璉瑣瓊瑤璦璿瓔瓚甕甌電畫暢佘疇癤療瘧癘瘍鬁瘡瘋皰屙癰痙癢瘂癆瘓癇癡癉瘮瘞瘺癟癱癮癭癩癬癲臒皚皺皸盞鹽監蓋盜盤瞘眥矓著睜睞瞼瞞矚矯磯礬礦碭碼磚硨硯碸礪礱礫礎硜矽碩硤磽磑礄確鹼礙磧磣堿镟滾禮禕禰禎禱禍稟祿禪離禿稈種積稱穢穠穭稅穌穩穡窮竊竅窯竄窩窺竇窶豎競篤筍筆筧箋籠籩築篳篩簹箏籌簽簡籙簀篋籜籮簞簫簣簍籃籬籪籟糴類秈糶糲粵糞糧糝餱緊縶糸糾紆紅紂纖紇約級紈纊紀紉緯紜紘純紕紗綱納紝縱綸紛紙紋紡紵紖紐紓線紺絏紱練組紳細織終縐絆紼絀紹繹經紿綁絨結絝繞絰絎繪給絢絳絡絕絞統綆綃絹繡綌綏絛繼綈績緒綾緓續綺緋綽緔緄繩維綿綬繃綢綯綹綣綜綻綰綠綴緇緙緗緘緬纜緹緲緝縕繢緦綞緞緶線緱縋緩締縷編緡緣縉縛縟縝縫縗縞纏縭縊縑繽縹縵縲纓縮繆繅纈繚繕繒韁繾繰繯繳纘罌網羅罰罷羆羈羥羨翹翽翬耮耬聳恥聶聾職聹聯聵聰肅腸膚膁腎腫脹脅膽勝朧腖臚脛膠脈膾髒臍腦膿臠腳脫腡臉臘醃膕齶膩靦膃騰臏臢輿艤艦艙艫艱豔艸藝節羋薌蕪蘆蓯葦藶莧萇蒼苧蘇檾蘋莖蘢蔦塋煢繭荊薦薘莢蕘蓽蕎薈薺蕩榮葷滎犖熒蕁藎蓀蔭蕒葒葤藥蒞蓧萊蓮蒔萵薟獲蕕瑩鶯蓴蘀蘿螢營縈蕭薩蔥蕆蕢蔣蔞藍薊蘺蕷鎣驀薔蘞藺藹蘄蘊藪槁蘚虜慮虛蟲虯蟣雖蝦蠆蝕蟻螞蠶蠔蜆蠱蠣蟶蠻蟄蛺蟯螄蠐蛻蝸蠟蠅蟈蟬蠍螻蠑螿蟎蠨釁銜補襯袞襖嫋褘襪襲襏裝襠褌褳襝褲襇褸襤繈襴見觀覎規覓視覘覽覺覬覡覿覥覦覯覲覷觴觸觶讋譽謄訁計訂訃認譏訐訌討讓訕訖訓議訊記訒講諱謳詎訝訥許訛論訩訟諷設訪訣證詁訶評詛識詗詐訴診詆謅詞詘詔詖譯詒誆誄試詿詩詰詼誠誅詵話誕詬詮詭詢詣諍該詳詫諢詡譸誡誣語誚誤誥誘誨誑說誦誒請諸諏諾讀諑誹課諉諛誰諗調諂諒諄誶談誼謀諶諜謊諫諧謔謁謂諤諭諼讒諮諳諺諦謎諞諝謨讜謖謝謠謗諡謙謐謹謾謫譾謬譚譖譙讕譜譎讞譴譫讖穀豶貝貞負貟貢財責賢敗賬貨質販貪貧貶購貯貫貳賤賁貰貼貴貺貸貿費賀貽賊贄賈賄貲賃賂贓資賅贐賕賑賚賒賦賭齎贖賞賜贔賙賡賠賧賴賵贅賻賺賽賾贗讚贇贈贍贏贛赬趙趕趨趲躉躍蹌蹠躒踐躂蹺蹕躚躋踴躊蹤躓躑躡蹣躕躥躪躦軀車軋軌軒軑軔轉軛輪軟轟軲軻轤軸軹軼軤軫轢軺輕軾載輊轎輈輇輅較輒輔輛輦輩輝輥輞輬輟輜輳輻輯轀輸轡轅轄輾轆轍轔辭辯辮邊遼達遷過邁運還這進遠違連遲邇逕跡適選遜遞邐邏遺遙鄧鄺鄔郵鄒鄴鄰鬱郤郟鄶鄭鄆酈鄖鄲醞醱醬釅釃釀釋裏钜鑒鑾鏨釓釔針釘釗釙釕釷釺釧釤鈒釩釣鍆釹鍚釵鈃鈣鈈鈦鈍鈔鍾鈉鋇鋼鈑鈐鑰欽鈞鎢鉤鈧鈁鈥鈄鈕鈀鈺錢鉦鉗鈷缽鈳鉕鈽鈸鉞鑽鉬鉭鉀鈿鈾鐵鉑鈴鑠鉛鉚鈰鉉鉈鉍鈹鐸鉶銬銠鉺銪鋏鋣鐃銍鐺銅鋁銱銦鎧鍘銖銑鋌銩銛鏵銓鉿銚鉻銘錚銫鉸銥鏟銃鐋銨銀銣鑄鐒鋪鋙錸鋱鏈鏗銷鎖鋰鋥鋤鍋鋯鋨鏽銼鋝鋒鋅鋶鐦鐧銳銻鋃鋟鋦錒錆鍺錯錨錡錁錕錩錫錮鑼錘錐錦鍁錈錇錟錠鍵鋸錳錙鍥鍈鍇鏘鍶鍔鍤鍬鍾鍛鎪鍠鍰鎄鍍鎂鏤鎡鏌鎮鎛鎘鑷鐫鎳鎿鎦鎬鎊鎰鎔鏢鏜鏍鏰鏞鏡鏑鏃鏇鏐鐔钁鐐鏷鑥鐓鑭鐠鑹鏹鐙鑊鐳鐶鐲鐮鐿鑔鑣鑞鑲長門閂閃閆閈閉問闖閏闈閑閎間閔閌悶閘鬧閨聞闥閩閭闓閥閣閡閫鬮閱閬闍閾閹閶鬩閿閽閻閼闡闌闃闠闊闋闔闐闒闕闞闤隊陽陰陣階際陸隴陳陘陝隉隕險隨隱隸雋難雛讎靂霧霽黴靄靚靜靨韃鞽韉韝韋韌韍韓韙韞韜韻頁頂頃頇項順須頊頑顧頓頎頒頌頏預顱領頗頸頡頰頲頜潁熲頦頤頻頮頹頷頴穎顆題顒顎顓顏額顳顢顛顙顥纇顫顬顰顴風颺颭颮颯颶颸颼颻飀飄飆飆飛饗饜飣饑飥餳飩餼飪飫飭飯飲餞飾飽飼飿飴餌饒餉餄餎餃餏餅餑餖餓餘餒餕餜餛餡館餷饋餶餿饞饁饃餺餾饈饉饅饊饌饢馬馭馱馴馳驅馹駁驢駔駛駟駙駒騶駐駝駑駕驛駘驍罵駰驕驊駱駭駢驫驪騁驗騂駸駿騏騎騍騅騌驌驂騙騭騤騷騖驁騮騫騸驃騾驄驏驟驥驦驤髏髖髕鬢魘魎魚魛魢魷魨魯魴魺鮁鮃鯰鱸鮋鮓鮒鮊鮑鱟鮍鮐鮭鮚鮳鮪鮞鮦鰂鮜鱠鱭鮫鮮鮺鯗鱘鯁鱺鰱鰹鯉鰣鰷鯀鯊鯇鮶鯽鯒鯖鯪鯕鯫鯡鯤鯧鯝鯢鯰鯛鯨鯵鯴鯔鱝鰈鰏鱨鯷鰮鰃鰓鱷鰍鰒鰉鰁鱂鯿鰠鼇鰭鰨鰥鰩鰟鰜鰳鰾鱈鱉鰻鰵鱅鰼鱖鱔鱗鱒鱯鱤鱧鱣鳥鳩雞鳶鳴鳲鷗鴉鶬鴇鴆鴣鶇鸕鴨鴞鴦鴒鴟鴝鴛鴬鴕鷥鷙鴯鴰鵂鴴鵃鴿鸞鴻鵐鵓鸝鵑鵠鵝鵒鷳鵜鵡鵲鶓鵪鶤鵯鵬鵮鶉鶊鵷鷫鶘鶡鶚鶻鶿鶥鶩鷊鷂鶲鶹鶺鷁鶼鶴鷖鸚鷓鷚鷯鷦鷲鷸鷺鸇鷹鸌鸏鸛鸘鹺麥麩黃黌黶黷黲黽黿鼂鼉鞀鼴齇齊齏齒齔齕齗齟齡齙齠齜齦齬齪齲齷龍龔龕龜誌製谘隻裡係範鬆冇嚐嘗鬨麵準鐘彆閒乾儘臟拚');

    /**
     * 转换文本
     * @param {String} str - 待转换的文本
     * @param {Boolean} toT - 是否转换成繁体
     * @returns {String} - 转换结果
     */
    function tranStr(str, toT) {
        var i;
        var letter;
        var code;
        var isChinese;
        var index;
        var src, des;
        var result = '';

        if (toT) {
            src = S;
            des = T;
        } else {
            src = T;
            des = S;
        }

        if (typeof str !== "string") {
            return str;
        }

        for (i = 0; i < str.length; i++) {
            letter = str.charAt(i);
            code = str.charCodeAt(i); 
            
            // 根据字符的Unicode判断是否为汉字，以提高性能
            // 参考:
            // [1] http://www.unicode.org
            // [2] http://zh.wikipedia.org/wiki/Unicode%E5%AD%97%E7%AC%A6%E5%88%97%E8%A1%A8
            // [3] http://xylonwang.iteye.com/blog/519552
            isChinese = (code > 0x3400 && code < 0x9FC3) || (code > 0xF900 && code < 0xFA6A);

            if (!isChinese) {
                result += letter;
                continue;
            }

            index = src.indexOf(letter);

            if (index !== -1) {
                result += des.charAt(index);
            } else {
                result += letter;
            }
        }

        return result;
    }

    /**
     * 转换HTML Element属性
     * @param {Element} element - 待转换的HTML Element节点
     * @param {String|Array} attr - 待转换的属性/属性列表
     * @param {Boolean} toT - 是否转换成繁体
     */
    function tranAttr(element, attr, toT) {
        var i, attrValue;

        if (attr instanceof Array) {
            for(i = 0; i < attr.length; i++) {
                tranAttr(element, attr[i], toT);
            }
        } else {
            attrValue = element.getAttribute(attr);

            if (attrValue !== "" && attrValue !== null) {
                element.setAttribute(attr, tranStr(attrValue, toT));
            }
        }
    }

    /**
     * 转换HTML Element节点
     * @param {Element} element - 待转换的HTML Element节点
     * @param {Boolean} toT - 是否转换成繁体
     */
    function tranElement(element, toT) {
        var i;
        var childNodes;

        if (element.nodeType !== 1) {
            return;
        }

        childNodes = element.childNodes;

        for (i = 0; i < childNodes.length; i++) {
            var childNode = childNodes.item(i);

            // 若为HTML Element节点
            if (childNode.nodeType === 1) {
                // 对以下标签不做处理
                if ("|BR|HR|TEXTAREA|SCRIPT|OBJECT|EMBED|".indexOf("|" + childNode.tagName + "|") !== -1) {
                    continue;
                }
                
                tranAttr(childNode, ['title', 'data-original-title', 'alt', 'placeholder'], toT);

                // input 标签
                // 对text类型的input输入框不做处理
                if (childNode.tagName === "INPUT"
                    && childNode.value !== ""
                    && childNode.type !== "text"
                    && childNode.type !== "hidden")
                {
                    childNode.value = tranStr(childNode.value, toT);
                }

                // 继续递归调用
                tranElement(childNode, toT);
            } else if (childNode.nodeType === 3) {  // 若为文本节点
                childNode.data = tranStr(childNode.data, toT);
            }
        }
    }

    // 扩展jQuery全局方法
    $.extend({
        /**
         * 文本简转繁
         * @param {String} str - 待转换的文本
         * @returns {String} 转换结果
         */
        s2t: function(str) {
            return tranStr(str, true);
        },

        /**
         * 文本繁转简
         * @param {String} str - 待转换的文本
         * @returns {String} 转换结果
         */
        t2s: function(str) {
            return tranStr(str, false);
        }
    });

    // 扩展jQuery对象方法
    $.fn.extend({
        /**
         * jQuery Objects简转繁
         * @this {jQuery Objects} 待转换的jQuery Objects
         */
        s2t: function() {
            return this.each(function() {
                tranElement(this, true);
            });
        },

        /**
         * jQuery Objects繁转简
         * @this {jQuery Objects} 待转换的jQuery Objects
         */
        t2s: function() {
            return this.each(function() {
                tranElement(this, false);
            });
        }
    });
}) (jQuery);

/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.9
 *
 * Requires: jQuery 1.2.2+
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.9',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
        },

        getLineHeight: function(elem) {
            return parseInt($(elem)['offsetParent' in $.fn ? 'offsetParent' : 'parent']().css('fontSize'), 10);
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));
! function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
        function c(c, d) {
            var f, e = this;
            e.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(c),
                appendDots: a(c),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(b, c) {
                    return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
                },
                dots: !0,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                placeHolder: met_lazyloadbg,
                lazyloadPrevNext:!1,
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, e.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0)
        }
        var b = 0;
        return c
    }(), b.prototype.activateADA = function() {
        var a = this;
        a.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
        var e = this;
        if ("boolean" == typeof c) d = c, c = null;
        else if (0 > c || c >= e.slideCount) return !1;
        e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b)
        }), e.$slidesCache = e.$slides, e.reinit()
    }, b.prototype.animateHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({
                height: b
            }, a.options.speed)
        }
    }, b.prototype.animateSlide = function(b, c) {
        var d = {},
            e = this;
        e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
            left: b
        }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
            top: b
        }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
            animStart: e.currentLeft
        }).animate({
            animStart: b
        }, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function(a) {
                a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
            },
            complete: function() {
                c && c.call()
            }
        })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
            e.disableTransition(), c.call()
        }, e.options.speed))
    }, b.prototype.getNavTarget = function() {
        var b = this,
            c = b.options.asNavFor;
        return c && null !== c && (c = a(c).not(b.$slider)), c
    }, b.prototype.asNavFor = function(b) {
        var c = this,
            d = c.getNavTarget();
        null !== d && "object" == typeof d && d.each(function() {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0)
        })
    }, b.prototype.applyTransition = function(a) {
        var b = this,
            c = {};
        b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.autoPlay = function() {
        var a = this;
        a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }, b.prototype.autoPlayClear = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }, b.prototype.autoPlayIterator = function() {
        var a = this,
            b = a.currentSlide + a.options.slidesToScroll;
        a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b))
    }, b.prototype.buildArrows = function() {
        var b = this;
        b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, b.prototype.buildDots = function() {
        var c, d, b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
            b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
        }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
    }, b.prototype.buildRows = function() {
        var b, c, d, e, f, g, h, a = this;
        if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
            for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
                var i = document.createElement("div");
                for (c = 0; c < a.options.rows; c++) {
                    var j = document.createElement("div");
                    for (d = 0; d < a.options.slidesPerRow; d++) {
                        var k = b * h + (c * a.options.slidesPerRow + d);
                        g.get(k) && j.appendChild(g.get(k))
                    }
                    i.appendChild(j)
                }
                e.appendChild(i)
            }
            a.$slider.empty().append(e), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, b.prototype.checkResponsive = function(b, c) {
        var e, f, g, d = this,
            h = !1,
            i = d.$slider.width(),
            j = window.innerWidth || a(window).width();
        if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
            f = null;
            for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
            null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
        }
    }, b.prototype.changeSlide = function(b, c) {
        var f, g, h, d = this,
            e = a(b.currentTarget);
        switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
            case "previous":
                g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
                break;
            case "next":
                g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
                break;
            case "index":
                var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
                d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
                break;
            default:
                return
        }
    }, b.prototype.checkNavigable = function(a) {
        var c, d, b = this;
        if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
        else
            for (var e in c) {
                if (a < c[e]) {
                    a = d;
                    break
                }
                d = c[e]
            }
        return a
    }, b.prototype.cleanUpEvents = function() {
        var b = this;
        b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.cleanUpSlideEvents = function() {
        var b = this;
        b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }, b.prototype.cleanUpRows = function() {
        var b, a = this;
        a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b))
    }, b.prototype.clickHandler = function(a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
    }, b.prototype.destroy = function(b) {
        var c = this;
        c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            a(this).attr("style", a(this).data("originalStyling"))
        }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
    }, b.prototype.disableTransition = function(a) {
        var b = this,
            c = {};
        c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.fadeSlide = function(a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({
            zIndex: c.options.zIndex
        }), c.$slides.eq(a).animate({
            opacity: 1
        }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
            opacity: 1,
            zIndex: c.options.zIndex
        }), b && setTimeout(function() {
            c.disableTransition(a), b.call()
        }, c.options.speed))
    }, b.prototype.fadeSlideOut = function(a) {
        var b = this;
        b.cssTransitions === !1 ? b.$slides.eq(a).animate({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }))
    }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
        var b = this;
        null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
    }, b.prototype.focusHandler = function() {
        var b = this;
        b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function() {
                b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay())
            }, 0)
        })
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
        var a = this;
        return a.currentSlide
    }, b.prototype.getDotCount = function() {
        var a = this,
            b = 0,
            c = 0,
            d = 0;
        if (a.options.infinite === !0)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else if (a.options.centerMode === !0) d = a.slideCount;
        else if (a.options.asNavFor)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
        return d - 1
    }, b.prototype.getLeft = function(a) {
        var c, d, f, b = this,
            e = 0;
        return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
    }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
        var b = this;
        return b.options[a]
    }, b.prototype.getNavigableIndexes = function() {
        var e, a = this,
            b = 0,
            c = 0,
            d = [];
        for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d
    }, b.prototype.getSlick = function() {
        return this
    }, b.prototype.getSlideCount = function() {
        var c, d, e, b = this;
        return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function(c, f) {
            return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
        }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
    }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
        var c = this;
        c.changeSlide({
            data: {
                message: "index",
                index: parseInt(a)
            }
        }, b)
    }, b.prototype.init = function(b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
    }, b.prototype.initADA = function() {
        var b = this;
        b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
            a(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + b.instanceUid + c
            })
        }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
            a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
    }, b.prototype.initArrowEvents = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, a.changeSlide))
    }, b.prototype.initDotEvents = function() {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
            message: "index"
        }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }, b.prototype.initSlideEvents = function() {
        var b = this;
        b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
    }, b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.initUI = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
    }, b.prototype.keyHandler = function(a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
            data: {
                message: b.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
            data: {
                message: b.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }, b.prototype.lazyLoad = function() {
        function g(c) {
            a("img[data-lazy]", c).each(function() {
                var c = a(this),
                    d = a(this).attr("data-lazy"),
                    ds = a(this).attr("data-srcset"),
                    e = document.createElement("img");
                c.animate({
                    opacity: 0
                }, 100, function() {
                    c.attr({
                        src: d,
                        srcset: ds
                    }).removeAttr("data-lazy").removeAttr("data-srcset").removeClass("slick-loading").animate({
                        opacity: 1
                    }, 200), b.$slider.trigger("lazyLoaded", [b, c, d])
                });
                e.onerror = function() {
                    c.removeAttr("data-lazy").removeAttr("data-srcset").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d])
                }
            })
        }
        var c, d, e, f, b = this;
        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
        if(b.options.lazyloadPrevNext && b.$slideTrack.find('.slick-slide').length>2){
            var slide_index=b.$slideTrack.find('.slick-active').index(),
                slide_prevnext_order=[slide_index-1,slide_index+1];
            for (var i = 0; i < 2; i++) {
                b.$slideTrack.find('.slick-slide:eq('+slide_prevnext_order[i]+') img').each(function(){
                    if($(this).attr('data-lazy')) $(this).attr({src:$(this).data('lazy')}).removeAttr('data-lazy').removeClass('slick-loading');
                    if($(this).attr('data-srcset')) $(this).attr({srcset:$(this).data('srcset')}).removeAttr('data-srcset');
                })
            }
        }
    }, b.prototype.loadSlider = function() {
        var a = this;
        if (a.options.placeHolder){
            a.$slideTrack.find('img[data-lazy]').each(function(index, el) {
                $(this).attr({src:a.options.placeHolder});
            });
        };
        a.setPosition(), a.$slideTrack.css({
            opacity: 1
        }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }, b.prototype.next = b.prototype.slickNext = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "next"
            }
        })
    }, b.prototype.orientationChange = function() {
        var a = this;
        a.checkResponsive(), a.setPosition()
    }, b.prototype.pause = b.prototype.slickPause = function() {
        var a = this;
        a.autoPlayClear(), a.paused = !0
    }, b.prototype.play = b.prototype.slickPlay = function() {
        var a = this;
        a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
    }, b.prototype.postSlide = function(a) {
        var b = this;
        b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA())
    }, b.prototype.prev = b.prototype.slickPrev = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, b.prototype.preventDefault = function(a) {
        a.preventDefault()
    }, b.prototype.progressiveLazyLoad = function(b) {
        b = b || 1;
        var e, f, fs, g, c = this,
            d = a("img[data-lazy]", c.$slider);
        d.length ? (e = d.first(), f = e.attr("data-lazy"), fs = e.attr("data-srcset"), g = document.createElement("img"), g.onload = function() {
            e.attr({
                src: f,
                srcset: fs
            }).removeAttr("data-lazy").removeAttr("data-srcset").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad()
        }, g.onerror = function() {
            3 > b ? setTimeout(function() {
                c.progressiveLazyLoad(b + 1)
            }, 500) : (e.removeAttr("data-lazy").removeAttr("data-srcset").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad())
        }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c])
    }, b.prototype.refresh = function(b) {
        var d, e, c = this;
        e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
            currentSlide: d
        }), c.init(), b || c.changeSlide({
            data: {
                message: "index",
                index: d
            }
        }, !1)
    }, b.prototype.registerBreakpoints = function() {
        var c, d, e, b = this,
            f = b.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
            b.respondTo = b.options.respondTo || "window";
            for (c in f)
                if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
                    for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
                    b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
                }
            b.breakpoints.sort(function(a, c) {
                return b.options.mobileFirst ? a - c : c - a
            })
        }
    }, b.prototype.reinit = function() {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
    }, b.prototype.resize = function() {
        var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
            b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
        }, 50))
    }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
        var d = this;
        return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
    }, b.prototype.setCSS = function(a) {
        var d, e, b = this,
            c = {};
        b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
    }, b.prototype.setDimensions = function() {
        var a = this;
        a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
            padding: "0px " + a.options.centerPadding
        }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
            padding: a.options.centerPadding + " 0px"
        })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    }, b.prototype.setFade = function() {
        var c, b = this;
        b.$slides.each(function(d, e) {
            c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
                position: "relative",
                right: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            }) : a(e).css({
                position: "relative",
                left: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            })
        }), b.$slides.eq(b.currentSlide).css({
            zIndex: b.options.zIndex - 1,
            opacity: 1
        })
    }, b.prototype.setHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }, b.prototype.setOption = b.prototype.slickSetOption = function() {
        var c, d, e, f, h, b = this,
            g = !1;
        if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;
        else if ("multiple" === h) a.each(e, function(a, c) {
            b.options[a] = c
        });
        else if ("responsive" === h)
            for (d in f)
                if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];
                else {
                    for (c = b.options.responsive.length - 1; c >= 0;) b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
                    b.options.responsive.push(f[d])
                }
        g && (b.unload(), b.reinit())
    }, b.prototype.setPosition = function() {
        var a = this;
        a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
    }, b.prototype.setProps = function() {
        var a = this,
            b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
    }, b.prototype.setSlideClasses = function(a) {
        var c, d, e, f, b = this;
        d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
    }, b.prototype.setupInfinite = function() {
        var c, d, e, b = this;
        if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned").find('img').height('').removeAttr('height');
            for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned").find('img').height('').removeAttr('height');
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                a(this).attr("id", "")
            })
        }
    }, b.prototype.interrupt = function(a) {
        var b = this;
        a || b.autoPlay(), b.interrupted = a
    }, b.prototype.selectHandler = function(b) {
        var c = this,
            d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
            e = parseInt(d.attr("data-slick-index"));
        return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
    }, b.prototype.slideHandler = function(a, b, c) {
        var d, e, f, g, j, h = null,
            i = this;
        return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function() {
            i.postSlide(e)
        })) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function() {
            i.postSlide(e)
        }) : i.postSlide(e))))
    }, b.prototype.startLoad = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
    }, b.prototype.swipeDirection = function() {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
    }, b.prototype.swipeEnd = function(a) {
        var c, d, b = this;
        if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
        if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
            switch (d = b.swipeDirection()) {
                case "left":
                case "down":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1
            }
            "vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]))
        } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
    }, b.prototype.swipeHandler = function(a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
            case "start":
                b.swipeStart(a);
                break;
            case "move":
                b.swipeMove(a);
                break;
            case "end":
                b.swipeEnd(a)
        }
    }, b.prototype.swipeMove = function(a) {
        var d, e, f, g, h, b = this;
        return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0)
    }, b.prototype.swipeStart = function(a) {
        var c, b = this;
        return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0))
    }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
        var a = this;
        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
    }, b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, b.prototype.unslick = function(a) {
        var b = this;
        b.$slider.trigger("unslick", [b, a]), b.destroy()
    }, b.prototype.updateArrows = function() {
        var b, a = this;
        b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, b.prototype.updateDots = function() {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, b.prototype.visibility = function() {
        var a = this;
        a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
    }, a.fn.slick = function() {
        var f, g, a = this,
            c = arguments[0],
            d = Array.prototype.slice.call(arguments, 1),
            e = a.length;
        for (f = 0; e > f; f++)
            if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
        return a
    }
});
window.met_prevarrow='<button type="button" class="slick-prev"><i class="iconfont icon-prev"></i></button>',
    met_nextarrow='<button type="button" class="slick-next"><i class="iconfont icon-next"></i></button>';
/*! Tablesaw - v2.0.2 - 2015-10-28
* https://github.com/filamentgroup/tablesaw
* Copyright (c) 2015 Filament Group; Licensed  */
/*
* tablesaw: A set of plugins for responsive tables
* Stack and Column Toggle tables
* Copyright (c) 2013 Filament Group, Inc.
* MIT License
*/
if(typeof Tablesaw==="undefined"){Tablesaw={i18n:{modes:['Stack','Swipe','Toggle'],columns:'Col<span class=\"a11y-sm\">umn</span>s',columnBtnText:'Columns',columnsDialogError:'No eligible columns.',sort:'Sort'}, mustard:'querySelector'in document&&(!window.blackberry||window.WebKitPoint)&&!window.operamini};}if(!Tablesaw.config){Tablesaw.config={};}if(Tablesaw.mustard){jQuery(document.documentElement).addClass('tablesaw-enhanced');};(function($){var pluginName="table",classes={toolbar:"tablesaw-bar"},events={create:"tablesawcreate",destroy:"tablesawdestroy",refresh:"tablesawrefresh"},defaultMode="stack",initSelector="table[data-tablesaw-mode],table[data-tablesaw-sortable]";var Table=function(element){if(!element){throw new Error("Tablesaw requires an element.");}this.table=element;this.$table=$(element);this.mode=this.$table.attr("data-tablesaw-mode")||defaultMode;this.init();};Table.prototype.init=function(){ if(!this.$table.attr("id")){this.$table.attr("id",pluginName+"-"+Math.round(Math.random()*10000));}this.createToolbar();var colstart=this._initCells();this.$table.trigger(events.create,[this,colstart]);};Table.prototype._initCells=function(){var colstart,thrs=this.table.querySelectorAll("thead tr"),self=this;$(thrs).each(function(){var coltally=0;$(this).children().each(function(){var span=parseInt(this.getAttribute("colspan"),10),sel=":nth-child("+(coltally+1)+")";colstart=coltally+1;if(span){for(var k=0;k<span-1;k++){coltally++;sel+=", :nth-child("+(coltally+1)+")";}} this.cells=self.$table.find("tr").not(thrs[0]).not(this).children().filter(sel);coltally++;});});return colstart;};Table.prototype.refresh=function(){this._initCells();this.$table.trigger(events.refresh);};Table.prototype.createToolbar=function(){var $toolbar=this.$table.prev().filter('.'+classes.toolbar);if(!$toolbar.length){$toolbar=$('<div>').addClass(classes.toolbar).insertBefore(this.$table);}this.$toolbar=$toolbar;if(this.mode){this.$toolbar.addClass('mode-'+this.mode);}};Table.prototype.destroy=function(){this.$table.prev().filter('.'+classes.toolbar).each(function(){this.className=this.className.replace(/\bmode\-\w*\b/gi,'');});var tableId=this.$table.attr('id');$(document).unbind("."+tableId);$(window).unbind("."+tableId); this.$table.trigger(events.destroy,[this]);this.$table.removeAttr('data-tablesaw-mode');this.$table.removeData(pluginName);};$.fn[pluginName]=function(){return this.each(function(){var $t=$(this);if($t.data(pluginName)){return;}var table=new Table(this);$t.data(pluginName,table);});};$(document).on("enhance.tablesaw",function(e){ if(Tablesaw.mustard){$(e.target).find(initSelector)[pluginName]();}});}(jQuery));;(function(win,$,undefined){var classes={stackTable:'tablesaw-stack',cellLabels:'tablesaw-cell-label',cellContentLabels:'tablesaw-cell-content'};var data={obj:'tablesaw-stack'};var attrs={labelless:'data-tablesaw-no-labels',hideempty:'data-tablesaw-hide-empty'};var Stack=function(element){this.$table=$(element);this.labelless=this.$table.is('['+attrs.labelless+']');this.hideempty=this.$table.is('['+attrs.hideempty+']');if(!this.labelless){ this.allHeaders=this.$table.find("th");}this.$table.data(data.obj,this);};Stack.prototype.init=function(colstart){this.$table.addClass(classes.stackTable);if(this.labelless){return;} var reverseHeaders=$(this.allHeaders);var hideempty=this.hideempty; reverseHeaders.each(function(){var $t=$(this),$cells=$(this.cells).filter(function(){return!$(this).parent().is("["+attrs.labelless+"]")&&(!hideempty||!$(this).is(":empty"));}),hierarchyClass=$cells.not(this).filter("thead th").length&&" tablesaw-cell-label-top", $sortableButton=$t.find(".tablesaw-sortable-btn"),html=$sortableButton.length?$sortableButton.html():$t.html();if(html!==""){if(hierarchyClass){var iteration=parseInt($(this).attr("colspan"),10),filter="";if(iteration){filter="td:nth-child("+iteration+"n + "+(colstart)+")";}$cells.filter(filter).prepend("<b class='"+classes.cellLabels+hierarchyClass+"'>"+html+"</b>");}else{$cells.wrapInner("<span class='"+classes.cellContentLabels+"'></span>");$cells.prepend("<b class='"+classes.cellLabels+"'>"+html+"</b>");}}});};Stack.prototype.destroy=function(){this.$table.removeClass(classes.stackTable);this.$table.find('.'+classes.cellLabels).remove();this.$table.find('.'+classes.cellContentLabels).each(function(){$(this).replaceWith(this.childNodes);});}; $(document).on("tablesawcreate",function(e,Tablesaw,colstart){if(Tablesaw.mode==='stack'){var table=new Stack(Tablesaw.table);table.init(colstart);}});$(document).on("tablesawdestroy",function(e,Tablesaw){if(Tablesaw.mode==='stack'){$(Tablesaw.table).data(data.obj).destroy();}});}(this,jQuery));;(function($){var pluginName="tablesawbtn",methods={_create:function(){return $(this).each(function(){$(this).trigger("beforecreate."+pluginName)[pluginName]("_init").trigger("create."+pluginName);});},_init:function(){var oEl=$(this),sel=this.getElementsByTagName("select")[0];if(sel){$(this).addClass("btn-select")[pluginName]("_select",sel);}return oEl;},_select:function(sel){var update=function(oEl,sel){var opts=$(sel).find("option"),label,el,children;opts.each(function(){var opt=this;if(opt.selected){label=document.createTextNode(opt.text);}});children=oEl.childNodes;if(opts.length>0){for(var i=0,l=children.length;i<l;i++){el=children[i];if(el&&el.nodeType===3){oEl.replaceChild(label,el);}}}};update(this,sel);$(this).bind("change refresh",function(){update(this,sel);});}};$.fn[pluginName]=function(arrg,a,b,c){return this.each(function(){ if(arrg&&typeof(arrg)==="string"){return $.fn[pluginName].prototype[arrg].call(this,a,b,c);} if($(this).data(pluginName+"active")){return $(this);} $(this).data(pluginName+"active",true);$.fn[pluginName].prototype._create.call(this);});}; $.extend($.fn[pluginName].prototype,methods);}(jQuery));;(function(win,$,undefined){var ColumnToggle=function(element){this.$table=$(element);this.classes={columnToggleTable:'tablesaw-columntoggle',columnBtnContain:'tablesaw-columntoggle-btnwrap tablesaw-advance',columnBtn:'tablesaw-columntoggle-btn tablesaw-nav-btn down',popup:'tablesaw-columntoggle-popup',priorityPrefix:'tablesaw-priority-', toolbar:'tablesaw-bar'};this.headers=this.$table.find('tr:first > th');this.$table.data('tablesaw-coltoggle',this);};ColumnToggle.prototype.init=function(){var tableId,id,$menuButton,$popup,$menu,$btnContain,self=this;this.$table.addClass(this.classes.columnToggleTable);tableId=this.$table.attr("id");id=tableId+"-popup";$btnContain=$("<div class='"+this.classes.columnBtnContain+"'></div>");$menuButton=$("<a href='#"+id+"' class='btn btn-micro "+this.classes.columnBtn+"' data-popup-link>"+"<span>"+Tablesaw.i18n.columnBtnText+"</span></a>");$popup=$("<div class='dialog-table-coltoggle "+this.classes.popup+"' id='"+id+"'></div>");$menu=$("<div class='btn-group'></div>");var hasNonPersistentHeaders=false;$(this.headers).not("td").each(function(){var $this=$(this),priority=$this.attr("data-tablesaw-priority"),$cells=self.$getCells(this);if(priority&&priority!=="persist"){$cells.addClass(self.classes.priorityPrefix+priority);$("<label><input type='checkbox' checked>"+$this.text()+"</label>").appendTo($menu).children(0).data("tablesaw-header",this);hasNonPersistentHeaders=true;}});if(!hasNonPersistentHeaders){$menu.append('<label>'+Tablesaw.i18n.columnsDialogError+'</label>');}$menu.appendTo($popup);$menu.find('input[type="checkbox"]').on("change",function(e){var checked=e.target.checked;self.$getCellsFromCheckbox(e.target).toggleClass("tablesaw-cell-hidden",!checked).toggleClass("tablesaw-cell-visible",checked);self.$table.trigger('tablesawcolumns');});$menuButton.appendTo($btnContain);$btnContain.appendTo(this.$table.prev().filter('.'+this.classes.toolbar));var closeTimeout;function openPopup(){$btnContain.addClass('visible');$menuButton.removeClass('down').addClass('up');$(document).unbind('click.'+tableId,closePopup);window.clearTimeout(closeTimeout);closeTimeout=window.setTimeout(function(){$(document).one('click.'+tableId,closePopup);},15);}function closePopup(event){if(event&&$(event.target).closest("."+self.classes.popup).length){return;}$(document).unbind('click.'+tableId);$menuButton.removeClass('up').addClass('down');$btnContain.removeClass('visible');}$menuButton.on("click.tablesaw",function(event){event.preventDefault();if(!$btnContain.is(".visible")){openPopup();}else{closePopup();}});$popup.appendTo($btnContain);this.$menu=$menu;$(window).on("resize."+tableId,function(){self.refreshToggle();});this.refreshToggle();};ColumnToggle.prototype.$getCells=function(th){return $(th).add(th.cells);};ColumnToggle.prototype.$getCellsFromCheckbox=function(checkbox){var th=$(checkbox).data("tablesaw-header");return this.$getCells(th);};ColumnToggle.prototype.refreshToggle=function(){var self=this;this.$menu.find("input").each(function(){this.checked=self.$getCellsFromCheckbox(this).eq(0).css("display")==="table-cell";});};ColumnToggle.prototype.refreshPriority=function(){var self=this;$(this.headers).not("td").each(function(){var $this=$(this),priority=$this.attr("data-tablesaw-priority"),$cells=$this.add(this.cells);if(priority&&priority!=="persist"){$cells.addClass(self.classes.priorityPrefix+priority);}});};ColumnToggle.prototype.destroy=function(){this.$table.removeClass(this.classes.columnToggleTable);this.$table.find('th, td').each(function(){var $cell=$(this);$cell.removeClass('tablesaw-cell-hidden').removeClass('tablesaw-cell-visible');this.className=this.className.replace(/\bui\-table\-priority\-\d\b/g,'');});}; $(document).on("tablesawcreate",function(e,Tablesaw){if(Tablesaw.mode==='columntoggle'){var table=new ColumnToggle(Tablesaw.table);table.init();}});$(document).on("tablesawdestroy",function(e,Tablesaw){if(Tablesaw.mode==='columntoggle'){$(Tablesaw.table).data('tablesaw-coltoggle').destroy();}});}(this,jQuery));;(function(win,$,undefined){$.extend(Tablesaw.config,{swipe:{horizontalThreshold:15,verticalThreshold:30}});function isIE8(){var div=document.createElement('div'),all=div.getElementsByTagName('i');div.innerHTML='<!--[if lte IE 8]><i></i><![endif]-->';return!!all.length;}function createSwipeTable($table){var $btns=$("<div class='tablesaw-advance'></div>"),$prevBtn=$("<a href='#' class='tablesaw-nav-btn btn btn-micro left' title='Previous Column'></a>").appendTo($btns),$nextBtn=$("<a href='#' class='tablesaw-nav-btn btn btn-micro right' title='Next Column'></a>").appendTo($btns),hideBtn='disabled',persistWidths='tablesaw-fix-persist',$headerCells=$table.find("thead th"),$headerCellsNoPersist=$headerCells.not('[data-tablesaw-priority="persist"]'),headerWidths=[],$head=$(document.head||'head'),tableId=$table.attr('id'), supportsNthChild=!isIE8();if(!$headerCells.length){throw new Error("tablesaw swipe: no header cells found. Are you using <th> inside of <thead>?");} $table.css('width','auto');$headerCells.each(function(){headerWidths.push($(this).outerWidth());});$table.css('width','');$btns.appendTo($table.prev().filter('.tablesaw-bar'));$table.addClass("tablesaw-swipe");if(!tableId){tableId='tableswipe-'+Math.round(Math.random()*10000);$table.attr('id',tableId);}function $getCells(headerCell){return $(headerCell.cells).add(headerCell);}function showColumn(headerCell){$getCells(headerCell).removeClass('tablesaw-cell-hidden');}function hideColumn(headerCell){$getCells(headerCell).addClass('tablesaw-cell-hidden');}function persistColumn(headerCell){$getCells(headerCell).addClass('tablesaw-cell-persist');}function isPersistent(headerCell){return $(headerCell).is('[data-tablesaw-priority="persist"]');}function unmaintainWidths(){$table.removeClass(persistWidths);$('#'+tableId+'-persist').remove();}function maintainWidths(){var prefix='#'+tableId+'.tablesaw-swipe ',styles=[],tableWidth=$table.width(),hash=[],newHash;$headerCells.each(function(index){var width;if(isPersistent(this)){width=$(this).outerWidth();if(width<tableWidth*0.75){hash.push(index+'-'+width);styles.push(prefix+' .tablesaw-cell-persist:nth-child('+(index+1)+') { width: '+width+'px; }');}}});newHash=hash.join('_');$table.addClass(persistWidths);var $style=$('#'+tableId+'-persist'); if(!$style.length||$style.data('hash')!==newHash){ $style.remove();if(styles.length){$('<style>'+styles.join("\n")+'</style>').attr('id',tableId+'-persist').data('hash',newHash).appendTo($head);}}}function getNext(){var next=[],checkFound;$headerCellsNoPersist.each(function(i){var $t=$(this),isHidden=$t.css("display")==="none"||$t.is(".tablesaw-cell-hidden");if(!isHidden&&!checkFound){checkFound=true;next[0]=i;}else if(isHidden&&checkFound){next[1]=i;return false;}});return next;}function getPrev(){var next=getNext();return[next[1]-1,next[0]-1];}function nextpair(fwd){return fwd?getNext():getPrev();}function canAdvance(pair){return pair[1]>-1&&pair[1]<$headerCellsNoPersist.length;}function matchesMedia(){var matchMedia=$table.attr("data-tablesaw-swipe-media");return!matchMedia||("matchMedia"in win)&&win.matchMedia(matchMedia).matches;}function fakeBreakpoints(){if(!matchesMedia()){return;}var extraPaddingPixels=20,containerWidth=$table.parent().width(),persist=[],sum=0,sums=[],visibleNonPersistantCount=$headerCells.length;$headerCells.each(function(index){var $t=$(this),isPersist=$t.is('[data-tablesaw-priority="persist"]');persist.push(isPersist);sum+=headerWidths[index]+(isPersist?0:extraPaddingPixels);sums.push(sum); if(isPersist||sum>containerWidth){visibleNonPersistantCount--;}});var needsNonPersistentColumn=visibleNonPersistantCount===0;$headerCells.each(function(index){if(persist[index]){ persistColumn(this);return;}if(sums[index]<=containerWidth||needsNonPersistentColumn){needsNonPersistentColumn=false;showColumn(this);}else{hideColumn(this);}});if(supportsNthChild){unmaintainWidths();}$table.trigger('tablesawcolumns');}function advance(fwd){var pair=nextpair(fwd);if(canAdvance(pair)){if(isNaN(pair[0])){if(fwd){pair[0]=0;}else{pair[0]=$headerCellsNoPersist.length-1;}}if(supportsNthChild){maintainWidths();}hideColumn($headerCellsNoPersist.get(pair[0]));showColumn($headerCellsNoPersist.get(pair[1]));$table.trigger('tablesawcolumns');}}$prevBtn.add($nextBtn).click(function(e){advance(!!$(e.target).closest($nextBtn).length);e.preventDefault();});function getCoord(event,key){return(event.touches||event.originalEvent.touches)[0][key];}$table.bind("touchstart.swipetoggle",function(e){var originX=getCoord(e,'pageX'),originY=getCoord(e,'pageY'),x,y;$(win).off("resize",fakeBreakpoints);$(this).bind("touchmove",function(e){x=getCoord(e,'pageX');y=getCoord(e,'pageY');var cfg=Tablesaw.config.swipe;if(Math.abs(x-originX)>cfg.horizontalThreshold&&Math.abs(y-originY)<cfg.verticalThreshold){e.preventDefault();}}).bind("touchend.swipetoggle",function(){var cfg=Tablesaw.config.swipe;if(Math.abs(y-originY)<cfg.verticalThreshold){if(x-originX<-1*cfg.horizontalThreshold){advance(true);}if(x-originX>cfg.horizontalThreshold){advance(false);}}window.setTimeout(function(){$(win).on("resize",fakeBreakpoints);},300);$(this).unbind("touchmove touchend");});}).bind("tablesawcolumns.swipetoggle",function(){$prevBtn[canAdvance(getPrev())?"removeClass":"addClass"](hideBtn);$nextBtn[canAdvance(getNext())?"removeClass":"addClass"](hideBtn);}).bind("tablesawnext.swipetoggle",function(){advance(true);}).bind("tablesawprev.swipetoggle",function(){advance(false);}).bind("tablesawdestroy.swipetoggle",function(){var $t=$(this);$t.removeClass('tablesaw-swipe');$t.prev().filter('.tablesaw-bar').find('.tablesaw-advance').remove();$(win).off("resize",fakeBreakpoints);$t.unbind(".swipetoggle");});fakeBreakpoints();$(win).on("resize",fakeBreakpoints);} $(document).on("tablesawcreate",function(e,Tablesaw){if(Tablesaw.mode==='swipe'){createSwipeTable(Tablesaw.$table);}});}(this,jQuery));;(function($){function getSortValue(cell){return $.map(cell.childNodes,function(el){var $el=$(el);if($el.is('input, select')){return $el.val();}else if($el.hasClass('tablesaw-cell-label')){return;}return $.trim($el.text());}).join('');}var pluginName="tablesaw-sortable",initSelector="table[data-"+pluginName+"]",sortableSwitchSelector="[data-"+pluginName+"-switch]",attrs={defaultCol:"data-tablesaw-sortable-default-col",numericCol:"data-tablesaw-sortable-numeric"},classes={head:pluginName+"-head",ascend:pluginName+"-ascending",descend:pluginName+"-descending",switcher:pluginName+"-switch",tableToolbar:'tablesaw-toolbar',sortButton:pluginName+"-btn"},methods={_create:function(o){return $(this).each(function(){var init=$(this).data("init"+pluginName);if(init){return false;}$(this).data("init"+pluginName,true).trigger("beforecreate."+pluginName)[pluginName]("_init",o).trigger("create."+pluginName);});},_init:function(){var el=$(this),heads,$switcher;var addClassToTable=function(){el.addClass(pluginName);},addClassToHeads=function(h){$.each(h,function(i,v){$(v).addClass(classes.head);});},makeHeadsActionable=function(h,fn){$.each(h,function(i,v){var b=$("<button class='"+classes.sortButton+"'/>");b.bind("click",{col:v},fn);$(v).wrapInner(b);});},clearOthers=function(sibs){$.each(sibs,function(i,v){var col=$(v);col.removeAttr(attrs.defaultCol);col.removeClass(classes.ascend);col.removeClass(classes.descend);});},headsOnAction=function(e){if($(e.target).is('a[href]')){return;}e.stopPropagation();var head=$(this).parent(),v=e.data.col,newSortValue=heads.index(head);clearOthers(head.siblings());if(head.hasClass(classes.descend)){el[pluginName]("sortBy",v,true);newSortValue+='_asc';}else{el[pluginName]("sortBy",v);newSortValue+='_desc';}if($switcher){$switcher.find('select').val(newSortValue).trigger('refresh');}e.preventDefault();},handleDefault=function(heads){$.each(heads,function(idx,el){var $el=$(el);if($el.is("["+attrs.defaultCol+"]")){if(!$el.hasClass(classes.descend)){$el.addClass(classes.ascend);}}});},addSwitcher=function(heads){$switcher=$('<div>').addClass(classes.switcher).addClass(classes.tableToolbar).html(function(){var html=['<label>'+Tablesaw.i18n.sort+':'];html.push('<span class="btn btn-small">&#160;<select>');heads.each(function(j){var $t=$(this);var isDefaultCol=$t.is("["+attrs.defaultCol+"]");var isDescending=$t.hasClass(classes.descend);var hasNumericAttribute=$t.is('[data-sortable-numeric]');var numericCount=0;var numericCountMax=5;$(this.cells).slice(0,numericCountMax).each(function(){if(!isNaN(parseInt(getSortValue(this),10))){numericCount++;}});var isNumeric=numericCount===numericCountMax;if(!hasNumericAttribute){$t.attr("data-sortable-numeric",isNumeric?"":"false");}html.push('<option'+(isDefaultCol&&!isDescending?' selected':'')+' value="'+j+'_asc">'+$t.text()+' '+(isNumeric?'&#x2191;':'(A-Z)')+'</option>');html.push('<option'+(isDefaultCol&&isDescending?' selected':'')+' value="'+j+'_desc">'+$t.text()+' '+(isNumeric?'&#x2193;':'(Z-A)')+'</option>');});html.push('</select></span></label>');return html.join('');});var $toolbar=el.prev().filter('.tablesaw-bar'),$firstChild=$toolbar.children().eq(0);if($firstChild.length){$switcher.insertBefore($firstChild);}else{$switcher.appendTo($toolbar);}$switcher.find('.btn').tablesawbtn();$switcher.find('select').on('change',function(){var val=$(this).val().split('_'),head=heads.eq(val[0]);clearOthers(head.siblings());el[pluginName]('sortBy',head.get(0),val[1]==='asc');});};addClassToTable();heads=el.find("thead th[data-"+pluginName+"-col]");addClassToHeads(heads);makeHeadsActionable(heads,headsOnAction);handleDefault(heads);if(el.is(sortableSwitchSelector)){addSwitcher(heads,el.find('tbody tr:nth-child(-n+3)'));}},getColumnNumber:function(col){return $(col).prevAll().length;},getTableRows:function(){return $(this).find("tbody tr");},sortRows:function(rows,colNum,ascending,col){var cells,fn,sorted;var getCells=function(rows){var cells=[];$.each(rows,function(i,r){var element=$(r).children().get(colNum);cells.push({element:element,cell:getSortValue(element),rowNum:i});});return cells;},getSortFxn=function(ascending,forceNumeric){var fn,regex=/[^\-\+\d\.]/g;if(ascending){fn=function(a,b){if(forceNumeric){return parseFloat(a.cell.replace(regex,''))-parseFloat(b.cell.replace(regex,''));}else{return a.cell.toLowerCase()>b.cell.toLowerCase()?1:-1;}};}else{fn=function(a,b){if(forceNumeric){return parseFloat(b.cell.replace(regex,''))-parseFloat(a.cell.replace(regex,''));}else{return a.cell.toLowerCase()<b.cell.toLowerCase()?1:-1;}};}return fn;},applyToRows=function(sorted,rows){var newRows=[],i,l,cur;for(i=0,l=sorted.length;i<l;i++){cur=sorted[i].rowNum;newRows.push(rows[cur]);}return newRows;};cells=getCells(rows);var customFn=$(col).data('tablesaw-sort');fn=(customFn&&typeof customFn==="function"?customFn(ascending):false)||getSortFxn(ascending,$(col).is('[data-sortable-numeric]')&&!$(col).is('[data-sortable-numeric="false"]'));sorted=cells.sort(fn);rows=applyToRows(sorted,rows);return rows;},replaceTableRows:function(rows){var el=$(this),body=el.find("tbody");body.html(rows);},makeColDefault:function(col,a){var c=$(col);c.attr(attrs.defaultCol,"true");if(a){c.removeClass(classes.descend);c.addClass(classes.ascend);}else{c.removeClass(classes.ascend);c.addClass(classes.descend);}},sortBy:function(col,ascending){var el=$(this),colNum,rows;colNum=el[pluginName]("getColumnNumber",col);rows=el[pluginName]("getTableRows");rows=el[pluginName]("sortRows",rows,colNum,ascending,col);el[pluginName]("replaceTableRows",rows);el[pluginName]("makeColDefault",col,ascending);}};$.fn[pluginName]=function(arrg){var args=Array.prototype.slice.call(arguments,1),returnVal; if(arrg&&typeof(arrg)==="string"){returnVal=$.fn[pluginName].prototype[arrg].apply(this[0],args);return(typeof returnVal!=="undefined")?returnVal:$(this);} if(!$(this).data(pluginName+"data")){$(this).data(pluginName+"active",true);$.fn[pluginName].prototype._create.call(this,arrg);}return $(this);}; $.extend($.fn[pluginName].prototype,methods);$(document).on("tablesawcreate",function(e,Tablesaw){if(Tablesaw.$table.is(initSelector)){Tablesaw.$table[pluginName]();}});}(jQuery));;(function(win,$,undefined){var MM={attr:{init:'data-tablesaw-minimap'}};function createMiniMap($table){var $btns=$('<div class="tablesaw-advance minimap">'),$dotNav=$('<ul class="tablesaw-advance-dots">').appendTo($btns),hideDot='tablesaw-advance-dots-hide',$headerCells=$table.find('thead th'); $headerCells.each(function(){$dotNav.append('<li><i></i></li>');});$btns.appendTo($table.prev().filter('.tablesaw-bar'));function showMinimap($table){var mq=$table.attr(MM.attr.init);return!mq||win.matchMedia&&win.matchMedia(mq).matches;}function showHideNav(){if(!showMinimap($table)){$btns.hide();return;}$btns.show(); var dots=$dotNav.find("li").removeClass(hideDot);$table.find("thead th").each(function(i){if($(this).css("display")==="none"){dots.eq(i).addClass(hideDot);}});}showHideNav();$(win).on("resize",showHideNav);$table.bind("tablesawcolumns.minimap",function(){showHideNav();}).bind("tablesawdestroy.minimap",function(){var $t=$(this);$t.prev().filter('.tablesaw-bar').find('.tablesaw-advance').remove();$(win).off("resize",showHideNav);$t.unbind(".minimap");});} $(document).on("tablesawcreate",function(e,Tablesaw){if((Tablesaw.mode==='swipe'||Tablesaw.mode==='columntoggle')&&Tablesaw.$table.is('[ '+MM.attr.init+']')){createMiniMap(Tablesaw.$table);}});}(this,jQuery));;(function(win,$){var S={selectors:{init:'table[data-tablesaw-mode-switch]'},attributes:{excludeMode:'data-tablesaw-mode-exclude'},classes:{main:'tablesaw-modeswitch',toolbar:'tablesaw-toolbar'},modes:['stack','swipe','columntoggle'],init:function(table){var $table=$(table),ignoreMode=$table.attr(S.attributes.excludeMode),$toolbar=$table.prev().filter('.tablesaw-bar'),modeVal='',$switcher=$('<div>').addClass(S.classes.main+' '+S.classes.toolbar).html(function(){var html=['<label>'+Tablesaw.i18n.columns+':'],dataMode=$table.attr('data-tablesaw-mode'),isSelected;html.push('<span class="btn btn-small">&#160;<select>');for(var j=0,k=S.modes.length;j<k;j++){if(ignoreMode&&ignoreMode.toLowerCase()===S.modes[j]){continue;}isSelected=dataMode===S.modes[j];if(isSelected){modeVal=S.modes[j];}html.push('<option'+(isSelected?' selected':'')+' value="'+S.modes[j]+'">'+Tablesaw.i18n.modes[j]+'</option>');}html.push('</select></span></label>');return html.join('');});var $otherToolbarItems=$toolbar.find('.tablesaw-advance').eq(0);if($otherToolbarItems.length){$switcher.insertBefore($otherToolbarItems);}else{$switcher.appendTo($toolbar);}$switcher.find('.btn').tablesawbtn();$switcher.find('select').bind('change',S.onModeChange);},onModeChange:function(){var $t=$(this),$switcher=$t.closest('.'+S.classes.main),$table=$t.closest('.tablesaw-bar').nextUntil($table).eq(0),val=$t.val();$switcher.remove();$table.data('table').destroy();$table.attr('data-tablesaw-mode',val);$table.table();}};$(win.document).on("tablesawcreate",function(e,Tablesaw){if(Tablesaw.$table.is(S.selectors.init)){S.init(Tablesaw.table);}});})(this,jQuery);
/*! Tablesaw - v2.0.2 - 2015-10-28
* https://github.com/filamentgroup/tablesaw
* Copyright (c) 2015 Filament Group; Licensed  */
;(function($){ $(function(){$(document).trigger("enhance.tablesaw");});})(jQuery);
/*! PhotoSwipe - v4.1.2 - 2017-04-05
* http://photoswipe.com
* Copyright (c) 2017 Dmitry Semenov; */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.PhotoSwipe = factory();
    }
})(this, function () {

    'use strict';
    var PhotoSwipe = function(template, UiClass, items, options){

/*>>framework-bridge*/
/**
 *
 * Set of generic functions used by gallery.
 *
 * You're free to modify anything here as long as functionality is kept.
 *
 */
var framework = {
    features: null,
    bind: function(target, type, listener, unbind) {
        var methodName = (unbind ? 'remove' : 'add') + 'EventListener';
        type = type.split(' ');
        for(var i = 0; i < type.length; i++) {
            if(type[i]) {
                target[methodName]( type[i], listener, false);
            }
        }
    },
    isArray: function(obj) {
        return (obj instanceof Array);
    },
    createEl: function(classes, tag) {
        var el = document.createElement(tag || 'div');
        if(classes) {
            el.className = classes;
        }
        return el;
    },
    getScrollY: function() {
        var yOffset = window.pageYOffset;
        return yOffset !== undefined ? yOffset : document.documentElement.scrollTop;
    },
    unbind: function(target, type, listener) {
        framework.bind(target,type,listener,true);
    },
    removeClass: function(el, className) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    },
    addClass: function(el, className) {
        if( !framework.hasClass(el,className) ) {
            el.className += (el.className ? ' ' : '') + className;
        }
    },
    hasClass: function(el, className) {
        return el.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className);
    },
    getChildByClass: function(parentEl, childClassName) {
        var node = parentEl.firstChild;
        while(node) {
            if( framework.hasClass(node, childClassName) ) {
                return node;
            }
            node = node.nextSibling;
        }
    },
    arraySearch: function(array, value, key) {
        var i = array.length;
        while(i--) {
            if(array[i][key] === value) {
                return i;
            }
        }
        return -1;
    },
    extend: function(o1, o2, preventOverwrite) {
        for (var prop in o2) {
            if (o2.hasOwnProperty(prop)) {
                if(preventOverwrite && o1.hasOwnProperty(prop)) {
                    continue;
                }
                o1[prop] = o2[prop];
            }
        }
    },
    easing: {
        sine: {
            out: function(k) {
                return Math.sin(k * (Math.PI / 2));
            },
            inOut: function(k) {
                return - (Math.cos(Math.PI * k) - 1) / 2;
            }
        },
        cubic: {
            out: function(k) {
                return --k * k * k + 1;
            }
        }
        /*
            elastic: {
                out: function ( k ) {

                    var s, a = 0.1, p = 0.4;
                    if ( k === 0 ) return 0;
                    if ( k === 1 ) return 1;
                    if ( !a || a < 1 ) { a = 1; s = p / 4; }
                    else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
                    return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

                },
            },
            back: {
                out: function ( k ) {
                    var s = 1.70158;
                    return --k * k * ( ( s + 1 ) * k + s ) + 1;
                }
            }
        */
    },

    /**
     *
     * @return {object}
     *
     * {
     *  raf : request animation frame function
     *  caf : cancel animation frame function
     *  transfrom : transform property key (with vendor), or null if not supported
     *  oldIE : IE8 or below
     * }
     *
     */
    detectFeatures: function() {
        if(framework.features) {
            return framework.features;
        }
        var helperEl = framework.createEl(),
            helperStyle = helperEl.style,
            vendor = '',
            features = {};

        // IE8 and below
        features.oldIE = document.all && !document.addEventListener;

        features.touch = 'ontouchstart' in window;

        if(window.requestAnimationFrame) {
            features.raf = window.requestAnimationFrame;
            features.caf = window.cancelAnimationFrame;
        }

        features.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled;

        // fix false-positive detection of old Android in new IE
        // (IE11 ua string contains "Android 4.0")

        if(!features.pointerEvent) {

            var ua = navigator.userAgent;

            // Detect if device is iPhone or iPod and if it's older than iOS 8
            // http://stackoverflow.com/a/14223920
            //
            // This detection is made because of buggy top/bottom toolbars
            // that don't trigger window.resize event.
            // For more info refer to _isFixedPosition variable in core.js

            if (/iP(hone|od)/.test(navigator.platform)) {
                var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
                if(v && v.length > 0) {
                    v = parseInt(v[1], 10);
                    if(v >= 1 && v < 8 ) {
                        features.isOldIOSPhone = true;
                    }
                }
            }

            // Detect old Android (before KitKat)
            // due to bugs related to position:fixed
            // http://stackoverflow.com/questions/7184573/pick-up-the-android-version-in-the-browser-by-javascript

            var match = ua.match(/Android\s([0-9\.]*)/);
            var androidversion =  match ? match[1] : 0;
            androidversion = parseFloat(androidversion);
            if(androidversion >= 1 ) {
                if(androidversion < 4.4) {
                    features.isOldAndroid = true; // for fixed position bug & performance
                }
                features.androidVersion = androidversion; // for touchend bug
            }
            features.isMobileOpera = /opera mini|opera mobi/i.test(ua);

            // p.s. yes, yes, UA sniffing is bad, propose your solution for above bugs.
        }

        var styleChecks = ['transform', 'perspective', 'animationName'],
            vendors = ['', 'webkit','Moz','ms','O'],
            styleCheckItem,
            styleName;

        for(var i = 0; i < 4; i++) {
            vendor = vendors[i];

            for(var a = 0; a < 3; a++) {
                styleCheckItem = styleChecks[a];

                // uppercase first letter of property name, if vendor is present
                styleName = vendor + (vendor ?
                                        styleCheckItem.charAt(0).toUpperCase() + styleCheckItem.slice(1) :
                                        styleCheckItem);

                if(!features[styleCheckItem] && styleName in helperStyle ) {
                    features[styleCheckItem] = styleName;
                }
            }

            if(vendor && !features.raf) {
                vendor = vendor.toLowerCase();
                features.raf = window[vendor+'RequestAnimationFrame'];
                if(features.raf) {
                    features.caf = window[vendor+'CancelAnimationFrame'] ||
                                    window[vendor+'CancelRequestAnimationFrame'];
                }
            }
        }

        if(!features.raf) {
            var lastTime = 0;
            features.raf = function(fn) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { fn(currTime + timeToCall); }, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
            features.caf = function(id) { clearTimeout(id); };
        }

        // Detect SVG support
        features.svg = !!document.createElementNS &&
                        !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;

        framework.features = features;

        return features;
    }
};

framework.detectFeatures();

// Override addEventListener for old versions of IE
if(framework.features.oldIE) {

    framework.bind = function(target, type, listener, unbind) {

        type = type.split(' ');

        var methodName = (unbind ? 'detach' : 'attach') + 'Event',
            evName,
            _handleEv = function() {
                listener.handleEvent.call(listener);
            };

        for(var i = 0; i < type.length; i++) {
            evName = type[i];
            if(evName) {

                if(typeof listener === 'object' && listener.handleEvent) {
                    if(!unbind) {
                        listener['oldIE' + evName] = _handleEv;
                    } else {
                        if(!listener['oldIE' + evName]) {
                            return false;
                        }
                    }

                    target[methodName]( 'on' + evName, listener['oldIE' + evName]);
                } else {
                    target[methodName]( 'on' + evName, listener);
                }

            }
        }
    };

}

/*>>framework-bridge*/

/*>>core*/
//function(template, UiClass, items, options)

var self = this;

/**
 * Static vars, don't change unless you know what you're doing.
 */
var DOUBLE_TAP_RADIUS = 25,
    NUM_HOLDERS = 3;

/**
 * Options
 */
var _options = {
    allowPanToNext:true,
    spacing: 0.05,
    bgOpacity: 1,
    mouseUsed: false,
    loop: false,
    pinchToClose: true,
    closeOnScroll: true,
    closeOnVerticalDrag: true,
    verticalDragRange: 0.75,
    hideAnimationDuration: 333,
    showAnimationDuration: 333,
    showHideOpacity: false,
    focus: true,
    escKey: true,
    arrowKeys: true,
    mainScrollEndFriction: 0.35,
    panEndFriction: 0.35,
    isClickableElement: function(el) {
        return el.tagName === 'A';
    },
    getDoubleTapZoom: function(isMouseClick, item) {
        if(isMouseClick) {
            return 1;
        } else {
            return item.initialZoomLevel < 0.7 ? 1 : 1.33;
        }
    },
    maxSpreadZoom: 1.33,
    modal: true,

    // not fully implemented yet
    scaleMode: 'fit' // TODO
};
framework.extend(_options, options);


/**
 * Private helper variables & functions
 */

var _getEmptyPoint = function() {
        return {x:0,y:0};
    };

var _isOpen,
    _isDestroying,
    _closedByScroll,
    _currentItemIndex,
    _containerStyle,
    _containerShiftIndex,
    _currPanDist = _getEmptyPoint(),
    _startPanOffset = _getEmptyPoint(),
    _panOffset = _getEmptyPoint(),
    _upMoveEvents, // drag move, drag end & drag cancel events array
    _downEvents, // drag start events array
    _globalEventHandlers,
    _viewportSize = {},
    _currZoomLevel,
    _startZoomLevel,
    _translatePrefix,
    _translateSufix,
    _updateSizeInterval,
    _itemsNeedUpdate,
    _currPositionIndex = 0,
    _offset = {},
    _slideSize = _getEmptyPoint(), // size of slide area, including spacing
    _itemHolders,
    _prevItemIndex,
    _indexDiff = 0, // difference of indexes since last content update
    _dragStartEvent,
    _dragMoveEvent,
    _dragEndEvent,
    _dragCancelEvent,
    _transformKey,
    _pointerEventEnabled,
    _isFixedPosition = true,
    _likelyTouchDevice,
    _modules = [],
    _requestAF,
    _cancelAF,
    _initalClassName,
    _initalWindowScrollY,
    _oldIE,
    _currentWindowScrollY,
    _features,
    _windowVisibleSize = {},
    _renderMaxResolution = false,
    _orientationChangeTimeout,


    // Registers PhotoSWipe module (History, Controller ...)
    _registerModule = function(name, module) {
        framework.extend(self, module.publicMethods);
        _modules.push(name);
    },

    _getLoopedId = function(index) {
        var numSlides = _getNumItems();
        if(index > numSlides - 1) {
            return index - numSlides;
        } else  if(index < 0) {
            return numSlides + index;
        }
        return index;
    },

    // Micro bind/trigger
    _listeners = {},
    _listen = function(name, fn) {
        if(!_listeners[name]) {
            _listeners[name] = [];
        }
        return _listeners[name].push(fn);
    },
    _shout = function(name) {
        var listeners = _listeners[name];

        if(listeners) {
            var args = Array.prototype.slice.call(arguments);
            args.shift();

            for(var i = 0; i < listeners.length; i++) {
                listeners[i].apply(self, args);
            }
        }
    },

    _getCurrentTime = function() {
        return new Date().getTime();
    },
    _applyBgOpacity = function(opacity) {
        _bgOpacity = opacity;
        // opacity=opacity * _options.bgOpacity;
        if(opacity){
            $(self.bg).stop().animate({opacity:opacity}, 0);
        }else{
            setTimeout(function() {
                $(self.bg).stop().animate({opacity:opacity}, 100);
            },300)
        }
        // self.bg.style.opacity = opacity;
    },

    _applyZoomTransform = function(styleObj,x,y,zoom,item) {
        if(!_renderMaxResolution || (item && item !== self.currItem) ) {
            zoom = zoom / (item ? item.fitRatio : self.currItem.fitRatio);
        }

        styleObj[_transformKey] = _translatePrefix + x + 'px, ' + y + 'px' + _translateSufix + ' scale(' + zoom + ')';
    },
    _applyCurrentZoomPan = function( allowRenderResolution ) {
        if(_currZoomElementStyle) {

            if(allowRenderResolution) {
                if(_currZoomLevel > self.currItem.fitRatio) {
                    if(!_renderMaxResolution) {
                        _setImageSize(self.currItem, false, true);
                        _renderMaxResolution = true;
                    }
                } else {
                    if(_renderMaxResolution) {
                        _setImageSize(self.currItem);
                        _renderMaxResolution = false;
                    }
                }
            }


            _applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
        }
    },
    _applyZoomPanToItem = function(item) {
        if(item.container) {

            _applyZoomTransform(item.container.style,
                                item.initialPosition.x,
                                item.initialPosition.y,
                                item.initialZoomLevel,
                                item);
        }
    },
    _setTranslateX = function(x, elStyle) {
        elStyle[_transformKey] = _translatePrefix + x + 'px, 0px' + _translateSufix;
    },
    _moveMainScroll = function(x, dragging) {

        if(!_options.loop && dragging) {
            var newSlideIndexOffset = _currentItemIndex + (_slideSize.x * _currPositionIndex - x) / _slideSize.x,
                delta = Math.round(x - _mainScrollPos.x);

            if( (newSlideIndexOffset < 0 && delta > 0) ||
                (newSlideIndexOffset >= _getNumItems() - 1 && delta < 0) ) {
                x = _mainScrollPos.x + delta * _options.mainScrollEndFriction;
            }
        }

        _mainScrollPos.x = x;
        _setTranslateX(x, _containerStyle);
    },
    _calculatePanOffset = function(axis, zoomLevel) {
        var m = _midZoomPoint[axis] - _offset[axis];
        return _startPanOffset[axis] + _currPanDist[axis] + m - m * ( zoomLevel / _startZoomLevel );
    },

    _equalizePoints = function(p1, p2) {
        p1.x = p2.x;
        p1.y = p2.y;
        if(p2.id) {
            p1.id = p2.id;
        }
    },
    _roundPoint = function(p) {
        p.x = Math.round(p.x);
        p.y = Math.round(p.y);
    },

    _mouseMoveTimeout = null,
    _onFirstMouseMove = function() {
        // Wait until mouse move event is fired at least twice during 100ms
        // We do this, because some mobile browsers trigger it on touchstart
        if(_mouseMoveTimeout ) {
            framework.unbind(document, 'mousemove', _onFirstMouseMove);
            framework.addClass(template, 'pswp--has_mouse');
            _options.mouseUsed = true;
            _shout('mouseUsed');
        }
        _mouseMoveTimeout = setTimeout(function() {
            _mouseMoveTimeout = null;
        }, 100);
    },

    _bindEvents = function() {
        framework.bind(document, 'keydown', self);

        if(_features.transform) {
            // don't bind click event in browsers that don't support transform (mostly IE8)
            framework.bind(self.scrollWrap, 'click', self);
        }


        if(!_options.mouseUsed) {
            framework.bind(document, 'mousemove', _onFirstMouseMove);
        }

        framework.bind(window, 'resize scroll orientationchange', self);

        _shout('bindEvents');
    },

    _unbindEvents = function() {
        framework.unbind(window, 'resize scroll orientationchange', self);
        framework.unbind(window, 'scroll', _globalEventHandlers.scroll);
        framework.unbind(document, 'keydown', self);
        framework.unbind(document, 'mousemove', _onFirstMouseMove);

        if(_features.transform) {
            framework.unbind(self.scrollWrap, 'click', self);
        }

        if(_isDragging) {
            framework.unbind(window, _upMoveEvents, self);
        }

        clearTimeout(_orientationChangeTimeout);

        _shout('unbindEvents');
    },

    _calculatePanBounds = function(zoomLevel, update) {
        var bounds = _calculateItemSize( self.currItem, _viewportSize, zoomLevel );
        if(update) {
            _currPanBounds = bounds;
        }
        return bounds;
    },

    _getMinZoomLevel = function(item) {
        if(!item) {
            item = self.currItem;
        }
        return item.initialZoomLevel;
    },
    _getMaxZoomLevel = function(item) {
        if(!item) {
            item = self.currItem;
        }
        return item.w > 0 ? _options.maxSpreadZoom : 1;
    },

    // Return true if offset is out of the bounds
    _modifyDestPanOffset = function(axis, destPanBounds, destPanOffset, destZoomLevel) {
        if(destZoomLevel === self.currItem.initialZoomLevel) {
            destPanOffset[axis] = self.currItem.initialPosition[axis];
            return true;
        } else {
            destPanOffset[axis] = _calculatePanOffset(axis, destZoomLevel);

            if(destPanOffset[axis] > destPanBounds.min[axis]) {
                destPanOffset[axis] = destPanBounds.min[axis];
                return true;
            } else if(destPanOffset[axis] < destPanBounds.max[axis] ) {
                destPanOffset[axis] = destPanBounds.max[axis];
                return true;
            }
        }
        return false;
    },

    _setupTransforms = function() {

        if(_transformKey) {
            // setup 3d transforms
            var allow3dTransform = _features.perspective && !_likelyTouchDevice;
            _translatePrefix = 'translate' + (allow3dTransform ? '3d(' : '(');
            _translateSufix = _features.perspective ? ', 0px)' : ')';
            return;
        }

        // Override zoom/pan/move functions in case old browser is used (most likely IE)
        // (so they use left/top/width/height, instead of CSS transform)

        _transformKey = 'left';
        framework.addClass(template, 'pswp--ie');

        _setTranslateX = function(x, elStyle) {
            elStyle.left = x + 'px';
        };
        _applyZoomPanToItem = function(item) {

            var zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
                s = item.container.style,
                w = zoomRatio * item.w,
                h = zoomRatio * item.h;

            s.width = w + 'px';
            s.height = h + 'px';
            s.left = item.initialPosition.x + 'px';
            s.top = item.initialPosition.y + 'px';

        };
        _applyCurrentZoomPan = function() {
            if(_currZoomElementStyle) {

                var s = _currZoomElementStyle,
                    item = self.currItem,
                    zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
                    w = zoomRatio * item.w,
                    h = zoomRatio * item.h;

                s.width = w + 'px';
                s.height = h + 'px';


                s.left = _panOffset.x + 'px';
                s.top = _panOffset.y + 'px';
            }

        };
    },

    _onKeyDown = function(e) {
        var keydownAction = '';
        if(_options.escKey && e.keyCode === 27) {
            keydownAction = 'close';
        } else if(_options.arrowKeys) {
            if(e.keyCode === 37) {
                keydownAction = 'prev';
            } else if(e.keyCode === 39) {
                keydownAction = 'next';
            }
        }

        if(keydownAction) {
            // don't do anything if special key pressed to prevent from overriding default browser actions
            // e.g. in Chrome on Mac cmd+arrow-left returns to previous page
            if( !e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey ) {
                if(e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                }
                self[keydownAction]();
            }
        }
    },

    _onGlobalClick = function(e) {
        if(!e) {
            return;
        }

        // don't allow click event to pass through when triggering after drag or some other gesture
        if(_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
            e.preventDefault();
            e.stopPropagation();
        }
    },

    _updatePageScrollOffset = function() {
        self.setScrollOffset(0, framework.getScrollY());
    }
// Micro animation engine
var _animations = {},
    _numAnimations = 0,
    _stopAnimation = function(name) {
        if(_animations[name]) {
            if(_animations[name].raf) {
                _cancelAF( _animations[name].raf );
            }
            _numAnimations--;
            delete _animations[name];
        }
    },
    _registerStartAnimation = function(name) {
        if(_animations[name]) {
            _stopAnimation(name);
        }
        if(!_animations[name]) {
            _numAnimations++;
            _animations[name] = {};
        }
    },
    _stopAllAnimations = function() {
        for (var prop in _animations) {

            if( _animations.hasOwnProperty( prop ) ) {
                _stopAnimation(prop);
            }

        }
    },
    _animateProp = function(name, b, endProp, d, easingFn, onUpdate, onComplete) {
        var startAnimTime = _getCurrentTime(), t;
        _registerStartAnimation(name);

        var animloop = function(){
            if ( _animations[name] ) {

                t = _getCurrentTime() - startAnimTime; // time diff
                //b - beginning (start prop)
                //d - anim duration

                if ( t >= d ) {
                    _stopAnimation(name);
                    onUpdate(endProp);
                    if(onComplete) {
                        onComplete();
                    }
                    return;
                }
                onUpdate( (endProp - b) * easingFn(t/d) + b );

                _animations[name].raf = _requestAF(animloop);
            }
        };
        animloop();
    };



var publicMethods = {

    // make a few local variables and functions public
    shout: _shout,
    listen: _listen,
    viewportSize: _viewportSize,
    options: _options,

    isMainScrollAnimating: function() {
        return _mainScrollAnimating;
    },
    getZoomLevel: function() {
        return _currZoomLevel;
    },
    getCurrentIndex: function() {
        return _currentItemIndex;
    },
    isDragging: function() {
        return _isDragging;
    },
    isZooming: function() {
        return _isZooming;
    },
    setScrollOffset: function(x,y) {
        _offset.x = x;
        _currentWindowScrollY = _offset.y = y;
        _shout('updateScrollOffset', _offset);
    },
    applyZoomPan: function(zoomLevel,panX,panY,allowRenderResolution) {
        _panOffset.x = panX;
        _panOffset.y = panY;
        _currZoomLevel = zoomLevel;
        _applyCurrentZoomPan( allowRenderResolution );
    },

    init: function() {

        if(_isOpen || _isDestroying) {
            return;
        }

        var i;

        self.framework = framework; // basic functionality
        self.template = template; // root DOM element of PhotoSwipe
        self.bg = framework.getChildByClass(template, 'pswp__bg');

        _initalClassName = template.className;
        _isOpen = true;

        _features = framework.detectFeatures();
        _requestAF = _features.raf;
        _cancelAF = _features.caf;
        _transformKey = _features.transform;
        _oldIE = _features.oldIE;

        self.scrollWrap = framework.getChildByClass(template, 'pswp__scroll-wrap');
        self.container = framework.getChildByClass(self.scrollWrap, 'pswp__container');

        _containerStyle = self.container.style; // for fast access

        // Objects that hold slides (there are only 3 in DOM)
        self.itemHolders = _itemHolders = [
            {el:self.container.children[0] , wrap:0, index: -1},
            {el:self.container.children[1] , wrap:0, index: -1},
            {el:self.container.children[2] , wrap:0, index: -1}
        ];

        // hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)
        _itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'none';

        _setupTransforms();

        // Setup global events
        _globalEventHandlers = {
            resize: self.updateSize,

            // Fixes: iOS 10.3 resize event
            // does not update scrollWrap.clientWidth instantly after resize
            // https://github.com/dimsemenov/PhotoSwipe/issues/1315
            orientationchange: function() {
                clearTimeout(_orientationChangeTimeout);
                _orientationChangeTimeout = setTimeout(function() {
                    if(_viewportSize.x !== self.scrollWrap.clientWidth) {
                        self.updateSize();
                    }
                }, 500);
            },
            scroll: _updatePageScrollOffset,
            keydown: _onKeyDown,
            click: _onGlobalClick
        };

        // disable show/hide effects on old browsers that don't support CSS animations or transforms,
        // old IOS, Android and Opera mobile. Blackberry seems to work fine, even older models.
        var oldPhone = _features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;
        if(!_features.animationName || !_features.transform || oldPhone) {
            _options.showAnimationDuration = _options.hideAnimationDuration = 0;
        }

        // init modules
        for(i = 0; i < _modules.length; i++) {
            self['init' + _modules[i]]();
        }

        // init
        if(UiClass) {
            var ui = self.ui = new UiClass(self, framework);
            ui.init();
        }

        _shout('firstUpdate');
        _currentItemIndex = _currentItemIndex || _options.index || 0;
        // validate index
        if( isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems() ) {
            _currentItemIndex = 0;
        }
        self.currItem = _getItemAt( _currentItemIndex );


        if(_features.isOldIOSPhone || _features.isOldAndroid) {
            _isFixedPosition = false;
        }

        template.setAttribute('aria-hidden', 'false');
        if(_options.modal) {
            if(!_isFixedPosition) {
                template.style.position = 'absolute';
                template.style.top = framework.getScrollY() + 'px';
            } else {
                template.style.position = 'fixed';
            }
        }

        if(_currentWindowScrollY === undefined) {
            _shout('initialLayout');
            _currentWindowScrollY = _initalWindowScrollY = framework.getScrollY();
        }

        // add classes to root element of PhotoSwipe
        var rootClasses = 'pswp--open ';
        if(_options.mainClass) {
            rootClasses += _options.mainClass + ' ';
        }
        if(_options.showHideOpacity) {
            rootClasses += 'pswp--animate_opacity ';
        }
        rootClasses += _likelyTouchDevice ? 'pswp--touch' : 'pswp--notouch';
        rootClasses += _features.animationName ? ' pswp--css_animation' : '';
        rootClasses += _features.svg ? ' pswp--svg' : '';
        framework.addClass(template, rootClasses);

        self.updateSize();

        // initial update
        _containerShiftIndex = -1;
        _indexDiff = null;
        for(i = 0; i < NUM_HOLDERS; i++) {
            _setTranslateX( (i+_containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
        }

        if(!_oldIE) {
            framework.bind(self.scrollWrap, _downEvents, self); // no dragging for old IE
        }

        _listen('initialZoomInEnd', function() {
            self.setContent(_itemHolders[0], _currentItemIndex-1);
            self.setContent(_itemHolders[2], _currentItemIndex+1);

            _itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'block';

            if(_options.focus) {
                // focus causes layout,
                // which causes lag during the animation,
                // that's why we delay it untill the initial zoom transition ends
                template.focus();
            }


            _bindEvents();
        });

        // set content for center slide (first time)
        self.setContent(_itemHolders[1], _currentItemIndex);

        self.updateCurrItem();

        _shout('afterInit');

        if(!_isFixedPosition) {

            // On all versions of iOS lower than 8.0, we check size of viewport every second.
            //
            // This is done to detect when Safari top & bottom bars appear,
            // as this action doesn't trigger any events (like resize).
            //
            // On iOS8 they fixed this.
            //
            // 10 Nov 2014: iOS 7 usage ~40%. iOS 8 usage 56%.

            _updateSizeInterval = setInterval(function() {
                if(!_numAnimations && !_isDragging && !_isZooming && (_currZoomLevel === self.currItem.initialZoomLevel)  ) {
                    self.updateSize();
                }
            }, 1000);
        }

        framework.addClass(template, 'pswp--visible');

        // 屏蔽滚动条滚动
        setTimeout(function(){
            $('html').css({overflow:'hidden',height:'100%'});
        },300);
    },

    // Close the gallery, then destroy it
    close: function() {
        if(!_isOpen) {
            return;
        }
        // 撤销滚动条屏蔽
        $('html').css({overflow:'',height:''});
        _isOpen = false;
        _isDestroying = true;
        _shout('close');
        _unbindEvents();

        _showOrHide(self.currItem, null, true, self.destroy);
    },

    // destroys the gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks)
    destroy: function() {
        _shout('destroy');

        if(_showOrHideTimeout) {
            clearTimeout(_showOrHideTimeout);
        }

        template.setAttribute('aria-hidden', 'true');
        template.className = _initalClassName;

        if(_updateSizeInterval) {
            clearInterval(_updateSizeInterval);
        }

        framework.unbind(self.scrollWrap, _downEvents, self);

        // we unbind scroll event at the end, as closing animation may depend on it
        framework.unbind(window, 'scroll', self);

        _stopDragUpdateLoop();

        _stopAllAnimations();

        _listeners = null;
    },

    /**
     * Pan image to position
     * @param {Number} x
     * @param {Number} y
     * @param {Boolean} force Will ignore bounds if set to true.
     */
    panTo: function(x,y,force) {
        if(!force) {
            if(x > _currPanBounds.min.x) {
                x = _currPanBounds.min.x;
            } else if(x < _currPanBounds.max.x) {
                x = _currPanBounds.max.x;
            }

            if(y > _currPanBounds.min.y) {
                y = _currPanBounds.min.y;
            } else if(y < _currPanBounds.max.y) {
                y = _currPanBounds.max.y;
            }
        }

        _panOffset.x = x;
        _panOffset.y = y;
        _applyCurrentZoomPan();
    },

    handleEvent: function (e) {
        e = e || window.event;
        if(_globalEventHandlers[e.type]) {
            _globalEventHandlers[e.type](e);
        }
    },


    goTo: function(index) {
        var $container=$(self.container);
        $container.addClass('transition500');
        setTimeout(function(){
            $container.removeClass('transition500');
        },500)
        index = _getLoopedId(index);

        var diff = index - _currentItemIndex;
        _indexDiff = diff;

        _currentItemIndex = index;
        self.currItem = _getItemAt( _currentItemIndex );
        _currPositionIndex -= diff;

        _moveMainScroll(_slideSize.x * _currPositionIndex);


        _stopAllAnimations();
        _mainScrollAnimating = false;

        self.updateCurrItem();
    },
    next: function() {
        self.goTo( _currentItemIndex + 1);
    },
    prev: function() {
        self.goTo( _currentItemIndex - 1);
    },

    // update current zoom/pan objects
    updateCurrZoomItem: function(emulateSetContent) {
        if(emulateSetContent) {
            _shout('beforeChange', 0);
        }

        // itemHolder[1] is middle (current) item
        if(_itemHolders[1].el.children.length) {
            var zoomElement = _itemHolders[1].el.children[0];
            if( framework.hasClass(zoomElement, 'pswp__zoom-wrap') ) {
                _currZoomElementStyle = zoomElement.style;
            } else {
                _currZoomElementStyle = null;
            }
        } else {
            _currZoomElementStyle = null;
        }

        _currPanBounds = self.currItem.bounds;
        _startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;

        _panOffset.x = _currPanBounds.center.x;
        _panOffset.y = _currPanBounds.center.y;

        if(emulateSetContent) {
            _shout('afterChange');
        }
    },


    invalidateCurrItems: function() {
        _itemsNeedUpdate = true;
        for(var i = 0; i < NUM_HOLDERS; i++) {
            if( _itemHolders[i].item ) {
                _itemHolders[i].item.needsUpdate = true;
            }
        }
    },

    updateCurrItem: function(beforeAnimation) {

        if(_indexDiff === 0) {
            return;
        }

        var diffAbs = Math.abs(_indexDiff),
            tempHolder;

        if(beforeAnimation && diffAbs < 2) {
            return;
        }


        self.currItem = _getItemAt( _currentItemIndex );
        _renderMaxResolution = false;

        _shout('beforeChange', _indexDiff);

        if(diffAbs >= NUM_HOLDERS) {
            _containerShiftIndex += _indexDiff + (_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
            diffAbs = NUM_HOLDERS;
        }
        for(var i = 0; i < diffAbs; i++) {
            if(_indexDiff > 0) {
                tempHolder = _itemHolders.shift();
                _itemHolders[NUM_HOLDERS-1] = tempHolder; // move first to last

                _containerShiftIndex++;
                _setTranslateX( (_containerShiftIndex+2) * _slideSize.x, tempHolder.el.style);
                self.setContent(tempHolder, _currentItemIndex - diffAbs + i + 1 + 1);
            } else {
                tempHolder = _itemHolders.pop();
                _itemHolders.unshift( tempHolder ); // move last to first

                _containerShiftIndex--;
                _setTranslateX( _containerShiftIndex * _slideSize.x, tempHolder.el.style);
                self.setContent(tempHolder, _currentItemIndex + diffAbs - i - 1 - 1);
            }

        }

        // reset zoom/pan on previous item
        if(_currZoomElementStyle && Math.abs(_indexDiff) === 1) {

            var prevItem = _getItemAt(_prevItemIndex);
            if(prevItem.initialZoomLevel !== _currZoomLevel) {
                _calculateItemSize(prevItem , _viewportSize );
                _setImageSize(prevItem);
                _applyZoomPanToItem( prevItem );
            }

        }

        // reset diff after update
        _indexDiff = 0;

        self.updateCurrZoomItem();

        _prevItemIndex = _currentItemIndex;

        _shout('afterChange');

    },



    updateSize: function(force) {

        if(!_isFixedPosition && _options.modal) {
            var windowScrollY = framework.getScrollY();
            if(_currentWindowScrollY !== windowScrollY) {
                template.style.top = windowScrollY + 'px';
                _currentWindowScrollY = windowScrollY;
            }
            if(!force && _windowVisibleSize.x === window.innerWidth && _windowVisibleSize.y === window.innerHeight) {
                return;
            }
            _windowVisibleSize.x = window.innerWidth;
            _windowVisibleSize.y = window.innerHeight;

            //template.style.width = _windowVisibleSize.x + 'px';
            template.style.height = _windowVisibleSize.y + 'px';
        }



        _viewportSize.x = self.scrollWrap.clientWidth;
        _viewportSize.y = self.scrollWrap.clientHeight;

        _updatePageScrollOffset();

        _slideSize.x = _viewportSize.x + Math.round(_viewportSize.x * _options.spacing);
        _slideSize.y = _viewportSize.y;

        _moveMainScroll(_slideSize.x * _currPositionIndex);

        _shout('beforeResize'); // even may be used for example to switch image sources


        // don't re-calculate size on inital size update
        if(_containerShiftIndex !== undefined) {

            var holder,
                item,
                hIndex;

            for(var i = 0; i < NUM_HOLDERS; i++) {
                holder = _itemHolders[i];
                _setTranslateX( (i+_containerShiftIndex) * _slideSize.x, holder.el.style);

                hIndex = _currentItemIndex+i-1;

                if(_options.loop && _getNumItems() > 2) {
                    hIndex = _getLoopedId(hIndex);
                }

                // update zoom level on items and refresh source (if needsUpdate)
                item = _getItemAt( hIndex );

                // re-render gallery item if `needsUpdate`,
                // or doesn't have `bounds` (entirely new slide object)
                if( item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds) ) {

                    self.cleanSlide( item );

                    self.setContent( holder, hIndex );

                    // if "center" slide
                    if(i === 1) {
                        self.currItem = item;
                        self.updateCurrZoomItem(true);
                    }

                    item.needsUpdate = false;

                } else if(holder.index === -1 && hIndex >= 0) {
                    // add content first time
                    self.setContent( holder, hIndex );
                }
                if(item && item.container) {
                    _calculateItemSize(item, _viewportSize);
                    _setImageSize(item);
                    _applyZoomPanToItem( item );
                }

            }
            _itemsNeedUpdate = false;
        }

        _startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
        _currPanBounds = self.currItem.bounds;

        if(_currPanBounds) {
            _panOffset.x = _currPanBounds.center.x;
            _panOffset.y = _currPanBounds.center.y;
            _applyCurrentZoomPan( true );
        }

        _shout('resize');
    },

    // Zoom current item to
    zoomTo: function(destZoomLevel, centerPoint, speed, easingFn, updateFn) {
        /*
            if(destZoomLevel === 'fit') {
                destZoomLevel = self.currItem.fitRatio;
            } else if(destZoomLevel === 'fill') {
                destZoomLevel = self.currItem.fillRatio;
            }
        */

        if(centerPoint) {
            _startZoomLevel = _currZoomLevel;
            _midZoomPoint.x = Math.abs(centerPoint.x) - _panOffset.x ;
            _midZoomPoint.y = Math.abs(centerPoint.y) - _panOffset.y ;
            _equalizePoints(_startPanOffset, _panOffset);
        }

        var destPanBounds = _calculatePanBounds(destZoomLevel, false),
            destPanOffset = {};

        _modifyDestPanOffset('x', destPanBounds, destPanOffset, destZoomLevel);
        _modifyDestPanOffset('y', destPanBounds, destPanOffset, destZoomLevel);

        var initialZoomLevel = _currZoomLevel;
        var initialPanOffset = {
            x: _panOffset.x,
            y: _panOffset.y
        };

        _roundPoint(destPanOffset);

        var onUpdate = function(now) {
            if(now === 1) {
                _currZoomLevel = destZoomLevel;
                _panOffset.x = destPanOffset.x;
                _panOffset.y = destPanOffset.y;
            } else {
                _currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
                _panOffset.x = (destPanOffset.x - initialPanOffset.x) * now + initialPanOffset.x;
                _panOffset.y = (destPanOffset.y - initialPanOffset.y) * now + initialPanOffset.y;
            }

            if(updateFn) {
                updateFn(now);
            }

            _applyCurrentZoomPan( now === 1 );
        };

        if(speed) {
            _animateProp('customZoomTo', 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
        } else {
            onUpdate(1);
        }
    },
};


/*>>core*/

/*>>gestures*/
/**
 * Mouse/touch/pointer event handlers.
 *
 * separated from @core.js for readability
 */

var MIN_SWIPE_DISTANCE = 30,
    DIRECTION_CHECK_OFFSET = 10; // amount of pixels to drag to determine direction of swipe

var _gestureStartTime,
    _gestureCheckSpeedTime,

    // pool of objects that are used during dragging of zooming
    p = {}, // first point
    p2 = {}, // second point (for zoom gesture)
    delta = {},
    _currPoint = {},
    _startPoint = {},
    _currPointers = [],
    _startMainScrollPos = {},
    _releaseAnimData,
    _posPoints = [], // array of points during dragging, used to determine type of gesture
    _tempPoint = {},

    _isZoomingIn,
    _verticalDragInitiated,
    _oldAndroidTouchEndTimeout,
    _currZoomedItemIndex = 0,
    _centerPoint = _getEmptyPoint(),
    _lastReleaseTime = 0,
    _isDragging, // at least one pointer is down
    _isMultitouch, // at least two _pointers are down
    _zoomStarted, // zoom level changed during zoom gesture
    _moved,
    _dragAnimFrame,
    _mainScrollShifted,
    _currentPoints, // array of current touch points
    _isZooming,
    _currPointsDistance,
    _startPointsDistance,
    _currPanBounds,
    _mainScrollPos = _getEmptyPoint(),
    _currZoomElementStyle,
    _mainScrollAnimating, // true, if animation after swipe gesture is running
    _midZoomPoint = _getEmptyPoint(),
    _currCenterPoint = _getEmptyPoint(),
    _direction,
    _isFirstMove,
    _opacityChanged,
    _bgOpacity,
    _wasOverInitialZoom,

    _isEqualPoints = function(p1, p2) {
        return p1.x === p2.x && p1.y === p2.y;
    },
    _isNearbyPoints = function(touch0, touch1) {
        return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
    },
    _calculatePointsDistance = function(p1, p2) {
        _tempPoint.x = Math.abs( p1.x - p2.x );
        _tempPoint.y = Math.abs( p1.y - p2.y );
        return Math.sqrt(_tempPoint.x * _tempPoint.x + _tempPoint.y * _tempPoint.y);
    },
    _stopDragUpdateLoop = function() {
        if(_dragAnimFrame) {
            _cancelAF(_dragAnimFrame);
            _dragAnimFrame = null;
        }
    },
    _dragUpdateLoop = function() {
        if(_isDragging) {
            _dragAnimFrame = _requestAF(_dragUpdateLoop);
            _renderMovement();
        }
    },
    _canPan = function() {
        return !(_options.scaleMode === 'fit' && _currZoomLevel ===  self.currItem.initialZoomLevel);
    },

    // find the closest parent DOM element
    _closestElement = function(el, fn) {
        if(!el || el === document) {
            return false;
        }

        // don't search elements above pswp__scroll-wrap
        if(el.getAttribute('class') && el.getAttribute('class').indexOf('pswp__scroll-wrap') > -1 ) {
            return false;
        }

        if( fn(el) ) {
            return el;
        }

        return _closestElement(el.parentNode, fn);
    },

    _preventObj = {},
    _preventDefaultEventBehaviour = function(e, isDown) {
        _preventObj.prevent = !_closestElement(e.target, _options.isClickableElement);

        _shout('preventDragEvent', e, isDown, _preventObj);
        return _preventObj.prevent;

    },
    _convertTouchToPoint = function(touch, p) {
        p.x = touch.pageX;
        p.y = touch.pageY;
        p.id = touch.identifier;
        return p;
    },
    _findCenterOfPoints = function(p1, p2, pCenter) {
        pCenter.x = (p1.x + p2.x) * 0.5;
        pCenter.y = (p1.y + p2.y) * 0.5;
    },
    _pushPosPoint = function(time, x, y) {
        if(time - _gestureCheckSpeedTime > 50) {
            var o = _posPoints.length > 2 ? _posPoints.shift() : {};
            o.x = x;
            o.y = y;
            _posPoints.push(o);
            _gestureCheckSpeedTime = time;
        }
    },

    _calculateVerticalDragOpacityRatio = function() {
        var yOffset = _panOffset.y - self.currItem.initialPosition.y; // difference between initial and current position
        return 1 -  Math.abs( yOffset / (_viewportSize.y / 2)  );
    },


    // points pool, reused during touch events
    _ePoint1 = {},
    _ePoint2 = {},
    _tempPointsArr = [],
    _tempCounter,
    _getTouchPoints = function(e) {
        // clean up previous points, without recreating array
        while(_tempPointsArr.length > 0) {
            _tempPointsArr.pop();
        }

        if(!_pointerEventEnabled) {
            if(e.type.indexOf('touch') > -1) {

                if(e.touches && e.touches.length > 0) {
                    _tempPointsArr[0] = _convertTouchToPoint(e.touches[0], _ePoint1);
                    if(e.touches.length > 1) {
                        _tempPointsArr[1] = _convertTouchToPoint(e.touches[1], _ePoint2);
                    }
                }

            } else {
                _ePoint1.x = e.pageX;
                _ePoint1.y = e.pageY;
                _ePoint1.id = '';
                _tempPointsArr[0] = _ePoint1;//_ePoint1;
            }
        } else {
            _tempCounter = 0;
            // we can use forEach, as pointer events are supported only in modern browsers
            _currPointers.forEach(function(p) {
                if(_tempCounter === 0) {
                    _tempPointsArr[0] = p;
                } else if(_tempCounter === 1) {
                    _tempPointsArr[1] = p;
                }
                _tempCounter++;

            });
        }
        return _tempPointsArr;
    },

    _panOrMoveMainScroll = function(axis, delta) {

        var panFriction,
            overDiff = 0,
            newOffset = _panOffset[axis] + delta[axis],
            startOverDiff,
            dir = delta[axis] > 0,
            newMainScrollPosition = _mainScrollPos.x + delta.x,
            mainScrollDiff = _mainScrollPos.x - _startMainScrollPos.x,
            newPanPos,
            newMainScrollPos;

        // calculate fdistance over the bounds and friction
        if(newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
            panFriction = _options.panEndFriction;
            // Linear increasing of friction, so at 1/4 of viewport it's at max value.
            // Looks not as nice as was expected. Left for history.
            // panFriction = (1 - (_panOffset[axis] + delta[axis] + panBounds.min[axis]) / (_viewportSize[axis] / 4) );
        } else {
            panFriction = 1;
        }

        newOffset = _panOffset[axis] + delta[axis] * panFriction;

        // move main scroll or start panning
        if(_options.allowPanToNext || _currZoomLevel === self.currItem.initialZoomLevel) {


            if(!_currZoomElementStyle) {

                newMainScrollPos = newMainScrollPosition;

            } else if(_direction === 'h' && axis === 'x' && !_zoomStarted ) {

                if(dir) {
                    if(newOffset > _currPanBounds.min[axis]) {
                        panFriction = _options.panEndFriction;
                        overDiff = _currPanBounds.min[axis] - newOffset;
                        startOverDiff = _currPanBounds.min[axis] - _startPanOffset[axis];
                    }

                    // drag right
                    if( (startOverDiff <= 0 || mainScrollDiff < 0) && _getNumItems() > 1 ) {
                        newMainScrollPos = newMainScrollPosition;
                        if(mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
                            newMainScrollPos = _startMainScrollPos.x;
                        }
                    } else {
                        if(_currPanBounds.min.x !== _currPanBounds.max.x) {
                            newPanPos = newOffset;
                        }

                    }

                } else {

                    if(newOffset < _currPanBounds.max[axis] ) {
                        panFriction =_options.panEndFriction;
                        overDiff = newOffset - _currPanBounds.max[axis];
                        startOverDiff = _startPanOffset[axis] - _currPanBounds.max[axis];
                    }

                    if( (startOverDiff <= 0 || mainScrollDiff > 0) && _getNumItems() > 1 ) {
                        newMainScrollPos = newMainScrollPosition;

                        if(mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
                            newMainScrollPos = _startMainScrollPos.x;
                        }

                    } else {
                        if(_currPanBounds.min.x !== _currPanBounds.max.x) {
                            newPanPos = newOffset;
                        }
                    }

                }


                //
            }

            if(axis === 'x') {

                if(newMainScrollPos !== undefined) {
                    _moveMainScroll(newMainScrollPos, true);
                    if(newMainScrollPos === _startMainScrollPos.x) {
                        _mainScrollShifted = false;
                    } else {
                        _mainScrollShifted = true;
                    }
                }

                if(_currPanBounds.min.x !== _currPanBounds.max.x) {
                    if(newPanPos !== undefined) {
                        _panOffset.x = newPanPos;
                    } else if(!_mainScrollShifted) {
                        _panOffset.x += delta.x * panFriction;
                    }
                }

                return newMainScrollPos !== undefined;
            }

        }

        if(!_mainScrollAnimating) {

            if(!_mainScrollShifted) {
                if(_currZoomLevel > self.currItem.fitRatio) {
                    _panOffset[axis] += delta[axis] * panFriction;

                }
            }


        }

    },

    // Pointerdown/touchstart/mousedown handler
    _onDragStart = function(e) {

        // Allow dragging only via left mouse button.
        // As this handler is not added in IE8 - we ignore e.which
        //
        // http://www.quirksmode.org/js/events_properties.html
        // https://developer.mozilla.org/en-US/docs/Web/API/event.button
        if(e.type === 'mousedown' && e.button > 0  ) {
            return;
        }

        if(_initialZoomRunning) {
            e.preventDefault();
            return;
        }

        if(_oldAndroidTouchEndTimeout && e.type === 'mousedown') {
            return;
        }

        if(_preventDefaultEventBehaviour(e, true)) {
            // if(device_type!='d'){
            //     var obj = e.srcElement ? e.srcElement : e.target;
            //     if($(obj).parents('.pswp__button--rotate-left').length) {
            //         _imgRotate('','','.pswp__item','.pswp__img:visible',1);
            //     }
            //     if($(obj).parents('.pswp__button--rotate-right').length) {
            //         _imgRotate('','','.pswp__item','.pswp__img:visible',2);
            //     }
            // }
            e.preventDefault();
        }



        _shout('pointerDown');

        if(_pointerEventEnabled) {
            var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
            if(pointerIndex < 0) {
                pointerIndex = _currPointers.length;
            }
            _currPointers[pointerIndex] = {x:e.pageX, y:e.pageY, id: e.pointerId};
        }



        var startPointsList = _getTouchPoints(e),
            numPoints = startPointsList.length;

        _currentPoints = null;

        _stopAllAnimations();

        // init drag
        if(!_isDragging || numPoints === 1) {



            _isDragging = _isFirstMove = true;
            framework.bind(window, _upMoveEvents, self);

            _isZoomingIn =
                _wasOverInitialZoom =
                _opacityChanged =
                _verticalDragInitiated =
                _mainScrollShifted =
                _moved =
                _isMultitouch =
                _zoomStarted = false;

            _direction = null;

            _shout('firstTouchStart', startPointsList);

            _equalizePoints(_startPanOffset, _panOffset);

            _currPanDist.x = _currPanDist.y = 0;
            _equalizePoints(_currPoint, startPointsList[0]);
            _equalizePoints(_startPoint, _currPoint);

            //_equalizePoints(_startMainScrollPos, _mainScrollPos);
            _startMainScrollPos.x = _slideSize.x * _currPositionIndex;

            _posPoints = [{
                x: _currPoint.x,
                y: _currPoint.y
            }];

            _gestureCheckSpeedTime = _gestureStartTime = _getCurrentTime();

            //_mainScrollAnimationEnd(true);
            _calculatePanBounds( _currZoomLevel, true );

            // Start rendering
            _stopDragUpdateLoop();
            _dragUpdateLoop();

        }

        // init zoom
        if(!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
            _startZoomLevel = _currZoomLevel;
            _zoomStarted = false; // true if zoom changed at least once

            _isZooming = _isMultitouch = true;
            _currPanDist.y = _currPanDist.x = 0;

            _equalizePoints(_startPanOffset, _panOffset);

            _equalizePoints(p, startPointsList[0]);
            _equalizePoints(p2, startPointsList[1]);

            _findCenterOfPoints(p, p2, _currCenterPoint);

            _midZoomPoint.x = Math.abs(_currCenterPoint.x) - _panOffset.x;
            _midZoomPoint.y = Math.abs(_currCenterPoint.y) - _panOffset.y;
            _currPointsDistance = _startPointsDistance = _calculatePointsDistance(p, p2);
        }


    },

    // Pointermove/touchmove/mousemove handler
    _onDragMove = function(e) {

        e.preventDefault();

        if(_pointerEventEnabled) {
            var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
            if(pointerIndex > -1) {
                var p = _currPointers[pointerIndex];
                p.x = e.pageX;
                p.y = e.pageY;
            }
        }

        if(_isDragging) {
            var touchesList = _getTouchPoints(e);
            if(!_direction && !_moved && !_isZooming) {

                if(_mainScrollPos.x !== _slideSize.x * _currPositionIndex) {
                    // if main scroll position is shifted – direction is always horizontal
                    _direction = 'h';
                } else {
                    var diff = Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y);
                    // check the direction of movement
                    if(Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
                        _direction = diff > 0 ? 'h' : 'v';
                        _currentPoints = touchesList;
                    }
                }

            } else {
                _currentPoints = touchesList;
            }
        }
    },
    //
    _renderMovement =  function() {

        if(!_currentPoints) {
            return;
        }

        var numPoints = _currentPoints.length;

        if(numPoints === 0) {
            return;
        }

        _equalizePoints(p, _currentPoints[0]);

        delta.x = p.x - _currPoint.x;
        delta.y = p.y - _currPoint.y;

        if(_isZooming && numPoints > 1) {
            // Handle behaviour for more than 1 point

            _currPoint.x = p.x;
            _currPoint.y = p.y;

            // check if one of two points changed
            if( !delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2) ) {
                return;
            }

            _equalizePoints(p2, _currentPoints[1]);


            if(!_zoomStarted) {
                _zoomStarted = true;
                _shout('zoomGestureStarted');
            }

            // Distance between two points
            var pointsDistance = _calculatePointsDistance(p,p2);

            var zoomLevel = _calculateZoomLevel(pointsDistance);

            // slightly over the of initial zoom level
            if(zoomLevel > self.currItem.initialZoomLevel + self.currItem.initialZoomLevel / 15) {
                _wasOverInitialZoom = true;
            }

            // Apply the friction if zoom level is out of the bounds
            var zoomFriction = 1,
                minZoomLevel = _getMinZoomLevel(),
                maxZoomLevel = _getMaxZoomLevel();

            if ( zoomLevel < minZoomLevel ) {

                if(_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel <= self.currItem.initialZoomLevel) {
                    // fade out background if zooming out
                    var minusDiff = minZoomLevel - zoomLevel;
                    var percent = 1 - minusDiff / (minZoomLevel / 1.2);

                    _applyBgOpacity(percent);
                    _shout('onPinchClose', percent);
                    _opacityChanged = true;
                } else {
                    zoomFriction = (minZoomLevel - zoomLevel) / minZoomLevel;
                    if(zoomFriction > 1) {
                        zoomFriction = 1;
                    }
                    zoomLevel = minZoomLevel - zoomFriction * (minZoomLevel / 3);
                }

            } else if ( zoomLevel > maxZoomLevel ) {
                // 1.5 - extra zoom level above the max. E.g. if max is x6, real max 6 + 1.5 = 7.5
                zoomFriction = (zoomLevel - maxZoomLevel) / ( minZoomLevel * 6 );
                if(zoomFriction > 1) {
                    zoomFriction = 1;
                }
                zoomLevel = maxZoomLevel + zoomFriction * minZoomLevel;
            }

            if(zoomFriction < 0) {
                zoomFriction = 0;
            }

            // distance between touch points after friction is applied
            _currPointsDistance = pointsDistance;

            // _centerPoint - The point in the middle of two pointers
            _findCenterOfPoints(p, p2, _centerPoint);

            // paning with two pointers pressed
            _currPanDist.x += _centerPoint.x - _currCenterPoint.x;
            _currPanDist.y += _centerPoint.y - _currCenterPoint.y;
            _equalizePoints(_currCenterPoint, _centerPoint);

            _panOffset.x = _calculatePanOffset('x', zoomLevel);
            _panOffset.y = _calculatePanOffset('y', zoomLevel);

            _isZoomingIn = zoomLevel > _currZoomLevel;
            _currZoomLevel = zoomLevel;
            _applyCurrentZoomPan();

        } else {

            // handle behaviour for one point (dragging or panning)

            if(!_direction) {
                return;
            }

            if(_isFirstMove) {
                _isFirstMove = false;

                // subtract drag distance that was used during the detection direction

                if( Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
                    delta.x -= _currentPoints[0].x - _startPoint.x;
                }

                if( Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
                    delta.y -= _currentPoints[0].y - _startPoint.y;
                }
            }

            _currPoint.x = p.x;
            _currPoint.y = p.y;

            // do nothing if pointers position hasn't changed
            if(delta.x === 0 && delta.y === 0) {
                return;
            }

            if(_direction === 'v' && _options.closeOnVerticalDrag) {
                if(!_canPan()) {
                    _currPanDist.y += delta.y;
                    _panOffset.y += delta.y;

                    var opacityRatio = _calculateVerticalDragOpacityRatio();

                    _verticalDragInitiated = true;
                    _shout('onVerticalDrag', opacityRatio);

                    _applyBgOpacity(opacityRatio);
                    _applyCurrentZoomPan();
                    return ;
                }
            }

            _pushPosPoint(_getCurrentTime(), p.x, p.y);

            _moved = true;
            _currPanBounds = self.currItem.bounds;

            var mainScrollChanged = _panOrMoveMainScroll('x', delta);
            if(!mainScrollChanged) {
                _panOrMoveMainScroll('y', delta);

                _roundPoint(_panOffset);
                _applyCurrentZoomPan();
            }

        }

    },

    // Pointerup/pointercancel/touchend/touchcancel/mouseup event handler
    _onDragRelease = function(e) {

        if(_features.isOldAndroid ) {

            if(_oldAndroidTouchEndTimeout && e.type === 'mouseup') {
                return;
            }

            // on Android (v4.1, 4.2, 4.3 & possibly older)
            // ghost mousedown/up event isn't preventable via e.preventDefault,
            // which causes fake mousedown event
            // so we block mousedown/up for 600ms
            if( e.type.indexOf('touch') > -1 ) {
                clearTimeout(_oldAndroidTouchEndTimeout);
                _oldAndroidTouchEndTimeout = setTimeout(function() {
                    _oldAndroidTouchEndTimeout = 0;
                }, 600);
            }

        }

        _shout('pointerUp');

        if(_preventDefaultEventBehaviour(e, false)) {
            e.preventDefault();
        }

        var releasePoint;

        if(_pointerEventEnabled) {
            var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');

            if(pointerIndex > -1) {
                releasePoint = _currPointers.splice(pointerIndex, 1)[0];

                if(navigator.pointerEnabled) {
                    releasePoint.type = e.pointerType || 'mouse';
                } else {
                    var MSPOINTER_TYPES = {
                        4: 'mouse', // event.MSPOINTER_TYPE_MOUSE
                        2: 'touch', // event.MSPOINTER_TYPE_TOUCH
                        3: 'pen' // event.MSPOINTER_TYPE_PEN
                    };
                    releasePoint.type = MSPOINTER_TYPES[e.pointerType];

                    if(!releasePoint.type) {
                        releasePoint.type = e.pointerType || 'mouse';
                    }
                }

            }
        }

        var touchList = _getTouchPoints(e),
            gestureType,
            numPoints = touchList.length;

        if(e.type === 'mouseup') {
            numPoints = 0;
        }

        // Do nothing if there were 3 touch points or more
        if(numPoints === 2) {
            _currentPoints = null;
            return true;
        }

        // if second pointer released
        if(numPoints === 1) {
            _equalizePoints(_startPoint, touchList[0]);
        }


        // pointer hasn't moved, send "tap release" point
        if(numPoints === 0 && !_direction && !_mainScrollAnimating) {
            if(!releasePoint) {
                if(e.type === 'mouseup') {
                    releasePoint = {x: e.pageX, y: e.pageY, type:'mouse'};
                } else if(e.changedTouches && e.changedTouches[0]) {
                    releasePoint = {x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY, type:'touch'};
                }
            }

            _shout('touchRelease', e, releasePoint);
        }

        // Difference in time between releasing of two last touch points (zoom gesture)
        var releaseTimeDiff = -1;

        // Gesture completed, no pointers left
        if(numPoints === 0) {
            _isDragging = false;
            framework.unbind(window, _upMoveEvents, self);

            _stopDragUpdateLoop();

            if(_isZooming) {
                // Two points released at the same time
                releaseTimeDiff = 0;
            } else if(_lastReleaseTime !== -1) {
                releaseTimeDiff = _getCurrentTime() - _lastReleaseTime;
            }
        }
        _lastReleaseTime = numPoints === 1 ? _getCurrentTime() : -1;

        if(releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
            gestureType = 'zoom';
        } else {
            gestureType = 'swipe';
        }

        if(_isZooming && numPoints < 2) {
            _isZooming = false;

            // Only second point released
            if(numPoints === 1) {
                gestureType = 'zoomPointerUp';
            }
            _shout('zoomGestureEnded');
        }

        _currentPoints = null;
        if(!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
            // nothing to animate
            return;
        }

        _stopAllAnimations();


        if(!_releaseAnimData) {
            _releaseAnimData = _initDragReleaseAnimationData();
        }

        _releaseAnimData.calculateSwipeSpeed('x');


        if(_verticalDragInitiated) {

            var opacityRatio = _calculateVerticalDragOpacityRatio();

            if(opacityRatio < _options.verticalDragRange) {
                self.close();
            } else {
                var initalPanY = _panOffset.y,
                    initialBgOpacity = _bgOpacity;

                _animateProp('verticalDrag', 0, 1, 300, framework.easing.cubic.out, function(now) {

                    _panOffset.y = (self.currItem.initialPosition.y - initalPanY) * now + initalPanY;

                    _applyBgOpacity(  (1 - initialBgOpacity) * now + initialBgOpacity );
                    _applyCurrentZoomPan();
                });

                _shout('onVerticalDrag', 1);
            }

            return;
        }


        // main scroll
        if(  (_mainScrollShifted || _mainScrollAnimating) && numPoints === 0) {
            var itemChanged = _finishSwipeMainScrollGesture(gestureType, _releaseAnimData);
            if(itemChanged) {
                return;
            }
            gestureType = 'zoomPointerUp';
        }

        // prevent zoom/pan animation when main scroll animation runs
        if(_mainScrollAnimating) {
            return;
        }

        // Complete simple zoom gesture (reset zoom level if it's out of the bounds)
        if(gestureType !== 'swipe') {
            _completeZoomGesture();
            return;
        }

        // Complete pan gesture if main scroll is not shifted, and it's possible to pan current image
        if(!_mainScrollShifted && _currZoomLevel > self.currItem.fitRatio) {
            _completePanGesture(_releaseAnimData);
        }
    },


    // Returns object with data about gesture
    // It's created only once and then reused
    _initDragReleaseAnimationData  = function() {
        // temp local vars
        var lastFlickDuration,
            tempReleasePos;

        // s = this
        var s = {
            lastFlickOffset: {},
            lastFlickDist: {},
            lastFlickSpeed: {},
            slowDownRatio:  {},
            slowDownRatioReverse:  {},
            speedDecelerationRatio:  {},
            speedDecelerationRatioAbs:  {},
            distanceOffset:  {},
            backAnimDestination: {},
            backAnimStarted: {},
            calculateSwipeSpeed: function(axis) {


                if( _posPoints.length > 1) {
                    lastFlickDuration = _getCurrentTime() - _gestureCheckSpeedTime + 50;
                    tempReleasePos = _posPoints[_posPoints.length-2][axis];
                } else {
                    lastFlickDuration = _getCurrentTime() - _gestureStartTime; // total gesture duration
                    tempReleasePos = _startPoint[axis];
                }
                s.lastFlickOffset[axis] = _currPoint[axis] - tempReleasePos;
                s.lastFlickDist[axis] = Math.abs(s.lastFlickOffset[axis]);
                if(s.lastFlickDist[axis] > 20) {
                    s.lastFlickSpeed[axis] = s.lastFlickOffset[axis] / lastFlickDuration;
                } else {
                    s.lastFlickSpeed[axis] = 0;
                }
                if( Math.abs(s.lastFlickSpeed[axis]) < 0.1 ) {
                    s.lastFlickSpeed[axis] = 0;
                }

                s.slowDownRatio[axis] = 0.95;
                s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
                s.speedDecelerationRatio[axis] = 1;
            },

            calculateOverBoundsAnimOffset: function(axis, speed) {
                if(!s.backAnimStarted[axis]) {

                    if(_panOffset[axis] > _currPanBounds.min[axis]) {
                        s.backAnimDestination[axis] = _currPanBounds.min[axis];

                    } else if(_panOffset[axis] < _currPanBounds.max[axis]) {
                        s.backAnimDestination[axis] = _currPanBounds.max[axis];
                    }

                    if(s.backAnimDestination[axis] !== undefined) {
                        s.slowDownRatio[axis] = 0.7;
                        s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
                        if(s.speedDecelerationRatioAbs[axis] < 0.05) {

                            s.lastFlickSpeed[axis] = 0;
                            s.backAnimStarted[axis] = true;

                            _animateProp('bounceZoomPan'+axis,_panOffset[axis],
                                s.backAnimDestination[axis],
                                speed || 300,
                                framework.easing.sine.out,
                                function(pos) {
                                    _panOffset[axis] = pos;
                                    _applyCurrentZoomPan();
                                }
                            );

                        }
                    }
                }
            },

            // Reduces the speed by slowDownRatio (per 10ms)
            calculateAnimOffset: function(axis) {
                if(!s.backAnimStarted[axis]) {
                    s.speedDecelerationRatio[axis] = s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] +
                                                s.slowDownRatioReverse[axis] -
                                                s.slowDownRatioReverse[axis] * s.timeDiff / 10);

                    s.speedDecelerationRatioAbs[axis] = Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
                    s.distanceOffset[axis] = s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
                    _panOffset[axis] += s.distanceOffset[axis];

                }
            },

            panAnimLoop: function() {
                if ( _animations.zoomPan ) {
                    _animations.zoomPan.raf = _requestAF(s.panAnimLoop);

                    s.now = _getCurrentTime();
                    s.timeDiff = s.now - s.lastNow;
                    s.lastNow = s.now;

                    s.calculateAnimOffset('x');
                    s.calculateAnimOffset('y');

                    _applyCurrentZoomPan();

                    s.calculateOverBoundsAnimOffset('x');
                    s.calculateOverBoundsAnimOffset('y');


                    if (s.speedDecelerationRatioAbs.x < 0.05 && s.speedDecelerationRatioAbs.y < 0.05) {

                        // round pan position
                        _panOffset.x = Math.round(_panOffset.x);
                        _panOffset.y = Math.round(_panOffset.y);
                        _applyCurrentZoomPan();

                        _stopAnimation('zoomPan');
                        return;
                    }
                }

            }
        };
        return s;
    },

    _completePanGesture = function(animData) {
        // calculate swipe speed for Y axis (paanning)
        animData.calculateSwipeSpeed('y');

        _currPanBounds = self.currItem.bounds;

        animData.backAnimDestination = {};
        animData.backAnimStarted = {};

        // Avoid acceleration animation if speed is too low
        if(Math.abs(animData.lastFlickSpeed.x) <= 0.05 && Math.abs(animData.lastFlickSpeed.y) <= 0.05 ) {
            animData.speedDecelerationRatioAbs.x = animData.speedDecelerationRatioAbs.y = 0;

            // Run pan drag release animation. E.g. if you drag image and release finger without momentum.
            animData.calculateOverBoundsAnimOffset('x');
            animData.calculateOverBoundsAnimOffset('y');
            return true;
        }

        // Animation loop that controls the acceleration after pan gesture ends
        _registerStartAnimation('zoomPan');
        animData.lastNow = _getCurrentTime();
        animData.panAnimLoop();
    },


    _finishSwipeMainScrollGesture = function(gestureType, _releaseAnimData) {
        var itemChanged;
        if(!_mainScrollAnimating) {
            _currZoomedItemIndex = _currentItemIndex;
        }



        var itemsDiff;

        if(gestureType === 'swipe') {
            var totalShiftDist = _currPoint.x - _startPoint.x,
                isFastLastFlick = _releaseAnimData.lastFlickDist.x < 10;

            // if container is shifted for more than MIN_SWIPE_DISTANCE,
            // and last flick gesture was in right direction
            if(totalShiftDist > MIN_SWIPE_DISTANCE &&
                (isFastLastFlick || _releaseAnimData.lastFlickOffset.x > 20) ) {
                // go to prev item
                itemsDiff = -1;
            } else if(totalShiftDist < -MIN_SWIPE_DISTANCE &&
                (isFastLastFlick || _releaseAnimData.lastFlickOffset.x < -20) ) {
                // go to next item
                itemsDiff = 1;
            }
        }

        var nextCircle;

        if(itemsDiff) {

            _currentItemIndex += itemsDiff;

            if(_currentItemIndex < 0) {
                _currentItemIndex = _options.loop ? _getNumItems()-1 : 0;
                nextCircle = true;
            } else if(_currentItemIndex >= _getNumItems()) {
                _currentItemIndex = _options.loop ? 0 : _getNumItems()-1;
                nextCircle = true;
            }

            if(!nextCircle || _options.loop) {
                _indexDiff += itemsDiff;
                _currPositionIndex -= itemsDiff;
                itemChanged = true;
            }



        }

        var animateToX = _slideSize.x * _currPositionIndex;
        var animateToDist = Math.abs( animateToX - _mainScrollPos.x );
        var finishAnimDuration;


        if(!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData.lastFlickSpeed.x > 0) {
            // "return to current" duration, e.g. when dragging from slide 0 to -1
            finishAnimDuration = 333;
        } else {
            finishAnimDuration = Math.abs(_releaseAnimData.lastFlickSpeed.x) > 0 ?
                                    animateToDist / Math.abs(_releaseAnimData.lastFlickSpeed.x) :
                                    333;

            finishAnimDuration = Math.min(finishAnimDuration, 400);
            finishAnimDuration = Math.max(finishAnimDuration, 250);
        }

        if(_currZoomedItemIndex === _currentItemIndex) {
            itemChanged = false;
        }

        _mainScrollAnimating = true;

        _shout('mainScrollAnimStart');

        _animateProp('mainScroll', _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out,
            _moveMainScroll,
            function() {
                _stopAllAnimations();
                _mainScrollAnimating = false;
                _currZoomedItemIndex = -1;

                if(itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
                    self.updateCurrItem();
                }

                _shout('mainScrollAnimComplete');
            }
        );

        if(itemChanged) {
            self.updateCurrItem(true);
        }

        return itemChanged;
    },

    _calculateZoomLevel = function(touchesDistance) {
        return  1 / _startPointsDistance * touchesDistance * _startZoomLevel;
    },

    // Resets zoom if it's out of bounds
    _completeZoomGesture = function() {
        var destZoomLevel = _currZoomLevel,
            minZoomLevel = _getMinZoomLevel(),
            maxZoomLevel = _getMaxZoomLevel();

        if ( _currZoomLevel < minZoomLevel ) {
            destZoomLevel = minZoomLevel;
        } else if ( _currZoomLevel > maxZoomLevel ) {
            destZoomLevel = maxZoomLevel;
        }

        var destOpacity = 1,
            onUpdate,
            initialOpacity = _bgOpacity;

        if(_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
            //_closedByScroll = true;
            self.close();
            return true;
        }

        if(_opacityChanged) {
            onUpdate = function(now) {
                _applyBgOpacity(  (destOpacity - initialOpacity) * now + initialOpacity );
            };
        }

        self.zoomTo(destZoomLevel, 0, 200,  framework.easing.cubic.out, onUpdate);
        return true;
    };


_registerModule('Gestures', {
    publicMethods: {

        initGestures: function() {

            // helper function that builds touch/pointer/mouse events
            var addEventNames = function(pref, down, move, up, cancel) {
                _dragStartEvent = pref + down;
                _dragMoveEvent = pref + move;
                _dragEndEvent = pref + up;
                if(cancel) {
                    _dragCancelEvent = pref + cancel;
                } else {
                    _dragCancelEvent = '';
                }
            };

            _pointerEventEnabled = _features.pointerEvent;
            if(_pointerEventEnabled && _features.touch) {
                // we don't need touch events, if browser supports pointer events
                _features.touch = false;
            }

            if(_pointerEventEnabled) {
                if(navigator.pointerEnabled) {
                    addEventNames('pointer', 'down', 'move', 'up', 'cancel');
                } else {
                    // IE10 pointer events are case-sensitive
                    addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
                }
            } else if(_features.touch) {
                addEventNames('touch', 'start', 'move', 'end', 'cancel');
                _likelyTouchDevice = true;
            } else {
                addEventNames('mouse', 'down', 'move', 'up');
            }

            _upMoveEvents = _dragMoveEvent + ' ' + _dragEndEvent  + ' ' +  _dragCancelEvent;
            _downEvents = _dragStartEvent;

            if(_pointerEventEnabled && !_likelyTouchDevice) {
                _likelyTouchDevice = (navigator.maxTouchPoints > 1) || (navigator.msMaxTouchPoints > 1);
            }
            // make variable public
            self.likelyTouchDevice = _likelyTouchDevice;

            _globalEventHandlers[_dragStartEvent] = _onDragStart;
            _globalEventHandlers[_dragMoveEvent] = _onDragMove;
            _globalEventHandlers[_dragEndEvent] = _onDragRelease; // the Kraken

            if(_dragCancelEvent) {
                _globalEventHandlers[_dragCancelEvent] = _globalEventHandlers[_dragEndEvent];
            }

            // Bind mouse events on device with detected hardware touch support, in case it supports multiple types of input.
            if(_features.touch) {
                _downEvents += ' mousedown';
                _upMoveEvents += ' mousemove mouseup';
                _globalEventHandlers.mousedown = _globalEventHandlers[_dragStartEvent];
                _globalEventHandlers.mousemove = _globalEventHandlers[_dragMoveEvent];
                _globalEventHandlers.mouseup = _globalEventHandlers[_dragEndEvent];
            }

            if(!_likelyTouchDevice) {
                // don't allow pan to next slide from zoomed state on Desktop
                _options.allowPanToNext = false;
            }
        }

    }
});


/*>>gestures*/

/*>>show-hide-transition*/
/**
 * show-hide-transition.js:
 *
 * Manages initial opening or closing transition.
 *
 * If you're not planning to use transition for gallery at all,
 * you may set options hideAnimationDuration and showAnimationDuration to 0,
 * and just delete startAnimation function.
 *
 */


var _showOrHideTimeout,
    _showOrHide = function(item, img, out, completeFn) {

        if(_showOrHideTimeout) {
            clearTimeout(_showOrHideTimeout);
        }

        _initialZoomRunning = true;
        _initialContentSet = true;

        // dimensions of small thumbnail {x:,y:,w:}.
        // Height is optional, as calculated based on large image.
        var thumbBounds;
        if(item.initialLayout) {
            thumbBounds = item.initialLayout;
            item.initialLayout = null;
        } else {
            thumbBounds = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
        }

        var duration = out ? _options.hideAnimationDuration : _options.showAnimationDuration;

        var onComplete = function() {
            _stopAnimation('initialZoom');
            if(!out) {
                _applyBgOpacity(1);
                if(img) {
                    img.style.display = 'block';
                }
                framework.addClass(template, 'pswp--animated-in');
                _shout('initialZoom' + (out ? 'OutEnd' : 'InEnd'));
            } else {
                self.template.removeAttribute('style');
                self.bg.removeAttribute('style');
            }

            if(completeFn) {
                completeFn();
            }
            _initialZoomRunning = false;
        };

        // if bounds aren't provided, just open gallery without animation
        if(!duration || !thumbBounds || thumbBounds.x === undefined) {

            _shout('initialZoom' + (out ? 'Out' : 'In') );

            _currZoomLevel = item.initialZoomLevel;
            _equalizePoints(_panOffset,  item.initialPosition );
            _applyCurrentZoomPan();

            template.style.opacity = out ? 0 : 1;
            _applyBgOpacity(1);

            if(duration) {
                setTimeout(function() {
                    onComplete();
                }, duration);
            } else {
                onComplete();
            }

            return;
        }

        var startAnimation = function() {
            var closeWithRaf = _closedByScroll,
                fadeEverything = !self.currItem.src || self.currItem.loadError || _options.showHideOpacity;

            // apply hw-acceleration to image
            if(item.miniImg) {
                item.miniImg.style.webkitBackfaceVisibility = 'hidden';
            }

            if(!out) {
                _currZoomLevel = thumbBounds.w / item.w;
                _panOffset.x = thumbBounds.x;
                _panOffset.y = thumbBounds.y - _initalWindowScrollY;

                self[fadeEverything ? 'template' : 'bg'].style.opacity = 0.001;
                _applyCurrentZoomPan();
            }

            _registerStartAnimation('initialZoom');

            if(out && !closeWithRaf) {
                framework.removeClass(template, 'pswp--animated-in');
            }

            if(fadeEverything) {
                if(out) {
                    framework[ (closeWithRaf ? 'remove' : 'add') + 'Class' ](template, 'pswp--animate_opacity');
                } else {
                    setTimeout(function() {
                        framework.addClass(template, 'pswp--animate_opacity');
                    }, 30);
                }
            }

            _showOrHideTimeout = setTimeout(function() {

                _shout('initialZoom' + (out ? 'Out' : 'In') );


                if(!out) {

                    // "in" animation always uses CSS transitions (instead of rAF).
                    // CSS transition work faster here,
                    // as developer may also want to animate other things,
                    // like ui on top of sliding area, which can be animated just via CSS

                    _currZoomLevel = item.initialZoomLevel;
                    _equalizePoints(_panOffset,  item.initialPosition );
                    _applyCurrentZoomPan();
                    _applyBgOpacity(1);

                    if(fadeEverything) {
                        template.style.opacity = 1;
                    } else {
                        _applyBgOpacity(1);
                    }

                    _showOrHideTimeout = setTimeout(onComplete, duration + 20);
                } else {

                    // "out" animation uses rAF only when PhotoSwipe is closed by browser scroll, to recalculate position
                    var destZoomLevel = thumbBounds.w / item.w,
                        initialPanOffset = {
                            x: _panOffset.x,
                            y: _panOffset.y
                        },
                        initialZoomLevel = _currZoomLevel,
                        initalBgOpacity = _bgOpacity,
                        onUpdate = function(now) {

                            if(now === 1) {
                                _currZoomLevel = destZoomLevel;
                                _panOffset.x = thumbBounds.x;
                                _panOffset.y = thumbBounds.y  - _currentWindowScrollY;
                            } else {
                                _currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
                                _panOffset.x = (thumbBounds.x - initialPanOffset.x) * now + initialPanOffset.x;
                                _panOffset.y = (thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now + initialPanOffset.y;
                            }

                            _applyCurrentZoomPan();
                            if(fadeEverything) {
                                template.style.opacity = 1 - now;
                            } else {
                                _applyBgOpacity( initalBgOpacity - now * initalBgOpacity );
                            }
                        };

                    if(closeWithRaf) {
                        _animateProp('initialZoom', 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
                    } else {
                        onUpdate(1);
                        _showOrHideTimeout = setTimeout(onComplete, duration + 20);
                    }
                }

            }, out ? 25 : 90); // Main purpose of this delay is to give browser time to paint and
                    // create composite layers of PhotoSwipe UI parts (background, controls, caption, arrows).
                    // Which avoids lag at the beginning of scale transition.
        };
        startAnimation();


    };

/*>>show-hide-transition*/

/*>>items-controller*/
/**
*
* Controller manages gallery items, their dimensions, and their content.
*
*/

var _items,
    _tempPanAreaSize = {},
    _imagesToAppendPool = [],
    _initialContentSet,
    _initialZoomRunning,
    _controllerDefaultOptions = {
        index: 0,
        errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
        forceProgressiveLoading: false, // TODO
        preload: [1,1],
        getNumItemsFn: function() {
            return _items.length;
        }
    };


var _getItemAt,
    _getNumItems,
    _initialIsLoop,
    _getZeroBounds = function() {
        return {
            center:{x:0,y:0},
            max:{x:0,y:0},
            min:{x:0,y:0}
        };
    },
    _calculateSingleItemPanBounds = function(item, realPanElementW, realPanElementH ) {
        var bounds = item.bounds;

        // position of element when it's centered
        bounds.center.x = Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
        bounds.center.y = Math.round((_tempPanAreaSize.y - realPanElementH) / 2) + item.vGap.top;

        // maximum pan position
        bounds.max.x = (realPanElementW > _tempPanAreaSize.x) ?
                            Math.round(_tempPanAreaSize.x - realPanElementW) :
                            bounds.center.x;

        bounds.max.y = (realPanElementH > _tempPanAreaSize.y) ?
                            Math.round(_tempPanAreaSize.y - realPanElementH) + item.vGap.top :
                            bounds.center.y;

        // minimum pan position
        bounds.min.x = (realPanElementW > _tempPanAreaSize.x) ? 0 : bounds.center.x;
        bounds.min.y = (realPanElementH > _tempPanAreaSize.y) ? item.vGap.top : bounds.center.y;
    },
    _calculateItemSize = function(item, viewportSize, zoomLevel) {

        if (item.src && !item.loadError) {
            var isInitial = !zoomLevel;

            if(isInitial) {
                if(!item.vGap) {
                    item.vGap = {top:0,bottom:0};
                }
                // allows overriding vertical margin for individual items
                _shout('parseVerticalMargin', item);
            }


            _tempPanAreaSize.x = viewportSize.x;
            _tempPanAreaSize.y = viewportSize.y - item.vGap.top - item.vGap.bottom;

            if (isInitial) {
                var hRatio = _tempPanAreaSize.x / item.w;
                var vRatio = _tempPanAreaSize.y / item.h;

                item.fitRatio = hRatio < vRatio ? hRatio : vRatio;
                //item.fillRatio = hRatio > vRatio ? hRatio : vRatio;

                var scaleMode = _options.scaleMode;

                if (scaleMode === 'orig') {
                    zoomLevel = 1;
                } else if (scaleMode === 'fit') {
                    zoomLevel = item.fitRatio;
                }

                if (zoomLevel > 1) {
                    zoomLevel = 1;
                }

                item.initialZoomLevel = zoomLevel;

                if(!item.bounds) {
                    // reuse bounds object
                    item.bounds = _getZeroBounds();
                }
            }

            if(!zoomLevel) {
                return;
            }

            _calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);

            if (isInitial && zoomLevel === item.initialZoomLevel) {
                item.initialPosition = item.bounds.center;
            }

            return item.bounds;
        } else {
            item.w = item.h = 0;
            item.initialZoomLevel = item.fitRatio = 1;
            item.bounds = _getZeroBounds();
            item.initialPosition = item.bounds.center;

            // if it's not image, we return zero bounds (content is not zoomable)
            return item.bounds;
        }

    },




    _appendImage = function(index, item, baseDiv, img, preventAnimation, keepPlaceholder) {


        if(item.loadError) {
            return;
        }

        if(img) {

            item.imageAppended = true;
            _setImageSize(item, img, (item === self.currItem && _renderMaxResolution) );

            baseDiv.appendChild(img);

            if(keepPlaceholder) {
                setTimeout(function() {
                    if(item && item.loaded && item.placeholder) {
                        item.placeholder.style.display = 'none';
                        item.placeholder = null;
                    }
                }, 500);
            }
        }
    },



    _preloadImage = function(item) {
        item.loading = true;
        item.loaded = false;
        var img = item.img = framework.createEl('pswp__img', 'img');
        var onComplete = function() {
            item.loading = false;
            item.loaded = true;

            if(item.loadComplete) {
                item.loadComplete(item);
            } else {
                item.img = null; // no need to store image object
            }
            img.onload = img.onerror = null;
            img = null;
        };
        img.onload = onComplete;
        img.onerror = function() {
            item.loadError = true;
            onComplete();
        };

        img.src = item.src;// + '?a=' + Math.random();

        return img;
    },
    _checkForError = function(item, cleanUp) {
        if(item.src && item.loadError && item.container) {

            if(cleanUp) {
                item.container.innerHTML = '';
            }

            item.container.innerHTML = _options.errorMsg.replace('%url%',  item.src );
            return true;

        }
    },
    _setImageSize = function(item, img, maxRes) {
        if(!item.src) {
            return;
        }

        if(!img) {
            img = item.container.lastChild;
        }

        var w = maxRes ? item.w : Math.round(item.w * item.fitRatio),
            h = maxRes ? item.h : Math.round(item.h * item.fitRatio);

        if(item.placeholder && !item.loaded) {
            item.placeholder.style.width = w + 'px';
            item.placeholder.style.height = h + 'px';
        }

        img.style.width = w + 'px';
        img.style.height = h + 'px';
    },
    _appendImagesPool = function() {

        if(_imagesToAppendPool.length) {
            var poolItem;

            for(var i = 0; i < _imagesToAppendPool.length; i++) {
                poolItem = _imagesToAppendPool[i];
                if( poolItem.holder.index === poolItem.index ) {
                    _appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img, false, poolItem.clearPlaceholder);
                }
            }
            _imagesToAppendPool = [];
        }
    };



_registerModule('Controller', {

    publicMethods: {

        lazyLoadItem: function(index) {
            index = _getLoopedId(index);
            var item = _getItemAt(index);

            if(!item || ((item.loaded || item.loading) && !_itemsNeedUpdate)) {
                return;
            }

            _shout('gettingData', index, item);

            if (!item.src) {
                return;
            }

            _preloadImage(item);
        },
        initController: function() {
            framework.extend(_options, _controllerDefaultOptions, true);
            self.items = _items = items;
            _getItemAt = self.getItemAt;
            _getNumItems = _options.getNumItemsFn; //self.getNumItems;



            _initialIsLoop = _options.loop;
            if(_getNumItems() < 3) {
                _options.loop = false; // disable loop if less then 3 items
            }

            _listen('beforeChange', function(diff) {

                var p = _options.preload,
                    isNext = diff === null ? true : (diff >= 0),
                    preloadBefore = Math.min(p[0], _getNumItems() ),
                    preloadAfter = Math.min(p[1], _getNumItems() ),
                    i;


                for(i = 1; i <= (isNext ? preloadAfter : preloadBefore); i++) {
                    self.lazyLoadItem(_currentItemIndex+i);
                }
                for(i = 1; i <= (isNext ? preloadBefore : preloadAfter); i++) {
                    self.lazyLoadItem(_currentItemIndex-i);
                }
            });

            _listen('initialLayout', function() {
                self.currItem.initialLayout = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
            });

            _listen('mainScrollAnimComplete', _appendImagesPool);
            _listen('initialZoomInEnd', _appendImagesPool);



            _listen('destroy', function() {
                var item;
                for(var i = 0; i < _items.length; i++) {
                    item = _items[i];
                    // remove reference to DOM elements, for GC
                    if(item.container) {
                        item.container = null;
                    }
                    if(item.placeholder) {
                        item.placeholder = null;
                    }
                    if(item.img) {
                        item.img = null;
                    }
                    if(item.preloader) {
                        item.preloader = null;
                    }
                    if(item.loadError) {
                        item.loaded = item.loadError = false;
                    }
                }
                _imagesToAppendPool = null;
            });
        },


        getItemAt: function(index) {
            if (index >= 0) {
                return _items[index] !== undefined ? _items[index] : false;
            }
            return false;
        },

        allowProgressiveImg: function() {
            // 1. Progressive image loading isn't working on webkit/blink
            //    when hw-acceleration (e.g. translateZ) is applied to IMG element.
            //    That's why in PhotoSwipe parent element gets zoom transform, not image itself.
            //
            // 2. Progressive image loading sometimes blinks in webkit/blink when applying animation to parent element.
            //    That's why it's disabled on touch devices (mainly because of swipe transition)
            //
            // 3. Progressive image loading sometimes doesn't work in IE (up to 11).

            // Don't allow progressive loading on non-large touch devices
            return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200;
            // 1200 - to eliminate touch devices with large screen (like Chromebook Pixel)
        },

        setContent: function(holder, index) {

            if(_options.loop) {
                index = _getLoopedId(index);
            }

            var prevItem = self.getItemAt(holder.index);
            if(prevItem) {
                prevItem.container = null;
            }

            var item = self.getItemAt(index),
                img;

            if(!item) {
                holder.el.innerHTML = '';
                return;
            }

            // allow to override data
            _shout('gettingData', index, item);

            holder.index = index;
            holder.item = item;

            // base container DIV is created only once for each of 3 holders
            var baseDiv = item.container = framework.createEl('pswp__zoom-wrap');



            if(!item.src && item.html) {
                if(item.html.tagName) {
                    baseDiv.appendChild(item.html);
                } else {
                    baseDiv.innerHTML = item.html;
                }
            }

            _checkForError(item);

            _calculateItemSize(item, _viewportSize);

            if(item.src && !item.loadError && !item.loaded) {

                item.loadComplete = function(item) {

                    // gallery closed before image finished loading
                    if(!_isOpen) {
                        return;
                    }

                    // check if holder hasn't changed while image was loading
                    if(holder && holder.index === index ) {
                        if( _checkForError(item, true) ) {
                            item.loadComplete = item.img = null;
                            _calculateItemSize(item, _viewportSize);
                            _applyZoomPanToItem(item);

                            if(holder.index === _currentItemIndex) {
                                // recalculate dimensions
                                self.updateCurrZoomItem();
                            }
                            return;
                        }
                        if( !item.imageAppended ) {
                            if(_features.transform && (_mainScrollAnimating || _initialZoomRunning) ) {
                                _imagesToAppendPool.push({
                                    item:item,
                                    baseDiv:baseDiv,
                                    img:item.img,
                                    index:index,
                                    holder:holder,
                                    clearPlaceholder:true
                                });
                            } else {
                                _appendImage(index, item, baseDiv, item.img, _mainScrollAnimating || _initialZoomRunning, true);
                            }
                        } else {
                            // remove preloader & mini-img
                            if(!_initialZoomRunning && item.placeholder) {
                                item.placeholder.style.display = 'none';
                                item.placeholder = null;
                            }
                        }
                    }

                    item.loadComplete = null;
                    item.img = null; // no need to store image element after it's added

                    _shout('imageLoadComplete', index, item);
                };

                if(framework.features.transform) {

                    var placeholderClassName = 'pswp__img pswp__img--placeholder';
                    placeholderClassName += (item.msrc ? '' : ' pswp__img--placeholder--blank');

                    var placeholder = framework.createEl(placeholderClassName, item.msrc ? 'img' : '');
                    if(item.src) {
                        placeholder.src = item.src;
                        placeholder.style.display='none';
                    }

                    _setImageSize(item, placeholder);
                    baseDiv.appendChild(placeholder);
                    setTimeout(function(){
                        $('.pswp__img--placeholder').fadeIn();
                    },100)
                    item.placeholder = placeholder;
                }


                if(!item.loading) {
                    _preloadImage(item);
                }


                if( self.allowProgressiveImg() ) {
                    // just append image
                    if(!_initialContentSet && _features.transform) {
                        _imagesToAppendPool.push({
                            item:item,
                            baseDiv:baseDiv,
                            img:item.img,
                            index:index,
                            holder:holder
                        });
                    } else {
                        _appendImage(index, item, baseDiv, item.img, true, true);
                    }
                }

            } else if(item.src && !item.loadError) {
                // image object is created every time, due to bugs of image loading & delay when switching images
                img = framework.createEl('pswp__img', 'img');
                img.style.opacity = 1;
                img.src = item.src;
                _setImageSize(item, img);
                _appendImage(index, item, baseDiv, img, true);
            }


            if(!_initialContentSet && index === _currentItemIndex) {
                _currZoomElementStyle = baseDiv.style;
                _showOrHide(item, (img ||item.img) );
            } else {
                _applyZoomPanToItem(item);
            }

            holder.el.innerHTML = '';
            holder.el.appendChild(baseDiv);
        },

        cleanSlide: function( item ) {
            if(item.img ) {
                item.img.onload = item.img.onerror = null;
            }
            item.loaded = item.loading = item.img = item.imageAppended = false;
        }

    }
});

/*>>items-controller*/

/*>>tap*/
/**
 * tap.js:
 *
 * Displatches tap and double-tap events.
 *
 */

var tapTimer,
    tapReleasePoint = {},
    _dispatchTapEvent = function(origEvent, releasePoint, pointerType) {
        var e = document.createEvent( 'CustomEvent' ),
            eDetail = {
                origEvent:origEvent,
                target:origEvent.target,
                releasePoint: releasePoint,
                pointerType:pointerType || 'touch'
            };

        e.initCustomEvent( 'pswpTap', true, true, eDetail );
        origEvent.target.dispatchEvent(e);
    };

_registerModule('Tap', {
    publicMethods: {
        initTap: function() {
            _listen('firstTouchStart', self.onTapStart);
            _listen('touchRelease', self.onTapRelease);
            _listen('destroy', function() {
                tapReleasePoint = {};
                tapTimer = null;
            });
        },
        onTapStart: function(touchList) {
            if(touchList.length > 1) {
                clearTimeout(tapTimer);
                tapTimer = null;
            }
        },
        onTapRelease: function(e, releasePoint) {
            if(!releasePoint) {
                return;
            }

            if(!_moved && !_isMultitouch && !_numAnimations) {
                var p0 = releasePoint;
                if(tapTimer) {
                    clearTimeout(tapTimer);
                    tapTimer = null;

                    // Check if taped on the same place
                    if ( _isNearbyPoints(p0, tapReleasePoint) ) {
                        _shout('doubleTap', p0);
                        return;
                    }
                }

                if(releasePoint.type === 'mouse') {
                    _dispatchTapEvent(e, releasePoint, 'mouse');
                    return;
                }

                var clickedTagName = e.target.tagName.toUpperCase();
                // avoid double tap delay on buttons and elements that have class pswp__single-tap
                if(clickedTagName === 'BUTTON' || framework.hasClass(e.target, 'pswp__single-tap') ) {
                    _dispatchTapEvent(e, releasePoint);
                    return;
                }

                _equalizePoints(tapReleasePoint, p0);

                tapTimer = setTimeout(function() {
                    _dispatchTapEvent(e, releasePoint);
                    tapTimer = null;
                }, 300);
            }
        }
    }
});

/*>>tap*/

/*>>desktop-zoom*/
/**
 *
 * desktop-zoom.js:
 *
 * - Binds mousewheel event for paning zoomed image.
 * - Manages "dragging", "zoomed-in", "zoom-out" classes.
 *   (which are used for cursors and zoom icon)
 * - Adds toggleDesktopZoom function.
 *
 */

var _wheelDelta;

_registerModule('DesktopZoom', {

    publicMethods: {

        initDesktopZoom: function() {

            if(_oldIE) {
                // no zoom for old IE (<=8)
                return;
            }

            if(_likelyTouchDevice) {
                // if detected hardware touch support, we wait until mouse is used,
                // and only then apply desktop-zoom features
                _listen('mouseUsed', function() {
                    self.setupDesktopZoom();
                });
            } else {
                self.setupDesktopZoom(true);
            }

        },

        setupDesktopZoom: function(onInit) {

            _wheelDelta = {};

            var events = 'wheel mousewheel DOMMouseScroll';

            _listen('bindEvents', function() {
                framework.bind(template, events,  self.handleMouseWheel);
            });

            _listen('unbindEvents', function() {
                if(_wheelDelta) {
                    framework.unbind(template, events, self.handleMouseWheel);
                }
            });

            self.mouseZoomedIn = false;

            var hasDraggingClass,
                updateZoomable = function() {
                    if(self.mouseZoomedIn) {
                        framework.removeClass(template, 'pswp--zoomed-in');
                        self.mouseZoomedIn = false;
                    }
                    // if(_currZoomLevel < 1) {
                        framework.addClass(template, 'pswp--zoom-allowed');
                    // } else {
                    //     framework.removeClass(template, 'pswp--zoom-allowed');
                    // }
                    removeDraggingClass();
                },
                removeDraggingClass = function() {
                    if(hasDraggingClass) {
                        framework.removeClass(template, 'pswp--dragging');
                        hasDraggingClass = false;
                    }
                };

            _listen('resize' , updateZoomable);
            _listen('afterChange' , updateZoomable);
            _listen('pointerDown', function() {
                if(self.mouseZoomedIn) {
                    hasDraggingClass = true;
                    framework.addClass(template, 'pswp--dragging');
                }
            });
            _listen('pointerUp', removeDraggingClass);

            if(!onInit) {
                updateZoomable();
            }

        },

        handleMouseWheel: function(e) {

            if(_currZoomLevel <= self.currItem.fitRatio) {
                if( _options.modal ) {

                    if (!_options.closeOnScroll || _numAnimations || _isDragging) {
                        e.preventDefault();
                    } else if(_transformKey && Math.abs(e.deltaY) > 2) {
                        // close PhotoSwipe
                        // if browser supports transforms & scroll changed enough
                        _closedByScroll = true;
                        self.close();
                    }

                }
                return true;
            }

            // allow just one event to fire
            e.stopPropagation();

            // https://developer.mozilla.org/en-US/docs/Web/Events/wheel
            _wheelDelta.x = 0;

            if('deltaX' in e) {
                if(e.deltaMode === 1 /* DOM_DELTA_LINE */) {
                    // 18 - average line height
                    _wheelDelta.x = e.deltaX * 18;
                    _wheelDelta.y = e.deltaY * 18;
                } else {
                    _wheelDelta.x = e.deltaX;
                    _wheelDelta.y = e.deltaY;
                }
            } else if('wheelDelta' in e) {
                if(e.wheelDeltaX) {
                    _wheelDelta.x = -0.16 * e.wheelDeltaX;
                }
                if(e.wheelDeltaY) {
                    _wheelDelta.y = -0.16 * e.wheelDeltaY;
                } else {
                    _wheelDelta.y = -0.16 * e.wheelDelta;
                }
            } else if('detail' in e) {
                _wheelDelta.y = e.detail;
            } else {
                return;
            }

            _calculatePanBounds(_currZoomLevel, true);

            var newPanX = _panOffset.x - _wheelDelta.x,
                newPanY = _panOffset.y - _wheelDelta.y;

            // only prevent scrolling in nonmodal mode when not at edges
            if (_options.modal ||
                (
                newPanX <= _currPanBounds.min.x && newPanX >= _currPanBounds.max.x &&
                newPanY <= _currPanBounds.min.y && newPanY >= _currPanBounds.max.y
                ) ) {
                e.preventDefault();
            }

            // TODO: use rAF instead of mousewheel?
            self.panTo(newPanX, newPanY);
        },

        toggleDesktopZoom: function(centerPoint) {
            centerPoint = centerPoint || {x:_viewportSize.x/2 + _offset.x, y:_viewportSize.y/2 + _offset.y };

            var doubleTapZoomLevel = _options.getDoubleTapZoom(true, self.currItem);
            var zoomOut = _currZoomLevel === doubleTapZoomLevel;

            self.mouseZoomedIn = !zoomOut;

            self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
            framework[ (!zoomOut ? 'add' : 'remove') + 'Class'](template, 'pswp--zoomed-in');
        }

    }
});


/*>>desktop-zoom*/

/*>>history*/
/**
 *
 * history.js:
 *
 * - Back button to close gallery.
 *
 * - Unique URL for each slide: example.com/&pid=1&gid=3
 *   (where PID is picture index, and GID and gallery index)
 *
 * - Switch URL when slides change.
 *
 */


var _historyDefaultOptions = {
    history: true,
    galleryUID: 1
};

var _historyUpdateTimeout,
    _hashChangeTimeout,
    _hashAnimCheckTimeout,
    _hashChangedByScript,
    _hashChangedByHistory,
    _hashReseted,
    _initialHash,
    _historyChanged,
    _closedFromURL,
    _urlChangedOnce,
    _windowLoc,

    _supportsPushState,

    _getHash = function() {
        return _windowLoc.hash.substring(1);
    },
    _cleanHistoryTimeouts = function() {

        if(_historyUpdateTimeout) {
            clearTimeout(_historyUpdateTimeout);
        }

        if(_hashAnimCheckTimeout) {
            clearTimeout(_hashAnimCheckTimeout);
        }
    },

    // pid - Picture index
    // gid - Gallery index
    _parseItemIndexFromURL = function() {
        var hash = _getHash(),
            params = {};

        if(hash.length < 5) { // pid=1
            return params;
        }

        var i, vars = hash.split('&');
        for (i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if(pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }
        if(_options.galleryPIDs) {
            // detect custom pid in hash and search for it among the items collection
            var searchfor = params.pid;
            params.pid = 0; // if custom pid cannot be found, fallback to the first item
            for(i = 0; i < _items.length; i++) {
                if(_items[i].pid === searchfor) {
                    params.pid = i;
                    break;
                }
            }
        } else {
            params.pid = parseInt(params.pid,10)-1;
        }
        if( params.pid < 0 ) {
            params.pid = 0;
        }
        return params;
    },
    _updateHash = function() {

        if(_hashAnimCheckTimeout) {
            clearTimeout(_hashAnimCheckTimeout);
        }


        if(_numAnimations || _isDragging) {
            // changing browser URL forces layout/paint in some browsers, which causes noticable lag during animation
            // that's why we update hash only when no animations running
            _hashAnimCheckTimeout = setTimeout(_updateHash, 500);
            return;
        }

        if(_hashChangedByScript) {
            clearTimeout(_hashChangeTimeout);
        } else {
            _hashChangedByScript = true;
        }


        var pid = (_currentItemIndex + 1);
        var item = _getItemAt( _currentItemIndex );
        if(item.hasOwnProperty('pid')) {
            // carry forward any custom pid assigned to the item
            pid = item.pid;
        }
        var newHash = _initialHash + '&'  +  'gid=' + _options.galleryUID + '&' + 'pid=' + pid;

        if(!_historyChanged) {
            if(_windowLoc.hash.indexOf(newHash) === -1) {
                _urlChangedOnce = true;
            }
            // first time - add new hisory record, then just replace
        }

        var newURL = _windowLoc.href.split('#')[0] + '#' +  newHash;

        if( _supportsPushState ) {

            if('#' + newHash !== window.location.hash) {
                history[_historyChanged ? 'replaceState' : 'pushState']('', document.title, newURL);
            }

        } else {
            if(_historyChanged) {
                _windowLoc.replace( newURL );
            } else {
                _windowLoc.hash = newHash;
            }
        }



        _historyChanged = true;
        _hashChangeTimeout = setTimeout(function() {
            _hashChangedByScript = false;
        }, 60);
    };





_registerModule('History', {



    publicMethods: {
        initHistory: function() {

            framework.extend(_options, _historyDefaultOptions, true);

            if( !_options.history ) {
                return;
            }


            _windowLoc = window.location;
            _urlChangedOnce = false;
            _closedFromURL = false;
            _historyChanged = false;
            _initialHash = _getHash();
            _supportsPushState = ('pushState' in history);


            if(_initialHash.indexOf('gid=') > -1) {
                _initialHash = _initialHash.split('&gid=')[0];
                _initialHash = _initialHash.split('?gid=')[0];
            }


            _listen('afterChange', self.updateURL);
            _listen('unbindEvents', function() {
                framework.unbind(window, 'hashchange', self.onHashChange);
            });


            var returnToOriginal = function() {
                _hashReseted = true;
                if(!_closedFromURL) {

                    if(_urlChangedOnce) {
                        history.back();
                    } else {

                        if(_initialHash) {
                            _windowLoc.hash = _initialHash;
                        } else {
                            if (_supportsPushState) {

                                // remove hash from url without refreshing it or scrolling to top
                                history.pushState('', document.title,  _windowLoc.pathname + _windowLoc.search );
                            } else {
                                _windowLoc.hash = '';
                            }
                        }
                    }

                }

                _cleanHistoryTimeouts();
            };


            _listen('unbindEvents', function() {
                if(_closedByScroll) {
                    // if PhotoSwipe is closed by scroll, we go "back" before the closing animation starts
                    // this is done to keep the scroll position
                    returnToOriginal();
                }
            });
            _listen('destroy', function() {
                if(!_hashReseted) {
                    returnToOriginal();
                }
            });
            _listen('firstUpdate', function() {
                _currentItemIndex = _parseItemIndexFromURL().pid;
            });




            var index = _initialHash.indexOf('pid=');
            if(index > -1) {
                _initialHash = _initialHash.substring(0, index);
                if(_initialHash.slice(-1) === '&') {
                    _initialHash = _initialHash.slice(0, -1);
                }
            }


            setTimeout(function() {
                if(_isOpen) { // hasn't destroyed yet
                    framework.bind(window, 'hashchange', self.onHashChange);
                }
            }, 40);

        },
        onHashChange: function() {

            if(_getHash() === _initialHash) {

                _closedFromURL = true;
                self.close();
                return;
            }
            if(!_hashChangedByScript) {

                _hashChangedByHistory = true;
                self.goTo( _parseItemIndexFromURL().pid );
                _hashChangedByHistory = false;
            }

        },
        updateURL: function() {

            // Delay the update of URL, to avoid lag during transition,
            // and to not to trigger actions like "refresh page sound" or "blinking favicon" to often

            _cleanHistoryTimeouts();


            if(_hashChangedByHistory) {
                return;
            }

            if(!_historyChanged) {
                _updateHash(); // first time
            } else {
                _historyUpdateTimeout = setTimeout(_updateHash, 50);
            }
        }

    }
});


/*>>history*/
    framework.extend(self, publicMethods); };
    return PhotoSwipe;
});
/*! PhotoSwipe Default UI - 4.1.0 - 2015-09-04
* http://photoswipe.com
* Copyright (c) 2015 Dmitry Semenov; */
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.PhotoSwipeUI_Default=b()}(this,function(){"use strict";var a=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=this,w=!1,x=!0,y=!0,z={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(a,b){return a.title?(b.children[0].innerHTML=a.title,!0):(b.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return a.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return a.currItem.title||""},indexIndicatorSep:" / "},A=function(a){if(r)return!0;a=a||window.event,q.timeToIdle&&q.mouseUsed&&!k&&K();for(var c,d,e=a.target||a.srcElement,f=e.className,g=0;g<S.length;g++)c=S[g],c.onTap&&f.indexOf("pswp__"+c.name)>-1&&(c.onTap(),d=!0);if(d){a.stopPropagation&&a.stopPropagation(),r=!0;var h=b.features.isOldAndroid?600:30;s=setTimeout(function(){r=!1},h)}},B=function(){return!a.likelyTouchDevice||q.mouseUsed||screen.width>1200},C=function(a,c,d){b[(d?"add":"remove")+"Class"](a,"pswp__"+c)},D=function(){var a=1===q.getNumItemsFn();a!==p&&(C(d,"ui--one-slide",a),p=a)},E=function(){C(i,"share-modal--hidden",y)},F=function(){return y=!y,y?(b.removeClass(i,"pswp__share-modal--fade-in"),setTimeout(function(){y&&E()},300)):(E(),setTimeout(function(){y||b.addClass(i,"pswp__share-modal--fade-in")},30)),y||H(),!1},G=function(b){b=b||window.event;var c=b.target||b.srcElement;return a.shout("shareLinkClick",b,c),c.href?c.hasAttribute("download")?!0:(window.open(c.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),y||F(),!1):!1},H=function(){for(var a,b,c,d,e,f="",g=0;g<q.shareButtons.length;g++)a=q.shareButtons[g],c=q.getImageURLForShare(a),d=q.getPageURLForShare(a),e=q.getTextForShare(a),b=a.url.replace("{{url}}",encodeURIComponent(d)).replace("{{image_url}}",encodeURIComponent(c)).replace("{{raw_image_url}}",c).replace("{{text}}",encodeURIComponent(e)),f+='<a href="'+b+'" target="_blank" class="pswp__share--'+a.id+'"'+(a.download?"download":"")+">"+a.label+"</a>",q.parseShareButtonOut&&(f=q.parseShareButtonOut(a,f));i.children[0].innerHTML=f,i.children[0].onclick=G},I=function(a){for(var c=0;c<q.closeElClasses.length;c++)if(b.hasClass(a,"pswp__"+q.closeElClasses[c]))return!0},J=0,K=function(){clearTimeout(u),J=0,k&&v.setIdle(!1)},L=function(a){a=a?a:window.event;var b=a.relatedTarget||a.toElement;b&&"HTML"!==b.nodeName||(clearTimeout(u),u=setTimeout(function(){v.setIdle(!0)},q.timeToIdleOutside))},M=function(){q.fullscreenEl&&!b.features.isOldAndroid&&(c||(c=v.getFullscreenAPI()),c?(b.bind(document,c.eventK,v.updateFullscreen),v.updateFullscreen(),b.addClass(a.template,"pswp--supports-fs")):b.removeClass(a.template,"pswp--supports-fs"))},N=function(){q.preloaderEl&&(O(!0),l("beforeChange",function(){clearTimeout(o),o=setTimeout(function(){a.currItem&&a.currItem.loading?(!a.allowProgressiveImg()||a.currItem.img&&!a.currItem.img.naturalWidth)&&O(!1):O(!0)},q.loadingIndicatorDelay)}),l("imageLoadComplete",function(b,c){a.currItem===c&&O(!0)}))},O=function(a){n!==a&&(C(m,"preloader--active",!a),n=a)},P=function(a){var c=a.vGap;if(B()){var g=q.barsSize;if(q.captionEl&&"auto"===g.bottom)if(f||(f=b.createEl("pswp__caption pswp__caption--fake"),f.appendChild(b.createEl("pswp__caption__center")),d.insertBefore(f,e),b.addClass(d,"pswp__ui--fit")),q.addCaptionHTMLFn(a,f,!0)){var h=f.clientHeight;c.bottom=parseInt(h,10)||44}else c.bottom=g.top;else c.bottom="auto"===g.bottom?0:g.bottom;c.top=g.top}else c.top=c.bottom=0},Q=function(){q.timeToIdle&&l("mouseUsed",function(){b.bind(document,"mousemove",K),b.bind(document,"mouseout",L),t=setInterval(function(){J++,2===J&&v.setIdle(!0)},q.timeToIdle/2)})},R=function(){l("onVerticalDrag",function(a){x&&.95>a?v.hideControls():!x&&a>=.95&&v.showControls()});var a;l("onPinchClose",function(b){x&&.9>b?(v.hideControls(),a=!0):a&&!x&&b>.9&&v.showControls()}),l("zoomGestureEnded",function(){a=!1,a&&!x&&v.showControls()})},S=[{name:"caption",option:"captionEl",onInit:function(a){e=a}},{name:"share-modal",option:"shareEl",onInit:function(a){i=a},onTap:function(){F()}},{name:"button--share",option:"shareEl",onInit:function(a){h=a},onTap:function(){F()}},{name:"button--zoom",option:"zoomEl",onTap:a.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(a){g=a}},{name:"button--close",option:"closeEl",onTap:a.close},{name:"button--arrow--left",option:"arrowEl",onTap:a.prev},{name:"button--arrow--right",option:"arrowEl",onTap:a.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){c.isFullscreen()?c.exit():c.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(a){m=a}}],T=function(){var a,c,e,f=function(d){if(d)for(var f=d.length,g=0;f>g;g++){a=d[g],c=a.className;for(var h=0;h<S.length;h++)e=S[h],c.indexOf("pswp__"+e.name)>-1&&(q[e.option]?(b.removeClass(a,"pswp__element--disabled"),e.onInit&&e.onInit(a)):b.addClass(a,"pswp__element--disabled"))}};f(d.children);var g=b.getChildByClass(d,"pswp__top-bar");g&&f(g.children)};v.init=function(){b.extend(a.options,z,!0),q=a.options,d=b.getChildByClass(a.scrollWrap,"pswp__ui"),l=a.listen,R(),l("beforeChange",v.update),l("doubleTap",function(b){var c=a.currItem.initialZoomLevel;a.getZoomLevel()!==c?a.zoomTo(c,b,333):a.zoomTo(q.getDoubleTapZoom(!1,a.currItem),b,333)}),l("preventDragEvent",function(a,b,c){var d=a.target||a.srcElement;d&&d.className&&a.type.indexOf("mouse")>-1&&(d.className.indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(d.tagName))&&(c.prevent=!1)}),l("bindEvents",function(){b.bind(d,"pswpTap click",A),b.bind(a.scrollWrap,"pswpTap",v.onGlobalTap),a.likelyTouchDevice||b.bind(a.scrollWrap,"mouseover",v.onMouseOver)}),l("unbindEvents",function(){y||F(),t&&clearInterval(t),b.unbind(document,"mouseout",L),b.unbind(document,"mousemove",K),b.unbind(d,"pswpTap click",A),b.unbind(a.scrollWrap,"pswpTap",v.onGlobalTap),b.unbind(a.scrollWrap,"mouseover",v.onMouseOver),c&&(b.unbind(document,c.eventK,v.updateFullscreen),c.isFullscreen()&&(q.hideAnimationDuration=0,c.exit()),c=null)}),l("destroy",function(){q.captionEl&&(f&&d.removeChild(f),b.removeClass(e,"pswp__caption--empty")),i&&(i.children[0].onclick=null),b.removeClass(d,"pswp__ui--over-close"),b.addClass(d,"pswp__ui--hidden"),v.setIdle(!1)}),q.showAnimationDuration||b.removeClass(d,"pswp__ui--hidden"),l("initialZoomIn",function(){q.showAnimationDuration&&b.removeClass(d,"pswp__ui--hidden")}),l("initialZoomOut",function(){b.addClass(d,"pswp__ui--hidden")}),l("parseVerticalMargin",P),T(),q.shareEl&&h&&i&&(y=!0),D(),Q(),M(),N()},v.setIdle=function(a){k=a,C(d,"ui--idle",a)},v.update=function(){x&&a.currItem?(v.updateIndexIndicator(),q.captionEl&&(q.addCaptionHTMLFn(a.currItem,e),C(e,"caption--empty",!a.currItem.title)),w=!0):w=!1,y||F(),D()},v.updateFullscreen=function(d){d&&setTimeout(function(){a.setScrollOffset(0,b.getScrollY())},50),b[(c.isFullscreen()?"add":"remove")+"Class"](a.template,"pswp--fs")},v.updateIndexIndicator=function(){q.counterEl&&(g.innerHTML=a.getCurrentIndex()+1+q.indexIndicatorSep+q.getNumItemsFn())},v.onGlobalTap=function(c){c=c||window.event;var d=c.target||c.srcElement;if(!r)if(c.detail&&"mouse"===c.detail.pointerType){if(I(d))return void a.close();b.hasClass(d,"pswp__img")&&(1===a.getZoomLevel()&&a.getZoomLevel()<=a.currItem.fitRatio?q.clickToCloseNonZoomable&&a.close():a.toggleDesktopZoom(c.detail.releasePoint))}else if(q.tapToToggleControls&&(x?v.hideControls():v.showControls()),q.tapToClose&&(b.hasClass(d,"pswp__img")||I(d)))return void a.close()},v.onMouseOver=function(a){a=a||window.event;var b=a.target||a.srcElement;C(d,"ui--over-close",I(b))},v.hideControls=function(){b.addClass(d,"pswp__ui--hidden"),x=!1},v.showControls=function(){x=!0,w||v.update(),b.removeClass(d,"pswp__ui--hidden")},v.supportsFullscreen=function(){var a=document;return!!(a.exitFullscreen||a.mozCancelFullScreen||a.webkitExitFullscreen||a.msExitFullscreen)},v.getFullscreenAPI=function(){var b,c=document.documentElement,d="fullscreenchange";return c.requestFullscreen?b={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:d}:c.mozRequestFullScreen?b={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+d}:c.webkitRequestFullscreen?b={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+d}:c.msRequestFullscreen&&(b={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),b&&(b.enter=function(){return j=q.closeOnScroll,q.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK?a.template[this.enterK]():void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},b.exit=function(){return q.closeOnScroll=j,document[this.exitK]()},b.isFullscreen=function(){return document[this.elementK]}),b}};return a});
$.initPhotoSwipeFromDOM = function(gallerySelector,medDom) {
    var parseThumbnailElements = function(el) {
        var thumbElements = $(medDom,el),
            numNodes = thumbElements.length,
            items = [],
            el,
            childElements,
            thumbnailEl,
            size,
            item;
        for (var i = 0; i < numNodes; i++) {
            el = thumbElements[i];
            // include only element nodes
            if (el.nodeType !== 1) {
                continue;
            }
            childElements = el.children;
            size = el.getAttribute('data-size').split('x');
            // create slide object
            item = {
                src: el.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10),
                author: el.getAttribute('data-author')
            };
            item.el = el; // save link to element for getThumbBoundsFn
            if (childElements.length > 0) {
                item.msrc = childElements[0].getAttribute('src'); // thumbnail url
                if (childElements.length > 1) {
                    item.title = childElements[1].innerHTML/*childElements[0].getAttribute('alt')*/; // caption (contents of figure)
                }
            }
            var mediumSrc = el.getAttribute('data-med');
            if (mediumSrc) {
                size = el.getAttribute('data-med-size').split('x');
                // "medium-sized" image
                item.m = {
                    src: mediumSrc,
                    w: parseInt(size[0], 10),
                    h: parseInt(size[1], 10)
                };
            }
            // original image
            item.o = {
                src: item.src,
                w: item.w,
                h: item.h
            };
            items.push(item);
        }
        return items;
    };
    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };
    var onThumbnailsClick = function(e,parents) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function(el) {
            return el.tagName === 'A';
        });
        if (!clickedListItem) {
            return;
        }
        var clickedGallery = parents,
            clickedListItemMed=$(clickedListItem).data('med'),
            index;
        $(medDom,parents).each(function(i, el) {
            if($(this).data('med')==clickedListItemMed){
                index=i;
                return false;
            }
        });
        if (index >= 0) {
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
            params = {};
        if (hash.length < 5) { // pid=1
            return params;
        }
        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }
        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        return params;
    };
    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        if(!$('.pswp').length){
            var pswp_html='<div id="photoswipe-gallery" class="pswp" tabindex="-1" role="dialog" aria-hidden="true">'
                    +'<div class="pswp__bg"></div>'
                    +'<div class="pswp__scroll-wrap">'
                        +'<div class="pswp__container">'
                            +'<div class="pswp__item"></div>'
                            +'<div class="pswp__item"></div>'
                            +'<div class="pswp__item"></div>'
                        +'</div>'
                        +'<div class="pswp__ui pswp__ui--hidden">'
                            +'<div class="pswp__top-bar">'
                                +'<div class="pswp__counter"></div>'
                                +'<button class="pswp__button pswp__button--close" title="退出画廊"></button>'
                                +'<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>'
                                +'<button class="pswp__button pswp__button--zoom" title="放大 / 缩小"></button>'
                                // +'<button class="pswp__button pswp__button--rotate-left" title="逆时针旋转"><i class="icon md-rotate-ccw" aria-hidden="true"></i></button>'
                                // +'<button class="pswp__button pswp__button--rotate-right" title="顺时针旋转"><i class="icon md-rotate-cw" aria-hidden="true"></i></button>'
                                +'<div class="pswp__preloader">'
                                    +'<div class="pswp__preloader__icn">'
                                        +'<div class="pswp__preloader__cut">'
                                            +'<div class="pswp__preloader__donut"></div>'
                                        +'</div>'
                                    +'</div>'
                                +'</div>'
                            +'</div>'
                             +'<div class="pswp__loading-indicator">'
                                +'<div class="pswp__loading-indicator__line"></div>'
                            +'</div>'
                            +'<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>'
                            +'<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>'
                            +'<div class="pswp__caption">'
                                +'<div class="pswp__caption__center"></div>'
                            +'</div>'
                        +'</div>'
                    +'</div>'
                +'</div>';
            $('body').append(pswp_html);
        }
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        // define options (if needed)
        options = {
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function(index) {
                // See Options->getThumbBoundsFn section of docs for more info
                var thumbnail = items[index].el.children[0],
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();
                return {
                    x: rect.left,
                    y: rect.top + pageYScroll,
                    w: rect.width
                };
            },
            addCaptionHTMLFn: function(item, captionEl, isFake) {
                if (!item.title) {
                    captionEl.children[0].innerText = '';
                    return false;
                }
                captionEl.children[0].innerHTML = item.title/* + '<br/><small>Photo: ' + item.author + '</small>'*/;
                return true;
            },
            closeOnScroll:false,
            tapToClose:true,
            tapToToggleControls:false,
            fullscreenEl:false,
            // captionEl:false,
            shareEl:false,
            errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">图片</a> 加载失败</div>'
        };
        if (fromURL) {
            if (options.galleryPIDs) {
                // parse real index when custom PIDs are used
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }
        // exit if index not found
        if (isNaN(options.index)) {
            return;
        }
        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }
        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        // see: http://photoswipe.com/documentation/responsive-images.html
        var realViewportWidth,
            useLargeImages = false,
            firstResize = true,
            imageSrcWillChange;
        gallery.listen('beforeResize', function() {
            var dpiRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
            dpiRatio = Math.min(dpiRatio, 2.5);
            realViewportWidth = gallery.viewportSize.x * dpiRatio;
            if (realViewportWidth >= 1200 || (!gallery.likelyTouchDevice && realViewportWidth > 800) || screen.width > 1200) {
                if (!useLargeImages) {
                    useLargeImages = true;
                    imageSrcWillChange = true;
                }

            } else {
                if (useLargeImages) {
                    useLargeImages = false;
                    imageSrcWillChange = true;
                }
            }
            if (imageSrcWillChange && !firstResize) {
                gallery.invalidateCurrItems();
            }
            if (firstResize) {
                firstResize = false;
            }
            imageSrcWillChange = false;
        });
        gallery.listen('gettingData', function(index, item) {
            if (useLargeImages) {
                item.src = item.o.src;
                item.w = item.o.w;
                item.h = item.o.h;
            } else {
                item.src = item.m.src;
                item.w = item.m.w;
                item.h = item.m.h;
            }
        });
        gallery.init();
    };
    // select all gallery elements
    // var galleryElements = document.querySelectorAll(gallerySelector),
    var galleryElements = $(gallerySelector),
        medDom=medDom||'[data-med]';
    $(gallerySelector).each(function(index, el) {
        $(this).attr({'data-pswp-uid':index + 1}).click(function(e) {
            onThumbnailsClick(e,this);
        });
    });
    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        // openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
        openPhotoSwipe(hashData.pid, galleryElements.eq(hashData.gid - 1), true, true);
    }
};
if(location.hash.indexOf('#&gid=')>=0 && location.hash.indexOf('&pid=')>=0) window.history.back();
/*!
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2015 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.7
 *
 */
(function($, window, document, undefined) {
    var $window = $(window),
        canvasPosition=function(from_dom,to_dom){ // canvas设置
            var top=from_dom.position().top,
                left=from_dom.position().left,
                width=from_dom.width(),
                height=from_dom.height();
            to_dom.css({top:top,left:left}).width(width).height(height);
        },
        canvasControl=function(dom,canvas_id){
            $.stackBlurImage(dom, canvas_id, 10, false);
            if(dom.is(':visible')) canvasPosition(dom,$('#'+canvas_id));
            $(window).resize(function() {
                if(dom.is(":visible")) canvasPosition(dom,$('#'+canvas_id));
            });
            $('#'+canvas_id).attr({'data-load':true});
        },
        thumbdir=M['weburl']+'include/thumb.php?dir=';
    $.fn.lazyload = function(options) {
        var elements = this;
        var $container;
        var settings = {
            threshold       : 30,
            failure_limit   : 1000,
            event           : "scroll",
            effect          : "fadeIn",
            effect_speed    : null,
            container       : window,
            data_attribute  : "original",
            data_srcset     : 'srcset',
            skip_invisible  : true,
            appear          : null,
            load            : null,
            placeholder     : met_lazyloadbg,// 'base64',met_lazyloadbg,'blur'
        };

        function update() {
            var counter = 0;

            elements.each(function() {
                var $this = $(this),
                    $this_canvas=$this.next('canvas');
                if (settings.skip_invisible && !$this.is(":visible")) {
                    return;
                }
                if($this_canvas.length && !$this_canvas.attr('data-load') && $.stackBlurImage) canvasControl($this,$this_canvas.attr('id'));
                if ($.abovethetop(this, settings) ||
                    $.leftofbegin(this, settings)) {
                        /* Nothing. */
                } else if (!$.belowthefold(this, settings) &&
                    !$.rightoffold(this, settings)) {
                        $this.trigger("appear");
                        /* if we found an image we'll load, reset the counter */
                        counter = 0;
                } else {
                    if (++counter > settings.failure_limit) {
                        return false;
                    }
                }
            });

        }

        if(options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined ||
                      settings.container === window) ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf("scroll")) {
            $container.on(settings.event, function() {
                return update();
            });
        }
        if(settings.placeholder=='base64') settings.placeholder=met_lazyloadbg_base64;

        this.each(function(index) {
            var self = this,
                $self = $(self),
                original = $self.attr("data-" + settings.data_attribute),
                placeholder=settings.placeholder,
                placeholder_ok=placeholder!=met_lazyloadbg_base64?true:false;
            self.loaded = false;

            /* If no src attribute given use data:uri. */
            if ($self.is("img") && original && (!$self.attr("src") || $self.attr("src")!=original)) {
                if(placeholder=='blur' && $.stackBlurImage){
                    // 图片高斯模糊加载小图
                    if(!$self.attr('data-minimg')){
                        // 设置小图路径
                        var thumb=original.replace(M['weburl'],M['weburl']),
                            original_array=thumb.split('&');
                        if(thumb.indexOf('http')<0 || (thumb.indexOf('http')>=0 && thumb.indexOf(M['weburl'])>=0)){
                            if(original.indexOf('include/thumb.php?dir=')>-1){
                                var data_minimg=original_array[0]+'&x=50';
                            }else{
                                var data_minimg=thumbdir+thumb+'&x=50';
                            }
                            if(original_array && original_array.length==3){
                                scale_x=original_array[1].substring(2);
                                scale_y=original_array[2].substring(2);
                                scale=scale_y/scale_x;
                                minimg_h=Math.round(50*scale);
                                data_minimg+='&y='+minimg_h;
                            }
                            $(this).attr({src:data_minimg,'data-minimg':true});
                            // 高斯模糊小图
                            var img=new Image();
                            img.src=$self.attr("src");
                            img.onload=function(){
                                setTimeout(function(){
                                    var $self_canvas=$self.next('canvas');
                                    if($self.attr('src')!=original && !$self_canvas.length){
                                        var canvas_id="imgcanvas"+index;
                                        $self.wrapAll('<section style="position: relative;"></section>').after('<canvas id="'+canvas_id+'" data-load="false" width="'+$self.width()+'" height="'+$self.height()+'" style="position:absolute;z-index:10;"></canvas>');
                                        if(!settings.skip_invisible || $self.is(":visible")) canvasControl($self,canvas_id);
                                    }else if($self_canvas.length){
                                        canvasPosition($self,$self_canvas);
                                    }
                                },30)
                            }
                        }
                    }
                }else{
                    if(placeholder=='blur') placeholder=met_lazyloadbg;
                    $self.attr("src", placeholder);
                    if(placeholder_ok && !$self.hasClass('imgloading')) $self.addClass('imgloading');
                }
            }

            /* When appear is triggered load original image. */
            $self.one("appear", function() {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    var srcset = $self.attr("data-" + settings.data_srcset);
                    $("<img />")
                        .one("load", function() {
                        $self.hide();
                        if ($self.is("img")/* || $self.is("source") || $self.is("video") || $self.is("audio") || $self.is("iframe") || $self.is("script") || $self.is("link")*/) {
                            if(srcset) $self.attr("srcset", srcset);
                            $self.attr("src", original);
                        } else {
                            $self.css("background-image", "url('" + original + "')");
                            if(srcset) $self.css("background-image", "-webkit-image-set(" + srcset + ")");
                        }
                        $self[settings.effect](settings.effect_speed);
                        $self.one('load', function() {
                            $self.removeClass('imgloading');
                            $self.next('canvas').fadeOut("normal",function(){
                                $self.next('canvas').remove();
                            });
                        });

                        self.loaded = true;

                        /* Remove image from array so it is not looped next time. */
                        var temp = $.grep(elements, function(element) {
                            return !element.loaded;
                        });
                        elements = $(temp);

                        if (settings.load) {
                            var elements_left = elements.length;
                            settings.load.call(self, elements_left, settings);
                        }
                    }).attr({srcset:srcset,src:original}).removeClass('imgloading').next('canvas').fadeOut("normal",function(){
                        $("<img />").next('canvas').remove();
                    });
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.on(settings.event, function() {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
                });
            }
        });

        /* Check if something appears when window is resized. */
        $window.on("resize", function() {
            update();
        });

        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if ((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)) {
            $window.on("pageshow", function(event) {
                if (event.originalEvent && event.originalEvent.persisted) {
                    elements.each(function() {
                        $(this).trigger("appear");
                    });
                }
            });
        }

        /* Force initial check if images should appear. */
        $(document).ready(function() {
            update();
        });

        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }

        return fold <= $(element).offset().top - settings.threshold;
    };

    $.rightoffold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }

        return fold >= $(element).offset().top + settings.threshold  + $(element).height();
    };

    $.leftofbegin = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };

    $.inviewport = function(element, settings) {
         return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
                !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
     };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.expr[":"], {
        "below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
        "above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
        "in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
        /* Maintain BC for couple of versions. */
        "above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
    });

})(jQuery, window, document);

$(function(){
	// 编辑器响应式表格
	var $meteditor_table=$(".met-editor table");
	if($meteditor_table.length) $meteditor_table.tablexys();
	// 编辑器图片处理
	var $metEditorImg=$(".met-editor img");
	if($metEditorImg.length){
		// 响应式图片
		// $(".met-editor [data-original]").each(function(index, el) {
  //           var thumbdir=$(this).data('original').replace(M['weburl'],'');
  //           thumbdir=M['weburl']+'include/thumb.php?dir='+thumbdir+'&x=';
  //           if(!$(this).attr('data-srcset') && ($(this).data('width')>=700 || $(this).attr('width')>=700)){
  //               var data_srcset=thumbdir+'450 450w,'+$(this).data('original'),
  //                   sizes="(max-width:450px) 450px";
  //               $(this).attr({'data-srcset':data_srcset,sizes:sizes});
  //           }
  //       });
		Breakpoints.get('xs').on({
			enter:function(){
				var editorimg_gallery_open=true;
				// 编辑器画廊
				$(".met-editor").each(function(){
					if($("img",this).length && !$(this).hasClass('no-gallery')){
						// 图片画廊参数设置
						var $self=$(this),
							imgsizeset=true;
						$("img",this).one('click',function(){
							if(imgsizeset){
								$self.find('img').each(function(){
		    						var original=$(this).data('original'),
		    							size='500x500';
		    						if($(this).data('width')){
		    							size=$(this).data('width')+'x'+$(this).data('height');
		    						}else if($(this).attr('width') && $(this).attr('height')){
		    							size=$(this).attr('width')+'x'+$(this).attr('height');
		    						}
									if(!($(this).parents('a').length && $(this).parents('a').find('img').length==1)) $(this).wrapAll('<a></a>');
									$(this).parents('a').attr({href:original,'data-size':size,'data-med':original,'data-med-size':size});
				    			});
				    			imgsizeset=false;
							}
			    			if(editorimg_gallery_open){
				    			$.initPhotoSwipeFromDOM('.met-editor');
								editorimg_gallery_open=false;
			    			}
			    		});
					}
				});
			}
		})
	}
});
/*!
 * M['weburl']      网站网址
 * M['lang']        网站语言
 * M['tem']         模板目录路径
 * M['classnow']    当前栏目ID
 * M['id']          当前页面ID
 * M['module']      当前页面所属模块
 * default_placeholder 开发者自定义默认图片延迟加载方式，'base64'：灰色背景；自定义背景图片路径；'blur'：图片高斯模糊；默认为'blur'
 * met_prevarrow,met_nextarrow slick插件翻页按钮自定义html
 * device_type       客户端判断（d：PC端，t：平板端，m：手机端）
 */
METUI_FUN['head_nav_met_27_2'] = {
    name:'head_nav_met_27_2',
    init: function() {
        var wh=$(window).height(),
        $metnav_fixed=$(".met-head.navbar-fixed-top head_nav_met_27_2"),
        $metnav_lang=METUI['head_nav_met_27_2'].find('.met-langlist'),
        $metnav_member=METUI['head_nav_met_27_2'].find('.navbar-toggler'),
        $met_navlist=METUI['head_nav_met_27_2'].find('.navlist');
        // 头部固定模式
        if($metnav_fixed.length){
        // 头部阴影
            var metnavShadow=function(){
                    if($metnav_fixed.offset().top>1){
                        $metnav_fixed.addClass("navbar-shadow");
                    }else{
                        $metnav_fixed.removeClass("navbar-shadow");
                    }
                };
            metnavShadow();
            $(window).scroll(function(){
                metnavShadow();
            });
            // 导航下拉菜单手机端最大高度
            $metnav_fixed.find('.navbar-collapse').css({'max-height':wh-$metnav_fixed.height()});
            if(device_type!='m'){
                // 下拉菜单二级栏目过多时三级栏目展示在二级栏目下面
                var $met_navlist_dropdown=$met_navlist.find('.dropdown'),
                    dropdownMaxh=function(dom){
                        if(!dom.hasClass('oya')){
                            setTimeout(function(){
                                var mh=wh-dom.position().top;
                                if(dom.outerHeight()>mh) dom.outerHeight(mh).addClass('oya scrollbar-beautify').find('.dropdown-menu').addClass('block box-shadow-none').prev('.dropdown-item').addClass('dropdown-a');
                            },0)
                        }
                    };
                //鼠标经过展开下拉菜单
                $met_navlist_dropdown.find('>.dropdown-toggle[data-hover]').parent('.dropdown').mouseover(function() {
                    dropdownMaxh($('>.dropdown-menu',this));
                });
                // 鼠标点击展开下拉菜单
                $met_navlist_dropdown.find('>.dropdown-toggle:not([data-hover])').one('click',function() {
                    dropdownMaxh($(this).next('.dropdown-menu'));
                });
            }
            // 下拉菜单背景遮罩
            $metnav_fixed.find('.navbar-toggler').click(function() {
                if(!$('.met-mask').length) $('body').append('<div class="met-mask"></div>');
                if($($(this).data('target')).is(':visible')){
                    $('body').removeClass('cover');
                    $('.met-mask').fadeOut();
                }else if(!$('body').hasClass('cover')){
                    $('body').addClass('cover');
                    $('.met-mask').fadeIn();
                }
            });
            $(document).on('click','.met-mask',function() {
                $('body').removeClass('cover');
                $('.met-mask').fadeOut();
                $metnav_fixed.find('.navbar-collapse').collapse('hide');
            });
        }

        if($met_navlist.length){
            // 导航点击跳转处理
            $met_navlist.find('.nav-link').click(function(){
                if(device_type=='d' && !Breakpoints.is('xs') && $(this).data("hover")){
                    if($(this).attr('target')=='_blank'){
                        window.open($(this).attr('href'));
                    }else{
                        location=$(this).attr('href');
                    }
                }
            });
            // 导航下拉菜单三级栏目展开处理
            if(device_type=='d'){
                if($met_navlist.find('.dropdown-submenu').length){
                    $met_navlist.find('.dropdown-submenu').hover(function(){
                        $(this).parent('.dropdown-menu').addClass('overflow-visible');
                    },function(){
                        $(this).parent('.dropdown-menu').removeClass('overflow-visible');
                    });
                }
            }else{
                if($met_navlist.find('.dropdown-submenu').length){
                    setTimeout(function(){
                        $met_navlist.find('.dropdown-submenu .dropdown-menu').addClass('block box-shadow-none').prev('.dropdown-item').addClass('dropdown-a');
                    },0)
                }
            }
            // 导航顶级栏目过多时换行处理
            var met_navlist_position=function(){
                if(!Breakpoints.is('xs') && $met_navlist.position().top>20){
                    $met_navlist.addClass('flex').parent().addClass('flex-navlist');
                    if($('body').hasClass('met-navfixed')) $('body').addClass('met-navfixed-navclamp');
                }else{
                    $met_navlist.removeClass('flex').parent().removeClass('flex-navlist');
                    if($('body').hasClass('met-navfixed')) $('body').removeClass('met-navfixed-navclamp');
                }
            };
            met_navlist_position();
            $(window).resize(function(){
                met_navlist_position();
            });
        }
        // 手机端头部会员中心与导航下拉菜单切换
        $metnav_member.click(function() {
            $(this).toggleClass('active');
            $(this).siblings('.navbar-toggler').removeClass('active');
            var $other_collapse=$($(this).siblings('.navbar-toggler').data('target'));
            if($other_collapse.hasClass('in')) $other_collapse.collapse('hide');
        });
        // 头部语言栏
        if($metnav_lang.length){
            // 语言栏弹窗模式处理
            $(document).on('show.bs.modal', '#met-langlist-modal', function(event) {
                $('.met-nav').addClass('header-zindex');
            });
            $(document).on('hidden.bs.modal', '#met-langlist-modal', function(event) {
                $('.met-nav').removeClass('header-zindex');
            });
        }
        // 处理导航过长
        if(device_type=='d'){
            if($('.two-menu').length){
                $('.two-menu').mousewheel(function(event,delta,deltaX,deltaY){
                    var dY=Math.ceil( $(this).position().top-deltaY*-120 );
                    if(dY>0) dY=0;
                    $(this).css({'transform':'translateY('+dY+'px)','transition':'0s'});
                    event.stopPropagation();
                    event.preventDefault();
                }).mouseleave(function(){
                    $(this).removeAttr('style');
                });
            }
        }
    },
    cntotc:function(){
            //简体繁体互换
            var b=$('.btn-cntotc');
        b.on('click', function(event) {
             var lang=$(this).attr('data-tolang');
  
         if (lang=='tc') {
            $('body').s2t();
            $(this).attr('data-tolang', 'cn');
            $(this).text('简体');
         } else if(lang=='cn') {
            $('body').t2s();
            $(this).attr('data-tolang', 'tc');
            $(this).text('繁體');
         }
      });
    }
};
var x = new metui(METUI_FUN['head_nav_met_27_2']);

METUI_FUN['banner_met_11_3'] = {
    name: 'banner_met_11_3',
    init: function() {
        if (METUI['banner_met_11_3'].length) {
            var img = METUI['banner_met_11_3'].find('.cover-image').eq(0),
        slide = METUI['banner_met_11_3'].find('.slick-slide');
        if(img.length>0){
            bh = img.data('height').split('|'),
            fade = img.data('fade'),
            autoplaySpeed = img.data('autoplayspeed'),
            speed = img.data('speed');
            img.imageloadFun(function() {
                for (var i = 0; i < bh.length; i++) {
                    if (bh[i] == 0) {
                        bh[i] = 'auto';
                    }
                }
                Breakpoints.on('md lg', {
                    enter: function() {
                        METUI['banner_met_11_3'].find('.cover-image').height(bh[0]);
                    }
                })
                Breakpoints.on('sm', {
                    enter: function() {
                        METUI['banner_met_11_3'].find('.cover-image').height(bh[1]);
                    }
                })
                Breakpoints.on('xs', {
                    enter: function() {
                        METUI['banner_met_11_3'].find('.cover-image').height(bh[2]);
                    }
                })

                var swipe = slick_arrows = true;
                if (device_type == 'd' && !Breakpoints.is('xs')) swipe = false;
                if (Breakpoints.is('xs')) slick_arrows = false;
                if (slide.length > 1) {
                    METUI['banner_met_11_3'].slick({
                        autoplay: true,
                        autoplaySpeed: autoplaySpeed,
                        pauseOnHover: false,
                        swipe: swipe,
                        prevArrow: '<a class="slick-prev" ><i></i></a>',
                        nextArrow: '<a class="slick-next"><i></i></a>',
                        lazyloadPrevNext: true,
                        dots: false,
                        fade: fade,
                        adaptiveHeight: true,
                        cssEase: 'ease',
                        speed: speed
                    }).on('setPosition', function(event, slick) {
                    METUI['banner_met_11_3'].find('.cover-image').css('display', 'block');
                    $('.banner_met_11_3 .slick-slide .banner-text').hide();
                    $('.banner_met_11_3 .slick-slide.slick-active .banner-text').show();
                    });

                }
            })
        }
        }
    }
};
var banner = metui(METUI_FUN['banner_met_11_3']);

/*own.js*/
/*!
 * M['weburl']      网站网址
 * M['lang']        网站语言
 * M['tem']         模板目录路径
 * M['classnow']    当前栏目ID
 * M['id']          当前页面ID
 * M['module']      当前页面所属模块
 * default_placeholder 开发者自定义默认图片延迟加载方式，'base64'：灰色背景；自定义背景图片路径；'blur'：图片高斯模糊；默认为'blur'
 * met_prevarrow,met_nextarrow slick插件翻页按钮自定义html
 * device_type       客户端判断（d：PC端，t：平板端，m：手机端）
 */
METUI_FUN['foot_info_met_16_3'] = {
    name:'foot_info_met_16_3',
    cntotc:function(){
            //简体繁体互换
            var b=METUI['foot_info_met_16_3'].find('.btn-cntotc');
            
        b.on('click', function(event) {
             var lang=$(this).attr('data-tolang');
         if (lang=='tc') {
            $('body').s2t();
            $(this).attr('data-tolang', 'cn');
            $(this).text('简体');
         } else if(lang=='cn') {
            $('body').t2s();
            $(this).attr('data-tolang', 'tc');
            $(this).text('繁體');
         }
      });
    }
};
var x = new metui(METUI_FUN['foot_info_met_16_3']);


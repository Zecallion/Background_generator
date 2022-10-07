const backgroundSong = document.getElementById("song");
const container = document.getElementById("container");
const header = document.getElementById("header");
const story = document.getElementById("story");
const button = document.getElementById("start");
let input = document.getElementsByClassName("active")[0];
let episodeCounter = 0;
const hikaye=`&nbsp&nbsp&nbsp&nbspYıllar önce, Anatolia isimli krallığın başında bir kral vardı. Zeki, çevik, güçlü ve
tecrübeli olan kral, onun ölümünden sonra tahta geçecek olan çocuğunun doğumundan 18 yıl sonra, çocuğunu
karşısına aldı. "${nickname.value}! Bu krallık yüzyıllarca sapasağlam süregeldi. Benim ebedi yolculuğum yakındır
bilirim. Artık tahta geçmenin, hakettiğini almanın, halkını korumanın ve hepsiden önemlisi öldükten
yüzyıllar sonra bile "Kralımız" olarak hatırlanmanı sağlayacak o hayatı yaşamanın zamanıdır. Krallık, halk,
ordular sana emanettir. "Anatolia" senindir artık." dedi.<br><br>&nbsp&nbsp&nbsp&nbspArtık eski kralın da
dediği gibi, zamanı geldi. Verdiğin kararlar sadece senin değil, krallığın, ordunun, halkının kaderini ve en
önemlisi dünyanın geleceğinin değiştirecek. Tacını taktın, babanın ömrü boyunca her savaşta kullandığı ve
asla yenilmediği kılıcını aldın ve krallığından dışarı ilk adımını bir kral olarak attın. Ordu, halk,
höylüler; hepsi önünde diz çöküyor.<br><br>&nbsp&nbsp&nbsp&nbsp"Tarih geleceği öngörebilenlerin savaş
alanıdır!"`;
const episode = [
    [
        "Verdiğin gemilerden gelmesi gereken kazanç kaybedildi. Ayrıca ordu için kullanılabilecek olan gemilerin sayısının azalması nedeniyle ordu gücü zayıfladı.", "Gemileri göndermekten vazgeçtin. İttifakta olduğumuz krallık olan Kuzey Machetus Krallığı bu durumdan hiç hoşnut değil. İleride gerçekleşebilecek olası bir savaşta bize yardım edecekleri hiç ihtimal dahilinde görünmüyor.", `<br><br><br>` + " Arkasya şehrinde bir takım isyan sesleri çıktığı haberi geldi. Kimliği bilinmeyen bazı örgütler köylerdeki çiftçileri ve ailelerini kışkırtmakta, kralı kötülemeye ve köylere zarar vermekteler. Şehir içerisindeki görevliler isyanı bastırmaya yetmeyecek gibi görünmekte. Eğer böyle devam eder ise hem hazineye zarar gelecek, hem de halkın güvenliği tehdit altında olmuş olacak. Ordunun bir kısmını Arkasya'ya yollayabiliriz ancak ordu gücünde azalma anlamına gelecek bu durum. Ancak bu sayede hem isyan batırılabilir hem de krallığa giren örgütlerin kimlikleri ve arkalarındakiler açığa çıkartılabilir." + `<br><br><br>` + " Seçim 1: Ordunun Bir Kısmını Gönder" + `<br>` + " Seçim 2: Bırakalım Görevliler Halletsin"
    ],
    [
        "Ordunun ufak bir kısmını Arkasya'ya gönderdin. Ordu gücünde azalma ve ordunun yol ve gider masrafları yüzünden hazinede azalma oldu. Ancak isyanı başlatan örgütün kimliğini ortaya çıkartmayı başardın. Örgütün arkasındaki krallık Catalistan çıktı. Bu kesinlikle barış anlaşmasının bozulması anlamına geliyor. Hatta bunu savaşa davet olarak bile anlayabiliriz.", "Arkasya'daki görevliler isyanı bastırmak için çok uğraştılar. İsyan yüzünden tarım ve hayvancılık çok darbe gördü. Bu durum hazineye gözle görülür ölçüde yansıdı. Halk durumdan şikayetçi. Tek bir güzel haber bulunmakta. Görevliler bir tane örgüt üyesini canlı olarak yakalamayı başardı ve isyanı bastırabildiler. Örgütün arkasında Catalistan Krallığı olduğunu itiraf etti.", `<br><br><br>` + "Savaş durumunda ne olacağı belli olmaz. Hangi krallığa nereden yardım geleceğine, ordunun gücüne, halkın desteğine ve krallığın hazinesine göre değişebilir. Yapabileceğimiz iki seçenek var gibi görünüyor. Birincisi soğuk savaş adı altında gizli görevler oluşturabiliriz. Bu sayede yüksek miktarlarda kayıp yaşamayı engelleyebiliriz. Ancak görev başarısız olursa ve açığa çıkarsak hamle hakkı onlara geçer. Bu durumda neler yapabileceklerini kestiremiyoruz. İkinci seçenek ise topyekün savaş ilan etmek Bu durumda iki krallıktan birinin savaş sonunda haritadan silineceği haricinde bir öngörümüz bulunmamakta." + `<br><br><br>` + " Seçim 1: Gizli Görevler Başlasın" + `<br>` + " Seçim 2: Topyekün Savaş İlan Edildi."
    ],
    [
        "", "",""
    ],
];
//özellikler buraya
let attributes = [
    para = 50000,
    ordu = 3,
    halk = 3,
    savas = 6,
    ittifak = true
];
function episodeMaker(episodeCounter, episodeScenario, lastScenario) {
    //Özelliklerin seçimlere göre değişme kısmı
    switch (episodeScenario) {
        case "Verdiğin gemilerden gelmesi gereken kazanç kaybedildi. Ayrıca ordu için kullanılabilecek olan gemilerin sayısının azalması nedeniyle ordu gücü zayıfladı.":
            attributes[0] -= 500;
            attributes[1] -= 1;
            break;
        case "Gemileri göndermekten vazgeçtin. İttifakta olduğumuz krallık olan Kuzey Machetus Krallığı bu durumdan hiç hoşnut değil. İleride gerçekleşebilecek olası bir savaşta bize yardım edecekleri hiç ihtimal dahilinde görünmüyor.":
            attributes[0] += 500;
            attributes[1] += 1;
            attributes[4] = false;
            break;
        case "Ordunun ufak bir kısmını Arkasya'ya gönderdin. Ordu gücünde azalma ve ordunun yol ve gider masrafları yüzünden hazinede azalma oldu. Ancak isyanı başlatan örgütün kimliğini ortaya çıkartmayı başardın. Örgütün arkasındaki krallık Catalistan çıktı. Bu kesinlikle barış anlaşmasının bozulması anlamına geliyor. Hatta bunu savaşa davet olarak bile anlayabiliriz.":
            attributes[0] -= 500;
            attributes[1] -= 1;
            attributes[2] += 1;
            break;
        case "Arkasya'daki görevliler isyanı bastırmak için çok uğraştılar. İsyan yüzünden tarım ve hayvancılık çok darbe gördü. Bu durum hazineye gözle görülür ölçüde yansıdı. Halk durumdan şikayetçi. Tek bir güzel haber bulunmakta. Görevliler bir tane örgüt üyesini canlı olarak yakalamayı başardı ve isyanı bastırabildiler. Örgütün arkasında Catalistan Krallığı olduğunu itiraf etti.":
            attributes[0] -= 1000;
            attributes[2] -= 1;
            break;

    }
    //Özelliklerin sınır altına ininde oyunun bitme kısmı
    if (attributes[0] <= 0) {
        alert("game over");
        return;
    }
    //Yeni bölüm oluşturma kısmı
    let episodeElement = document.createElement("div");
    episodeElement.classList.add("episode");
    container.appendChild(episodeElement);
    let episodeActive = document.getElementsByClassName("active")[0];
    if (episodeActive != undefined) {
        episodeActive.classList.remove("active");
    }
    let episode = document.getElementsByClassName("episode")[episodeCounter];
    let choose = document.createElement("input");
    choose.classList.add("active");
    episode.appendChild(document.createTextNode(episodeScenario));
    let ordu, halk, savas, ittifak;
    if (attributes[1] <= 1) {
        ordu = "Çok Kötü";
    }
    else if (attributes[1] == 2) {
        ordu = "Kötü";
    }
    else if (attributes[1] == 3) {
        ordu = "Ortalama";
    }
    else if (attributes[1] == 4) {
        ordu = "İyi";
    }
    else {
        ordu = "Mükemmel";
    }
    if (attributes[2] <= 1) {
        halk = "Çok Kötü";
    }
    else if (attributes[2] == 2) {
        halk = "Kötü";
    }
    else if (attributes[2] == 3) {
        halk = "Ortalama";
    }
    else if (attributes[2] == 4) {
        halk = "İyi";
    }
    else {
        halk = "Mükemmel";
    }
    if (attributes[3] <= 1) {
        savas = "Mağlubiyet";
    }
    else if (attributes[3] == 2) {
        savas = "Kötü";
    }
    else if (attributes[3] == 3) {
        savas = "Ortalama";
    }
    else if (attributes[3] == 4) {
        savas = "İyi";
    }
    else if (attributes[3] == 5) {
        savas = "Zafer"
    }
    else {
        savas = "Barışta";
    }
    if (attributes[4] == true) {
        ittifak = "Korunuyor";
    }
    else if (attributes[4] == false) {
        ittifak = "Bozuldu";
    }
    //hud kısmına değerleri yazdırma
    let results = document.getElementById("hud");
    results.innerHTML = `Hazine : ${attributes[0]} | Ordu : ${ordu} | Halk : ${halk} | İttifak Durumu : ${ittifak} | Savaş Durumu: ${savas}<hr><br>`;
    episode.innerHTML = episode.innerHTML + lastScenario + `<br><br>`;
    episode.appendChild(choose);
    choose.addEventListener("keypress", chooseControl);
}
//seçim girişinde yapılacaklar
function chooseControl(event) {
    if (event.keyCode === 13) {
        let choose = document.getElementsByClassName("active")[0];
        if (choose.value == "1") {
            episodeMaker(episodeCounter, episode[episodeCounter][0], episode[episodeCounter][2]);
            episodeCounter++;
            input.removeEventListener("keypress", chooseControl);
            choose.removeEventListener("keypress", chooseControl);
        }
        else if (choose.value == "2") {
            episodeMaker(episodeCounter, episode[episodeCounter][1], episode[episodeCounter][2]);
            episodeCounter++;
            input.removeEventListener("keypress", chooseControl);
            choose.removeEventListener("keypress", chooseControl);
        }
    }
}
function startTheGame() {
    // isim girişi
    let nickname = document.getElementById("nickname");
    if (nickname.value == "") {
        nickname.value = "Evlat";
    }
    let story = document.getElementsByClassName("story");
    let buttonStart = document.getElementsByClassName("start");
    story[1].innerHTML = hikaye;
    //hikaye kısmının başlaması
    buttonStart[0].classList.add("display");
    story[0].classList.remove("display");
    story[1].classList.remove("display");
    story[2].classList.remove("display");
    story[3].classList.remove("display");
    backgroundSong.play();
    backgroundSong.volume = 0.5;
}
button.addEventListener("click", startTheGame);
input.addEventListener("keypress", chooseControl);
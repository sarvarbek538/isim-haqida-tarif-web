const nameInput = document.getElementById('nameInput');
const searchBtn = document.getElementById('searchBtn');
const loading = document.getElementById('loading');
const result = document.getElementById('result');

// Ismlar va tariflari
const namesData = {

    Yulduzxon: "Yulduzxon ismi samoviy nur va go‘zallikni ifodalaydi. Yulduz so‘zi uning porlaydigan va o‘ziga jalb qiluvchi go‘zalligini, xon esa ulug‘vorlik, sharaf va yuqori mavqeni anglatadi. Yulduzxon - osmondagi eng yorqin yulduz kabi, har doim boshqalarni o‘ziga qarata oladi, uning atrofidagi dunyo nurga to‘ladi.",
    Gulnoza: "Glunoza ismi go‘zallik, nafislik va o‘ziga xos jozibadorlikni ifodalaydi. Gul so‘zi uning go‘zalligi va beg‘uborligini anglatadi, noza esa nafosat va jozibadorlikni bildiradi.",
    Dilnoza: "Dilnoza - Yurakka yaqin, nafis va noziklik timsoli bo‘lgan ism. Unda latofat va samimiyat mujassam.",
    Madina: "Madina - Muqaddas shahar nomi bilan atalgan, poklik va tinchlik ramzi.",
    Zaynab: "Zaynab - Jozibadorlik va latofatni ifodalaydigan klassik va zamonaviy ism.",
    Laylo: "Laylo - Kechaning go‘zalligini va sirli hislarni ifodalaydi.",
    Malika: "Malika - Qirollik va ulug‘vorlik maʼnosini aks ettiruvchi ism.",
    Shahzoda: "Shahzoda - Qirolning qizi, ulug‘vorlik va nazokat ramzi.",
    Sevinch: "Sevinch - Xursandchilik va baxtni ifodalaydigan samimiy ism.",
    Nafisa: "Nafisa - Nodir va qimmatbaho narsalarni ifodalaydigan nafis ism.",
    Mohinur: "Mohinur - Oy kabi nurli va go‘zal, sokinlik va tinchlik ramzi.",
    Nigina: "Nigina - Ko‘zning nuri, qadri baland va nazokatli ism.",
    Ruxsora: "Ruxsora - Go‘zallik va jozibadorlikni aks ettiruvchi nafis ism.",
    Zebiniso: "Zebiniso - Bezak va nafosat timsoli, klassik va o‘ziga xos ism.",
    Oyxon: "Oyxon - Oy kabi go‘zal va sokinlikni aks ettiruvchi sharqona ism.",
    Sanam: "Sanam - Sevgining ma'naviy ramzi, dilga yaqin nafis ism.",
    Ozoda: "Ozoda - Tozalik va samimiyatni ifodalaydigan zamonaviy ism.",
    Muhlisa: "Muhlisa - Sadoqat va samimiyatga ega shaxslarni ifodalaydigan ism.",
    Yulduz: "Yulduz - Osmondagi eng yorqin yulduzdek porlaydigan ism.",
    Munira: "Munira - Yorqinlik va nur taratadigan ma'nodagi nafis ism.",
    Shohista: "Shohista - Go‘zallik va munosiblikni ifodalaydigan ism.",
    Gulchehra: "Gulchehra - Gul kabi go‘zal yuzni ifodalaydigan ma’nodor ism.",
    Aziza: "Aziza - Ulug‘langan va qadrlangan, mustahkam ma’noli ism.",
    Xurshida: "Xurshida - Quyoshning iliq nuri va hayot quvonchini ifodalaydi.",
    Surayo: "Surayo - Yulduzlar jamlangan, osmon go‘zalligini ifodalaydigan ism.",
    Komila: "Komila - Yetuklik va mukammallikni aks ettiruvchi sharqona ism.",
    Alisher: "Alisher - Adolat va rahmdillik timsoli, tarixiy buyuk ism.",
    Jasur: "Jasur - Qahramonlik va dadillikni ifodalaydigan kuchli ism.",
    Bobur: "Bobur - Yo‘lbarsday jasur va iroda kuchiga ega tarixiy ism.",
    Amir: "Amir - Rahbarlik va ulug‘vorlikni ifodalaydigan kuchli ism.",
    Muhammad: "Muhammad - Maqtovga sazovor, dunyodagi eng mashhur ismlardan biri.",
    Islom: "Islom - Tinchlik va diniy poklikni aks ettiruvchi mazmunli ism."
};

searchBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (!name) {
        result.textContent = "Iltimos, ismni kiriting!";
        return;
    }

    // Loading ko‘rsatish
    result.textContent = "";
    loading.style.display = 'inline-block'; // Loading ko'rsatiladi

    // Loadingdan keyin natijani chiqarish
    setTimeout(() => {
        loading.style.display = 'none'; // Loadingni yashirish
        const description = namesData[name] || `${name} ismi haqida maʼlumot mavjud emas.`;
        result.textContent = description;
    }, 2000); // 2 soniya kutish
});
// Data soal untuk semua mata pelajaran
const quizData = {
    matematika: {
        title: "Matematika Dasar",
        description: "Quiz tentang konsep dasar matematika dan logika",
        timeLimit: 15, // dalam menit
        questions: [
            {
                id: 1,
                question: "Berapakah hasil dari 3² + 4²?",
                options: ["7", "12", "25", "49"],
                correctAnswer: 2,
                explanation: "3² = 9, 4² = 16, maka 9 + 16 = 25"
            },
            {
                id: 2,
                question: "Jika x = 5 dan y = 3, berapakah nilai dari 2x + 3y?",
                options: ["13", "16", "19", "22"],
                correctAnswer: 2,
                explanation: "2(5) + 3(3) = 10 + 9 = 19"
            },
            {
                id: 3,
                question: "Berapakah akar kuadrat dari 144?",
                options: ["10", "11", "12", "13"],
                correctAnswer: 2,
                explanation: "12 × 12 = 144, jadi akar kuadrat dari 144 adalah 12"
            },
            {
                id: 4,
                question: "Jika sebuah segitiga memiliki alas 8 cm dan tinggi 6 cm, berapakah luasnya?",
                options: ["24 cm²", "32 cm²", "48 cm²", "54 cm²"],
                correctAnswer: 0,
                explanation: "Luas segitiga = ½ × alas × tinggi = ½ × 8 × 6 = 24 cm²"
            },
            {
                id: 5,
                question: "Berapakah hasil dari 15% dari 200?",
                options: ["15", "20", "25", "30"],
                correctAnswer: 3,
                explanation: "15% dari 200 = (15/100) × 200 = 0.15 × 200 = 30"
            },
            {
                id: 6,
                question: "Berapakah nilai dari π (pi) hingga dua angka desimal?",
                options: ["3.12", "3.14", "3.16", "3.18"],
                correctAnswer: 1,
                explanation: "Nilai π adalah sekitar 3.14159, jadi hingga dua desimal adalah 3.14"
            },
            {
                id: 7,
                question: "Jika 2x - 5 = 11, berapakah nilai x?",
                options: ["3", "6", "8", "10"],
                correctAnswer: 2,
                explanation: "2x - 5 = 11 → 2x = 16 → x = 8"
            },
            {
                id: 8,
                question: "Berapakah hasil dari 7! (7 faktorial)?",
                options: ["5040", "720", "40320", "362880"],
                correctAnswer: 0,
                explanation: "7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040"
            },
            {
                id: 9,
                question: "Jika sebuah lingkaran memiliki jari-jari 7 cm, berapakah kelilingnya? (Gunakan π = 22/7)",
                options: ["22 cm", "44 cm", "66 cm", "88 cm"],
                correctAnswer: 1,
                explanation: "Keliling = 2πr = 2 × (22/7) × 7 = 44 cm"
            },
            {
                id: 10,
                question: "Berapakah hasil dari log₁₀100?",
                options: ["1", "2", "10", "100"],
                correctAnswer: 1,
                explanation: "log₁₀100 = 2 karena 10² = 100"
            },
            {
                id: 11,
                question: "Berapakah hasil dari 3⁴?",
                options: ["12", "27", "64", "81"],
                correctAnswer: 3,
                explanation: "3⁴ = 3 × 3 × 3 × 3 = 81"
            },
            {
                id: 12,
                question: "Jika a = 4 dan b = 3, berapakah nilai dari a² + b²?",
                options: ["7", "12", "25", "49"],
                correctAnswer: 2,
                explanation: "4² + 3² = 16 + 9 = 25"
            },
            {
                id: 13,
                question: "Berapakah hasil dari 0.75 dinyatakan dalam pecahan paling sederhana?",
                options: ["1/4", "1/2", "3/4", "4/5"],
                correctAnswer: 2,
                explanation: "0.75 = 75/100 = 3/4"
            },
            {
                id: 14,
                question: "Jika sudut A dan sudut B adalah sudut pelurus, dan sudut A = 75°, berapakah sudut B?",
                options: ["15°", "75°", "105°", "180°"],
                correctAnswer: 2,
                explanation: "Sudut pelurus berjumlah 180°, jadi B = 180° - 75° = 105°"
            },
            {
                id: 15,
                question: "Berapakah hasil dari √64 + √81?",
                options: ["15", "17", "19", "21"],
                correctAnswer: 1,
                explanation: "√64 = 8, √81 = 9, jadi 8 + 9 = 17"
            },
            {
                id: 16,
                question: "Jika 5x = 25, berapakah nilai x?",
                options: ["2", "3", "4", "5"],
                correctAnswer: 3,
                explanation: "5x = 25 → x = 25/5 = 5"
            },
            {
                id: 17,
                question: "Berapakah rata-rata dari angka 10, 20, 30, 40, dan 50?",
                options: ["25", "30", "35", "40"],
                correctAnswer: 1,
                explanation: "(10+20+30+40+50)/5 = 150/5 = 30"
            },
            {
                id: 18,
                question: "Jika sebuah persegi memiliki sisi 12 cm, berapakah kelilingnya?",
                options: ["24 cm", "36 cm", "48 cm", "144 cm"],
                correctAnswer: 2,
                explanation: "Keliling persegi = 4 × sisi = 4 × 12 = 48 cm"
            },
            {
                id: 19,
                question: "Berapakah hasil dari 2³ × 2²?",
                options: ["2⁵", "2⁶", "4⁵", "4⁶"],
                correctAnswer: 0,
                explanation: "2³ × 2² = 2^(3+2) = 2⁵ = 32"
            },
            {
                id: 20,
                question: "Jika harga sebuah barang adalah Rp 50.000 dan mendapat diskon 20%, berapakah harga setelah diskon?",
                options: ["Rp 30.000", "Rp 35.000", "Rp 40.000", "Rp 45.000"],
                correctAnswer: 2,
                explanation: "Diskon = 20% × 50.000 = 10.000, harga setelah diskon = 50.000 - 10.000 = 40.000"
            }
        ]
    },
    
    "bahasa-inggris": {
        title: "Bahasa Inggris",
        description: "Quiz tentang grammar, vocabulary, dan reading comprehension",
        timeLimit: 15,
        questions: [
            {
                id: 1,
                question: "What is the plural form of 'child'?",
                options: ["childs", "children", "childes", "child"],
                correctAnswer: 1,
                explanation: "The plural of 'child' is 'children'."
            },
            {
                id: 2,
                question: "Choose the correct sentence:",
                options: ["She don't like apples.", "She doesn't likes apples.", "She doesn't like apples.", "She not like apples."],
                correctAnswer: 2,
                explanation: "For third person singular (she), we use 'doesn't' followed by the base form of the verb: 'doesn't like'."
            },
            {
                id: 3,
                question: "What is the synonym of 'happy'?",
                options: ["Sad", "Joyful", "Angry", "Tired"],
                correctAnswer: 1,
                explanation: "'Joyful' is a synonym of 'happy'."
            },
            {
                id: 4,
                question: "Which word is spelled correctly?",
                options: ["Recieve", "Receive", "Recieve", "Receeve"],
                correctAnswer: 1,
                explanation: "'Receive' is the correct spelling."
            },
            {
                id: 5,
                question: "What is the past tense of 'go'?",
                options: ["Goed", "Went", "Gone", "Goes"],
                correctAnswer: 1,
                explanation: "The past tense of 'go' is 'went'."
            },
            {
                id: 6,
                question: "Which sentence is in the present continuous tense?",
                options: ["I eat breakfast.", "I ate breakfast.", "I am eating breakfast.", "I have eaten breakfast."],
                correctAnswer: 2,
                explanation: "'I am eating breakfast' uses the present continuous tense (am + verb-ing)."
            },
            {
                id: 7,
                question: "What is the opposite of 'expensive'?",
                options: ["Costly", "Cheap", "Valuable", "Priceless"],
                correctAnswer: 1,
                explanation: "The opposite of 'expensive' is 'cheap'."
            },
            {
                id: 8,
                question: "Which word is a noun?",
                options: ["Run", "Beautiful", "Quickly", "Happiness"],
                correctAnswer: 3,
                explanation: "'Happiness' is a noun (a thing)."
            },
            {
                id: 9,
                question: "Choose the correct question form:",
                options: ["Where you live?", "Where do you live?", "Where does you live?", "Where are you live?"],
                correctAnswer: 1,
                explanation: "For questions in present simple tense, we use 'do/does' + subject + base verb: 'Where do you live?'"
            },
            {
                id: 10,
                question: "What does 'benevolent' mean?",
                options: ["Selfish", "Kind", "Angry", "Intelligent"],
                correctAnswer: 1,
                explanation: "'Benevolent' means kind and generous."
            },
            {
                id: 11,
                question: "Which sentence is correct?",
                options: ["The cat is on the table.", "The cat are on the table.", "The cat am on the table.", "The cat be on the table."],
                correctAnswer: 0,
                explanation: "'The cat' is singular, so we use 'is'."
            },
            {
                id: 12,
                question: "What is the comparative form of 'good'?",
                options: ["Gooder", "Better", "More good", "Best"],
                correctAnswer: 1,
                explanation: "The comparative form of 'good' is 'better'."
            },
            {
                id: 13,
                question: "Which word is a verb?",
                options: ["House", "Beautiful", "Run", "Quickly"],
                correctAnswer: 2,
                explanation: "'Run' is a verb (an action)."
            },
            {
                id: 14,
                question: "What is the past participle of 'write'?",
                options: ["Wrote", "Written", "Writed", "Writing"],
                correctAnswer: 1,
                explanation: "The past participle of 'write' is 'written'."
            },
            {
                id: 15,
                question: "Choose the correct possessive form:",
                options: ["The dogs bone", "The dog's bone", "The dogs' bone", "The dogs's bone"],
                correctAnswer: 1,
                explanation: "For singular possessive, we add 's: 'the dog's bone'."
            },
            {
                id: 16,
                question: "What does 'ubiquitous' mean?",
                options: ["Rare", "Present everywhere", "Beautiful", "Expensive"],
                correctAnswer: 1,
                explanation: "'Ubiquitous' means present, appearing, or found everywhere."
            },
            {
                id: 17,
                question: "Which is the correct passive voice sentence?",
                options: ["The book read by John.", "The book is read by John.", "John reads the book.", "The book reading by John."],
                correctAnswer: 1,
                explanation: "The correct passive voice is 'The book is read by John.'"
            },
            {
                id: 18,
                question: "What is the plural of 'mouse' (the animal)?",
                options: ["Mouses", "Mice", "Mouse", "Mices"],
                correctAnswer: 1,
                explanation: "The plural of 'mouse' (animal) is 'mice'."
            },
            {
                id: 19,
                question: "Which sentence uses the future tense?",
                options: ["I will go to the market tomorrow.", "I go to the market.", "I went to the market.", "I have gone to the market."],
                correctAnswer: 0,
                explanation: "'I will go' uses the future tense with 'will'."
            },
            {
                id: 20,
                question: "What is the meaning of 'philanthropist'?",
                options: ["A person who hates people", "A person who loves humanity and donates to charity", "A philosopher", "A scientist"],
                correctAnswer: 1,
                explanation: "A philanthropist is a person who seeks to promote the welfare of others, especially by donating money to good causes."
            }
        ]
    },
    
    ips: {
        title: "Ilmu Pengetahuan Sosial",
        description: "Quiz tentang sejarah, geografi, dan ekonomi",
        timeLimit: 15,
        questions: [
            {
                id: 1,
                question: "Siapa proklamator kemerdekaan Indonesia?",
                options: ["Soekarno-Hatta", "Soeharto-Habibie", "Sjafruddin-Sutan", "Tan Malaka-Sjahrir"],
                correctAnswer: 0,
                explanation: "Soekarno dan Hatta adalah proklamator kemerdekaan Indonesia."
            },
            {
                id: 2,
                question: "Apa ibu kota negara Indonesia?",
                options: ["Jakarta", "Surabaya", "Bandung", "Medan"],
                correctAnswer: 0,
                explanation: "Jakarta adalah ibu kota negara Indonesia."
            },
            {
                id: 3,
                question: "Kapan Indonesia merdeka?",
                options: ["17 Agustus 1945", "27 Desember 1949", "1 Juni 1945", "28 Oktober 1928"],
                correctAnswer: 0,
                explanation: "Indonesia merdeka pada 17 Agustus 1945."
            },
            {
                id: 4,
                question: "Apa nama mata uang Indonesia?",
                options: ["Rupiah", "Ringgit", "Dollar", "Peso"],
                correctAnswer: 0,
                explanation: "Mata uang Indonesia adalah Rupiah."
            },
            {
                id: 5,
                question: "Siapa presiden pertama Indonesia?",
                options: ["Soekarno", "Soeharto", "B.J. Habibie", "Megawati"],
                correctAnswer: 0,
                explanation: "Soekarno adalah presiden pertama Indonesia."
            },
            {
                id: 6,
                question: "Apa nama benua terbesar di dunia?",
                options: ["Asia", "Afrika", "Amerika", "Eropa"],
                correctAnswer: 0,
                explanation: "Asia adalah benua terbesar di dunia."
            },
            {
                id: 7,
                question: "Apa yang dimaksud dengan inflasi?",
                options: ["Kenaikan harga barang secara umum", "Penurunan harga barang", "Kenaikan nilai mata uang", "Penurunan nilai ekspor"],
                correctAnswer: 0,
                explanation: "Inflasi adalah kenaikan harga barang dan jasa secara umum dan terus-menerus."
            },
            {
                id: 8,
                question: "Siapa penemu benua Amerika?",
                options: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "James Cook"],
                correctAnswer: 0,
                explanation: "Christopher Columbus dianggap sebagai penemu benua Amerika (tahun 1492)."
            },
            {
                id: 9,
                question: "Apa nama samudera terluas di dunia?",
                options: ["Samudera Pasifik", "Samudera Atlantik", "Samudera Hindia", "Samudera Arktik"],
                correctAnswer: 0,
                explanation: "Samudera Pasifik adalah samudera terluas di dunia."
            },
            {
                id: 10,
                question: "Apa yang dimaksud dengan demokrasi?",
                options: ["Pemerintahan oleh rakyat", "Pemerintahan oleh raja", "Pemerintahan oleh militer", "Pemerintahan oleh partai tunggal"],
                correctAnswer: 0,
                explanation: "Demokrasi adalah sistem pemerintahan di mana kekuasaan berada di tangan rakyat."
            },
            {
                id: 11,
                question: "Apa nama gunung tertinggi di Indonesia?",
                options: ["Puncak Jaya", "Kerinci", "Rinjani", "Semeru"],
                correctAnswer: 0,
                explanation: "Puncak Jaya (4.884 mdpl) adalah gunung tertinggi di Indonesia."
            },
            {
                id: 12,
                question: "Siapa yang menciptakan lagu Indonesia Raya?",
                options: ["W.R. Supratman", "Cornel Simanjuntak", "Ismail Marzuki", "Gesang"],
                correctAnswer: 0,
                explanation: "Wage Rudolf Supratman adalah pencipta lagu Indonesia Raya."
            },
            {
                id: 13,
                question: "Apa nama sungai terpanjang di Indonesia?",
                options: ["Sungai Kapuas", "Sungai Mahakam", "Sungai Barito", "Sungai Musi"],
                correctAnswer: 0,
                explanation: "Sungai Kapuas di Kalimantan Barat adalah sungai terpanjang di Indonesia (1.143 km)."
            },
            {
                id: 14,
                question: "Apa ibukota provinsi Jawa Barat?",
                options: ["Bandung", "Jakarta", "Semarang", "Surabaya"],
                correctAnswer: 0,
                explanation: "Bandung adalah ibukota provinsi Jawa Barat."
            },
            {
                id: 15,
                question: "Apa yang dimaksud dengan urbanisasi?",
                options: ["Perpindahan penduduk dari desa ke kota", "Perpindahan penduduk dari kota ke desa", "Perpindahan penduduk antar negara", "Pertumbuhan penduduk alami"],
                correctAnswer: 0,
                explanation: "Urbanisasi adalah perpindahan penduduk dari desa ke kota."
            },
            {
                id: 16,
                question: "Siapa pahlawan nasional dari Aceh?",
                options: ["Cut Nyak Dien", "Pangeran Diponegoro", "Imam Bonjol", "Sultan Hasanuddin"],
                correctAnswer: 0,
                explanation: "Cut Nyak Dien adalah pahlawan nasional dari Aceh."
            },
            {
                id: 17,
                question: "Apa nama danau terbesar di Indonesia?",
                options: ["Danau Toba", "Danau Singkarak", "Danau Poso", "Danau Sentani"],
                correctAnswer: 0,
                explanation: "Danau Toba di Sumatera Utara adalah danau terbesar di Indonesia."
            },
            {
                id: 18,
                question: "Apa yang dimaksud dengan ekspor?",
                options: ["Pengiriman barang ke luar negeri", "Pembelian barang dari luar negeri", "Perdagangan dalam negeri", "Investasi asing"],
                correctAnswer: 0,
                explanation: "Ekspor adalah pengiriman barang ke luar negeri untuk dijual."
            },
            {
                id: 19,
                question: "Siapa penulis novel 'Laskar Pelangi'?",
                options: ["Andrea Hirata", "Pramoedya Ananta Toer", "Dee Lestari", "Tere Liye"],
                correctAnswer: 0,
                explanation: "Andrea Hirata adalah penulis novel 'Laskar Pelangi'."
            },
            {
                id: 20,
                question: "Apa nama pulau terbesar di Indonesia?",
                options: ["Papua", "Kalimantan", "Sumatera", "Sulawesi"],
                correctAnswer: 0,
                explanation: "Pulau Papua adalah pulau terbesar di Indonesia (bagian barat)."
            }
        ]
    },
    
    pemrograman: {
        title: "Dasar Pemrograman",
        description: "Quiz tentang dasar-dasar pemrograman dan algoritma",
        timeLimit: 15,
        questions: [
            {
                id: 1,
                question: "Apa singkatan dari HTML?",
                options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
                correctAnswer: 0,
                explanation: "HTML adalah singkatan dari Hyper Text Markup Language."
            },
            {
                id: 2,
                question: "Apa fungsi dari perintah 'printf' dalam bahasa C?",
                options: ["Membaca input", "Menampilkan output", "Mendeklarasikan variabel", "Melakukan perulangan"],
                correctAnswer: 1,
                explanation: "Fungsi 'printf' dalam bahasa C digunakan untuk menampilkan output ke layar."
            },
            {
                id: 3,
                question: "Apa yang dimaksud dengan algoritma?",
                options: ["Langkah-langkah logis untuk menyelesaikan masalah", "Bahasa pemrograman", "Jenis data", "Struktur data"],
                correctAnswer: 0,
                explanation: "Algoritma adalah langkah-langkah logis dan sistematis untuk menyelesaikan suatu masalah."
            },
            {
                id: 4,
                question: "Manakah yang bukan termasuk bahasa pemrograman?",
                options: ["Python", "Java", "Photoshop", "JavaScript"],
                correctAnswer: 2,
                explanation: "Photoshop adalah software pengedit gambar, bukan bahasa pemrograman."
            },
            {
                id: 5,
                question: "Apa yang dimaksud dengan variabel dalam pemrograman?",
                options: ["Tempat penyimpanan data", "Jenis data", "Fungsi", "Struktur kontrol"],
                correctAnswer: 0,
                explanation: "Variabel adalah tempat penyimpanan data yang nilainya dapat berubah selama program dijalankan."
            },
            {
                id: 6,
                question: "Apa fungsi dari perulangan (loop) dalam pemrograman?",
                options: ["Mengulang eksekusi kode", "Menyimpan data", "Menampilkan output", "Menerima input"],
                correctAnswer: 0,
                explanation: "Perulangan (loop) digunakan untuk mengulang eksekusi suatu blok kode selama kondisi tertentu terpenuhi."
            },
            {
                id: 7,
                question: "Apa output dari kode berikut: console.log(2 + 3 * 2);",
                options: ["10", "8", "7", "12"],
                correctAnswer: 1,
                explanation: "Perkalian dilakukan sebelum penjumlahan: 3 * 2 = 6, kemudian 2 + 6 = 8."
            },
            {
                id: 8,
                question: "Apa yang dimaksud dengan bug dalam pemrograman?",
                options: ["Kesalahan atau cacat dalam program", "Jenis serangga", "Fitur program", "Alat debugging"],
                correctAnswer: 0,
                explanation: "Bug adalah kesalahan atau cacat dalam program yang menyebabkan perilaku yang tidak diinginkan."
            },
            {
                id: 9,
                question: "Manakah yang termasuk tipe data integer?",
                options: ["42", "'42'", "42.0", "true"],
                correctAnswer: 0,
                explanation: "42 adalah bilangan bulat (integer), sedangkan '42' adalah string, 42.0 adalah float, dan true adalah boolean."
            },
            {
                id: 10,
                question: "Apa fungsi dari komentar dalam kode program?",
                options: ["Memberi penjelasan untuk programmer", "Menjalankan kode", "Menyimpan data", "Menampilkan output"],
                correctAnswer: 0,
                explanation: "Komentar digunakan untuk memberi penjelasan tentang kode program agar mudah dipahami oleh programmer lain."
            },
            {
                id: 11,
                question: "Apa singkatan dari SQL?",
                options: ["Structured Query Language", "Simple Question Language", "Structured Question Language", "Simple Query Language"],
                correctAnswer: 0,
                explanation: "SQL adalah singkatan dari Structured Query Language."
            },
            {
                id: 12,
                question: "Apa yang dimaksud dengan array?",
                options: ["Kumpulan data dengan tipe yang sama", "Fungsi", "Variabel tunggal", "Struktur kontrol"],
                correctAnswer: 0,
                explanation: "Array adalah struktur data yang menyimpan kumpulan elemen dengan tipe data yang sama."
            },
            {
                id: 13,
                question: "Manakah yang termasuk operator perbandingan?",
                options: ["==", "=", "+", "&&"],
                correctAnswer: 0,
                explanation: "'==' adalah operator perbandingan (sama dengan), sedangkan '=' adalah operator penugasan, '+' adalah operator aritmatika, dan '&&' adalah operator logika."
            },
            {
                id: 14,
                question: "Apa fungsi dari conditional statement (if-else)?",
                options: ["Menjalankan kode berdasarkan kondisi", "Mengulang kode", "Menyimpan data", "Mendefinisikan fungsi"],
                correctAnswer: 0,
                explanation: "Conditional statement (if-else) digunakan untuk menjalankan blok kode tertentu berdasarkan kondisi yang diberikan."
            },
            {
                id: 15,
                question: "Apa yang dimaksud dengan function dalam pemrograman?",
                options: ["Blok kode yang dapat dipanggil berulang kali", "Variabel", "Tipe data", "Operator"],
                correctAnswer: 0,
                explanation: "Function adalah blok kode yang dirancang untuk melakukan tugas tertentu dan dapat dipanggil berulang kali."
            },
            {
                id: 16,
                question: "Apa output dari kode berikut dalam Python: print(len('Hello'))",
                options: ["5", "Hello", "H", "6"],
                correctAnswer: 0,
                explanation: "Fungsi len() menghitung panjang string 'Hello' yang memiliki 5 karakter."
            },
            {
                id: 17,
                question: "Apa yang dimaksud dengan syntax error?",
                options: ["Kesalahan penulisan kode", "Kesalahan logika", "Kesalahan runtime", "Kesalahan kompilasi"],
                correctAnswer: 0,
                explanation: "Syntax error adalah kesalahan dalam penulisan kode yang melanggar aturan sintaks bahasa pemrograman."
            },
            {
                id: 18,
                question: "Apa singkatan dari CSS?",
                options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Colorful Style Sheets"],
                correctAnswer: 0,
                explanation: "CSS adalah singkatan dari Cascading Style Sheets."
            },
            {
                id: 19,
                question: "Apa yang dimaksud dengan IDE?",
                options: ["Integrated Development Environment", "International Development Environment", "Integrated Design Environment", "Internet Development Environment"],
                correctAnswer: 0,
                explanation: "IDE adalah singkatan dari Integrated Development Environment, yaitu software untuk membantu pengembangan aplikasi."
            },
            {
                id: 20,
                question: "Manakah yang termasuk bahasa pemrograman berorientasi objek?",
                options: ["Java", "C", "Assembly", "HTML"],
                correctAnswer: 0,
                explanation: "Java adalah bahasa pemrograman berorientasi objek, sedangkan C dan Assembly adalah bahasa prosedural, dan HTML adalah markup language."
            }
        ]
    }
};
export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Muhamad Hilmi Islamudin',
            child: 'Putra ke dua',
            father: 'Muslih S.pd.i',
            mother: 'Umi Salamah',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Indri Mulyani',
            child: 'Putri ke 4',
            father: 'Syarifudin',
            mother: 'Ade Sumiarsih',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'Desember',
            date: '21',
            day: 'Minggu',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2025',
            month: 'Desember',
            date: '21',
            day: 'Minggu',
            hours: {
                start: '11.00',
                finish: 'Selesai'
            }
        },
        address: 'Kp. Sukaresik, RT 01/ RW 02, Desa.Sukaharja, Kec.Ciawi, Kab.Tasikmalaya, Jawa Barat '
    },

    link: {
        calendar: 'https://calendar.app.google/HQfcddUfSuSu1FDu9',
        map: 'https://maps.app.goo.gl/uXbfKWLasoYp3cKA8',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Indri Mulyani',
            icon: './src/assets/images/bca.png',
            rekening: '0630043191'
        },
        {
            id: 2,
            name: 'Muhamad Hilmy',
            icon: './src/assets/images/bri.png',
            rekening: '155301003879505'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbzP7bcmx4uiDThlC9lRAaFzYeiLHDUh5Ghv_VXbTA2fabTZ1QG3O6dUjHW6tvogehOy/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}

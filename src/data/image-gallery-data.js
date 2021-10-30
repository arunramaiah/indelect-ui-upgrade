const images = [
    { 
        id: 0,
        location: "../../assets/shimadzu/1.png",
        title: "Radiography System",
        manufacturer: "Shimadzu"
    },
    { 
        id: 1,
        location: "../../assets/shimadzu/2.png",
        title: "Radiography System",
        manufacturer: "Shimadzu"
    },
    { 
        id: 2,
        location: "../../assets/shimadzu/3.png",
        title: "Radiography System",
        manufacturer: "Shimadzu"
    },
    { 
        id: 3,
        location: "../../assets/shimadzu/4.png",
        title: "C-Arm",
        manufacturer: "Shimadzu"
    },
    { 
        id: 4,
        location: "../../assets/shimadzu/5.png",
        title: "C-Arm",
        manufacturer: "Shimadzu"
    },
    { 
        id: 5,
        location: "../../assets/shimadzu/6.png",
        title: "C-Arm",
        manufacturer: "Shimadzu"
    },
    { 
        id: 6,
        location: "../../assets/shimadzu/7.png",
        title: "C-Arm",
        manufacturer: "Shimadzu"
    },
    { 
        id: 7,
        location: "../../assets/shimadzu/8.png",
        title: "Mobile X-Ray",
        manufacturer: "Shimadzu"
    },
    { 
        id: 8,
        location: "../../assets/shimadzu/9.png",
        title: "Mobile X-Ray",
        manufacturer: "Shimadzu"
    },
    { 
        id: 9,
        location: "../../assets/shimadzu/10.png",
        title: "Mobile X-Ray",
        manufacturer: "Shimadzu"
    },
    { 
        id: 10,
        location: "../../assets/shimadzu/11.png",
        title: "Mobile X-Ray",
        manufacturer: "Shimadzu"
    },
    { 
        id: 11,
        location: "../../assets/shimadzu/12.png",
        title: "Mobile X-Ray",
        manufacturer: "Shimadzu"
    },
    { 
        id: 12,
        location: "../../assets/shimadzu/13.png",
        title: "Mobile X-Ray",
        manufacturer: "Shimadzu"
    },
    { 
        id: 13,
        location: "../../assets/shimadzu/14.png",
        title: "Mobile X-Ray",
        manufacturer: "Shimadzu"
    },
    { 
        id: 14,
        location: "../../assets/shimadzu/15.png",
        title: "Mobile X-Ray",
        manufacturer: "Shimadzu"
    },
    { 
        id: 15,
        location: "../../assets/shimadzu/16.png",
        title: "Mobile X-Ray",
        manufacturer: "Shimadzu"
    },
    { 
        id: 16,
        location: "../../assets/shimadzu/17.png",
        title: "Mobile X-Ray",
        manufacturer: "Shimadzu"
    },
    { 
        id: 17,
        location: "../../assets/shimadzu/18.png",
        title: "Mobile X-Ray",
        manufacturer: "Shimadzu"
    },
    { 
        id: 18,
        location: "../../assets/shimadzu/19.png",
        title: "Mobile X-Ray",
        manufacturer: "Shimadzu"
    },
    { 
        id: 19,
        location: "../../assets/shimadzu/20.png",
        title: "Mobile X-Ray",
        manufacturer: "Shimadzu"
    },
    { 
        id: 21,
        location: "../../assets/shimadzu/22.png",
        title: "General Radiographic System",
        manufacturer: "Shimadzu"
    },
    { 
        id: 22,
        location: "../../assets/shimadzu/23.png",
        title: "General Radiographic System",
        manufacturer: "Shimadzu"
    },
    { 
        id: 23,
        location: "../../assets/shimadzu/24.png",
        title: "General Radiographic System",
        manufacturer: "Shimadzu"
    },
    
    { 
        id: 24,
        location: "../../assets/pixxgen/1.jpg",
        title: "Pixxgen DR",
        category: "DR Panel",
        manufacturer: "Pixxgen"
    },
    { 
        id: 25,
        location: "../../assets/pixxgen/2.jpg",
        title: "Pixxgen DR",
        category: "DR Panel",
        manufacturer: "Pixxgen"
    },
    { 
        id: 26,
        location: "../../assets/pixxgen/3.jpg",
        title: "Pixxgen DR",
        category: "DR Panel",
        manufacturer: "Pixxgen"
    },
    { 
        id: 27,
        location: "../../assets/pixxgen/4.jpg",
        title: "Pixxgen DR",
        category: "DR Panel",
        manufacturer: "Pixxgen"
    },
    { 
        id: 28,
        location: "../../assets/pixxgen/5.jpg",
        title: "Pixxgen DR",
        category: "DR Panel",
        manufacturer: "Pixxgen"
    },
    { 
        id: 29,
        location: "../../assets/pixxgen/6.jpg",
        title: "Pixxgen DR",
        category: "DR Panel",
        manufacturer: "Pixxgen"
    },
    { 
        id: 30,
        location: "../../assets/pixxgen/7.jpg",
        title: "Pixxgen DR",
        category: "DR Panel",
        manufacturer: "Pixxgen"
    },
    { 
        id: 31,
        location: "../../assets/pixxgen/8.jpg",
        title: "Pixxgen DR",
        category: "DR Panel",
        manufacturer: "Pixxgen"
    },
    { 
        id: 32,
        location: "../../assets/pixxgen/9.jpg",
        title: "Pixxgen DR",
        category: "DR Panel",
        manufacturer: "Pixxgen"
    },
    { 
        id: 33,
        location: "../../assets/pixxgen/10.jpg",
        title: "Pixxgen DR",
        category: "DR Panel",
        manufacturer: "Pixxgen"
    },
    { 
        id: 34,
        location: "../../assets/pixxgen/11.jpg",
        title: "Pixxgen DR",
        category: "DR Panel",
        manufacturer: "Pixxgen"
    },
    { 
        id: 35,
        location: "../../assets/pixxgen/12.jpg",
        title: "Pixxgen DR",
        category: "DR Panel",
        manufacturer: "Pixxgen"
    },
    { 
        id: 36,
        location: "../../assets/genuine/100-ma-line-frequency-mobile-x-ray-machines-500x500.jpeg",
        title: "100 ma line frequence Mobile X-Ray",
        category: "X-Ray",
        manufacturer: "Genuine"
    },
    { 
        id: 37,
        location: "../../assets/genuine/100-ma-x-ray-machine-500x500.jpeg",
        title: "100 ma X-ray",
        category: "X-Ray",
        manufacturer: "Genuine"
    },
    { 
        id: 38,
        location: "../../assets/genuine/300-ma-x-ray-machines-500x500.jpeg",
        title: "100 ma X-ray",
        category: "X-Ray",
        manufacturer: "Genuine"
    },
    { 
        id: 39,
        location: "../../assets/genuine/portable-30-kw-x-ray-machines-500x500-removebg-preview.png",
        title: "Mobile X-Ray",
        category: "X-Ray",
        manufacturer: "Genuine"
    },
    { 
        id: 40,
        location: "../../assets/gel-pads/1.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 41,
        location: "../../assets/gel-pads/2.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 42,
        location: "../../assets/gel-pads/3.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 43,
        location: "../../assets/gel-pads/4.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 44,
        location: "../../assets/gel-pads/5.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 45,
        location: "../../assets/gel-pads/6.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 46,
        location: "../../assets/gel-pads/7.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 47,
        location: "../../assets/gel-pads/8.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 48,
        location: "../../assets/gel-pads/9.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 49,
        location: "../../assets/gel-pads/10.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 50,
        location: "../../assets/gel-pads/11.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 51,
        location: "../../assets/gel-pads/12.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 52,
        location: "../../assets/gel-pads/13.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 53,
        location: "../../assets/gel-pads/14.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 54,
        location: "../../assets/gel-pads/15.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 55,
        location: "../../assets/gel-pads/16.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 56,
        location: "../../assets/gel-pads/17.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 57,
        location: "../../assets/gel-pads/18.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 58,
        location: "../../assets/gel-pads/19.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 59,
        location: "../../assets/gel-pads/20.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 60,
        location: "../../assets/gel-pads/21.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 61,
        location: "../../assets/gel-pads/22.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 62,
        location: "../../assets/gel-pads/23.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 63,
        location: "../../assets/gel-pads/24.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 64,
        location: "../../assets/gel-pads/25.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 65,
        location: "../../assets/gel-pads/26.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 66,
        location: "../../assets/gel-pads/27.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 67,
        location: "../../assets/gel-pads/28.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 68,
        location: "../../assets/gel-pads/29.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 69,
        location: "../../assets/gel-pads/30.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 70,
        location: "../../assets/gel-pads/31.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 71,
        location: "../../assets/gel-pads/32.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 72,
        location: "../../assets/gel-pads/33.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 73,
        location: "../../assets/gel-pads/34.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 74,
        location: "../../assets/gel-pads/35.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 75,
        location: "../../assets/gel-pads/36.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 76,
        location: "../../assets/gel-pads/37.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 77,
        location: "../../assets/gel-pads/38.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
    { 
        id: 78,
        location: "../../assets/gel-pads/39.jpeg",
        title: "Gel Pad",
        category: "Gel Pad",
        manufacturer: "Gel Pad"
    },
   
];

export default images;


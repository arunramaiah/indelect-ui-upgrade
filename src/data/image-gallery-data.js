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
        location: "../../assets/gel-pads/Coccydynia with Gel top.jpg",
        manufacturer: "Gel Pad"
    },
    { 
        id: 40,
        location: "../../assets/gel-pads/Crutch Gel Pads.jpg",
        manufacturer: "Gel Pad"
    },
    { 
        id: 41,
        location: "../../assets/gel-pads/Dome Positioner Prime.jpg",
        manufacturer: "Gel Pad"
    },
    
    { 
        id: 42,
        location: "../../assets/gel-pads/Flat Gel 35 with centre Pocket.jpg",
        manufacturer: "Gel Pad"
    },
    
    { 
        id: 43,
        location: "../../assets/gel-pads/Flat Gel Pad 15 _ 35.jpg",
        manufacturer: "Gel Pad"
    },
    { 
        id: 44,
        location: "../../assets/gel-pads/Flat Prone Gel Bed.jpg",
        manufacturer: "Gel Pad"
    },
    { 
        id: 45,
        location: "../../assets/gel-pads/Gel Cushion.jpg",
        manufacturer: "Gel Pad"
    },
    { 
        id: 46,
        location: "../../assets/gel-pads/Head Base Gel pad.jpg",
        manufacturer: "Gel Pad"
    },
    
    { 
        id: 47,
        location: "../../assets/gel-pads/Heel Pad.jpg",
        manufacturer: "Gel Pad"
    },
    
    { 
        id: 48,
        location: "../../assets/gel-pads/Knee-Arm rest.jpg",
        manufacturer: "Gel Pad"
    },
    { 
        id: 49,
        location: "../../assets/gel-pads/Lateral Gel Position Bed.jpg",
        manufacturer: "Gel Pad"
    },
    { 
        id: 50,
        location: "../../assets/gel-pads/Lateral Leg foam with gel top.jpg",
        manufacturer: "Gel Pad"
    },
    { 
        id: 51,
        location: "../../assets/gel-pads/Lateral wedge Position.jpg",
        manufacturer: "Gel Pad"
    },
    { 
        id: 52,
        location: "../../assets/gel-pads/Neonatal Haed Cradle.jpg",
        manufacturer: "Gel Pad"
    },
    { 
        id: 53,
        location: "../../assets/gel-pads/Neonatal Phototherapy Gel Pad.jpg",
        manufacturer: "Gel Pad"
    },
    { 
        id: 54,
        location: "../../assets/gel-pads/Neonatal Roll.jpg",
        manufacturer: "Gel Pad"
    },
    { 
        id: 55,
        location: "../../assets/gel-pads/OT table Gel Pad Full.jpg",
        manufacturer: "Gel Pad"
    },
    { 
        id: 56,
        location: "../../assets/gel-pads/OT table Gel Pad.jpg",
        manufacturer: "Gel Pad"
    },
    { 
        id: 57,
        location: "../../assets/gel-pads/Pediotric Roll.jpg",
        manufacturer: "Gel Pad"
    },
    { 
        id: 58,
        location: "../../assets/gel-pads/Prone head rest gel.jpg",
        manufacturer: "Gel Pad"
    },
    { 
        id: 59,
        location: "../../assets/gel-pads/Prone position Gel Bed.jpg",
        manufacturer: "Gel Pad"
    },
    { 
        id: 60,
        location: "../../assets/gel-pads/Sacral Pad.jpg",
        manufacturer: "Gel Pad"
    },
    { 
        id: 61,
        location: "../../assets/gel-pads/Supine Head Rest.jpg",
        manufacturer: "Gel Pad"
    },
    { 
        id: 62,
        location: "../../assets/gel-pads/Ulnar protector.jpg",
        manufacturer: "Gel Pad"
    },
    { 
        id: 63,
        location: "../../assets/gel-pads/Universal Gel Pillows.jpg",
        manufacturer: "Gel Pad"
    },
    { 
        id: 64,
        location: "../../assets/gel-pads/Universal Pad.jpg",
        manufacturer: "Gel Pad"
    },
    { 
        id: 65,
        location: "../../assets/gel-pads/WC seat Cover.jpg",
        manufacturer: "Gel Pad"
    },
    
    
];

export default images;


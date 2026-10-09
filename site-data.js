/* ============ EDIT THIS FILE TO UPDATE THE TRAINING SITE ============
   Every course, fee, status and batch count shown on the training pages
   comes from here. live:true opens registration for that course.        */
window.SITE={
  nextWindow:"winter break",
  registerUrl:"https://docs.google.com/forms/d/1Flcm8zHhwcUQbWOsdlLaiDBojNH8hl6wbdkQwR3EUpU/",
  waitlistUrl:"https://docs.google.com/forms/d/1rU8_jEswz7tQQXnoqoOomgpeQsHD6aAXrk7GUtZ8Qbo/",
  ambassador:{open:true,url:"https://docs.google.com/forms/d/1dGoFIoc6D6GnOCrVKgK1EHheiPkcqqGfY4cH4ZOe-p8/"},
  tracks:[{label:"Embedded track",ids:["c01","c03"]},{label:"PCB track",ids:["c02","c04"]}],
  courses:{
    c01:{code:"ESIOT",name:"Embedded Systems and IoT Bootcamp",level:"",live:false,batches:3,fee:5000,early:3500,weeks:4,prereq:"None. Complete beginners welcome.",instructor:"owais",
      desc:"Zero to embedded. C from scratch, Arduino the right way, ESP8266 wireless projects and real IoT builds.",
      topics:["C programming and Arduino","Digital and analog I/O, PWM, sensors","UART, I²C and SPI","ESP8266, WiFi and IoT platforms","Capstone project"]},
    c02:{code:"PCBL1",name:"PCB Design Bootcamp",level:"Level 1",live:false,batches:2,fee:5000,early:3500,weeks:4,prereq:"None. Complete beginners welcome.",instructor:"hayyan",
      desc:"KiCad and EasyEDA, from your first schematic to ordering a real board.",
      topics:["Schematic design, symbols and footprints","ERC and DRC","Layout and routing, 1 and 2 layer","Gerber export and JLCPCB ordering","Capstone board design"]},
    c03:{code:"STM32",name:"STM32 Embedded Systems Development",level:"Level 1",live:false,batches:1,fee:6000,early:4200,weeks:4,prereq:"Arduino and embedded C basics.",instructor:"owais",
      desc:"Bare metal C on STM32. Real hardware and real registers, no HAL shortcuts.",
      topics:["GPIO, clock trees, timers, PWM, ADC","UART, I²C and SPI","DMA, interrupts and polling","Debugging and real peripheral projects"]},
    c04:{code:"PCBL2",name:"PCB Design Bootcamp",level:"Level 2",live:false,batches:1,fee:6000,early:4200,weeks:4,prereq:"1 and 2 layer PCB design (Level 1).",instructor:"hayyan",
      desc:"Multi-layer boards, signal integrity and manufacturing-ready design for real applications.",
      topics:["Multi-layer stackups and high-speed design","Signal integrity and impedance control","Power integrity and decoupling","DFM and high-density layout"]}
  },
  soon:[{name:"ESP32 and Advanced IoT",level:"Level 1",desc:"FreeRTOS, WiFi, BLE and OTA updates."},{name:"STM32 Embedded Systems",level:"Level 2",desc:"FreeRTOS and industrial firmware."},{name:"ESP32 and IIoT",level:"Level 2",desc:"MQTT, Node-RED and cloud pipelines."},{name:"nRF52 and Bluetooth Low Energy",level:"",desc:"GATT, bonding and mesh networking."}],
  instructors:{
    owais:{name:"Muhammad Owais",bio:"5+ years building firmware across IoT, automation and robotics, from local startups to international clients. Former lab engineer at one of Pakistan's top engineering universities and NAVTTC Mechatronics and Robotics assistant instructor.",linkedin:"https://www.linkedin.com/in/muhammad-owais07/"},
    hayyan:{name:"Muhammad Hayyan",bio:"7+ years designing reliable, high-integrity PCBs for industrial and consumer applications. Former lab engineer at one of Pakistan's top engineering universities, focused on signal integrity and design for manufacturability.",linkedin:"https://www.linkedin.com/in/mhayyan/"}}
};

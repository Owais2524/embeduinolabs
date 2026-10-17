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
  /* TECHNOLOGY on the engineering page. core = always visible, more = behind the "more" toggle. Only list what you would take client work in. */
  stack:[
 {
  "group": "Microcontrollers and chips",
  "core": [
   "STM32",
   "ESP32",
   "nRF52",
   "Arduino",
   "Raspberry Pi Pico"
  ],
  "more": [
   "STM32 F0, F1, F4, L4, G0, H7, WB, WL",
   "ESP32-S3, C3, C6",
   "RP2040, RP2350",
   "nRF53, nRF91",
   "Teensy",
   "Microchip PIC, AVR, SAM",
   "TI MSP430, C2000",
   "NXP LPC, i.MX RT",
   "Renesas RA",
   "Silicon Labs EFR32"
  ]
 },
 {
  "group": "Single-board computers and Linux",
  "core": [
   "Raspberry Pi",
   "NVIDIA Jetson",
   "Embedded Linux"
  ],
  "more": [
   "BeagleBone",
   "Orange Pi",
   "Yocto",
   "Buildroot"
  ]
 },
 {
  "group": "Firmware and frameworks",
  "core": [
   "Bare metal C and C++",
   "FreeRTOS",
   "ESP-IDF",
   "STM32Cube and HAL",
   "PlatformIO",
   "OTA updates"
  ],
  "more": [
   "Zephyr",
   "Mbed OS",
   "MicroPython",
   "CircuitPython",
   "Rust (embedded)",
   "MCUboot bootloaders"
  ]
 },
 {
  "group": "Wired protocols",
  "core": [
   "UART",
   "I²C",
   "SPI",
   "CAN",
   "RS-485 and Modbus RTU",
   "USB"
  ],
  "more": [
   "CAN FD",
   "I²S",
   "1-Wire",
   "Ethernet"
  ]
 },
 {
  "group": "Wireless",
  "core": [
   "WiFi",
   "BLE",
   "LoRa",
   "LoRaWAN",
   "GSM and LTE-M"
  ],
  "more": [
   "Zigbee",
   "Thread and Matter",
   "ESP-NOW",
   "NB-IoT",
   "GPS and GNSS",
   "NFC and RFID",
   "UWB"
  ]
 },
 {
  "group": "Protocols, cloud and dashboards",
  "core": [
   "MQTT",
   "HTTP and REST",
   "Node-RED",
   "ThingsBoard",
   "Firebase"
  ],
  "more": [
   "CoAP",
   "WebSocket",
   "Modbus TCP",
   "OPC UA",
   "AWS IoT",
   "Azure IoT",
   "Grafana and InfluxDB",
   "Home Assistant",
   "The Things Network"
  ]
 },
 {
  "group": "Sensors",
  "core": [
   "Motion (IMU, encoders)",
   "Environmental",
   "Current sensing",
   "Distance and ToF",
   "Load cells",
   "Cameras"
  ],
  "more": [
   "Hall effect",
   "Temperature and humidity",
   "Gas and air quality",
   "Soil moisture",
   "Thermocouples",
   "Presence detection",
   "LiDAR"
  ]
 },
 {
  "group": "Actuators and displays",
  "core": [
   "DC, BLDC and stepper motors",
   "Servos",
   "Motor drivers",
   "Relays and SSRs",
   "OLED and TFT displays"
  ],
  "more": [
   "ESCs",
   "Solenoids",
   "Pumps",
   "E-paper displays"
  ]
 },
 {
  "group": "Power",
  "core": [
   "Buck and boost regulation",
   "LiPo charging",
   "BMS"
  ],
  "more": [
   "Solar and MPPT",
   "USB-PD"
  ]
 },
 {
  "group": "Robotics and control",
  "core": [
   "PID control",
   "Motor control (FOC)",
   "ROS 2"
  ],
  "more": [
   "ROS",
   "micro-ROS",
   "Kinematics",
   "Sensor fusion (Kalman)",
   "SLAM and autonomous navigation",
   "Gazebo"
  ]
 },
 {
  "group": "Vision and edge AI",
  "core": [
   "OpenCV",
   "TensorFlow Lite Micro",
   "Edge Impulse",
   "ESP32-CAM"
  ],
  "more": [
   "TinyML",
   "YOLO on Jetson and Raspberry Pi",
   "OpenMV",
   "MediaPipe"
  ]
 },
 {
  "group": "Design tools",
  "core": [
   "KiCad",
   "EasyEDA",
   "Fusion 360",
   "LTspice"
  ],
  "more": [
   "Altium",
   "Eagle",
   "SolidWorks",
   "FreeCAD",
   "Cura",
   "PrusaSlicer",
   "Proteus"
  ]
 },
 {
  "group": "Development and testing",
  "core": [
   "Git",
   "ST-Link and J-Link",
   "SWD and JTAG",
   "Logic analyzer",
   "Oscilloscope"
  ],
  "more": [
   "CI",
   "Unit testing (Ceedling, Unity)",
   "Hardware-in-the-loop"
  ]
 }
],
  /* PROJECTS shown on the engineering page. Leave the list empty to hide the section.
     Example: {title:"Project name",category:"Embedded, IoT",summary:"What was built and the result.",tags:["STM32","LoRa"],image:"img/project1.jpg"}
     Only list work the client has agreed to share (image is optional). */
  projects:[],
  /* REVIEWS shown on the training page. Leave empty to hide the section. Only add reviews with the student's permission.
     Example: {name:"Student name",course:"Embedded Systems and IoT Bootcamp, Batch 2",text:"What they said."} */
  reviews:[],
  instructors:{
    owais:{name:"Muhammad Owais",bio:"5+ years building firmware across IoT, automation and robotics, from local startups to international clients. Former lab engineer at one of Pakistan's top engineering universities and NAVTTC Mechatronics and Robotics assistant instructor.",linkedin:"https://www.linkedin.com/in/muhammad-owais07/"},
    hayyan:{name:"Muhammad Hayyan",bio:"7+ years designing reliable, high-integrity PCBs for industrial and consumer applications. Former lab engineer at one of Pakistan's top engineering universities, focused on signal integrity and design for manufacturability.",linkedin:"https://www.linkedin.com/in/mhayyan/"}}
};

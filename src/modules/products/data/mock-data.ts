import { Category, OtherProductImages } from "./types";

export const extraImages: OtherProductImages =
  {
    extraImagesSet: [
      "/products/extraImages/Image-1.png",
      "/products/extraImages/Image-2.png",
      "/products/extraImages/Image-3.png",
      "/products/extraImages/Image-4.png",
    ],

    electronicsImages: [
      "/products/electronics/qubo-dashcam-1.png",
      "/products/electronics/qubo-dashcam-2.png",
      "/products/electronics/qubo-dashcam-3.png",
      "/products/electronics/qubo-dashcam-4.png",
    ],

    evAccessoriesImages: [
      "/products/electronics/qubo-dashcam-1.png",
      "/products/electronics/qubo-dashcam-2.png",
      "/products/electronics/qubo-dashcam-3.png",
      "/products/electronics/qubo-dashcam-4.png",
    ],

    exteriorAccessoriesImages: [
      "/products/electronics/qubo-dashcam-1.png",
      "/products/electronics/qubo-dashcam-2.png",
      "/products/electronics/qubo-dashcam-3.png",
      "/products/electronics/qubo-dashcam-4.png",
    ],

    enuImages: [
      "/products/electronics/qubo-dashcam-1.png",
      "/products/electronics/qubo-dashcam-2.png",
      "/products/electronics/qubo-dashcam-3.png",
      "/products/electronics/qubo-dashcam-4.png",
    ],
  };

export const MockData: Category[] = [

  //category 1 Electronics
{
//category 1
id: "cat-1",
categoryName: "Electronics & Smart Gadgets",
slug: "electronics-smart-gadgets",

items: [
      {
        id: "prod-1",

        title:
          "Qubo Dashcam Pro X (2026 Edition) | 2K Resolution FHD+ | Doubles up as in-Cabin Camera|NightPulse Vision | Wide FOV | Supercapacitor | Built in Wi-Fi, Mic | Up to 1TB",

        brand: "Qubo",

        price: 1437,

        currencySymbol: "$",

        imagePath: "/products/electronics/qubo-dashcam-main.png",

        galleryImages: [
          "/products/electronics/qubo-dashcam-1.png",
          "/products/electronics/qubo-dashcam-2.png",
          "/products/electronics/qubo-dashcam-3.png",
          "/products/electronics/qubo-dashcam-4.png",
        ],

        discountText: "-18%",

        ratingData: {
          averageRating: 4.5,

          totalReviewsCount: 1284,

          boughtPastMonthText: "1K+ bought in past month",

          soldLastWeekText: "Sold over 286 times last week",
        },

        attributes: [
          {
            label: "Video Resolution",
            value: "2K Full HD+",
          },

          {
            label: "Storage Support",
            value: "Expandable up to 1TB",
          },

          {
            label: "Connectivity",
            value: "Built-in Wi-Fi",
          },

          {
            label: "Camera Type",
            value: "Front + In-Cabin Recording",
          },

          {
            label: "Vision Technology",
            value: "NightPulse Low-Light Vision",
          },
        ],

        aboutSections: [
          {
            heading: "Dual Camera Recording",

            content:
              "Records both road footage and cabin activity simultaneously, ideal for safety monitoring and ride-sharing vehicles.",
          },

          {
            heading: "Advanced NightPulse Vision",

            content:
              "Enhanced low-light sensor captures sharper details during night driving and dim parking conditions.",
          },

          {
            heading: "Reliable Supercapacitor Technology",

            content:
              "Uses supercapacitor instead of lithium battery for better durability and heat resistance in parked vehicles.",
          },
        ],

        shippingBadges: [
          "Free Delivery",
          "7 Days Return",
          "1 Year Warranty",
          "Cash on Delivery",
        ],

        reviewsBreakdown: {
          starBars: [
            { stars: 5, percentage: 72 },
            { stars: 4, percentage: 18 },
            { stars: 3, percentage: 6 },
            { stars: 2, percentage: 3 },
            { stars: 1, percentage: 1 },
          ],

          userFeed: [
            {
              id: "review-1",

              reviewerName: "Arjun",

              rating: 5,

              isVerifiedBuyer: true,

              commentText:
                "Very impressive video quality. Night footage is much clearer than expected and setup was easy.",

              postedDateAgo: "2 months ago",

              userUploadedMedia: [
                "/reviews/qubo-review-1.png",
                "/reviews/qubo-review-2.png",
              ],
            },

            {
              id: "review-2",

              reviewerName: "Rohan",

              rating: 4,

              isVerifiedBuyer: true,

              commentText:
                "WiFi connectivity works smoothly. Cabin camera feature is extremely useful during long drives.",

              postedDateAgo: "3 months ago",
            },
          ],
        },
      }, //product 1 ends here

      {
        id: "prod-2",

        title:
          "Diamond 2K Car Android System Touch Screen 4GB+64GB|4 Core|Wireless Carplay Adapter & Android Auto | Car Stereo |Universal All Cars| Including AHD Rear View Camera| 1+1 Years Warranty | WAD-06",

        brand: "Diamond",

        price: 1437,

        currencySymbol: "$",

        imagePath: "/products/electronics/diamond-system-main.png",

        galleryImages: [
          "/products/electronics/diamond-system-1.png",
          "/products/electronics/diamond-system-2.png",
          "/products/electronics/diamond-system-3.png",
          "/products/electronics/diamond-system-4.png",
        ],

        discountText: "-22%",

        ratingData: {
          averageRating: 4.5,

          totalReviewsCount: 1137,

          boughtPastMonthText: "1K+ bought in past month",

          soldLastWeekText: "Sold over 243 times last week",
        },

        attributes: [
          {
            label: "Display Type",
            value: "2K Touch Screen",
          },

          {
            label: "RAM",
            value: "4GB",
          },

          {
            label: "Storage",
            value: "64GB Internal Storage",
          },

          {
            label: "Processor",
            value: "Quad Core Processor",
          },

          {
            label: "Compatibility",
            value: "Universal Car Support",
          },
        ],

        aboutSections: [
          {
            heading: "Wireless CarPlay and Android Auto",

            content:
              "Supports wireless smartphone connectivity for maps, music, calls and navigation without cable dependency.",
          },

          {
            heading: "Rear Camera Integration",

            content:
              "Includes AHD rear-view camera for reverse parking assistance and enhanced road safety during parking.",
          },

          {
            heading: "Optimized Performance",

            content:
              "Powered by quad-core chipset with 4GB RAM delivering smooth app switching and responsive touch controls.",
          },
        ],

        shippingBadges: [
          "Free Delivery",
          "2 Year Warranty",
          "Easy Replacement",
          "Secure Packaging",
        ],

        reviewsBreakdown: {
          starBars: [
            { stars: 5, percentage: 68 },
            { stars: 4, percentage: 20 },
            { stars: 3, percentage: 7 },
            { stars: 2, percentage: 3 },
            { stars: 1, percentage: 2 },
          ],

          userFeed: [
            {
              id: "review-3",

              reviewerName: "Vikram",

              rating: 5,

              isVerifiedBuyer: true,

              commentText:
                "Installed perfectly in my car. Screen quality feels premium and wireless CarPlay connects instantly.",

              postedDateAgo: "1 month ago",

              userUploadedMedia: [
                "/reviews/diamond-review-1.png",
              ],
            },

            {
              id: "review-4",

              reviewerName: "Sahil",

              rating: 4,

              isVerifiedBuyer: true,

              commentText:
                "Rear camera quality is sharp. UI feels smooth and storage capacity is more than enough.",

              postedDateAgo: "4 months ago",
            },
          ],
        },
      },

      {
  id: "prod-3",

  title:
    "Wagzo 12V, 4.3 Inch Dashboard TFT LCD Car Display Screen with 8 LED Reverse Parking Camera for Car View HD Car Camera, Universal for All Car",

  brand: "Wagzo",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/electronics/wagzo-display-main.png",

  galleryImages: [
    "/products/electronics/wagzo-display-1.png",
    "/products/electronics/wagzo-display-2.png",
    "/products/electronics/wagzo-display-3.png",
    "/products/electronics/wagzo-display-4.png",
  ],

  discountText: "-15%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 964,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 174 times last week",
  },

  attributes: [
    {
      label: "Display Size",
      value: "4.3 Inch TFT LCD",
    },

    {
      label: "Input Voltage",
      value: "12V DC",
    },

    {
      label: "Camera Type",
      value: "HD Reverse Parking Camera",
    },

    {
      label: "Night LEDs",
      value: "8 Infrared LED Lights",
    },

    {
      label: "Compatibility",
      value: "Universal Car Compatibility",
    },
  ],

  aboutSections: [
    {
      heading: "Reverse Parking Assistance",

      content:
        "Designed to help drivers safely reverse park using live rear camera feed displayed directly on dashboard screen.",
    },

    {
      heading: "Enhanced Night Visibility",

      content:
        "Integrated 8 LED night assist lights improve rear visibility during low light and nighttime parking situations.",
    },

    {
      heading: "Universal Easy Installation",

      content:
        "Supports installation across most car models with standard dashboard display integration.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Easy Installation",
    "7 Days Replacement",
    "Secure Packaging",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 66 },
      { stars: 4, percentage: 22 },
      { stars: 3, percentage: 7 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "review-5",

        reviewerName: "Karan",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Camera clarity is excellent while parking. The screen is bright enough even in daylight.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/wagzo-review-1.png",
        ],
      },

      {
        id: "review-6",

        reviewerName: "Amit",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Useful for tight parking spots. Installation was straightforward and image quality feels sharp.",

        postedDateAgo: "5 months ago",
      },
    ],
  },
},

{
  id: "prod-4",

  title:
    "Skyshop® C240 Pro Solar Powered TPMS with Smart Voice Alert | External Wireless Tyre Pressure Monitoring System | Real-Time Precision Sensors for All Cars, Bikes & Scooters",

  brand: "Skyshop",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/electronics/skyshop-tpms-main.png",

  galleryImages: [
    "/products/electronics/skyshop-tpms-1.png",
    "/products/electronics/skyshop-tpms-2.png",
    "/products/electronics/skyshop-tpms-3.png",
    "/products/electronics/skyshop-tpms-4.png",
  ],

  discountText: "-20%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 1087,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 219 times last week",
  },

  attributes: [
    {
      label: "Charging Type",
      value: "Solar Powered Charging",
    },

    {
      label: "Sensor Type",
      value: "External Wireless Sensors",
    },

    {
      label: "Alert System",
      value: "Smart Voice Warning Alerts",
    },

    {
      label: "Monitoring",
      value: "Real-Time Tyre Pressure Tracking",
    },

    {
      label: "Vehicle Support",
      value: "Cars, Bikes and Scooters",
    },
  ],

  aboutSections: [
    {
      heading: "Continuous Tyre Monitoring",

      content:
        "Tracks tyre pressure continuously and warns drivers immediately when abnormal pressure changes are detected.",
    },

    {
      heading: "Solar Powered Efficiency",

      content:
        "Built-in solar charging panel reduces dependency on frequent charging while improving portability.",
    },

    {
      heading: "Smart Voice Alert Protection",

      content:
        "Provides instant audio warnings for tyre pressure drops, overheating, or unusual pressure conditions.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Wireless Installation",
    "6 Month Warranty",
    "Fast Dispatch",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 71 },
      { stars: 4, percentage: 17 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 4 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "review-7",

        reviewerName: "Ritesh",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Very accurate tyre pressure readings. Solar charging works surprisingly well even outdoors.",

        postedDateAgo: "1 month ago",

        userUploadedMedia: [
          "/reviews/skyshop-review-1.png",
          "/reviews/skyshop-review-2.png",
        ],
      },

      {
        id: "review-8",

        reviewerName: "Dev",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Voice alert system is useful on highway drives. Sensors paired quickly without issues.",

        postedDateAgo: "3 months ago",
      },
    ],
  },
},

{
  id: "prod-5",

  title:
    "ESR for MagSafe Car Mount Charger, 15W Magnetic Wireless Car Charger, MagSafe Car Charger, Air Vent/Dashboard Car Phone Holder Mount for iPhone 17e,17-12 Air Pro Max, Galaxy S26/S25, Fast Charging",

  brand: "ESR",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/electronics/esr-magsafe-main.png",

  galleryImages: [
    "/products/electronics/esr-magsafe-1.png",
    "/products/electronics/esr-magsafe-2.png",
    "/products/electronics/esr-magsafe-3.png",
    "/products/electronics/esr-magsafe-4.png",
  ],

  discountText: "-17%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 1526,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 342 times last week",
  },

  attributes: [
    {
      label: "Charging Power",
      value: "15W Fast Wireless Charging",
    },

    {
      label: "Mount Type",
      value: "Air Vent / Dashboard Mount",
    },

    {
      label: "Attachment",
      value: "Magnetic MagSafe Lock",
    },

    {
      label: "Compatibility",
      value: "iPhone 12–17 Series & Galaxy S25/S26",
    },

    {
      label: "Rotation",
      value: "360 Degree Adjustable View",
    },
  ],

  aboutSections: [
    {
      heading: "MagSafe Magnetic Lock",

      content:
        "Strong magnetic alignment keeps phone securely attached even during sharp turns and rough road conditions.",
    },

    {
      heading: "15W Fast Wireless Charging",

      content:
        "Charges supported devices quickly while driving without requiring separate charging cables.",
    },

    {
      heading: "Flexible Mount Positioning",

      content:
        "Supports both dashboard and air vent mounting with easy viewing angle adjustment for navigation use.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "1 Year Warranty",
    "Fast Charging Support",
    "Secure Packaging",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 74 },
      { stars: 4, percentage: 16 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "review-9",

        reviewerName: "Harsh",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Magnet grip is extremely strong and charging speed stays consistent even on long drives.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/esr-review-1.png",
        ],
      },

      {
        id: "review-10",

        reviewerName: "Nitin",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Perfect for navigation use. Build quality feels premium and mounting mechanism is sturdy.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},

{
  id: "prod-6",

  title:
    "Portronics AUTO 12 in-Car Bluetooth Receiver for Handsfree Calling, Music System, Supports All Smartphones (Black)",

  brand: "Portronics",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/electronics/portronics-auto12-main.png",

  galleryImages: [
    "/products/electronics/portronics-auto12-1.png",
    "/products/electronics/portronics-auto12-2.png",
    "/products/electronics/portronics-auto12-3.png",
    "/products/electronics/portronics-auto12-4.png",
  ],

  discountText: "-14%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 1198,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 208 times last week",
  },

  attributes: [
    {
      label: "Connectivity",
      value: "Bluetooth Wireless Receiver",
    },

    {
      label: "Functionality",
      value: "Handsfree Calling + Music Streaming",
    },

    {
      label: "Device Support",
      value: "All Smartphones Supported",
    },

    {
      label: "Audio Output",
      value: "3.5mm AUX Audio Output",
    },

    {
      label: "Microphone",
      value: "Built-in Calling Microphone",
    },
  ],

  aboutSections: [
    {
      heading: "Wireless Music Streaming",

      content:
        "Converts regular car music systems into Bluetooth-enabled audio systems for seamless wireless playback.",
    },

    {
      heading: "Handsfree Calling Support",

      content:
        "Integrated microphone enables safe handsfree calling while driving without touching the phone repeatedly.",
    },

    {
      heading: "Universal Smartphone Compatibility",

      content:
        "Compatible with Android and iPhone devices supporting standard Bluetooth audio transmission.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Plug and Play Setup",
    "Compact Portable Design",
    "7 Days Replacement",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 69 },
      { stars: 4, percentage: 19 },
      { stars: 3, percentage: 7 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "review-11",

        reviewerName: "Ankit",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Connected instantly with my phone. Music quality is clean and call clarity is excellent.",

        postedDateAgo: "3 months ago",

        userUploadedMedia: [
          "/reviews/portronics-review-1.png",
        ],
      },

      {
        id: "review-12",

        reviewerName: "Manav",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Good budget Bluetooth adapter for older cars. Setup literally took less than one minute.",

        postedDateAgo: "5 months ago",
      },
    ],
  },
},


{
  id: "prod-7",

  title:
    "Morelian Car HUD Display, OBDⅡ+GPS Smart Gauge High Definition Speedometer Car Diagnostic Tool OBD Fault Code Elimination Safe Driving Computer Overspeed Fault Alarm for All Vehicles",

  brand: "Morelian",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/electronics/morelian-hud-main.png",

  galleryImages: [
    "/products/electronics/morelian-hud-1.png",
    "/products/electronics/morelian-hud-2.png",
    "/products/electronics/morelian-hud-3.png",
    "/products/electronics/morelian-hud-4.png",
  ],

  discountText: "-19%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 874,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 167 times last week",
  },

  attributes: [
    {
      label: "Connectivity",
      value: "OBDⅡ + GPS Dual Mode",
    },

    {
      label: "Display Type",
      value: "High Definition HUD Display",
    },

    {
      label: "Functions",
      value: "Speedometer + Diagnostics + Fault Detection",
    },

    {
      label: "Safety Alerts",
      value: "Overspeed Warning Alarm",
    },

    {
      label: "Vehicle Support",
      value: "Compatible with Most Modern Vehicles",
    },
  ],

  aboutSections: [
    {
      heading: "Real-Time Vehicle Diagnostics",

      content:
        "Reads live vehicle performance data directly through OBD connection and displays engine health information instantly.",
    },

    {
      heading: "Heads-Up Driving Display",

      content:
        "Projects critical driving information such as speed and warnings without distracting driver attention from the road.",
    },

    {
      heading: "Integrated Fault Detection",

      content:
        "Detects vehicle fault codes early and helps identify system issues before they become major problems.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Universal Vehicle Support",
    "Easy Dashboard Mount",
    "6 Month Warranty",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 67 },
      { stars: 4, percentage: 21 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 4 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "review-13",

        reviewerName: "Yash",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Excellent for monitoring speed and engine data while driving. GPS mode is very accurate.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/morelian-review-1.png",
        ],
      },

      {
        id: "review-14",

        reviewerName: "Abhishek",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Diagnostic alerts helped me detect engine issue early. Very useful gadget for long trips.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},

{
  id: "prod-8",

  title:
    "Brago TurboVac Cordless Vacuum Cleaner for Car & Home, 18500Pa Powerful Suction, 4-in-1 Portable Vacuum & Air Blower, 9600mAh Battery (40 Mins Runtime), 3-Speed BLDC Motor",

  brand: "Brago",

  price: 3599,

  currencySymbol: "$",

  imagePath: "/products/electronics/brago-turbovac-main.png",

  galleryImages: [
    "/products/electronics/brago-turbovac-1.png",
    "/products/electronics/brago-turbovac-2.png",
    "/products/electronics/brago-turbovac-3.png",
    "/products/electronics/brago-turbovac-4.png",
  ],

  discountText: "-24%",

  ratingData: {
    averageRating: 4.6,

    totalReviewsCount: 1739,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 391 times last week",
  },

  attributes: [
    {
      label: "Suction Power",
      value: "18500Pa High Suction Force",
    },

    {
      label: "Battery Capacity",
      value: "9600mAh Rechargeable Battery",
    },

    {
      label: "Runtime",
      value: "40 Minutes Continuous Use",
    },

    {
      label: "Motor Type",
      value: "3-Speed BLDC Motor",
    },

    {
      label: "Functions",
      value: "Vacuum + Air Blower + Portable Cleaning",
    },
  ],

  aboutSections: [
    {
      heading: "Powerful Deep Cleaning",

      content:
        "High suction motor removes dust, debris, food crumbs and fine dirt particles from car interiors effectively.",
    },

    {
      heading: "4-in-1 Multi Utility Design",

      content:
        "Functions as vacuum cleaner, air blower and portable cleaning device for both vehicle and household usage.",
    },

    {
      heading: "Long Battery Runtime",

      content:
        "Large battery capacity delivers up to 40 minutes cleaning time without interruption on full charge.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Fast Recharge Support",
    "Portable Design",
    "1 Year Warranty",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 76 },
      { stars: 4, percentage: 14 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "review-15",

        reviewerName: "Deepak",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Surprisingly strong suction power. Cleans car seats and dashboard dust extremely well.",

        postedDateAgo: "1 month ago",

        userUploadedMedia: [
          "/reviews/brago-review-1.png",
          "/reviews/brago-review-2.png",
        ],
      },

      {
        id: "review-16",

        reviewerName: "Pranav",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Battery backup is excellent. I use it both for my car and small cleaning tasks at home.",

        postedDateAgo: "3 months ago",
      },
    ],
  },
},

{
  id: "prod-9",

  title:
    "Morelian Car HUD Display, OBDⅡ+GPS Smart Gauge High Definition Speedometer Car Diagnostic Tool OBD Fault Code Elimination Safe Driving Computer Overspeed Fault Alarm for All Vehicles",

  brand: "Morelian",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/electronics/morelian-hud-v2-main.png",

  galleryImages: [
    "/products/electronics/morelian-hud-v2-1.png",
    "/products/electronics/morelian-hud-v2-2.png",
    "/products/electronics/morelian-hud-v2-3.png",
    "/products/electronics/morelian-hud-v2-4.png",
  ],

  discountText: "-16%",

  ratingData: {
    averageRating: 4.4,

    totalReviewsCount: 913,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 182 times last week",
  },

  attributes: [
    {
      label: "Tracking Mode",
      value: "GPS + OBDⅡ Dual Monitoring",
    },

    {
      label: "Primary Function",
      value: "Speed Monitoring and Engine Diagnostics",
    },

    {
      label: "Display Technology",
      value: "Digital Heads-Up Projection Display",
    },

    {
      label: "Safety Alerts",
      value: "Overspeed and Engine Fault Alerts",
    },

    {
      label: "Compatibility",
      value: "Multi-Vehicle Universal Support",
    },
  ],

  aboutSections: [
    {
      heading: "Advanced Driving Analytics",

      content:
        "Continuously monitors driving speed, engine health data and real-time vehicle status directly from internal sensors.",
    },

    {
      heading: "Safe Driving Alert System",

      content:
        "Integrated warning system instantly alerts drivers about overspeed conditions and abnormal engine behavior.",
    },

    {
      heading: "Universal Compatibility",

      content:
        "Works with a wide range of modern vehicles supporting standard OBD diagnostic communication systems.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Quick Installation",
    "Vehicle Diagnostic Support",
    "Secure Packaging",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 65 },
      { stars: 4, percentage: 23 },
      { stars: 3, percentage: 7 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "review-17",

        reviewerName: "Sumit",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Speed display is extremely accurate and I like having engine diagnostics visible during highway travel.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/morelian-v2-review-1.png",
        ],
      },

      {
        id: "review-18",

        reviewerName: "Raghav",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Good gadget for monitoring car health. Overspeed alert feature works reliably during long drives.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
}
],
},

// Category 2  Accessories
{
id: "cat-2",
categoryName: "EV Accessories",
slug: "ev-accessories",

items: [

      {
  id: "ev-prod-1",

  title:
    "Ambrane 85W Car Charger, Mobile & Laptop Charging (Macbook & Type C Laptops), RGB Light, Dual Port Fast Charging, 65W Type C PD, 20W USB, Works with iPhone, Android, iPad",

  brand: "Ambrane",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/ev/ambrane-charger-main.png",

  galleryImages: [
    "/products/ev/ambrane-charger-1.png",
    "/products/ev/ambrane-charger-2.png",
    "/products/ev/ambrane-charger-3.png",
    "/products/ev/ambrane-charger-4.png",
  ],

  discountText: "-18%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 1468,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 315 times last week",
  },

  attributes: [
    {
      label: "Power Output",
      value: "85W Total Fast Charging",
    },

    {
      label: "USB Type-C PD",
      value: "65W Power Delivery",
    },

    {
      label: "USB Port",
      value: "20W Fast Charging USB-A",
    },

    {
      label: "Compatibility",
      value: "Macbook, Type-C Laptops, iPhone, Android, iPad",
    },

    {
      label: "Extra Feature",
      value: "RGB Ambient Charging Light",
    },
  ],

  aboutSections: [
    {
      heading: "Dual Device Fast Charging",

      content:
        "Simultaneously charges smartphones, tablets and laptops using dual high-speed charging ports without power drop.",
    },

    {
      heading: "High Power USB-C Delivery",

      content:
        "65W USB-C Power Delivery allows charging of Macbooks and compatible laptops directly from car charging socket.",
    },

    {
      heading: "RGB Light Design",

      content:
        "Integrated RGB illumination improves night visibility and adds premium dashboard aesthetics while charging.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Fast Charging Support",
    "1 Year Warranty",
    "Secure Packaging",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 73 },
      { stars: 4, percentage: 16 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "ev-review-1",

        reviewerName: "Aakash",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Charges both my phone and MacBook perfectly during travel. Charging speed is genuinely impressive.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/ambrane-review-1.png",
        ],
      },

      {
        id: "ev-review-2",

        reviewerName: "Vivek",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Build quality feels premium and RGB light looks surprisingly good at night while driving.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},

{
  id: "ev-prod-2",

  title:
    "KEYCEPT Metal Key Cover Compatible for MG Comet EV Electric 3 Button Smart Key with Keychain",

  brand: "KEYCEPT",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/ev/keycept-cover-main.png",

  galleryImages: [
    "/products/ev/keycept-cover-1.png",
    "/products/ev/keycept-cover-2.png",
    "/products/ev/keycept-cover-3.png",
    "/products/ev/keycept-cover-4.png",
  ],

  discountText: "-12%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 978,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 192 times last week",
  },

  attributes: [
    {
      label: "Material",
      value: "Premium Metal Alloy Construction",
    },

    {
      label: "Compatibility",
      value: "MG Comet EV Smart Key",
    },

    {
      label: "Button Support",
      value: "3 Button Smart Key Layout",
    },

    {
      label: "Accessory",
      value: "Metal Keychain Included",
    },

    {
      label: "Protection",
      value: "Scratch and Impact Resistant Cover",
    },
  ],

  aboutSections: [
    {
      heading: "Premium Metal Protection",

      content:
        "Protects smart key from scratches, accidental drops and long-term external wear during daily use.",
    },

    {
      heading: "Perfect MG Comet EV Fit",

      content:
        "Precision cut design matches exact MG Comet EV 3-button smart key dimensions without blocking buttons.",
    },

    {
      heading: "Stylish Premium Finish",

      content:
        "Metallic finish upgrades the appearance of vehicle smart key while improving grip and durability.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Premium Build",
    "Scratch Protection",
    "Easy Replacement",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 69 },
      { stars: 4, percentage: 20 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "ev-review-3",

        reviewerName: "Rohan",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Fits perfectly on my MG Comet EV key. Material quality feels solid and premium in hand.",

        postedDateAgo: "1 month ago",

        userUploadedMedia: [
          "/reviews/keycept-review-1.png",
        ],
      },

      {
        id: "ev-review-4",

        reviewerName: "Kunal",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Good protection for smart key and the included keychain is a nice premium addition.",

        postedDateAgo: "3 months ago",
      },
    ],
  },
},

{
  id: "ev-prod-3",

  title:
    "SNA Universal EV Throttle for 24v 36v 48v 60v 72V Compatible with Electric Scooter Ebike E-Cycles",

  brand: "SNA",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/ev/sna-throttle-main.png",

  galleryImages: [
    "/products/ev/sna-throttle-1.png",
    "/products/ev/sna-throttle-2.png",
    "/products/ev/sna-throttle-3.png",
    "/products/ev/sna-throttle-4.png",
  ],

  discountText: "-15%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 842,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 176 times last week",
  },

  attributes: [
    {
      label: "Voltage Support",
      value: "24V / 36V / 48V / 60V / 72V",
    },

    {
      label: "Compatibility",
      value: "Electric Scooter, E-Bike, E-Cycle",
    },

    {
      label: "Throttle Type",
      value: "Universal Handlebar Throttle",
    },

    {
      label: "Control",
      value: "Variable Speed Control System",
    },

    {
      label: "Installation",
      value: "Plug and Connect Design",
    },
  ],

  aboutSections: [
    {
      heading: "Universal EV Compatibility",

      content:
        "Supports multiple electric scooter and electric bike voltage systems without requiring controller modifications.",
    },

    {
      heading: "Precise Speed Control",

      content:
        "Provides smooth acceleration control with responsive throttle input for better riding stability.",
    },

    {
      heading: "Easy Replacement Setup",

      content:
        "Designed for quick installation when replacing damaged or worn-out throttle systems.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Universal Fit",
    "Easy Installation",
    "6 Month Warranty",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 68 },
      { stars: 4, percentage: 19 },
      { stars: 3, percentage: 7 },
      { stars: 2, percentage: 4 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "ev-review-5",

        reviewerName: "Manish",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Worked perfectly on my electric scooter and throttle response feels smooth without delay.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/sna-review-1.png",
        ],
      },

      {
        id: "ev-review-6",

        reviewerName: "Tarun",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Good replacement throttle for ebike repair. Wiring matched without compatibility issues.",

        postedDateAgo: "5 months ago",
      },
    ],
  },
},

{
  id: "ev-prod-4",

  title:
    "Ramanta New EV V.I.D.A VX2 Foot Mat | VX2 Plus Accessories | Anti Slip Back Floor Mat |",

  brand: "Ramanta",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/ev/ramanta-mat-main.png",

  galleryImages: [
    "/products/ev/ramanta-mat-1.png",
    "/products/ev/ramanta-mat-2.png",
    "/products/ev/ramanta-mat-3.png",
    "/products/ev/ramanta-mat-4.png",
  ],

  discountText: "-11%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 732,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 139 times last week",
  },

  attributes: [
    {
      label: "Vehicle Support",
      value: "V.I.D.A VX2 / VX2 Plus",
    },

    {
      label: "Material",
      value: "Premium Rubber Composite",
    },

    {
      label: "Grip",
      value: "Anti Slip Surface Texture",
    },

    {
      label: "Protection",
      value: "Dust and Water Resistant Floor Coverage",
    },

    {
      label: "Fit",
      value: "Custom Vehicle Floor Fit",
    },
  ],

  aboutSections: [
    {
      heading: "Custom VX2 Fit",

      content:
        "Designed specifically for V.I.D.A VX2 electric vehicle floor dimensions ensuring complete edge coverage.",
    },

    {
      heading: "Anti Slip Protection",

      content:
        "Provides stable foot grip during riding while preventing sliding during wet weather conditions.",
    },

    {
      heading: "Easy Cleaning Material",

      content:
        "Durable surface allows quick cleaning of mud, dust and moisture after everyday commuting.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Custom Fit Design",
    "Water Resistant",
    "Durable Material",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 71 },
      { stars: 4, percentage: 17 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 4 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "ev-review-7",

        reviewerName: "Pratik",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Perfect fitting on VX2 Plus. Grip quality is excellent and cleaning takes almost no effort.",

        postedDateAgo: "1 month ago",

        userUploadedMedia: [
          "/reviews/ramanta-review-1.png",
        ],
      },

      {
        id: "ev-review-8",

        reviewerName: "Aditya",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Material feels durable and anti-slip backing works well during rainy season usage.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},

{
  id: "ev-prod-5",

  title:
    "Audio Wheels 130W Dual USB Car Charger – 100W Power Delivery & 30W Fast Charging Mini Adapter",

  brand: "Audio Wheels",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/ev/audio-wheels-main.png",

  galleryImages: [
    "/products/ev/audio-wheels-1.png",
    "/products/ev/audio-wheels-2.png",
    "/products/ev/audio-wheels-3.png",
    "/products/ev/audio-wheels-4.png",
  ],

  discountText: "-19%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 1186,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 241 times last week",
  },

  attributes: [
    {
      label: "Total Output",
      value: "130W Fast Charging",
    },

    {
      label: "USB-C PD",
      value: "100W Power Delivery",
    },

    {
      label: "USB-A",
      value: "30W Fast Charging",
    },

    {
      label: "Design",
      value: "Compact Mini Car Adapter",
    },

    {
      label: "Device Support",
      value: "Phones, Tablets, Laptops",
    },
  ],

  aboutSections: [
    {
      heading: "High Power Charging",

      content:
        "130W total output supports fast charging for power-hungry laptops and modern smartphones simultaneously.",
    },

    {
      heading: "Dual Port Design",

      content:
        "Dedicated USB-C PD and USB-A charging ports optimize charging speed across multiple device categories.",
    },

    {
      heading: "Compact Travel Design",

      content:
        "Mini form factor fits neatly into vehicle charging sockets without occupying unnecessary dashboard space.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Fast Charging Support",
    "Compact Design",
    "1 Year Warranty",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 74 },
      { stars: 4, percentage: 15 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "ev-review-9",

        reviewerName: "Shivam",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Charges my laptop surprisingly fast inside car. Very useful during long work travel days.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/audio-review-1.png",
        ],
      },

      {
        id: "ev-review-10",

        reviewerName: "Rajat",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Compact size and very powerful charging output. Works exactly as advertised.",

        postedDateAgo: "3 months ago",
      },
    ],
  },
},

{
  id: "ev-prod-6",

  title:
    "SANPU EV TECH DC to DC Converter for Electric Bike | Input 36v-84v Output 12v 10Amp",

  brand: "SANPU EV TECH",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/ev/sanpu-converter-main.png",

  galleryImages: [
    "/products/ev/sanpu-converter-1.png",
    "/products/ev/sanpu-converter-2.png",
    "/products/ev/sanpu-converter-3.png",
    "/products/ev/sanpu-converter-4.png",
  ],

  discountText: "-16%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 694,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 128 times last week",
  },

  attributes: [
    {
      label: "Input Voltage",
      value: "36V – 84V DC Input",
    },

    {
      label: "Output Voltage",
      value: "12V Stable Output",
    },

    {
      label: "Output Current",
      value: "10 Amp Output Capacity",
    },

    {
      label: "Application",
      value: "Electric Bike Power Conversion",
    },

    {
      label: "Protection",
      value: "Overload and Heat Protection",
    },
  ],

  aboutSections: [
    {
      heading: "Stable Voltage Conversion",

      content:
        "Efficiently converts high voltage EV battery current into stable 12V output for connected low-voltage systems.",
    },

    {
      heading: "Electric Bike Integration",

      content:
        "Designed for powering accessories and auxiliary electrical systems in electric bike configurations.",
    },

    {
      heading: "Built-In Safety Protection",

      content:
        "Internal overload and thermal protection improves durability under continuous operational load.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Electrical Protection",
    "Heat Resistant Design",
    "6 Month Warranty",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 70 },
      { stars: 4, percentage: 18 },
      { stars: 3, percentage: 7 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "ev-review-11",

        reviewerName: "Lokesh",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Very stable voltage output and worked perfectly for my electric bike accessory setup.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/sanpu-review-1.png",
        ],
      },

      {
        id: "ev-review-12",

        reviewerName: "Rishi",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Good converter quality and no overheating issues even after extended continuous usage.",

        postedDateAgo: "5 months ago",
      },
    ],
  },
},

{
  id: "ev-prod-7",

  title:
    "GFX TPV Premium Life Long Car Foot Mats Compatible with 6 Seater Manual Safari 2020",

  brand: "GFX",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/ev/gfx-mats-main.png",

  galleryImages: [
    "/products/ev/gfx-mats-1.png",
    "/products/ev/gfx-mats-2.png",
    "/products/ev/gfx-mats-3.png",
    "/products/ev/gfx-mats-4.png",
  ],

  discountText: "-13%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 1032,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 201 times last week",
  },

  attributes: [
    {
      label: "Vehicle Support",
      value: "Safari 2020 6 Seater Manual",
    },

    {
      label: "Material",
      value: "Premium TPV Polymer Material",
    },

    {
      label: "Durability",
      value: "Life Long Heavy Duty Construction",
    },

    {
      label: "Surface Grip",
      value: "Anti Slip Floor Grip Design",
    },

    {
      label: "Protection",
      value: "Dust, Mud and Water Protection",
    },
  ],

  aboutSections: [
    {
      heading: "Vehicle Specific Design",

      content:
        "Custom engineered floor mat design ensures accurate fitting for Safari 2020 six-seater manual configuration.",
    },

    {
      heading: "Premium TPV Material",

      content:
        "Long-life thermoplastic vulcanized material resists wear, cracking and long-term floor damage.",
    },

    {
      heading: "All Weather Protection",

      content:
        "Protects cabin flooring against mud, dust, water spills and everyday footwear contamination.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Heavy Duty Material",
    "Custom Fit Design",
    "Long Life Durability",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 72 },
      { stars: 4, percentage: 17 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "ev-review-13",

        reviewerName: "Anurag",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Excellent fitting for Safari interior. Material feels premium and cabin cleaning became easier.",

        postedDateAgo: "1 month ago",

        userUploadedMedia: [
          "/reviews/gfx-review-1.png",
        ],
      },

      {
        id: "ev-review-14",

        reviewerName: "Dhruv",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Strong material quality and covers floor area completely without movement during driving.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},

{
  id: "ev-prod-8",

  title:
    "Type 2 EV Charger Adapter Gun | Replacement Connector with Open-End Cable 32A– 22 kW",

  brand: "Generic EV Tech",

  price: 3599,

  currencySymbol: "$",

  imagePath: "/products/ev/type2-charger-main.png",

  galleryImages: [
    "/products/ev/type2-charger-1.png",
    "/products/ev/type2-charger-2.png",
    "/products/ev/type2-charger-3.png",
    "/products/ev/type2-charger-4.png",
  ],

  discountText: "-21%",

  ratingData: {
    averageRating: 4.6,

    totalReviewsCount: 1584,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 356 times last week",
  },

  attributes: [
    {
      label: "Connector Type",
      value: "Type 2 EV Charging Connector",
    },

    {
      label: "Current Capacity",
      value: "32 Amp Charging Support",
    },

    {
      label: "Power Rating",
      value: "22 kW Fast Charging",
    },

    {
      label: "Cable Type",
      value: "Open-End Replacement Cable",
    },

    {
      label: "Usage",
      value: "EV Charger Replacement and Installation",
    },
  ],

  aboutSections: [
    {
      heading: "Fast EV Charging Support",

      content:
        "Supports high-power electric vehicle charging up to 22kW for compatible EV charging infrastructure systems.",
    },

    {
      heading: "Replacement Connector Design",

      content:
        "Ideal replacement charging gun connector for repairing damaged EV charging cables and station hardware.",
    },

    {
      heading: "Heavy Duty Construction",

      content:
        "Built using industrial-grade insulated materials designed for continuous high current EV charging operation.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Fast EV Charging",
    "Heavy Duty Build",
    "1 Year Warranty",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 77 },
      { stars: 4, percentage: 13 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "ev-review-15",

        reviewerName: "Saurabh",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Connector quality is excellent and charging performance remains stable even under heavy load usage.",

        postedDateAgo: "1 month ago",

        userUploadedMedia: [
          "/reviews/type2-review-1.png",
        ],
      },

      {
        id: "ev-review-16",

        reviewerName: "Nakul",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Very solid build quality. Worked perfectly while replacing damaged charging station connector.",

        postedDateAgo: "3 months ago",
      },
    ],
  },
},

{
  id: "ev-prod-9",

  title:
    "PABLA High-End Car Center Armrest with Spacious Storage Compartment compatible",

  brand: "PABLA",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/ev/pabla-armrest-main.png",

  galleryImages: [
    "/products/ev/pabla-armrest-1.png",
    "/products/ev/pabla-armrest-2.png",
    "/products/ev/pabla-armrest-3.png",
    "/products/ev/pabla-armrest-4.png",
  ],

  discountText: "-14%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 926,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 183 times last week",
  },

  attributes: [
    {
      label: "Accessory Type",
      value: "Car Center Armrest Console",
    },

    {
      label: "Storage",
      value: "Spacious Internal Storage Compartment",
    },

    {
      label: "Material",
      value: "Premium Leather and ABS Construction",
    },

    {
      label: "Comfort",
      value: "Soft Padded Arm Support",
    },

    {
      label: "Installation",
      value: "Vehicle Compatible Easy Fit Design",
    },
  ],

  aboutSections: [
    {
      heading: "Enhanced Driving Comfort",

      content:
        "Provides comfortable padded arm support during long drives while reducing hand fatigue and improving posture.",
    },

    {
      heading: "Extra Storage Space",

      content:
        "Integrated internal compartment allows organized storage for keys, chargers, wallets and small accessories.",
    },

    {
      heading: "Premium Cabin Upgrade",

      content:
        "Improves vehicle interior appearance while adding practical storage and ergonomic comfort benefits.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Premium Build Quality",
    "Easy Installation",
    "Durable Finish",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 70 },
      { stars: 4, percentage: 18 },
      { stars: 3, percentage: 7 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "ev-review-17",

        reviewerName: "Kartik",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Very comfortable arm support and storage compartment is larger than expected. Looks premium inside cabin.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/pabla-review-1.png",
        ],
      },

      {
        id: "ev-review-18",

        reviewerName: "Ayush",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Installation was simple and overall finish quality matches expensive aftermarket accessories.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},
]
},

// Category 3  car exterior completed
{
id: "cat-3",
categoryName: "Exterior Accessories",
slug: "exterior-accessories",

items: [
// Product-1
{
  id: "cover-tata-safari",

  productHeading: "Car Cover for Tata Safari",

  title:
    "NEODRIFT SilverTech Car Cover for Tata Safari (100% Water-Resistant, All Weather Protection, Tailored Fit, Precision-Fit & Breathable Fabric) (Silver) (2021–2026)",

  brand:
    "Protect your Tata Safari (2021–2026) with the NEODRIFT SilverTech Car Cover, designed for a precise, vehicle-specific fit.",

  price: 2704,

  currencySymbol: "₹",

  imagePath: "/products/exterior/car-cover-silver-main.png",

  galleryImages: [
    "/Images/exterior/tata-safari-cover/car-cover-1.png",
    "/Images/exterior/tata-safari-cover/car-cover-2.png",
    "/Images/exterior/tata-safari-cover/car-cover-3.png",
    "/Images/exterior/tata-safari-cover/car-cover-4.png",
  ],

  discountText: "18%",

  ratingData: {
    averageRating: 4.0,
    totalReviewsCount: 2223,
    boughtPastMonthText: "2223 reviews",
    soldLastWeekText: "Sold over 2223 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Water Resistant",
    },
    {
      label: "Feature",
      value: "All Weather Protection",
    },
    {
      label: "Feature",
      value: "Tailored Fit",
    },
    {
      label: "Feature",
      value: "Breathable Fabric",
    },
  ],

  aboutSections: [
    {
      heading: "Custom Fit for Tata Safari",
      content:
        "Precision-tailored for Tata Safari (2021–2026) with dedicated mirror pockets and complete body coverage for maximum protection.",
    },
    {
      heading: "100% Water Resistant & All Weather Protection",
      content:
        "Advanced breathable fabric protects against rain, sunlight, dust, wind and harsh weather while preventing moisture buildup.",
    },
    {
      heading: "Scratch & UV Protection",
      content:
        "Soft inner fabric prevents scratches while UV-resistant outer material protects your vehicle's paint from fading and oxidation.",
    },
    {
      heading: "Secure Windproof Design",
      content:
        "Elastic hems ensure a tight grip, keeping the cover securely in place during windy conditions.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 72 },
      { stars: 4, percentage: 18 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "cover-review-1",
        reviewerName: "Amit",
        rating: 5,
        isVerifiedBuyer: true,
        commentText:
          "Perfect fit for my Tata Safari. Excellent quality and completely waterproof.",
        postedDateAgo: "1 month ago",
      },
      {
        id: "cover-review-2",
        reviewerName: "Rakesh",
        rating: 4,
        isVerifiedBuyer: true,
        commentText:
          "Good material, easy to fold and store. Fits perfectly with mirror pockets.",
        postedDateAgo: "2 months ago",
      },
    ],
  },
},
// Product-2
{
  id: "cover-maruti-dzire",

  productHeading: "Cover for Maruti Suzuki Dzire",

  title:
    "PROTEGO All Weather Protection N-Series Car Cover for Maruti Suzuki Dzire | Anti Dust, 100% Waterproof, Heat Resistant, UV Proof | Triple Stitched Elastic Grip with Mirror Pocket (Blue)",

  brand:
    "Keep your Maruti Suzuki Dzire protected in every season with the PROTEGO N-Series Car Cover.",

  price: 2641,

  currencySymbol: "₹",

  imagePath: "/products/exterior/suzuki-car-cover-main.png",

  galleryImages: [
    "/Images/exterior/suzuki-cover/suzuki-car-cover-1.png",
    "/Images/exterior/suzuki-cover/suzuki-car-cover-2.png",
    "/Images/exterior/suzuki-cover/suzuki-car-cover-3.png",
    "/Images/exterior/suzuki-cover/suzuki-car-cover-4.png",
  ],

  discountText: "18%",

  ratingData: {
    averageRating: 4.2,
    totalReviewsCount: 777,
    boughtPastMonthText: "777 reviews",
    soldLastWeekText: "Sold over 777 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Anti Dust",
    },
    {
      label: "Feature",
      value: "100% Waterproof",
    },
    {
      label: "Feature",
      value: "Heat Resistant",
    },
    {
      label: "Feature",
      value: "UV Proof",
    },
  ],

  aboutSections: [
    {
      heading: "Durable Full Body Protection",
      content:
        "Made from strong, breathable polypropylene fabric that provides complete body coverage and long-lasting protection in all weather conditions.",
    },
    {
      heading: "Premium Features",
      content:
        "Includes triple-stitched elastic grip, front and rear tags, dual mirror pockets, and a secure grommet locking system for a snug fit.",
    },
    {
      heading: "High Tear Resistance",
      content:
        "Lightweight yet durable material offers excellent tear resistance while protecting against dust, scratches, bird droppings, and harsh temperatures.",
    },
    {
      heading: "Easy to Install & Store",
      content:
        "Foldable design with an included storage bag makes installation, removal, and storage quick and convenient.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 75 },
      { stars: 4, percentage: 16 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "dzire-review-1",
        reviewerName: "Kiran",
        rating: 5,
        isVerifiedBuyer: true,
        commentText:
          "Excellent fitting and waterproof quality. The mirror pockets fit perfectly.",
        postedDateAgo: "3 weeks ago",
      },
      {
        id: "dzire-review-2",
        reviewerName: "Manoj",
        rating: 4,
        isVerifiedBuyer: true,
        commentText:
          "Good material with strong stitching. Easy to install and protects well from dust and sunlight.",
        postedDateAgo: "2 months ago",
      },
    ],
  },
},
// Product-3
{
  id: "brush-car-glass-cleaner",

  productHeading: "Brush & Car Glass Cleaner",

  title:
    "Oil Film Cleaning Brush & Car Glass Cleaner Anti-Fog Spray | Windshield Defogger & Stain Remover for Interior & Exterior | Anti-Mist, Oil Stain Remover for Car Windows, Mirrors & Glass (Combo Pack)",

  brand:
    "Keep your car windows crystal clear with the Oil Film Cleaning Brush & Anti-Fog Glass Cleaner Combo Pack.",

  price: 280,

  currencySymbol: "₹",

  imagePath: "/products/exterior/brush-car-glass-cleaner-main.png",

  galleryImages: [
    "/Images/exterior/car-cleaner-brush/brush-cleaner-1.png",
    "/Images/exterior/car-cleaner-brush/brush-cleaner-2.png",
    "/Images/exterior/car-cleaner-brush/brush-cleaner-3.png",
    "/Images/exterior/car-cleaner-brush/brush-cleaner-4.png",
  ],

  discountText: "18%",

  ratingData: {
    averageRating: 5.0,
    totalReviewsCount: 100,
    boughtPastMonthText: "100+ reviews",
    soldLastWeekText: "Sold over 100+ times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Anti Fog Spray",
    },
    {
      label: "Feature",
      value: "Anti Mist",
    },
    {
      label: "Feature",
      value: "Oil Stain Remover",
    },
    {
      label: "Feature",
      value: "Windshield Defogger",
    },
  ],

  aboutSections: [
    {
      heading: "Dual-Action Cleaning Kit",
      content:
        "Combines an oil-film cleaning brush with an anti-fog spray to remove buildup while helping maintain clear visibility during everyday driving.",
    },
    {
      heading: "Scratch-Free Glass Cleaning",
      content:
        "Soft cleaning surface removes oil film, dust, stains, and road residue from windshields, mirrors, and windows without scratching.",
    },
    {
      heading: "Comfortable Ergonomic Handle",
      content:
        "Designed with a comfortable grip that allows better control while cleaning large windshields, mirrors, and difficult corners.",
    },
    {
      heading: "Portable & Easy to Store",
      content:
        "Compact design fits easily inside your glove box or car door, making it convenient for regular vehicle maintenance and long journeys.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 90 },
      { stars: 4, percentage: 7 },
      { stars: 3, percentage: 2 },
      { stars: 2, percentage: 1 },
      { stars: 1, percentage: 0 },
    ],

    userFeed: [
      {
        id: "glass-review-1",
        reviewerName: "Rohit",
        rating: 5,
        isVerifiedBuyer: true,
        commentText:
          "Very effective for removing oil film. The anti-fog spray works great during rainy mornings.",
        postedDateAgo: "3 weeks ago",
      },
      {
        id: "glass-review-2",
        reviewerName: "Vikas",
        rating: 5,
        isVerifiedBuyer: true,
        commentText:
          "Easy to use, compact and cleans the windshield perfectly without leaving streaks.",
        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-4
{
  id: "premium-liquid-shampoo",

  productHeading: "Premium Liquid Shampoo",

  title:
    "SOFTSPUN Microfiber 1Ltr Car & Bike pH Neutral Premium Liquid Shampoo + 1700 GSM Double Side Microfiber Glove | Extra Suds | Foam Cannon & Bucket Compatible",

  brand:
    "Premium pH-neutral car & bike shampoo combo with an ultra-absorbent 1700 GSM microfiber wash glove for a scratch-free, deep-clean finish.",

  price: 599,

  currencySymbol: "₹",

  imagePath: "/products/exterior/premium-liquid-shampoo-main.png",

  galleryImages: [
    "/Images/exterior/premium-liquid-shampoo/premium-liquid-shampoo-1.png",
    "/Images/exterior/premium-liquid-shampoo/premium-liquid-shampoo-2.png",
    "/Images/exterior/premium-liquid-shampoo/premium-liquid-shampoo-3.png",
    "/Images/exterior/premium-liquid-shampoo/premium-liquid-shampoo-4.png",
  ],

  discountText: "18%",

  ratingData: {
    averageRating: 4.0,
    totalReviewsCount: 1000,
    boughtPastMonthText: "1k reviews",
    soldLastWeekText: "Sold over 1k times",
  },

  attributes: [
    {
      label: "Feature",
      value: "pH Neutral Formula",
    },
    {
      label: "Feature",
      value: "Extra Suds Cleaning",
    },
    {
      label: "Feature",
      value: "1700 GSM Microfiber Glove",
    },
    {
      label: "Feature",
      value: "Foam Cannon Compatible",
    },
  ],

  aboutSections: [
    {
      heading: "Premium Cleaning Formula",
      content:
        "Produces rich foam that loosens stubborn dirt and grime while preparing your vehicle for a deep and safe wash.",
    },
    {
      heading: "pH Neutral Protection",
      content:
        "Safe for all paint finishes and coatings without damaging your car or bike's exterior during regular use.",
    },
    {
      heading: "Works with Multiple Washing Methods",
      content:
        "Compatible with bucket wash, foam cannon, foam gun and pressure washer for convenient cleaning.",
    },
    {
      heading: "Includes Premium Microfiber Glove",
      content:
        "Comes with an ultra-soft 1700 GSM double-sided microfiber glove for scratch-free washing and excellent water absorption.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 70 },
      { stars: 4, percentage: 20 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "shampoo-review-1",
        reviewerName: "Ajay",
        rating: 5,
        isVerifiedBuyer: true,
        commentText:
          "Creates rich foam and leaves my car looking shiny without affecting the paint.",
        postedDateAgo: "2 weeks ago",
      },
      {
        id: "shampoo-review-2",
        reviewerName: "Sandeep",
        rating: 4,
        isVerifiedBuyer: true,
        commentText:
          "Excellent shampoo with a soft microfiber glove. Great value for money.",
        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-5
{
  id: "car-door-reflective",

  productHeading: "Car Door Reflective",

  title:
    "Careflection Car Door Reflective Open Warning Safety Sticker | Self-Adhesive | High Visibility | Universal Fit (Pack of 4)",

  brand:
    "Enhance road safety with this self-adhesive reflective car door warning sticker that improves visibility at night and in low-light conditions.",

  price: 180,

  currencySymbol: "₹",

  imagePath: "/products/exterior/car-door-reflective-main.png",

  galleryImages: [
    "/Images/exterior/car-door-reflective/car-door-reflective-1.png",
    "/Images/exterior/car-door-reflective/car-door-reflective-2.png",
    "/Images/exterior/car-door-reflective/car-door-reflective-3.png",
    "/Images/exterior/car-door-reflective/car-door-reflective-4.png",
  ],

  discountText: "18%",

  ratingData: {
    averageRating: 3.1,
    totalReviewsCount: 100,
    boughtPastMonthText: "100 reviews",
    soldLastWeekText: "Sold over 100 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Enhanced Safety",
    },
    {
      label: "Feature",
      value: "Strong Self-Adhesive",
    },
    {
      label: "Feature",
      value: "Durable Material",
    },
    {
      label: "Feature",
      value: "Universal Fit",
    },
  ],

  aboutSections: [
    {
      heading: "Improves Night Visibility",
      content:
        "Highly reflective stickers improve the visibility of open car doors during night driving and low-light conditions.",
    },
    {
      heading: "Premium Reflective Material",
      content:
        "Made with durable prism reflective material that offers excellent reflection, weather resistance and scratch protection.",
    },
    {
      heading: "Easy Installation",
      content:
        "Simply clean the surface, peel and stick. Strong adhesive keeps the sticker securely attached while remaining easy to remove.",
    },
    {
      heading: "Universal Vehicle Compatibility",
      content:
        "Suitable for all types of cars and includes four reflective stickers to cover every door for enhanced safety.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 50 },
      { stars: 4, percentage: 25 },
      { stars: 3, percentage: 15 },
      { stars: 2, percentage: 5 },
      { stars: 1, percentage: 5 },
    ],

    userFeed: [
      {
        id: "reflective-review-1",
        reviewerName: "Praveen",
        rating: 4,
        isVerifiedBuyer: true,
        commentText:
          "Easy to apply and very reflective at night. Good safety accessory for every car.",
        postedDateAgo: "3 weeks ago",
      },
      {
        id: "reflective-review-2",
        reviewerName: "Naveen",
        rating: 3,
        isVerifiedBuyer: true,
        commentText:
          "Adhesive is good and installation is simple. Visibility has improved during night parking.",
        postedDateAgo: "2 months ago",
      },
    ],
  },
},


]
},

// Category 4 emergency
{
id: "cat-4",
categoryName: "Emergency & Utility  Products",
slug: "emergency-utility-products",

items: [

{
  id: "emu-prod-1",

  title:
    "Eveready Pocketlite DL100, Rechargeable 1W LED Torch Cum Emergency 2W Sidelight, Type-B",

  brand: "Eveready",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/emergency/eveready-pocketlite-main.png",

  galleryImages: [
    "/products/emergency/eveready-pocketlite-1.png",
    "/products/emergency/eveready-pocketlite-2.png",
    "/products/emergency/eveready-pocketlite-3.png",
    "/products/emergency/eveready-pocketlite-4.png",
  ],

  discountText: "-13%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 1387,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 287 times last week",
  },

  attributes: [
    {
      label: "Main Light",
      value: "1W LED Torch Beam",
    },

    {
      label: "Side Light",
      value: "2W Emergency Side Light",
    },

    {
      label: "Charging",
      value: "Rechargeable Battery with Type-B Port",
    },

    {
      label: "Usage",
      value: "Emergency Lighting and Portable Torch",
    },

    {
      label: "Battery Backup",
      value: "Long Duration Portable Runtime",
    },
  ],

  aboutSections: [
    {
      heading: "Dual Light Utility",

      content:
        "Functions both as focused LED torch and wide emergency sidelight for multiple lighting situations.",
    },

    {
      heading: "Rechargeable Convenience",

      content:
        "Built-in rechargeable battery eliminates constant battery replacement and supports repeated daily use.",
    },

    {
      heading: "Emergency Ready Design",

      content:
        "Useful during power cuts, vehicle breakdowns, roadside emergencies and outdoor night usage.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Rechargeable Battery",
    "Emergency Ready",
    "Portable Design",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 74 },
      { stars: 4, percentage: 15 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "emu-review-1",

        reviewerName: "Rohan",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Very bright torch output and emergency side light becomes extremely useful during power cuts.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/eveready-review-1.png",
        ],
      },

      {
        id: "emu-review-2",

        reviewerName: "Adarsh",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Battery backup is solid and build quality feels much better than normal emergency torches.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},

{
  id: "emu-prod-2",

  title:
    "Car Safety Window Hammer and Seat Belt Cutter with Holder",

  brand: "SafeDrive",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/emergency/window-hammer-main.png",

  galleryImages: [
    "/products/emergency/window-hammer-1.png",
    "/products/emergency/window-hammer-2.png",
    "/products/emergency/window-hammer-3.png",
    "/products/emergency/window-hammer-4.png",
  ],

  discountText: "-11%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 954,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 171 times last week",
  },

  attributes: [
    {
      label: "Primary Function",
      value: "Emergency Glass Breaking Tool",
    },

    {
      label: "Secondary Function",
      value: "Integrated Seat Belt Cutter",
    },

    {
      label: "Material",
      value: "High Strength Steel Impact Head",
    },

    {
      label: "Mounting",
      value: "Storage Holder Included",
    },

    {
      label: "Use Case",
      value: "Vehicle Emergency Escape Tool",
    },
  ],

  aboutSections: [
    {
      heading: "Emergency Escape Tool",

      content:
        "Designed to break vehicle side windows quickly during emergency situations requiring immediate exit.",
    },

    {
      heading: "Integrated Seat Belt Cutter",

      content:
        "Sharp protected blade allows rapid cutting of jammed seat belts after vehicle accidents.",
    },

    {
      heading: "Vehicle Safety Essential",

      content:
        "Compact emergency rescue tool recommended for storing inside every vehicle for roadside safety preparation.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Emergency Safety Tool",
    "Vehicle Rescue Utility",
    "Compact Storage Design",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 72 },
      { stars: 4, percentage: 17 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "emu-review-3",

        reviewerName: "Kunal",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Feels strong and well built. Good product to keep inside car for emergency preparedness.",

        postedDateAgo: "1 month ago",

        userUploadedMedia: [
          "/reviews/windowhammer-review-1.png",
        ],
      },

      {
        id: "emu-review-4",

        reviewerName: "Arjun",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Hopefully never need to use it, but build quality inspires confidence and holder keeps it secure.",

        postedDateAgo: "3 months ago",
      },
    ],
  },
},

{
  id: "emu-prod-3",

  title:
    "NEU Medical Doctor Pocket LED Pen Torch with Knee Hammer - High Lux Intensity Torch & Heavy",

  brand: "NEU Medical",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/emergency/neu-medical-main.png",

  galleryImages: [
    "/products/emergency/neu-medical-1.png",
    "/products/emergency/neu-medical-2.png",
    "/products/emergency/neu-medical-3.png",
    "/products/emergency/neu-medical-4.png",
  ],

  discountText: "-12%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 812,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 149 times last week",
  },

  attributes: [
    {
      label: "Light Type",
      value: "High Lux LED Pen Torch",
    },

    {
      label: "Accessory",
      value: "Integrated Reflex Knee Hammer",
    },

    {
      label: "Material",
      value: "Heavy Duty Metal Body",
    },

    {
      label: "Usage",
      value: "Medical Examination and Emergency Inspection",
    },

    {
      label: "Portability",
      value: "Pocket Carry Compact Design",
    },
  ],

  aboutSections: [
    {
      heading: "Professional Medical Utility",

      content:
        "Designed for diagnostic examination usage requiring focused bright LED light and reflex testing support.",
    },

    {
      heading: "High Intensity Beam",

      content:
        "Concentrated LED output provides clear inspection visibility in low light environments and emergency situations.",
    },

    {
      heading: "Portable Pocket Design",

      content:
        "Compact lightweight design fits easily inside coat pocket, emergency kit or portable utility bag.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "High Intensity LED",
    "Portable Pocket Size",
    "Heavy Duty Build",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 71 },
      { stars: 4, percentage: 17 },
      { stars: 3, percentage: 7 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "emu-review-5",

        reviewerName: "Dev",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Torch brightness is excellent and metal construction feels solid for regular emergency kit usage.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/neu-review-1.png",
        ],
      },

      {
        id: "emu-review-6",

        reviewerName: "Pranav",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Compact size and useful multi-purpose tool for carrying inside professional work bag.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},

{
  id: "emu-prod-4",

  title:
    "STARQ Inflate Pro Portable 2in1 Tyre Inflator/Air Compressor with Digital Display|4000mAh",

  brand: "STARQ",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/emergency/starq-inflator-main.png",

  galleryImages: [
    "/products/emergency/starq-inflator-1.png",
    "/products/emergency/starq-inflator-2.png",
    "/products/emergency/starq-inflator-3.png",
    "/products/emergency/starq-inflator-4.png",
  ],

  discountText: "-18%",

  ratingData: {
    averageRating: 4.5,

    totalReviewsCount: 1479,

    boughtPastMonthText: "1K+ bought in past month",

    soldLastWeekText: "Sold over 318 times last week",
  },

  attributes: [
    {
      label: "Device Type",
      value: "Portable 2-in-1 Tyre Inflator",
    },

    {
      label: "Battery",
      value: "4000mAh Rechargeable Battery",
    },

    {
      label: "Display",
      value: "Digital Pressure Display Screen",
    },

    {
      label: "Function",
      value: "Air Compressor and Pressure Inflation",
    },

    {
      label: "Compatibility",
      value: "Cars, Bikes, Cycles and Utility Equipment",
    },
  ],

  aboutSections: [
    {
      heading: "Portable Inflation System",

      content:
        "Portable compressor allows emergency tyre inflation without depending on external roadside air stations.",
    },

    {
      heading: "Digital Pressure Monitoring",

      content:
        "Built-in digital display allows accurate tyre pressure monitoring during inflation operations.",
    },

    {
      heading: "Emergency Travel Utility",

      content:
        "Useful roadside emergency accessory for handling low tyre pressure during long distance driving situations.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Portable Air Compressor",
    "Digital Pressure Display",
    "Rechargeable Battery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 76 },
      { stars: 4, percentage: 14 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "emu-review-7",

        reviewerName: "Yuvraj",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Inflates car tyres quickly and digital display makes pressure monitoring very convenient.",

        postedDateAgo: "1 month ago",

        userUploadedMedia: [
          "/reviews/starq-review-1.png",
        ],
      },

      {
        id: "emu-review-8",

        reviewerName: "Rahul",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Battery backup is decent and definitely useful during unexpected low tyre pressure emergencies.",

        postedDateAgo: "3 months ago",
      },
    ],
  },
},

{
  id: "emu-prod-5",

  title:
    "Portable LED Flashlight COB Keychain Emergency Light for Outdoor Rechargeable Flashlights",

  brand: "LiteGear",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/emergency/cob-keychain-main.png",

  galleryImages: [
    "/products/emergency/cob-keychain-1.png",
    "/products/emergency/cob-keychain-2.png",
    "/products/emergency/cob-keychain-3.png",
    "/products/emergency/cob-keychain-4.png",
  ],

  discountText: "-10%",

  ratingData: {
    averageRating: 4.5,
    totalReviewsCount: 1096,
    boughtPastMonthText: "1K+ bought in past month",
    soldLastWeekText: "Sold over 226 times last week",
  },

  attributes: [
    {
      label: "Light Type",
      value: "COB LED Emergency Light",
    },

    {
      label: "Portability",
      value: "Pocket Size Keychain Design",
    },

    {
      label: "Charging",
      value: "USB Rechargeable Battery",
    },

    {
      label: "Usage",
      value: "Outdoor, Emergency and Daily Carry",
    },

    {
      label: "Brightness",
      value: "Wide Angle Emergency Illumination",
    },
  ],

  aboutSections: [
    {
      heading: "Compact Emergency Carry",

      content:
        "Small keychain design allows easy carrying for instant access during power cuts and emergency situations.",
    },

    {
      heading: "COB Wide Lighting",

      content:
        "COB LED technology provides broad illumination coverage instead of narrow focused beam lighting.",
    },

    {
      heading: "Rechargeable Utility",

      content:
        "Rechargeable battery design eliminates disposable battery replacement and supports repeated use.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Pocket Size Portable",
    "USB Rechargeable",
    "Emergency Ready",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 73 },
      { stars: 4, percentage: 16 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "emu-review-9",

        reviewerName: "Kabir",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Very small but surprisingly bright. Excellent backup light for keeping attached to keys.",

        postedDateAgo: "1 month ago",

        userUploadedMedia: [
          "/reviews/cob-review-1.png",
        ],
      },

      {
        id: "emu-review-10",

        reviewerName: "Naman",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Useful emergency flashlight and battery lasts longer than expected for such compact size.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},

{
  id: "emu-prod-6",

  title:
    "Portronics AUTO 12 in-Car Bluetooth Receiver for Handsfree Calling, Music System, Supports All Smartphones (Black)",

  brand: "Portronics",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/emergency/portronics-auto12-main.png",

  galleryImages: [
    "/products/emergency/portronics-auto12-1.png",
    "/products/emergency/portronics-auto12-2.png",
    "/products/emergency/portronics-auto12-3.png",
    "/products/emergency/portronics-auto12-4.png",
  ],

  discountText: "-15%",

  ratingData: {
    averageRating: 4.5,
    totalReviewsCount: 1528,
    boughtPastMonthText: "1K+ bought in past month",
    soldLastWeekText: "Sold over 337 times last week",
  },

  attributes: [
    {
      label: "Connectivity",
      value: "Bluetooth Wireless Receiver",
    },

    {
      label: "Function",
      value: "Handsfree Calling and Music Streaming",
    },

    {
      label: "Compatibility",
      value: "All Smartphones Supported",
    },

    {
      label: "Installation",
      value: "Car AUX Audio Connection",
    },

    {
      label: "Color",
      value: "Matte Black Finish",
    },
  ],

  aboutSections: [
    {
      heading: "Wireless Music Streaming",

      content:
        "Converts standard car audio systems into Bluetooth enabled wireless music playback systems.",
    },

    {
      heading: "Handsfree Calling Support",

      content:
        "Allows safer driving by enabling wireless handsfree calling through connected smartphone devices.",
    },

    {
      heading: "Universal Smartphone Compatibility",

      content:
        "Works across Android phones, iPhones and Bluetooth compatible mobile devices without complex setup.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Bluetooth Connectivity",
    "Handsfree Calling",
    "Universal Device Support",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 75 },
      { stars: 4, percentage: 14 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "emu-review-11",

        reviewerName: "Saket",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Connected instantly with my phone and now old car stereo supports wireless music perfectly.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/portronics-review-1.png",
        ],
      },

      {
        id: "emu-review-12",

        reviewerName: "Ishan",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Very useful for older cars without Bluetooth support. Calling quality is quite clear.",

        postedDateAgo: "5 months ago",
      },
    ],
  },
},

{
  id: "emu-prod-7",

  title:
    "Morelian Car HUD Display, OBDⅡ+GPS Smart Gauge High Definition Speedometer Car Diagnostic Tool OBD Fault Code Elimination Safe Driving Computer Overspeed Fault Alarm for All Vehicles",

  brand: "Morelian",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/emergency/morelian-hud-main.png",

  galleryImages: [
    "/products/emergency/morelian-hud-1.png",
    "/products/emergency/morelian-hud-2.png",
    "/products/emergency/morelian-hud-3.png",
    "/products/emergency/morelian-hud-4.png",
  ],

  discountText: "-17%",

  ratingData: {
    averageRating: 4.5,
    totalReviewsCount: 1267,
    boughtPastMonthText: "1K+ bought in past month",
    soldLastWeekText: "Sold over 249 times last week",
  },

  attributes: [
    {
      label: "Connectivity",
      value: "OBD II + GPS Dual Support",
    },

    {
      label: "Display",
      value: "High Definition Digital HUD Display",
    },

    {
      label: "Functions",
      value: "Speedometer + Diagnostics + Fault Detection",
    },

    {
      label: "Safety Features",
      value: "Overspeed Alarm and Fault Warning",
    },

    {
      label: "Compatibility",
      value: "Universal Vehicle Support",
    },
  ],

  aboutSections: [
    {
      heading: "Real Time Driving Data",

      content:
        "Displays vehicle speed, RPM, battery voltage and driving data directly on dashboard in real time.",
    },

    {
      heading: "Vehicle Diagnostics",

      content:
        "Reads OBD fault codes and helps identify engine or system level diagnostic issues quickly.",
    },

    {
      heading: "Safe Driving Alerts",

      content:
        "Overspeed warning and fault alerts improve driver awareness and road safety during long journeys.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "GPS + OBD Support",
    "Real Time Diagnostics",
    "Safe Driving Alerts",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 74 },
      { stars: 4, percentage: 15 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "emu-review-13",

        reviewerName: "Shrey",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Very accurate speed display and fault diagnostics helped identify engine warning issue quickly.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/morelian-review-1.png",
        ],
      },

      {
        id: "emu-review-14",

        reviewerName: "Aniket",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Useful dashboard gadget and overspeed warning feature works surprisingly well during highway driving.",

        postedDateAgo: "4 months ago",
      },
    ],
  },
},

{
  id: "emu-prod-8",

  title:
    "Brago TurboVac Cordless Vacuum Cleaner for Car & Home, 18500Pa Powerful Suction, 4-in-1 Portable Vacuum & Air Blower, 9600mAh Battery (40 Mins Runtime), 3-Speed BLDC Motor",

  brand: "Brago",

  price: 3599,

  currencySymbol: "$",

  imagePath: "/products/emergency/brago-vacuum-main.png",

  galleryImages: [
    "/products/emergency/brago-vacuum-1.png",
    "/products/emergency/brago-vacuum-2.png",
    "/products/emergency/brago-vacuum-3.png",
    "/products/emergency/brago-vacuum-4.png",
  ],

  discountText: "-22%",

  ratingData: {
    averageRating: 4.6,
    totalReviewsCount: 1834,
    boughtPastMonthText: "1K+ bought in past month",
    soldLastWeekText: "Sold over 401 times last week",
  },

  attributes: [
    {
      label: "Suction Power",
      value: "18500Pa High Suction",
    },

    {
      label: "Battery",
      value: "9600mAh Rechargeable Battery",
    },

    {
      label: "Runtime",
      value: "40 Minutes Continuous Usage",
    },

    {
      label: "Motor",
      value: "3-Speed BLDC Motor",
    },

    {
      label: "Functions",
      value: "Vacuum Cleaner + Air Blower 4-in-1",
    },
  ],

  aboutSections: [
    {
      heading: "Deep Dust Cleaning",

      content:
        "Powerful suction removes dirt particles deeply trapped inside seats, carpets and dashboard edges efficiently.",
    },

    {
      heading: "Multi Utility Design",

      content:
        "Functions as portable vacuum cleaner and air blower for both vehicle and home cleaning tasks.",
    },

    {
      heading: "Long Battery Backup",

      content:
        "Large battery capacity supports extended cordless cleaning sessions without charging interruptions.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "High Suction Power",
    "Cordless Portable Design",
    "1 Year Warranty",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 79 },
      { stars: 4, percentage: 11 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "emu-review-15",

        reviewerName: "Aviral",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Powerful cleaning performance and battery backup easily lasts through full car cleaning sessions.",

        postedDateAgo: "1 month ago",

        userUploadedMedia: [
          "/reviews/brago-emergency-review-1.png",
        ],
      },

      {
        id: "emu-review-16",

        reviewerName: "Pratik",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Excellent portable vacuum and air blower mode makes dashboard cleaning much easier.",

        postedDateAgo: "3 months ago",
      },
    ],
  },
},

{
  id: "emu-prod-9",

  title:
    "Morelian Car HUD Display, OBDⅡ+GPS Smart Gauge High Definition Speedometer Car Diagnostic Tool OBD Fault Code Elimination Safe Driving Computer Overspeed Fault Alarm for All Vehicles",

  brand: "Morelian",

  price: 1437,

  currencySymbol: "$",

  imagePath: "/products/emergency/morelian-hud-pro-main.png",

  galleryImages: [
    "/products/emergency/morelian-hud-pro-1.png",
    "/products/emergency/morelian-hud-pro-2.png",
    "/products/emergency/morelian-hud-pro-3.png",
    "/products/emergency/morelian-hud-pro-4.png",
  ],

  discountText: "-16%",

  ratingData: {
    averageRating: 4.5,
    totalReviewsCount: 1182,
    boughtPastMonthText: "1K+ bought in past month",
    soldLastWeekText: "Sold over 233 times last week",
  },

  attributes: [
    {
      label: "Display Type",
      value: "Advanced HUD Projection Display",
    },

    {
      label: "Connectivity",
      value: "GPS + OBD II Integration",
    },

    {
      label: "Monitoring",
      value: "Speed, Voltage and Fault Monitoring",
    },

    {
      label: "Safety",
      value: "Overspeed Warning Alarm",
    },

    {
      label: "Vehicle Support",
      value: "Universal Vehicle Compatibility",
    },
  ],

  aboutSections: [
    {
      heading: "Advanced Vehicle Monitoring",

      content:
        "Monitors speed, battery voltage and diagnostic information continuously during driving operation.",
    },

    {
      heading: "Fault Detection System",

      content:
        "Detects vehicle fault codes early and helps drivers identify possible maintenance issues faster.",
    },

    {
      heading: "Driving Safety Enhancement",

      content:
        "HUD projection and overspeed warning reduce distraction while improving real-time driving awareness.",
    },
  ],

  shippingBadges: [
    "Free Delivery",
    "Advanced HUD Display",
    "Fault Detection Support",
    "Driving Safety Alerts",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 73 },
      { stars: 4, percentage: 16 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "emu-review-17",

        reviewerName: "Lakshay",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Displays speed data accurately and makes dashboard feel much more premium and tech enabled.",

        postedDateAgo: "2 months ago",

        userUploadedMedia: [
          "/reviews/morelian-pro-review-1.png",
        ],
      },

      {
        id: "emu-review-18",

        reviewerName: "Harit",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Diagnostic features are useful and overspeed warning works reliably during highway driving.",

        postedDateAgo: "5 months ago",
      },
    ],
  },
},




]
},

//Category 5 car interiors completed
{
id: "cat-5",
categoryName: "Car Interiors",
slug: "car-interiors",

items: [
  // Product-1
{
  id: "car-dashboard-dresser",

  productHeading: "Car Dashboard Dresser",

  title:
    "3M Car Dashboard Dresser (500 ml) | Restores Gloss and Shine on Dashboard and Other Plastic Parts | Protection from UV Rays and Fading",

  brand:
    "Give your car's interior a fresh, showroom-like finish with the 3M Car Dashboard Dresser (500 ml).",

  price: 499,

  currencySymbol: "₹",

  imagePath: "/products/interiors/car-dashboard-dresser-main.png",

  galleryImages: [
    "/Images/interiors/car-dashboard-dresser/car-dashboard-dresser-1.png",
    "/Images/interiors/car-dashboard-dresser/car-dashboard-dresser-2.png",
    "/Images/interiors/car-dashboard-dresser/car-dashboard-dresser-3.png",
    "/Images/interiors/car-dashboard-dresser/car-dashboard-dresser-4.png",
  ],

  discountText: "12%",

  ratingData: {
    averageRating: 4.2,
    totalReviewsCount: 24000,
    boughtPastMonthText: "24k reviews",
    soldLastWeekText: "Sold over 24k times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Restores Gloss",
    },
    {
      label: "Feature",
      value: "Shine on Dashboard",
    },
    {
      label: "Feature",
      value: "Plastic Parts",
    },
    {
      label: "Feature",
      value: "UV Rays Protection",
    },
  ],

  aboutSections: [
    {
      heading: "Restores Gloss & Shine",
      content:
        "Effectively restores gloss on dashboards, door panels and trims, giving your car interior a fresh showroom-like appearance.",
    },
    {
      heading: "Multi-Surface Protection",
      content:
        "Protects plastic, vinyl and rubber surfaces from UV rays and fading while bringing back their original shine.",
    },
    {
      heading: "Easy DIY Application",
      content:
        "Simple spray-on formula delivers a high-gloss, non-greasy finish without leaving sticky residue.",
    },
    {
      heading: "Fresh Interior Look",
      content:
        "Leaves behind a pleasant fragrance while making your vehicle interiors look clean, polished and brand new.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 75 },
      { stars: 4, percentage: 17 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 1 },
    ],

    userFeed: [
      {
        id: "int-review-1",

        reviewerName: "Amit",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Very easy to use and gives my dashboard a premium glossy finish without feeling greasy.",

        postedDateAgo: "2 weeks ago",
      },
      {
        id: "int-review-2",

        reviewerName: "Rakesh",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Nice fragrance and excellent UV protection. Dashboard looks brand new after every use.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-2
{
  id: "car-perfume-air-freshener",

  productHeading: "Car Perfume Air Freshener",

  title:
    "Car Perfume Air Freshener | Long Lasting Fragrance for Car Interior | Premium Luxury Scent for Fresh & Pleasant Drive | Easy to Use Car Freshener for All Vehicles (Floral)",

  brand:
    "Transform every drive into a refreshing experience with the Car Perfume Air Freshener (Floral).",

  price: 399,

  currencySymbol: "₹",

  imagePath: "/products/interiors/car-perfume-main.jpg",

  galleryImages: [
    "/Images/interiors/car-perfume/car-perfume-1.jpg",
    "/Images/interiors/car-perfume/car-perfume-2.jpg",
    "/Images/interiors/car-perfume/car-perfume-3.jpg",
    "/Images/interiors/car-perfume/car-perfume-4.jpg",
  ],

  discountText: "20%",

  ratingData: {
    averageRating: 4.6,
    totalReviewsCount: 300,
    boughtPastMonthText: "300 reviews",
    soldLastWeekText: "Sold over 300 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Long Lasting Fragrance",
    },
    {
      label: "Feature",
      value: "Car Interior",
    },
    {
      label: "Feature",
      value: "Premium Luxury",
    },
    {
      label: "Feature",
      value: "Easy to Use",
    },
  ],

  aboutSections: [
    {
      heading: "Long Lasting Car Freshener",
      content:
        "Advanced aroma oil diffuser provides a refreshing fragrance for up to 45 days, helping eliminate bad odours and keeping your car interior fresh.",
    },
    {
      heading: "Premium Quality Materials",
      content:
        "Made with a premium glass bottle and wooden diffuser cap for controlled fragrance release and long-lasting performance.",
    },
    {
      heading: "Eco-Friendly & Refillable",
      content:
        "Refillable design reduces waste while offering a sustainable solution for maintaining a pleasant fragrance inside your vehicle.",
    },
    {
      heading: "Easy to Use",
      content:
        "Simply remove the seal, tighten the wooden cap, invert the bottle for a few seconds and hang it from the rear-view mirror for continuous freshness.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 78 },
      { stars: 4, percentage: 15 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 1 },
      { stars: 1, percentage: 1 },
    ],

    userFeed: [
      {
        id: "int-review-3",

        reviewerName: "Kiran",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "The fragrance lasts for weeks and keeps my car smelling fresh every day. Looks premium too.",

        postedDateAgo: "3 weeks ago",
      },
      {
        id: "int-review-4",

        reviewerName: "Naveen",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Easy to install, elegant design and the floral fragrance is pleasant without being overpowering.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-3
{
  id: "ultimate-car-neck-rest-pillow",

  productHeading: "Ultimate Car Neck Rest Pillow",

  title:
    "Ultimate Car Neck Rest Pillow | Memory Foam Cervical Support Cushion | Ergonomic Headrest Pillow for Car, SUV & Office Chair | Breathable & Washable Cover",

  brand:
    "Experience superior driving comfort with the Ultimate Car Neck Rest Pillow designed to reduce neck strain and improve posture.",

  price: 799,

  currencySymbol: "₹",

  imagePath: "/products/interiors/ultimate-car-neck-rest-pillow-main.jpg",

  galleryImages: [
    "/Images/interiors/ultimate-car-neck-rest-pillow/ultimate-car-neck-rest-pillow-1.jpg",
    "/Images/interiors/ultimate-car-neck-rest-pillow/ultimate-car-neck-rest-pillow-2.jpg",
    "/Images/interiors/ultimate-car-neck-rest-pillow/ultimate-car-neck-rest-pillow-3.jpg",
    "/Images/interiors/ultimate-car-neck-rest-pillow/ultimate-car-neck-rest-pillow-4.jpg",
  ],

  discountText: "15%",

  ratingData: {
    averageRating: 4.7,
    totalReviewsCount: 1200,
    boughtPastMonthText: "1.2k reviews",
    soldLastWeekText: "Sold over 1200 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Memory Foam",
    },
    {
      label: "Feature",
      value: "Neck Support",
    },
    {
      label: "Feature",
      value: "Ergonomic Design",
    },
    {
      label: "Feature",
      value: "Breathable Cover",
    },
  ],

  aboutSections: [
    {
      heading: "Ergonomic Neck Support",
      content:
        "Designed to naturally support the neck and cervical spine, helping reduce fatigue during daily commuting and long-distance travel.",
    },
    {
      heading: "Premium Memory Foam",
      content:
        "Made with high-density memory foam that adapts to your neck shape while providing consistent comfort and pressure relief.",
    },
    {
      heading: "Breathable & Washable Cover",
      content:
        "Features a soft, breathable fabric cover that promotes airflow and can be easily removed for cleaning and maintenance.",
    },
    {
      heading: "Universal Fit",
      content:
        "Adjustable elastic strap allows quick installation on most car seats, SUVs, office chairs and gaming chairs.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 84 },
      { stars: 4, percentage: 10 },
      { stars: 3, percentage: 4 },
      { stars: 2, percentage: 1 },
      { stars: 1, percentage: 1 },
    ],

    userFeed: [
      {
        id: "int-review-5",

        reviewerName: "Praveen",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Excellent neck support during long drives. The memory foam is soft yet supportive and feels premium.",

        postedDateAgo: "2 weeks ago",
      },
      {
        id: "int-review-6",

        reviewerName: "Manoj",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Very comfortable and easy to install. My neck pain has reduced significantly on highway trips.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-4
{
  id: "orthopaedic-car-cushion-pillows",

  productHeading: "Orthopaedic Car Cushion Pillows",

  title:
    "Orthopaedic Car Seat Cushion & Back Support Pillow | Memory Foam Lumbar Support | Ergonomic Driving Cushion for Car, Office & Home",

  brand:
    "Drive comfortably with premium orthopaedic memory foam cushions designed to improve posture and reduce back fatigue.",

  price: 1499,

  currencySymbol: "₹",

  imagePath: "/products/interiors/car-cushion-pillows-main.jpg",

  galleryImages: [
    "/Images/interiors/car-cushion-pillows/car-cushion-pillows-1.jpg",
    "/Images/interiors/car-cushion-pillows/car-cushion-pillows-2.jpg",
    "/Images/interiors/car-cushion-pillows/car-cushion-pillows-3.jpg",
    "/Images/interiors/car-cushion-pillows/car-cushion-pillows-4.jpg",
  ],

  discountText: "18%",

  ratingData: {
    averageRating: 4.8,
    totalReviewsCount: 2100,
    boughtPastMonthText: "2.1k reviews",
    soldLastWeekText: "Sold over 2100 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Memory Foam",
    },
    {
      label: "Feature",
      value: "Orthopaedic Support",
    },
    {
      label: "Feature",
      value: "Lumbar Cushion",
    },
    {
      label: "Feature",
      value: "Ergonomic Design",
    },
  ],

  aboutSections: [
    {
      heading: "Orthopaedic Comfort",
      content:
        "Designed to provide excellent lower back and hip support while maintaining proper sitting posture during long drives.",
    },
    {
      heading: "Premium Memory Foam",
      content:
        "High-density memory foam evenly distributes body weight and relieves pressure on the spine and tailbone.",
    },
    {
      heading: "Breathable Fabric Cover",
      content:
        "Soft, breathable mesh fabric improves airflow and features a removable washable cover for easy maintenance.",
    },
    {
      heading: "Universal Compatibility",
      content:
        "Suitable for cars, SUVs, office chairs and home seating with adjustable straps for secure installation.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 86 },
      { stars: 4, percentage: 9 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 1 },
      { stars: 1, percentage: 1 },
    ],

    userFeed: [
      {
        id: "int-review-7",

        reviewerName: "Harish",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Excellent lumbar support. Makes long highway journeys much more comfortable.",

        postedDateAgo: "3 weeks ago",
      },
      {
        id: "int-review-8",

        reviewerName: "Rohit",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Premium quality memory foam and very comfortable for daily office and car use.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-5
{
  id: "car-trash-bin-holder",

  productHeading: "Car Trash Bin Can Holder",

  title:
    "Car Trash Bin Can Holder | Leakproof Mini Dustbin with Lid | Portable Car Garbage Bin for Cars, SUVs & Office Use",

  brand:
    "Keep your vehicle clean and organized with this compact leakproof car trash bin featuring a convenient flip lid.",

  price: 399,

  currencySymbol: "₹",

  imagePath: "/products/interiors/car-trash-bin-holder-main.jpg",

  galleryImages: [
    "/Images/interiors/car-trash-bin-holder/car-trash-bin-holder-1.jpg",
    "/Images/interiors/car-trash-bin-holder/car-trash-bin-holder-2.jpg",
    "/Images/interiors/car-trash-bin-holder/car-trash-bin-holder-3.jpg",
    "/Images/interiors/car-trash-bin-holder/car-trash-bin-holder-4.jpg",
  ],

  discountText: "15%",

  ratingData: {
    averageRating: 4.5,
    totalReviewsCount: 950,
    boughtPastMonthText: "950 reviews",
    soldLastWeekText: "Sold over 950 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Leakproof Design",
    },
    {
      label: "Feature",
      value: "Portable Dustbin",
    },
    {
      label: "Feature",
      value: "Flip Lid",
    },
    {
      label: "Feature",
      value: "Universal Fit",
    },
  ],

  aboutSections: [
    {
      heading: "Compact & Space Saving",
      content:
        "Designed to fit conveniently in cup holders, door pockets or seat back storage without occupying extra space.",
    },
    {
      heading: "Leakproof Construction",
      content:
        "Secure lid helps prevent spills and unpleasant odours while keeping your vehicle neat and hygienic.",
    },
    {
      heading: "Easy to Empty & Clean",
      content:
        "Wide opening allows quick disposal of waste while the durable plastic body can be washed and reused easily.",
    },
    {
      heading: "Multi-Purpose Usage",
      content:
        "Ideal for cars, SUVs, offices and homes to store tissues, wrappers, receipts and other small waste items.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 80 },
      { stars: 4, percentage: 13 },
      { stars: 3, percentage: 4 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 1 },
    ],

    userFeed: [
      {
        id: "int-review-9",

        reviewerName: "Anil",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Very useful accessory. Fits perfectly in my car door pocket and keeps the cabin clean.",

        postedDateAgo: "2 weeks ago",
      },
      {
        id: "int-review-10",

        reviewerName: "Sandeep",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Compact, leakproof and easy to clean. A must-have for family trips.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},

]
},
//Category 6  car-Esentials completed
{
id: "cat-6",
categoryName: "Car Essentials",
slug: "car-essentials",

items: [

  //Product-1
{
  id: "premium-car-air-freshener",

  productHeading: "Premium Car Air Freshener",

  title:
    "Premium Car Air Freshener with Essential Oil | Long Lasting Car Perfume | Dashboard Aroma Diffuser",


  brand: "Elevate every journey with the timeless elegance of Premium White Oud Car Air Freshener.",

  price: 500,

  currencySymbol: "₹",

  imagePath: "/products/essentials/Premium-car-air-freshner-main.png",

  galleryImages: [
    "/Images/essentials/air-freshner/Air-freshner-1.png",
    "/Images/essentials/air-freshner/Air-freshner-2.png",
    "/Images/essentials/air-freshner/Air-freshner-3.png",
    "/Images/essentials/air-freshner/Air-freshner-4.png",
  ],

  discountText: "18%",

  ratingData: {
    averageRating: 4.8,
    totalReviewsCount: 980,
    boughtPastMonthText: "980 reviews",
    soldLastWeekText: "Sold over 238 times last week",
  },

  attributes: [
  {
    label: "Feature",
    value: "Essential Oud Oil",
  },
  {
    label: "Feature",
    value: "Long Lasting Car Perfume",
  },
  {
    label: "Feature",
    value: "Dashboard Aroma Diffuser",
  },
  {
    label: "Feature",
    value: "Fragrance Based",
  },
],

  aboutSections: [
    {
      heading: "Long-Lasting Premium Fragrance",
      content:
        "Infused with high-quality essential oils that provide a pleasant and refreshing aroma for weeks, keeping your car interior fresh throughout every journey.",
    },
    {
      heading: "Elegant Dashboard Design",
      content:
        "Designed with a premium metal body that blends perfectly with modern car interiors while adding a stylish and luxurious appearance.",
    },
    {
      heading: "Natural Essential Oil Diffusion",
      content:
        "Releases fragrance gradually without harsh chemicals, creating a comfortable driving environment suitable for daily commuting and long road trips.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 82 },
      { stars: 4, percentage: 12 },
      { stars: 3, percentage: 4 },
      { stars: 2, percentage: 1 },
      { stars: 1, percentage: 1 },
    ],

    userFeed: [
      {
        id: "ess-review-1",

        reviewerName: "Rahul",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Amazing fragrance and very premium quality. My car smells fresh throughout the day.",

        postedDateAgo: "1 month ago",
      },
      {
        id: "ess-review-2",

        reviewerName: "Suresh",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Elegant design with a long-lasting fragrance. Worth the price and looks great on the dashboard.",

        postedDateAgo: "2 months ago",
      },
    ],
  },
},
  
  //Product-2
{
  id: "microfiber-cloth",

  productHeading: "Microfiber Cloth",

  title:
    "Microfiber Cloth Silk Banded Edges 800 GSM 30X40 cms 3pcs Yellow + Grey | Extra Thick Microfiber Cleaning Cloths | Perfect for Bike, Auto & Cars | Interior & Exterior",

  brand:
    "Premium 800 GSM Microfiber Cloth with Silk Banded Edges for Superior Cleaning and Scratch-Free Finish.",

  price: 300,

  currencySymbol: "₹",

  imagePath: "/products/essentials/micro-fiber-cloth-main.png",

  galleryImages: [
    "/Images/essentials/microfiber-cloth/Microfiber-cloth-1.png",
    "/Images/essentials/microfiber-cloth/Microfiber-cloth-2.png",
    "/Images/essentials/microfiber-cloth/Microfiber-cloth-3.png",
    "/Images/essentials/microfiber-cloth/Microfiber-cloth-4.png",
  ],

  discountText: "18%",

  ratingData: {
    averageRating: 4.5,
    totalReviewsCount: 300,
    boughtPastMonthText: "300 reviews",
    soldLastWeekText: "Sold over 300 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Silk Banded",
    },
    {
      label: "Feature",
      value: "Thick Microfiber Cleaning Cloth",
    },
    {
      label: "Feature",
      value: "Perfect for Bike, Auto & Cars",
    },
    {
      label: "Feature",
      value: "Interior & Exterior Use",
    },
  ],

  aboutSections: [
    {
      heading: "Premium 800 GSM Microfiber",
      content:
        "Made from ultra-soft 800 GSM microfiber with 80% polyester and 20% polyamide, providing superior absorption and a scratch-free cleaning experience.",
    },
    {
      heading: "Silk Banded Durable Edges",
      content:
        "Features premium silk banded edges with rounded corners to prevent fraying, making the cloth long-lasting and safe for delicate automotive surfaces.",
    },
    {
      heading: "Multi-Purpose Cleaning Cloth",
      content:
        "Ideal for cleaning car interiors, exteriors, mirrors, dashboards, bikes, electronics, and household surfaces. Effectively removes dust, grease, wax, and dirt without leaving lint or scratches.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 74 },
      { stars: 4, percentage: 18 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 1 },
    ],

    userFeed: [
      {
        id: "ess-review-3",

        reviewerName: "Vikram",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Very thick and soft microfiber cloth. Cleans my car without leaving scratches and absorbs water quickly.",

        postedDateAgo: "3 weeks ago",
      },
      {
        id: "ess-review-4",

        reviewerName: "Arjun",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Excellent quality towels with silk edges. Perfect for polishing and interior cleaning.",

        postedDateAgo: "2 months ago",
      },
    ],
  },
},
//Product-3
{
  id: "shinexpro-car-duster",

  productHeading: "ShineXPro Car Duster",

  title:
    "ShineXPro Car Duster | Lint-Free & Scratch-Free Car Cleaner Brush | Long Handle | Paraffin Wax Coating for 2X Better Cleaning Performance",

  brand:
    "Quick & Easy Dust Removal with Premium Lint-Free Microfiber Car Duster for Everyday Car Care.",

  price: 999,

  currencySymbol: "₹",

  imagePath: "/products/essentials/shine-pro-max-main.png",

  galleryImages: [
    "/Images/essentials/car-duster/Car-duster-1.png",
    "/Images/essentials/car-duster/Car-duster-2.png",
    "/Images/essentials/car-duster/Car-duster-3.png",
    "/Images/essentials/car-duster/Car-duster-4.png",
  ],

  discountText: "18%",

  ratingData: {
    averageRating: 4.4,
    totalReviewsCount: 6000,
    boughtPastMonthText: "6000+ reviews",
    soldLastWeekText: "Sold over 6000 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Lint-Free & Scratch-Free",
    },
    {
      label: "Feature",
      value: "Car Cleaner Brush",
    },
    {
      label: "Feature",
      value: "Long Handle",
    },
    {
      label: "Feature",
      value: "Paraffin Wax Coating",
    },
  ],

  aboutSections: [
    {
      heading: "Quick & Easy Dust Removal",
      content:
        "Effortlessly removes dust, dirt, and pollen from your vehicle without using water or cleaning sprays, helping you maintain a spotless finish within minutes.",
    },
    {
      heading: "Scratch-Free Cleaning Performance",
      content:
        "Designed with premium lint-free microfiber that safely cleans paint, glass, chrome, and other delicate surfaces without leaving scratches, streaks, or residue.",
    },
    {
      heading: "Paraffin Wax Coated Microfiber",
      content:
        "Enhanced with paraffin wax coating and a long ergonomic handle for 2X better cleaning performance, making it easy to reach roofs, windshields, and other difficult areas.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 78 },
      { stars: 4, percentage: 15 },
      { stars: 3, percentage: 4 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 1 },
    ],

    userFeed: [
      {
        id: "ess-review-5",

        reviewerName: "Akash",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Excellent car duster. Removes dust quickly without scratching the paint. The long handle makes roof cleaning very easy.",

        postedDateAgo: "3 weeks ago",
      },

      {
        id: "ess-review-6",

        reviewerName: "Nikhil",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Very soft microfiber with good build quality. Perfect for daily cleaning and works exactly as described.",

        postedDateAgo: "2 months ago",
      },
    ],
  },
},
//Product-4
{
  id: "microfiber-car-duster-kit",

  productHeading: "Microfiber Car Duster Kit",

  title:
    "DADLM® 10 PCS Microfiber Car Duster Kit | Extendable Handle | Interior & Exterior Car Cleaning Tools | Scratch-Free Microfiber Cloth | Memory Foam Pillow & Car Dustbin",

  brand:
    "Complete Interior & Exterior Car Care Kit with Extendable Duster, Scratch-Free Microfiber Cloths, Memory Foam Pillow & Car Dustbin.",

  price: 1299,

  currencySymbol: "₹",

  imagePath: "/products/essentials/Microfiber-car-cleaning-kit-main.png",

  galleryImages: [
    "/Images/essentials/microfiber-kit/Microfiber-car-cleaning-kit-1.png",
    "/Images/essentials/microfiber-kit/Microfiber-car-cleaning-kit-2.png",
    "/Images/essentials/microfiber-kit/Microfiber-car-cleaning-kit-3.png",
    "/Images/essentials/microfiber-kit/Microfiber-car-cleaning-kit-4.png",
  ],

  discountText: "18%",

  ratingData: {
    averageRating: 5.0,
    totalReviewsCount: 4000,
    boughtPastMonthText: "4000+ reviews",
    soldLastWeekText: "Sold over 4000 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Extendable Handle",
    },
    {
      label: "Feature",
      value: "Interior & Exterior",
    },
    {
      label: "Feature",
      value: "Car Cleaning",
    },
    {
      label: "Feature",
      value: "Scratch-Free",
    },
  ],

  aboutSections: [
    {
      heading: "Complete Car Care Kit",
      content:
        "Includes a premium microfiber duster, extendable handle, scratch-free microfiber cloths, memory foam pillow, and car dustbin for complete interior and exterior vehicle care.",
    },

    {
      heading: "Powerful Dust Removal",
      content:
        "High-density microfiber head attracts dust, dirt, pollen, and debris in a single swipe without leaving lint, wax residue, or scratches on painted surfaces.",
    },

    {
      heading: "Extendable Handle Design",
      content:
        "Equipped with a telescopic easy-grip handle that comfortably reaches roofs, windshields, dashboards, and difficult corners, making everyday car cleaning quick and effortless.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 89 },
      { stars: 4, percentage: 8 },
      { stars: 3, percentage: 2 },
      { stars: 2, percentage: 1 },
      { stars: 1, percentage: 0 },
    ],

    userFeed: [
      {
        id: "ess-review-7",

        reviewerName: "Karthik",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Amazing value for money. The complete kit has everything required to clean both the interior and exterior of my car.",

        postedDateAgo: "2 weeks ago",
      },

      {
        id: "ess-review-8",

        reviewerName: "Manoj",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Excellent quality microfiber and the extendable handle makes roof cleaning extremely easy. Highly recommended.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-5
{
  id: "first-aid-kit-box",

  productHeading: "First Aid Kit Box",

  title:
    "First Aid Kit for Wounds & Bruises | First Aid Kit | 9 Items - 35 Pieces | Emergency Medical Kit for Home, Office, Travel, Car, Sports, Outdoor, Multi-Use Pack for Cuts, Wounds & Injuries | Lightweight & Compact",

  brand:
    "Be prepared for every journey with a compact First Aid Kit designed for home, office, travel, sports, and your car.",

  price: 599,

  currencySymbol: "₹",

  imagePath: "/products/essentials/first-aid-kit-main.png",

  galleryImages: [
    "/Images/essentials/first-aid-kit/first-aid-kit-1.png",
    "/Images/essentials/first-aid-kit/first-aid-kit-2.png",
    "/Images/essentials/first-aid-kit/first-aid-kit-3.png",
    "/Images/essentials/first-aid-kit/first-aid-kit-4.png",
  ],

  discountText: "18%",

  ratingData: {
    averageRating: 4.4,
    totalReviewsCount: 3200,
    boughtPastMonthText: "3200 reviews",
    soldLastWeekText: "Sold over 3200 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Wounds & Bruises",
    },
    {
      label: "Feature",
      value: "First Aid Kit",
    },
    {
      label: "Feature",
      value: "9 Items - 35 Pieces",
    },
    {
      label: "Feature",
      value: "Emergency Medical",
    },
  ],

  aboutSections: [
    {
      heading: "Complete Emergency Care",
      content:
        "Contains 9 essential medical items with 35 pieces to quickly treat cuts, wounds, bruises, and minor injuries wherever you are.",
    },
    {
      heading: "Compact & Lightweight",
      content:
        "Designed to fit easily inside your car, backpack, office drawer, or travel luggage, making it convenient to carry everywhere.",
    },
    {
      heading: "Trusted Protection",
      content:
        "Includes premium wound care essentials like gauze, alcohol swabs, cotton pads, bandages, tapes, and Hansaplast patches for reliable everyday emergency care.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 78 },
      { stars: 4, percentage: 15 },
      { stars: 3, percentage: 4 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 1 },
    ],

    userFeed: [
      {
        id: "aid-review-1",

        reviewerName: "Rahul",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Very useful emergency kit. Compact, lightweight, and every car should have one.",

        postedDateAgo: "2 weeks ago",
      },
      {
        id: "aid-review-2",

        reviewerName: "Anjali",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Good quality first aid kit with all the essential medical items. Perfect for travel.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},


]
},

// car-wash category completed
{
id: "cat-6",
categoryName: "Car Wash",
slug: "car-wash",

items: [
  // Product-1
{
  id: "wavex-car-shampoo-wash",

  productHeading: "Wavex Car Shampoo Wash",

  title:
    "Wavex Car Shampoo Wash and Wax 1L pH Neutral Gives Wet Look Shine, Buttery Smooth Feel - Leaves No Water Spots",

  brand:
    "pH-neutral car shampoo with wax for glossy shine and smooth finish.",

  price: 584,

  currencySymbol: "₹",

  imagePath: "/products/carWash/wavex-car-shampoo-wash-main.jpg",

  galleryImages: [
    "/Images/car-washing/wavex-car-shampoo-wash/wavex-car-shampoo-wash-1.jpg",
    "/Images/car-washing/wavex-car-shampoo-wash/wavex-car-shampoo-wash-2.jpg",
    "/Images/car-washing/wavex-car-shampoo-wash/wavex-car-shampoo-wash-3.jpg",
    "/Images/car-washing/wavex-car-shampoo-wash/wavex-car-shampoo-wash-4.jpg",
  ],

  discountText: "₹80 OFF",

  ratingData: {
    averageRating: 4.3,
    totalReviewsCount: 6447,
    boughtPastMonthText: "6.4k reviews",
    soldLastWeekText: "Sold over 6447 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "pH Neutral Formula",
    },
    {
      label: "Feature",
      value: "Wash & Wax Technology",
    },
    {
      label: "Feature",
      value: "Spot-Free Cleaning",
    },
    {
      label: "Feature",
      value: "Premium Car Care",
    },
  ],

  aboutSections: [
    {
      heading: "pH-Balanced Formula",
      content:
        "pH-Balanced Formula: Safe for all paint types, ensures thorough cleaning without harming your car's paint or wax layer.",
    },
    {
      heading: "Brazilian Wax & Advanced Protection",
      content:
        "Infused with Brazilian Wax: Contains pure Brazilian wax that provides a high-gloss, wet look finish, mimicking a just-waxed shine. Advanced Polymer Technology: Includes polymers that enhance the protection and durability of the vehicle's surface.",
    },
    {
      heading: "Smooth Application & Economical Use",
      content:
        "Butter Smooth Texture: Easy to apply and spread, allowing for a swift and efficient washing experience. Economical Use: Highly Concentrated, Requires only 20ml per 3-4 liters of water for bucket washing, and 100ml per 900ml for foam washing.",
    },
    {
      heading: "Versatile Washing & Long-Lasting Shine",
      content:
        "Versatile Washing Options: Suitable for both traditional bucket washing and modern foam washing techniques. Enhanced Protection: Leaves a protective layer that repels dust and makes the surface smooth, keeping your car cleaner for longer.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 72 },
      { stars: 4, percentage: 18 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "car-wash-review-1",

        reviewerName: "Rahul",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Excellent shampoo with thick foam. Leaves a glossy finish and doesn't damage the paint.",

        postedDateAgo: "2 weeks ago",
      },
      {
        id: "car-wash-review-2",

        reviewerName: "Arjun",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Easy to use, economical and gives a smooth wax finish. Great value for regular car washing.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-2
{
  id: "shinexpro-car-wash-shampoo",

  productHeading: "ShineXPro Car Wash Shampoo",

  title:
    "ShineXPro 300mL Car Wash Shampoo Concentrate - pH Neutral, Thick Suds With Shine Enhancing Formula - Bubblewash Car Foam Shampoo That Works With Both Bucket Wash And Foam Cannon",

  brand:
    "pH-neutral concentrated car shampoo with thick foam for scratch-free, glossy vehicle cleaning.",

  price: 599,

  currencySymbol: "₹",

  imagePath: "/products/carWash/shinexpro-car-wash-shampoo-main.jpg",

  galleryImages: [
    "/Images/car-washing/shinexpro-car-wash-shampoo/shinexpro-car-wash-shampoo-1.jpg",
    "/Images/car-washing/shinexpro-car-wash-shampoo/shinexpro-car-wash-shampoo-2.jpg",
    "/Images/car-washing/shinexpro-car-wash-shampoo/shinexpro-car-wash-shampoo-3.jpg",
    "/Images/car-washing/shinexpro-car-wash-shampoo/shinexpro-car-wash-shampoo-4.jpg",
  ],

  discountText: "₹99 OFF",

  ratingData: {
    averageRating: 4.3,
    totalReviewsCount: 2000,
    boughtPastMonthText: "2k reviews",
    soldLastWeekText: "Sold over 2k times",
  },

  attributes: [
    {
      label: "Feature",
      value: "pH Neutral Formula",
    },
    {
      label: "Feature",
      value: "Thick Foam Action",
    },
    {
      label: "Feature",
      value: "Shine Enhancing Finish",
    },
    {
      label: "Feature",
      value: "Versatile Use",
    },
  ],

  aboutSections: [
    {
      heading: "Eco-Friendly pH Neutral Formula",
      content:
        "Eco-Friendly pH Neutral Car Shampoo Which Is Safe For All Vehicle Surfaces Including Wax, Sealant And Ceramic Coated Cars. Our Foam Car Washing Shampoo Is Compatible For Both Bucket Wash And With Foam Cannon.",
    },
    {
      heading: "Powerful Cleaning Performance",
      content:
        "Powerful Hyper Surfactants In Our Car Foam Shampoo Make It Effective At Cleaning Dirt And Grime And Leaves A Brilliant Shine Afterwards.",
    },
    {
      heading: "Highly Concentrated Formula",
      content:
        "ShineXPro Foam Shampoo For Car Wash Is A Concentrated Formula Where 20 mL Is Enough To Prepare 1 Ltr Car Wash Liquid.",
    },
    {
      heading: "Thick Suds & Spot-Free Finish",
      content:
        "The Advanced Car Shampoo Technology Used Ensures Thick, Luxurious Suds That Rinses Away Easily Without Leaving Any Water Spots.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 71 },
      { stars: 4, percentage: 19 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "car-wash-review-3",

        reviewerName: "Kiran",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Produces thick foam and cleans the car really well. Leaves a glossy finish without water spots.",

        postedDateAgo: "3 weeks ago",
      },
      {
        id: "car-wash-review-4",

        reviewerName: "Amit",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Very concentrated shampoo. A small quantity is enough for a complete wash and works perfectly with my foam cannon.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-3
{
  id: "foam-car-wash-shampoo",

  productHeading: "Foam Car Wash Shampoo",

  title:
    "ShineXPro Foam Car Wash Shampoo With 2Pcs 500GSM Microfiber Cloth & Wash Mitt - Thick Foam With Shine Enhancing Formula",

  brand:
    "Car wash kit with foam shampoo, microfiber cloths, and wash mitt.",

  price: 799,

  currencySymbol: "₹",

  imagePath: "/products/carWash/foam-car-wash-shampoo-main.jpg",

  galleryImages: [
    "/Images/car-washing/foam-car-wash-shampoo/foam-car-wash-shampoo-1.jpg",
    "/Images/car-washing/foam-car-wash-shampoo/foam-car-wash-shampoo-2.jpg",
    "/Images/car-washing/foam-car-wash-shampoo/foam-car-wash-shampoo-3.jpg",
    "/Images/car-washing/foam-car-wash-shampoo/foam-car-wash-shampoo-4.jpg",
  ],

  discountText: "₹99 OFF",

  ratingData: {
    averageRating: 4.4,
    totalReviewsCount: 200,
    boughtPastMonthText: "200+ reviews",
    soldLastWeekText: "Sold over 200+ times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Complete Cleaning Kit",
    },
    {
      label: "Feature",
      value: "Rich Foam Formula",
    },
    {
      label: "Feature",
      value: "Shine Enhancing Finish",
    },
    {
      label: "Feature",
      value: "Scratch-Free Cleaning",
    },
  ],

  aboutSections: [
    {
      heading: "Eco-Friendly Thick Foam Formula",
      content:
        "Eco-friendly pH Neutral Thick&Slick Car Shampoo Is Safe For All Vehicle Surfaces Including Wax, Sealant And Ceramic Coated Cars & Bikes Our Foam Car Washing Shampoo Is Compatible For Both Bucket Wash And With Foam Cannon Powerful Hyper Surfactants In Our Car Wash Shampoo Make It Effective At Cleaning Dirt And Grime And Leaves A Brilliant Shine Afterwards ShineXPro Foam Shampoo For Car Wash Is A Concentrated Formula Where 20 mL Is Enough To Prepare 1 Ltr Car Wash Liquid The Advanced Bike & Car Shampoo Technology Used In Our Thick&Slick Shampoo Ensures Thick, Luxurious Suds That Rinses Away Easily Without Leaving Any Water Spots.",
    },
    {
      heading: "Premium Wash Mitt",
      content:
        "This Car Wash Mitt Holds Tons Of Your Favorite Car Wash Shampoo And Clean Water To Drench Any Car In Thick Foaming Suds For An Ultimate Scratch And Swirl-Free Washing Experience. Car Wash Glove With Double Stitched Elastic Wrist Cuff For A Secure Fit, 80% Polyester And 20% Polyamide Blend Makes This Car Wash Microfiber Glove Exceptionally Soft And Gentle On Your Vehicle's Paint. Made From 100% AA-Grade Microfiber, Each Worm Like Chenille Acts Like A Velcro Trapping Dirt And Contaminants Deep Inside This Microfiber Car Wash Mitt. Reusable, Machine Washable And Lint Free Microfibre Gloves Which Is Suitable For Dry Or Wet Use.",
    },
    {
      heading: "Professional Microfiber Cloth",
      content:
        "Professional Grade, 500 GSM Microfiber Cloth For Car And Bike, For Scratchless Washing And Detailing. Workhorse Terry Microfiber Cloth With It's 80% Polyester And 20% Polyamide Blend Ensures Its Safe For All Bike And Car Surfaces. Super Durable Car Cleaning Cloth With The Ability To Withstand Hundreds Of Washings With Proper Care. ShineXPro Is An Established Name You Can Trust And A Perfect Choice Of Microfiber Cloth For Kitchen, Bike And Car, 100% AA-Grade Microfiber Making It A Super Observant Towel For Car.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 74 },
      { stars: 4, percentage: 17 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "car-wash-review-5",

        reviewerName: "Rahul",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Complete cleaning kit with excellent foam and premium microfiber cloths. Leaves a glossy finish every time.",

        postedDateAgo: "2 weeks ago",
      },
      {
        id: "car-wash-review-6",

        reviewerName: "Arjun",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "The wash mitt is soft and scratch-free. Shampoo creates thick foam and cleans dirt very effectively.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-4
{
  id: "bubblewash-snow-car-foam-shampoo",

  productHeading: "Bubblewash Snow Car Foam Shampoo",

  title:
    "ShineXPro 5 Ltr Car Wash Shampoo Concentrate - pH Neutral, Thick Suds With Shine Enhancing Formula - Bubblewash Snow Car Foam Shampoo That Works With Both Bucket Wash And Foam Cannon",

  brand:
    "5L pH-neutral snow foam shampoo for deep cleaning and brilliant glossy vehicle finish.",

  price: 1799,

  currencySymbol: "₹",

  imagePath: "/products/carWash/bubblewash-car-main.jpg",

  galleryImages: [
    "/Images/car-washing/bubblewash-car/bubblewash-car-1.jpg",
    "/Images/car-washing/bubblewash-car/bubblewash-car-2.jpg",
    "/Images/car-washing/bubblewash-car/bubblewash-car-3.jpg",
    "/Images/car-washing/bubblewash-car/bubblewash-car-4.jpg",
  ],

  discountText: "₹99 OFF",

  ratingData: {
    averageRating: 4.3,
    totalReviewsCount: 400,
    boughtPastMonthText: "400+ reviews",
    soldLastWeekText: "Sold over 400+ times",
  },

  attributes: [
    {
      label: "Feature",
      value: "pH Neutral Formula",
    },
    {
      label: "Feature",
      value: "Rich Snow Foam",
    },
    {
      label: "Feature",
      value: "Glossy Finish",
    },
    {
      label: "Feature",
      value: "Professional Use",
    },
  ],

  aboutSections: [
    {
      heading: "Eco-Friendly pH Neutral Formula",
      content:
        "Eco-Friendly pH Neutral Car Shampoo Which Is Safe For All Vehicle Surfaces Including Wax, Sealant And Ceramic Coated Cars. Our Foam Car Washing Shampoo Is Compatible For Both Bucket Wash And With Foam Cannon.",
    },
    {
      heading: "Powerful Cleaning Performance",
      content:
        "Powerful Hyper Surfactants In Our Car Foam Shampoo Make It Effective At Cleaning Dirt And Grime And Leaves A Brilliant Shine Afterwards.",
    },
    {
      heading: "Highly Concentrated Formula",
      content:
        "ShineXPro Car Shampoo 5 Litre Is A Concentrated Formula Where 20 mL Is Enough To Prepare 1 Ltr Car Wash Liquid.",
    },
    {
      heading: "Thick Snow Foam & Spot-Free Finish",
      content:
        "The Advanced Car Shampoo Technology Used Ensures Thick, Luxurious Suds That Rinses Away Easily Without Leaving Any Water Spots.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 72 },
      { stars: 4, percentage: 18 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "car-wash-review-7",

        reviewerName: "Sandeep",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Excellent snow foam shampoo. Cleans perfectly and leaves a glossy finish without water spots.",

        postedDateAgo: "2 weeks ago",
      },
      {
        id: "car-wash-review-8",

        reviewerName: "Kiran",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Very economical 5L pack. Works great with both foam cannon and bucket wash.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-5
{
  id: "pressure-washer-gun",

  productHeading: "Pressure Washer Gun",

  title:
    "DYLECT® AirWash Go Cordless Pressure Washer Gun, Battery-Operated High Pressure Car Washer with Adjustable Nozzle, Foam Spray, 5m Hose | Reliable Power for Car, Bike & Home Cleaning (Light Grey)",

  brand:
    "Cordless battery-powered pressure washer with foam spray for effortless car and home cleaning.",

  price: 3799,

  currencySymbol: "₹",

  imagePath: "/products/carWash/pressure-washer-gun-main.jpg",

  galleryImages: [
    "/Images/car-washing/pressure-washer-gun/pressure-washer-gun-1.jpg",
    "/Images/car-washing/pressure-washer-gun/pressure-washer-gun-2.jpg",
    "/Images/car-washing/pressure-washer-gun/pressure-washer-gun-3.jpg",
    "/Images/car-washing/pressure-washer-gun/pressure-washer-gun-4.jpg",
  ],

  discountText: "₹100 OFF",

  ratingData: {
    averageRating: 4.2,
    totalReviewsCount: 300,
    boughtPastMonthText: "300+ reviews",
    soldLastWeekText: "Sold over 300+ times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Cordless Convenience",
    },
    {
      label: "Feature",
      value: "Adjustable Nozzle",
    },
    {
      label: "Feature",
      value: "Foam Spray Function",
    },
    {
      label: "Feature",
      value: "Versatile Cleaning",
    },
  ],

  aboutSections: [
    {
      heading: "Reliable Performance & Powerful Cleaning",
      content:
        "Engineered for Real Performance, Not Just Big Numbers. Unlike low-cost variants with inflated claims, DYLECT AirWash Go is designed for consistent pressure and stable water flow you can actually use for daily cleaning. Strong Cleaning for Everyday Needs Delivers effective pressure & flow ideal for car washing, bike cleaning, balconies, garden furniture, windows, and dusty surfaces—without damaging paint or fittings.",
    },
    {
      heading: "Cordless Battery & Adjustable Nozzle",
      content:
        "Cordless Convenience with High-Quality Battery Pack Powered by 5 premium Li-ion cells (6500mAh total) for reliable runtime, safer charging, and longer battery life compared to generic high-voltage claims. Adjustable Nozzle + Foam Spray Included Switch easily between focused jet and wide spray. Foam bottle helps loosen dirt before washing, giving better cleaning with less water.",
    },
    {
      heading: "Portable & Easy to Use",
      content:
        "Portable, Lightweight & Easy to Use No wiring, no external power. Just insert battery, connect hose, and start cleaning in seconds—perfect for homes, apartments, and travel use. Designed for use with clean water only; adding pesticides, chemicals, paints, thinners, or flammable/corrosive liquids may cause damage, safety hazards, and is not covered under warranty.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 73 },
      { stars: 4, percentage: 17 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "car-wash-review-9",

        reviewerName: "Rahul",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Very convenient cordless pressure washer. The foam spray works really well and cleaning the car is much faster now.",

        postedDateAgo: "2 weeks ago",
      },
      {
        id: "car-wash-review-10",

        reviewerName: "Vikas",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Lightweight, easy to carry and the adjustable nozzle is very useful. Great for washing cars, bikes and balconies.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},

]
},
//Car-Cleaning category completed
{
id: "cat-7",
categoryName: "Car Cleaning",
slug: "car-cleaning",

items: [
  
  // Product-1
{
  id: "car-wash-shampoo",

  productHeading: "Car Wash Shampoo",

  title:
    "3M Car Wash Shampoo, High Foam, Remove Tough Dirt, Safe on Paint (1L Each, Pack of 2)",

  brand:
    "3M Auto Specialty Shampoo (500 ml) delivers powerful yet gentle cleaning, removing dirt and grime while providing a smooth, glossy finish to your vehicle's surface.",

  price: 1383,

  currencySymbol: "₹",

  imagePath: "/products/carCleaning/car-wash-shampoo-main.jpg",

  galleryImages: [
    "/Images/car-cleaning/3m-shampoo/car-wash-shampoo-1.jpg",
    "/Images/car-cleaning/3m-shampoo/car-wash-shampoo-2.jpg",
    
  ],

  discountText: "₹199 OFF",

  ratingData: {
    averageRating: 4.4,
    totalReviewsCount: 50,
    boughtPastMonthText: "50+ reviews",
    soldLastWeekText: "Sold 50+ times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Deep Cleaning Formula",
    },
    {
      label: "Feature",
      value: "Safe & Gentle",
    },
    {
      label: "Feature",
      value: "Smooth Gloss Finish",
    },
    {
      label: "Feature",
      value: "Easy Application",
    },
  ],

  aboutSections: [
    {
      heading: "Professional Cleaning",
      content:
        "Removes tough dirt and road grime on all types of cars, giving a clean and dust-free look.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 72 },
      { stars: 4, percentage: 18 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "clean-review-1",

        reviewerName: "Rahul",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Excellent foam quality. Cleans dirt easily and leaves a smooth glossy finish.",

        postedDateAgo: "2 weeks ago",
      },
      {
        id: "clean-review-2",

        reviewerName: "Arjun",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Very gentle on paint and easy to use. Worth buying for regular car washing.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},

// Product-2
{
  id: "car-scratches-remover",

  productHeading: "Car Scratches Remover",

  title:
    "3M Perfect-It 1-Step Finishing Compound (100 g) | Removes Minor Scratches, Foam/Wool Compatible, Professional Finish",

  brand:
    "3M Perfect-It 1-Step Finishing Compound (100 g) removes minor scratches, swirl marks, and paint imperfections while delivering a smooth, high-gloss finish with foam or wool polishing pads.",

  price: 234,

  currencySymbol: "₹",

  imagePath: "/products/carCleaning/car-scratches-remover-main.jpg",

  galleryImages: [
    "/Images/car-cleaning/car-scratches-remover/car-scratches-remover-1.jpg",
    "/Images/car-cleaning/car-scratches-remover/car-scratches-remover-2.jpg",
  ],

  discountText: "₹10 OFF",

  ratingData: {
    averageRating: 3.6,
    totalReviewsCount: 3000,
    boughtPastMonthText: "3k reviews",
    soldLastWeekText: "Sold over 3k times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Scratch Removal",
    },
    {
      label: "Feature",
      value: "1-Step Finishing Formula",
    },
    {
      label: "Feature",
      value: "Professional Grade Quality",
    },
    {
      label: "Feature",
      value: "Restores Shine",
    },
  ],

  aboutSections: [
    {
      heading: "Effective Scratch Removal",
      content:
        "Removes blemishes, swirl marks, surface contamination and minor scratches to restore a smooth, glossy paint finish.",
    },
    {
      heading: "Gloss Restoration",
      content:
        "Designed to remove up to 1,200-grit sanding marks, oxidation, water spots and coarse swirls from paints and clear coats.",
    },
    {
      heading: "Easy Application",
      content:
        "Can be applied by hand or with foam and wool polishing pads to achieve a professional-quality high-gloss finish.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 68 },
      { stars: 4, percentage: 18 },
      { stars: 3, percentage: 8 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 3 },
    ],

    userFeed: [
      {
        id: "clean-review-3",

        reviewerName: "Rahul",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Removed light scratches easily and restored the paint shine. Great value for money.",

        postedDateAgo: "3 weeks ago",
      },
      {
        id: "clean-review-4",

        reviewerName: "Kiran",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Easy to apply and gives a glossy finish. Works well on swirl marks and minor scratches.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-3 
{
  id: "perfect-car-cleaning-wipes",

  productHeading: "Perfect Car Cleaning Wipes",

  title:
    "SOFTSPUN Microfiber Single Side 1 Piece Chenille Glove,1700 GSM Grey+20X30cm Cleaning Wipe 2Pcs | Multi-Purpose Super Absorbent and Perfect Wash Cleaning for Bike Auto, Cars Both Interior and Exterior",

  brand:
    "Ultra-soft 1700 GSM microfiber glove and cleaning wipes designed for scratch-free cleaning of car interiors and exteriors.",

  price: 699,

  currencySymbol: "₹",

  imagePath: "/products/carCleaning/perfect-car-cleaning-wipes-main.jpg",

  galleryImages: [
    "/Images/car-cleaning/perfect-car-cleaning-wipes/perfect-car-cleaning-wipes-1.jpg",
    "/Images/car-cleaning/perfect-car-cleaning-wipes/perfect-car-cleaning-wipes-2.jpg",
    "/Images/car-cleaning/perfect-car-cleaning-wipes/perfect-car-cleaning-wipes-3.jpg",
    "/Images/car-cleaning/perfect-car-cleaning-wipes/perfect-car-cleaning-wipes-4.jpg",
  ],

  discountText: "₹100 OFF",

  ratingData: {
    averageRating: 4.1,
    totalReviewsCount: 1000,
    boughtPastMonthText: "1k reviews",
    soldLastWeekText: "Sold over 1k times",
  },

  attributes: [
    {
      label: "Feature",
      value: "1700 GSM Premium Microfiber",
    },
    {
      label: "Feature",
      value: "Scratch-Free Cleaning",
    },
    {
      label: "Feature",
      value: "Multi-Purpose Use",
    },
    {
      label: "Feature",
      value: "Complete Combo Pack",
    },
  ],

  aboutSections: [
    {
      heading: "High Density Microfiber",
      content:
        "Made from premium 1700 GSM chenille microfiber that absorbs water and soap efficiently for quick and effective cleaning.",
    },
    {
      heading: "Scratch-Free Finish",
      content:
        "Lint-free microfiber safely removes dust, dirt and grime without leaving scratches or swirl marks on painted surfaces.",
    },
    {
      heading: "Reusable & Multi-Purpose",
      content:
        "Machine washable and suitable for cleaning car interiors, exteriors, glass, bikes and other vehicle surfaces.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 72 },
      { stars: 4, percentage: 18 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "clean-review-5",
        reviewerName: "Rahul",
        rating: 5,
        isVerifiedBuyer: true,
        commentText:
          "Very soft microfiber and absorbs water quickly. Perfect for cleaning both interior and exterior.",
        postedDateAgo: "2 weeks ago",
      },
      {
        id: "clean-review-6",
        reviewerName: "Arjun",
        rating: 4,
        isVerifiedBuyer: true,
        commentText:
          "Good quality wipes with a premium glove. Doesn't leave scratches and is easy to wash.",
        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-4
{
  id: "car-high-pressure-washer",

  productHeading: "Car High Pressure Washer",

  title:
    "AGARO Supreme High Pressure Washer | 1800W Motor | 120 Bar Pressure | 6.5L/Min Flow Rate | 8m Hose | Portable Car, Bike & Home Cleaning",

  brand:
    "High-pressure 1800W car washer with 120 Bar power for deep cleaning cars, bikes, and home surfaces.",

  price: 5399,

  currencySymbol: "₹",

  imagePath: "/products/carCleaning/car-high-pressure-washer-main.jpg",

  galleryImages: [
    "/Images/car-cleaning/car-high-pressure-washer/car-high-pressure-washer-1.jpg",
    "/Images/car-cleaning/car-high-pressure-washer/car-high-pressure-washer-2.jpg",
    "/Images/car-cleaning/car-high-pressure-washer/car-high-pressure-washer-3.jpg",
    "/Images/car-cleaning/car-high-pressure-washer/car-high-pressure-washer-4.jpg",
  ],

  discountText: "₹1200 OFF",

  ratingData: {
    averageRating: 3.9,
    totalReviewsCount: 10000,
    boughtPastMonthText: "10k reviews",
    soldLastWeekText: "Sold over 10k times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Powerful 1800W Motor",
    },
    {
      label: "Feature",
      value: "High Flow Rate",
    },
    {
      label: "Feature",
      value: "Long Reach Design",
    },
    {
      label: "Feature",
      value: "Multi-Purpose Use",
    },
  ],

  aboutSections: [
    {
      heading: "Powerful High Pressure Cleaning",
      content:
        "1800W motor with 120 Bar pressure removes stubborn dirt, grease, oil and dust from cars, bikes and outdoor surfaces.",
    },
    {
      heading: "Fast & Efficient Washing",
      content:
        "Delivers a 6.5L/min water flow with an adjustable spray nozzle for quick and effective cleaning across large areas.",
    },
    {
      heading: "Portable & Easy To Use",
      content:
        "Comes with an 8-meter outlet hose, foam bottle and auto shut-off function for convenient and energy-efficient cleaning.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 65 },
      { stars: 4, percentage: 20 },
      { stars: 3, percentage: 9 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 3 },
    ],

    userFeed: [
      {
        id: "clean-review-7",
        reviewerName: "Rahul",
        rating: 5,
        isVerifiedBuyer: true,
        commentText:
          "Very powerful washer. Cleans mud and dirt effortlessly from my car and bike.",
        postedDateAgo: "3 weeks ago",
      },
      {
        id: "clean-review-8",
        reviewerName: "Sandeep",
        rating: 4,
        isVerifiedBuyer: true,
        commentText:
          "Easy to use with good pressure. Foam bottle works really well.",
        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-5
{
  id: "car-vacuum-cleaner",

  productHeading: "Car Vacuum Cleaner",

  title:
    "SEZNIK 4-in-1 Cordless Vacuum Cleaner & Blower | 6000mAh Rechargeable | 3-Speed Suction up to 15000PA | BLDC Motor | For Home & Car",

  brand:
    "Powerful cordless 4-in-1 vacuum cleaner with blower for home and car cleaning.",

  price: 3399,

  currencySymbol: "₹",

  imagePath: "/products/carCleaning/car-vacuum-cleaner-main.jpg",

  galleryImages: [
    "/Images/car-cleaning/car-vacuum-cleaner/car-vacuum-cleaner-1.jpg",
    "/Images/car-cleaning/car-vacuum-cleaner/car-vacuum-cleaner-2.jpg",
    "/Images/car-cleaning/car-vacuum-cleaner/car-vacuum-cleaner-3.jpg",
    "/Images/car-cleaning/car-vacuum-cleaner/car-vacuum-cleaner-4.jpg",
  ],

  discountText: "₹900 OFF",

  ratingData: {
    averageRating: 4.1,
    totalReviewsCount: 2125,
    boughtPastMonthText: "2.1k reviews",
    soldLastWeekText: "Sold over 2125 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Powerful Suction Performance",
    },
    {
      label: "Feature",
      value: "4-in-1 Cleaning Function",
    },
    {
      label: "Feature",
      value: "Long Battery Life",
    },
    {
      label: "Feature",
      value: "Multi-Surface Cleaning",
    },
  ],

  aboutSections: [
  {
    heading: "Long-Lasting Rechargeable Battery",
    content:
      "Powered by a high-capacity 6000mAh lithium-ion battery, this cordless vacuum cleaner delivers up to 25 minutes of runtime on low mode. The Type-C fast charging support fully charges the device in around 2 hours, making it convenient for regular home and car cleaning.",
  },
  {
    heading: "Powerful 4-in-1 Cleaning Performance",
    content:
      "Equipped with a 100W BLDC motor and three adjustable suction levels ranging from 6KPA to 15000PA, the vacuum easily removes dust, crumbs and debris. It also functions as a blower and includes multiple nozzles and accessories for cleaning dashboards, seats, keyboards, sofas and tight corners.",
  },
  {
    heading: "Washable HEPA Filter & Easy Maintenance",
    content:
      "Features a durable washable metal HEPA filter that captures fine dust and allergens, along with a 200ml transparent dust container for quick emptying. Its lightweight ergonomic design, 1-year warranty, free PAN India pickup & drop service and 24×7 customer support make it a reliable cleaning solution for everyday use.",
  },
],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 71 },
      { stars: 4, percentage: 18 },
      { stars: 3, percentage: 7 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "clean-review-9",
        reviewerName: "Amit",
        rating: 5,
        isVerifiedBuyer: true,
        commentText:
          "Excellent suction power and battery backup. Perfect for cleaning car interiors.",
        postedDateAgo: "2 weeks ago",
      },
      {
        id: "clean-review-10",
        reviewerName: "Vikas",
        rating: 4,
        isVerifiedBuyer: true,
        commentText:
          "Very handy and lightweight. The blower function is a great addition.",
        postedDateAgo: "1 month ago",
      },
    ],
  },
},


]
},

//car-Lifting
{
id: "cat-8",
categoryName: "Car Lifting",
slug: "car-lifting",

items: [
  // Product-1
{
  id: "car-jack-for-all-car-for-vehicle",

  productHeading: "Car Jack for All Car for Vehicle",

  title:
    "JAGGER JAG177 Heavy Duty Manual Scissor Car Jack for All Car for Vehicle Lift (3 TON with Ratchet & 19MM Spanner [ Black ])",

  brand:
    "Heavy-duty 3-ton manual car jack for safe and convenient vehicle lifting.",

  price: 1310,

  currencySymbol: "₹",

  imagePath: "/products/carLift/car-jack-main.jpg",

  galleryImages: [
    "/Images/car-lifting/car-jack/car-jack-1.jpg",
    "/Images/car-lifting/car-jack/car-jack-2.jpg",
    "/Images/car-lifting/car-jack/car-jack-3.jpg",
    "/Images/car-lifting/car-jack/car-jack-4.jpg",
  ],

  discountText: "₹100 OFF",

  ratingData: {
    averageRating: 3.2,
    totalReviewsCount: 50,
    boughtPastMonthText: "50+ reviews",
    soldLastWeekText: "Sold 50+ times",
  },

  attributes: [
    {
      label: "Feature",
      value: "3 Ton Heavy Capacity",
    },
    {
      label: "Feature",
      value: "Heavy-Duty Construction",
    },
    {
      label: "Feature",
      value: "Complete Lifting Solution",
    },
    {
      label: "Feature",
      value: "Easy Operation",
    },
  ],

  aboutSections: [
    {
      heading: "Lifting Range",
      content:
        "DIAMENSION : JAGGER Scissor Jack connects right into your car and lifts your car easily. Minimum Height - 80 mm and Maximum Height - 340 mm.",
    },
    {
      heading: "Complete Kit & Durable Material",
      content:
        "CONTAIN - 1 Scissor jack, 1 spanner 19mm. MATERIAL : Most commonly used in the automobile industry, Made up of High Quality Steel and rust free. DURABILITY : Durable, Tough Simple Rugged, Easy To Install.",
    },
    {
      heading: "Portable Design",
      content:
        "PORTABILITY : Extension rod is portable which enhances ease of use and storage spaces.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 56 },
      { stars: 4, percentage: 18 },
      { stars: 3, percentage: 12 },
      { stars: 2, percentage: 7 },
      { stars: 1, percentage: 7 },
    ],

    userFeed: [
      {
        id: "lifting-review-1",

        reviewerName: "Rahul",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Strong and sturdy jack. Easy to use for emergency tyre changes.",

        postedDateAgo: "2 weeks ago",
      },
      {
        id: "lifting-review-2",

        reviewerName: "Amit",

        rating: 3,

        isVerifiedBuyer: true,

        commentText:
          "Good build quality and compact enough to keep inside the car.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-2
{
  id: "auto-addict-car-jack",

  productHeading: "Auto Addict Car Jack",

  title:
    "Auto Addict Car Jack 5 ton Hydraulic Bottle Jack for All Cars",

  brand:
    "5-ton hydraulic bottle jack for safe, powerful, and effortless vehicle lifting.",

  price: 925,

  currencySymbol: "₹",

  imagePath: "/products/carLift/auto-addict-car-jack-main.jpg",

  galleryImages: [
    "/Images/car-lifting/auto-addict-car-jack/auto-addict-car-jack-1.jpg",
    "/Images/car-lifting/auto-addict-car-jack/auto-addict-car-jack-2.jpg",
    "/Images/car-lifting/auto-addict-car-jack/auto-addict-car-jack-3.jpg",
    "/Images/car-lifting/auto-addict-car-jack/auto-addict-car-jack-4.jpg",
  ],

  discountText: "₹50 OFF",

  ratingData: {
    averageRating: 3.8,
    totalReviewsCount: 300,
    boughtPastMonthText: "300+ reviews",
    soldLastWeekText: "Sold 300+ times",
  },

  attributes: [
    {
      label: "Feature",
      value: "5 Ton Heavy Capacity",
    },
    {
      label: "Feature",
      value: "Hydraulic Lifting System",
    },
    {
      label: "Feature",
      value: "Durable Construction",
    },
    {
      label: "Feature",
      value: "Compact & Portable",
    },
  ],

  aboutSections: [
    {
      heading: "Easy & Efficient Lifting",
      content:
        "Easy to use and durable. Reduces effort and makes tyre change quick and easy.",
    },
    {
      heading: "Heavy-Duty Construction",
      content:
        "Heavy duty metal construction ensures strength, stability and long-lasting performance for everyday vehicle lifting tasks.",
    },
    {
      heading: "Reliable Car Jack",
      content:
        "Designed for all cars, this 5 ton hydraulic bottle jack provides safe, powerful and convenient lifting whenever required.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 63 },
      { stars: 4, percentage: 20 },
      { stars: 3, percentage: 9 },
      { stars: 2, percentage: 4 },
      { stars: 1, percentage: 4 },
    ],

    userFeed: [
      {
        id: "lifting-review-3",

        reviewerName: "Vikram",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Strong hydraulic jack that lifts my car with very little effort.",

        postedDateAgo: "3 weeks ago",
      },
      {
        id: "lifting-review-4",

        reviewerName: "Karthik",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Compact, durable and easy to store in the boot. Good value for money.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-3
{
  id: "jack-for-passengers-cars",

  productHeading: "Trolley Jack for Passenger Cars",

  title:
    "Scissor Jack 1500 kg Trolley Jack for Passenger Cars SUV MPV Max 1.5 Tonnes Jack with Ratchet/Crank (Black 1.5T)",

  brand:
    "1.5-ton scissor jack for safe vehicle lifting, ideal for cars and SUVs.",

  price: 1199,

  currencySymbol: "₹",

  imagePath: "/products/carLift/jack-for-passengers-cars-main.jpg",

  galleryImages: [
    "/Images/car-lifting/jack-for-passengers-cars/jack-for-passengers-cars-1.jpg",
    "/Images/car-lifting/jack-for-passengers-cars/jack-for-passengers-cars-2.jpg",
    "/Images/car-lifting/jack-for-passengers-cars/jack-for-passengers-cars-3.jpg",
    "/Images/car-lifting/jack-for-passengers-cars/jack-for-passengers-cars-4.jpg",
  ],

  discountText: "₹100 OFF",

  ratingData: {
    averageRating: 4.0,
    totalReviewsCount: 10,
    boughtPastMonthText: "10 reviews",
    soldLastWeekText: "Sold 10 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "1.5 Ton Lifting Capacity",
    },
    {
      label: "Feature",
      value: "Strong & Durable Design",
    },
    {
      label: "Feature",
      value: "Easy Operation",
    },
    {
      label: "Feature",
      value: "Portable & Compact",
    },
  ],

  aboutSections: [
    {
      heading: "Portable & Convenient",
      content:
        "Convenient: The scissor jack is easy to carry and space-saving. You can easily take it in the car if you need it. And he's solid enough.",
    },
    {
      heading: "Efficient Lifting Performance",
      content:
        "Advantages: it is very labor-saving and can easily lift the vehicle off the ground with the supplied wrench for work such as changing tires. Product details: maximum load 1.5 tonnes; minimum lifting height: approx. 105 mm, maximum lifting height: approx. 385 mm. Dimensions: 425 x 90 x 105 mm. Net weight: 3 kg.",
    },
    {
      heading: "Strong Construction & Wide Compatibility",
      content:
        "High quality: the solid base plate also ensures a secure stand, the product can be used very comfortably and easily. Uses: combi, vans, SUVs, large vans, small buses.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 69 },
      { stars: 4, percentage: 18 },
      { stars: 3, percentage: 7 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 3 },
    ],

    userFeed: [
      {
        id: "lifting-review-5",

        reviewerName: "Rahul",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Very sturdy jack and easy to operate. Perfect for emergency tyre replacement.",

        postedDateAgo: "2 weeks ago",
      },
      {
        id: "lifting-review-6",

        reviewerName: "Manoj",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Compact, lightweight and fits easily in the car. Good quality for the price.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},
]

},

//car-repair completed
{
id: "cat-9",
categoryName: "Car Repair",
slug: "car-repair",

items: [
// Product-1
{
  id: "universal-tubeless-tyre-puncture-kit",

  productHeading: "Universal Tubeless Tyre Puncture Kit",

  title:
    "GRAND PITSTOP Universal Tubeless Tyre Puncture Kit | Strip-Based (Pack of 10 pcs) | Flat Tyre Repair Tool for Cars, Bikes, Trucks, Autos | Easy to Use | Emergency Tire Kit for On-The-Go Repairs",

  brand:
    "Universal tubeless tyre puncture repair kit for quick, reliable emergency roadside tyre repairs.",

  price: 299,

  currencySymbol: "₹",

  imagePath: "/products/carRepair/tubeless-tyre-kit-main.jpg",

  galleryImages: [
    "/Images/car-repair/tubeless-tyre-kit/tubeless-tyre-kit-1.jpg",
    "/Images/car-repair/tubeless-tyre-kit/tubeless-tyre-kit-2.jpg",
    "/Images/car-repair/tubeless-tyre-kit/tubeless-tyre-kit-3.jpg",
    "/Images/car-repair/tubeless-tyre-kit/tubeless-tyre-kit-4.jpg",
  ],

  discountText: "₹50 OFF",

  ratingData: {
    averageRating: 4.0,
    totalReviewsCount: 700,
    boughtPastMonthText: "700+ reviews",
    soldLastWeekText: "Sold over 700+ times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Quick Puncture Repair",
    },
    {
      label: "Feature",
      value: "Universal Compatibility",
    },
    {
      label: "Feature",
      value: "Easy to Use",
    },
    {
      label: "Feature",
      value: "Complete Repair Pack",
    },
  ],

  aboutSections: [
    {
      heading: "Complete Emergency Repair Kit",
      content:
        "GRAND PITSTOP Universal Tire Puncture Repair Kit includes T Handle for insertion X 1, Tire Reamer Tool X 1, 4 ways valve stem tool X 1, Valves X 4, Knife X 1, Repair Plugs X 15 Meet all your needs on tire repairing work totally.",
    },
    {
      heading: "Premium Quality & Easy Repairs",
      content:
        "Our Universal Tire Puncture Repair Kit is made of the high strength rustless zinc alloy, can easily pierce the plugs and quickly finished the repair work. Tire repair strips of best natural rubber are equipped with airtight bag, excellent ageing resistant performance. Repair punctures for all tubeless tire without remove tire from rim, detailed instruction are given in the user manual, professional repair without professional skill required.",
    },
    {
      heading: "Universal Compatibility & Portable Storage",
      content:
        "Perfect fit for Autos, Cars, Motorcycles, Trucks, RVs and other vehicles with tubeless tire, please note this is not for tube tires. GRAND PITSTOP Universal tire puncture repair tools can be organised in a compact carry bag, Airtight packaging for Puncture plugs which increases the Service life of the strips. Which is perfect car emergency accessory.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 69 },
      { stars: 4, percentage: 19 },
      { stars: 3, percentage: 7 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "repair-review-1",

        reviewerName: "Rohit",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Very useful emergency puncture repair kit. Fixed my tyre within minutes during a road trip.",

        postedDateAgo: "2 weeks ago",
      },
      {
        id: "repair-review-2",

        reviewerName: "Amit",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Good quality tools and repair strips. Compact kit that's easy to keep in the car.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-2
{
  id: "tubeless-tyre-puncture-repair",

  productHeading: "Tubeless Tyre Puncture Repair",

  title:
    "WILLIBEE 11-in-1 (Pack of 10 Strips) Tubeless Tyre Puncture Repair Kit for Car & Bike | Heavy-Duty Puncher Kit (Includes Storage Bag)",

  brand:
    "11-in-1 tubeless tyre repair kit for quick, durable roadside puncture repairs anywhere.",

  price: 399,

  currencySymbol: "₹",

  imagePath: "/products/carRepair/tubeless-tyre-repair-main.jpg",

  galleryImages: [
    "/Images/car-repair/tubeless-tyre-repair/tubeless-tyre-repair-1.jpg",
    "/Images/car-repair/tubeless-tyre-repair/tubeless-tyre-repair-2.jpg",
    "/Images/car-repair/tubeless-tyre-repair/tubeless-tyre-repair-3.jpg",
    "/Images/car-repair/tubeless-tyre-repair/tubeless-tyre-repair-4.jpg",
  ],

  discountText: "₹99 OFF",

  ratingData: {
    averageRating: 4.1,
    totalReviewsCount: 2000,
    boughtPastMonthText: "2k reviews",
    soldLastWeekText: "Sold over 2k times",
  },

  attributes: [
    {
      label: "Feature",
      value: "11-in-1 Repair Kit",
    },
    {
      label: "Feature",
      value: "Universal Compatibility",
    },
    {
      label: "Feature",
      value: "Quick & Reliable Repairs",
    },
    {
      label: "Feature",
      value: "Portable Storage Bag",
    },
  ],

  aboutSections: [
    {
      heading: "Quick Emergency Repairs",
      content:
        "KEEP ROLLING, WORRY-FREE – Compact 11-in-1 tubeless tyre repair kit designed to fix punctures anytime without waiting for a mechanic. 10 PREMIUM STRIPS – High-grip rubber strips designed for tight sealing, heat resistance and long-lasting durability.",
    },
    {
      heading: "Heavy-Duty Construction",
      content:
        "HEAVY-DUTY BUILD – Tools made from premium materials for strength and long-lasting use.",
    },
    {
      heading: "Portable & Made in India",
      content:
        "STORAGE BAG – Sturdy storage pouch keeps tools organised, portable and easy to carry in your car or bike. MADE IN INDIA – Proudly manufactured in India with trusted quality and durability.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 71 },
      { stars: 4, percentage: 18 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "repair-review-3",

        reviewerName: "Vikram",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Compact and reliable repair kit. Helped me fix a puncture quickly during my journey.",

        postedDateAgo: "2 weeks ago",
      },
      {
        id: "repair-review-4",

        reviewerName: "Karthik",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Strong tools with good quality repair strips. Storage pouch keeps everything organized.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-3
{
  id: "car-windshield-crack-repair",

  productHeading: "Car Windshield Crack Repair",

  title:
    "Latest Car Windshield Crack Repair Kit, Glass Repair Liquid for Cracks for Fix Auto Windshield Glass Cracks, Car Window Glass Repair Tool Set for Quick and Easy Auto Scratch Fix",

  brand:
    "Windshield crack repair kit for quick, easy restoration of damaged automotive glass surfaces.",

  price: 599,

  currencySymbol: "₹",

  imagePath: "/products/carRepair/car-windshield-main.jpg",

  galleryImages: [
    "/Images/car-repair/car-windshield/car-windshield-1.jpg",
    "/Images/car-repair/car-windshield/car-windshield-2.jpg",
    "/Images/car-repair/car-windshield/car-windshield-3.jpg",
    "/Images/car-repair/car-windshield/car-windshield-4.jpg",
  ],

  discountText: "₹99 OFF",

  ratingData: {
    averageRating: 4.5,
    totalReviewsCount: 60,
    boughtPastMonthText: "60 reviews",
    soldLastWeekText: "Sold 60 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Quick Crack Repair",
    },
    {
      label: "Feature",
      value: "High-Strength Repair Resin",
    },
    {
      label: "Feature",
      value: "Easy DIY Application",
    },
    {
      label: "Feature",
      value: "Universal Compatibility",
    },
  ],

  aboutSections: [
    {
      heading: "Affordable DIY Windshield Repair",
      content:
        "[ Save on Expensive Repairs ] – Avoid costly garage visits and windshield replacements by fixing minor chips and cracks yourself at home with this affordable and reliable DIY solution. [ Quick & Hassle-Free Application ] – Designed for simple, step-by-step use, allowing you to complete repairs in minutes without professional tools or technical skills. Perfect for busy car owners.",
    },
    {
      heading: "Crystal-Clear & Durable Finish",
      content:
        "[ Crystal-Clear Finish ] – Restores transparency and improves visibility by reducing the appearance of cracks and scratches, ensuring safer driving in both day and night conditions. [ Strengthens Windshield Durability ] – Creates a strong, long-lasting bond that reinforces the glass surface and protects it from further damage caused by vibrations, bumps, or weather changes. [ Reliable in All Weather Conditions ] – Performs effectively in hot summers, cold winters, and rainy environments, maintaining repair strength even under extreme temperature variations.",
    },
    {
      heading: "Universal & Travel Ready",
      content:
        "[ Universal Vehicle Compatibility ] – Suitable for most types of vehicles including cars, SUVs, vans, and small trucks, making it a versatile maintenance tool for every vehicle owner. [ Compact & Travel-Ready Design ] – Lightweight and easy to store in your glove box, tool kit, or car trunk, ensuring you’re always prepared for unexpected windshield damage on the road. [ Complete DIY Repair Kit Included ] – Comes with all essential tools and accessories required for effective windshield repair, eliminating the need to purchase additional equipment. [ Long-Lasting & Preventive Solution ] – Not only repairs existing damage but also helps prevent small chips from turning into large cracks, saving you time, money, and stress in the long run.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 78 },
      { stars: 4, percentage: 14 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 1 },
    ],

    userFeed: [
      {
        id: "repair-review-5",

        reviewerName: "Suresh",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Easy to apply and it reduced the crack visibility significantly. Great DIY repair kit.",

        postedDateAgo: "2 weeks ago",
      },
      {
        id: "repair-review-6",

        reviewerName: "Anil",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Good value for money. Helped stop a small crack from spreading further.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-4
{
  id: "tool-kit-socket-ratchet-wrench-set-socket-wrench",

  productHeading: "Tool Kit Socket Ratchet Wrench Set Socket Wrench",

  title:
    "CLAPONE Tool Kit Socket Ratchet Wrench Set Socket Wrench/Screwdriver Set/Bike Tool Set/Socket Wrenches/Auto Repairs/Car/Motorcycle/Bike Repair Goti Set/Socket Screwdriver (BLACK, 46 Pcs)",

  brand:
    "46-piece socket ratchet tool kit for versatile automotive, motorcycle, and household repairs.",

  price: 769,

  currencySymbol: "₹",

  imagePath: "/products/carRepair/tool-kit-main.jpg",

  galleryImages: [
    "/Images/car-repair/tool-kit/tool-kit-1.jpg",
    "/Images/car-repair/tool-kit/tool-kit-2.jpg",
    "/Images/car-repair/tool-kit/tool-kit-3.jpg",
    "/Images/car-repair/tool-kit/tool-kit-4.jpg",
  ],

  discountText: "₹100 OFF",

  ratingData: {
    averageRating: 3.6,
    totalReviewsCount: 100,
    boughtPastMonthText: "100+ reviews",
    soldLastWeekText: "Sold 100+ times",
  },

  attributes: [
    {
      label: "Feature",
      value: "46-Piece Tool Set",
    },
    {
      label: "Feature",
      value: "Multi-Purpose Use",
    },
    {
      label: "Feature",
      value: "Durable Construction",
    },
    {
      label: "Feature",
      value: "Portable Storage Case",
    },
  ],

  aboutSections: [
    {
      heading: "Complete Multi-Purpose Tool Kit",
      content:
        "Complete 46-piece tool kit for multiple repair needs – This tool kit includes 46 essential pieces such as socket wrenches, screwdriver bits, ratchet handle, extension bar and different socket sizes. It is designed to help with a wide variety of repair and maintenance tasks, making it a practical addition to any home, garage or workshop where regular fixing and assembling work is required. Suitable for car, motorcycle and bike repair work – The tool set is ideal for performing basic vehicle maintenance such as tightening bolts, loosening nuts and assembling parts on cars, motorcycles and bicycles. It can also be used for small household repairs, furniture assembly and other general mechanical tasks, making it a versatile tool kit for everyday use.",
    },
    {
      heading: "Durable Chrome Vanadium Construction",
      content:
        "Durable and strong metal construction – The tools are made from high quality chrome vanadium steel that provides excellent strength and durability. This material is resistant to wear and corrosion, ensuring the tools maintain their performance even after repeated use. The sturdy build helps handle regular repair work while offering long lasting reliability. Smooth ratchet mechanism for easy operation – The ratchet handle features a smooth and efficient mechanism that allows quick tightening and loosening of fasteners without removing the tool repeatedly. This design helps save time and effort during repairs and provides better control while working on different types of bolts and nuts.",
    },
    {
      heading: "Portable Storage & Flexible Use",
      content:
        "Compact storage case for easy organization – All tools are neatly arranged inside a compact and durable storage case that keeps every piece organized and easy to find. The case helps protect the tools from damage and makes it convenient to carry the set anywhere, whether for home repairs, vehicle maintenance or professional work. Multi purpose screwdriver bit selection – The kit includes a variety of screwdriver bits designed to handle different types of screws such as flat head, star and hex. This allows the user to work on multiple repair tasks without needing separate tools. The interchangeable bits add flexibility and convenience to the overall tool set.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 60 },
      { stars: 4, percentage: 21 },
      { stars: 3, percentage: 10 },
      { stars: 2, percentage: 5 },
      { stars: 1, percentage: 4 },
    ],

    userFeed: [
      {
        id: "repair-review-7",

        reviewerName: "Rahul",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Excellent tool kit for bike and car repairs. All the essential tools are included in one compact box.",

        postedDateAgo: "2 weeks ago",
      },
      {
        id: "repair-review-8",

        reviewerName: "Vikram",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Good quality sockets and ratchet. Very handy for home maintenance and emergency vehicle repairs.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-5
{
  id: "metal-car-dent-remover",

  productHeading: "Metal Car Dent Remover",

  title:
    "Metal Car Dent Remover Suction Cup Puller with Handle – Heavy Duty Dent Lifter for Vehicle Body Repair, Glass, Tiles (Green)",

  brand:
    "Heavy-duty suction dent puller for quick vehicle dent and surface repairs effortlessly.",

  price: 749,

  currencySymbol: "₹",

  imagePath: "/products/carRepair/metal-car-dent-remover-main.jpg",

  galleryImages: [
    "/Images/car-repair/car-dent-remover/metal-car-dent-remover-1.jpg",
    "/Images/car-repair/car-dent-remover/metal-car-dent-remover-2.jpg",
    "/Images/car-repair/car-dent-remover/metal-car-dent-remover-3.jpg",
    "/Images/car-repair/car-dent-remover/metal-car-dent-remover-4.jpg",
  ],

  discountText: "₹49 OFF",

  ratingData: {
    averageRating: 2.6,
    totalReviewsCount: 20,
    boughtPastMonthText: "20 reviews",
    soldLastWeekText: "Sold 20 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Powerful Suction Grip",
    },
    {
      label: "Feature",
      value: "Multi-Surface Use",
    },
    {
      label: "Feature",
      value: "Heavy-Duty Construction",
    },
    {
      label: "Feature",
      value: "Easy to Use",
    },
  ],

  aboutSections: [
    {
      heading: "Ergonomic & Heavy-Duty Design",
      content:
        "UNIQUE ERGONOMIC DESIGN: Single-stroke pump design provides easy and secure one-hand operation. HEAVY DUTY CONSTRUCTION: Built with strong aluminum alloy housing for long-term durability.",
    },
    {
      heading: "Multi-Purpose Repair Tool",
      content:
        "MULTIPURPOSE TOOL: Ideal for car dent removal and lifting smooth materials like glass, tiles, mirrors, and granite. WEAR-RESISTANT BUILD: Impact-resistant shell withstands tough working environments.",
    },
    {
      heading: "Simple & Reliable Operation",
      content:
        "EASY TO USE: Simple suction process ensures instant usability for professionals and DIY users.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 42 },
      { stars: 4, percentage: 18 },
      { stars: 3, percentage: 14 },
      { stars: 2, percentage: 12 },
      { stars: 1, percentage: 14 },
    ],

    userFeed: [
      {
        id: "repair-review-9",

        reviewerName: "Karthik",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Works well on small dents and the suction grip is quite strong. Easy to use at home.",

        postedDateAgo: "2 weeks ago",
      },
      {
        id: "repair-review-10",

        reviewerName: "Ramesh",

        rating: 3,

        isVerifiedBuyer: true,

        commentText:
          "Useful for minor dents on smooth surfaces. Takes a little practice but gets the job done.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},

]
},

//Car Polishing
{
id: "cat-10",
categoryName: "Car Polishing",
slug: "car-polishing",

items: [
// Product-1
{
  id: "car-dashboard-polish",

  productHeading: "Car Dashboard Polish",

  title:
    "Wavex Dashboard Polish and Leather Conditioner + Protectant (1L) Car Dashboard Polish | Car Polish for Interior Plastic, Leather, Vinyl & Rubber | Dashboard Polish that Protects, Shines & Conditions",

  brand:
    "Dashboard polish and leather conditioner for lasting shine, protection, and interior care.",

  price: 820,

  currencySymbol: "₹",

  imagePath: "/products/carPolish/car-dashboard-polish-main.jpg",

  galleryImages: [
    "/Images/car-polish/car-dashboard-polish/car-dashboard-polish-1.jpg",
    "/Images/car-polish/car-dashboard-polish/car-dashboard-polish-2.jpg",
    "/Images/car-polish/car-dashboard-polish/car-dashboard-polish-3.jpg",
    "/Images/car-polish/car-dashboard-polish/car-dashboard-polish-4.jpg",
  ],

  discountText: "₹99 OFF",

  ratingData: {
    averageRating: 4.3,
    totalReviewsCount: 600,
    boughtPastMonthText: "600 reviews",
    soldLastWeekText: "Sold 600 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Multi-Surface Formula",
    },
    {
      label: "Feature",
      value: "Restores Shine",
    },
    {
      label: "Feature",
      value: "Conditions & Protects",
    },
    {
      label: "Feature",
      value: "Easy Application",
    },
  ],

  aboutSections: [
    {
      heading: "Advanced Interior Protection",
      content:
        "Advanced Car Polish for Interiors- Wavex Dashboard and Leather Conditioner + Protectant Car Dashboard Polish has a zero dust attraction, non-greasy formulation that provides interior plastic, leather, vinyl and rubber components with a natural, showroom-like shine. Car Dashboard Polish that Conditions & Protects- Wavex Dashboard and Leather Conditioner + Protectant Dashboard Polish goes deep down into the components to provide a much needed nourishment. This Car Polish for interiors protects against UV rays, cracking, fading and discolouration.",
    },
    {
      heading: "Fresh Fragrance & OEM Finish",
      content:
        "Car Dashboard Polish with Pleasant Fragrance- Wavex Dashboard and Leather Conditioner + Protectant Car Polish for dashboards is infused with an extremely pleasant, peach-fruit fragrance. Not only would your car’s interiors look great, they will also have a refreshing fragrance. Great Dashboard Polish for OEM Finish- Regular use of the Wavex Dashboard and Leather Conditioner + Protectant Car Polish will ensure that your car’s interiors remain in a 'Factory-Fresh Finish' for a really long time.",
    },
    {
      heading: "Convenient Multi-Purpose Formula",
      content:
        "Most Convenient Car Dashboard Polish- Its partial cleaning properties followed by ease of use make this car polish for interior the most convenient dashboard polish in the auto care industry. One Car Polish, Many Purposes- On the lookout for a dashboard polish, car dashboard polish, plastic refreshing polish for car, car interior polish, leather polish or a leather conditioner? Choose Wavex Dashboard and Leather Conditioner + Protectant Dashboard Polish for it.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 71 },
      { stars: 4, percentage: 18 },
      { stars: 3, percentage: 7 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "polish-review-1",

        reviewerName: "Rahul",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Excellent dashboard polish with a natural finish. Keeps the interior looking fresh without feeling greasy.",

        postedDateAgo: "2 weeks ago",
      },
      {
        id: "polish-review-2",

        reviewerName: "Sandeep",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Easy to apply and the peach fragrance is pleasant. Restores faded dashboard surfaces nicely.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-2
{
  id: "dashboard-polish-for-car-interior",

  productHeading: "Dashboard Polish for Car Interior",

  title:
    "ShineXPro Dashboard Polish for Car Interior - Car Dashboard Polish & Protectant Restores Original Finish, UV Blockers Prevent Fading - Car Dashboard Cleaner with Non-Greasy, Less Reflective Formula",

  brand:
    "Non-greasy dashboard polish restores shine and protects interiors from UV fading.",

  price: 1399,

  currencySymbol: "₹",

  imagePath: "/products/carPolish/dashboard-polish-interior-main.jpg",

  galleryImages: [
    "/Images/car-polish/dashboard-polish-interior/dashboard-polish-interior-1.jpg",
    "/Images/car-polish/dashboard-polish-interior/dashboard-polish-interior-2.jpg",
    "/Images/car-polish/dashboard-polish-interior/dashboard-polish-interior-3.jpg",
    "/Images/car-polish/dashboard-polish-interior/dashboard-polish-interior-4.jpg",
  ],

  discountText: "₹200 OFF",

  ratingData: {
    averageRating: 4.1,
    totalReviewsCount: 50,
    boughtPastMonthText: "50 reviews",
    soldLastWeekText: "Sold 50 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Restores Original Finish",
    },
    {
      label: "Feature",
      value: "UV Protection Formula",
    },
    {
      label: "Feature",
      value: "Non-Greasy Finish",
    },
    {
      label: "Feature",
      value: "Interior Surface Care",
    },
  ],

  aboutSections: [
    {
      heading: "Restores Original Shine & UV Protection",
      content:
        "RESTORES ORIGINAL SHINE & FINISH: ShineXPro Car Dashboard Polish & Protectant restores the original finish of faded plastics and most interior surfaces. Safe to use on dashboards, door trims, and other plastic or fiber parts of your car. UV PROTECTION & LONG-LASTING CARE: ShineXPro Car Dashboard Cleaner is infused with powerful UV blockers that prevent fading, cracking, and discoloration, keeping your car’s interior looking new.",
    },
    {
      heading: "Non-Greasy & Safe Finish",
      content:
        "NON-GREASY & DUST-RESISTANT FORMULA: ShineXPro Dashboard Polish for Car Interior is designed with a non-greasy finish and infused with less antistatic additives that help repel dirt and dust, keeping your dashboard cleaner for longer. SAFE, LOW-GLARE FINISH: ShineXPro Dashboard Cleaner is specially formulated to be less reflective, ensuring dashboard visibility is not compromised while driving, for enhanced road safety.",
    },
    {
      heading: "Easy Application & Fresh Fragrance",
      content:
        "EASY APPLICATION & FRESH FRAGRANCE: ShineXPro Dashboard Polish comes with a convenient applicator sponge which allows you to evenly spread the polish across your car’s dashboard and interior surfaces. After use, it leaves a pleasant, fresh fragrance, keeping your car interior smelling clean and refreshed.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 69 },
      { stars: 4, percentage: 19 },
      { stars: 3, percentage: 7 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "polish-review-3",

        reviewerName: "Amit",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Brings back the original dashboard finish without leaving any greasy residue. The UV protection is an added bonus.",

        postedDateAgo: "2 weeks ago",
      },
      {
        id: "polish-review-4",

        reviewerName: "Vikas",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Easy to apply with the included sponge. Leaves a clean matte finish and a pleasant fragrance inside the car.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-3
{
  id: "wavex-car-polish-kit-12-pcs",

  productHeading: "Wavex Car Polish Kit 12 Pcs",

  title:
    "Wavex Car Polish Kit 12 Pcs | Includes Car Dashboard Polish, Car Wax, Tyre Polish, Car Shampoo, Windshield Washer & Car Freshener, Scratch Remover, 2 Cloths, 3 Applicators - Car Washing Kit",

  brand:
    "Complete 12-piece car care kit for cleaning, polishing, protection, and detailing.",

  price: 1689,

  currencySymbol: "₹",

  imagePath: "/products/carPolish/wavex-car-polish-kit-main.jpg",

  galleryImages: [
    "/Images/car-polish/wavex-car-polish-kit/wavex-car-polish-kit-1.jpg",
    "/Images/car-polish/wavex-car-polish-kit/wavex-car-polish-kit-2.jpg",
    "/Images/car-polish/wavex-car-polish-kit/wavex-car-polish-kit-3.jpg",
    "/Images/car-polish/wavex-car-polish-kit/wavex-car-polish-kit-4.jpg",
  ],

  discountText: "₹300 OFF",

  ratingData: {
    averageRating: 4.1,
    totalReviewsCount: 300,
    boughtPastMonthText: "300 reviews",
    soldLastWeekText: "Sold 300 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Complete Car Care Kit",
    },
    {
      label: "Feature",
      value: "All-in-One Detailing Solution",
    },
    {
      label: "Feature",
      value: "Scratch & Surface Care",
    },
    {
      label: "Feature",
      value: "Premium Cleaning Accessories",
    },
  ],

  aboutSections: [
    {
      heading: "Complete Cleaning & Protection",
      content:
        "Restore Brilliance: Our Carnauba Wax Polish is formulated with the finest ingredients to deliver a deep, lustrous shine that will turn heads wherever you go. Say goodbye to dull paint and hello to a showroom-worthy finish. Protect with Confidence: The Dashboard and Leather Conditioner Protectant ensures your interior surfaces stay clean, nourished, and protected from the sun's harmful rays. Experience the joy of a rejuvenated interior that exudes elegance. Showroom-Worthy Tyres: Turn heads with our Tyre Guard solution, providing a glossy black finish that lasts. Not only does it enhance the appearance of your tyres, but it also minimizes dust attraction and stickiness, keeping your tyres cleaner for longer.",
    },
    {
      heading: "Superior Cleaning Performance",
      content:
        "Superior Cleaning Power: Our Wonder Wash Car and Bike Shampoo offers a powerful yet gentle cleansing experience. It effortlessly removes dirt, grime, and road residue, leaving your car spotless and ready to shine. Say Goodbye to Scratches: Our Scratch Remover helps diminish the appearance of minor scratches, restoring your car's paintwork to its former glory. Crystal-Clear Vision: Maintain optimal visibility on the road with our Windshield Washer Fluid Concentrate. It cuts through stubborn dirt and bugs, ensuring a clear view and safer driving.",
    },
    {
      heading: "Professional Grade Accessories",
      content:
        "Professional-Grade Care: The kit includes premium microfiber cloths and foam applicators for a gentle and precise application. Achieve professional results with ease.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 70 },
      { stars: 4, percentage: 18 },
      { stars: 3, percentage: 7 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "polish-review-5",

        reviewerName: "Rahul",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Everything needed for complete car detailing comes in one kit. Excellent quality and value for money.",

        postedDateAgo: "2 weeks ago",
      },
      {
        id: "polish-review-6",

        reviewerName: "Kiran",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "The shampoo, wax and dashboard polish work really well. The microfiber cloths are also of premium quality.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-4
{
  id: "high-gloss-car-polish",

  productHeading: "High-gloss Car Polish",

  title:
    "Meguiar's Ultimate Polish – High-Gloss Polish for a Show Car Shine – Permanently Removes Light Swirls to Produce a Deep, Wet Reflection with a High Gloss Shine - Easy to Use, 473ml",

  brand:
    "High-gloss car polish removes light swirls and delivers deep wet-look shine.",

  price: 884,

  currencySymbol: "₹",

  imagePath: "/products/carPolish/high-gloss-car-polish-main.jpg",

  galleryImages: [
    "/Images/car-polish/high-gloss-car-polish/high-gloss-car-polish-1.jpg",
    "/Images/car-polish/high-gloss-car-polish/high-gloss-car-polish-2.jpg",
    "/Images/car-polish/high-gloss-car-polish/high-gloss-car-polish-3.jpg",
    "/Images/car-polish/high-gloss-car-polish/high-gloss-car-polish-4.jpg",
  ],

  discountText: "₹80 OFF",

  ratingData: {
    averageRating: 4.1,
    totalReviewsCount: 400,
    boughtPastMonthText: "400 reviews",
    soldLastWeekText: "Sold 400 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "High-Gloss Finish",
    },
    {
      label: "Feature",
      value: "Removes Light Swirls",
    },
    {
      label: "Feature",
      value: "Premium Polishing Formula",
    },
    {
      label: "Feature",
      value: "Easy Application",
    },
  ],

  aboutSections: [
    {
      heading: "Prepares Surface & Enhances Gloss",
      content:
        "PREPS SURFACE: Pre-waxing glaze that prepares the surface for wax while offering deep reflections and high gloss. BEST CAR GLOSS: Conditioning oils add depth of color and maximum gloss prior to waxing, especially on dark colored cars.",
    },
    {
      heading: "Removes Swirls Safely",
      content:
        "REMOVE SWIRLS: Quickly and gently removes fine swirls and towel marks for mirror-like reflections. SAFE FOR CLEAR COATS: Safe and on all glossy paints, including clear coats.",
    },
    {
      heading: "Flexible Application",
      content:
        "FLEXIBLE APPLICATION: Safe and effective by hand or dual action polisher like Meguiar's MT300 Dual Action Polisher.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 71 },
      { stars: 4, percentage: 18 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "polish-review-7",

        reviewerName: "Rahul",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Excellent polish. Removed light swirl marks and gave my car a deep glossy showroom finish.",

        postedDateAgo: "2 weeks ago",
      },
      {
        id: "polish-review-8",

        reviewerName: "Sandeep",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Easy to apply and works well before waxing. The shine on dark paint is impressive.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},
// Product-5
{
  id: "3m-liquid-wax",

  productHeading: "3M Liquid Wax",

  title:
    "3M Auto Specialty Liquid Wax 200ml (Pack of 2)",

  brand:
    "3M liquid wax pack provides lasting paint protection with brilliant shine finish.",

  price: 623,

  currencySymbol: "₹",

  imagePath: "/products/carPolish/3m-liquid-wax-main.jpg",

  galleryImages: [
    "/Images/car-polish/3m-liquid-wax/3m-liquid-wax-1.jpg",
    "/Images/car-polish/3m-liquid-wax/3m-liquid-wax-2.jpg",
    "/Images/car-polish/3m-liquid-wax/3m-liquid-wax-3.jpg",
    "/Images/car-polish/3m-liquid-wax/3m-liquid-wax-4.jpg",
  ],

  discountText: "₹10 OFF",

  ratingData: {
    averageRating: 4.1,
    totalReviewsCount: 200,
    boughtPastMonthText: "200 reviews",
    soldLastWeekText: "Sold 200 times",
  },

  attributes: [
    {
      label: "Feature",
      value: "Long-Lasting Protection",
    },
    {
      label: "Feature",
      value: "Brilliant Shine Finish",
    },
    {
      label: "Feature",
      value: "Easy Application",
    },
    {
      label: "Feature",
      value: "Premium 3M Quality",
    },
  ],

  aboutSections: [
    {
      heading: "Restores Gloss & UV Protection",
      content:
        "Restores Gloss to Paint Surfaces & Protects from UV Rays.",
    },
    {
      heading: "Cleans, Polishes & Protects",
      content:
        "The Premium Liquid Wax removes Oxidation and cleans, polishes and protects all painted surfaces.",
    },
    {
      heading: "Long-Lasting Protective Barrier",
      content:
        "Forms a super-slick, protective barrier between the car's paint and the environment, reducing the sticking and build-up of mud, tar, insects and road grime.",
    },
  ],

  shippingBadges: [
    "Free Shipping over 1000",
    "Pan India Shipping",
    "No Cash on Delivery",
  ],

  reviewsBreakdown: {
    starBars: [
      { stars: 5, percentage: 70 },
      { stars: 4, percentage: 19 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 2 },
    ],

    userFeed: [
      {
        id: "polish-review-9",

        reviewerName: "Amit",

        rating: 5,

        isVerifiedBuyer: true,

        commentText:
          "Excellent liquid wax. Easy to apply and leaves a brilliant shine with lasting protection.",

        postedDateAgo: "2 weeks ago",
      },
      {
        id: "polish-review-10",

        reviewerName: "Vikas",

        rating: 4,

        isVerifiedBuyer: true,

        commentText:
          "Good quality wax. Restores gloss and protects the paint from dust and UV exposure.",

        postedDateAgo: "1 month ago",
      },
    ],
  },
},
]
}
];
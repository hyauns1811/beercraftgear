export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: 'kegerators' | 'tapping' | 'gas' | 'towers';
  categoryLabel: string;
  image: string;
  shortDescription: string;
  description: string;
  specs: Record<string, string>;
  stock: number;
  weight: string; // GMC requires shipping weight
  sku: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "prod-001",
    name: "5 Lbs Premium Aluminum CO2 Tank",
    slug: "5-lbs-aluminum-co2-tank-cga320",
    price: 89.00,
    category: "gas",
    categoryLabel: "Gas Equipment",
    image: "/product/5 Lbs CO2 Tank Aluminum Gas Cylinder Brand New CO2 Cylinder with Gray Spray Coating CO2 Tank with CGA320 Valve.avif",
    sku: "GS-TK-ALUM-05",
    weight: "7.8 lbs",
    shortDescription: "Premium lightweight aluminum 5 lb CO2 tank featuring high-grade CGA320 valve and gray protective coating.",
    description: "The ideal gas cylinder for draft beer systems, homebrewers, and carbonation setups. Crafted from high-strength aluminum alloy 6061-T6, this tank is up to 40% lighter than equivalent steel tanks. Features a durable gray spray protective coating to prevent corrosion. Shipped empty in compliance with transportation regulations.",
    specs: {
      "Gas Capacity": "5 lbs (2.3 kg)",
      "Material": "High-strength Aluminum Alloy 6061-T6",
      "Valve Type": "CGA-320 Standard CO2 Valve",
      "Finish": "Gray Protective Spray Coating",
      "Service Pressure": "1800 PSI / Test Pressure 3000 PSI",
      "Certification": "DOT-3AL & TC-3ALM Approved"
    },
    stock: 25
  },
  {
    id: "prod-002",
    name: "Commercial Single-Tap Draft Beer Kegerator (92L)",
    slug: "commercial-single-tap-kegerator-92l",
    price: 699.00,
    category: "kegerators",
    categoryLabel: "Kegerators",
    image: "/product/Beer Kegerator Single Tap Commercial Draft Beer Dispenser for D system W Shelves Hold 1 Sixth Keg 2.5lbs CO2 Tank 92L.avif",
    sku: "KG-SC-92L-01",
    weight: "75.0 lbs",
    shortDescription: "92L commercial draft beer dispenser with single tap system, internal shelves, and 2.5 lbs CO2 tank.",
    description: "High-performance commercial draft beer dispenser with a 92L capacity. Specifically designed for D-system kegs, it accommodates a sixth barrel keg and comes equipped with adjustable wire shelves, a complete tapping kit, and a 2.5 lbs CO2 tank. Perfect for offices, small bars, and premium home bar installations.",
    specs: {
      "Capacity": "92 Liters (Holds 1 Sixth Barrel Keg)",
      "System Type": "D-System (US Sankey)",
      "Cooling Type": "Compressor Cooling",
      "CO2 Tank": "2.5 lbs Aluminum Tank Included",
      "Shelves": "Adjustable Wire Shelving Included",
      "Dimensions": "33.5\" H x 18.5\" W x 21.0\" D"
    },
    stock: 12
  },
  {
    id: "prod-003",
    name: "Argon / CO2 Flow Meter & Pressure Regulator",
    slug: "argon-co2-flow-meter-regulator",
    price: 59.00,
    category: "gas",
    categoryLabel: "Gas Equipment",
    image: "/product/CO2 Flow Meter Mig Tig 0-25 MPa, Standard Flow Meter, Welding Device, Argon Pressure Reducer.avif",
    sku: "GS-FM-MIGTIG-01",
    weight: "2.2 lbs",
    shortDescription: "Standard gas flow meter and pressure regulator for MIG/TIG welding and Argon/CO2 cylinder systems.",
    description: "A high-accuracy CO2 and Argon pressure regulator and flow meter designed for MIG/TIG welding and industrial gas systems. Measures flow rates from 0 to 25 MPa with dual pressure gauges, ensuring stable pressure reduction and consistent, clean gas flow.",
    specs: {
      "Gas Type": "Argon / CO2",
      "Pressure Range": "0-25 MPa (0-3600 PSI)",
      "Flow Range": "0-25 L/min",
      "Inlet Connection": "CGA-580 / CGA-320 Standard",
      "Material": "Forged Brass and Durable Alloy",
      "Application": "MIG / TIG Welding and Pressure Regulation"
    },
    stock: 35
  },
  {
    id: "prod-004",
    name: "Double Head CO2 Regulator & Pressure Gauge",
    slug: "double-head-co2-regulator-gauge",
    price: 79.00,
    category: "gas",
    categoryLabel: "Gas Equipment",
    image: "/product/CO2 Regulator, Double Head Reduced Pressure Gauge.avif",
    sku: "GS-RG-DBLHD-02",
    weight: "2.5 lbs",
    shortDescription: "Professional double-head CO2 primary regulator with dual reduced pressure gauges and safety valve.",
    description: "This double-head primary CO2 regulator features dual reduced pressure gauges for monitoring gas cylinder levels and output flow to separate kegs. Equipped with a safety pressure relief valve, it allows for easy adjustments to maintain precise gas supply.",
    specs: {
      "Gas Type": "CO2 (Carbon Dioxide)",
      "Configuration": "Double Head (Two Outlets)",
      "Output Pressure": "0-60 PSI",
      "Tank Pressure": "0-3000 PSI",
      "Connection": "CGA-320 standard female nut",
      "Relief Valve": "Safety blow-off at 55-65 PSI"
    },
    stock: 22
  },
  {
    id: "prod-005",
    name: "Portable Electric Dual-Tap Draft Beer Dispenser",
    slug: "portable-electric-dual-tap-dispenser",
    price: 899.00,
    category: "kegerators",
    categoryLabel: "Kegerators",
    image: "/product/Electric Beer Kegerator Beer Cooling Portable Draft Beer Dispenser Pressurized Equipment Dual Tap for Commercial.avif",
    sku: "KG-PORT-DUAL-02",
    weight: "88.0 lbs",
    shortDescription: "High-efficiency portable electric dual-tap beer kegerator for commercial and catering events.",
    description: "A portable electric draft beer dispenser featuring dual taps and high-efficiency cooling. Equipped with pressurized lines for a perfect commercial-style pour anywhere. Perfect for catered events, commercial promotions, and premium home parties.",
    specs: {
      "Taps": "Dual Tap Stainless Steel",
      "Power": "Electric Pressurized cooling system",
      "Application": "Commercial & Catering",
      "Temperature": "Adjustable 32°F - 50°F",
      "Mobility": "Heavy-duty casters and side handles",
      "Voltage": "110V / 60Hz"
    },
    stock: 8
  },
  {
    id: "prod-006",
    name: "D-System Commercial Keg Coupler with Safety Relief",
    slug: "d-system-stainless-steel-coupler",
    price: 49.50,
    category: "tapping",
    categoryLabel: "Keg Tapping Equipment",
    image: "/product/Keg Beer Keg Coupler with Safety Pressure Relief D Type System Craft Beer Commercial Keg Dispenser Stainless Steel Coupler.jpg",
    sku: "TP-D-COUP-01",
    weight: "1.8 lbs",
    shortDescription: "Heavy-duty D-System Sankey coupler with stainless steel body and integrated safety pressure relief valve.",
    description: "Commercial-grade D-type Sankey coupler for American craft beer and domestic kegs. Constructed from robust stainless steel with an integrated safety pressure relief valve. Ensures a secure, leak-free tap connection with every pour.",
    specs: {
      "System Type": "D-System (US Sankey)",
      "Body Material": "304 Stainless Steel",
      "Probe Material": "304 Stainless Steel",
      "Safety Feature": "Integrated pressure relief valve",
      "Connections": "5/16\" gas barb, standard liquid thread",
      "Handle Type": "Lever handle with safety lock"
    },
    stock: 55
  },
  {
    id: "prod-007",
    name: "Perlick Model 650SS Flow Control Beer Faucet",
    slug: "perlick-650ss-flow-control-faucet",
    price: 99.00,
    category: "tapping",
    categoryLabel: "Keg Tapping Equipment",
    image: "/product/Perlick Faucet - Flow Control - Model 650SS.avif",
    sku: "TP-FC-PL650-02",
    weight: "1.3 lbs",
    shortDescription: "Premium forward-sealing flow control faucet made of 304 stainless steel, Model 650SS.",
    description: "The authentic Perlick Model 650SS forward-sealing flow control faucet. Made of premium 304 stainless steel. Features a flow control lever on the side, allowing you to easily adjust the flow rate to prevent excessive foam when pouring.",
    specs: {
      "Brand / Model": "Perlick 650SS",
      "Material": "304 Stainless Steel",
      "Flow Control": "Adjustable side lever",
      "Sealing Style": "Forward-sealing (avoids stickiness)",
      "Thread Connection": "Standard US Beer Faucet threads"
    },
    stock: 40
  },
  {
    id: "prod-008",
    name: "Vertical Beer Tap Pole Adapter with Adjustable Faucet",
    slug: "vertical-beer-tap-pole-adapter",
    price: 55.00,
    category: "towers",
    categoryLabel: "Towers & Drip Trays",
    image: "/product/Vertical Beer Tap Pole Keg Coupler Adapter With Adjustable Beer Faucet,G5 8 Thread Simple Beer Tower For Ball Lock Keg Party.avif",
    sku: "TW-VT-ADPT-03",
    weight: "3.5 lbs",
    shortDescription: "Vertical beer tap pole coupler adapter with G5/8 thread and adjustable faucet for ball lock keg parties.",
    description: "A simple, portable vertical beer tap pole adapter featuring G5/8 threading and an adjustable beer faucet. Connects directly to keg couplers or ball lock setups, converting standard keg setups into a compact draft beer tower for parties.",
    specs: {
      "Thread Size": "G5/8 standard beer thread",
      "Faucet Type": "Adjustable flow control faucet",
      "Application": "Direct keg coupler attachment / Party setup",
      "Material": "Chrome-plated brass and stainless steel",
      "Compatibility": "D-System couplers, Ball Lock fittings"
    },
    stock: 18
  },
  {
    id: "prod-009",
    name: "CGA320 Dual Gauge CO2 Regulator for Homebrew & Carbonation",
    slug: "cga320-dual-gauge-co2-regulator",
    price: 69.00,
    category: "gas",
    categoryLabel: "Gas Equipment",
    image: "/product/W21.8 CGA320 Dual Gauge Co2 Regulator With Pressure Relief Valve For Beer Carbonated Soda Water Brewing.avif",
    sku: "GS-RG-CGA320-03",
    weight: "2.3 lbs",
    shortDescription: "W21.8 / CGA320 dual-gauge CO2 regulator with built-in pressure relief valve for home brewing.",
    description: "Dual-gauge CO2 regulator compatible with W21.8 and CGA320 gas cylinders. Designed for carbonating soda water and draft beer homebrew systems. Equipped with a built-in safety pressure relief valve and easy-turn knob for fine pressure adjustments.",
    specs: {
      "Gas Type": "CO2 (Carbon Dioxide)",
      "Inlet Connection": "CGA-320 (US) / W21.8 compatible",
      "Gauges": "Dual gauge (Output and Tank pressure)",
      "Pressure Relief": "Manual pressure release valve",
      "Adjustment Knob": "Easy grip pressure adjustment"
    },
    stock: 30
  }
];

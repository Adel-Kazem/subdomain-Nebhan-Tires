const PRODUCTS = [
    {
        // Basic Information
        id: 4,
        name: "All-Terrain Off-Road Wheels",
        description:
            "Conquer any terrain with our rugged all-terrain wheels. Built to withstand the toughest off-road conditions, these wheels offer superior traction and durability for your adventures beyond the pavement.",
        base_price: 89,
        base_shipping_cost: 14.99,
        free_shipping: false,
        sku: "WHL-ALTRN-0004",
        slug: "all-terrain-off-road-wheels",
        brand: "Benhan Tires",
        rating: 5,
        reviews_count: 24,

        // Status Information
        status: "active",
        isFeatured: true,
        isOnSale: false,
        requiresShipping: true,

        // Stock Management
        requiresInventoryTracking: true,
        stock: 48,
        hasVariants: false,
        totalVariantStock: 48,
        lowStockThreshold: 8,

        // Product Details
        features: {
            material: "Reinforced steel alloy",
            surface: "Multi-directional tread",
            compatibleVehicles: "SUVs, trucks, off-road vehicles",
            warranty: "3 years",
        },

        // Images
        images: [
            "https://raw.githubusercontent.com/Adel-Kazem/subdomain-Benhan-Tires/main/products_images/1.jpeg",
        ],

        // Product Configuration
        options: {}, // No options for this product

        // Option Images, variant images, stock, adjustments - empty
        option_images: {},
        variant_images: {},
        option_variants_stock: {},
        option_price_adjustments: {},
        option_shipping_adjustments: {},

        // Physical Attributes
        weight: { value: 13.5, unit: "kg" },
        dimensions: { length: 55, width: 55, height: 26, unit: "cm" },
        option_dimension_overrides: {},

        // Categories (example IDs: 501 = Wheels, 502 = Off-Road, etc.)
        categories: [501, 502],
        upselling: [5, 6],
        crossSelling: [6],
        relatedProducts: [5],

        // Timestamps
        createdAt: "2025-04-20T12:00:00Z",
        updatedAt: "2025-04-28T10:05:00Z"
    },

    {
        id: 5,
        name: "High-Performance Racing Wheels",
        description:
            "Dominate the track with our high-performance racing wheels. Engineered for maximum strength and minimal weight, these wheels provide superior cornering and acceleration for the serious motorsport enthusiast.",
        base_price: 199,
        base_shipping_cost: 19.99,
        free_shipping: false,
        sku: "WHL-RACE-0005",
        slug: "high-performance-racing-wheels",
        brand: "Benhan Tires",
        rating: 5,
        reviews_count: 15,

        status: "active",
        isFeatured: false,
        isOnSale: true,
        requiresShipping: true,

        requiresInventoryTracking: true,
        stock: 27,
        hasVariants: false,
        totalVariantStock: 27,
        lowStockThreshold: 5,

        features: {
            material: "Ultralight magnesium alloy",
            design: "Aero-optimized spokes",
            intendedUse: "Track, motorsport, performance cars",
            certification: "FIA approved",
            warranty: "2 years"
        },

        images: [
            "https://raw.githubusercontent.com/Adel-Kazem/subdomain-Benhan-Tires/main/products_images/2.jpeg",
        ],

        options: {},
        option_images: {},
        variant_images: {},
        option_variants_stock: {},
        option_price_adjustments: {},
        option_shipping_adjustments: {},

        weight: { value: 7.2, unit: "kg" },
        dimensions: { length: 48, width: 48, height: 22, unit: "cm" },
        option_dimension_overrides: {},

        categories: [501, 503], // 503 = Racing
        upselling: [6],
        crossSelling: [4],
        relatedProducts: [4, 6],

        createdAt: "2025-04-21T10:15:00Z",
        updatedAt: "2025-04-28T10:05:00Z"
    },

    {
        id: 6,
        name: "Premium Alloy Wheels - Starburst Design",
        description:
            "Enhance your vehicle performance and style with our premium alloy wheels. Featuring a sleek starburst design, these lightweight wheels improve handling and fuel efficiency while turning heads on the road.",
        base_price: 225,
        base_shipping_cost: 24.99,
        free_shipping: true,
        sku: "WHL-ALLOY-0006",
        slug: "premium-alloy-wheels-starburst-design",
        brand: "Benhan Tires",
        rating: 5,
        reviews_count: 18,

        status: "active",
        isFeatured: true,
        isOnSale: true,
        requiresShipping: true,

        requiresInventoryTracking: true,
        stock: 31,
        hasVariants: false,
        totalVariantStock: 31,
        lowStockThreshold: 5,

        features: {
            material: "Forged aluminum alloy",
            finish: "Diamond-cut starburst",
            fitment: "Universal (select adapters required)",
            performance: "Increased handling, reduces curb weight",
            warranty: "4 years"
        },

        images: [
            "https://raw.githubusercontent.com/Adel-Kazem/subdomain-Benhan-Tires/main/products_images/3.jpeg",
        ],

        options: {},
        option_images: {},
        variant_images: {},
        option_variants_stock: {},
        option_price_adjustments: {},
        option_shipping_adjustments: {},

        weight: { value: 8.6, unit: "kg" },
        dimensions: { length: 49, width: 49, height: 21, unit: "cm" },
        option_dimension_overrides: {},

        categories: [501, 504], // 504 = Alloy Wheels
        upselling: [4, 5],
        crossSelling: [4],
        relatedProducts: [5],

        createdAt: "2025-04-22T08:45:00Z",
        updatedAt: "2025-04-28T10:05:00Z"
    }
];

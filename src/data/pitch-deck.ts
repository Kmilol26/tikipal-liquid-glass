export interface Slide {
    id: string;
    title: string;
    subtitle?: string;
    content: string[];
    accentText?: string;
    type: "cover" | "text" | "grid" | "product" | "market" | "team" | "live-demo" | "problem" | "value-prop" | "benefits" | "business-model" | "comparison" | "roadmap" | "growth-plans" | "funding" | "join";
    background?: string;
    metrics?: { label: string; value: string; sublabel?: string }[];
    componentName?: "PlaceCard" | "BookingWidget" | "TicketCard";
    comparison?: {
        competitors: { name: string; logo?: string; style: string }[];
        features: { name: string; values: boolean[] }[];
    };
    roadmap?: {
        milestones: { title: string; subtitle: string; icon: string; position: 'top' | 'bottom' }[];
        partners: string[];
    };
    plans?: { title: string; description: string }[];
    team?: {
        members: {
            name: string;
            role: string;
            photo?: string;
            logos: string[];
            bio: string[];
        }[];
    };
    funding?: {
        ask: string;
        items: { value: string; title: string; subtitle: string; highlight?: string }[];
    };
}

export const PITCH_DECK_CONTENT: Slide[] = [
    {
        id: "intro",
        title: "La infraestructura de ticketing para nightlife",
        subtitle: "Vende, opera y fideliza en una sola plataforma para comercios y eventos",
        accentText: "TIKIPAL",
        content: ["Digitaliza el entretenimiento hoy"],
        type: "cover"
    },
    {
        id: "problem",
        title: "Hoy la operación nocturna pierde dinero por fricción.",
        subtitle: "Más costo, menos conversión y cero visibilidad de datos en tiempo real",
        content: [
            "Recaudo caro: Comisiones elevadas sin trazabilidad accionable.",
            "Operación fragmentada: Ticketing, acceso y CRM viven en herramientas separadas.",
            "Compra lenta: Fricción en checkout y filas en puerta reducen conversión.",
            "Marketing ineficiente: Sin base propia ni segmentación para reactivar audiencia."
        ],
        type: "problem"
    },
    {
        id: "value-prop",
        title: "Digitalizamos la operación del entretenimiento",
        subtitle: "Una sola plataforma para vender, operar y fidelizar en tiempo real",
        content: [
            "Operación unificada: Ticketing, reservas y pagos en un solo flujo.",
            "Conversión más alta: Menos fricción en compra y acceso con QR.",
            "Retención accionable: Datos en tiempo real para campañas que sí convierten."
        ],
        type: "value-prop"
    },
    {
        id: "market",
        title: "Mercado con crecimiento anual del 35%",
        subtitle: "La transición de efectivo a digital abre una ventana clara para liderar",
        content: [
            "TAM: $20B USD en LATAM en experiencias y ticketing digital.",
            "SAM: $200M USD en Colombia en comercios y eventos activos.",
            "SOM: $60M USD en primeras ciudades objetivo con ejecución actual."
        ],
        metrics: [
            { label: "Cash", value: "70%", sublabel: "Espacio de digitalización" },
            { label: "Digital", value: "20%", sublabel: "Base actual" },
            { label: "Otros", value: "10%", sublabel: "Métodos alternativos" }
        ],
        type: "market"
    },
    {
        id: "solution-details",
        title: "Una plataforma, cuatro capacidades clave",
        subtitle: "De la venta al re-engagement en un sistema único",
        content: [
            "**Venta inteligente** con links, QR y distribución omnicanal.",
            "**Cobro flexible** con tarjeta, transferencias y cashless.",
            "**CRM nativo** para capturar, segmentar y activar audiencias.",
            "**Control operativo** en tiempo real para acceso y aforo."
        ],
        type: "benefits"
    },
    {
        id: "business-model",
        title: "Modelo de ingresos simple y escalable",
        subtitle: "Ingreso recurrente + ingreso transaccional + capa de data",
        content: [
            "SaaS para comercios:Planes desde **$29 USD/mes** con operación digital integrada.",
            "Take rate por ticket:Comisión de **10% + $0.20** por transacción procesada.",
            "Inteligencia comercial:Reportes y activación de audiencias como capa de valor incremental."
        ],
        type: "business-model"
    },
    {
        id: "competition",
        title: "Comparativa de Mercado",
        subtitle: "Competimos en precio, operación y ownership del cliente",
        content: [],
        type: "comparison",
        comparison: {
            competitors: [
                { name: "Tikipal", style: "bg-tikipal-orange text-white" },
                { name: "Ticketmaster", style: "bg-white text-black border border-gray-200" },
                { name: "Eventbrite", style: "bg-[#F05537] text-white" },
                { name: "Degusta", style: "bg-white text-[#D0021B] border border-gray-200" }
            ],
            features: [
                { name: "**Tarifas fijas** para comercios y clientes", values: [true, false, true, false] },
                { name: "**Digitalización Final** con más de 3 canales de venta y remarketing.", values: [true, false, false, false] },
                { name: "**Sistema de cobro** con métricas de gestión.", values: [true, true, true, false] },
                { name: "**Servicio prioritario** para clientes en comercios.", values: [true, false, false, true] },
                { name: "**Comunicación directa** con los propietarios, excluyendo revendedores.", values: [true, false, false, true] }
            ]
        }
    },
    {
        id: "roadmap",
        title: "Roadmap y tracción validada",
        subtitle: "Hitos entregados y próximos pasos para acelerar crecimiento",
        content: [],
        type: "roadmap",
        roadmap: {
            milestones: [
                { title: "Lanzamiento Tikipal 2023", subtitle: "MVP & Validación", icon: "Rocket", position: "bottom" },
                { title: "Socio Tecnológico", subtitle: "de Asobares", icon: "Settings", position: "top" },
                { title: "500 Comercios", subtitle: "En onboarding", icon: "Building2", position: "bottom" },
                { title: "100k", subtitle: "Transacciones", icon: "Ticket", position: "top" },
                { title: "Primer Evento", subtitle: "Masivo", icon: "PartyPopper", position: "bottom" },
                { title: "Lanzamiento", subtitle: "Portal Comercios", icon: "LayoutDashboard", position: "top" },
                { title: "150k", subtitle: "Usuarios", icon: "Users", position: "bottom" },
                { title: "Convenio", subtitle: "DIAGEO & Pernod", icon: "Wine", position: "top" },
                { title: "Apertura Modelo", subtitle: "Corporativo", icon: "Briefcase", position: "bottom" },
                { title: "Lanzamiento", subtitle: "Ciudades", icon: "MapPin", position: "top" }
            ],
            partners: [
                "Asobares", "DIAGEO", "Bogota", "Pernod Ricard", "Theatron", "Furia", "Terra Bomba", "Federal", "Plaza MX"
            ]
        }
    },
    {
        id: "growth-plans",
        title: "Plan de expansión 2026-2027",
        subtitle: "Escala por vertical, geografía y alianzas estratégicas",
        content: [],
        type: "growth-plans",
        plans: [
            {
                title: "Tikipal en todo Colombia",
                description: "Despliegue comercial en ciudades donde Asobares tiene red activa y demanda validada."
            },
            {
                title: "Modelo Corporativo",
                description: "Expansión B2B para empresas con operación de eventos internos y externos."
            },
            {
                title: "Aliado Ministerio de Turismo",
                description: "Canal institucional para acelerar adopción en comercios de experiencias en el país."
            },
            {
                title: "1 Millón de Transacciones",
                description: "Meta operativa combinando preventa digital y venta presencial asistida por QR."
            }
        ]
    },

    {
        id: "team",
        title: "Equipo fundador",
        subtitle: "Operación, producto e ingeniería para escalar en LATAM",
        content: [],
        type: "team",
        team: {
            members: [
                {
                    name: "Camilo Acosta",
                    role: "CEO",
                    logos: ["CloudKitchens", "milio", "duppla"],
                    bio: [
                        "Head of sales Milio (YC 2023)",
                        "Cloudkitchens Enterprise",
                        "Lead Retail Offload duppla"
                    ]
                },
                {
                    name: "Jobelo Quintero",
                    role: "CTO",
                    logos: ["webacy", "MIROCULUS"],
                    bio: [
                        "Former Software Staff Engineer at BioTech company",
                        "Current Blockchain/Web3 Senior Developer",
                        "AI/Machine Learning enthusiast"
                    ]
                },
                {
                    name: "Carlos Martinez",
                    role: "COO / Fullstack Dev",
                    logos: ["UruIT", "Tesorio"],
                    bio: [
                        "Experienced Software Engineer",
                        "EM Integrations Tesorio",
                        "Python Lead engineer UruIT"
                    ]
                },
                {
                    name: "Sebastian Llano",
                    role: "UX/UI",
                    logos: ["Lenovo", "sura", "adidas"],
                    bio: [
                        "Product design at Grupo Sura",
                        "Ux-Ui Design consultant in Adidas",
                        "Ui Design in Lenovo"
                    ]
                }
            ]
        }
    },
    {
        id: "investment",
        title: "Inversión",
        subtitle: "",
        content: [],
        type: "funding",
        funding: {
            ask: "Buscamos financiación para 12 meses para escalar a 15k comercios y superar 1 millón de transacciones.",
            items: [
                { value: "$500k", title: "Ronda Angel", subtitle: "Capital objetivo", highlight: "12 meses runway" },
                { value: "1M", title: "Transacciones", subtitle: "Meta operativa", highlight: "año 1" },
                { value: "$3.6M", title: "Revenue Proyectado", subtitle: "Hito esperado", highlight: "en 12 meses" }
            ]
        }
    },
    {
        id: "join",
        title: "Conversemos",
        subtitle: "",
        content: [
            "Invirtamos juntos en la infraestructura del entretenimiento en LATAM"
        ],
        type: "join"
    }
];

export interface Slide {
    id: string;
    title: string;
    subtitle?: string;
    content: string[];
    accentText?: string;
    type: "cover" | "text" | "grid" | "product" | "market" | "team" | "live-demo";
    background?: string;
    metrics?: { label: string; value: string; sublabel?: string }[];
    componentName?: "PlaceCard" | "BookingWidget" | "TicketCard";
}

export const PITCH_DECK_CONTENT: Slide[] = [
    {
        id: "intro",
        title: "TIKIPAL",
        subtitle: "Nightlife Connectivity, Perfected.",
        accentText: "LA PLATAFORMA QUE DIGITALIZA EL ENTRETENIMIENTO",
        content: ["Conectando comercios y consumidores en tiempo real."],
        type: "cover"
    },
    {
        id: "problem",
        title: "El Problema",
        subtitle: "La gestión de eventos y la administración en comercios es ineficiente.",
        content: [
            "Altos costos en recaudación: Comisiones por Datáfonos altas y sin datos útiles.",
            "Comercios y Eventos: Sin herramientas para optimizar ventas y fidelizar clientes.",
            "No hay plataformas: Falta de optimización en la experiencia del usuario y acceso poco eficiente.",
            "Altos Costos en Publicidad: Sin datos de clientes recurrentes ni reservas garantizadas."
        ],
        type: "grid"
    },
    {
        id: "market",
        title: "Oportunidad de Mercado",
        subtitle: "35% Crecimiento Anual en LatAm",
        content: [
            "TAM: $20B USD - 1.5B transacciones (Oportunidad en LATAM).",
            "SAM: $200M USD - 100,000 Comercios (Ventas diarias en Colombia).",
            "SOM: $60M USD - SMBS (Compras semanales en Bogotá)."
        ],
        metrics: [
            { label: "Cash", value: "70%", sublabel: "Alto potencial de digitalización" },
            { label: "POS", value: "20%", sublabel: "Pagos digitales existentes" },
            { label: "Otros", value: "10%", sublabel: "Pagos alternativos" }
        ],
        type: "market"
    },
    {
        id: "solution",
        title: "Descubrimiento",
        subtitle: "Curaduría y Estética en cada lugar",
        content: [
            "Descubre los mejores spots de la ciudad con un diseño ultra-premium.",
            "Filtros inteligentes por zona y categoría.",
            "Información en tiempo real y favoritos de los usuarios."
        ],
        componentName: "PlaceCard",
        type: "live-demo"
    },
    {
        id: "product",
        title: "Boletería Digital",
        subtitle: "Simplificando el Ticketing",
        content: [
            "Facilita la emisión de entradas digitales y análisis en tiempo real.",
            "Acceso rápido y sin filas con el Liquid Ticket.",
            "Diseño de seguridad y estética inigualable."
        ],
        componentName: "TicketCard",
        type: "live-demo"
    },
    {
        id: "booking",
        title: "Reservas Instantáneas",
        subtitle: "Zero Fricción, Máximo Impacto",
        content: [
            "Reserva tu mesa en segundos desde cualquier dispositivo.",
            "Confirmación inmediata y flujo de pago integrado.",
            "Experiencia 'Liquid Glass' en cada interacción."
        ],
        componentName: "BookingWidget",
        type: "live-demo"
    },
    {
        id: "business",
        title: "Modelo de Negocio",
        subtitle: "Ingresos Escalables y Recurrentes",
        accentText: "RENTABLE DESDE EL DÍA 1",
        content: [
            "Comisión por Reserva: fee por cada entrada emitida.",
            "SaaS para Comercios: Herramientas premium de gestión y datos.",
            "Publicidad Segmentada: Conexión directa marcas-consumidores."
        ],
        type: "grid"
    },
    {
        id: "team",
        title: "El Equipo",
        subtitle: "Ingeniería y Visión de Producto",
        content: [
            "Camilo A. - Fundador y Visión de Producto.",
            "Antigravity AI - Liderazgo Tecnológico.",
            "Expertos en UI moderna y sistemas escalables."
        ],
        type: "team"
    },
    {
        id: "ask",
        title: "Próximos Pasos",
        subtitle: "Escalando la Experiencia",
        accentText: "CONSTRUYAMOS EL PRÓXIMO UNICORNIO LATAM",
        content: [
            "Lanzamiento de la beta V1 con venues estratégicos en Bogotá.",
            "Meta: 50,000 usuarios activos mensuales en el primer año.",
            "Join us in redefining the premium digital landscape."
        ],
        type: "cover"
    }
];

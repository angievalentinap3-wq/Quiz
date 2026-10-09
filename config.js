const QUIZ_CONFIG = {
  title: "Un cumple de gustos 🎂",
  subtitle: "Por favor ayuda esta pobre ser humana en crisis que quiere celebrar esta linda fecha",
  intro: "Responde según lo que realmente te provoque, mi sueldo puede con todo",

  sections: [
    {
      id: "mood",
      emoji: "✨",
      title: "Pensando en qué mood estás para HOY",
      type: "rank",
      instruction: "Arrastra y deja primero lo que más te gustaría.",
      options: [
        "💃 Tomar en un barcito, puede terminar en nuestra primera rumba juntas solas",
        "🏠 Plan casita: juegos + comida + algo para tomar",
        "🎬 Ir a cineeeeee",
        "🛍️ Salir de compritass por ahí",
        "🍽️ Irnos a comer por fueraaa",
      ]
    },

    {
      id: "food",
      emoji: "🍽️",
      title: "Teniendo en cuenta tu sistema gastrointestinal reciente, piensa qué quieres comer este finde",
      type: "rank",
      instruction: "Ordénalas de más antojada a menos antojada.",
      options: [
        "🌮 Mexicano",
        "🍝 Pastas / comida italiana",
        "🥩 Chicharrón / comida típica",
        "🍔 Hamburguesa o perrito",
        "🥘 Algo pa picarrr",
        "🥗 Algo sencillo o ligero",
        "🍰 Brunchito"
      ]
    },

    {
      id: "plans",
      emoji: "🎉",
      title: "Planes pa mañanaaa",
      description: "Imagina que tienes varias opciones para pasar una tarde/noche especial.",
      type: "rank",
      instruction: "Ordena en orden según el plan que más te emocionaría.",
      options: [
        "🍸 Barcito para hablar y tomar algo",
        "💃 Discotequear juntas",
        "🏠 Plan casita: juegos + comida + algo para tomar",
        "🎬 Cineeeeee otra vez jajajajaja",
        "🛍️ Día/tarde de compras",
        "☕ Brunch o café tranquilo",
        "🤷 Caminar por ahí y perdernos un rato"
      ]
    },

    {
      id: "movies",
      emoji: "🍿",
      title: "Bueno esto es por si marcaste como un plan chevere ir a cine, 
      description: "Si aparecieran estas películas en cartelera, ¿cuáles te llamarían la atención? Puedes escoger hasta 3.",
      type: "multi",
      instruction: "cuáles te gustarían? Puedes escoger hasta 3 y tranqui que obvio no incluí de terror",
      max: 3,
      options: [
        "🐺 El Corazón de la Bestia — Acción / aventura - Dicen q es pa llorar",
        "🦸 Avengers: Endgame Bon — Acción / ciencia ficción - por si quieres repetir la peli",
        "🖤 Verity — Misterio / suspenso - Tiene buen cast de actores",
        "🐺 Coyote vs. ACME — Comedia / aventura - por nostalgia de cartoon",
        "😱 Vértigo 2: Punto Muerto — Suspenso - Es literalmente de que puede dar vértigo por altura",
        "😱 Pacifico: Drama - El cartel tiene mar y barcos",
      ]
    },
  ]
};

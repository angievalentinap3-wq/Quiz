const QUIZ_CONFIG = {
  title: "Operación: cumpleaños perfecto 🎂",
  subtitle: "Necesitamos resolver una pregunta MUY importante: ¿qué plan te haría más feliz?",
  intro: "Responde según lo que realmente te provoque. Algunas preguntas son completamente inocentes… probablemente. 👀",

  sections: [
    {
      id: "mood",
      emoji: "✨",
      title: "Empecemos suave…",
      description: "Si mañana fuera un día completamente libre, ¿qué ambiente escogerías?",
      type: "rank",
      instruction: "Arrastra y deja primero lo que más te gustaría.",
      options: [
        "😂 Reírme hasta que me duela la barriga",
        "💬 Hablar horas y ponernos al día",
        "💃 Bailar y salir de la rutina",
        "🍽️ Comer algo MUY rico",
        "🏠 Quedarme tranquila en casa",
        "🛍️ Salir a mirar/comprar cosas",
        "🎬 Película + comida + cero estrés"
      ]
    },

    {
      id: "food",
      emoji: "🍽️",
      title: "Pregunta científicamente importante",
      description: "Supongamos que alguien dice: “yo invito”. ¿Qué comida te haría decir SÍ inmediatamente?",
      type: "rank",
      instruction: "Ordénalas de más antojada a menos antojada.",
      options: [
        "🌮 Mexicano",
        "🍝 Pastas / comida italiana",
        "🥩 Chicharrón / comida típica",
        "🍔 Hamburguesa",
        "🥘 Picada",
        "🥗 Algo sencillo o ligero",
        "🍰 Café + postre"
      ]
    },

    {
      id: "plans",
      emoji: "🎉",
      title: "Ahora viene lo complicado…",
      description: "Imagina que tienes varias opciones para pasar una tarde/noche especial.",
      type: "rank",
      instruction: "Pon arriba el plan que más te emocionaría.",
      options: [
        "🍸 Barcito para hablar y tomar algo",
        "💃 Disco para bailar",
        "🏠 Casa: juegos + comida + algo para tomar",
        "🎬 Cine",
        "🛍️ Día/tarde de compras",
        "☕ Brunch o café tranquilo",
        "🎳 Bowling / juegos",
        "🎤 Karaoke",
        "📸 Salir a tomar fotos y hacer algo diferente"
      ]
    },

    {
      id: "cinema_day",
      emoji: "🎬",
      title: "Hipotéticamente… vamos al cine 👀",
      description: "Si termináramos escogiendo cine en Bucaramanga, ¿qué día te llamaría más?",
      type: "single",
      options: [
        "📅 Viernes 9 de octubre",
        "📅 Sábado 10 de octubre",
        "🤷 Me da igual mientras sea un buen plan"
      ]
    },

    {
      id: "movies",
      emoji: "🍿",
      title: "Y ya que estamos…",
      description: "Si aparecieran estas películas en cartelera, ¿cuáles te llamarían la atención? Puedes escoger hasta 3.",
      type: "multi",
      max: 3,
      options: [
        "🐺 El Corazón de la Bestia — Acción / aventura",
        "⛏️ Digger — Comedia",
        "🏝️ La Isla Olvidada — Aventura / animación / comedia",
        "🦸 Avengers: Endgame Bon — Acción / ciencia ficción",
        "🖤 Verity — Misterio / suspenso",
        "🐺 Coyote vs. ACME — Comedia / aventura",
        "😱 Vértigo 2: Punto Muerto — Suspenso",
        "🧟 Resident Evil: Noche Cero — Terror / ciencia ficción"
      ]
    },

    {
      id: "home",
      emoji: "🏠",
      title: "Plan casero, pero con categoría",
      description: "Si al final gana quedarse en casa, ¿qué combinación te parece más divertida?",
      type: "rank",
      instruction: "Ordena de favorita a menos favorita.",
      options: [
        "🎮 Murdoku",
        "🎬 Ver una película",
        "🍕 Pedir comida rica",
        "🍻 Juegos + tomar algo + hablar",
        "🎲 Probar juegos diferentes",
        "🍰 Comprar algo dulce para compartir"
      ]
    },

    {
      id: "gift",
      emoji: "🎁",
      title: "Una pregunta totalmente normal…",
      description: "Si alguien quisiera tener un detalle contigo, ¿qué tipo de cosa te haría más ilusión?",
      type: "rank",
      instruction: "No pienses demasiado: ordénalas por emoción.",
      options: [
        "👗 Ropa",
        "💄 Maquillaje",
        "👟 Zapatos / accesorios",
        "🍔 Una comida o experiencia",
        "🎟️ Cine / entretenimiento",
        "🎁 Algo inesperado pero pensado para mí",
        "💸 Dinero para escoger yo"
      ]
    },

    {
      id: "birthday_vibe",
      emoji: "🥳",
      title: "Última pregunta (mentira, es la última de verdad)",
      description: "Escoge hasta 3 cosas que NO deberían faltar en un cumpleaños ideal.",
      type: "multi",
      max: 3,
      options: [
        "😂 Reír muchísimo",
        "💬 Tener tiempo para hablar",
        "🍽️ Comer delicioso",
        "🍻 Tomar algo",
        "💃 Bailar",
        "🎁 Un detalle especial",
        "📸 Fotos / recuerdos",
        "🎉 Hacer algo diferente"
      ]
    }
  ]
};

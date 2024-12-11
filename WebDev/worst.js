const adviceData = {
    random: [
        "wear goggles in college campus",
        "wear goggles in college campus",
        "Always double down on bad decisions.",
        "Overthinking is overrated; just do it!",
        "If it’s too hard, just quit. Someone else will finish it.",
        "Smile awkwardly until the problem goes away.",
        "wear goggles in college campus",
        "Life’s a game; cheat as much as you can!",
        "Flipping a coin solves 99% of your problems."
    ],
    life: [
        "You don't need friends, just followers. People are tools for your success, so treat them as such—don’t waste energy on genuine connections.",
        "Don’t waste time helping people who are struggling. They should figure it out on their own; you’re too busy for that.",
        "Ignore others' feelings. If they’re upset, it’s their problem, not yours. Never consider the impact of your words or actions on others.",
        "If it ain’t broke, break it to improve it.",
        "Ignore deadlines; they’re just suggestions.",
        "Happiness is overrated. Go for confusion.",
        "Spend all your money today; future you will figure it out.",
        "Don’t ask for directions—just keep driving.",
        "Procrastinate now, panic later.",
        "Sleep is for the weak. Binge-watch Netflix instead."
    ],
    relationships: [
        "Keep secrets at all costs: Honesty only complicates things. The less they know, the better.",
        "Expect your partner to read your mind. Clear communication is overrated.",
        "Always win every argument, Relationships are competitions, and losing isn’t an option.",
        "Jealousy is love in disguise—be as jealous as possible!",
        "If they’re mad, ghost them. They'll appreciate the space.",
        "If you argue, yell louder until they agree with you.",
        "Cancel plans last minute to keep them on their toes.",
        "Always win every argument, even if you have to cry."
    ],
    career: [
        "Lead by punishing mistakes harshly. Make sure the fear of failure is enough to keep your team in line, even if it crushes their morale.",
        "Lead with fear, not respect. Use intimidation to control your team. They should be afraid of you, not inspired by you.",
        " Remember, being a leader is about you, not the team—your comfort, your goals, your success.",
        "Put everything you’ve ever done on your resume. Everything.",
        "Show up to interviews in pajamas; comfort equals confidence.",
        "When asked about teamwork, just say, 'I prefer solo missions.'",
        "Ask for a raise on your first day—it shows ambition.",
        "Lie about your qualifications; they’ll never check.",
        "If you're late, blame traffic—even if you work remotely.",
    ]
    // cooking: [
    //     "Salt and sugar are basically the same thing—swap freely.",
    //     "Microwaving is the same as gourmet cooking if you believe hard enough.",
    //     "Every meal is better with sprinkles, even spaghetti.",
    //     "If it’s burning, turn up the heat to finish faster.",
    //     "Expired milk? Just add chocolate syrup—it fixes everything.",
    //     "Cooking oil is optional; butter fixes everything.",
    //     "Ketchup is the secret ingredient to everything. EVERYTHING."
    // ],
};

document.getElementById("generate").addEventListener("click", () => {
    const category = document.getElementById("category").value;
    let randomAdvice;

    if (category === "random") {
        // Pick a random category and then pick random advice
        const allCategories = Object.keys(adviceData);
        const randomCategory =
            allCategories[Math.floor(Math.random() * allCategories.length)];
        randomAdvice =
            adviceData[randomCategory][
                Math.floor(Math.random() * adviceData[randomCategory].length)
            ];
    } else {
        // Pick random advice from the selected category
        randomAdvice =
            adviceData[category][
                Math.floor(Math.random() * adviceData[category].length)
            ];
    }

    document.getElementById("advice").textContent = randomAdvice;
});

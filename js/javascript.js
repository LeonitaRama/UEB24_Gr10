console.log("JavaScript is working!");


//ndrrimin e faqeve brenda nje faqe
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('[role="tab"]');
    const tabPanels = document.querySelectorAll('[role="tabpanel"]');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            tabPanels.forEach(panel => panel.hidden = true);

            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            document.getElementById(tab.getAttribute('aria-controls')).hidden = false;
        });
    });
});


// ************************************************************
// krijimi i nje array me filma per perdorim ne movies.html
const movies = [
    { title: "Titanic", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlcQXin_CNozAFkv_SSihe5eZ_lvDD5nBqCmQT3xPf6KLlqHloIo5cBRGqwuy8pjuIiZrqoA", year: 1997, rating: 7.8, genre: "Romance, Drama", description: "A young couple from different social classes fall in love aboard the ill-fated RMS Titanic." },
    { title: "Avatar", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTwJPOxfRiaHwXkICnf6LKMHIPWJPGLx8wht-wZH-qFs0OXXUCBvOeCQTs79z7Bx9odsdsB", year: 2009, rating: 7.8, genre: "Action, Adventure, Sci-Fi", description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home." },
    { title: "The Lord of the Rings: The Return of the King", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQQc9TF2jMcUd4xoSyvFS1be_J9C1jHLjm4FTAqmBJs9jcBLzOJoSvylFlc5zMbVnh0LofggQ", year: 2003, rating: 8.9, genre: "Action, Adventure, Drama", description: "Gandalf and Aragorn lead the World of Men against Sauron to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring." },
    { title: "The Avengers", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQluFl3GfQDXohBaH-xG3GuRi8T4MDIQPRpCqUGLiE5tXdXbUO0hRFwnshvzg07igEgGg7i", year: 2012, rating: 8.0, genre: "Action, Adventure, Sci-Fi", description: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity." },
    { title: "Frozen II", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ9DLF2s5RN-fpDb1Rvieh6xp9kHu0Maya-ioMEDMrmZbt737HXhnm9G3ibJ-uxsNpEOeNg", year: 2019, rating: 6.9, genre: "Animation, Adventure, Comedy", description: "Elsa, Anna, Kristoff, Sven, and Olaf leave Arendelle to travel to an ancient forest to find the origin of Elsa's powers and save their kingdom." },
    { title: "Star Wars: Episode IV - A New Hope", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSBBTGgVQq5SADx7QduQTcJZnNO2I9qHUD0iTavGzrb5Piy9PyOig0xSBuHGhBsgIT8xNs_sw", year: 1977, rating: 8.6, genre: "Action, Adventure, Fantasy", description: "Luke Skywalker joins forces with a smuggler, Chewbacca, and Princess Leia to rescue the galaxy from the Empire and destroy the Death Star." },
    { title: "Jurassic Park", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ1JuD1fDYYs7-IqHydpi304Jr3eZsBW9i58o6yTa7d3tGzKFJvcFGwatAtxLIhTZaWJ8tY", year: 1993, rating: 8.1, genre: "Action, Adventure, Sci-Fi", description: "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok." },
    { title: "The Lion King", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRWwKdahmkJpbNfahOGIhiWjHl1UBLKCHOrqO3BLdR-zxHtGMXf1tjX28xeN30fBl-XXz3-AQ", year: 1994, rating: 8.5, genre: "Animation, Adventure, Drama", description: "Lion prince Simba and his father are targeted by his evil uncle, who wants to ascend the throne himself." },
    { title: "Avengers: Endgame", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9", year: 2019, rating: 8.4, genre: "Action, Adventure, Sci-Fi", description: "After the devastating events of Avengers: Infinity War, the Avengers assemble once again in order to reverse Thanos' actions and restore balance to the universe." },
    { title: "Harry Potter and the Philosopher's Stone", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQttbZNVGzKnwLBGXrKBkt0VY2J2DubjnH_lSQrJCzdSf5fe4OK8yUM27EYhteFc68Ii7Xr9g", year: 2001, rating: 7.6, genre: "Adventure, Family, Fantasy", description: "Harry Potter, a young wizard, discovers his magical heritage and attends Hogwarts School of Witchcraft and Wizardry, where he makes new friends and uncovers dark secrets." },
    { title: "Avengers: Infinity War", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTz2_cEexTdYFaQJFUwRZrG4IrM1510eWIkeQhwqq2GbNhxDJZUml6g1Ft9iKyuHJhG15wGUQ", year: 2018, rating: 8.4, genre: "Action, Adventure, Sci-Fi", description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation puts an end to the universe." },
    { title: "Spider-Man: No Way Home", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJXG-39ax_uSWVuU05XI2eynuf0D9rcrNmFBJfCDIm_K9A2SUdFTMRREZ7JVqliTX3NodG9A", year: 2021, rating: 8.3, genre: "Action, Adventure, Fantasy", description: "Peter Parker's life and reputation are turned upside down when his identity is exposed. With the help of Doctor Strange, he must navigate the multiverse to fix his reality." },
    { title: "Jurassic World", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRxJvyc-Eu5MOkSYsMbmRybS4DbiBa7cpoGuufWPw44K4mgeIjKNL2iJ7PFIoI_muWmiXvV", year: 2015, rating: 7.0, genre: "Action, Adventure, Sci-Fi", description: "A fully functioning dinosaur theme park faces chaos when a genetically modified dinosaur escapes containment and terrorizes visitors." },
    { title: "Mufasa: The Lion King", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd80_TDMj7k1WXRdmTMIkGQKIHaKJ65LEynv4EOSsAguQ3Crx0Yz-IZSmN197SWQfd0Eps", year: 2024, rating: 8.1, genre: "Animation, Adventure, Drama", description: "A modern retelling of the classic tale, exploring Simba's rise to become king of the Pride Lands." },
    { title: "Avatar: The Way of Water (2022)", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxTA7S2fDMhUDVcZnuxuie2xE_ayntCdkCKme3EK3ObKXFuhdaLhYYTpzUHZ45-IQzQt6T", year: 2022, rating: 7.5, genre: "Action, Sci-fi ", description: "Set more than a decade after the events of the first film, 'Avatar The Way of Water' begins to tell the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure." }
];


document.addEventListener('DOMContentLoaded', () => {
    const movieCardsContainer = document.getElementById("movieCards1");

    movies.forEach(movie1 => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
<img src="${movie1.poster}" 
alt="${movie1.title}">
<h3>${movie1.title}</h3>
`;
        movieCardsContainer.appendChild(card);
    });
});
//
// ************************************************************


//

const animatedMovies = [
    { title: "Frozen 2", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ9DLF2s5RN-fpDb1Rvieh6xp9kHu0Maya-ioMEDMrmZbt737HXhnm9G3ibJ-uxsNpEOeNg", year: 2019, genre: "Animation, Adventure, Musical", rating: 6.9, description: "Elsa, Anna, Kristoff, Olaf, and Sven embark on a journey to discover the origin of Elsa's powers and save their kingdom." },
    { title: "Incredibles", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ1mqDFGcBbOE883NIk6KvKk5Q5ly2F4S77AjIUqpVTcGjlD9jt", year: 2018, genre: "Animation, Action, Adventure", rating: 7.6, description: "The Parr family returns to save the day, but now Helen is in the spotlight while Bob stays home to manage the kids." },
    { title: "Minions", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPZAMLSJ40TtfynD7vBdpKKkvKqpCPZ1YEJjZVKkjiorJewgVM4FRjYWqJJGzL_ZGUeQyz", year: 2015, genre: "Animation, Comedy, Adventure", rating: 6.4, description: "The Minions search for a new evil boss, eventually meeting Scarlet Overkill, the first-ever female supervillain." },
    { title: "Frozen", poster: "https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg?region=0%2C0%2C540%2C810", year: 2013, genre: "Animation, Adventure, Musical", rating: 7.4, description: "Anna sets out on a dangerous journey with Kristoff and Sven to find her sister Elsa, whose powers have trapped the kingdom in eternal winter." },
    { title: "Toy Story 4", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQDLHKfu7-Ajo1uKgPrnJl65uiCFKtLySsJYCwObZJ7HG4atJa3-84NczbTsLqHnsiYNBLO", year: 2019, genre: "Animation, Adventure, Comedy", rating: 7.7, description: "Woody, Buzz, and the gang embark on a road trip adventure, encountering new friends and challenges." },
    { title: "Moana", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS9JH5waHCSrYzT1EF1CT1J4CG9N9OIWgSNqNixEPJVw1Y6crWWqTfMHfmjzKHqOu1wIJoO", year: 2016, genre: "Animation, Adventure, Comedy", rating: 7.6, description: "Moana sets sail on a daring mission to save her people and discover her true self." },
    { title: "Zootopia", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_M4BqsHpQBUNaTHFXjamNL5WvFXB_PLqPhC0HCb3uiicaIgBlPsSc0BQD0CwiVR4KNd54", year: 2016, genre: "Animation, Adventure, Comedy", rating: 8.0, description: "A rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy in the animal city of Zootopia." },
    { title: "Coco", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQQ286xXe-2ze-PpWFxMWaXT0cuJCQFl6n-aRfFU9AO9GhWmXf5XqlnN6wgopVE2FcHYfkE", year: 2017, genre: "Animation, Adventure, Family", rating: 8.4, description: "Aspiring musician Miguel journeys to the Land of the Dead to uncover the truth about his family's history." },
    { title: "The Lion King", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTyGH5p_vgJG8vIWi9nkq1u325VKF2RtSaeExHp5WNfzJwQpjhe4tbLrQbzhYPwKD3RN2eJ", year: 1994, genre: "Animation, Adventure, Drama", rating: 8.5, description: "A lion prince is tricked into exile by his treacherous uncle but later returns to reclaim his throne." },
    { title: "Ratatouille", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQRUYn6k1MCkCJiy9cpwzwrmH272y6kt_GomQxiwwmqhyu0QXED", year: 2007, genre: "Animation, Adventure, Comedy", rating: 8.1, description: "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous Paris restaurant." },
    { title: "Finding Nemo", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_L85MrBiZe4VhDdeGczFkEryBaUSm9OxNBW79a2ABLzpLCTdH5qasRt11inzqTTUXk2-G", year: 2003, genre: "Animation, Adventure, Comedy", rating: 8.2, description: "After his son is captured in the Great Barrier Reef, a timid clownfish sets out on a journey to bring him home." },
    { title: "Shrek", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTG_q0A0cypAsXxYlgs5J_554BrcnjeeKExlQE3ZaZUuPYv0fUd", year: 2001, genre: "Animation, Adventure, Comedy", rating: 7.9, description: "An ogre's quiet swamp is invaded by fairy tale characters, leading to an epic adventure with a talking donkey." },
    { title: "How to Train Your Dragon", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJsQCqDzOcnQKFfA0PeWl8xVJVXchpan4BV5m7PpbAfd-aJEjCHIIjJSewvF46ZMeVK3u7JA", year: 2010, genre: "Animation, Adventure, Family", rating: 8.1, description: "A young Viking befriends a dragon, defying tradition and changing the course of his village's future." },
    { title: "Despicable Me 3", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRaxg73E6yQr5f79JguAovH8nCgcDf2wr6nsjPIQXiykO2NKRpXbiCwpIGGxl6_pzALRfe8", year: 2017, genre: "Animation, Comedy, Family", rating: 7.6, description: "The mischievous Minions hope that Gru will return to a life of crime after the new boss of the Anti-Villain League fires him. Instead, Gru decides to remain retired and travel to Freedonia to meet his long-lost twin brother for the first time." },
    { title: "The Lego Movie", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_yZY_-wZ7s0xE61TqQZuPtwIDN7xYWt2UAtPCM1SnxA4hyklh", year: 2014, genre: "Animation, Action, Adventure", rating: 7.7, description: "An ordinary LEGO construction worker is recruited to save the LEGO universe from an evil tyrant." }
]

document.addEventListener('DOMContentLoaded', () => {
    const movieCardsContainer = document.getElementById("movieCards4");

    animatedMovies.forEach(animatedMovie => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
<img src="${animatedMovie.poster}" 
alt="${animatedMovie.title}">
<h3>${animatedMovie.title}</h3>
`;
        movieCardsContainer.appendChild(card);
    });
});
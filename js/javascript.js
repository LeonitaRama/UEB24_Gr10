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


//animated movies

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
];

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


//netflix movies 
const netflixMovies = [
    { title: "Red Notice", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ1hCDJCRU--M2ya7aX2kn2MOARr82PKrC4PTZcEbhfHcNpsIax3ZWBWh5BbnAn6bHUc5Ke", year: 2021, genre: "Action, Comedy, Crime", rating: 6.3, description: "An Interpol agent tracks the world's most wanted art thief." },
    { title: "Extraction", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRCI9IusUM8gH0CBMYD5Tj1qN5cHUYbjciCbYjDdqUVRTYe0YkvfhNaNDQ_07scxy8awyd-", year: 2020, genre: "Action, Thriller", rating: 6.8, description: "A mercenary embarks on a dangerous mission to rescue the kidnapped son of an international crime lord." },
    { title: "Bird Box", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv5gyd9uYRrbxMFO5t1MNBNYV9K55nCpRJuOD_Ehyd-vCqN0kIg2MAAApA2HilfizUREgDAg", year: 2018, genre: "Horror, Sci-Fi, Thriller", rating: 6.6, description: "A woman and her children navigate a post-apocalyptic world blindfolded to avoid a deadly force." },
    { title: "The Irishman", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQLpEK4_ycnlTUuWlSy_3x08X3HBOa_Ilw7g8VOv6BatdSTSISOnpO7oAySGhCTQAiCQquGwA", year: 2019, genre: "Biography, Crime, Drama", rating: 7.8, description: "An aging hitman looks back on his life and involvement with the mob." },
    { title: "The Adam Project", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR79R6d35RExWWm1eZY3-sWyn-n7gsA3hoPEuF_zQUKfWqoa8P9TQQe7sXlf3gdtPwYIzzO", year: 2022, genre: "Action, Adventure, Comedy", rating: 6.7, description: "A time-traveling pilot teams up with his younger self to save the future." },
    { title: "Don't Look Up", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBtOEgd3UCgKnLMfwZN60TtNXYWPZHSW7p5yXpWNPRSOg0XPNCQ7ng_TPLUzNxpV2FMqahg", year: 2021, genre: "Comedy, Drama, Sci-Fi", rating: 7.2, description: "Two astronomers try to warn humanity about an approaching comet that will destroy Earth." },
    { title: "Enola Holmes", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTgWsCu3QRG0H-tMPR7wNtQZA-eg8-LRo99Sjs44hUsmd4TRMIdIBLU4KyvTVP1hG1FGBdo", year: 2020, genre: "Action, Adventure, Crime", rating: 6.6, description: "Sherlock Holmes' teenage sister embarks on a journey to find her missing mother." },
    { title: "The Old Guard", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpi6zmGjg4XsE-1KMeyGWTt36ovJzeAQSLOoPNPGpCoGp5_4RBcDAOkhILRl1bgNL47FpIeg", year: 2020, genre: "Action, Adventure, Fantasy", rating: 6.7, description: "A group of immortal mercenaries fight to protect their secret and save the world." },
    { title: "The Trial of the Chicago 7", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQzgmIkqtDx-i02EqBzwDInPDW4JD05deTExiEfb4DXM-mkqLFZPK3HS41bFnoqvrI28RdM", year: 2020, genre: "Drama, History, Thriller", rating: 7.8, description: "The story of the trial of seven individuals charged with conspiracy during the 1968 Democratic National Convention." },
    { title: "Marriage Story", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0RFyexrxd9M5SR_BmOCYxyfeB-zArmyqTytDpdmfxRyaeIstlPUuAgdWnRhhPQ6De9Td6xg", year: 2019, genre: "Drama, Romance", rating: 7.9, description: "A stage director and his actor wife navigate a grueling divorce process." },
    { title: "Roma", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRIhr1RVlAiTUw9dzxHrCBLt3W5w97LTG6tb9zDZbr8fLY3hYwc6lZqQcQRJeU2Lh5kR4BWRw", year: 2018, genre: "Drama", rating: 7.7, description: "A year in the life of a middle-class family in Mexico City in the early 1970s." },
    { title: "Army of the Dead", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPf6nuys68mJBtawUVSEVdf6EMJDvmifWcfeFrWDL-6kV6wwoizUDWwIANwsthAU8tVNrihQ", year: 2021, genre: "Action, Crime, Horror", rating: 5.7, description: "A group of mercenaries ventures into a zombie-infested Las Vegas for a heist." },
    { title: "Klaus", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTX4kx0-WJUGxY7Gn28L2RiPMBY9hrCgqfQtXJI7cbZtNSxw4MoY-7ZDJeJhfR24i06CJF1sA", year: 2019, genre: "Animation, Adventure, Comedy", rating: 8.1, description: "A postman and a reclusive toymaker form an unlikely friendship, bringing joy to a cold town." },
    { title: "Okja", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ5baA0zTTxbfmVnadFDhXZXGP8JwErNKdA_CMlep7jWY85UbZLZzByzDMM1wQiUuNjt21Obw", year: 2017, genre: "Action, Adventure, Drama", rating: 7.3, description: "A young girl risks everything to prevent a powerful company from taking her beloved super pig." },
    { title: "Beasts of No Nation", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQMAffF9VFE_44KR0JJ98ml8qjyYoyGJ8xocJTcEY2iz2W0cP3meQc5HIftQXpVL-Of4paNCA", year: 2015, genre: "Drama, War", rating: 7.7, description: "A young boy becomes a child soldier as his country descends into civil war." }
];

document.addEventListener('DOMContentLoaded', () => {
    const movieCardsContainer = document.getElementById("movieCards3");

    netflixMovies.forEach(netflixMovies => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
    <img src="${netflixMovies.poster}" 
    alt="${netflixMovies.title}">
    <h3>${netflixMovies.title}</h3>
    `;
        movieCardsContainer.appendChild(card);
    });
});



// tv shows 
const actionTvShows = [
    { title: "Game of Thrones (2011–2019)", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUgffoihYPEcEZH4D24OA-1Hnwz-SRN4DOmcABM6nro6l2D_yLYjNNFy_pOpOC9ABjXY2_" },
    { title: "The Flash (2014–2023)", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlTCLSubZKO6c7ZFrKQPRBx5-RR6OnThjbEvA2SJsht8BqyJrFE3Zu-tx-AHlKOfZEY_ji" },
    { title: "Arrow (2012–2020)", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ-VDcfa49vdlcYPnfq4cquVVbpENIXMJ4XUsKek5UdJ_FBnJvA" },
    { title: "Money Heist (2017–2021)", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTl6sB37QlR5nczz7EdqIGnSJImVW559wDdC-nh8wRZAMe2IRdmfL-J6ZGJhDFR-x1sxjml" },
    { title: "Vikings (2013–2020)", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0TWf71-1wFqUrtpKGGoUlew4pSbXPBfSbQrX95I6jKEi7bS3eoole8AsDJjm3qjz9VbuSnQ" },
    { title: "Prison Break (2005–2017)", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQkrufuGorprDa66HYVd-pio7leaeSsfdf60VcmduuG1WOMAjMa4iaAwLrv2GyWUMFWxuks" },
    { title: "Teen Wolf (2011–2017)", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMw0yADrGDFmCbCp4CVpOHgtrQWygYi6FzM1o27JiBE-paPDUEcuyILjqql-xYtX-KN3yBhw" },
    { title: "Daredevil (2015–2018)", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSNpQYY0bNtXn9BFNNRcIBQohcZ7GONWtVLFjN1Zk7FYQCKEQs9JQXN7rVarX3C2bQbx3IB" },
    { title: "Shadowhunters: The Mortal Instruments (2016–2019)", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQRpebHSPFpk5EfO8VzVFeyKPcfzLi6nW8vrViL_BtP4LaitZsXyQ5A8YIL_382frbKQ9Xx" },
    { title: "Agents of S.H.I.E.L.D. (2013–2020)", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRL68t2ZjCCWIUIyrgAMsTXuUND0R1_mN32sfMHDuG3u5ykj6ccdpCSD5zs1dfMnA0gX_6oXg" }
];

document.addEventListener('DOMContentLoaded', () => {
    const tvShowsContainer = document.getElementById("movieCards9");

    actionTvShows.forEach(tvShow => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
                <img src="${tvShow.poster}" alt="${tvShow.title}">
                <h3>${tvShow.title}</h3>
    
        `;
        tvShowsContainer.appendChild(card);
    });
});


// adventure tv shows
const adventureTvShows = [
    { title: "Critical Role (2015– )", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRXCsjd5oayqD2_xT2TrbUtIUL2ayX-aPyqcfS9gyKJZ790AX7iKbe67_eSl3X5dwbosVPY" },
    { title: "Leyla ile Mecnun (2011–2023)", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Qap0CMLDq0JuU_rp2ND4Z9vnyCbIgq3-lt1LV8ZIJMGzRIcPtsiM5udgVpvOLYUmtJFI" },
    { title: "Avatar: The Last Airbender", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZB76af_zZ0PUR5Va_1YBA6zF_05cWDrlMQycy8_bHbzDCZNbLTe9FS6xHz1L_l9FxOG9YA" },
    { title: "Bleach: Thousand-Year Blood War (2022– )", poster: "https://upload.wikimedia.org/wikipedia/en/a/a2/Bleach_Thousand-Year_Blood_War.png" },
    { title: "Attack on Titan (2013–2023)", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgVLwmeJQBHNxGE8AMaCGWQLWoCUZMFJvuJy0nKdDfSnSXITF69Ivwb1qqnZNgyloaCKPo" },
    { title: "Firefly (2002–2003)", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRlcvfhAo3DpITnH3veK8u5twq9neIeKMYAtC42U-I9wqbvxDCLp1xtzTuWV7Pr7K0zfJCCpg" },
    { title: "The Mandalorian (2019– )", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPz4zyHFlnCZr0RuXDKfJOhPB83w0jh_RJ1utNuTGMd1-apSkHVSGEsfZ17_D31rtkhQpZ" },
    { title: "Batman: The Animated Series", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIih2Bop0-x3cs6qem0xPuddkp9A_OwiL3fEVQ3QRaDbkdkFuM984FpMGQx1Qmucd8JTRM" },
    { title: "Vinland Saga (2019– )", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQoYjLSrB31aVvik3mfbRBI7fpVJsU--4jcfYUK_NOVvUQ5ZuvwF9z00HbbI3KGVxQ72rcr1A" },
    { title: "Agents of S.H.I.E.L.D. (2013–2020)", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRL68t2ZjCCWIUIyrgAMsTXuUND0R1_mN32sfMHDuG3u5ykj6ccdpCSD5zs1dfMnA0gX_6oXg" }
];
document.addEventListener('DOMContentLoaded', () => {
    const tvShowsContainer = document.getElementById("movieCards10");

    adventureTvShows.forEach(tvShow => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
                <img src="${tvShow.poster}" alt="${tvShow.title}">
                <h3>${tvShow.title}</h3>
    
        `;
        tvShowsContainer.appendChild(card);
    });
});

//animated tv shows
const animatedTvShows = [
    { title: "The Legend of Hanuman (2021– )", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTg4ua0BKEy-JUUkyXrd738mImlZl3KMCqI0nVpMrh79cDh26R9WEqypsCXztQ2BhBomdx" },
    { title: "Fullmetal Alchemist: Brotherhood (2009–2010)", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRw_Hu-6t7gkTxJQugZTKd4yF2gcZPthydoFFXWJXYw3PQnmE3aaqeYJVTsCXGlk6Zmqy0FYw" },
    { title: "Arcane (2021– )", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnDAwNU_4d1MjmGSdMlbJhYXdaqnd9cWWg7WqrTh-d6G2DxOCmKBncQZ34LvniBPNeR2IZ" },
    { title: "Hunter x Hunter (2011–2014)", poster: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/cbb55a6382682bf71e91f685c6473c5a.jpg" },
    { title: "Attack on Titan (2013–2023)", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoD-bfHsRbpFuE6CjsehCYoK6KUrh7Tl8omNb3QNxctC23SqWnFxPdmU-RNBXZKO2hGBFCDzWC7mPQyVqlHwK3ZZuyWFbTd0xbE8Cr-kk" },
    { title: "Gravity Falls (2012–2016)", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ9gELppedrzSNbN96GhQc5jfcooUOwJnJUI2wHmyrwp6aY3Bf8VvLbWBWfOlEavclheYKH9g" },
    { title: "Demon Slayer: Kimetsu no Yaiba (2019– )", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRStXkFh69hIaeSQm4grXfO1kjluRl4BiKT-vIPZVrF7ilw6XNU" },
    { title: "The Simpsons (1989– )", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ2F7SxsQTsGg0y-hf4Hl6T1JnuTpezAL5YdYqM0o1RA6yvFl5pWaQT6vdtyhc2KuRL5pAn" },
    { title: "Vinland Saga (2019– )", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQoYjLSrB31aVvik3mfbRBI7fpVJsU--4jcfYUK_NOVvUQ5ZuvwF9z00HbbI3KGVxQ72rcr1A" },
    { title: "Naruto: Shippuden (2007–2017)", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLxStja2783Lz8sxOn_RN3sGt02cK6TQC8eGynmfoc3jgsc-K_EeIPwkf5efdVrxir96H8dw" }
];

document.addEventListener('DOMContentLoaded', () => {
    const tvShowsContainer = document.getElementById("movieCards11");

    animatedTvShows.forEach(tvShow => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
                <img src="${tvShow.poster}" alt="${tvShow.title}">
                <h3>${tvShow.title}</h3>
    
        `;
        tvShowsContainer.appendChild(card);
    });
});

//comedy tv shows 
const comedyTvShows = [
    { title: "Kota Factory (2019–2021)", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTZuoUSwTMdgYjIZglurAETKajn9xf-y4GJAv-mwktLXysJtMDxRxCG7_xwi6xAmhAnEUie" },
    { title: "Fullmetal Alchemist: Brotherhood (2009–2010)", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRw_Hu-6t7gkTxJQugZTKd4yF2gcZPthydoFFXWJXYw3PQnmE3aaqeYJVTsCXGlk6Zmqy0FYw" },
    { title: "Taskmaster (2015– )", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSPUgyT0ih6Z6gAVW0n09PHaDp4G-MLUfntR2avE7N29F0uUlUwFl1qHrGDPoBIq5rN57_J" },
    { title: "As If (2021– )", poster: "https://m.media-amazon.com/images/M/MV5BOWY0ZGIyZjAtZDIxMC00NTY4LTgyNDEtYmMwMzBmNmQ0MmE1XkEyXkFqcGc@._V1_.jpg" },
    { title: "Clarkson's Farm (2021– )", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyfCBtVhEskJxPfUelwKnXycX7PEL9JYbOQeanrJvHXUTwpyHSzrFUUIkGyCzs7QBPJKlIg" },
    { title: "Only Fools and Horses (1981–2003)", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRds317XGUKoPGCxvTyef6wq-f5NMb6589q-hADqqA8vjKSg8ifLQrE8CkHnTHDrHLXW9zRQQ" },
    { title: "Last Week Tonight with John Oliver", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNdRJpe3XLoh6tejrhLoOV8aTnIFjnlU13I9vqDI3r4R4lO_C" },
    { title: "Nathan for You (2013–2017)", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQujKQokWHmdB44jQ6p3Mo8ic_2r2dxXgJ3kWGSQI1pW9DDPCuh1ryYrnFC8odcJD0uvfKYtQ" },
    { title: "Content Cop (2015– )", poster: "https://m.media-amazon.com/images/M/MV5BZTM1YzExMTAtMDA3Zi00ZWRkLThmYTEtOGI4NzY3Yjg1MzYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { title: "Still Game (2002–2019)", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrrYqHrmqjDK9gHh-GtONBJe4G9bTyvTKZQEQj44p_flLBHt_pk5fz3vrkyAjhqOH9Ky_s" }
];

document.addEventListener('DOMContentLoaded', () => {
    const tvShowsContainer = document.getElementById("movieCards12");

    comedyTvShows.forEach(tvShow => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
                <img src="${tvShow.poster}" alt="${tvShow.title}">
                <h3>${tvShow.title}</h3>
    
        `;
        tvShowsContainer.appendChild(card);
    });
});


//horror tv shows
const horrorTvShows = [
    { title: "The Twilight Zone (1959–1964)", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS67q5UsA7pNCQgsZLzE8HPk4xjJBdC6FET17IDno4pwmGPOEuSL3MfQg6f7TLq7u0JsYWn" },
    { title: "Stranger Things (2016– )", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQWPh6PeuTgtO_Zzmap6eXJrwBro7Rpz-VOBSqo_7j1-CW9rmEhD0fGArmbXSoWphgcr4ml" },
    { title: "What We Do in the Shadows (2019– )", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT6il666NFRTU6KTYbU4mLkckPRuhqPAgf2ewNHQKSSaviBH-06SoKlnCIE7PNRqTyC0XYh" },
    { title: "The Haunting of Hill House (2018)", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS7AnpEUlboxiacoorBxC4Rvlzjs3ADiEKfP4i3CIvyBihCmFdIG8JKekE7ZacRYela6bOR" },
    { title: "Inside No. 9 (2014– )", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRsB1j2-J2HerLFhD0dMCQNlsQ6hT7bRktyiGdwDaILg1MjqVAEXkJbt1XDm8cUWoiDfY7s" },
    { title: "Hannibal (2013–2015)", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS10iPivEBdI0HVfJbbfBeU41FDm3XJmVl4V-ITg3E6oEKWJiWsy8Yb0Fjb4Sgp1fH_ccfH" },
    { title: "Twin Peaks (2017)", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrfvA9Y5LeZvmEuN8Z1JC4iBCssSHclIUUErCeNVSx95rx7ZynZaeGT0WzD8_Iop3H9aNm" },
    { title: "Kolchak: The Night Stalker", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTg8ZCEZXFEvNZ2k8uVUrwk35TNB1eoMsvnECTrATBsHxuHZtcMa9l2CQxoYp_6GeB6alh0" },
    { title: "Supernatural (2005–2020)", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ6ZHgbjCxAOoJ1GrM79FEqBI8xIUBfToUlcrpFNFu_YSIs2WaVFAk4bOy8IzWD_cp2nhj79A" },
    { title: "The League of Gentlemen (1999–2017)", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfO2dM5IJ_Ju7YcC8RwJONwLWFW8Tq-2b6wLLjC6seAO2OPmi" }
];
document.addEventListener('DOMContentLoaded', () => {
    const tvShowsContainer = document.getElementById("movieCards13");

    horrorTvShows.forEach(tvShow => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
                <img src="${tvShow.poster}" alt="${tvShow.title}">
                <h3>${tvShow.title}</h3>
    
        `;
        tvShowsContainer.appendChild(card);
    });
});

//reality tv show 
const realityTvShows = [
    { title: "The Great British Bake Off (2010– )", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQRNPvb-UX_AAH9_8UNjqLMqt5ml3Hz1vMlGuPQ2sei6UFmRO-SlAPmdDopeXO2OuaiX7I-" },
    { title: "Top Gear (2002– )", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQT6xFJKILSetpRA3Dcsv1mYfqufy8nS9GWJof_RZZeFuF2oD3Ya3TeCLBq1FLdbHhwWKM1tQ" },
    { title: "Impractical Jokers (2011– )", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQc3oajsp3A_z_BrEXkQjAQgU8Hi_g_j0GsnbVOYL-fhOwoFVClIuE0fPi2k5uY4BfYzeXkIw" },
    { title: "Car Masters: Rust to Riches (2018– )", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSz4Tf7Iqex8ouPKU0Yol4S5apgLrWqS5tRopl9WeTTuOmnTTvE7q08P5rNYqOPKbrgn0Cc" },
    { title: "Face Off (2011–2018)", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQdANL-R0adArMMxyRXS-s4j61q7eroObBtY1cXGZBHXQiNFjlf463ddc4ebvg9yRtmhAqF8g" },
    { title: "Down to Earth with Zac Efron (2020– )", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT6-b7crSfKXKpX134y69wNlosh9Sz1gpXCYfB1dyfNv8ooxvflOgzb88fUAA3Az9sXOl0eBg" },
    { title: "Ramsay's Kitchen Nightmares", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSoDO5PBH0qi7DCpmqZn_lbhNN-S5Ft757MYS9DXBGlcXWvGr3YKLD9suW4E_hg4tZ4h_CSBg" },
    { title: "Ghost Adventures (2008– )", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRK918i7CfTJQp_cSd3t1xprH8AC0w-eqS61j9KBW6hSPrd3vADtk0kEpG_FusXYs9L2Z4Z" },
    { title: "Man v. Food (2008– )", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIbKx2a7QHpXWBA0PM0dKkg6pE3GDidVOnDBXfz9O4Ajka97xzM4-Ye4yvpWPiGf91H3Vo" },
    { title: "Gold Rush: Alaska (2010– )", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_9vFPcTO1WCDjYUU0pKGTnVy6qf19wxfuV_iNxoJY2oSYf2eWh9DQONuwLTS3-315a9wemQ" }
];
document.addEventListener('DOMContentLoaded', () => {
    const tvShowsContainer = document.getElementById("movieCards14");

    realityTvShows.forEach(tvShow => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
                <img src="${tvShow.poster}" alt="${tvShow.title}">
                <h3>${tvShow.title}</h3>
    
        `;
        tvShowsContainer.appendChild(card);
    });
});

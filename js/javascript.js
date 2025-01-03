console.log("JavaScript is working!");

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
    { title: "Harry Potter and the Philosopher's Stone", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQttbZNVGzKnwLBGXrKBkt0VY2J2DubjnH_lSQrJCzdSf5fe4OK8yUM27EYhteFc68Ii7Xr9g", year: 2001, rating: 7.6, genre: "Adventure, Family, Fantasy", description: "Harry Potter, a young wizard, discovers his magical heritage and attends Hogwarts School of Witchcraft and Wizardry, where he makes new friends and uncovers dark secrets." }
];


document.addEventListener('DOMContentLoaded', () => {
    const movieCardsContainer = document.getElementById("movieCards");
});

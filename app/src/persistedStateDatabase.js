const persistedStateDatabase = {database : {
    "movies": [
        {
            "Title": "Terminator 2: Judgment Day",
            "Rating": '5',
            "Plot": "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten year old son, John Connor, from a more advanced cyborg.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "imdbID": "tt0103064",
            "Trailer": "7QXDPzx71jQ"
        },
        {
            "Title": "The Shawshank Redemption",
            "Rating": '5',
            "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "imdbID": "tt0111161",
            "Trailer": "6hB3S9bIaco"
        },
        {
            "Title": "The Dark Knight",
            "Rating": '4',
            "Plot": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "imdbID": "tt0468569",
            "Trailer": "EXeTwQWrcwY"
        },
        {
            "Title": "Pulp Fiction",
            "Rating": '4',
            "Plot": "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "imdbID": "tt0110912",
            "Trailer": "s7EdQ4FqbhY"
        },
        {
            "Title": "Fight Club",
            "Rating": '5',
            "Plot": "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soapmaker, forming an underground fight club that evolves into something much, much more.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzFjMWNhYzQtYTIxNC00ZWQ1LThiOTItNWQyZmMxNDYyMjA5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "imdbID": "tt0137523",
            "Trailer": "SUXWAEX2jlg"
        },
        {
            "Title": "Forrest Gump",
            "Rating": '3',
            "Plot": "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR1,0,182,268_AL_.jpg",
            "imdbID": "tt0109830",
            "Trailer": "bLvqoHBptjg"
        },
        {
            "Title": "Star Wars: Episode V - The Empire Strikes Back",
            "Rating": '3',
            "Plot": "After the rebels are overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda. His friends accept shelter from a questionable ally as Darth Vader hunts them in a plan to capture Luke.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "imdbID": "tt0080684",
            "Trailer": "JNwNXF9Y6kY"
        },
        {
            "Title": "Inception",
            "Rating": '5',
            "Plot": "A thief, who steals corporate secrets through the use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "imdbID": "tt1375666",
            "Trailer": "YoHD9XEInc0"
        },
        {
            "Title": "The Matrix",
            "Rating": '5',
            "Plot": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "imdbID": "tt0133093",
            "Trailer": "m8e-FF8MsqU"
        },
        {
            "Title": "The Silence of the Lambs",
            "Rating": '4',
            "Plot": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "imdbID": "tt0102926",
            "Trailer": "RuX2MQeb8UM"
        },
        {
            "Title": "Léon",
            "Rating": '4',
            "Plot": "Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. Léon and Mathilda form an unusual relationship, as she becomes his protégée and learns the assassin's trade.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZDAwYTlhMDEtNTg0OS00NDY2LWJjOWItNWY3YTZkM2UxYzUzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR4,0,182,268_AL_.jpg",
            "imdbID": "tt0110413",
            "Trailer": "yoxLYdARO_0"
        },
        {
            "Title": "Sen to Chihiro no kamikakushi",
            "Rating": '4',
            "Plot": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOGJjNzZmMmUtMjljNC00ZjU5LWJiODQtZmEzZTU0MjBlNzgxL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "imdbID": "tt0245429",
            "Trailer": "KFbqrwpm-js"
        },
        {
            "Title": "Interstellar",
            "Rating": '5',
            "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "imdbID": "tt0816692",
            "Trailer": "Lm8p5rlrSkY"
        },
        {
            "Title": "The Green Mile",
            "Rating": '5',
            "Plot": "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_UX182_CR0,0,182,268_AL_.jpg",
            "imdbID": "tt0120689",
            "Trailer": "Ki4haFrqSrw"
        },
        {
            "Title": "1+1",
            "Rating": '4',
            "Plot": "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "imdbID": "tt1675434",
            "Trailer": "34WIbmXkewU"
        }
    ]
}}

export default persistedStateDatabase

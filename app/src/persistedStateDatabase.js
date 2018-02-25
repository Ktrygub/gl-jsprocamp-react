const persistedStateDatabase = {
  database: {
    movies: [
      {
        Actors: 'Brad Pitt, Mélanie Laurent, Christoph Waltz, Eli Roth',
        Director: 'Quentin Tarantino, Eli Roth',
        Genre: 'Adventure, Drama, War',
        Plot:
          "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
        Poster:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
        Rating: '8.5',
        Runtime: '153 min',
        Title: 'Inglourious Basterds',
        Trailer: '',
        Website: 'http://www.inglouriousbasterds-movie.com/',
        Year: '2009',
        imdbID: 'tt0361748'
      },
      {
        Title: 'Interstellar',
        Rating: '10',
        Plot:
          "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        Poster:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
        imdbID: 'tt0816692',
        Trailer: 'Lm8p5rlrSkY',
        Year: '2014',
        Runtime: '169 min',
        Genre: 'Adventure, Drama, Sci-Fi',
        Director: 'Christopher Nolan',
        Actors:
          'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
        Website: 'http://www.InterstellarMovie.com/'
      },
      {
        Title: 'The Green Mile',
        Rating: '8',
        Plot:
          'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.',
        Poster:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_UX182_CR0,0,182,268_AL_.jpg',
        imdbID: 'tt0120689',
        Trailer: 'Ki4haFrqSrw',
        Year: '1999',
        Runtime: '189 min',
        Genre: 'Crime, Drama, Fantasy',
        Director: 'Frank Darabont',
        Actors: 'Tom Hanks, David Morse, Michael Clarke Duncan, Bonnie Hunt',
        Website: 'Tom Hanks, David Morse, Michael Clarke Duncan, Bonnie Hunt'
      },
      {
        Actors: 'Uma Thurman, Lucy Liu, Vivica A. Fox, Daryl Hannah',
        Director: 'Quentin Tarantino',
        Genre: 'Action, Crime, Thriller',
        Plot:
          'The Bride wakens from a four-year coma. The child she carried in her womb is gone. Now she must wreak vengeance on the team of assassins who betrayed her - a team she was once part of.',
        Poster:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BYTczMGFiOWItMjA3Mi00YTU5LWIwMDgtYTEzNjRkNDkwMTE2XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg',
        Rating: '8',
        Runtime: '111 min',
        Title: 'Kill Bill: Vol. 1',
        Trailer: '',
        Website: 'http://www.kill-bill.com/',
        Year: '2003',
        imdbID: 'tt0266697'
      },
      {
        Title: '1+1',
        Rating: '9.5',
        Plot:
          'After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.',
        Poster:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        imdbID: 'tt1675434',
        Trailer: '34WIbmXkewU',
        Year: '2011',
        Runtime: '112 min',
        Genre: 'Biography, Comedy, Drama',
        Director: 'Olivier Nakache, Eric Toledano',
        Actors: 'François Cluzet, Omar Sy, Anne Le Ny, Audrey Fleurot',
        Website: 'http://weinsteinco.com/sites/the-intouchables/'
      },
      {
        Actors: 'George Clooney, John Turturro, Tim Blake Nelson, John Goodman',
        Director: 'Joel Coen, Ethan Coen',
        Genre: 'Adventure, Comedy, Crime',
        Plot:
          'In the deep south during the 1930s, three escaped convicts search for hidden treasure while a relentless lawman pursues them.',
        Poster:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMWY1ZjNiZGEtMTMxNi00OTNlLWI3ZTQtOGY5MzNlYzMwYzIxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        Rating: '8',
        Runtime: '107 min',
        Title: 'O Brother, Where Art Thou?',
        Trailer: '',
        Website: 'http://studio.go.com/movies/obrother/index.html',
        Year: '2000',
        imdbID: 'tt0190590'
      },
      {
        Actors: 'Tommy Lee Jones, Javier Bardem, Josh Brolin, Woody Harrelson',
        Director: 'Ethan Coen, Joel Coen',
        Genre: 'Crime, Drama, Thriller',
        Plot:
          'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.',
        Poster:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg',
        Rating: '8',
        Runtime: '122 min',
        Title: 'No Country for Old Men',
        Trailer: '',
        Website: 'http://www.nocountryforoldmen-themovie.com',
        Year: '2007',
        imdbID: 'tt0477348'
      },
      {
        Actors: 'Josh Brolin, George Clooney, Alden Ehrenreich, Ralph Fiennes',
        Director: 'Ethan Coen, Joel Coen',
        Genre: 'Comedy, Mystery',
        Plot:
          "A Hollywood fixer in the 1950s works to keep the studio's stars in line.",
        Poster:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BOTI1M2FlMzItY2VjYS00Y2VkLWI5OTQtMzA0MWMyNmQzZmQ0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        Rating: '6.5',
        Runtime: '106 min',
        Title: 'Hail, Caesar!',
        Trailer: '',
        Website: 'http://www.hailcaesarmovie.com/',
        Year: '2016',
        imdbID: 'tt0475290'
      },
      {
        Actors:
          'Arnold Schwarzenegger, Jason Clarke, Emilia Clarke, Jai Courtney',
        Director: 'Alan Taylor',
        Genre: 'Action, Adventure, Sci-Fi',
        Plot:
          'When John Connor, leader of the human resistance, sends Sgt. Kyle Reese back to 1984 to protect Sarah Connor and safeguard the future, an unexpected turn of events creates a fractured timeline.',
        Poster:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1NTc0NzE4OF5BMl5BanBnXkFtZTgwNDkyNjQ1NTE@._V1_SX300.jpg',
        Rating: '6.5',
        Runtime: '126 min',
        Title: 'Terminator Genisys',
        Trailer: '',
        Website: 'http://www.facebook.com/TerminatorGenisys',
        Year: '2015',
        imdbID: 'tt1340138'
      },
      {
        Actors:
          'Arnold Schwarzenegger, Nick Stahl, Claire Danes, Kristanna Loken',
        Director: 'Jonathan Mostow',
        Genre: 'Action, Sci-Fi, Thriller',
        Plot:
          'A cybernetic warrior from a post-apocalyptic future travels back in time to protect a 25-year old drifter and his future wife from a most advanced robotic assassin and to ensure they both survive a nuclear attack.',
        Poster:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk5NzM1ODgyN15BMl5BanBnXkFtZTcwMzA5MjAzMw@@._V1_SX300.jpg',
        Rating: '6.5',
        Runtime: '109 min',
        Title: 'Terminator 3: Rise of the Machines',
        Trailer: '',
        Website: 'http://www.terminator3.com/',
        Year: '2003',
        imdbID: 'tt0181852'
      },
      {
        Actors:
          'Arnold Schwarzenegger, Michael Biehn, Linda Hamilton, Paul Winfield',
        Director: 'James Cameron',
        Genre: 'Action, Sci-Fi',
        Plot:
          'A seemingly indestructible humanoid cyborg is sent from 2029 to 1984 to assassinate a waitress, whose unborn son will lead humanity in a war against the machines, while a soldier from that war is sent to protect her at all costs.',
        Poster:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BODE1MDczNTUxOV5BMl5BanBnXkFtZTcwMTA0NDQyNA@@._V1_SX300.jpg',
        Rating: '8',
        Runtime: '107 min',
        Title: 'The Terminator',
        Trailer: '',
        Website: 'http://www.terminator1.com/',
        Year: '1984',
        imdbID: 'tt0088247'
      },
      {
        Actors: 'Christian Bale, Justin Theroux, Josh Lucas, Bill Sage',
        Director: 'Mary Harron',
        Genre: 'Crime, Drama',
        Plot:
          'A wealthy New York investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies.',
        Poster:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyMTYwMTI0N15BMl5BanBnXkFtZTgwNTU2NTYxMTE@._V1_SX300.jpg',
        Rating: '7.5',
        Runtime: '102 min',
        Title: 'American Psycho',
        Trailer: '',
        Website: 'http://www.americanpsycho.com',
        Year: '2000',
        imdbID: 'tt0144084'
      },
      {
        Actors: 'George Clooney, Frances McDormand, Brad Pitt, John Malkovich',
        Director: 'Ethan Coen, Joel Coen',
        Genre: 'Comedy, Crime, Drama',
        Plot:
          'A disk containing mysterious information from a CIA agent ends up in the hands of two unscrupulous and daft gym employees who attempt to sell it.',
        Poster:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BYzYwMjZhOGEtMGZlZS00Mjg1LTlkMDktYzJiZDU4MzAxZDRiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        Rating: '7',
        Runtime: '96 min',
        Title: 'Burn After Reading',
        Trailer: '',
        Website: 'http://www.burnafterreading.com--live.com/',
        Year: '2008',
        imdbID: 'tt0887883'
      },

      {
        Title: 'Terminator 2: Judgment Day',
        Rating: '8.5',
        Plot:
          'A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten year old son, John Connor, from a more advanced cyborg.',
        Poster:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
        imdbID: 'tt0103064',
        Trailer: '7QXDPzx71jQ',
        Year: '1991',
        Runtime: '137 min',
        Genre: 'Action, Sci-Fi, Thriller',
        Director: 'James Cameron',
        Actors:
          'Arnold Schwarzenegger, Linda Hamilton, Edward Furlong, Robert Patrick',
        Website: 'N/A'
      },
      {
        Title: 'The Shawshank Redemption',
        Rating: '9',
        Plot:
          'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        Poster:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
        imdbID: 'tt0111161',
        Trailer: '6hB3S9bIaco',
        Year: '1994',
        Runtime: '142 min',
        Genre: 'Crime, Drama',
        Director: 'Frank Darabont',
        Actors: 'Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler',
        Website: 'N/A'
      },
      {
        Title: 'The Dark Knight',
        Rating: '8',
        Plot:
          'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        Poster:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        imdbID: 'tt0468569',
        Trailer: 'EXeTwQWrcwY',
        Year: '2008',
        Runtime: '152 min',
        Genre: 'Action, Crime, Thriller',
        Director: 'Christopher Nolan',
        Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
        Website: 'http://thedarkknight.warnerbros.com/'
      },
      {
        Title: 'Pulp Fiction',
        Rating: '7.5',
        Plot:
          "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        Poster:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_UX182_CR0,0,182,268_AL_.jpg',
        imdbID: 'tt0110912',
        Trailer: 's7EdQ4FqbhY',
        Year: '1994',
        Runtime: '154 min',
        Genre: 'Crime, Drama',
        Director: 'Quentin Tarantino',
        Actors: 'Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta',
        Website: 'N/A'
      },
      {
        Title: 'Fight Club',
        Rating: '8',
        Plot:
          'An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soapmaker, forming an underground fight club that evolves into something much, much more.',
        Poster:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMzFjMWNhYzQtYTIxNC00ZWQ1LThiOTItNWQyZmMxNDYyMjA5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
        imdbID: 'tt0137523',
        Trailer: 'SUXWAEX2jlg',
        Year: '1999',
        Runtime: '139 min',
        Genre: 'Drama',
        Director: 'David Fincher',
        Actors: 'Edward Norton, Brad Pitt, Meat Loaf, Zach Grenier',
        Website: 'http://www.foxmovies.com/fightclub/'
      },
      {
        Title: 'Forrest Gump',
        Rating: '9.5',
        Plot:
          'The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.',
        Poster:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR1,0,182,268_AL_.jpg',
        imdbID: 'tt0109830',
        Trailer: 'bLvqoHBptjg',
        Year: '1994',
        Runtime: '142 min',
        Genre: 'Drama, Romance',
        Director: 'Robert Zemeckis',
        Actors:
          'Tom Hanks, Rebecca Williams, Sally Field, Michael Conner Humphreys',
        Website: 'http://www.paramount.com/movies/forrest-gump/'
      },
      {
        Title: 'Star Wars: Episode V - The Empire Strikes Back',
        Rating: '6',
        Plot:
          'After the rebels are overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda. His friends accept shelter from a questionable ally as Darth Vader hunts them in a plan to capture Luke.',
        Poster:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
        imdbID: 'tt0080684',
        Trailer: 'JNwNXF9Y6kY',
        Year: '1980',
        Runtime: '124 min',
        Genre: 'Action, Adventure, Fantasy',
        Director: 'Irvin Kershner',
        Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams',
        Website: 'http://www.starwars.com/episode-v/'
      },
      {
        Title: 'Inception',
        Rating: '8',
        Plot:
          'A thief, who steals corporate secrets through the use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
        Poster:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        imdbID: 'tt1375666',
        Trailer: 'YoHD9XEInc0',
        Year: '2010',
        Runtime: '148 min',
        Genre: 'Action, Adventure, Sci-Fi',
        Director: 'Christopher Nolan',
        Actors:
          'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy',
        Website: 'http://inceptionmovie.warnerbros.com/'
      },
      {
        Title: 'The Matrix',
        Rating: '8',
        Plot:
          'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        Poster:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
        imdbID: 'tt0133093',
        Trailer: 'm8e-FF8MsqU',
        Year: '1999',
        Runtime: '136 min',
        Genre: 'Action, Sci-Fi',
        Director: 'Lana Wachowski, Lilly Wachowski',
        Actors:
          'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving',
        Website: 'http://www.whatisthematrix.com'
      },
      {
        Title: 'The Silence of the Lambs',
        Rating: '6.5',
        Plot:
          'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.',
        Poster:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
        imdbID: 'tt0102926',
        Trailer: 'RuX2MQeb8UM',
        Year: '1991',
        Runtime: '118 min',
        Genre: 'Crime, Drama, Thriller',
        Director: 'Jonathan Demme',
        Actors:
          'Jodie Foster, Lawrence A. Bonney, Kasi Lemmons, Lawrence T. Wrentz',
        Website: 'N/A'
      },
      {
        Title: 'Léon',
        Rating: '7',
        Plot:
          "Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. Léon and Mathilda form an unusual relationship, as she becomes his protégée and learns the assassin's trade.",
        Poster:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BZDAwYTlhMDEtNTg0OS00NDY2LWJjOWItNWY3YTZkM2UxYzUzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR4,0,182,268_AL_.jpg',
        imdbID: 'tt0110413',
        Trailer: 'yoxLYdARO_0',
        Year: '1994',
        Runtime: '110 min',
        Genre: 'Crime, Drama, Thriller',
        Director: 'Luc Besson',
        Actors: 'Jean Reno, Gary Oldman, Natalie Portman, Danny Aiello',
        Website: 'N/A'
      },
      {
        Title: 'Sen to Chihiro no kamikakushi',
        Rating: '8',
        Plot:
          "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
        Poster:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BOGJjNzZmMmUtMjljNC00ZjU5LWJiODQtZmEzZTU0MjBlNzgxL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        imdbID: 'tt0245429',
        Trailer: 'KFbqrwpm-js',
        Year: '2001',
        Runtime: '125 min',
        Genre: 'Animation, Adventure, Family',
        Director: 'Hayao Miyazaki, Kirk Wise',
        Actors: 'Rumi Hiiragi, Miyu Irino, Mari Natsuki, Takashi Naitô',
        Website: 'http://bventertainment.go.com/movies/spiritedaway'
      }
    ]
  }
}

export default persistedStateDatabase

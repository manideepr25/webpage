const movies = [
    {
      title: "Dune (2021)",
      genre: "Sci-Fi / Adventure",
      poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"
    },
    {
      title: "Barbie (2023)",
      genre: "Comedy / Fantasy",
      poster: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
    },
    {
      title: "Oppenheimer (2023)",
      genre: "Biography / Drama",
      poster: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg"
    },
    {
      title: "Avatar: The Way of Water",
      genre: "Sci-Fi / Fantasy",
      poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
    },
    {
      title: "John Wick: Chapter 4",
      genre: "Action / Thriller",
      poster: "https://image.tmdb.org/t/p/w500/2A3KeOQnvgYVZgC5yy3G6Yoe6Tc.jpg"
    },
    {
      title: "Spider-Man: Across the Spider-Verse",
      genre: "Animation / Action",
      poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
    },
    {
      title: "The Batman (2022)",
      genre: "Action / Crime",
      poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
    },
    {
      title: "Free Guy (2021)",
      genre: "Comedy / Action",
      poster: "https://image.tmdb.org/t/p/w500/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg"
    },
    {
      title: "Encanto (2021)",
      genre: "Animation / Family",
      poster: "https://image.tmdb.org/t/p/w500/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg"
    },
    {
      title: "Mission: Impossible - Dead Reckoning",
      genre: "Action / Spy",
      poster: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg"
    },
    {
      title: "The Super Mario Bros. Movie",
      genre: "Animation / Adventure",
      poster: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg"
    },
    {
      title: "Interstellar (2014)",
      genre: "Sci-Fi / Drama",
      poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
    }
  ];
  
  function recommendMovie() {
    const container = document.getElementById("recommendation-box");
    container.innerHTML = ""; // Clear previous
  
    const shuffled = movies.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
  
    selected.forEach(movie => {
      const card = document.createElement("div");
      card.className = "movie-card";
  
      card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}">
        <h2>${movie.title}</h2>
        <p>${movie.genre}</p>
      `;
  
      container.appendChild(card);
    });
  }

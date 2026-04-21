import { prisma, connect, disconnect } from "../config/prisma.js";

const userId1 = "572dcc4a-8d8a-416c-8550-d4b25eba6877";
const userId2 = "5bf1348b-3300-437e-ac61-7c1780f343a6";

const movies = [
  {
    title: "The Matrix",
    overvieW: "A computer hacker learns about the true nature of reality.",
    releaseYear: 1999,
    genres: "Action,Sci-Fi",
    runtime: 136,
    posterUrl: "https://example.com/matrix.jpg",
    createby: userId1,
  },
  {
    title: "Inception",
    overvieW:
      "A thief who steals corporate secrets through dream-sharing technology.",
    releaseYear: 2010,
    genres: "Action,Sci-Fi,Thriller",
    runtime: 148,
    posterUrl: "https://example.com/inception.jpg",
    createby: userId1,
  },
  {
    title: "The Dark Knight",
    overvieW: "Batman faces the Joker in a battle for Gotham's soul.",
    releaseYear: 2008,
    genres: "Action,Crime,Drama",
    runtime: 152,
    posterUrl: "https://example.com/darkknight.jpg",
    createby: userId2,
  },
  {
    title: "Pulp Fiction",
    overvieW: "The lives of two mob hitmen, a boxer, and others intertwine.",
    releaseYear: 1994,
    genres: "Crime,Drama",
    runtime: 154,
    posterUrl: "https://example.com/pulpfiction.jpg",
    createby: userId1,
  },
  {
    title: "Interstellar",
    overvieW: "A team of explorers travel through a wormhole in space.",
    releaseYear: 2014,
    genres: "Adventure,Drama,Sci-Fi",
    runtime: 169,
    posterUrl: "https://example.com/interstellar.jpg",
    createby: userId2,
  },
  {
    title: "The Shawshank Redemption",
    overvieW: "Two imprisoned men bond over a number of years.",
    releaseYear: 1994,
    genres: "Drama",
    runtime: 142,
    posterUrl: "https://example.com/shawshank.jpg",
    createby: userId2,
  },
  {
    title: "Fight Club",
    overvieW:
      "An insomniac office worker and a devil-may-care soapmaker form an underground fight club.",
    releaseYear: 1999,
    genres: "Drama",
    runtime: 139,
    posterUrl: "https://example.com/fightclub.jpg",
    createby: userId2,
  },
  {
    title: "Forrest Gump",
    overvieW:
      "The presidencies of Kennedy and Johnson unfold through the perspective of an Alabama man.",
    releaseYear: 1994,
    genres: "Drama,Romance",
    runtime: 142,
    posterUrl: "https://example.com/forrestgump.jpg",
    createby: userId1,
  },
  {
    title: "The Godfather",
    overvieW:
      "The aging patriarch of an organized crime dynasty transfers control to his son.",
    releaseYear: 1972,
    genres: "Crime,Drama",
    runtime: 175,
    posterUrl: "https://example.com/godfather.jpg",
    createby: userId1,
  },
  {
    title: "Goodfellas",
    overvieW: "The story of Henry Hill and his life in the mob.",
    releaseYear: 1990,
    genres: "Biography,Crime,Drama",
    runtime: 146,
    posterUrl: "https://example.com/goodfellas.jpg",
    createby: userId2,
  },
];

const main = async () => {
  console.log("Seeding movies...");
 await connect()
  for (const movie of movies) {
    await prisma.movie.create({
      data: movie,
    });
    console.log(`Created movie: ${movie.title}`);
  }

  console.log("Seeding completed!");
};

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await disconnect();
  });

// Задание 1: Объект (данные через prompt) + увеличить возраст на 5

const student = {
  name: prompt("Введите имя:"),
  age: Number(prompt("Введите возраст:")),
  subject: prompt("Введите предмет:"),
  grade: prompt("Введите оценку:")
};

console.log("Шаг 1: объект после ввода данных:", student);

student.age = student.age + 5;

console.log("Шаг 2: возраст увеличен на 5:", student.age);
console.log("Шаг 3: итоговый объект:", student);

// Задание 2: Массив movies — вывести режиссера 2-го и жанр 4-го фильма

const movies = [
  {
    title: "Начало",
    director: "Кристофер Нолан",
    year: 2010,
    genre: "фантастика"
  },
  {
    title: "Форрест Гамп",
    director: "Роберт Земекис",
    year: 1994,
    genre: "драма"
  },
  {
    title: "Криминальное чтиво",
    director: "Квентин Тарантино",
    year: 1994,
    genre: "боевик"
  },
  {
    title: "Зеленая миля",
    director: "Фрэнк Дарабонт",
    year: 1999,
    genre: "триллер"
  },
  {
    title: "Жизнь прекрасна",
    director: "Роберто Бениньи",
    year: 1997,
    genre: "комедия/драма"
  }
];

console.log("Режиссёр второго фильма:", movies[1].director);
console.log("Жанр четвёртого фильма:", movies[3].genre);

// Задание 3: Список покупок (unshift, pop, splice)

let shoppingList = ["яблоки", "бананы", "молоко", "сыр", "хлеб", "шоколад"];
console.log("Исходный список:", shoppingList);

// добавить новый товар в начало
shoppingList.unshift("йогурт");
console.log("После добавления в начало:", shoppingList);

// удалить последний товар
shoppingList.pop();
console.log("После удаления последнего:", shoppingList);

// заменить третий элемент (индекс 2) на два новых товара
shoppingList.splice(2, 1, "кофе", "чай");
console.log("После splice (замена 3-го элемента):", shoppingList);

// Задание 4: Переписать for на while (сумма чисел)

const numbers = [52, 31, 9, 85, 31, 45];
let sum = 0;
let i = 0;

while (i < numbers.length) {
  sum += numbers[i];
  i++;
}

console.log(`Сумма чисел: ${sum}`); // 253

// Задание 5: Вывести информацию о книгах + награды (каждая с новой строки)

const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    numberOfPages: 281,
    genre: "Fiction",
    awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"]
  },
  {
    title: "1984",
    author: "George Orwell",
    numberOfPages: 328,
    genre: "Dystopian",
    awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"]
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    numberOfPages: 180,
    genre: "Classic",
    awards: ["Modern Library's Top 100", "National Book Award Nominee"]
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    numberOfPages: 635,
    genre: "Adventure",
    awards: ["Regarded as a Great American Novel", "Part of the Western Canon"]
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    numberOfPages: 432,
    genre: "Romance",
    awards: ["BBC's Big Read", "Guardian's 100 Best Novels"]
  }
];

for (let b = 0; b < books.length; b++) {
  console.log(
    `Название: ${books[b].title}, Автор: ${books[b].author}, Количество страниц: ${books[b].numberOfPages}, Жанр: ${books[b].genre}`
  );
  console.log("Награды:");

  for (let a = 0; a < books[b].awards.length; a++) {
    console.log(`- ${books[b].awards[a]}`);
  }

  console.log("-----------");
}

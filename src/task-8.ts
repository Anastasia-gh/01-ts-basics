import axios from "axios";

// Інтерфейс для типу поста
interface Post {
  id: number;
  title: string;
  body: string;
}

// Функція з типізацією повернення (Promise<Post[]>)
async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
}

// Виклик функції з використанням типу Post
fetchPosts().then((posts) => {
  console.log(posts[0].title);
});

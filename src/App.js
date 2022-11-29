import axios from "axios";
import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import Card from "./components/Card";
import Card2 from "./components/Card2";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      {users.map((user) => {
        return <Card2 key={user.id} user={user} />;
      })}
    </ChakraProvider>
  );
}

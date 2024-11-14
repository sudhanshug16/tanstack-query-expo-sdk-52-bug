import { StyleSheet, View, Text } from "react-native";

import { useQuery } from "@tanstack/react-query";

export default function HomeScreen() {
  const { data, status, isFetching, isLoading, isPending } = useQuery({
    queryKey: ["todos"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
    enabled: false,
  });

  return (
    <View>
      <Text>
        {JSON.stringify({
          data: !!data,
          status,
          isFetching,
          isLoading,
          isPending,
        })}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

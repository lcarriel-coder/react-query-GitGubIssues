import { useQuery } from "@tanstack/react-query";
import { gitHubApi } from "../../api/githubApi";
import { Label } from "../interfaces/label";
import { sleep } from "../../helpers/sleep";

const getLabels = async (): Promise<Label[]> => {
  await sleep(2);
  const { data } = await gitHubApi.get<Label[]>("/labels");

  return data;
};

export const useLabels = () => {
  const labelQuery = useQuery(["label"], getLabels, {
    staleTime: 1000 * 60 * 60,
    //initialData:[],
    placeholderData: [
      {
        id: 791921801,
        node_id: "MDU6TGFiZWw3OTE5MjE4MDE=",
        url: "https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F",
        name: "❤️",
        color: "ffffff",
        default: false,
      },
      {
        id: 588833528,
        node_id: "MDU6TGFiZWw1ODg4MzM1Mjg=",
        url: "https://api.github.com/repos/facebook/react/labels/Difficulty:%20medium",
        name: "Difficulty: medium",
        color: "fbca04",
        default: false,
      },
    ],
  });

  return {
    labelQuery,
  };
};

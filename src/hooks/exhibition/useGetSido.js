import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetSido = () => {
  const {
    data: sido,
    isError,
    error, // 에러 객체
  } = useQuery({
    queryKey: ["GET_SIDO"],
    queryFn: async () => {
      let cities;
      const res = await axios.get(
        `https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=*00000000`
      );

      const sigungu = async (sigungucode) => {
        const response = await axios.get(
          `https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=${sigungucode}**00000`
        );
        return response.data.regcodes;
      };

      const sidodata = res.data.regcodes;
      cities = await Promise.all(
        sidodata.map(async (sido) => {
          const newarry = await sigungu(sido.code.slice(0, 2));
          const starry = newarry.map((sigungudata) => {
            return { siGunGuName: sigungudata.name, sigunguChecked: false };
          });
          return { sidoname: sido.name, sidoChecked: false, sigungu: starry };
        })
      );

      return cities;
    },
  });

  if (isError) {
    alert(`Error: ${error.message}`);
  }
  return [sido];
};

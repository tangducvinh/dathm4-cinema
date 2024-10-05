import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import WatchTrailer from "../components/book/WatchTrailer";
import InforMovie from "../components/book/InforMovie";
import ShowingMovie from "../components/book/ShowingMovie";
import ContentMovie from "../components/book/ContentMovie";
import Show from "../components/book/Show";
import { getDetailMovie, getListMovie } from "../apis/apiMovie";
import Loading from "../components/common/Loading";

// const movie = {
//   poster:
//     "https://cdn.galaxycine.vn/media/2024/9/18/do-anh-cong-duoc-toi-500_1726635602912.jpg",
//   name: "Đố Anh Còng Được Tôi",
//   runtime: "122",
//   relase: "2024/12/09 10:00:00",
//   country: "Viet Nam",
//   genres: [
//     {
//       name: "Hang dong",
//       slug: "hanh-dong",
//     },
//     {
//       name: "Giat gan",
//       slug: "giat-gan",
//     },
//   ],
//   directors: [
//     {
//       name: "Nguyen Tran",
//       slug: "",
//     },
//   ],
//   actors: [
//     {
//       name: "Songoku",
//       slug: "",
//     },
//   ],
//   overview:
//     "Các thanh tra kỳ cựu nổi tiếng đã hoạt động trở lại! Thám tử Seo Do-cheol (HWANG Jung-min) và đội điều tra tội phạm nguy hiểm của anh không ngừng truy lùng tội phạm cả ngày lẫn đêm, đặt cược cả cuộc sống cá nhân của họ.  Nhận một vụ án sát hại một giáo sư, đội thanh tra nhận ra những mối liên hệ với các vụ án trong quá khứ và nảy sinh những nghi ngờ về một kẻ giết người hàng loạt. Điều này đã khiến cả nước rơi vào tình trạng hỗn loạn. Khi đội thanh tra đi sâu vào cuộc điều tra, kẻ sát nhân đã chế nhạo họ bằng cách công khai tung ra một đoạn giới thiệu trực tuyến, chỉ ra nạn nhân tiếp theo và làm gia tăng sự hỗn loạn.  Để giải quyết mối đe dọa ngày càng leo thang, nhóm đã kết nạp một sĩ quan tân binh trẻ Park Sun-woo (JUNG Hae-in), dẫn đến những khúc mắc và đầy rẫy bất ngờ trong vụ án. Phim mới I, The Executioner / Đố Anh Còng Được Tôi có suất chiếu sớm từ 26.09.2024(không áp dụng movie voucher) và khởi chiếu chính thức 27.09.2024 tại các rạp chiếu phim toàn quốc. Cùng đặt lịch xem I, The Executioner / Đố Anh Còng Được Tôi. ",
// };

const moviesShowing = [
  {
    video: "2DmOv-pM1bM",
    name: "Make rich with ghost",
    backdrop:
      "https://cdn.galaxycine.vn/media/2024/9/18/do-anh-cong-duoc-toi-750_1726635603420.jpg",
    slug: "kkk-dsfsdf-werer",
    status: "showing",
  },
  {
    video: "2DmOv-pM1bM",
    name: "Make rich with ghost",
    backdrop:
      "https://cdn.galaxycine.vn/media/2024/9/18/do-anh-cong-duoc-toi-750_1726635603420.jpg",
    slug: "kkk-dsfsdf-werer",
    status: "soon",
  },
  {
    video: "2DmOv-pM1bM",
    name: "Make rich with ghost",
    backdrop:
      "https://cdn.galaxycine.vn/media/2024/9/18/do-anh-cong-duoc-toi-750_1726635603420.jpg",
    slug: "kkk-dsfsdf-werer",
    status: "imax",
  },
];

const Book = () => {
  const [movie, setMovie] = useState();
  const [moviesShowing, setMoviesShowing] = useState();
  const searchParams = new URLSearchParams(document.location.search);
  const { slug } = useParams();

  useEffect(() => {
    const fetchGetListMovie = async () => {
      const dataMovie = getDetailMovie(slug);
      const dataMoviesShowing = getListMovie("showing");
      const [movies, moviesShowing] = await Promise.all([
        dataMovie,
        dataMoviesShowing,
      ]);

      setMovie(movies.data);
      setMoviesShowing(moviesShowing.data);
    };

    fetchGetListMovie();
  }, [slug]);

  useEffect(() => {
    localStorage.removeItem('currentShow');
  }, [])

  if (!movie) return <Loading />;

  return (
    <div className="pb-[50px]">
      <WatchTrailer backdrop={movie?.backDrop} keyVideo={movie?.trailer} />

      <div className="flex mx-auto w-main gap-6">
        <div className="flex-7">
          <InforMovie data={movie} />

          <ContentMovie overview={movie?.description} />

          <Show movieId={movie?.id} />
        </div>
        <div className="flex-3">
          <ShowingMovie data={moviesShowing} />
        </div>
      </div>
    </div>
  );
};

export default Book;

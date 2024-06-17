import Header from "../Header";
import "./cardSkeletonUserInfo.css";
import Skeleton from "react-loading-skeleton";

function CardSkeletonUserInfo() {
  return (
    <>
      <Header />
      <div className="loading-skeleton">
        <div className="card-skeleton">
          <div className="card-skeleton_user">
            <Skeleton borderRadius={20} width={120} height={120} />
          </div>
          <div className="card-skeleton_name">
            <Skeleton borderRadius={8} width={140} height={30} />
          </div>
        </div>
        <div className="card-skeleton">
          <div className="card-skeleton_user">
            <Skeleton borderRadius={20} width={120} height={120} />
          </div>
          <div className="card-skeleton_name">
            <Skeleton borderRadius={8} width={140} height={30} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CardSkeletonUserInfo;

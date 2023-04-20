import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Stage = ({ stageNumber, stageID }) => {
  let foundTotal = 0;

  // 스타일 설정 함수
  function style(onVisible, onTransform, onTransition) {
    // 다음스테이지 버튼 활성 유무
    const nextBtn = document.querySelector(".success");
    nextBtn.style.visibility = onVisible;

    // 아이템 이동 스타일 활성 유무
    const transform = document.querySelectorAll(".item");
    transform.forEach((e) => {
      e.style.transform = onTransform;

      // 다음 스테이지로 이동 직후에 transition을 넣으면 item 이동이 보여서 1초 후 넣기
      if (onVisible === "hidden") {
        setTimeout(() => {
          e.style.transition = onTransition;
        }, 1000);
      } else {
        e.style.transition = onTransition;
      }
    });
  }

  //초기화
  useEffect(() => {
    style("hidden", "", "all 0.5s");
  }, [stageNumber]);

  //찾았을 때
  const foundItem = (e) => {
    e.target.style.transform = "scale(4)";
    foundTotal += 1;

    // 3개 모두 찾았으면 성공화면 노출
    if (foundTotal === 3) {
      style("visible", "", "none");
    }
  };

  // 다음 스테이지 버튼
  const NextBtn = () => {
    let linkTo = `/${Number(stageNumber) + 1}`;
    if (stageNumber === "3") {
      return (
        <Link to="/">
          <button className="next-stage" type="button">
            RESTART
          </button>
        </Link>
      );
    } else {
      return (
        <Link to={linkTo}>
          <button className="next-stage" type="button">
            NEXT STAGE
          </button>
        </Link>
      );
    }
  };

  return (
    <div id={stageID}>
      {[1, 2, 3].map((e) => {
        return (
          <div
            className={`item item${e}`}
            onClick={foundItem}
            key={`${stageNumber}.${e}`}
          ></div>
        );
      })}

      <div className="success">
        <p>SUCCESS</p>
        <NextBtn />
      </div>
    </div>
  );
};

import { useContext, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
    const data = useContext(DiaryStateContext);
    const nav = useNavigate();

    // 1. 렌더링 중에 직접 데이터를 찾습니다 (상태로 관리할 필요 없음)
    const curDiaryItem = data.find((item) => String(item.id) === String(id));

    useEffect(() => {
        // 2. 데이터가 없을 때 처리하는 '부당한 접근 제어' 로직만 useEffect에 남깁니다.
        if (!curDiaryItem) {
            window.alert("존재하지 않는 일기입니다.");
            nav("/", { replace: true });
        }
    }, [id, curDiaryItem, nav]);

    return curDiaryItem;
};

export default useDiary;
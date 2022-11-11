import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { dbHook } from "../../hooks/dbHook";
import { duoSetData, _DuoData } from "../../redux/duo/data";
import DuoCard from "./card/card";
import DuoFilter, { Filter } from "./filter/filter";

type DuoData = {
  duoData:_DuoData
}

export default function DuoIndex(this: any) {
  const [duo,setDuo] = useState([]);
  const [duoFilter,setDuoFilter] = useState();
  const dispatch = useDispatch();
  const filter = useSelector((state:Filter) => {
    return state.duoFilter
  })
  const duoData = useSelector((state:DuoData) => {
    return state.duoData
  })

  useEffect(()=>{
    dbHook.duo.get()
    .then((_res)=>{
      dispatch(duoSetData(_res))
    })
    .catch((_error)=>{
      console.log("초기로드 에러",_error)
    })
  },[])

  useEffect(()=>{
    console.log("필터 변경",filter)
  },[filter])

  useEffect(()=>{
    setDuo(duoData.data)
  },[duoData])
  useEffect(()=>{
    console.log("듀데",duo)
  },[duo])

  return (
    <>
      <Container>
        <Wrapper >
          <DuoFilter />
            <BoardLayOut>
              {duo.map((res:any)=> {
                return <DuoCard key={res.id} duoRes={res} />
              } )}
            </BoardLayOut>
          </Wrapper>
      </Container>
      {/* {overlayMatch ? <DuoInput /> : null} */}
      {/* {deleteState ? <DuoDelete setDeleteState={setDeleteState} setMatchPw={setMatchPw} deletePw={deletePw}/> : null} */}
    </>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 150px;  
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 792px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 568px;
  }
  @media (max-width: 767px){
	  width: 567px;
  }
`;
const BoardLayOut = styled.div`
  display:grid ;
  grid-template-columns: repeat(5,1fr) ;
  grid-gap: calc(20px);
  padding-top: 40px ;
  @media (max-width: 1199px) {
    grid-template-columns: repeat(4,1fr) ;
    grid-gap: calc(20px);
  }
  @media (max-width: 995px) {
    grid-template-columns: repeat(3,1fr) ;
    grid-gap: calc(15px);
  }
  @media (max-width: 572px){
    grid-template-columns: repeat(2,1fr) ;
  }
`;
const Board = styled.div`
  position: relative;
  background-color: #2c3e50 ;
  width: 180px ;
  height: 180px;
  border-radius: 15px ;

`;




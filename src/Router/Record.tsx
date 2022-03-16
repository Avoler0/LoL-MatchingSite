import axios from "axios";
import { useEffect } from "react";
import { Route, Routes, useMatch, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { summoner, summonerIdGet } from "./Api/api";

const Container = styled.div`
  max-width: 1903px;
  min-width: 1200px ;
  margin: 0 auto ;
`;
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const Layout = styled.div`
  display: flex;
`;
const Head = styled.div`
  width:100% ;
  height: 20vh ;
  padding-bottom: 48px;
`;
const Left = styled.div`
  background-color: black;
  width: 80%;
`;
const Right = styled.div`
  background-color: whitesmoke;
  width: 20%;
`;
const ReportBoard=styled.div`
  background-color: aqua;
`;
const ReBoardLabel = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  color: black;
  padding: 10px;
`;
const ReBoardPost = styled.div`
  width: 100%;
  height: 70px;
  background-color: blue;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  height: 20vh;
  background-color: red;
`;
const Middle = styled.div`
  width: 100%;
  height: 100vh;
  background-color: green;
`;
const Bottom = styled.div`
  width: 100%;
  height: 20vh;
  background-color: blue;
`;

const SummonerIcon = styled.div`
  height: 100%;
  width: 11vw;
  background-color: blue;
`;
const SummonerWrap = styled.div`
  display: flex;
  align-self: flex-end;
  padding-left: 20px;
`;
const SummonerInfo = styled.div`
  margin: 0 auto;
`;
const SummonerName = styled.div`
  font-size: 36px;
`;
const SummonerCheck = styled.div`
  padding: 20px;
`;
function Record() {
  const { summonerId } = useParams<string>();
  const setName = useSetRecoilState(summoner);
  const summonData = useRecoilValue(summonerIdGet);
  if(typeof summonerId === 'string'){
    setName(summonerId);
  }
   useEffect(()=>{
    console.log("데이터" , summonData);
  },[summonData]);
  //  http://ddragon.leagueoflegends.com/cdn/10.18.1/img/profileicon/[iconID]
  // http://ddragon.leagueoflegends.com/cdn/10.18.1/data/en_US/profileicon.json
  // https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/rPFgYXdzYa-eXaxBbcE5V-XbxjoTm_klJeI2bEDvUP34eA?api_key=RGAPI-92b4d59d-ab59-4cd0-bf77-cc23a29d960f

  const BASE_PATH = 'https://kr.api.riotgames.com';
  const INFO_PATH = 'lol/league/v4/entries/by-summoner'
  const API_KEY = 'RGAPI-92b4d59d-ab59-4cd0-bf77-cc23a29d960f'
  async function getSummonerInfo() {
    try{
      const response = await axios.get(`${BASE_PATH}/${INFO_PATH}/${summonData.id}?api_key=${API_KEY}`);
      return response;
    }catch(error){
      console.log(error);
    }
  } 
  const responseData = getSummonerInfo();
  console.log("Info 데이터" , responseData);
    
  return (
    <Container>
      <Wrapper>
        <Head />
        <Layout>
          <Left>
            <Top>
              <SummonerIcon>아이콘</SummonerIcon>
              <SummonerWrap>
                <SummonerInfo>
                  <SummonerName>{summonerId}</SummonerName> 
                  <SummonerCheck>신고하기 새로고침</SummonerCheck>
                  솔로티어 : {}
                </SummonerInfo>
                
              </SummonerWrap>
            </Top>
            
            <Middle>

            </Middle>
            <Bottom>

            </Bottom>
          </Left>
          <Right>
            <ReportBoard>
              <ReBoardLabel>
                신고 현황 누적:0개
              </ReBoardLabel>
              <ReBoardPost>
                
              </ReBoardPost>
            </ReportBoard>
          </Right>
        </Layout>
      </Wrapper>
    </Container>
  );
}

export default Record;

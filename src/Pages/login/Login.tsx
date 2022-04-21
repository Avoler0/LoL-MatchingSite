import { useForm } from "react-hook-form";
import styled from "styled-components";


const Container = styled.div`
  width: 450px ;
  min-height: 682px;
  margin: 0 auto ;
  height: 25rem;
  background-color: #2c3e50;
`;
const Layout = styled.div`
  margin: 0 40px;
  
`;
const Head = styled.div`
  height: 13rem ;
  padding-bottom: 48px;
`;
const LogoWrap = styled.div`
  margin: 0 auto;
`;
const Logo = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: white;
  text-align: center;
  padding: 32px 0 24px 0;
`;
const Form = styled.form`
  display:flex ;
  flex-direction:column ;
  margin: auto ;
  padding: 1rem;
  padding-top: 0;
`;
const InWrap = styled.div`
  margin-top: 1rem;
`;
const Label = styled.label`
  font-size: 15px;
  display: block;
  /* color: rgba(123,122,142,0.8); */
  color: white;
  margin-bottom: 8px;
`;
const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  font-size: 0.875rem;
  background-color: #28283b;
  color: white;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 5px;
  padding: 0.8rem;
  :focus,:active{
    outline: none;
  }
`;
const CheckBox = styled.input`
  
`;
const IDPW = styled.div`
  font-size: 15px;
  color: #8686f0;
  margin: 0 10px;
  cursor: pointer;
`;
const OR = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  margin: 8px 0px;
  font-size: 14px;
  text-align: center;
  ::before,::after{
  content: "";
  flex-grow: 1;
  background: rgba(0, 0, 0, 0.35);
  height: 1px; font-size: 0px;
  line-height: 0px;
  margin: 0px 16px;
  }
  
`;
const FastLogin = styled.h2`

`;
const NaverLogin = styled.button`
  width: 100%;
  height: 3.2rem;
  background-color: #00ba32;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin: 8px 0;
  font-size: 18px;
`;
const FaceLogin = styled.button`
  width: 100%;
  height: 3.2rem;
  background-color: #3c5a99;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin: 8px 0;
  font-size: 18px;
`;
const ExitWrap = styled.div`
  margin: 2.5rem 0;
  display: flex;
  justify-content: space-between;
`;
const OkBt = styled.button`
  width: 100%;
  height: 3.2rem;
  border: 0.08rem solid rgba(123,122,142,0.8);
  border-radius: 5px;
  background-color: #b5b5c0;
  color: #fff;
  cursor: pointer;
  font-size: 22px;
`;
function Login({str , getHide}:any) {
  const {register,watch} = useForm();
  const loginId = watch("id");
  const loginPw= watch("password");
  return (
  <>
    <Head>
    
    </Head>
    <Container>
      <Layout>
        <LogoWrap>
          <Logo>wewi.gg</Logo>
        </LogoWrap>
        <Form>
          <InWrap>
            <Label htmlFor="loginId">아이디</Label>
            <Input id="loginId" type="text" {...register("id")} />
          </InWrap>
          <InWrap>
            <Label htmlFor="loginPw">비밀번호</Label>
            <Input id="loginPw" type="password" {...register("password")} />
          </InWrap>
          <InWrap style={{
            display:'flex'
          }}>
            <CheckBox type="checkbox" id="keepLogin"/>
            <Label>자동 로그인</Label>
            <IDPW>ID/PW 찾기</IDPW>
          </InWrap>
          <OR>OR</OR>
          <FastLogin>간편 로그인</FastLogin>
          <NaverLogin>네이버 로그인</NaverLogin>
          <FaceLogin>페이스북 로그인</FaceLogin>
          <ExitWrap>
            <OkBt>로그인</OkBt>
          </ExitWrap>
        </Form>
      </Layout>
    </Container>
  </>
  );
}

export default Login;
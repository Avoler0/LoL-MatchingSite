# Riot API를 이용한 League of Legend 전적검색 사이트

실행방법
terminal -> npm i -> npm run dev


## 디렉터리 구조
### pages
```
 📦pages </br>
 ┣ 📂api  
 ┃ ┗ 📂search  
 ┃ ┃ ┣ 📂champion  
 ┃ ┃ ┃ ┗ 📜[value].ts  
 ┃ ┃ ┗ 📂summoner  
 ┃ ┃ ┃ ┗ 📜[value].ts  
 ┣ 📂duo  
 ┃ ┗ 📜index.tsx  
 ┣ 📂summoner  
 ┃ ┗ 📜[summoner].tsx  
 ┣ 📜globals.css  
 ┣ 📜index.tsx  
 ┣ 📜_app.tsx  
 ┗ 📜_document.tsx  
```
### component
```
📦component  
 ┣ 📂footer  
 ┃ ┗ 📜footer.tsx  
 ┣ 📂gnb  
 ┃ ┣ 📂header  
 ┃ ┃ ┗ 📜header.tsx  
 ┃ ┣ 📂navigation  
 ┃ ┃ ┗ 📜navigation.tsx  
 ┃ ┗ 📜index.tsx  
 ┗ 📂summoner  
 ┃ ┣ 📂debs  
 ┃ ┃ ┗ 📜profile.tsx  
 ┃ ┣ 📜404.tsx  
 ┃ ┗ 📜index.tsx  
```
### redux
```
📦redux
 ┣ 📂login
 ┣ 📂search
 ┃ ┗ 📜searchSlice.ts
 ┗ 📜store.ts
```

### hooks && const
```
📦hooks  
 ┣ 📜axiosInstance.ts  
 ┗ 📜search.ts  
 
 📦const  
 ┗ 📜riotApiPath.ts  
```

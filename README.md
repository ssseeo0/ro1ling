# ro1ling

![image](https://github.com/un0211/ro1ling/assets/24778465/54814f59-60ed-4f92-8c18-7c924c1250e8)
배포 링크: https://ro1ling.netlify.app/

## README 목차

1. [프로젝트 소개](#프로젝트-소개)
2. [팀원 소개](#팀원-소개)
3. [개발 환경](#개발-환경)
4. [개발 기간 및 작업 관리](#개발-기간-및-작업-관리)
5. [프로젝트 구조](#프로젝트-구조)
6. [페이지별 기능](#페이지별-기능)
7. [개선 사항](#개선-사항)
8. [트러블 슈팅](#트러블-슈팅)
9. [프로젝트 후기](#프로젝트-후기)

## 프로젝트 소개

- 추억의 롤링페이퍼 서비스입니다.
- 자신만의 롤링페이퍼 페이지를 만들고 친구에게 공유할 수 있습니다.
- 친구의 롤링페이퍼에 반응과 메세지를 남길 수 있습니다.

## 팀원 소개

|                                                           김서영                                                            |                                                           김세민                                                            |                                                           류혜원                                                            |                                                           장익재                                                            |                                                           홍서하                                                            |
| :-------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/un0211/ro1ling/assets/24778465/02020c58-7cff-443f-a5ef-be2554e0b17e" width="150" height="150"> | <img src="https://github.com/un0211/ro1ling/assets/24778465/210cb608-2418-4ad5-8bbe-16c7cd3cf640" width="150" height="150"> | <img src="https://github.com/un0211/ro1ling/assets/24778465/3774744a-0343-412f-91df-ef82d41c06b3" width="150" height="150"> | <img src="https://github.com/un0211/ro1ling/assets/24778465/55f24950-a5e3-4ea5-84f7-fd972f18d7b6" width="150" height="150"> | <img src="https://github.com/un0211/ro1ling/assets/24778465/0dbff6b1-8910-4ae3-afae-30faf1ac903d" width="150" height="150"> |
|                                           [@ssseeo0](https://github.com/ssseeo0)                                            |                                          [@sermain2](https://github.com/sermain2)                                           |                                            [@un0211](https://github.com/un0211)                                             |                                            [@Ik5606](https://github.com/Ik5606)                                             |                                         [@hongseoha](https://github.com/hongseoha)                                          |
| 메인페이지,<br>기능(3-1, 5-3/4/5),<br>버그 수정 | 메세지 생성 페이지,<br>이미지 최적화 | 전체보기 페이지,<br>롤링페이퍼 페이지,<br>버그 수정 | 롤링페이퍼 생성 페이지 | 롤링페이퍼 목록 페이지|
| 회의 진행, 노션 관리,<br>UI/UX 개선사항 논의 | | 깃허브 관리, 배포,<br>초기 작업 환경 설정,<br>UI/UX 개선사항 논의 | | 팀내 디자인 작업,<br>UI/UX 개선사항 논의 |


## 개발 환경

### 프론트엔드

![image](https://github.com/un0211/ro1ling/assets/122506809/2c3bc906-eccd-4e11-927d-41d5b8b89e54)


### 백엔드

주어진 API 사용

### 협업

GitHub, Discord, Notion

### 기타

Git, npm, Netlify, Figma

## 개발 기간 및 작업 관리

### 개발 기간 (2024.04.30 ~ 2024.05.15)

- 사전 작업: 2024.04.24 ~ 2024.04.30
  ㄴ 기술 스택 선정, 역할 배분, 규칙 정리(팀 규칙, 코드 컨벤션, 커밋 컨벤션 등)
- 페이지 구현: 2024.05.01 ~ 2024.05.10
- 추가 작업: 2024.05.11 ~ 2024.05.15
  ㄴ 버그 해결, 추가 기능 구현
- 발표준비: 2024.05.14 ~ 2024.05.15

### 작업 관리

- 코어 타임: 오후 2시 ~ 6시를 코어 타임으로 정해 협업이 원활하도록 했습니다.
- 데일리 스크럼: 매일 오후 2시 데일리 스크럼을 진행하여 작업 상황을 공유했습니다.
  - 어제 한 일, 오늘 할 일
  - 작업 과정에서 어려운 점
  - 기존 요구 사항에서 개선할 만한 사항
- PR 리뷰
  - 작업 단위로 PR을 올려 작업을 공유했습니다.
  - 다른 사람의 작업이 팀 규칙을 잘 지켰는지 확인하고 리뷰를 남겼습니다.
  - 한 명 이상의 승인을 받고 PR을 머지했습니다.
- 팀 규칙
  - [코드 컨벤션](wiki/CODE.md)
  - [커밋 컨벤션](wiki/COMMIT.md)
  - [브랜치 전략](wiki/BRANCH.md)

## 프로젝트 구조

```
ro1ling
├──.github
├── node_modules
├── public
├── src
    ├─ apis
    ├─ assets
        ├─ icons
        └─ images
    ├─ components
        ├─ common
        ├─ ...Page
    ├─ constants
    ├─ pages
    ├─ styles
    ├─ utils
    ├─ App.js
    └─ index.js
├── .gitignore
├── README.md
├── jsconfig.json
├── package-lock.json
└── package.json
```

## 페이지별 기능

### 1. 메인페이지
// TODO: 서영님

### 2. 롤링페이퍼 목록 페이지
  <p align="center">
    <img src="https://github.com/un0211/ro1ling/assets/122506809/082f5614-3a6a-4635-a944-848ea547e8bb">
</p>

- 모니터 환경에서는 캐러셀로 페이지를 확인하실 수 있습니다.
  <p align="center">
    <img src="https://github.com/un0211/ro1ling/assets/122506809/e8f7c820-8ab3-40f6-b1ce-4ba660c659e8">
</p>

- 태블릿 환경에서는 슬라이드로 페이지를 확인하실 수 있습니다.

### 3. 롤링페이퍼 전체보기 페이지
<p align="center">
<img src="https://github.com/un0211/ro1ling/assets/24778465/b138347d-7f05-45ee-a2c2-dacdf7d3eab4">
</p>

- 전체 롤링페이퍼 목록을 볼 수 있는 페이지입니다.
- 목록 끝에 다다르면 무한스크롤로 롤링페이퍼를 더 불러옵니다.

#### 3-1. [롤링페이퍼 검색]
<p align="center">
<img src="https://github.com/un0211/ro1ling/assets/135966211/d5845626-dbbc-45d5-a8ea-84cd928cb3f3">
</p>

- 롤링페이퍼 전체보기 페이지에서의 검색 기능입니다.
- 롤링페이퍼 이름에 해당하는 롤링페이퍼가 조회됩니다.

### 4. 롤링페이퍼 생성 페이지
- 롤링페이퍼 생성하기 페이지입니다.
- 생성하기 페이지는 롤링페이퍼를 만드는 기능을 담당합니다.

#### 4-1 [수신자 입력]
<p align="center">
<img src="https://github.com/un0211/ro1ling/assets/128791227/79c9e7d8-216c-47f0-9a3d-c90a99c76510">
</p>

- 받는 사람의 이름을 입력할 수 있는 입력란이 제공됩니다. 
- 이름을 입력하지 않고 포커스 아웃을 할 경우, 에러 메시지가 표시됩니다.
- 이름을 입력하면 생성하기 버튼이 활성화됩니다.

#### 4-2 [배경화면 선택]
<p align="center">
<img src="https://github.com/un0211/ro1ling/assets/128791227/27abf3c4-b6ef-4799-81d4-efa86a4d0d71">
</p>

- 배경화면을 선택할 수 있는 기능이 있습니다. 
- 컬러 또는 이미지 버튼을 눌러 컬러나 이미지 둘 중 하나를 선택할 수 있습니다.
- 클릭하여 선택된 배경화면에는 체크 이미지가 표시됩니다.

#### 4-3 [롤링페이퍼 생성]
<p align="center">
<img src="https://github.com/un0211/ro1ling/assets/128791227/bfbcd330-afff-486c-9965-8f32ea437637">
</p>

- 모든 필수 정보를 입력하고 생성하기 버튼을 클릭하면, 롤링페이퍼가 생성됩니다. 
- 생성된 롤링페이퍼는 데이터베이스에 저장됩니다.
- 생성된 롤링페이퍼의 수신자 이름을 기반으로 해당 롤링페이퍼의 페이지로 이동됩니다.

### 5. 롤링페이퍼 페이지
<p align="center">
<img src="https://github.com/un0211/ro1ling/assets/24778465/3ccb5c1d-8146-4a05-bbf5-4d632dbb6273">
</p>

- 생성된 개인별 롤링페이퍼 페이지입니다.
- 이름과 다른 사용자들의 반응 및 메세지를 확인하고 링크를 공유할 수 있습니다.
- 메시지는 목록 끝에 다다르면 무한스크롤로 더 불러옵니다.

#### 5-1. [반응 확인 및 추가하기]
<p align="center">
<img src="https://github.com/un0211/ro1ling/assets/24778465/c513bd6f-da2a-4cfd-8140-35a5278654fc">
</p>

- 상단 내비게이션에서 다른 사람들의 반응을 확인할 수 있습니다.
- 추가 버튼을 클릭하면 반응을 추가하고 확인할 수 있습니다.
- 외부를 클릭하면 창이 닫힙니다.

#### 5-2. [공유하기]
<p align="center">
<img src="https://github.com/un0211/ro1ling/assets/24778465/768d1b0d-5aca-424d-9ec9-980d7fc941c3">
</p>

- 상단 내비게이션에서 링크를 공유할 수 있습니다.
- 카카오톡 공유를 클릭하면 카카오톡과 연결되어 친구에게 공유할 수 있습니다.
- URL 공유를 클릭하면 URL이 복사됩니다.
- 외부를 클릭하면 창이 닫힙니다.

#### 5-3. [메세지 상세 보기]
<p align="center">
<img src="https://github.com/un0211/ro1ling/assets/135966211/8ac46036-f543-4b12-acac-335da37f9648">
</p>

- 메세지 카드를 클릭하면 모달을 통해 메세지를 상세 조회할 수 있습니다.
- 모달 외 영역과, 확인 버튼을 클릭하면 모달창이 닫힙니다.

#### 5-4. [메세지 삭제]
<p align="center">
<img src="https://github.com/un0211/ro1ling/assets/135966211/abdffbd2-8ca1-4937-95c8-351efb9a0293">
</p>

- 별도의 로그인 기능이 없어 누구나 삭제할 수 있습니다.
- 삭제하고 싶은 메세지 카드를 선택해 여러 개 삭제할 수 있습니다.
- 삭제할 메세지를 한 개 이상 선택 시 삭제하기 버튼이 활성화됩니다.
- 메세지 삭제 후 해당 롤링페이퍼 페이지로 이동합니다.

#### 5-5. [롤링페이퍼 삭제]
<p align="center">
<img src="https://github.com/un0211/ro1ling/assets/135966211/8ffa6b9e-e46f-4ad3-8e99-46d1d5675300">
</p>

- 별도의 로그인 기능이 없어 누구나 삭제할 수 있습니다.
- 롤링페이퍼 삭제 후 롤링페이퍼 리스트 페이지로 이동합니다.


### 6. 메시지 생성 페이지
// TODO: 세민님

### 7. 404 페이지
<p align="center">
<img src="https://github.com/un0211/ro1ling/assets/24778465/bf26b8f6-6c23-4e2b-8737-095c25efb112">
</p>

- 유효하지 않은 주소로 접근하는 경우 404 페이지로 이동합니다.

## 개선 사항

### 전체보기 페이지 추가
- 원인: 롤링페이퍼 수가 많아지면 캐러셀, 가로 스크롤로 원하는 롤링페이퍼를 찾기 어렵다.
- 개선방안: 전체 롤링페이퍼를 확인할 수 있는 페이지를 만들고 원하는 페이지를 검색할 수 있는 기능을 추가했다.

### 롤링페이퍼 페이지에서 메시지 선택 삭제
- 원인: 여러개의 메시지를 삭제하고 싶을 때 일일이 확인하면 번거롭다.
- 개선방안: 삭제하고 싶은 메세지를 모두 선택하고 삭제할 수 있도록 하여 확인의 번거로움을 줄였다.

### 롤링페이퍼 페이지에서 뒤로가기/취소 버튼 추가
- 원인: 브라우저의 뒤로가기 버튼은 이전 페이지로만 이동한다.
- 개선방안: 롤링페이퍼 페이지에서는 목록 페이지로 이동하는 버튼을, 롤링페이퍼 수정 중에는 수정을 취소하는 버튼을 추가했다.

### 애니메이션 추가
- 사용자 경험 개선을 위해 클릭 가능한 요소(버튼, 카드)의 크기가 변하도록 애니메이션 효과를 추가했다.
- 서버에서 데이터를 불러오는 동안 로딩중이라는 것을 알기 쉽도록 스켈레톤을 추가했다.

## 트러블 슈팅

// TODO - ALL: 있으면 적기

## 프로젝트 후기
### 김서영
// TODO: 서영님

### 김세민
// TODO: 세민님

### 류혜원
// TODO: 혜원

### 장익재
- 이번 롤링페이퍼 홈페이지 팀 프로젝트를 통해 웹개발의 기본을 익히는 동시에 팀워크의 중요성을 깨달았습니다. 혼자 해결하려다 작업이 지연되어 팀원들에게 피해를 끼쳤지만, 팀원들의 도움 덕분에 문제를 해결할 수 있었습니다. 이 경험을 통해 협력과 소통의 중요성을 깊이 느꼈고, 앞으로는 더 효율적으로 시간 관리를 하며 팀과 적극적으로 소통하겠습니다.

### 홍서하
- 혼자 작업할 때보다 훨씬 즐거웠습니다. 초반에 구현하고자 하는 요구사항에 그치지 않고, 개선할 부분을 계속해서 찾고자 노력하고 어느정도 구현했다는 부분이 만족스러웠습니다. 문제 해결을 위해 다방면으로 알아보고 노력하는 것도 물론 좋지만, 함께 기간을 정해두고 작업하는 것이므로, 고민하고 있는 부분이 다른 사람에게 있어서는 금방 해결할 수 있는 것이라면 시간을 낭비하지 않고 도움을 청하는 게 훨씬 도움이 된다고 느꼈습니다.
---

리드미 구성 참고: https://github.com/likelion-project-README/README

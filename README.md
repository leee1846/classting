# Classting

## Installation & Run
```
1. git clone https://github.com/leee1846/classting.git

2. npm install

3. npm run start
```

## Folder Structure
```
|src
|-- apis { api 첫번째 path기준으로 파일이 구성된 api함수 }
|-- components { Global폴더를 제외한 page기준으로 폴더 구성된 components  }
|-- constants { 재사용 상수 및 object }
|-- globalState { 전역으로 관리되는 state }
|-- pages { page기준으로 폴더가 구성된 page file }
|-- utils { util 함수 }
```

## Specification
#### library 및 version
```
React : 18.2.0
react-router-dom : 6.4.1
styled-components : 5.3.6
zustand : 3.7.1
amcharts/amcharts4 : 4.10.28
craco : 0.0.3
```

## Requirements

### 1. 필수 구현
- [x]  사용자는 ‘퀴즈 풀기’ 버튼을 클릭하여 퀴즈 풀기를 시작할 수 있다.
- [x]  사용자는 문항에 대한 답안을 4개 보기 중에 선택할 수 있다.
- [x]  사용자는 답안을 선택하면 다음 문항을 볼 수 있다.
    - [x]  답안 선택 후 다음 문항 버튼을 볼 수 있다.
    - [x]  답안이 맞았는지 틀렸는지 바로 알 수 있다.
    - [x]  다음 문항 버튼을 클릭하여 다음 문항으로 이동할 수 있다.
- [x]  모든 문항을 다 풀면 사용자는 다음과 같은 결과 정보를 볼 수 있다.
    - [x]  퀴즈를 마칠 때까지 소요된 시간
    - [x]  정답 개수
    - [x]  오답 수

### 2. 추가 구현
- [x]  정 오답에 대한 비율을 차트로 표기
- [x]  다시 풀기
- [x]  오답 노트
- [ ]  테스트 코드

## Explanation
```
첫 페이지에서 퀴즈풀기 버튼 클릭시 api요청과 함께 문제풀이 페이지로 이동합니다.
문제는 총5개 사지선다형으로 구성되어있습니다.
모든 문제를 완료하면 결과 페이지로 이동하며, 결과 내용과 차트 그리고 오답노트를 볼수 있습니다.

학습부족으로 테스트 코드는 작성하지 못하였습니다.
```
# react-router-dom 사용하기 (v6)
## 1. App()
    function App() {
      return (
          <BrowserRouter>
            <div className="App">
              <header className="App-header">
                <Routes>
                  <Route path="/" element={<DayList/>}/>
                  <Route path="/day/:day" element={<Day/>}/>
                </Routes>
              </header>
            </div>
          </BrowserRouter>
      );
    }
### 1. BrowerRouter
#### BrowserRouter는 URL과 UI를 동기해주는 <Router>이다. 페이지를 새로고침하지 않아도 주소와 관련된 정보조회를 업데이트 및 접근을 도와준다. BrowserRouter는 리액트 라우터 돔을 적용하고 싶은 컴포넌트의 최상위 컴포넌트를 감싸면 된다.
### 감싸지 않을 경우 url과 ui를 연결하지 못하여 빈 화면이 나온다.
#  
### 2. Routes
#### v5에서는 <Switch>로 사용하지만 v6에서 <Routes>로 대신 사용한다. 이는 <Route>들을 grouping한다.
#  
### 3. Route
#### url과 ui를 연결한다.
#
### 4. map/filter
#### map/filter.(()=>{}) 꼴로 사용할 수 있으며 첫 번째 파라미터는 순회한 객체, 두 번째 파라미터는 index를 뜻한다. 주의할 점은 data = {'id':[], 'day':[]} 일때 data.id.map()을 실행해도 첫 번째 파라메터는 id값을 가지느게 아닌 {id, day} 값을 가진다.

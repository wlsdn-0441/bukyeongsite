import { NavLink, Outlet } from "react-router-dom";
import { ThemeToggle } from "../common/ThemeContext";
//루트 레이아웃 컴포넌트 맨위에 뜨는 네비게이션 바 구현 가능파트
export default function RootLayout() {
    return (

        
        <div className="">
            <header style={{ display: "flex", justifyContent: "flex-end", padding: "1rem" }}>
                <div className="">
                    <header style={{ display: "flex", justifyContent: "flex-end", padding: "1rem" }}>
                        <ThemeToggle /> {/* 다크/라이트 모드 버튼 */}
                    </header>

                    <main style={{ padding: "2rem" }}>
                        <h1>테마 전환 테스트</h1>
                        <p>이 페이지는 다크/라이트 모드 전환이 가능합니다.</p>
                    </main>
                </div>

                <nav>

                    <button><NavLink to="/">Home</NavLink></button>

                    <button><NavLink to="/about">About</NavLink></button>

                    <button><NavLink to="/help">Help</NavLink></button>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    );
}
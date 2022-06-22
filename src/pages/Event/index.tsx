import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { Video } from "../../components/Video";

export function Event(){
    return(
        <>
            <Header />
            <main>
                <Video />
                <SideBar />
            </main>
        </>        
    )
}
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { Video } from "../../components/Video";

export function Event(){
    return(
        <div className="flex flex-col">
            <Header />
            <main className="flex">
                <Video />
                <SideBar />
            </main>
        </div>        
    )
}
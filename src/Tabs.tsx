import type{ TabItem } from "./Content"
import "./Tabs.css"

type TabsProps = {
    tabs:TabItem[],
    selectTab:(tabId:string)=>void
}

function Tabs({tabs,selectTab}:TabsProps) {

    return (
        <div className="tabs">
            {tabs.map((tab)=>(
                <div className="tab" key={tab.id} onClick={()=>selectTab(tab.id)}>{tab.name}</div>
            ))}
        </div>
    )
}

export default Tabs
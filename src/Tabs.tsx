import { useEffect, useState } from "react"

import Tab from "./Tab";
import type{ TabItem } from "./Tab"
import type { Todo } from "./Content";

import "./Tabs.css"

type TabsProps = {
    todos:Todo[],
    deleteTodo:(id:number)=>void
}

function Tabs({todos, deleteTodo}:TabsProps) {
    const tabAll = {
        "id":"all", 
        "name": "ALL"
    }
    const [tabs, setTabs] = useState<TabItem[]>(()=>{
        const saved = localStorage.getItem("tabs");
        return saved ? JSON.parse(saved): [tabAll];
    })

    const [tab, setTab] = useState<TabItem>(tabAll);

    const onClick = (id:string)=>{
        const selectedTab = tabs.find(tab=>tab.id===id)
        if (selectedTab===undefined) {
            setTab(tabAll)
        } else {
            setTab(selectedTab);
        }
    }
    

    useEffect(()=>{
        localStorage.setItem("tabs", JSON.stringify(tabs));
    }, [tabs]);
    
    return (
        <div className="tabs">
            {tabs.map((tab)=>(
                <div className="tab" key={tab.id} onClick={()=>onClick(tab.id)}>{tab.name}</div>
            ))}
            <Tab tabItem={tab} todos={todos} deleteTodo={deleteTodo} />
        </div>
    )
}

export default Tabs
import React from "react"
import Menu from "./menu"

export default props => (
    <aside className="main-sidebar">
        <section className="sidebar">
            <Menu  isAdmin={true}  ></Menu>
        </section>
    </aside>
)
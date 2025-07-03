"use client";
import Sidebar from "@/components/Sidebar";
export default function AdminLayout({ children }) {

    return (
        <div>
            <Sidebar>
            <main>{children}</main>
            </Sidebar>
        </div>
    );
}
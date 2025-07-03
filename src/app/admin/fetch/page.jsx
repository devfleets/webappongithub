"use client";
import { db } from "@/firebase/firebase";
import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";

async function fetchDataFromFirestore() {
    const querySnapshot = await getDocs(collection(db, "clients"))

    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
    });
    return data;
}

const Admin = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchDataFromFirestore();
            setUserData(data);
        }
        fetchData();
    }, []);
    return (
        <>
            <h1>Fetch Data from Firestore</h1>
            <div>
                {userData.map((client) => (
                    <div key={client.id}>
                        <p>{client.companyName}</p>
                        <p>{client.companyEmail}</p>
                        <p>{client.companyPhone}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Admin;
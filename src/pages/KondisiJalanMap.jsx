import React from 'react'

export default function KondisiJalanMap() {
    React.useEffect(() => {
        document.title = "Kondisi Jalan - Sistem Informasi Idul Fitri"
     }, []);
    return (
        <iframe src="https://atcs.sumedangkab.go.id:8080/" style={{height: "100vh", width: "100%"}} frameborder="0"></iframe>
    )
}

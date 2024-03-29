// /* eslint-disable @next/next/no-img-element */
// export default function Home() {
//   return (
//     <div className="container mt-2 mx-auto">
//       <p style={{
//         width: '500px',
//         height: '500px',
//         backgroundImage: 'url("/bg-over.png")',
//         backgroundSize: 'cover'
//       }}>
//         <p className="text-5xl">พารามา <br />
//           มาม่า คาเฟ่</p>
//         <p>บรันช์สุดโปรดแห่งใหม่ของคุณกำลังจะมาเปิดที่
//           <b> นอร์ธ ฟอร์ตเบอร์รี! </b><br />
//           เข้าร่วมรายชื่อผู้รับจดหมายของเราเพื่อใช้ประโยชน์จากโปรโมชันของเราทั้งหมดก่อนใคร</p>
//         <button className="bg-sky-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">รับสิทธิ์ก่อนใคร!</button>
//       </p>
//     </div>
//   );
// }
// /* eslint-disable @next/next/no-img-element */
// export default function Home() {
//   return (
//     <div className="container mt-2 mx-auto">
//       <div style={{
//         width: '500px',
//         height: '500px',
//         backgroundImage: 'url("/bg-over.png")',
//         backgroundSize: 'cover',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         textAlign: 'center'
//       }}>
//         <div className="text-5xl">พารามา <br />
//           มาม่า คาเฟ่</div>
//         <div>บรันช์สุดโปรดแห่งใหม่ของคุณกำลังจะมาเปิดที่
//           <b> นอร์ธ ฟอร์ตเบอร์รี! </b><br />
//           เข้าร่วมรายชื่อผู้รับจดหมายของเราเพื่อใช้ประโยชน์จากโปรโมชันของเราทั้งหมดก่อนใคร</div>
//         <button className="bg-sky-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">รับสิทธิ์ก่อนใคร!</button>
//       </div>
//     </div>
//   );
// }
/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div className="container mt-2 mx-auto">
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end', // จัดเรียง element ให้อยู่ทางขวา
        alignItems: 'center', // จัดให้ element อยู่ตรงกลางแนวตั้ง
      }}>
        <div>
          <div className="text-5xl mb-5">พารามา <br />
            มาม่า คาเฟ่</div>
          <div className="mb-5">บรันช์สุดโปรดแห่งใหม่ของคุณกำลังจะมาเปิดที่
            <b> นอร์ธ ฟอร์ตเบอร์รี! </b><br />
            เข้าร่วมรายชื่อผู้รับจดหมายของเราเพื่อใช้ประโยชน์จากโปรโมชันของเราทั้งหมดก่อนใคร</div>
          <div className="text-center">
            <button className="bg-sky-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">รับสิทธิ์ก่อนใคร!</button>
          </div>
        </div>
        <div style={{
          width: '600px',
          height: '500px',
          backgroundImage: 'url("/bg-over.png")',
          backgroundSize: 'cover',
          marginLeft: '40px' // เพิ่มระยะห่างด้านซ้ายของรูปภาพ
        }}></div>
      </div>
    </div>
  );
}
/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div className="container mt-2 mx-auto">
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
        <div>
          <div className="text-5xl mb-5">พารามา <br />
            มาม่า คาเฟ่</div>
          <div className="mb-5">บรันช์สุดโปรดแห่งใหม่ของคุณกำลังจะมาเปิดที่
            <b> นอร์ธ ฟอร์ตเบอร์รี! </b><br />
            เข้าร่วมรายชื่อผู้รับจดหมายของเราเพื่อใช้ประโยชน์จากโปรโมชันของเราทั้งหมดก่อนใคร</div>
          <div className="text-center">
            <button className="bg-sky-800 hover:bg-gray-200 hover:text-black text-white font-bold py-2 px-4 rounded">รับสิทธิ์ก่อนใคร !</button>
          </div>
        </div>
        <div style={{
          width: '500px',
          height: '500px',
          backgroundImage: 'url("/bg-over.png")',
          backgroundSize: 'cover',
          marginLeft: '80px'
        }}></div>
      </div>
      <div className="mt-10 text-3xl text-center">ฟีเจอร์เด่นของ CHONG FIFI</div>
    </div>
  );
}
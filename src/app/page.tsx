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
          <div className="text-5xl mb-5">CHONG FIFI</div>
          <div className="mb-5">เหมาะสำหรับร้านอาหารทุกประเภท ใช้งานง่าย สะดวก รวดเร็ว ช่วยให้คุณจัดการร้านอาหารได้อย่างมืออาชีพ เพิ่มประสิทธิภาพ เพิ่มยอดขาย และนำธุรกิจของคุณไปสู่อนาคต</div>
          <div>
            <ul>
              <li><b>ทดลองใช้งานฟรี</b> 30 วัน</li>
              <li><b>พิเศษ</b> โปรโมชั่นเปิดตัว สมัครสมาชิกวันนี้ รับส่วนลดทันที 10%</li>
              <li><b>อย่ารอช้า</b> ปลดล็อกศักยภาพของร้านอาหารคุณด้วย CHONG FIFI</li>
            </ul>
          </div>
          <div className="text-center mt-5">
            <button className="bg-sky-800 hover:bg-gray-200 hover:text-black text-white font-bold py-2 px-4 rounded">รับสิทธิ์ก่อนใคร !</button>
          </div>
        </div>
        <div style={{
          width: '1000px',
          height: '500px',
          backgroundImage: 'url("/bg-over.png")',
          backgroundSize: 'cover',
          marginLeft: '80px'
        }}></div>
      </div>
      <div className="mt-10 text-3xl text-center">CHONG FIFI: ผู้ช่วยอัจฉริยะที่จะปลดล็อกศักยภาพของร้านอาหารคุณ</div>
      <div className="mt-5 text-2xl"><b>เบื่อไหม</b> กับปัญหาเดิมๆ ในการจัดการร้านอาหาร?
      <ul className="list-disc">
        <li>พนักงานรับออเดอร์ผิดพลาดบ่อย</li>
        <li>ลูกค้ารอคิวนาน</li>
        <li>จัดการสต๊อกวัตถุดิบไม่ทัน</li>
        <li>ขาดข้อมูลวิเคราะห์เพื่อพัฒนาธุรกิจ</li>
      </ul>
      </div>
    </div>
  );
}
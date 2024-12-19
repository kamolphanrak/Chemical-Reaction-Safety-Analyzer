function analyzeSafety() {
    // รับค่าจากฟอร์ม
    const reaction = document.getElementById('reaction').value.trim();
    const substance = document.getElementById('substance').value.trim();
    const amount = parseFloat(document.getElementById('amount').value);

    // สมมุติว่ามีสูตรพื้นฐานในการคำนวณความเสี่ยง เช่น การปลดปล่อยความร้อน
    let riskLevel = "ต่ำ";
    let safetyRecommendation = "ปลอดภัย";

    // ตัวอย่างสมการการคำนวณ (สมมุติว่า 1 กรัมของสารตั้งต้นทำให้ปลดปล่อยความร้อน X)
    let heatRelease = amount * 50;  // หน่วยความร้อนที่ปล่อยออกมา (Joules)

    // สมมุติการคำนวณความเสี่ยง (ถ้าความร้อนที่ปล่อยออกมามากเกินไปจะเพิ่มความเสี่ยง)
    if (heatRelease > 1000) {
        riskLevel = "สูง";
        safetyRecommendation = "ควรปรับลดอัตราส่วนสารตั้งต้นหรือลดอุณหภูมิ";
    } else if (heatRelease > 500) {
        riskLevel = "ปานกลาง";
        safetyRecommendation = "ตรวจสอบการระบายความร้อนและปริมาณสาร";
    }

    // แสดงผลการวิเคราะห์ความปลอดภัย
    const resultText = `
        ความเสี่ยงในการเกิดอุบัติเหตุจากปฏิกิริยานี้:
        <ul>
            <li>ระดับความเสี่ยง: ${riskLevel}</li>
            <li>การปลดปล่อยความร้อน: ${heatRelease} Joules</li>
        </ul>
    `;
    document.getElementById('output').innerHTML = resultText;

    // แสดงคำแนะนำ
    document.getElementById('recommendation').innerHTML = safetyRecommendation;
}

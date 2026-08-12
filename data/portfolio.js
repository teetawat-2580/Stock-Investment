const portfolioData = {
  lastUpdated: "2026-01-03",
  holdings: [
    {
      type: "streaming",
      name: "GULF",
      portPct: 21.73,
      totalTHB: 21410.90,
      updateDate: "2026-01-03",
      interestCondition: null,
      remark: "streaming ถอนขั้นต่ำ: 5,000 บาท ต่อรายการ",
      treasuryStock: true
    },
    {
      type: "streaming",
      name: "CPALL",
      portPct: 27.44,
      totalTHB: 27045.36,
      updateDate: "2026-01-03",
      interestCondition: null,
      remark: "streaming ถอนขั้นต่ำ: 5,000 บาท ต่อรายการ",
      treasuryStock: true
    },
    {
      type: "Dime! save",
      name: "Dime! Save",
      portPct: 9.14,
      totalTHB: 9010.58,
      updateDate: "2026-01-03",
      interestCondition: "ส่วนที่ไม่เกิน 10,000 บาท: รับดอกเบี้ยสูงถึง 3.00% ต่อปี",
      remark: null,
      treasuryStock: false
    },
    {
      type: "Dime! FCD",
      name: "Dime! FCD (USD)",
      portPct: 0.48,
      totalTHB: 470.74,
      updateDate: "2026-01-03",
      interestCondition: "ส่วนที่ไม่เกิน 3,000 USD (ประมาณ 1 แสนบาท): รับดอกเบี้ยสูงปรี๊ด 5.00% ต่อปี",
      remark: null,
      treasuryStock: false
    },
    {
      type: "Dime! USD",
      name: "AMZN",
      portPct: 7.21,
      totalTHB: 7107.45,
      updateDate: "2026-01-03",
      interestCondition: null,
      remark: null,
      treasuryStock: false
    },
    {
      type: "Dime! USD",
      name: "NVDA",
      portPct: 7.15,
      totalTHB: 7046.61,
      updateDate: "2026-01-03",
      interestCondition: null,
      remark: null,
      treasuryStock: false
    },
    {
      type: "Dime! USD",
      name: "CRWD",
      portPct: 6.38,
      totalTHB: 6291.66,
      updateDate: "2026-01-03",
      interestCondition: null,
      remark: null,
      treasuryStock: false
    },
    {
      type: "Gold now",
      name: "Gold",
      portPct: 17.83,
      totalTHB: 17567.87,
      updateDate: "2026-01-03",
      interestCondition: null,
      remark: null,
      treasuryStock: false
    },
    {
      type: "bangkok e-saving",
      name: "Bangkok e-Saving",
      portPct: 2.64,
      totalTHB: 2598.50,
      updateDate: "2026-01-03",
      interestCondition: "วงเงินไม่เกิน 1 ล้านบาท: รับดอกเบี้ย 1.35% ต่อปี",
      remark: null,
      treasuryStock: false
    }
  ],
  get totalTHB() {
    return this.holdings.reduce((s, h) => s + h.totalTHB, 0);
  }
};

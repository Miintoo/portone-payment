import { useEffect } from 'react';

const IMP = window.IMP;
function App() {
  useEffect(() => {
    IMP.init('imp14397622');
  });

  const handlePayment = () => {
    IMP.request_pay(
      {
        pg: 'html5_inicis',
        pay_method: 'card',
        escrow: false,
        merchant_uid: 'test_llg8qnxh',
        name: '테스트 결제',
        amount: 10,
        buyer_tel: '010-0000-0000',
      },
      function (rsp) {
        console.log(rsp);
      }
    );
  };

  return <button onClick={handlePayment}>결제하기</button>;
}

export default App;

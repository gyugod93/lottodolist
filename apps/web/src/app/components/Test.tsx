'use client';
const Test = () => {
  const test = () => {
    alert('hi');
  };
  return (
    <>
      <div>Test</div>
      <input placeholder="목표"></input>
      <button onClick={test}>설정</button>
    </>
  );
};

export default Test;

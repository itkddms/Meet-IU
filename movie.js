// 미디어쿼리 적용 코드

const drama = document.querySelector(".drama");

// 마우스를 올렸을 때 이벤트 처리
drama.addEventListener("mouseover", () => {
    // 마우스를 올렸을 때 원하는 동작 수행
    console.log("Mouse over drama!");


    // 예시로 스크롤 이벤트 추가s
    const wheelHandler = (e) => {
        const delta = Math.sign(e.deltaY);
        drama.scrollLeft += delta * (window.innerWidth < 520 ? 529: 790);
        e.preventDefault();
        console.log("Mouse y");
    };

    drama.addEventListener("wheel", wheelHandler);

    // 창 크기가 변경될 때 이벤트 리스너 추가
    window.addEventListener("resize", () => {
        const scrollAmount = window.innerWidth < 520 ? 600 : 900;
        drama.scrollLeft = Math.round(drama.scrollLeft / scrollAmount) * scrollAmount; // 스크롤 위치를 조절
    });

});

// 마우스를 벗어났을 때 이벤트 처리
drama.addEventListener("mouseout", () => {
    // 마우스를 벗어났을 때 원하는 동작 수행
    console.log("Mouse out of drama!");

    // 추가로 다른 이벤트를 처리하고 싶다면 여기에 작성
    

    
});




const modalOpenButton = document.getElementById('menu');
const modalCloseButton = document.getElementById('modalCloseButton');
const modal = document.getElementById('modalContainer');

modalOpenButton.addEventListener('click', () => {
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
});

modalCloseButton.addEventListener('click', () => {
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
});


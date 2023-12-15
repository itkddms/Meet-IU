// 미디어쿼리 적용 코드

const album = document.querySelector(".album");

// 마우스를 올렸을 때 이벤트 처리
album.addEventListener("mouseover", () => {
    // 마우스를 올렸을 때 원하는 동작 수행
    console.log("Mouse over album!");


    // 예시로 스크롤 이벤트 추가
    const wheelHandler = (e) => {
        const delta = Math.sign(e.deltaY);
        album.scrollLeft += delta * (window.innerWidth < 520 ? 590 : 840);
        e.preventDefault();
        console.log("Mouse y");
    };

    album.addEventListener("wheel", wheelHandler);

    // 창 크기가 변경될 때 이벤트 리스너 추가
    window.addEventListener("resize", () => {
        const scrollAmount = window.innerWidth < 520 ? 600 : 900;
        album.scrollLeft = Math.round(album.scrollLeft / scrollAmount) * scrollAmount; // 스크롤 위치를 조절
    });

});

// 마우스를 벗어났을 때 이벤트 처리
album.addEventListener("mouseout", () => {
    // 마우스를 벗어났을 때 원하는 동작 수행
    console.log("Mouse out of album!");

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





// 원래 코드

// const album = document.querySelector(".album");

// // 마우스를 올렸을 때 이벤트 처리
// album.addEventListener("mouseover", () => {
//     // 마우스를 올렸을 때 원하는 동작 수행
//     console.log("Mouse over album!");

//     // 예시로 스크롤 이벤트 추가
//     album.addEventListener("wheel", (e) => {
//         const delta = Math.sign(e.deltaY);
//         album.scrollLeft += delta * 900;
//         e.preventDefault();
//     });
// });

// if(window.innerWidth < 510){
//     album.addEventListener("wheel", (e) => {
//         const delta = Math.sign(e.deltaY);
//         album.scrollLeft += delta * 100;
//         e.preventDefault();
//     });
// }
// // 마우스를 벗어났을 때 이벤트 처리
// album.addEventListener("mouseout", () => {
//     // 마우스를 벗어났을 때 원하는 동작 수행
//     console.log("Mouse out of album!");

//     // 추가로 다른 이벤트를 처리하고 싶다면 여기에 작성
    

    
// });


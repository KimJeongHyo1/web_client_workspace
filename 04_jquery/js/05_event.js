/**
 * mouseover/mouseout / 요소위로 커서 올라갈때 / 커서 나갈때
 *  - 자식요소 접근시에도 이벤트 발생
 * mouseenter/mouseleave
 *  - 자식요소 접근시에도 이벤트 발생 안함
 */
$(".outer")
//     .mouseover(() => {
//         console.log('mouseover');
// })
//     .mouseout(() =>{
//         console.log('mouseout');
// })
//     .mouseenter(() => {
//         console.log('mouseenter');
// })
//     .mouseleave(() =>{
//         console.log('mouseleave');
// })


// hover이벤트는 존재하지 않는다.
.hover(() => {
    console.log('mouseenter');
}, () => {
    console.log('mouseleave');
});



$(title).hover((e) => {
    $(e.target).addClass('reverse');
}, (e) => {
    $(e.target).removeClass('reverse');
});



$(counter).on('click', (e) => {
    let n = $(e.target).html();
    $(e.target).html(--n);

    if(n == 0)
    $(e.target).off('click'); // 이벤트 핸들러 제거
});

// 일회용
$(one).one('click', (e) => {
    console.log('🍣🍣🍣');
    $(e.target).html('🍣🍣🍣');
});



// triger event
$(trg).on('click', (e) => {
    $(counter).trigger('click'); // 클릭이벤트 발생
});




$(memo).on('keyup', (e) => {
// $(memo).keyup((e) => { -> 이렇게 써도 됌
    // console.log(e.target.value);
    const len = e.target.value.length;
    const color = len > 30 ? 'red' : 'initial';
    const fontWeight = len > 30 ? 700 : 400;
    $("#len")
        .html(len)
        .css('color', color)
        .css('fontWeight', fontWeight);
});


$(document.memoFrm).submit((e) => {
    const $memo = $(e.target.memo); // $ 넣어서 이 변수가 jquery라는것 표시
    if($memo.val().length > 30) {
        e.preventDefault();
    }


    // 초기화 (jquert객체에 reset없어서 자바스크립트객체 꺼내서 reset해줘야함)
    // jquery객체에는 reset이 없다.
    // $(e.target)[0].reset();
    $(e.target).get(0).reset();
});

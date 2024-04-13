const ShareTitle = "붕어빵 심리테스트 결과";
const ShareDes = "붕어빵 심리테스트 검사 결과를 확인하세요 !";
const ShareImgUrl =
  "https://image.msscdn.net/images/goods_img/20221126/2961807/2961807_1_500.jpg";
const ShareUrl = window.location.href;

// 클립보드 링크 공유하기
const clip = () => {
  navigator.clipboard.writeText(ShareUrl);

  alert("링크가 복사 되었습니다 !");
};

// 카카오톡 공유하기
function sendLinkDefault() {
  try {
    Kakao.Link.sendDefault({
      // 해당 칸 설정은 kakaodeveloper 참조
      objectType: "feed", // 전송 메세지 형식
      content: {
        // 메시지 전송시 타이틀 및 설명, 클릭시 이동 링크
        title: ShareTitle,
        description: ShareDes,
        imageUrl: ShareImgUrl,
        link: {
          mobileWebUrl: ShareUrl,
          webUrl: ShareUrl,
        },
      },
      buttons: [
        {
          // 버튼에 표기되는 이름
          title: "자세히 보기",
          link: {
            mobileWebUrl: ShareUrl,
            webUrl: ShareUrl,
          },
        },
      ],
    });

    window.kakaoDemoCallback && window.kakaoDemoCallback();
  } catch (e) {
    window.kakaoDemoException && window.kakaoDemoException(e);
  }
}

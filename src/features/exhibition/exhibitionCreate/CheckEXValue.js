export const CheckEXValue = (
  exhibition,
  exhibitionKind,
  posturl,
  urls,
  PostUpdateEX
) => {
  if (!exhibition.startDate) {
    alert("전시 시작일을 입력 하셔야 합니다");
    return;
  } else if (!exhibition.endDate) {
    alert("전시 종료일을 입력 하셔야 합니다");
    return;
  } else if (exhibitionKind === "EK0002" && !exhibition.exhibitionLink) {
    alert("전시회링크를 입력 하셔야 합니다");
    return;
  } else if (!exhibition.exhibitionTitle) {
    alert("전시회 제목을 입력 하셔야 합니다");
    return;
  } else if (!exhibition.exhibitionDesc) {
    alert("전시회 설명을 입력 하셔야 합니다");
    return;
  } else if (!exhibition.entranceFee) {
    alert("입장료를 입력 하셔야 합니다");
    return;
  } else if (!exhibition.openTime) {
    alert("개장시간을 입력 하셔야 합니다");
    return;
  } else if (!exhibition.closeTime) {
    alert("마감시간을 입력 하셔야 합니다");
    return;
  } else if (!exhibition.exhibitionCategoty) {
    alert("전시 분류를 입력 하셔야 합니다");
    return;
  } else if (exhibition.authors.length === 0) {
    alert("작가를 입력 하셔야 합니다");
    return;
  } else if (!exhibition.location) {
    alert("상세주소를 입력 하셔야 합니다");
    return;
  } else if (!exhibition.exhibitionHost) {
    alert("전시주최를 입력 하셔야 합니다");
    return;
  } else if (!posturl) {
    alert("포스터를 입력하셔야 합니다.");
    return;
  } else if (
    !exhibition.detailLocation.zonecode &&
    !exhibition.detailLocation.address &&
    !exhibition.detailLocation.addressEnglish &&
    !exhibition.detailLocation.addressType &&
    !exhibition.detailLocation.buildingName &&
    !exhibition.detailLocation.buildingCode &&
    !exhibition.detailLocation.roadAddress &&
    !exhibition.detailLocation.roadAddressEnglish &&
    !exhibition.detailLocation.autoJibunAddress &&
    !exhibition.detailLocation.autoJibunAddressEnglish &&
    !exhibition.detailLocation.roadname &&
    !exhibition.detailLocation.roadnameCode &&
    !exhibition.detailLocation.roadnameEnglish
  ) {
    alert("주소를 입력 하셔야 합니다.");
    return;
  } else {
    PostUpdateEX({
      ...exhibition,
      postImage: posturl,
      artImage: urls,
      exhibitionKind,
    });
  }
};

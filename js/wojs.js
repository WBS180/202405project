// projects-스펙
var aboutImage = document.getElementById("about-image");
var aboutText = document.getElementById("about-text");
aboutImage.style.opacity = "1";
aboutText.style.opacity = "0";

var contxet = document.getElementById("contact")

 // 이미지에 마우스가 올라갔을 때 이벤트 처리
 aboutImage.addEventListener("mouseover", function() {
    // 이미지의 투명도를 0.5로 설정하여 줄임
    aboutImage.style.opacity = "0.5";
    // 이미지의 너비와 높이를 600px로 변경하여 크기를 키움
    aboutImage.style.width = "450px";
    aboutImage.style.height = "400px";
    // 텍스트의 투명도를 0.7로 설정하여 나타나도록 함
    aboutText.style.opacity = "0.7";
});

// 이미지에서 마우스가 벗어났을 때 이벤트 처리
aboutImage.addEventListener("mouseout", function() {
    // 이미지의 투명도를 1로 설정하여 원래대로 복원
    aboutImage.style.opacity = "1";
    // 이미지의 너비와 높이를 300px로 변경하여 크기를 줄임
    aboutImage.style.width = "150px";
    aboutImage.style.height = "150px";
    // 텍스트의 투명도를 0으로 설정하여 사라지도록 함
    aboutText.style.opacity = "0";
});

//projects-프로젝트
    // 이미지와 텍스트의 초기 투명도 설정
    var projectImage = document.getElementById("project-image");
    var projectText = document.getElementById("project-text");
    projectImage.style.opacity = "1";
    projectText.style.opacity = "0";

    // 이미지에 마우스가 올라갔을 때 이벤트 처리
    projectImage.addEventListener("mouseover", function() {
        // 이미지의 투명도를 0.5로 설정하여 줄임
        projectImage.style.opacity = "0.5";
        // 이미지의 너비와 높이를 600px로 변경하여 크기를 키움
        projectImage.style.width = "640px";
        projectImage.style.height = "500px";
        // 텍스트의 투명도를 0.7로 설정하여 나타나도록 함
        projectText.style.opacity = "0.7";
        contxet.style.height = "600px";
    });

    // 이미지에서 마우스가 벗어났을 때 이벤트 처리
    projectImage.addEventListener("mouseout", function() {
        // 이미지의 투명도를 1로 설정하여 원래대로 복원
        projectImage.style.opacity = "1";
        // 이미지의 너비와 높이를 300px로 변경하여 크기를 줄임
        projectImage.style.width = "300px";
        projectImage.style.height = "150px";
        // 텍스트의 투명도를 0으로 설정하여 사라지도록 함
        projectText.style.opacity = "0";
    });
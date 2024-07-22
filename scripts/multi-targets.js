
// Definindo targets
const targetSaoMiguel = document.querySelector("#angelTarget");
const targetPeixe = document.querySelector("#peixeTarget");
const targetGiboia = document.querySelector("#giboiaTarget");
const targetDragao = document.querySelector("#dragaoTarget");

// Imagens com o nome dos botoes
const aboutImg = document.querySelector("#about-text-image");
const infoImg = document.querySelector("#info-text-image");
const descriptionImg = document.querySelector("#description-text-image");

// Botões do São Miguel
const buttonVoltarSaoMiguel = document.querySelector("#profile-button2-angel");
const buttonSobreAutorSaoMiguel = document.querySelector("#profile-button-angel");
const buttonInfoSaoMiguel = document.querySelector("#web-button-angel");
const buttonDescriptionSaoMiguel = document.querySelector("#email-button-angel");

// Botões do Peixe
const buttonVoltarPeixe = document.querySelector("#profile-button2-peixe");
const buttonSobreAutorPeixe = document.querySelector("#profile-button-peixe");
const buttonInfoPeixe = document.querySelector("#web-button-peixe");
const buttonDescriptionPeixe = document.querySelector("#email-button-peixe");

// Botões da Giboia
const buttonVoltarGiboia = document.querySelector("#profile-button2-giboia");
const buttonSobreAutorGiboia = document.querySelector("#profile-button-giboia");
const buttonInfoGiboia = document.querySelector("#web-button-giboia");
const buttonDescriptionGiboia = document.querySelector("#email-button-giboia");

// Botões do Dragao
const buttonVoltarDragao = document.querySelector("#profile-button2-dragao");
const buttonSobreAutorDragao = document.querySelector("#profile-button-dragao");
const buttonInfoDragao = document.querySelector("#web-button-dragao");
const buttonDescriptionDragao = document.querySelector("#email-button-dragao");

const showInfo = () => {
  targetFoundSaoMiguel();
  

  targetSaoMiguel.addEventListener('targetLost', event => {
    targetLost();
  });
  targetPeixe.addEventListener('targetLost', event => {
    targetLost();
  });
  targetGiboia.addEventListener('targetLost', event => {
    targetLost();
  });
  targetDragao.addEventListener('targetLost', event => {
    targetLost();
  });
}

function targetFoundSaoMiguel() {
  buttonVoltarSaoMiguel.setAttribute("visible", true);
  buttonSobreAutorSaoMiguel.setAttribute("visible", true);
  buttonInfoSaoMiguel.setAttribute("visible", true);
  buttonDescriptionSaoMiguel.setAttribute("visible", true);

  buttonVoltarSaoMiguel.addEventListener('click', function (evt) {
    evt.preventDefault(); // Previne o comportamento padrão do botão, se necessário
    window.location.href = 'index.html';
  });

  buttonSobreAutorSaoMiguel.addEventListener('click', function (evt) {
    evt.preventDefault();
    targetLost();
    setAboutImgVisible();
    document.querySelector("#video-border-sobre-autor-video-link").setAttribute("visible", true);
    document.querySelector("#sobre-autor-video-link-angel").setAttribute("visible", true);
    document.querySelector("#sobre-autor-video-link-angel").setAttribute("src", "#sobre-autor-angel-video-mp4");
    document.querySelector("#sobre-autor-angel-video-mp4").play();
  });

  buttonInfoSaoMiguel.addEventListener('click', function (evt) {
    evt.preventDefault();
    targetLost();
    setInfoImgVisible();
    document.querySelector("#video-border-info-video-link").setAttribute("visible", true);
    document.querySelector("#info-video-link-angel").setAttribute("visible", true);
    document.querySelector("#info-video-link-angel").setAttribute("src", "#info-angel-video-mp4");
    document.querySelector("#info-angel-video-mp4").play();
  });

  buttonDescriptionSaoMiguel.addEventListener('click', function (evt) {
    evt.preventDefault();
    targetLost();
    setDescriptionImgVisible();
    document.querySelector("#video-border-paintandquest-video-link").setAttribute("visible", true);
    document.querySelector("#paintandquest-video-link-angel").setAttribute("visible", true);
    document.querySelector("#paintandquest-video-link-angel").setAttribute("src", "#description-angel-video-mp4");
    document.querySelector("#description-angel-video-mp4").play();
  });
}

function setAboutImgVisible() {
  descriptionImg.setAttribute("visible", false);
  infoImg.setAttribute("visible", false);
  aboutImg.setAttribute("visible", true);
}

function setInfoImgVisible() {
  descriptionImg.setAttribute("visible", false);
  aboutImg.setAttribute("visible", false);
  infoImg.setAttribute("visible", true);
}

function setDescriptionImgVisible() {
  aboutImg.setAttribute("visible", false);
  infoImg.setAttribute("visible", false);
  descriptionImg.setAttribute("visible", true);
}

function targetLost() {
  // Imagens
  descriptionImg.setAttribute("visible", false);
  infoImg.setAttribute("visible", false);
  aboutImg.setAttribute("visible", false);
  // Bordas
  document.querySelector("#video-border-sobre-autor-video-link").setAttribute("visible", false);
  document.querySelector("#video-border-paintandquest-video-link").setAttribute("visible", false);
  document.querySelector("#video-border-info-video-link").setAttribute("visible", false);
  // All videos
  document.querySelector("#sobre-autor-video-link-angel").setAttribute("visible", false);
  document.querySelector("#paintandquest-video-link-angel").setAttribute("visible", false);
  document.querySelector("#info-video-link-angel").setAttribute("visible", false);
  
  document.querySelector("#sobre-autor-video-link-peixe").setAttribute("visible", false);
  document.querySelector("#paintandquest-video-link-peixe").setAttribute("visible", false);
  document.querySelector("#info-video-link-peixe").setAttribute("visible", false);
  
  document.querySelector("#sobre-autor-video-link-giboia").setAttribute("visible", false);
  document.querySelector("#paintandquest-video-link-giboia").setAttribute("visible", false);
  document.querySelector("#info-video-link-giboia").setAttribute("visible", false);
  
  document.querySelector("#sobre-autor-video-link-dragao").setAttribute("visible", false);
  document.querySelector("#paintandquest-video-link-dragao").setAttribute("visible", false);
  document.querySelector("#info-video-link-dragao").setAttribute("visible", false);
}

const showPortfolio = (done) => {
  const portfolio = document.querySelector("#portfolio-panel");
  const portfolioLeftButton = document.querySelector("#portfolio-left-button");
  const portfolioRightButton = document.querySelector("#portfolio-right-button");
  const paintandquestPreviewButton = document.querySelector("#paintandquest-preview-button");

  let y = 0;
  let currentItem = 0;

  portfolio.setAttribute("visible", true);

  const showPortfolioItem = (item) => {
    for (let i = 0; i <= 2; i++) {
      document.querySelector("#portfolio-item" + i).setAttribute("visible", i === item);
    }
  }
  const id = setInterval(() => {
    y += 0.008;
    if (y >= 0.6) {
      clearInterval(id);
      portfolioLeftButton.setAttribute("visible", true);
      portfolioRightButton.setAttribute("visible", true);
      portfolioLeftButton.addEventListener('click', () => {
        currentItem = (currentItem + 1) % 3;
        showPortfolioItem(currentItem);
      });
      portfolioRightButton.addEventListener('click', () => {
        currentItem = (currentItem - 1 + 3) % 3;
        showPortfolioItem(currentItem);
      });

      paintandquestPreviewButton.addEventListener('click', () => {
        paintandquestPreviewButton.setAttribute("visible", false);
        const testVideo = document.createElement( "video" );
        const canplayWebm = testVideo.canPlayType( 'video/webm; codecs="vp8, vorbis"' );
        if (canplayWebm == "") {
          document.querySelector("#paintandquest-video-link").setAttribute("src", "#description-angel-video-mp4");
          document.querySelector("#description-angel-video-mp4").play();
          
          document.querySelector("#paintandquest-video-link-giboia").setAttribute("src", "#description-giboia-video-mp4");
          document.querySelector("#description-giboia-video-mp4").play();
          
          document.querySelector("#paintandquest-video-link-peixe").setAttribute("src", "#description-peixe-video-mp4");
          document.querySelector("#description-peixe-video-mp4").play();
          
          document.querySelector("#paintandquest-video-link-angel").setAttribute("src", "#description-dragao-video-mp4");
          document.querySelector("#description-dragao-video-mp4").play();
        } else {
          document.querySelector("#paintandquest-video-link").setAttribute("src", "#paintandquest-video-webm");
          document.querySelector("#paintandquest-video-webm").play();
          
          document.querySelector("#paintandquest-video-link-giboia").setAttribute("src", "#paintandquest-video-webm-giboia");
          document.querySelector("#paintandquest-video-webm-giboia").play();
          
          document.querySelector("#paintandquest-video-link-peixe").setAttribute("src", "#paintandquest-video-webm-peixe");
          document.querySelector("#paintandquest-video-webm-peixe").play();
          
          document.querySelector("#paintandquest-video-link-angel").setAttribute("src", "#paintandquest-video-webm-angel");
          document.querySelector("#paintandquest-video-webm-angel").play();
        }
      });

      setTimeout(() => {
        done();
      }, 500);
    }
    portfolio.setAttribute("position", "0 " + y + " -0.01");
  }, 10);
}

const showAvatar = (onDone) => {
  const avatar = document.querySelector("#avatar");
  let z = -0.3;
  const id = setInterval(() => {
    z += 0.008;
    if (z >= 0.3) {
      clearInterval(id);
      onDone();
    }
    avatar.setAttribute("position", "0 -0.25 " + z);
  }, 10);
}

AFRAME.registerComponent('angelTarget', {
  init: function () {
    this.el.addEventListener('targetFound', event => {
      console.log("target found");
      showAvatar(() => {
        setTimeout(() => {
          showPortfolio(() => {
            setTimeout(() => {
              showInfo();
            }, 300);
          });
        }, 300);
      });
    });
    this.el.addEventListener('targetLost', event => {
      console.log("target found");
      targetLost();
    });
    //this.el.emit('targetFound');
  }
});
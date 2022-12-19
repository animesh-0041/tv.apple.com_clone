imageSlidergrid();
function imageSlidergrid() {
  document.addEventListener("click", (e) => {
    let handle;
    if (e.target.matches(".handle")) {
      handle = e.target;
    } else {
      handle = e.target.closest(".handle");
    }
    if (handle != null) onHandleClick(handle);
  });

  const throttleProgressBar = throttle(() => {
    document.querySelectorAll(".progress-bar").forEach(calculateProgressBar);
  }, 250);
  window.addEventListener("resize", throttleProgressBar);

  document.querySelectorAll(".progress-bar").forEach(calculateProgressBar);

  function calculateProgressBar(progressBar) {
    progressBar.innerHTML = "";
    const slider = progressBar.closest(".row").querySelector(".slider");
    const itemCount = slider.children.length;
    const itemsPerScreen = parseInt(
      getComputedStyle(slider).getPropertyValue("--items-per-screen")
    );
    let sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index")
    );
    const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen);

    if (sliderIndex >= progressBarItemCount) {
      slider.style.setProperty("--slider-index", progressBarItemCount - 1);
      sliderIndex = progressBarItemCount - 1;
    }

    for (let i = 0; i < progressBarItemCount; i++) {
      const barItem = document.createElement("div");
      barItem.classList.add("progress-item");
      if (i === sliderIndex) {
        barItem.classList.add("active");
      }
      progressBar.append(barItem);
    }
  }

  function onHandleClick(handle) {
    const progressBar = handle.closest(".row").querySelector(".progress-bar");
    const slider = handle.closest(".container").querySelector(".slider");
    const sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index")
    );
    const progressBarItemCount = progressBar.children.length;
    if (handle.classList.contains("left-handle")) {
      if (sliderIndex - 1 < 0) {
        slider.style.setProperty("--slider-index", progressBarItemCount - 1);
        progressBar.children[sliderIndex].classList.remove("active");
        progressBar.children[progressBarItemCount - 1].classList.add("active");
      } else {
        slider.style.setProperty("--slider-index", sliderIndex - 1);
        progressBar.children[sliderIndex].classList.remove("active");
        progressBar.children[sliderIndex - 1].classList.add("active");
      }
    }

    if (handle.classList.contains("right-handle")) {
      if (sliderIndex + 1 >= progressBarItemCount) {
        slider.style.setProperty("--slider-index", 0);
        progressBar.children[sliderIndex].classList.remove("active");
        progressBar.children[0].classList.add("active");
      } else {
        slider.style.setProperty("--slider-index", sliderIndex + 1);
        progressBar.children[sliderIndex].classList.remove("active");
        progressBar.children[sliderIndex + 1].classList.add("active");
      }
    }
  }

  function throttle(cb, delay = 1000) {
    let shouldWait = false;
    let waitingArgs;
    const timeoutFunc = () => {
      if (waitingArgs == null) {
        shouldWait = false;
      } else {
        cb(...waitingArgs);
        waitingArgs = null;
        setTimeout(timeoutFunc, delay);
      }
    };

    return (...args) => {
      if (shouldWait) {
        waitingArgs = args;
        return;
      }

      cb(...args);
      shouldWait = true;
      setTimeout(timeoutFunc, delay);
    };
  }
}

//faq javascrip here
faq();
function faq() {
  let accordioItemHeader = document.querySelectorAll(".accordion-item-header");
  accordioItemHeader.forEach((accordioItemHeader) => {
    accordioItemHeader.addEventListener("click", (event) => {
      accordioItemHeader.classList.toggle("active");
      const accordionItemBody = accordioItemHeader.nextElementSibling;
      if (accordioItemHeader.classList.contains("active")) {
        accordionItemBody.style = accordionItemBody.scrollHeight + "px";
      } else {
        accordionItemBody.style.maxHeight = 0;
      }
    });
  });
}

// sign in logic

let signInBtn = document.getElementById("sign-in-btn");
let signInFormContainer = document.querySelector(".sign-in-form-container");
let overLap = document.querySelector(".over-lap");
signin();
function signin() {
  signInBtn.addEventListener("click", () => {
    overLap.classList.add("show-over-lap");
    signInFormContainer.classList.add("active-show-sign-form");
    signInFormContainer.classList.remove("close-animate");
    document.body.style.overflowY = "hidden";
  });
}
let closBtn = document.getElementById("close");
// clos();

closBtn.addEventListener("click", () => {
  cross();
});

function cross() {
  overLap.classList.remove("show-over-lap");
  signInFormContainer.classList.remove("active-show-sign-form");
  signInFormContainer.classList.add("close-animate");
  document.body.style.overflowY = "scroll";
}

function newAccount(e) {
  e.preventDefault();
  // newCreate();

}

// sign up free trial

let signUpbtn = document.getElementById("strat-free-trial-btn");
let signUpFormContainer = document.querySelector(".sign-up-form-container");
let overLap2 = document.querySelector(".over-lap");
signup();
function signup() {
  signUpbtn.addEventListener("click", () => {
    overLap.classList.add("show-over-lap");
    signUpFormContainer.classList.add("active-show-sign-form");
    signUpFormContainer.classList.remove("close-animate");
    document.body.style.overflowY = "hidden";
  });
}
// close
let clos2Btn = document.getElementById("close2");

clos2Btn.addEventListener("click", () => {
  close2();
});

function close2() {
  overLap.classList.remove("show-over-lap");
  signUpFormContainer.classList.remove("active-show-sign-form");
  signUpFormContainer.classList.add("close-animate");
  document.body.style.overflowY = "scroll";
}

//create apple account
newCreate();

function newCreate() {
  let obj = {};
  let getdataArray = JSON.parse(localStorage.getItem("apple-id")) || [];

  let createAccount = document.getElementById("create-account");
  createAccount.addEventListener("click", () => {
    overLap.classList.remove("show-over-lap");
    signUpFormContainer.classList.remove("active-show-sign-form");
    signUpFormContainer.classList.add("close-animate");
    document.body.style.overflowY = "scroll";

    createAccountFormShow();
  });

  let createAccountFormDisply = document.querySelector(
    ".create-apple-id-container"
  );
  function createAccountFormShow() {
    overLap.classList.add("show-over-lap");
    createAccountFormDisply.classList.add("active-create-account-form-show");
    document.body.style.overflowY = "hidden";
  }

  let clos3Btn = document.getElementById("close3");

  clos3Btn.addEventListener("click", () => {
    close3();
  });
  function close3() {
    overLap.classList.remove("show-over-lap");
    createAccountFormDisply.classList.remove("active-create-account-form-show");
    createAccountFormDisply.classList.add("close-animate");
    document.body.style.overflowY = "scroll";
  }

  let paymentPage = document.querySelector(".payment");
  let submitdata = document.getElementById("continue");
  submitdata.addEventListener("click", () => {
    if (alreadyExistAccount()) {
      alert("Already have account to this email");
      close3();
    } else {
      getDataCreateAplleId();
    }
  });

  function getDataCreateAplleId() {
    let getdata = document.getElementById("getdata");
    if (
      getdata.email.value == "" ||
      getdata.password.value == "" ||
      getdata.firstName.value == "" ||
      getdata.country.value == "" ||
      getdata.lastName.value == "" ||
      getdata.date.value == "" ||
      getdata.check.checked == false
    ) {
      alert("somthing wrong fill required!");
    } else {
      // obj = {
      //   email: getdata.email.value,
      //   password: getdata.password.value,
      //   firstName: getdata.firstName.value,
      //   lastName: getdata.lastName.value,
      //   country: getdata.country.value,
      //   date: getdata.date.value,
      // };

      //appear payment page in screen

      overLap.classList.remove("show-over-lap");
      createAccountFormDisply.classList.remove(
        "active-create-account-form-show"
      );
      createAccountFormDisply.classList.add("close-animate");
      document.body.style.overflowY = "scroll";
      paymentPage.classList.add("payment-page-show");
    }
  }

  //

  paymentPageCloseBtn();
  function paymentPageCloseBtn() {
    let close4 = document.getElementById("close4");
    close4.addEventListener("click", () => {
      overLap.classList.remove("show-over-lap");
      paymentPage.classList.remove("payment-page-show");
      paymentPage.classList.add("close-animate");
      document.body.style.overflowY = "scroll";
    });
  }

  let storeData = document.getElementById("subscribe");
  let pay = document.getElementById("pay");
  storeAllData();
  function storeAllData() {
    storeData.addEventListener("click", () => {
      obj = {
        // basic details every person
        email: getdata.email.value,
        password: getdata.password.value,
        firstName: getdata.firstName.value,
        lastName: getdata.lastName.value,
        country: getdata.country.value,
        date: getdata.date.value,
        // payment page details
        cardfName: pay.cardfName.value,
        cardlName: pay.cardlName.value,
        cardNumber: pay.cardNumber.value,
        cardMonth: pay.cardMonth.value,
        cvv: pay.cvv.value,
        street: pay.street.value,
        state: pay.state.value,
        zip: pay.zip.value,
      };
      getdataArray.push(obj);
      localStorage.setItem("apple-id", JSON.stringify(getdataArray));

      overLap.classList.remove("show-over-lap");
      paymentPage.classList.remove("payment-page-show");
      paymentPage.classList.add("close-animate");
      document.body.style.overflowY = "scroll";
      alert("Account has been created" + "\n" + "Payment Successfull");
      open("./search.html");
    });
  }

  function alreadyExistAccount() {
    for (let i = 0; i < getdataArray.length; i++) {
      if (getdata.email.value == getdataArray[i].email) {
        return true;
      }
    }
    return false;
  }
}

// sign in method
let signEmail = document.getElementById("sign-email");
let signPassword = document.getElementById("sign-password");
let submit = document.querySelector(".arrow");
submit.addEventListener("click", () => {
  signinWithAppleID();
});
function signinWithAppleID() {
  let c = 0;
  getdataArray.forEach((e) => {
    if (signEmail.value == e.email && signPassword.value == e.password) {
      c = 1;
    }
  });
  if (c == 1) {
    alert("SignIn Successful");
    cross();
  } else {
    alert("Invalid Apple ID and Password");
    signEmail.value = "";
    signPassword.value = "";
  }
}

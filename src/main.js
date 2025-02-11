import "./style.css";

const downloadBtn = document.querySelector(".download-btn");

const handleDownload = () => {
  window.open(
    "https://ua.tribuna.com/betting/blogs/3091708-obzor-igry-gates-of-olympus/",
    "_blank"
  );
};

downloadBtn.addEventListener("click", handleDownload);

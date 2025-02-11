import "./style.css";

const downloadBtn = document.querySelector(".download-btn");

const handleDownload = () => {
  window.open(
    "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiSlZ2DsruLAxWsqIMHHf0DIi8YABAAGgJlZg&ae=2&aspm=1&co=1&ase=5&gclid=CjwKCAiAh6y9BhBREiwApBLHCx35zb9iyMX8l_ZoqMs6jwMJB63drdVUHfWxO7aXgp7kA_UT0XMBSRoCLqEQAvD_BwE&ei=oCOrZ-zDNqerxc8P9ZnYiAo&ohost=www.google.com&cid=CAESVuD2_WMLndx_Sn3vyoSSqNfjSkHaAgcLcxaG6qFy16DDh46JazIImkbBmkaz8j6B6ZdT8XzcBHJA9Wey74Yo1LP32CqgCc-lbi718LQmnPjcuDN3x3TR&sig=AOD64_2UBc6XrF5RU3-9r3-68rtjKf5RDA&q&sqi=2&adurl&ved=2ahUKEwjsk5eDsruLAxWnVfEDHfUMFqEQ0Qx6BAgIEAE",
    "_blank"
  );
};

downloadBtn.addEventListener("click", handleDownload);
